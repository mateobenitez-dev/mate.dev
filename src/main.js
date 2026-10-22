// Efectos de la web. Se compila con `npm run build` a assets/app.js.
import { mountElectricLogo } from './electric-logo.js';
import { mountTargetCursor } from './target-cursor.js';
import { mountGradualBlur } from './gradual-blur.js';
import { applySpecular } from './specular-button.js';

const css = name => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

// ---- Logo eléctrico: el "m." recortado, para que el rayo recorra el cuadrado y la letra ----
const M_PATH =
  'M25.732 83.2V45.256H35.452L36.316 50.656H36.82Q38.116 48.712 39.952 47.272Q41.788 45.832 44.02 45.112Q46.252 44.392 48.772 44.392Q52.66 44.392 55.396 45.94Q58.132 47.488 59.572 50.656H60.076Q61.372 48.712 63.208 47.272Q65.044 45.832 67.312 45.112Q69.58 44.392 72.028 44.392Q75.988 44.392 78.724 45.868Q81.46 47.344 82.936 50.332Q84.412 53.32 84.412 57.928V83.2H72.604V59.728Q72.604 58.144 72.244 57.028Q71.884 55.912 71.236 55.156Q70.588 54.4 69.58 54.04Q68.572 53.68 67.42 53.68Q65.548 53.68 64.072 54.652Q62.596 55.624 61.804 57.244Q61.012 58.864 61.012 61.024V83.2H49.204V59.728Q49.204 58.144 48.844 57.028Q48.484 55.912 47.836 55.156Q47.188 54.4 46.18 54.04Q45.172 53.68 44.02 53.68Q42.148 53.68 40.672 54.652Q39.196 55.624 38.368 57.244Q37.54 58.864 37.54 61.024V83.2Z';
const LOGO_SRC = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 128 128"><path fill="#fff" fill-rule="evenodd" d="M30.4 4H97.6Q124 4 124 30.4V97.6Q124 124 97.6 124H30.4Q4 124 4 97.6V30.4Q4 4 30.4 4Z${M_PATH}M93.53 70H106.73V83.2H93.53Z"/></svg>`
)}`;

const logoBox = document.querySelector('.elogo-gl');
if (logoBox) {
  const logo = mountElectricLogo(logoBox, {
    src: LOGO_SRC,
    color: '#ffe9e6',
    glowColor: '#c94848',
    scale: 0.6,
    strands: 4,
    bend: 0.6,
    crackle: 1.5,
    arcs: 1,
    speed: 2.5,
    interactive: true,
    theme: 'dark'
  });
  if (logo) logoBox.closest('.elogo').classList.add('is-live');
}

// ---- Botones: SpecularButton sobre los botones que ya existen ----
const onDark = el => !!el.closest('.hero, .contact');
document.querySelectorAll('.btn').forEach(btn => {
  if (btn.classList.contains('btn-wa')) {
    applySpecular(btn, {
      radius: 999,
      tint: css('--accent'),
      tintOpacity: 1,
      textColor: '#ffffff',
      lineColor: '#ffffff',
      baseColor: '#7a2626',
      idleIntensity: 0.35,
      proximity: 250
    });
  } else {
    const dark = onDark(btn) || matchMedia('(prefers-color-scheme: dark)').matches;
    applySpecular(btn, {
      radius: 999,
      tint: dark ? '#ffffff' : '#2b2c2f',
      tintOpacity: 0.04,
      textColor: dark ? '#f3f2f1' : '#2b2c2f',
      lineColor: dark ? '#ffffff' : '#2b2c2f',
      baseColor: dark ? '#525252' : '#c7c7c9',
      proximity: 250
    });
  }
});

// ---- Cursor de mira en compu ----
const labels = [
  ['.btn-wa', 'WhatsApp'],
  ['.f-hit', 'Abrir'],
  ['.n3', 'Ver'],
  ['.copy', 'Copiar']
];
document.querySelectorAll('a, button, .chips label, input, textarea').forEach(el => el.classList.add('cursor-target'));
labels.forEach(([sel, text]) => document.querySelectorAll(sel).forEach(el => el.setAttribute('data-cursor-label', text)));
mountTargetCursor({ spinDuration: 2, hideDefaultCursor: true, parallaxOn: true, cursorColor: '#ffffff' });

// ---- Desenfoque gradual en el borde de abajo de la pantalla ----
mountGradualBlur(document.body, {
  position: 'bottom',
  target: 'page',
  height: '6rem',
  strength: 2,
  layers: 8,
  curve: 'linear',
  exponential: true,
  tint: 'color-mix(in srgb, var(--bg) 60%, transparent)',
  autoHide: true,
  zIndex: 7
});

// ---- Fondo de la portada: líneas blancas que se curvan hacia el cursor ----
// Versión provisoria hasta integrar el componente FluxLines original.
(() => {
  const hero = document.querySelector('.hero');
  const cv = document.getElementById('flux');
  if (!hero || !cv) return;
  const ctx = cv.getContext('2d');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let W = 0, H = 0, dpr = 1, t = 0, visible = true;
  const mouse = { x: -9999, y: -9999, k: 0, tk: 0 };
  const R = 260;
  const resize = () => {
    dpr = Math.min(devicePixelRatio || 1, 2); W = hero.clientWidth; H = hero.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  const frame = () => {
    ctx.clearRect(0, 0, W, H);
    mouse.k += (mouse.tk - mouse.k) * 0.08;
    const n = Math.max(16, Math.round(W / 34)), step = 12;
    ctx.strokeStyle = '#ffffff';
    for (let i = 0; i < n; i++) {
      const base = (i + 0.5) / n * W;
      const pts = [];
      for (let y = -step; y <= H + step; y += step) {
        let x = base + 22 * Math.sin(y * 0.006 - t * 0.5 + i * 0.47) + 10 * Math.sin(y * 0.014 + t * 0.7 + i * 1.3);
        const dx = x - mouse.x, dy = y - mouse.y, d = Math.hypot(dx, dy);
        let f = 0;
        if (d < R) {
          f = Math.pow(1 - d / R, 2) * mouse.k;
          const a = Math.atan2(dy, dx) + 1.2;
          x += (mouse.x - x) * f * 0.45 + Math.cos(a) * 24 * f;
        }
        pts.push([x, y, f]);
      }
      ctx.lineWidth = 1; ctx.globalAlpha = 0.09;
      ctx.beginPath(); pts.forEach(([x, y], j) => (j ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke();
      ctx.lineWidth = 1.3;
      for (let j = 1; j < pts.length; j++) {
        const f = Math.max(pts[j][2], pts[j - 1][2]);
        if (f < 0.02) continue;
        ctx.globalAlpha = Math.min(0.9, f * 1.8);
        ctx.beginPath(); ctx.moveTo(pts[j - 1][0], pts[j - 1][1]); ctx.lineTo(pts[j][0], pts[j][1]); ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
  };
  const loop = () => { if (!visible) return; t += 0.016; frame(); requestAnimationFrame(loop); };
  hero.addEventListener('pointermove', e => {
    const r = hero.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; mouse.tk = 1;
  }, { passive: true });
  hero.addEventListener('pointerleave', () => { mouse.tk = 0; });
  new ResizeObserver(() => { resize(); if (reduce) frame(); }).observe(hero);
  new IntersectionObserver(([e]) => { const was = visible; visible = e.isIntersecting && !reduce; if (visible && !was) loop(); }).observe(hero);
  resize();
  if (reduce) { visible = false; frame(); } else loop();
})();
