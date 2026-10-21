const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('motion-ready');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  reducedMotion.addEventListener('change', event => {
    if (event.matches) document.documentElement.classList.remove('motion-ready');
  });
}
document.querySelector('#interest-form').addEventListener('submit', event => {
  event.preventDefault();
  if (!event.currentTarget.reportValidity()) return;
  document.querySelector('#form-status').textContent = 'Your enquiry preview is complete. Nothing has been sent or saved. The live version will send enquiries to the company’s approved recruitment contact.';
});
