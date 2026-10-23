import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Efectos de la web. Se compila con `npm run build` a assets/app.js.
import { mountProfileCard } from './profile-card.js';
import { mountTargetCursor } from './target-cursor.js';
import { mountGradualBlur } from './gradual-blur.js';
import { applySpecular } from './specular-button.js';
import { mountReflectiveCard } from './reflective-card.js';
import { mountDotGrid } from './dot-grid.js';
import { mountCardNav } from './card-nav.js';
import { mountFoldText } from './fold-text.js';

const css = name => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

// ---- Logo eléctrico: el "m." recortado, para que el rayo recorra el cuadrado y la letra ----
const M_PATH =
  'M25.732 83.2V45.256H35.452L36.316 50.656H36.82Q38.116 48.712 39.952 47.272Q41.788 45.832 44.02 45.112Q46.252 44.392 48.772 44.392Q52.66 44.392 55.396 45.94Q58.132 47.488 59.572 50.656H60.076Q61.372 48.712 63.208 47.272Q65.044 45.832 67.312 45.112Q69.58 44.392 72.028 44.392Q75.988 44.392 78.724 45.868Q81.46 47.344 82.936 50.332Q84.412 53.32 84.412 57.928V83.2H72.604V59.728Q72.604 58.144 72.244 57.028Q71.884 55.912 71.236 55.156Q70.588 54.4 69.58 54.04Q68.572 53.68 67.42 53.68Q65.548 53.68 64.072 54.652Q62.596 55.624 61.804 57.244Q61.012 58.864 61.012 61.024V83.2H49.204V59.728Q49.204 58.144 48.844 57.028Q48.484 55.912 47.836 55.156Q47.188 54.4 46.18 54.04Q45.172 53.68 44.02 53.68Q42.148 53.68 40.672 54.652Q39.196 55.624 38.368 57.244Q37.54 58.864 37.54 61.024V83.2Z';
const LOGO_SRC = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 128 128"><path fill="#fff" fill-rule="evenodd" d="M30.4 4H97.6Q124 4 124 30.4V97.6Q124 124 97.6 124H30.4Q4 124 4 97.6V30.4Q4 4 30.4 4Z${M_PATH}M93.53 70H106.73V83.2H93.53Z"/></svg>`
)}`;

// ---- Tarjeta de presentación (ProfileCard) en el inicio ----
const heroCard = document.getElementById('hero-card');
if (heroCard) {
  const bio = document.createElement('div');
  bio.innerHTML =
    '<p><strong>Futuro Desarrollador de Software de Argentina.</strong> Construyo productos reales: tiendas online, sistemas con panel de administración y landings con animaciones. Mis últimos trabajos: BuildFit y Tesla Computación.</p>';
  mountProfileCard(heroCard, {
    avatarUrl: 'assets/mate.jpg',
    body: bio,
    name: 'Mate',
    title: 'Futuro Desarrollador de Software',
    handle: 'mateoacksbenitez-wq',
    status: 'Tomando proyectos',
    statusColor: '#4cc38a',
    contactText: 'GitHub',
    contactHref: 'https://github.com/mateoacksbenitez-wq',
    contactIcon:
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>',
    theme: 'dark',
    backdropColor: '#2b2c2f',
    radius: 18,
    holo: 0,
    glare: 0.35,
    tiltStrength: 8,
    parallax: 8,
    vars: {
      '--pc-frame': 'rgba(43, 44, 47, 0.55)',
      '--pc-tile': 'linear-gradient(180deg, #3a3b40 0%, #2b2c2f 100%)',
      '--pc-ink': '#f3f2f1',
      '--pc-muted': 'rgba(199, 199, 201, 0.82)'
    }
  });
}

const TINT = '#c94848';
// ---- Barra de arriba: CardNav flotante con las secciones en tarjetas ----
const header = document.querySelector('.top');
if (header) {
  const waHref = document.querySelector('.js-wa')?.href || '#contacto';
  const logoSvg = header.querySelector('.brand svg')?.cloneNode(true);
  const slot = document.createElement('div');
  slot.className = 'top-cardnav';
  header.replaceChildren(slot);
  header.classList.add('has-cardnav');
  mountCardNav(slot, {
    logo: logoSvg,
    logoAlt: 'mate.dev, inicio',
    logoHref: '#inicio',
    menuWords: ['Menú', 'Cerrar'],
    ariaLabel: 'Principal',
    theme: 'dark',
    surface: 'glass',
    openOn: 'click',
    cardEffect: 'rise',
    speed: 1.8,
    stagger: 0.08,
    bounce: 0.12,
    maxWidth: 1088,
    accentColor: '#c94848',
    vars: {
      '--cn-panel': 'rgba(43, 44, 47, 0.42)',
      '--cn-solid': '#2b2c2f',
      '--cn-tile': 'linear-gradient(180deg, rgba(64, 65, 70, 0.62) 0%, rgba(48, 49, 53, 0.55) 100%)',
      '--cn-text': '#f3f2f1',
      '--cn-muted': 'rgba(199, 199, 201, 0.7)',
      '--cn-ring': 'rgba(201, 72, 72, 0.8)'
    },
    cta: { label: 'WhatsApp', href: waHref, external: true },
    items: [
      {
        label: 'Servicios',
        description: 'Landing, sitio completo o app a medida.',
        links: [
          { label: 'Ver servicios', href: '#servicios' },
          { label: 'Cómo trabajo', href: '#proceso' }
        ]
      },
      {
        label: 'Trabajos',
        description: 'Proyectos reales y gente de confianza.',
        links: [
          { label: 'Mis proyectos', href: '#trabajos' },
          { label: 'Gente de confianza', href: '#recomendados' }
        ]
      },
      {
        label: 'Contacto',
        description: 'Escribime y arrancamos.',
        links: [
          { label: 'Armar mi mensaje', href: '#contacto' },
          { label: 'WhatsApp directo', href: waHref, external: true }
        ]
      }
    ]
  });
}

// ---- Títulos que se despliegan como papel (FoldText) ----
const fold = {
  foldStyle: 'paper',
  splitBy: 'char',
  hinge: 'top',
  foldAngle: 92,
  duration: 0.3,
  stagger: 0.024,
  staggerFrom: 'start',
  ease: 'power3.out',
  loopDelay: 1.4,
  hoverRefold: true,
  refoldRadius: 140,
  refoldAngle: 45,
  perspective: 700,
  creaseShading: 0.55
};
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) mountFoldText(heroTitle, { ...fold, trigger: 'mount', stagger: 0.012, duration: 0.3 });
document.querySelectorAll('main h2, .steps h3').forEach(title => mountFoldText(title, { ...fold, trigger: 'scroll', stagger: 0.012, duration: 0.28 }));
// Párrafos de intro: por palabra, si no con tantas letras tardaría una eternidad
const heroLead = document.querySelector('.hero-row > p');
if (heroLead) mountFoldText(heroLead, { ...fold, trigger: 'mount', splitBy: 'word', stagger: 0.01, duration: 0.25, foldAngle: 80 });
document.querySelectorAll('.contact .lead').forEach(p => mountFoldText(p, { ...fold, trigger: 'scroll', splitBy: 'word', stagger: 0.01, duration: 0.25, foldAngle: 80 }));

// ---- Gente de confianza: tarjetas ReflectiveCard (antes que los botones, así el de WhatsApp queda adentro) ----
document.querySelectorAll('.friend-grid .friend').forEach(card => {
  mountReflectiveCard(card, {
    theme: 'dark',
    tint: TINT,
    metalness: 1,
    roughness: 0.3,
    blurStrength: 6,
    shine: 1,
    glare: 0.5,
    width: '100%',
    height: 440,
    radius: 24,
    // Colores de la paleta: grafito #2B2C2F, grises #8B8D92 / #C7C7C9 y rojo #B23A3A
    vars: {
      '--rc-base': '#2b2c2f',
      '--rc-ink': '#f3f2f1',
      '--rc-muted': 'rgba(199, 199, 201, 0.78)',
      '--rc-tile': 'linear-gradient(180deg, #b23a3a 0%, #7a2626 100%)',
      '--rc-tile-edge': 'rgba(243, 242, 241, 0.12)',
      '--rc-tile-highlight': 'rgba(243, 242, 241, 0.22)',
      '--rc-tile-shadow': '0 6px 14px -6px rgba(122, 38, 38, 0.8)',
      '--rc-rim': 'rgba(199, 199, 201, 0.14)',
      '--rc-rim-highlight': 'rgba(243, 242, 241, 0.16)'
    }
  });
});

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
    const dark = onDark(btn) || document.documentElement.dataset.theme === 'dark' || matchMedia('(prefers-color-scheme: dark)').matches;
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

// ---- Cursor de mira (TargetCursor) en toda la página ----
mountTargetCursor({
  targetSelector: 'a, button, input, textarea, select, .chips label, [role="button"], .card-nav__link, .cursor-target, [data-cursor-label]',
  spinDuration: 0,
  hoverDuration: 0.22,
  hideDefaultCursor: true,
  matchRadius: false,
  padding: 8,
  cornerSize: 10,
  thickness: 2,
  size: 32,
  dotSize: 4,
  parallaxOn: true,
  cursorColor: '#ffffff'
});

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

// ---- Fondo de toda la web: grilla de puntos que se ilumina en rojo cerca del cursor ----
const bgBox = document.querySelector('.page-bg');
if (bgBox) mountDotGrid(bgBox);


// Calibración de ScrollTrigger en PC y celular
ScrollTrigger.refresh();
window.addEventListener('load', () => ScrollTrigger.refresh());
