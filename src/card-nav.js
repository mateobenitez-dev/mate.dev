// CardNav de React Bits (variante JS + CSS), pasado a JavaScript sin React.
// Misma estructura, resorte de apertura, efectos de tarjetas e intro; se monta con mountCardNav(contenedor, opciones).
const THEMES = {
  dark: {
    '--cn-panel': 'rgba(38, 35, 46, 0.72)',
    '--cn-solid': '#26232e',
    '--cn-edge': 'rgba(255, 255, 255, 0.08)',
    '--cn-highlight': 'rgba(255, 255, 255, 0.07)',
    '--cn-shadow': '0 24px 48px -20px rgba(0, 0, 0, 0.8), 0 6px 16px -8px rgba(0, 0, 0, 0.5)',
    '--cn-text': '#f4f4f5',
    '--cn-muted': 'rgba(244, 244, 245, 0.56)',
    '--cn-hover': 'rgba(255, 255, 255, 0.06)',
    '--cn-ring': 'rgba(244, 244, 245, 0.55)',
    '--cn-tile': 'linear-gradient(180deg, #34303d 0%, #27242f 100%)',
    '--cn-tile-rim':
      'inset 0 0 0 1px rgba(255, 255, 255, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 10px -4px rgba(0, 0, 0, 0.6)',
    '--cn-cta': 'linear-gradient(180deg, #ffffff 0%, #ebebf0 100%)',
    '--cn-cta-ink': '#121016',
    '--cn-cta-shadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 6px 16px -6px rgba(0, 0, 0, 0.6)',
    '--cn-cta-hover': 'brightness(0.94)'
  },
  light: {
    '--cn-panel': 'rgba(244, 244, 246, 0.84)',
    '--cn-solid': '#f4f4f6',
    '--cn-edge': 'rgba(24, 24, 27, 0.07)',
    '--cn-highlight': 'rgba(255, 255, 255, 0.95)',
    '--cn-shadow': '0 24px 48px -24px rgba(24, 24, 27, 0.3), 0 6px 16px -10px rgba(24, 24, 27, 0.16)',
    '--cn-text': '#18181b',
    '--cn-muted': 'rgba(24, 24, 27, 0.56)',
    '--cn-hover': 'rgba(24, 24, 27, 0.05)',
    '--cn-ring': 'rgba(24, 24, 27, 0.45)',
    '--cn-tile': 'linear-gradient(180deg, #ffffff 0%, #f8f8fa 100%)',
    '--cn-tile-rim':
      'inset 0 0 0 1px rgba(24, 24, 27, 0.07), inset 0 1px 0 rgba(255, 255, 255, 1), 0 4px 10px -5px rgba(24, 24, 27, 0.22)',
    '--cn-cta': 'linear-gradient(180deg, #2c2c31 0%, #18181b 100%)',
    '--cn-cta-ink': '#ffffff',
    '--cn-cta-shadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 6px 14px -6px rgba(24, 24, 27, 0.45)',
    '--cn-cta-hover': 'brightness(1.25)'
  }
};

const NARROW = 560;
const EASE_OUT = 'cubic-bezier(0.22, 1, 0.36, 1)';
// Ícono ArrowUpRight01 de Hugeicons (free), en línea para no sumar la dependencia
const ARROW_SVG =
  '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 7L6 18"/><path d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13"/></svg>';

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const easeOut = t => 1 - (1 - t) ** 3;

const contrastInk = color => {
  const hex = String(color || '').trim().replace('#', '');
  if (!/^([0-9a-f]{3}|[0-9a-f]{6})$/i.test(hex)) return null;
  const full = hex.length === 3 ? hex.split('').map(c => c + c).join('') : hex;
  const channel = index => {
    const value = parseInt(full.slice(index, index + 2), 16) / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  };
  const luminance = 0.2126 * channel(0) + 0.7152 * channel(2) + 0.0722 * channel(4);
  return luminance > 0.36 ? '#121016' : '#ffffff';
};

const el = (tag, className, attrs = {}) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  for (const [key, value] of Object.entries(attrs)) if (value != null) node.setAttribute(key, value);
  return node;
};

let uid = 0;

// Devuelve { setOpen, destroy }.
export function mountCardNav(container, options = {}) {
  const {
    logo,
    logoAlt = 'Logo',
    logoHref = '#',
    items = [],
    cta,
    theme = 'dark',
    surface = 'glass',
    openOn = 'click',
    cardEffect = 'rise',
    stagger = 0.12,
    bounce = 0.2,
    speed = 1,
    cardHeight = 176,
    maxWidth = 800,
    accentColor,
    menuLabel = true,
    menuWords = ['Menu', 'Close'],
    intro = true,
    defaultOpen = false,
    onOpenChange,
    onLinkClick,
    ariaLabel = 'Main',
    className = '',
    vars: extraVars = {}
  } = options;

  const s = {
    open: defaultOpen,
    cardEffect,
    stagger: clamp(stagger, 0, 0.3),
    bounce: clamp(bounce, 0, 1),
    speed: clamp(speed, 0.2, 3)
  };
  const contentId = `card-nav-${++uid}`;
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

  const palette = THEMES[theme] ?? THEMES.dark;
  const vars = {
    ...palette,
    '--cn-max': `${maxWidth}px`,
    '--cn-bar': '60px',
    '--cn-inset': '8px',
    '--cn-gap': '8px',
    '--cn-radius': '18px',
    '--cn-logo': '24px',
    '--cn-card': `${cardHeight}px`
  };
  if (surface === 'glass') vars['--cn-blur'] = 'blur(20px) saturate(1.6)';
  if (surface === 'solid') {
    vars['--cn-panel'] = palette['--cn-solid'];
    vars['--cn-blur'] = 'none';
  }
  if (accentColor) {
    vars['--cn-cta'] = accentColor;
    vars['--cn-cta-ink'] = contrastInk(accentColor) || '#ffffff';
    vars['--cn-cta-shadow'] = 'inset 0 1px 0 rgba(255, 255, 255, 0.22), 0 6px 16px -6px rgba(0, 0, 0, 0.45)';
    vars['--cn-cta-hover'] = 'brightness(1.08)';
  }
  Object.assign(vars, extraVars);

  // ---- Estructura ----
  const root = el('div', ['card-nav', className].filter(Boolean).join(' '));
  for (const [key, value] of Object.entries(vars)) root.style.setProperty(key, value);
  const panel = el('nav', 'card-nav__panel', { 'aria-label': ariaLabel });
  const bar = el('div', 'card-nav__bar');

  const menu = el('button', 'card-nav__menu', { type: 'button', 'aria-controls': contentId });
  if (!menuLabel) menu.setAttribute('data-icon-only', '');
  const burger = el('span', 'card-nav__burger', { 'aria-hidden': 'true' });
  burger.append(el('span', 'card-nav__line card-nav__line--top'), el('span', 'card-nav__line card-nav__line--bottom'));
  menu.append(burger);
  let wordOpen = null;
  let wordClose = null;
  if (menuLabel) {
    const label = el('span', 'card-nav__menu-label');
    wordOpen = el('span', 'card-nav__word card-nav__word--open');
    wordOpen.textContent = menuWords[0];
    wordClose = el('span', 'card-nav__word card-nav__word--close');
    wordClose.textContent = menuWords[1];
    label.append(wordOpen, wordClose);
    menu.append(label);
  }
  bar.append(menu);

  if (logo) {
    const logoLink = el('a', 'card-nav__logo', { href: logoHref, 'aria-label': logoAlt });
    if (typeof logo === 'string') {
      const img = el('img', null, { src: logo, alt: '', draggable: 'false' });
      logoLink.append(img);
    } else {
      logoLink.append(logo);
    }
    bar.append(logoLink);
  }

  const cardRefs = [];
  const tabbables = [];
  let setOpen = () => {};

  const anchor = (target, className) => {
    let node;
    if (target.href) {
      node = el('a', className, { href: target.href });
      if (target.external) {
        node.target = '_blank';
        node.rel = 'noopener';
      }
    } else {
      node = el('button', className, { type: 'button' });
    }
    if (target.className) node.classList.add(...target.className.split(' '));
    return node;
  };

  const ctaButton = wide => {
    const node = anchor(cta, wide ? 'card-nav__cta card-nav__cta--wide' : 'card-nav__cta');
    node.textContent = cta.label;
    node.addEventListener('click', event => {
      cta.onClick?.(event);
      if (wide) setOpen(false);
    });
    if (wide) tabbables.push(node);
    return node;
  };

  let ctaInBar = null;
  if (cta) {
    ctaInBar = ctaButton(false);
    bar.append(ctaInBar);
  }

  const content = el('div', 'card-nav__content', { id: contentId });
  const cards = el('div', 'card-nav__cards');
  items.forEach(item => {
    const card = el('div', 'card-nav__card');
    if (item.bgColor) {
      card.setAttribute('data-tinted', '');
      card.style.background = item.bgColor;
      if (item.textColor) card.style.color = item.textColor;
    }
    const head = el('div', 'card-nav__card-head');
    const label = el('span', 'card-nav__label');
    label.textContent = item.label;
    head.append(label);
    if (item.description) {
      const description = el('p', 'card-nav__description');
      description.textContent = item.description;
      head.append(description);
    }
    const list = el('ul', 'card-nav__links');
    (item.links ?? []).forEach(link => {
      const li = el('li');
      const node = anchor(link, 'card-nav__link');
      if (link.ariaLabel) node.setAttribute('aria-label', link.ariaLabel);
      const arrow = el('span', 'card-nav__arrow', { 'aria-hidden': 'true' });
      arrow.innerHTML = ARROW_SVG + ARROW_SVG;
      arrow.children[0].setAttribute('class', 'card-nav__arrow-icon card-nav__arrow-icon--out');
      arrow.children[1].setAttribute('class', 'card-nav__arrow-icon card-nav__arrow-icon--in');
      node.append(arrow, document.createTextNode(link.label));
      node.addEventListener('click', event => {
        onLinkClick?.(link, item, event);
        setOpen(false);
      });
      tabbables.push(node);
      li.append(node);
      list.append(li);
    });
    card.append(head, list);
    cards.append(card);
    cardRefs.push(card);
  });
  content.append(cards);
  let ctaWrap = null;
  if (cta) {
    ctaWrap = el('div');
    ctaWrap.append(ctaButton(true));
    content.append(ctaWrap);
  }

  panel.append(bar, content, el('span', 'card-nav__rim'));
  root.append(panel);
  container.append(root);

  // ---- Estado ----
  let narrow = false;
  let shown = s.open;
  const state = { p: s.open ? 1 : 0, v: 0, height: 0, bar: 60 };
  let raf = 0;
  let last = 0;

  const activeCards = () => (narrow && ctaWrap ? [...cardRefs, ctaWrap] : cardRefs);

  const render = () => {
    state.bar = parseFloat(getComputedStyle(panel).getPropertyValue('--cn-bar')) || 60;
    panel.style.height = `${state.bar + Math.max(0, state.p) * state.height}px`;
    const list = activeCards();
    const count = list.length;
    const lag = count > 1 ? Math.min(s.stagger, 0.7 / (count - 1)) : 0;
    const span = 1 - lag * (count - 1);
    list.forEach((card, index) => {
      const local = clamp((state.p - index * lag) / Math.max(span, 0.05), 0, 1);
      const e = easeOut(local);
      if (s.cardEffect === 'unfold') {
        card.style.transform = `translateY(${(1 - e) * -10}px) rotateX(${(1 - e) * -72}deg)`;
        card.style.opacity = `${clamp(local * 1.8, 0, 1)}`;
        card.style.filter = '';
      } else if (s.cardEffect === 'fade') {
        card.style.transform = `translateY(${(1 - e) * 6}px)`;
        card.style.opacity = `${e}`;
        card.style.filter = e < 0.999 ? `blur(${(1 - e) * 6}px)` : '';
      } else {
        card.style.transform = `translateY(${(1 - e) * 34}px) rotateX(${(1 - e) * -16}deg) scale(${0.94 + 0.06 * e})`;
        card.style.opacity = `${clamp(local * 1.1, 0, 1)}`;
        card.style.filter = e < 0.999 ? `blur(${(1 - e) * 8}px)` : '';
      }
    });
  };

  const sync = () => {
    root.toggleAttribute('data-open', s.open);
    root.toggleAttribute('data-shown', shown || s.open);
    root.toggleAttribute('data-narrow', narrow);
    menu.setAttribute('aria-expanded', String(s.open));
    if (!menuLabel) menu.setAttribute('aria-label', s.open ? 'Close menu' : 'Open menu');
    else {
      wordOpen.setAttribute('aria-hidden', String(s.open));
      wordClose.setAttribute('aria-hidden', String(!s.open));
    }
    content.setAttribute('aria-hidden', String(!s.open));
    tabbables.forEach(node => (s.open ? node.removeAttribute('tabindex') : node.setAttribute('tabindex', '-1')));
    if (ctaInBar) ctaInBar.hidden = narrow;
    if (ctaWrap) ctaWrap.hidden = !narrow;
  };

  const tick = now => {
    raf = 0;
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
    last = now;
    const target = s.open ? 1 : 0;
    if (reduce) {
      state.p = target;
      state.v = 0;
    } else {
      const k = 160 * s.speed * s.speed;
      const zeta = s.open ? 1 - 0.68 * s.bounce : 1;
      const steps = Math.ceil(dt / (1 / 240));
      const h = dt / steps;
      for (let i = 0; i < steps; i++) {
        state.v += (-k * (state.p - target) - 2 * zeta * Math.sqrt(k) * state.v) * h;
        state.p += state.v * h;
      }
    }
    const done = Math.abs(state.p - target) < 0.0005 && Math.abs(state.v) < 0.002;
    if (done) {
      state.p = target;
      state.v = 0;
    }
    render();
    if (done && target === 0) {
      shown = false;
      sync();
    }
    if (!done) raf = requestAnimationFrame(tick);
  };

  const wake = () => {
    if (!raf) {
      last = 0;
      raf = requestAnimationFrame(tick);
    }
  };

  const onPointerDownOutside = event => {
    const target = event.target;
    if (target instanceof Node && root.contains(target)) return;
    setOpen(false);
  };
  const onKeyDown = event => {
    if (event.key !== 'Escape') return;
    setOpen(false);
    menu.focus();
  };

  setOpen = next => {
    if (next === s.open) return;
    s.open = next;
    if (next) {
      shown = true;
      document.addEventListener('pointerdown', onPointerDownOutside);
      document.addEventListener('keydown', onKeyDown);
    } else {
      document.removeEventListener('pointerdown', onPointerDownOutside);
      document.removeEventListener('keydown', onKeyDown);
    }
    sync();
    state.height = content.offsetHeight;
    render();
    wake();
    onOpenChange?.(next);
  };

  menu.addEventListener('click', () => setOpen(!s.open));

  let leaveTimer = 0;
  const hover = openOn === 'hover';
  const onPointerEnter = event => {
    if (!hover || event.pointerType === 'touch') return;
    window.clearTimeout(leaveTimer);
    setOpen(true);
  };
  const onPointerLeave = event => {
    if (!hover || event.pointerType === 'touch') return;
    window.clearTimeout(leaveTimer);
    leaveTimer = window.setTimeout(() => setOpen(false), 160);
  };
  root.addEventListener('pointerenter', onPointerEnter);
  root.addEventListener('pointerleave', onPointerLeave);

  const measure = () => {
    const next = root.offsetWidth < NARROW;
    if (next !== narrow) {
      narrow = next;
      sync();
    }
    state.height = content.offsetHeight;
    render();
  };
  const rootObserver = new ResizeObserver(measure);
  rootObserver.observe(root);
  const contentObserver = new ResizeObserver(() => {
    state.height = content.offsetHeight;
    render();
  });
  contentObserver.observe(content);
  narrow = root.offsetWidth < NARROW;
  sync();
  state.height = content.offsetHeight;
  render();
  if (s.open) {
    document.addEventListener('pointerdown', onPointerDownOutside);
    document.addEventListener('keydown', onKeyDown);
  }

  // Intro: la barra se despliega desde el centro
  if (intro && !reduce && panel.animate) {
    const width = panel.offsetWidth;
    const height = panel.offsetHeight;
    const radius = parseFloat(getComputedStyle(panel).borderTopLeftRadius) || 18;
    panel.animate(
      [
        { clipPath: `inset(0px ${Math.max(0, (width - height) / 2)}px round ${height / 2}px)`, opacity: 0 },
        { clipPath: `inset(0px 0px round ${radius}px)`, opacity: 1 }
      ],
      { duration: 820, easing: EASE_OUT, fill: 'backwards' }
    );
    Array.from(bar.children).forEach((child, index) => {
      child.animate(
        [
          { opacity: 0, transform: 'translateY(8px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        { duration: 560, delay: 220 + index * 70, easing: EASE_OUT, fill: 'backwards' }
      );
    });
  }

  return {
    setOpen,
    destroy: () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(leaveTimer);
      rootObserver.disconnect();
      contentObserver.disconnect();
      document.removeEventListener('pointerdown', onPointerDownOutside);
      document.removeEventListener('keydown', onKeyDown);
      root.remove();
    }
  };
}
