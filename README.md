# mate.dev

Web personal de Mate: servicios de desarrollo web, portfolio y contacto por WhatsApp.

Es un sitio estático (HTML + CSS + JS). Se publica con GitHub Pages desde la rama `main`.

## Efectos

Los efectos vienen de componentes de [React Bits](https://reactbits.dev) (ElectricLogo, TargetCursor, GradualBlur y SpecularButton), pasados a JavaScript sin React en `src/`. Se compilan a `assets/app.js`, que es el archivo que carga la página:

```sh
npm install
npm run build
```

Después de tocar algo en `src/`, hay que correr `npm run build` y commitear `assets/app.js`.

## Datos a completar

- `WA_NUMBER` en el script de `index.html`: número de WhatsApp en formato internacional, sin `+` ni espacios.
- `data-wa` de cada servicio recomendado: número de cada amigo.
- Proyectos reales en la sección Trabajos.
