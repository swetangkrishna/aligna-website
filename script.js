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

// Soft parallax on the product mockup only for pointer devices.
if (window.matchMedia('(pointer:fine)').matches) {
  const visual = document.querySelector('.hero-visual');
  visual?.addEventListener('mousemove', (event) => {
    const r = visual.getBoundingClientRect();
    const x = (event.clientX - r.left) / r.width - 0.5;
    const y = (event.clientY - r.top) / r.height - 0.5;
    visual.style.transform = `perspective(1000px) rotateX(${-y * 1.8}deg) rotateY(${x * 2.3}deg)`;
  });
  visual?.addEventListener('mouseleave', () => visual.style.transform = '');
}
