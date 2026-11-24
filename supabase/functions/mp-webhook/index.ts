// Mercado Pago avisa acá cada pago y cada cambio de suscripción.
// Nunca confiamos en lo que llega: volvemos a consultar a Mercado Pago con el token.
import { db, json, mp, procesarPago } from "../_shared/lib.ts";

async function firmaValida(req: Request, dataId: string) {
  const secreto = Deno.env.get("MP_WEBHOOK_SECRET");
  if (!secreto) return true; // sin secreto cargado, igual se re-consulta todo a la API
  const sig = req.headers.get("x-signature") ?? "";
  const reqId = req.headers.get("x-request-id") ?? "";
  const partes = Object.fromEntries(sig.split(",").map((p) => p.trim().split("=", 2)));
  if (!partes.ts || !partes.v1) return false;
  const id = /^[a-z0-9]+$/i.test(dataId) ? dataId.toLowerCase() : dataId;
  const manifiesto = `id:${id};request-id:${reqId};ts:${partes.ts};`;
  const k = await crypto.subtle.importKey("raw", new TextEncoder().encode(secreto),
    { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const mac = new Uint8Array(await crypto.subtle.sign("HMAC", k, new TextEncoder().encode(manifiesto)));
  const hex = [...mac].map((b) => b.toString(16).padStart(2, "0")).join("");
  return hex === partes.v1;
}

Deno.serve(async (req) => {
  if (req.method !== "POST") return json({ ok: true });
  const url = new URL(req.url);
  const body: any = await req.json().catch(() => ({}));
  const tipo: string = body.type ?? url.searchParams.get("type") ?? url.searchParams.get("topic") ?? "";
  const dataId: string = String(body.data?.id ?? url.searchParams.get("data.id") ?? url.searchParams.get("id") ?? "");
  if (!tipo || !dataId) return json({ ok: true, ignorado: true });
  if (!(await firmaValida(req, dataId))) return json({ error: "firma inválida" }, 401);

  const sb = db();
  try {
    if (tipo === "payment") {
      const p = await mp(`/v1/payments/${encodeURIComponent(dataId)}`);
      const r = await procesarPago(sb, {
        paymentId: String(p.id), estado: p.status,
        ordenId: p.external_reference ?? p.metadata?.orden_id ?? null,
        preapprovalId: p.metadata?.preapproval_id ?? p.point_of_interaction?.transaction_data?.subscription_id ?? null,
        monto: p.transaction_amount, moneda: p.currency_id, email: p.payer?.email ?? null,
        detalle: { status_detail: p.status_detail, metodo: p.payment_method_id, fecha: p.date_approved },
      });
      return json(r);
    }

    if (tipo === "subscription_authorized_payment") {
      const a = await mp(`/authorized_payments/${encodeURIComponent(dataId)}`);
      if (!a.payment?.id) return json({ ok: true, accion: "sin_pago_aun" });
      let ordenId: string | null = a.external_reference ?? null;
      if (!ordenId && a.preapproval_id) {
        const s = await mp(`/preapproval/${encodeURIComponent(a.preapproval_id)}`);
        ordenId = s.external_reference ?? null;
      }
      const r = await procesarPago(sb, {
        paymentId: String(a.payment.id), estado: a.payment.status,
        ordenId, preapprovalId: a.preapproval_id ?? null,
        monto: a.transaction_amount, moneda: a.currency_id,
        detalle: { cuota: a.debit_date, status_detail: a.payment.status_detail },
      });
      return json(r);
    }

    if (tipo === "subscription_preapproval") {
      const s = await mp(`/preapproval/${encodeURIComponent(dataId)}`);
      if (s.external_reference) {
        await sb.from("ordenes").update({ mp_preapproval_id: s.id }).eq("id", s.external_reference).is("mp_preapproval_id", null);
      }
      // Si cancela, la licencia sigue hasta que vence y después no se renueva más
      if (s.status === "cancelled") {
        await sb.from("licencias").update({ notas: "Suscripción cancelada en Mercado Pago" }).eq("mp_preapproval_id", s.id);
      }
      return json({ ok: true, suscripcion: s.status });
    }

    return json({ ok: true, ignorado: tipo });
  } catch (e) {
    console.error(e);
    return json({ error: String(e) }, 500); // 500 = Mercado Pago reintenta
  }
});
