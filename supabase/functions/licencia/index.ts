// El software llama acá para activar, validar o liberar una key.
// POST { accion: "activar" | "validar" | "liberar", key, producto, equipo_id, equipo_nombre?, minutos? }
// La respuesta viene firmada (Ed25519) para que el programa pueda confiar en ella sin internet por unos días.
import { cors, db, firmar, json } from "../_shared/lib.ts";

const DIAS_OFFLINE = Number(Deno.env.get("LICENCIA_DIAS_OFFLINE") ?? "3");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "método no permitido" }, 405);

  const b: any = await req.json().catch(() => ({}));
  const accion = ["activar", "validar", "liberar"].includes(b.accion) ? b.accion : "validar";
  const key = typeof b.key === "string" ? b.key.trim().toUpperCase() : "";
  const producto = typeof b.producto === "string" ? b.producto.trim().toLowerCase() : null;
  const equipo = typeof b.equipo_id === "string" ? b.equipo_id.trim().slice(0, 200) : "";
  if (!/^MATE(-[A-Z0-9]{4}){3}$/.test(key)) return json({ valida: false, motivo: "formato", mensaje: "La key no tiene el formato correcto." }, 400);
  if (!equipo) return json({ valida: false, motivo: "sin_equipo", mensaje: "Falta el identificador del equipo." }, 400);

  const { data, error } = await db().rpc("chequear_licencia", {
    p_key: key, p_producto: producto, p_equipo: equipo,
    p_equipo_nombre: typeof b.equipo_nombre === "string" ? b.equipo_nombre : null,
    p_accion: accion, p_minutos: Number.isFinite(b.minutos) ? Math.round(b.minutos) : 0,
  });
  if (error) {
    console.error(error);
    return json({ valida: false, motivo: "error", mensaje: "No se pudo verificar la licencia." }, 500);
  }

  const ahora = new Date();
  const offline = new Date(ahora.getTime() + DIAS_OFFLINE * 86400000);
  const hasta = data.valida && data.vence && new Date(data.vence) < offline ? new Date(data.vence) : offline;
  const firmado = await firmar({
    key, producto, equipo_id: equipo, valida: !!data.valida, estado: data.estado ?? data.motivo,
    vence: data.vence ?? null, emitido: ahora.toISOString(), valido_hasta: hasta.toISOString(),
  });
  return json({ ...data, ...firmado });
});
