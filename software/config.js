// Datos públicos del proyecto de Supabase "matedev-licencias".
// La clave publicable es segura en el navegador: la base está cerrada con RLS.
export const SUPABASE_URL = "https://chfjwhfbiewewbfzhfik.supabase.co";
export const SUPABASE_KEY = "sb_publishable_SaDr9dGD4NHzJpL0lSqRow_HmeGYzYh";
export const FUNCIONES = `${SUPABASE_URL}/functions/v1`;

export const pesos = (n, moneda = "ARS") =>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: moneda, maximumFractionDigits: 0 }).format(n);

export const fecha = (iso) =>
  iso ? new Date(iso).toLocaleDateString("es-AR", { day: "numeric", month: "short", year: "numeric" }) : "—";

export function duracionTexto(plan) {
  if (plan.tipo === "suscripcion") {
    return plan.frecuencia_meses === 1 ? "por mes" : `cada ${plan.frecuencia_meses} meses`;
  }
  if (!plan.duracion_dias) return "de por vida";
  if (plan.duracion_dias % 365 === 0) return plan.duracion_dias === 365 ? "por 1 año" : `por ${plan.duracion_dias / 365} años`;
  if (plan.duracion_dias % 30 === 0) return plan.duracion_dias === 30 ? "por 1 mes" : `por ${plan.duracion_dias / 30} meses`;
  return `por ${plan.duracion_dias} días`;
}

export const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
