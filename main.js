/* ─── Mobile nav ─── */
const navWrap  = document.querySelector('.nav-wrap');
const burger   = document.getElementById('navBurger');
const navMenu  = document.getElementById('navMenu');

burger.addEventListener('click', () => {
  const open = navWrap.classList.toggle('nav--ouvert');
  burger.setAttribute('aria-expanded', open);
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navWrap.classList.remove('nav--ouvert');
    burger.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('click', e => {
  if (!navWrap.contains(e.target)) {
    navWrap.classList.remove('nav--ouvert');
    burger.setAttribute('aria-expanded', 'false');
  }
});

/* ─── Form feedback ─── */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const btn = form.querySelector('[type="submit"]');
    btn.textContent = 'Envoyé — on vous répond sous 24 h !';
    btn.disabled = true;
    btn.style.opacity = '.7';
    btn.style.cursor  = 'default';

    form.querySelectorAll('input, select, textarea').forEach(el => {
      el.disabled = true;
    });
  });
}
