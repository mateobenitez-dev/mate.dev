// Código compartido por las funciones del sistema de licencias de mate.dev
import { createClient, SupabaseClient } from "npm:@supabase/supabase-js@2.45.4";

export const SITIO = Deno.env.get("SITIO_URL") ?? "https://matedev.com.ar";
export const FUNCIONES = `${Deno.env.get("SUPABASE_URL")}/functions/v1`;

export const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

export function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...cors, "Content-Type": "application/json; charset=utf-8" },
  });
}

export function db(): SupabaseClient {
  return createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    { auth: { persistSession: false } },
  );
}

export const emailValido = (e: unknown): e is string =>
  typeof e === "string" && e.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);

// ---------- Mercado Pago ----------
export async function mp(path: string, init: RequestInit = {}) {
  const token = Deno.env.get("MP_ACCESS_TOKEN");
  if (!token) throw new Error("Falta cargar MP_ACCESS_TOKEN en los secretos de Supabase");
  const r = await fetch(`https://api.mercadopago.com${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  });
  const body = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(`Mercado Pago ${r.status} en ${path}: ${JSON.stringify(body)}`);
  return body;
}

// ---------- Firma de respuestas (Ed25519) ----------
let clavePrivada: CryptoKey | null = null;
async function clave() {
  if (clavePrivada) return clavePrivada;
  // La clave privada vive en privado.config (solo la lee service_role), nunca en el repo
  const b64 = Deno.env.get("LICENCIA_PRIVATE_KEY") ??
    (await db().rpc("config_privada", { p_clave: "licencia_private_key" })).data;
  if (!b64) return null;
  const der = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
  clavePrivada = await crypto.subtle.importKey("pkcs8", der, { name: "Ed25519" }, false, ["sign"]);
  return clavePrivada;
}

export async function firmar(datos: Record<string, unknown>) {
  const k = await clave();
  const texto = JSON.stringify(datos);
  if (!k) return { datos: texto, firma: null };
  const sig = new Uint8Array(await crypto.subtle.sign("Ed25519", k, new TextEncoder().encode(texto)));
  return { datos: texto, firma: btoa(String.fromCharCode(...sig)) };
}

// ---------- Mail con la key (Resend, opcional) ----------
export async function mandarKey(email: string, producto: string, key: string, vence: string | null) {
  const apiKey = Deno.env.get("RESEND_API_KEY");
  if (!apiKey) return false;
  const from = Deno.env.get("RESEND_FROM") ?? "mate.dev <licencias@matedev.com.ar>";
  const venceTxt = vence
    ? `Vence el ${new Date(vence).toLocaleDateString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" })}.`
    : "Es de por vida.";
  const html = `<div style="font-family:system-ui,sans-serif;max-width:480px;margin:auto;color:#2B2C2F">
    <p style="font-size:28px;font-weight:700;margin:0">m<span style="color:#B23A3A">.</span></p>
    <p>¡Gracias por tu compra de <b>${producto}</b>!</p>
    <p>Esta es tu key:</p>
    <p style="font-family:ui-monospace,monospace;font-size:22px;letter-spacing:2px;background:#F3F2F1;padding:14px 18px;border-radius:10px;border-left:4px solid #B23A3A">${key}</p>
    <p>${venceTxt} Pegala en el programa para activarlo.</p>
    <p style="color:#8B8D92;font-size:13px">Cualquier duda respondé este mail o escribime por WhatsApp desde matedev.com.ar.</p></div>`;
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [email], subject: `Tu key de ${producto}`, html }),
  });
  return r.ok;
}

export async function clienteId(sb: SupabaseClient, email: string, nombre?: string | null) {
  const { data, error } = await sb.from("clientes")
    .upsert({ email: email.toLowerCase().trim(), ...(nombre ? { nombre } : {}) }, { onConflict: "email" })
    .select("id").single();
  if (error) throw error;
  return data.id as string;
}

// ---------- Procesar un pago aprobado: crea o extiende la licencia ----------
type Pago = {
  paymentId: string;
  estado: string; // approved, pending, rejected...
  ordenId?: string | null;
  preapprovalId?: string | null;
  monto?: number | null;
  moneda?: string | null;
  email?: string | null;
  detalle?: unknown;
};

const sumarDias = (desde: Date, dias: number) => new Date(desde.getTime() + dias * 86400000);

export async function procesarPago(sb: SupabaseClient, p: Pago) {
  // 1) Registrar el pago y "reclamarlo" una sola vez cuando está aprobado
  const fila = {
    mp_payment_id: p.paymentId, estado: p.estado, monto: p.monto ?? null,
    moneda: p.moneda ?? null, email: p.email ?? null, detalle: p.detalle ?? null,
  };
  const { data: nuevo } = await sb.from("pagos").upsert(fila, { onConflict: "mp_payment_id", ignoreDuplicates: true })
    .select("id").maybeSingle();
  let reclamado = !!nuevo && p.estado === "approved";
  if (!nuevo) {
    const { data: upd } = await sb.from("pagos").update(fila)
      .eq("mp_payment_id", p.paymentId).neq("estado", "approved").select("id").maybeSingle();
    reclamado = !!upd && p.estado === "approved";
  }

  // 2) Encontrar la orden
  let orden: any = null;
  if (p.ordenId && /^[0-9a-f-]{36}$/i.test(p.ordenId)) {
    ({ data: orden } = await sb.from("ordenes").select("*, planes(*, productos(*))").eq("id", p.ordenId).maybeSingle());
  }
  if (!orden && p.preapprovalId) {
    ({ data: orden } = await sb.from("ordenes").select("*, planes(*, productos(*))")
      .eq("mp_preapproval_id", p.preapprovalId).maybeSingle());
  }
  if (orden) await sb.from("pagos").update({ orden_id: orden.id }).eq("mp_payment_id", p.paymentId);

  if (!reclamado) {
    if (orden && orden.estado === "pendiente" && ["rejected", "cancelled"].includes(p.estado)) {
      await sb.from("ordenes").update({ estado: "rechazada" }).eq("id", orden.id);
    }
    return { ok: true, accion: "nada", estado: p.estado };
  }
  if (!orden) return { ok: false, accion: "sin_orden" };

  const plan = orden.planes;
  const producto = plan.productos;
  const ahora = new Date();

  // 3) Licencia existente (renovación o cuota de suscripción) o nueva
  let licId: string | null = orden.renovar_licencia_id ?? orden.licencia_id ?? null;
  if (!licId && (p.preapprovalId || orden.mp_preapproval_id)) {
    const { data } = await sb.from("licencias").select("id")
      .eq("mp_preapproval_id", p.preapprovalId ?? orden.mp_preapproval_id).maybeSingle();
    licId = data?.id ?? null;
  }

  let licencia: any;
  if (licId) {
    const { data: actual } = await sb.from("licencias").select("*").eq("id", licId).single();
    const base = actual.vence && new Date(actual.vence) > ahora ? new Date(actual.vence) : ahora;
    const vence = plan.duracion_dias ? sumarDias(base, plan.duracion_dias).toISOString() : null;
    ({ data: licencia } = await sb.from("licencias").update({
      vence, estado: actual.estado === "cancelada" ? "activa" : actual.estado,
      plan_id: plan.id, max_equipos: Math.max(actual.max_equipos, plan.max_equipos),
    }).eq("id", licId).select("*").single());
  } else {
    const cid = await clienteId(sb, orden.email, orden.nombre);
    const { data: key, error: kerr } = await sb.rpc("generar_key");
    if (kerr) throw kerr;
    const { data, error } = await sb.from("licencias").insert({
      key, producto_id: producto.id, plan_id: plan.id, cliente_id: cid,
      vence: plan.duracion_dias ? sumarDias(ahora, plan.duracion_dias).toISOString() : null,
      max_equipos: plan.max_equipos, dias_gracia: plan.dias_gracia, origen: "pago",
      mp_preapproval_id: p.preapprovalId ?? orden.mp_preapproval_id ?? null,
    }).select("*").single();
    if (error) throw error;
    licencia = data;
  }

  await sb.from("ordenes").update({ estado: "pagada", licencia_id: licencia.id }).eq("id", orden.id);
  await sb.from("pagos").update({ licencia_id: licencia.id }).eq("mp_payment_id", p.paymentId);
  if (!licId) await mandarKey(orden.email, producto.nombre, licencia.key, licencia.vence).catch(() => false);
  return { ok: true, accion: licId ? "extendida" : "creada", licencia: licencia.id };
}
