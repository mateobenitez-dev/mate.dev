// Fondo de grilla de puntos: puntos grises fijos detrás de la web que se agrandan,
// se corren un poco y se prenden en rojo cerca del cursor. Canvas 2D, sin dependencias.
const DEFAULTS = {
  gap: 22,
  size: 1.3,
  grow: 1.4,
  radius: 200,
  push: 6,
  baseColor: [243, 242, 241],
  baseAlpha: 0.13,
  activeColor: [255, 70, 70],
  activeAlpha: 1,
  dampening: 0.04,
  shine: 10
};

// Devuelve una función para desmontarlo.
export function mountDotGrid(container, options = {}) {
  const o = { ...DEFAULTS, ...options };
  const canvas = document.createElement('canvas');
  canvas.className = 'dot-grid-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  const pointer = { x: -9999, y: -9999, inside: false };
  const glow = { x: -9999, y: -9999, k: 0 };
  let W = 0, H = 0, dpr = 1, raf = 0, last = 0;

  const draw = () => {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    const [br, bg, bb] = o.baseColor;
    const [ar, ag, ab] = o.activeColor;
    const half = o.gap / 2;
    ctx.fillStyle = `rgba(${br}, ${bg}, ${bb}, ${o.baseAlpha})`;
    ctx.beginPath();
    for (let y = half; y < H; y += o.gap) {
      for (let x = half; x < W; x += o.gap) {
        if (glow.k > 0 && Math.abs(x - glow.x) < o.radius && Math.abs(y - glow.y) < o.radius) continue;
        ctx.moveTo(x + o.size, y);
        ctx.arc(x, y, o.size, 0, Math.PI * 2);
      }
    }
    ctx.fill();
    if (glow.k <= 0) return;
    for (let y = half; y < H; y += o.gap) {
      if (Math.abs(y - glow.y) >= o.radius) continue;
      for (let x = half; x < W; x += o.gap) {
        if (Math.abs(x - glow.x) >= o.radius) continue;
        const dx = x - glow.x, dy = y - glow.y;
        const d = Math.hypot(dx, dy);
        const f = Math.pow(Math.max(0, 1 - d / o.radius), 1.4) * glow.k;
        const mix = (a, b) => Math.round(a + (b - a) * f);
        const shift = d > 0 ? (o.push * f) / d : 0;
        ctx.fillStyle = `rgba(${mix(br, ar)}, ${mix(bg, ag)}, ${mix(bb, ab)}, ${o.baseAlpha + (o.activeAlpha - o.baseAlpha) * f})`;
        ctx.shadowColor = `rgba(${ar}, ${ag}, ${ab}, ${f})`;
        ctx.shadowBlur = f > 0.35 ? o.shine * f : 0;
        ctx.beginPath();
        ctx.arc(x + dx * shift, y + dy * shift, o.size * (1 + o.grow * f), 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.shadowBlur = 0;
  };

  const frame = now => {
    raf = 0;
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
    last = now;
    const follow = 1 - Math.exp(-dt / o.dampening);
    if (pointer.inside) {
      if (glow.k < 0.01) { glow.x = pointer.x; glow.y = pointer.y; }
      glow.x += (pointer.x - glow.x) * follow;
      glow.y += (pointer.y - glow.y) * follow;
    }
    const target = pointer.inside ? 1 : 0;
    glow.k += (target - glow.k) * (1 - Math.exp(-dt / 0.1));
    if (Math.abs(target - glow.k) < 0.005) glow.k = target;
    draw();
    const moving = Math.abs(pointer.x - glow.x) > 0.3 || Math.abs(pointer.y - glow.y) > 0.3 || glow.k !== target;
    if (moving) raf = requestAnimationFrame(frame);
    else last = 0;
  };

  const wake = () => {
    if (!raf) raf = requestAnimationFrame(frame);
  };

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = container.clientWidth;
    H = container.clientHeight;
    canvas.width = Math.max(1, Math.round(W * dpr));
    canvas.height = Math.max(1, Math.round(H * dpr));
    draw();
  };

  const onMove = event => {
    const rect = container.getBoundingClientRect();
    pointer.x = event.clientX - rect.left;
    pointer.y = event.clientY - rect.top;
    pointer.inside = true;
    wake();
  };
  const onLeave = () => {
    pointer.inside = false;
    wake();
  };

  const observer = new ResizeObserver(resize);
  observer.observe(container);
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('orientationchange', resize, { passive: true });
  window.addEventListener('pointermove', onMove, { passive: true });
  window.addEventListener('pointerdown', onMove, { passive: true });
  window.addEventListener('pointerup', onLeave, { passive: true });
  window.addEventListener('pointercancel', onLeave, { passive: true });
  document.documentElement.addEventListener('pointerleave', onLeave);
  resize();

  return () => {
    cancelAnimationFrame(raf);
    observer.disconnect();
    window.removeEventListener('resize', resize);
    window.removeEventListener('orientationchange', resize);
    window.removeEventListener('pointermove', onMove);
    window.removeEventListener('pointerdown', onMove);
    window.removeEventListener('pointerup', onLeave);
    window.removeEventListener('pointercancel', onLeave);
    document.documentElement.removeEventListener('pointerleave', onLeave);
    canvas.remove();
  };
}
