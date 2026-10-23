// FoldText de React Bits (variante JS + CSS), pasado a JavaScript sin React.
// Misma división en piezas, pliegue con GSAP, sombra del doblez y refold con el cursor.
// Se aplica sobre un título que ya existe: mountFoldText(elemento, opciones) parte sus textos
// y respeta lo que tenga adentro (<em>, <span>, <br>), así no se pierden los estilos.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HINGES = {
  top: { origin: '50% 0%', axis: 'rotateX', sign: -1 },
  bottom: { origin: '50% 100%', axis: 'rotateX', sign: 1 },
  left: { origin: '0% 50%', axis: 'rotateY', sign: 1 },
  right: { origin: '100% 50%', axis: 'rotateY', sign: -1 }
};

const SLATS = {
  rotateX: {
    origins: ['50% 25%', '50% 75%'],
    clips: ['inset(-40% -20% 50% -20%)', 'inset(50% -20% -40% -20%)']
  },
  rotateY: {
    origins: ['25% 50%', '75% 50%'],
    clips: ['inset(-40% 50% -40% -20%)', 'inset(-40% -20% -40% 50%)']
  }
};

const FOLD_STYLES = ['paper', 'blinds', 'flip'];
const SLAT_DELAY = 0.24;

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

// Devuelve una función para desmontarlo.
export function mountFoldText(target, options = {}) {
  const {
    splitBy = 'char',
    hinge = 'top',
    foldStyle = 'paper',
    duration = 0.65,
    stagger = 0.045,
    staggerFrom = 'start',
    foldAngle = 92,
    ease = 'power3.out',
    perspective = 700,
    creaseShading = 0.55,
    trigger = 'mount',
    loopDelay = 1.4,
    hoverRefold = false,
    refoldRadius = 140,
    refoldAngle = 45,
    fontSize,
    fontWeight,
    color
  } = options;

  const safeHinge = HINGES[hinge] ? hinge : 'top';
  const hingeConfig = HINGES[safeHinge];
  const safeStyle = FOLD_STYLES.includes(foldStyle) ? foldStyle : 'paper';
  const safeCrease = clamp(creaseShading, 0, 1);
  const safeAngle = clamp(foldAngle, 0, 180);
  const safeStagger = Math.max(0, stagger);
  const safeDelay = Math.max(0, loopDelay);
  const safeRadius = Math.max(1, refoldRadius);
  const safeRefold = clamp(refoldAngle, 0, 180);
  const startsFolded = trigger !== 'hover';

  // ---- Estructura: texto accesible + copia visual partida en piezas ----
  const text = (target.innerText || target.textContent).replace(/\s+/g, ' ').trim();
  const root = document.createElement('span');
  root.className = 'fold-text';
  if (fontSize != null) root.style.setProperty('--fold-text-font-size', typeof fontSize === 'number' ? `${fontSize}px` : fontSize);
  if (fontWeight != null) root.style.setProperty('--fold-text-font-weight', fontWeight);
  if (color != null) root.style.setProperty('--fold-text-color', color);
  root.style.setProperty('--fold-perspective', `${Math.max(120, perspective)}px`);
  const sr = document.createElement('span');
  sr.className = 'fold-text-sr-only';
  sr.textContent = text;
  const visual = document.createElement('span');
  visual.className = 'fold-text-visual';
  visual.setAttribute('aria-hidden', 'true');
  visual.append(...target.childNodes);
  root.append(sr, visual);
  target.append(root);

  const renderPiece = (content, isLine = false) => {
    const segment = document.createElement('span');
    segment.className = 'fold-text-segment';
    if (isLine) segment.setAttribute('data-fold-split', 'line');
    const piece = document.createElement('span');
    piece.className = 'fold-text-piece';
    piece.setAttribute('data-fold-hinge', safeHinge);
    piece.setAttribute('data-fold-style', safeStyle);
    if (startsFolded) piece.style.opacity = '0';
    if (safeStyle === 'blinds') {
      ['a', 'b'].forEach(name => {
        const slat = document.createElement('span');
        slat.className = 'fold-text-slat';
        if (name === 'b') slat.setAttribute('data-fold-slat', 'b');
        slat.setAttribute('data-fold-text', content);
        slat.textContent = content;
        piece.append(slat);
      });
    } else {
      piece.setAttribute('data-fold-text', content);
      piece.textContent = content;
    }
    segment.append(piece);
    return segment;
  };

  const splitText = value => {
    const out = [];
    if (splitBy === 'line') {
      value.split('\n').forEach(line => out.push(renderPiece(line || ' ', true)));
      return out;
    }
    value.split(/(\s+)/).forEach(part => {
      if (!part) return;
      if (/^\s+$/.test(part)) {
        part.split('\n').forEach((spaces, lineIndex) => {
          if (lineIndex > 0) out.push(document.createElement('br'));
          if (spaces) out.push(document.createTextNode(spaces));
        });
        return;
      }
      if (splitBy === 'word') {
        out.push(renderPiece(part));
        return;
      }
      const word = document.createElement('span');
      word.className = 'fold-text-word';
      Array.from(part).forEach(char => word.append(renderPiece(char)));
      out.push(word);
    });
    return out;
  };

  const walk = node => {
    Array.from(node.childNodes).forEach(child => {
      if (child.nodeType === Node.TEXT_NODE) {
        if (child.textContent) child.replaceWith(...splitText(child.textContent));
      } else if (child.nodeType === Node.ELEMENT_NODE && child.tagName !== 'BR') {
        walk(child);
      }
    });
  };
  walk(visual);

  const elements = Array.from(root.querySelectorAll('.fold-text-piece'));
  if (!elements.length) return () => {};

  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const { axis, sign, origin } = hingeConfig;
  const slats = SLATS[axis];
  const unfoldEase = gsap.parseEase(reduceMotion ? 'power1.out' : ease) || gsap.parseEase('power3.out');
  const foldEase = gsap.parseEase(reduceMotion ? 'power1.in' : 'power2.in');
  const angle = reduceMotion ? 0 : safeStyle === 'flip' ? 180 : safeAngle;
  const crease = reduceMotion ? 0 : safeCrease;
  const refold = hoverRefold && !reduceMotion ? safeRefold : 0;
  const lift = safeStyle === 'flip' && !reduceMotion ? 0.45 : 0;
  const unfoldDuration = reduceMotion ? Math.min(duration, 0.22) : duration;
  const staggerVars = { each: reduceMotion ? Math.min(safeStagger, 0.02) : safeStagger, from: staggerFrom };

  const pieces = elements.map(element => {
    const parts = safeStyle === 'blinds' ? Array.from(element.children) : [element];
    if (safeStyle === 'blinds') {
      element.style.opacity = '1';
      parts.forEach((part, index) => {
        part.style.transformOrigin = slats.origins[index];
        if (index > 0) part.style.clipPath = slats.clips[index];
      });
    } else {
      element.style.transformOrigin = safeStyle === 'flip' ? '50% 50%' : origin;
      element.style.backfaceVisibility = safeStyle === 'flip' ? 'visible' : '';
    }
    return { element, parts, t: startsFolded ? 0 : 1, f: 0, r: 0, aim: 0 };
  });

  const shade = (progress, tilt) => String(crease * clamp(1 - progress + tilt / 90, 0, 1));

  const render = () => {
    pieces.forEach(piece => {
      const tilt = piece.r * refold;

      if (safeStyle === 'blinds') {
        let resting = tilt < 0.05;
        piece.parts.forEach((part, index) => {
          const offset = index * SLAT_DELAY;
          const open = unfoldEase(clamp((piece.t - offset) / (1 - SLAT_DELAY), 0, 1));
          const close = foldEase(clamp((piece.f - offset) / (1 - SLAT_DELAY), 0, 1));
          const progress = open * (1 - close);
          if (Math.abs(1 - progress) > 0.002) resting = false;
          part.style.transform = `${axis}(${sign * ((1 - progress) * angle + tilt)}deg)`;
          part.style.opacity = String(clamp(progress, 0, 1));
          part.style.setProperty('--fold-crease', shade(progress, tilt));
        });
        piece.parts[0].style.clipPath = resting ? 'none' : slats.clips[0];
        piece.parts[1].style.visibility = resting ? 'hidden' : 'visible';
        return;
      }

      const progress = unfoldEase(piece.t) * (1 - foldEase(piece.f));
      const rise = lift * Math.sin(Math.PI * clamp(progress, 0, 1));
      const turn = `${axis}(${sign * ((1 - progress) * angle + tilt)}deg)`;
      piece.element.style.transform = rise > 0.001 ? `translateZ(${rise}em) ${turn}` : turn;
      piece.element.style.opacity = String(clamp(progress, 0, 1));
      piece.element.style.setProperty('--fold-crease', shade(progress, tilt));
    });
  };

  let timeline = null;
  let scrollTrigger = null;

  const play = loop => {
    timeline?.kill();
    timeline = gsap.timeline({ onUpdate: render, ...(loop ? { repeat: -1, repeatDelay: 0.35 } : {}) });
    timeline.fromTo(pieces, { t: 0, f: 0 }, { t: 1, duration: unfoldDuration, ease: 'none', stagger: staggerVars });
    if (loop) {
      timeline.to(pieces, { f: 1, duration: unfoldDuration * 0.75, ease: 'none', stagger: staggerVars }, `+=${safeDelay}`);
    }
    render();
  };

  const handleEnter = () => play(false);

  if (trigger === 'hover') {
    render();
    root.addEventListener('mouseenter', handleEnter);
  } else if (trigger === 'scroll') {
    render();
    scrollTrigger = ScrollTrigger.create({ trigger: root, start: 'top 82%', once: true, onEnter: handleEnter });
  } else {
    play(trigger === 'loop');
  }

  let pointer = null;
  let centers = null;
  let measured = null;
  let relaxing = false;

  const measure = box => {
    centers = pieces.map(piece => {
      const rect = piece.element.parentElement.getBoundingClientRect();
      return { x: rect.left - box.left + rect.width / 2, y: rect.top - box.top + rect.height / 2 };
    });
    measured = { width: box.width, height: box.height };
  };

  const relax = (time, deltaTime) => {
    const step = Math.min(deltaTime, 64) / 1000;
    let moving = false;
    pieces.forEach(piece => {
      const rate = piece.aim > piece.r ? 14 : 6;
      piece.r += (piece.aim - piece.r) * (1 - Math.exp(-rate * step));
      if (Math.abs(piece.aim - piece.r) > 0.001) moving = true;
      else piece.r = piece.aim;
    });
    render();
    if (!moving) {
      gsap.ticker.remove(relax);
      relaxing = false;
    }
  };

  const aim = () => {
    const box = root.getBoundingClientRect();
    const near =
      pointer &&
      pointer.x > box.left - safeRadius &&
      pointer.x < box.right + safeRadius &&
      pointer.y > box.top - safeRadius &&
      pointer.y < box.bottom + safeRadius;
    if (near && (!centers || Math.abs(box.width - measured.width) + Math.abs(box.height - measured.height) > 1)) {
      measure(box);
    }
    let changed = false;
    pieces.forEach((piece, index) => {
      let value = 0;
      if (near) {
        const center = centers[index];
        const distance = Math.hypot(box.left + center.x - pointer.x, box.top + center.y - pointer.y) / safeRadius;
        if (distance < 1) value = 1 - distance * distance * (3 - 2 * distance);
      }
      if (value !== piece.aim) changed = true;
      piece.aim = value;
    });
    if (changed && !relaxing) {
      relaxing = true;
      gsap.ticker.add(relax);
    }
  };

  const handleMove = event => {
    pointer = { x: event.clientX, y: event.clientY };
    aim();
  };

  const handleLeave = () => {
    pointer = null;
    aim();
  };

  const handleScroll = () => {
    if (pointer) aim();
  };

  if (refold) {
    window.addEventListener('pointermove', handleMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true, capture: true });
    document.documentElement.addEventListener('pointerleave', handleLeave);
  }

  return () => {
    root.removeEventListener('mouseenter', handleEnter);
    window.removeEventListener('pointermove', handleMove);
    window.removeEventListener('scroll', handleScroll, { capture: true });
    document.documentElement.removeEventListener('pointerleave', handleLeave);
    gsap.ticker.remove(relax);
    scrollTrigger?.kill();
    timeline?.kill();
    gsap.killTweensOf(pieces);
  };
}
