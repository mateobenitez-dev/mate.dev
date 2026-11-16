// Intro animada de la home (mismo concepto que las webs de Juanse y Cristian, adaptado a mate.dev):
//  1. El contorno del cuadrado se dibuja en rojo mientras carga la página (hace de barra de carga, con %).
//  2. El cuadrado se rellena, la "m" entra deslizándose desde la izquierda (primero el trazo, después
//     el relleno) y el punto rojo cae en su lugar. Destello y entra "DESARROLLADOR DE SOFTWARE".
//  3. El logo respira despacio. Al deslizar / scroll / tap / Enter la pantalla se abre en dos, el logo
//     vuela al de la barra de arriba y aparece el inicio.
// Desde la 2ª visita es más corta y entra sola (localStorage).
import { gsap } from 'gsap';

const SEEN_KEY = 'matedev-intro-visto';

function prepareDraw(el) {
  const len = el.getTotalLength();
  el.style.strokeDasharray = `${len}`;
  el.style.strokeDashoffset = `${len}`;
  return len;
}

export function mountIntro() {
  const el = document.getElementById('intro');
  if (!el) return;
  window.__introStarted = true;

  const $ = s => el.querySelector(s);
  const logo = $('[data-logo]');
  const ring = $('[data-i="ring"]');
  const box = $('[data-i="box"]');
  const m = $('[data-i="m"]');
  const dot = $('[data-i="dot"]');
  const tag = $('[data-tag]');
  const tagText = $('[data-tag-text]');
  const tagLines = el.querySelectorAll('[data-tag-line]');
  const pct = $('[data-pct]');
  const flash = $('[data-flash]');
  const enter = $('[data-enter]');
  const halves = el.querySelectorAll('[data-half]');

  let seen = false;
  try { seen = localStorage.getItem(SEEN_KEY) === '1'; } catch {}
  const inApp = /Instagram|FBAN|FBAV|WhatsApp/i.test(navigator.userAgent); // mucha gente llega desde IG o WhatsApp
  const minLoad = seen ? 0.7 : inApp ? 1.8 : 2.4;
  const k = seen ? 0.55 : 1; // factor de velocidad

  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
  let ready = false;
  let leaving = false;
  let breathe = null;

  // Estado inicial
  const ringLen = prepareDraw(ring);
  prepareDraw(m);
  gsap.set(box, { opacity: 0 });
  gsap.set(m, { fillOpacity: 0, x: -34 });
  gsap.set(dot, { y: -46, opacity: 0 });
  gsap.set(tagText, { opacity: 0, y: 14, clipPath: 'inset(0 50% 0 50%)' });
  gsap.set(tagLines, { scaleX: 0 });
  gsap.set(logo, { autoAlpha: 1 });
  gsap.set(tag, { autoAlpha: 1 });

  // 1. Contorno = barra de carga: avanza con la carga real pero nunca más rápido que minLoad.
  const start = performance.now();
  const progress = { v: 0 };
  let pageLoaded = document.readyState === 'complete';
  const onLoad = () => (pageLoaded = true);
  window.addEventListener('load', onLoad);
  const tick = () => {
    const byTime = Math.min((performance.now() - start) / 1000 / minLoad, 1);
    const target = pageLoaded ? byTime : Math.min(byTime, 0.85);
    progress.v += (target - progress.v) * 0.1;
    ring.style.strokeDashoffset = `${ringLen * (1 - progress.v)}`;
    pct.textContent = String(Math.round(progress.v * 100)).padStart(2, '0');
    if (progress.v > 0.995) {
      gsap.ticker.remove(tick);
      window.removeEventListener('load', onLoad);
      ring.style.strokeDashoffset = '0';
      pct.textContent = '100';
      gsap.to(pct, { autoAlpha: 0, duration: 0.5, delay: 0.15 });
      reveal();
    }
  };
  gsap.ticker.add(tick);

  // 2. El cuadrado se rellena, la "m" se desliza dibujándose y cae el punto.
  function reveal() {
    gsap.timeline({ defaults: { ease: 'power3.inOut' } })
      .to(box, { opacity: 1, duration: 1.1 * k }, 0)
      .to(ring, { opacity: 0, duration: 1.1 * k }, 0.3 * k)
      .to(m, { strokeDashoffset: 0, x: 0, duration: 1.6 * k }, 0.2 * k)
      .to(m, { fillOpacity: 1, duration: 0.7 * k, ease: 'power2.out' }, 1.4 * k)
      .to(dot, { y: 0, opacity: 1, duration: 0.9 * k, ease: 'back.out(2.2)' }, 1.55 * k)
      .fromTo(flash, { opacity: 0.12 }, { opacity: 0, duration: 1.1, ease: 'power2.out', immediateRender: false }, 2.15 * k)
      .fromTo(logo, { scale: 1.05 }, { scale: 1, duration: 0.8, ease: 'back.out(2.4)', immediateRender: false }, 2.15 * k)
      .to(tagLines, { scaleX: 1, duration: 0.8 * k, ease: 'power2.out' }, 2.3 * k)
      .to(tagText, { opacity: 1, y: 0, clipPath: 'inset(0 0% 0 0%)', duration: 1.1 * k, ease: 'expo.out' }, 2.3 * k)
      .add(() => { breathe = gsap.to(logo, { scale: 1.025, duration: 1.6, repeat: -1, yoyo: true, ease: 'sine.inOut' }); })
      .add(() => {
        ready = true;
        if (seen) return exit();
        gsap.to(enter, { autoAlpha: 1, duration: 0.8 });
      }, seen ? '+=0.4' : '+=0.9');
  }

  // 3. Salida: se abre la pantalla y el logo vuela a la barra de arriba.
  function exit() {
    if (leaving) return;
    leaving = true;
    breathe?.kill();
    removeListeners();
    gsap.set(logo, { scale: 1 });

    const from = logo.getBoundingClientRect();
    const fromBox = box.getBoundingClientRect();
    const target = document.querySelector('.top .card-nav__logo .l-box') || document.querySelector('.top .l-box');
    const to = target?.getBoundingClientRect();
    const heroBits = document.querySelectorAll('.hero .eyebrow, .hero .ctas, .hero-card');

    const tl = gsap.timeline({
      onComplete: () => {
        try { localStorage.setItem(SEEN_KEY, '1'); } catch {}
        document.documentElement.classList.remove('intro-on', 'intro-leaving');
        el.remove();
        window.dispatchEvent(new Event('matedev:intro-done'));
      }
    });
    tl.to([enter, tag], { autoAlpha: 0, duration: 0.4 }, 0)
      .to('[data-grain]', { opacity: 0, duration: 1.2 }, 0.2)
      .to(halves[0], { yPercent: -100, duration: 1.7, ease: 'expo.inOut' }, 0.3)
      .to(halves[1], { yPercent: 100, duration: 1.7, ease: 'expo.inOut' }, 0.3)
      .add(() => {
        document.documentElement.classList.add('intro-leaving');
        window.dispatchEvent(new Event('matedev:intro-open'));
      }, 0.7);

    if (to && to.width > 0 && fromBox.width > 0) {
      // Que el cuadrado de la intro termine exactamente sobre el cuadrado del logo de arriba
      const s = to.width / fromBox.width;
      const x = to.left - from.left - (fromBox.left - from.left) * s;
      const y = to.top - from.top - (fromBox.top - from.top) * s;
      tl.to(logo, { x, y, scale: s, duration: 1.8, ease: 'expo.inOut' }, 0)
        .to(logo, { autoAlpha: 0, duration: 0.35 }, 1.75);
    } else {
      tl.to(logo, { autoAlpha: 0, duration: 0.6 }, 0);
    }
    if (heroBits.length) tl.from(heroBits, { autoAlpha: 0, y: 26, duration: 1.1, stagger: 0.12, ease: 'power3.out' }, 1.2);
  }

  // Disparadores: scroll, deslizar hacia arriba, teclado o tap
  let touchY = 0;
  const onWheel = e => ready && e.deltaY > 0 && exit();
  const onTouchStart = e => (touchY = e.touches[0].clientY);
  const onTouchMove = e => ready && touchY - e.touches[0].clientY > 30 && exit();
  const onKey = e => {
    if (ready && ['ArrowDown', 'PageDown', ' ', 'Enter'].includes(e.key)) { e.preventDefault(); exit(); }
  };
  const onClick = () => ready && exit();
  function removeListeners() {
    window.removeEventListener('wheel', onWheel);
    window.removeEventListener('touchstart', onTouchStart);
    window.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('keydown', onKey);
    el.removeEventListener('click', onClick);
  }
  window.addEventListener('wheel', onWheel, { passive: true });
  window.addEventListener('touchstart', onTouchStart, { passive: true });
  window.addEventListener('touchmove', onTouchMove, { passive: true });
  window.addEventListener('keydown', onKey);
  el.addEventListener('click', onClick);
}
