// ProfileCard (React Bits) pasado a JS sin React: tarjeta holográfica que se inclina hacia el cursor
const THEMES = {
  dark: {
    '--pc-frame': 'rgba(38, 35, 46, 0.66)',
    '--pc-frame-edge': 'rgba(255, 255, 255, 0.08)',
    '--pc-frame-highlight': 'rgba(255, 255, 255, 0.07)',
    '--pc-frame-shadow': '0 22px 44px -20px rgba(0, 0, 0, 0.8), 0 6px 16px -8px rgba(0, 0, 0, 0.5)',
    '--pc-tile': 'linear-gradient(180deg, #3a3644 0%, #27242f 100%)',
    '--pc-tile-edge': 'rgba(255, 255, 255, 0.07)',
    '--pc-tile-highlight': 'rgba(255, 255, 255, 0.12)',
    '--pc-tile-shadow': '0 4px 10px -4px rgba(0, 0, 0, 0.7)',
    '--pc-ink': '#f4f4f5',
    '--pc-muted': 'rgba(244, 244, 245, 0.6)',
    '--pc-hover': 'brightness(1.12)',
    '--pc-press': 'brightness(0.8)',
    '--pc-shade': 'rgba(0, 0, 0, 0.4)'
  },
  light: {
    '--pc-frame': 'rgba(240, 240, 243, 0.8)',
    '--pc-frame-edge': 'rgba(24, 24, 27, 0.07)',
    '--pc-frame-highlight': 'rgba(255, 255, 255, 0.95)',
    '--pc-frame-shadow': '0 22px 44px -22px rgba(24, 24, 27, 0.3), 0 6px 16px -10px rgba(24, 24, 27, 0.16)',
    '--pc-tile': 'linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)',
    '--pc-tile-edge': 'rgba(24, 24, 27, 0.08)',
    '--pc-tile-highlight': 'rgba(255, 255, 255, 1)',
    '--pc-tile-shadow': '0 4px 10px -5px rgba(24, 24, 27, 0.25)',
    '--pc-ink': '#27272a',
    '--pc-muted': 'rgba(39, 39, 42, 0.6)',
    '--pc-hover': 'brightness(0.97)',
    '--pc-press': 'brightness(0.92)',
    '--pc-shade': 'rgba(24, 24, 27, 0.14)'
  }
};

const FOILS = {
  dark: { '--pc-blend': 'color-dodge', '--pc-holo-filter': 'hue-rotate(0deg)', '--pc-sheen': 'rgba(255, 255, 255, 0.16)' },
  light: { '--pc-blend': 'multiply', '--pc-holo-filter': 'invert(1) hue-rotate(180deg)', '--pc-sheen': 'rgba(255, 255, 255, 0)' }
};

const GRAIN = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='500' height='500'><filter id='g' x='0' y='0' width='100%' height='100%' color-interpolation-filters='sRGB'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0.55 0 0 0 -0.24 0.55 0 0 0 -0.24 0.55 0 0 0 -0.24 0 0 0 0 1'/></filter><rect width='100%' height='100%' filter='url(#g)'/></svg>"
)}")`;

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const isDark = color => {
  const match = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(String(color).trim());
  if (!match) return null;
  const hex = match[1].length === 3 ? match[1].replace(/./g, digit => digit + digit) : match[1];
  const [r, g, b] = [0, 2, 4].map(index => parseInt(hex.slice(index, index + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.5;
};

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
};

// Extras propios: `art` (nodo que va en la tarjeta en vez de la foto), `body` (nodo debajo de la foto),
// `contactHref`/`contactIcon` (el botón pasa a ser un link) y `vars` (pisar colores del tema)
export function mountProfileCard(container, options = {}) {
  const {
    avatarUrl = '',
    art,
    iconUrl,
    miniAvatarUrl,
    name = 'Javi A. Torres',
    title = 'Software Engineer',
    handle = 'javicodes',
    status = 'Online',
    statusColor = '#22c55e',
    contactText = 'Contact',
    contactHref,
    contactIcon,
    showUserInfo = true,
    onContactClick,
    body,
    theme = 'dark',
    backdropColor,
    radius = 16,
    holo = 0.8,
    glare = 0.5,
    enableTilt = true,
    tiltStrength = 12,
    parallax = 8,
    intro = true,
    className = '',
    vars = {}
  } = options;

  const palette = theme === 'light' ? 'light' : 'dark';
  const foil = backdropColor ? ((isDark(backdropColor) ?? palette === 'dark') ? 'dark' : 'light') : palette;
  const backdrop = backdropColor
    ? `linear-gradient(180deg, color-mix(in srgb, ${backdropColor}, #ffffff 12%) 0%, color-mix(in srgb, ${backdropColor}, #000000 18%) 100%)`
    : 'var(--pc-tile)';

  const root = el('div', `profile-card ${className}`.trim());
  const style = {
    ...THEMES[palette],
    ...FOILS[foil],
    '--pc-radius': `${Math.max(0, radius)}px`,
    '--pc-backdrop': backdrop,
    '--pc-holo': clamp(holo, 0, 1),
    '--pc-glare': clamp(glare, 0, 1),
    '--pc-parallax': `${Math.max(0, parallax)}px`,
    '--pc-status': statusColor,
    '--pc-grain': GRAIN,
    '--pc-pattern': iconUrl ? `url("${iconUrl}")` : 'linear-gradient(#000, #000)',
    '--pc-pattern-size': iconUrl ? '180% auto' : '100% 100%',
    '--pc-holo-gain': iconUrl ? 1.25 : 0.75,
    '--pc-holo-detail': iconUrl && foil === 'dark' ? 1 : 0,
    ...vars
  };
  Object.entries(style).forEach(([key, value]) => root.style.setProperty(key, String(value)));

  const cardBody = el('div', 'profile-card__body');
  const tile = el('div', 'profile-card__tile');
  tile.append(el('span', 'profile-card__sheen'));
  const holoLayer = el('span', 'profile-card__holo');
  holoLayer.append(el('span', 'profile-card__holo-glow'), el('span', 'profile-card__holo-shift'));
  tile.append(holoLayer);
  if (art) {
    art.classList.add('profile-card__art');
    tile.append(art);
  } else if (avatarUrl) {
    const photo = el('img', 'profile-card__photo');
    photo.src = avatarUrl;
    photo.alt = name || '';
    photo.loading = 'lazy';
    photo.draggable = false;
    tile.append(photo);
  }
  if (name || title) {
    tile.append(el('span', 'profile-card__scrim'));
    const info = el('div', 'profile-card__info');
    if (name) info.append(el('h3', 'profile-card__name', name));
    if (title) info.append(el('p', 'profile-card__title', title));
    tile.append(info);
  }
  tile.append(el('span', 'profile-card__tile-rim'));
  cardBody.append(tile);

  if (body) {
    body.classList.add('profile-card__extra');
    cardBody.append(body);
  }

  if (showUserInfo) {
    const footer = el('div', 'profile-card__footer');
    if (miniAvatarUrl) {
      const mini = el('span', 'profile-card__avatar');
      const img = el('img');
      img.src = miniAvatarUrl;
      img.alt = '';
      img.loading = 'lazy';
      img.draggable = false;
      mini.append(img);
      footer.append(mini);
    }
    const meta = el('div', 'profile-card__meta');
    if (handle) meta.append(el('span', 'profile-card__handle', `@${handle}`));
    if (status) meta.append(el('span', 'profile-card__status', status));
    footer.append(meta);
    if (contactText) {
      const button = contactHref ? el('a', 'profile-card__contact') : el('button', 'profile-card__contact');
      if (contactHref) {
        button.href = contactHref;
        button.target = '_blank';
        button.rel = 'noopener';
      } else {
        button.type = 'button';
        if (onContactClick) button.addEventListener('click', onContactClick);
      }
      button.setAttribute('aria-label', name ? `${contactText} ${name}` : contactText);
      button.innerHTML =
        contactIcon ||
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 6l6.9 3.9c2.5 1.4 3.6 1.4 6.2 0L22 6"/><path d="M2 13.5c.1 3.1.1 4.6 1.2 5.7 1.2 1.1 2.7 1.2 5.8 1.2h6c3.1 0 4.6-.1 5.8-1.2 1.1-1.1 1.1-2.6 1.2-5.7v-3c-.1-3.1-.1-4.6-1.2-5.7C19.6 3.7 18.1 3.6 15 3.6H9c-3.1 0-4.6.1-5.8 1.2C2.1 5.9 2.1 7.4 2 10.5z"/></svg>';
      button.append(document.createTextNode(contactText));
      footer.append(button);
    }
    cardBody.append(footer);
  }

  cardBody.append(el('span', 'profile-card__glare'), el('span', 'profile-card__shade'), el('span', 'profile-card__rim'));
  root.append(cardBody);
  container.append(root);

  // ---- Motor: resorte para la inclinación y luz que sigue al cursor ----
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  const size = { width: root.offsetWidth, height: root.offsetHeight };
  const x = { p: 0, v: 0, target: 0 };
  const y = { p: 0, v: 0, target: 0 };
  const light = { p: 0, target: 0 };
  let raf = 0;
  let last = 0;
  let slowUntil = 0;
  let touchId = null;

  const write = () => {
    const angle = enableTilt && !reduced ? tiltStrength : 0;
    const tilt = Math.min(1, Math.hypot(x.p, y.p));
    const s = root.style;
    s.setProperty('--pc-light-x', `${((x.p + 1) * 0.5 * size.width).toFixed(1)}px`);
    s.setProperty('--pc-light-y', `${((y.p + 1) * 0.5 * size.height).toFixed(1)}px`);
    s.setProperty('--pc-pointer-x', `${((x.p + 1) * 50).toFixed(2)}%`);
    s.setProperty('--pc-pointer-y', `${((y.p + 1) * 50).toFixed(2)}%`);
    s.setProperty('--pc-band-x', `${(50 + x.p * 15).toFixed(2)}%`);
    s.setProperty('--pc-band-y', `${(50 + y.p * 15).toFixed(2)}%`);
    s.setProperty('--pc-rotate-x', `${(y.p * angle).toFixed(3)}deg`);
    s.setProperty('--pc-rotate-y', `${(-x.p * angle).toFixed(3)}deg`);
    s.setProperty('--pc-shift-x', `${(x.p * (reduced ? 0 : parallax)).toFixed(2)}px`);
    s.setProperty('--pc-shift-y', `${(y.p * (reduced ? 0 : parallax)).toFixed(2)}px`);
    s.setProperty('--pc-reach', tilt.toFixed(4));
    s.setProperty('--pc-tilt', (tilt * light.p).toFixed(4));
    s.setProperty('--pc-active', light.p.toFixed(4));
  };

  const frame = now => {
    const dt = Math.min(0.05, (now - last) / 1000 || 0);
    last = now;
    const slow = now < slowUntil;
    const stiffness = slow ? 24 : 120;
    const damping = slow ? 9 : 16;
    const steps = Math.max(1, Math.ceil(dt / (1 / 120)));
    const h = dt / steps;
    for (let i = 0; i < steps; i++) {
      for (const axis of [x, y]) {
        axis.v += (stiffness * (axis.target - axis.p) - damping * axis.v) * h;
        axis.p += axis.v * h;
      }
    }
    const tau = light.target > light.p ? 0.18 : slow ? 0.9 : 0.45;
    light.p += (light.target - light.p) * (1 - Math.exp(-dt / tau));
    write();
    const moving =
      Math.abs(x.target - x.p) > 0.0005 ||
      Math.abs(y.target - y.p) > 0.0005 ||
      Math.abs(x.v) > 0.0005 ||
      Math.abs(y.v) > 0.0005 ||
      Math.abs(light.target - light.p) > 0.002;
    if (moving) {
      raf = requestAnimationFrame(frame);
    } else {
      x.p = x.target;
      y.p = y.target;
      light.p = light.target;
      write();
      raf = 0;
    }
  };

  const wake = () => {
    if (raf) return;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  };

  const aim = (nx, ny, on = true) => {
    x.target = clamp(nx, -1, 1);
    y.target = clamp(ny, -1, 1);
    light.target = on ? 1 : 0;
    slowUntil = 0;
    wake();
  };

  const aimAt = event => {
    const rect = root.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    aim(((event.clientX - rect.left) / rect.width) * 2 - 1, ((event.clientY - rect.top) / rect.height) * 2 - 1);
  };
  const release = () => aim(0, 0, false);

  const onEnter = event => {
    if (event.pointerType === 'mouse') aimAt(event);
  };
  const onMove = event => {
    if (event.pointerType === 'mouse' || event.pointerId === touchId) aimAt(event);
  };
  const onLeave = event => {
    if (event.pointerType === 'mouse') release();
  };
  const onDown = event => {
    if (event.pointerType === 'mouse') return;
    touchId = event.pointerId;
    aimAt(event);
  };
  const onUp = event => {
    if (event.pointerId !== touchId) return;
    touchId = null;
    release();
  };

  root.addEventListener('pointerenter', onEnter);
  root.addEventListener('pointermove', onMove);
  root.addEventListener('pointerleave', onLeave);
  root.addEventListener('pointerdown', onDown);
  root.addEventListener('pointerup', onUp);
  root.addEventListener('pointercancel', onUp);

  const observer = new ResizeObserver(() => {
    size.width = root.offsetWidth;
    size.height = root.offsetHeight;
    write();
  });
  observer.observe(root);

  if (intro && !reduced) {
    x.p = 0.62;
    y.p = -0.55;
    light.p = 1;
    slowUntil = performance.now() + 1400;
    write();
    wake();
  } else {
    write();
  }

  return () => {
    cancelAnimationFrame(raf);
    observer.disconnect();
    root.remove();
  };
}
