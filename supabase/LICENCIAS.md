# Sistema de licencias de mate.dev

Vende software desde https://matedev.com.ar/software, cobra con Mercado Pago (pago único o
suscripción), entrega una key `MATE-XXXX-XXXX-XXXX` y controla el tiempo de cada licencia.

- Proyecto de Supabase: `matedev-licencias` (ref `chfjwhfbiewewbfzhfik`, São Paulo)
- Tienda: `software/index.html` · Gracias: `software/gracias.html` · Panel: `software/admin.html`
- Funciones: `supabase/functions/` (`checkout`, `mp-webhook`, `licencia`)

## Cómo conectar un software web (SaaS) al sistema

Cada comercio que usa tu SaaS guarda **su key** en su cuenta. El backend del SaaS (nunca el
navegador) consulta la función `licencia`:

```
POST https://chfjwhfbiewewbfzhfik.supabase.co/functions/v1/licencia
Content-Type: application/json

{
  "accion": "activar",            // la primera vez que el comercio pega la key
  "key": "MATE-7K2P-QX9D-4HTW",
  "producto": "pedidos-rotiseria", // el identificador del software en el panel
  "equipo_id": "<id de la cuenta del comercio en tu SaaS>",
  "equipo_nombre": "Rotisería Don Pepe",
  "minutos": 0
}
```

Después, en cada login (o una vez por hora con la sesión abierta) mandá `"accion": "validar"`
con los mismos datos. Si querés medir tiempo de uso, mandá en `minutos` cuántos minutos pasaron
desde el último chequeo (máximo 60).

Respuesta:

```json
{
  "valida": true,
  "estado": "activa",           // activa | en_gracia
  "vence": "2026-12-24T02:44:17Z",
  "dias_restantes": 30,
  "dias_usados": 4,
  "plan": "Mensual",
  "max_equipos": 1,
  "mensaje": "Licencia activa.",
  "datos": "{...}",             // JSON firmado
  "firma": "base64..."          // firma Ed25519 de "datos"
}
```

Si `valida` es `false`, viene `motivo` (`no_existe`, `otro_producto`, `vencida`, `pausada`,
`revocada`, `limite_equipos`) y un `mensaje` listo para mostrar. En ese caso bloqueá el acceso y
mostrá un botón "Renovar" que lleve a `https://matedev.com.ar/software/`.

- `estado: "en_gracia"`: la suscripción venció hace pocos días. Dejá entrar pero mostrá un aviso.
- `max_equipos` = cuántas cuentas pueden usar la misma key. Para un SaaS, dejalo en 1.
- `accion: "liberar"` desvincula esa cuenta (por si el comercio cambia de cuenta).

### Verificar la firma (opcional, recomendado en programas de escritorio)

Clave pública Ed25519 (32 bytes en base64): `B9f5d2Q660WShw8fofxlC5SgA/aBvdq1HXtz0Cn+7jY=`

`datos` incluye `valido_hasta`: hasta esa fecha el programa puede funcionar sin internet
usando la última respuesta guardada.

```js
// Node 18+
import { createPublicKey, verify } from "node:crypto";
const raw = Buffer.from("B9f5d2Q660WShw8fofxlC5SgA/aBvdq1HXtz0Cn+7jY=", "base64");
const pub = createPublicKey({ key: Buffer.concat([Buffer.from("302a300506032b6570032100", "hex"), raw]), format: "der", type: "spki" });
const ok = verify(null, Buffer.from(r.datos), pub, Buffer.from(r.firma, "base64"));
```

## Cómo cobra

1. La tienda llama a `checkout` con el plan y el mail.
2. Pago único: Checkout Pro de Mercado Pago. Suscripción: `preapproval` (Mercado Pago cobra solo cada X meses).
3. Mercado Pago avisa a `mp-webhook`. La función vuelve a consultar el pago a Mercado Pago
   (no confía en lo que llega), y si está aprobado crea la licencia o le suma los días.
4. La página de gracias muestra la key; si está cargado `RESEND_API_KEY`, también llega por mail.

## Secretos (Supabase, Edge Functions, Secrets)

| Nombre | Para qué | Obligatorio |
| --- | --- | --- |
| `MP_ACCESS_TOKEN` | Token de Mercado Pago (Credenciales) | Sí |
| `MP_WEBHOOK_SECRET` | "Clave secreta" del webhook en Mercado Pago, para verificar avisos | Recomendado |
| `RESEND_API_KEY` | Mandar la key por mail | Opcional |
| `RESEND_FROM` | Remitente, por defecto `mate.dev <licencias@matedev.com.ar>` | Opcional |

La clave privada de firma está en la tabla `privado.config` (solo la lee `service_role`).

En Mercado Pago (Tus integraciones, tu app, Webhooks) configurá la URL
`https://chfjwhfbiewewbfzhfik.supabase.co/functions/v1/mp-webhook` con los eventos
**Pagos**, **Planes y suscripciones**.
