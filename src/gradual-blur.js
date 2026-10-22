// GradualBlur de React Bits (variante JS + CSS), pasado a JavaScript sin React.
// Mismas capas de backdrop-filter y máscaras; se monta con mountGradualBlur(padre, opciones).
const CURVES = {
  linear: t => t,
  bezier: t => t * t * (3 - 2 * t),
  'ease-in': t => t * t,
  'ease-out': t => 1 - (1 - t) * (1 - t),
  'ease-in-out': t => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)
};

const DIRECTIONS = { top: 'to top', bottom: 'to bottom', left: 'to left', right: 'to right' };

const clamp01 = value => Math.min(Math.max(value, 0), 1);

const toLength = value => (typeof value === 'number' ? `${value}px` : value);

const toTime = value => (typeof value === 'number' ? `${value}s` : value);

const findScroller = (container, root, target, vertical) => {
  if (container) {
    if (typeof container === 'string') return document.querySelector(container);
    return 'current' in container ? container.current : container;
  }
  if (target === 'page') return window;
  const parent = root.parentElement;
  if (!parent) return null;
  const scrolls = node => {
    const style = getComputedStyle(node);
    return /(auto|scroll|overlay)/.test(vertical ? style.overflowY : style.overflowX);
  };
  const sibling = Array.from(parent.children).find(child => child !== root && scrolls(child));
  return sibling || (scrolls(parent) ? parent : null);
};

const DEFAULTS = {
  position: 'bottom',
  target: 'parent',
  height: '6rem',
  width: undefined,
  strength: 2,
  layers: 8,
  curve: 'linear',
  exponential: true,
  opacity: 1,
  saturation: 1,
  tint: 'transparent',
  autoHide: false,
  container: undefined,
  hoverIntensity: 1,
  duration: 0.3,
  easing: 'ease-out',
  zIndex: 1000,
  className: '',
  style: undefined
};

const buildStack = o => {
  const edge = DIRECTIONS[o.position] ? o.position : 'bottom';
  const count = Math.min(Math.max(Math.round(o.layers) || 1, 1), 16);
  const shape = CURVES[o.curve] || CURVES.linear;
  const maxBlur = Math.max(o.strength, 0) * 12;
  const level = u => {
    const t = shape(clamp01(u));
    return maxBlur * (o.exponential ? (Math.pow(2, 4 * t) - 1) / 15 : t);
  };
  const boost = Math.pow(Math.max(o.saturation, 0), 1 / count);
  const fade = `${toTime(o.duration)} ${o.easing}`;
  const direction = DIRECTIONS[edge];
  const steps = [];
  for (let i = 0; i < count; i++) {
    const from = level(i / count);
    const to = level((i + 1) / count);
    const radius = Math.sqrt(Math.max(to * to - from * from, 0));
    const filter = [
      `blur(calc(${radius.toFixed(3)}px * var(--gradual-blur-reveal, 1) * var(--gradual-blur-hover, 1)))`,
      boost !== 1 ? `saturate(calc(1 + ${(boost - 1).toFixed(4)} * var(--gradual-blur-reveal, 1)))` : ''
    ]
      .filter(Boolean)
      .join(' ');
    const mask = `linear-gradient(${direction}, transparent ${((i / count) * 100).toFixed(2)}%, #000 ${(((i + 1) / count) * 100).toFixed(2)}%)`;
    steps.push({
      position: 'absolute',
      inset: '0',
      borderRadius: 'inherit',
      backdropFilter: filter,
      webkitBackdropFilter: filter,
      maskImage: mask,
      webkitMaskImage: mask,
      opacity: String(o.opacity),
      transition: `backdrop-filter ${fade}, -webkit-backdrop-filter ${fade}`
    });
  }
  const stops = Array.from({ length: 9 }, (_, k) => {
    const u = k / 8;
    const t = shape(u);
    const alpha = t * t * t * (t * (t * 6 - 15) + 10);
    return `rgba(0, 0, 0, ${alpha.toFixed(3)}) ${(u * 100).toFixed(1)}%`;
  }).join(', ');
  const tintMask = `linear-gradient(${direction}, ${stops})`;
  const wash =
    o.tint && o.tint !== 'transparent'
      ? {
          position: 'absolute',
          inset: '0',
          borderRadius: 'inherit',
          background: o.tint,
          maskImage: tintMask,
          webkitMaskImage: tintMask,
          opacity: 'calc(var(--gradual-blur-reveal, 1) * min(var(--gradual-blur-hover, 1), 1))',
          transition: `opacity ${fade}`
        }
      : null;
  return { steps, wash, edge };
};

// Agrega el overlay dentro de `parent` (o fijo al borde de la pantalla con target: 'page').
// Devuelve una función para desmontarlo.
export function mountGradualBlur(parent, options = {}) {
  const o = { ...DEFAULTS, ...options };
  const { steps, wash, edge } = buildStack(o);
  const vertical = edge === 'top' || edge === 'bottom';
  const cleanups = [];

  const root = document.createElement('div');
  root.className = `gradual-blur ${o.className}`.trim();
  root.setAttribute('aria-hidden', 'true');
  for (const layer of steps) {
    const el = document.createElement('div');
    Object.assign(el.style, layer);
    root.appendChild(el);
  }
  if (wash) {
    const el = document.createElement('div');
    Object.assign(el.style, wash);
    root.appendChild(el);
  }

  const depth = toLength(vertical ? o.height : (o.width ?? o.height));
  const span = vertical && o.width != null ? toLength(o.width) : null;
  const rounded = o.target !== 'page' && !span;
  const corner = (a, b) => (rounded && (edge === a || edge === b) ? 'inherit' : '');
  Object.assign(root.style, {
    position: o.target === 'page' ? 'fixed' : 'absolute',
    zIndex: String(o.zIndex),
    borderTopLeftRadius: corner('top', 'left'),
    borderTopRightRadius: corner('top', 'right'),
    borderBottomLeftRadius: corner('bottom', 'left'),
    borderBottomRightRadius: corner('bottom', 'right'),
    top: edge === 'bottom' ? '' : '0',
    bottom: edge === 'top' ? '' : '0',
    left: edge === 'right' ? '' : '0',
    right: edge === 'left' ? '' : '0',
    height: vertical ? depth : '',
    width: vertical ? (span ?? '') : depth,
    marginInline: span ? 'auto' : '',
    ...(o.style || {})
  });
  parent.appendChild(root);

  if (o.autoHide) {
    const scroller = findScroller(o.container, root, o.target, vertical);
    if (scroller) {
      const element = scroller instanceof Element ? scroller : null;
      const start = edge === 'top' || edge === 'left';
      const update = () => {
        const page = document.documentElement;
        const offset = element
          ? vertical
            ? element.scrollTop
            : element.scrollLeft
          : vertical
            ? window.scrollY
            : window.scrollX;
        const limit = element
          ? vertical
            ? element.scrollHeight - element.clientHeight
            : element.scrollWidth - element.clientWidth
          : vertical
            ? page.scrollHeight - window.innerHeight
            : page.scrollWidth - window.innerWidth;
        const box = root.getBoundingClientRect();
        const reach = Math.max(vertical ? box.height : box.width, 1);
        const room = start ? offset : limit - offset;
        root.style.setProperty('--gradual-blur-reveal', clamp01(room / reach).toFixed(3));
      };
      update();
      const source = element ?? window;
      source.addEventListener('scroll', update, { passive: true });
      window.addEventListener('resize', update);
      const observer = element && typeof ResizeObserver !== 'undefined' ? new ResizeObserver(update) : null;
      if (observer && element) {
        observer.observe(element);
        if (element.firstElementChild) observer.observe(element.firstElementChild);
      }
      cleanups.push(() => {
        source.removeEventListener('scroll', update);
        window.removeEventListener('resize', update);
        observer?.disconnect();
      });
    }
  }

  if (o.hoverIntensity !== 1) {
    let frame = 0;
    let inside = false;
    let point = null;
    const check = () => {
      frame = 0;
      if (!point) return;
      const box = root.getBoundingClientRect();
      const now = point.x >= box.left && point.x <= box.right && point.y >= box.top && point.y <= box.bottom;
      if (now === inside) return;
      inside = now;
      root.style.setProperty('--gradual-blur-hover', inside ? String(Math.max(o.hoverIntensity, 0)) : '1');
    };
    const onMove = event => {
      point = { x: event.clientX, y: event.clientY };
      if (!frame) frame = requestAnimationFrame(check);
    };
    const onLeave = () => {
      point = null;
      inside = false;
      root.style.setProperty('--gradual-blur-hover', '1');
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    cleanups.push(() => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      root.style.removeProperty('--gradual-blur-hover');
    });
  }

  return () => {
    cleanups.forEach(fn => fn());
    root.remove();
  };
}
