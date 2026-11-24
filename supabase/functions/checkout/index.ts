// POST: arranca una compra (pago único, suscripción o prueba gratis)
// GET ?orden=<id>: estado de la compra y la key cuando ya se pagó (lo usa la página de gracias)
import { clienteId, cors, db, emailValido, FUNCIONES, json, mandarKey, mp, SITIO } from "../_shared/lib.ts";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  const sb = db();

  try {
    if (req.method === "GET") {
      const id = new URL(req.url).searchParams.get("orden") ?? "";
      if (!/^[0-9a-f-]{36}$/i.test(id)) return json({ error: "orden inválida" }, 400);
      const { data: o } = await sb.from("ordenes")
        .select("estado, email, planes(nombre, productos(nombre, slug, url_descarga, url_app)), licencias!ordenes_licencia_id_fkey(key, vence)")
        .eq("id", id).maybeSingle();
      if (!o) return json({ error: "no existe" }, 404);
      const lic: any = o.estado === "pagada" ? o.licencias : null;
      const plan: any = o.planes;
      return json({
        estado: o.estado,
        producto: plan?.productos?.nombre, plan: plan?.nombre,
        url_descarga: lic ? plan?.productos?.url_descarga : null,
        url_app: lic ? plan?.productos?.url_app : null,
        key: lic?.key ?? null, vence: lic?.vence ?? null,
      });
    }

    if (req.method !== "POST") return json({ error: "método no permitido" }, 405);
    const { plan_id, email, nombre, renovar_key } = await req.json().catch(() => ({}));
    if (!emailValido(email)) return json({ error: "Poné un mail válido." }, 400);
    if (typeof plan_id !== "string") return json({ error: "Falta el plan." }, 400);
    const nom = typeof nombre === "string" ? nombre.trim().slice(0, 120) : null;

    const { data: plan } = await sb.from("planes").select("*, productos(*)")
      .eq("id", plan_id).eq("activo", true).maybeSingle();
    if (!plan || !plan.productos?.activo) return json({ error: "Ese plan no está disponible." }, 404);
    const producto = plan.productos;

    // Renovar una key existente (solo pagos únicos; la suscripción se renueva sola)
    let renovarId: string | null = null;
    if (renovar_key) {
      const { data: lic } = await sb.from("licencias").select("id, producto_id")
        .eq("key", String(renovar_key).toUpperCase().trim()).maybeSingle();
      if (!lic || lic.producto_id !== producto.id) return json({ error: "La key no corresponde a este software." }, 400);
      renovarId = lic.id;
    }

    // Prueba gratis: una por mail y por software, se entrega al instante
    if (plan.tipo === "prueba") {
      const cid = await clienteId(sb, email, nom);
      const { count } = await sb.from("licencias").select("id", { count: "exact", head: true })
        .eq("cliente_id", cid).eq("producto_id", producto.id).eq("origen", "prueba");
      if ((count ?? 0) > 0) return json({ error: "Ya usaste la prueba gratis de este software." }, 409);
      const { data: key } = await sb.rpc("generar_key");
      const vence = new Date(Date.now() + plan.duracion_dias * 86400000).toISOString();
      const { data: lic, error } = await sb.from("licencias").insert({
        key, producto_id: producto.id, plan_id: plan.id, cliente_id: cid, vence,
        max_equipos: plan.max_equipos, dias_gracia: 0, origen: "prueba",
      }).select("key, vence").single();
      if (error) throw error;
      await mandarKey(email, producto.nombre, lic.key, lic.vence).catch(() => false);
      return json({ tipo: "prueba", key: lic.key, vence: lic.vence, url_descarga: producto.url_descarga, url_app: producto.url_app });
    }

    const { data: orden, error: oerr } = await sb.from("ordenes").insert({
      plan_id: plan.id, email: email.toLowerCase().trim(), nombre: nom,
      monto: plan.precio, renovar_licencia_id: renovarId,
    }).select("id").single();
    if (oerr) throw oerr;
    const gracias = `${SITIO}/software/gracias.html?orden=${orden.id}`;

    if (plan.tipo === "unico" || renovarId) {
      const pref = await mp("/checkout/preferences", {
        method: "POST",
        body: JSON.stringify({
          items: [{
            id: plan.id, title: `${producto.nombre} · ${plan.nombre}`,
            quantity: 1, unit_price: Number(plan.precio), currency_id: plan.moneda,
          }],
          payer: { email, ...(nom ? { name: nom } : {}) },
          external_reference: orden.id,
          back_urls: { success: gracias, pending: gracias, failure: gracias },
          auto_return: "approved",
          notification_url: `${FUNCIONES}/mp-webhook?source_news=webhooks`,
          statement_descriptor: "MATEDEV",
        }),
      });
      await sb.from("ordenes").update({ mp_preference_id: pref.id }).eq("id", orden.id);
      return json({ tipo: "unico", orden: orden.id, url: pref.init_point });
    }

    // Suscripción: Mercado Pago cobra solo cada X meses
    const sus = await mp("/preapproval", {
      method: "POST",
      body: JSON.stringify({
        reason: `${producto.nombre} · ${plan.nombre}`,
        external_reference: orden.id,
        payer_email: email,
        back_url: gracias,
        status: "pending",
        auto_recurring: {
          frequency: plan.frecuencia_meses, frequency_type: "months",
          transaction_amount: Number(plan.precio), currency_id: plan.moneda,
        },
      }),
    });
    await sb.from("ordenes").update({ mp_preapproval_id: sus.id }).eq("id", orden.id);
    return json({ tipo: "suscripcion", orden: orden.id, url: sus.init_point });
  } catch (e) {
    console.error(e);
    return json({ error: "No se pudo iniciar el pago. Probá de nuevo en un rato." }, 500);
  }
});
