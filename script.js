const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();

const heroBpm = document.getElementById('heroBpm');
const signalBpm = document.getElementById('signalBpm');
const telemetryHr = document.getElementById('telemetryHr');
const accX = document.getElementById('accX');
const accY = document.getElementById('accY');
const accZ = document.getElementById('accZ');

setInterval(() => {
  const bpm = 76 + Math.round(Math.random() * 5);
  if (heroBpm) heroBpm.textContent = bpm;
  if (signalBpm) signalBpm.textContent = bpm;
  if (telemetryHr) telemetryHr.textContent = bpm;
  if (accX) accX.textContent = (0.17 + Math.random() * 0.11).toFixed(2).replace(/^/, '+');
  if (accY) accY.textContent = '−' + (0.03 + Math.random() * 0.08).toFixed(2);
  if (accZ) accZ.textContent = '+' + (9.61 + Math.random() * 0.14).toFixed(2);
}, 1700);

if (window.matchMedia('(pointer:fine)').matches) {
  document.querySelectorAll('.bento, .hero-proof, .device-flow').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `perspective(1000px) rotateX(${-y * 1.1}deg) rotateY(${x * 1.4}deg) translateY(-2px)`;
    });
    card.addEventListener('mouseleave', () => card.style.transform = '');
  });
}