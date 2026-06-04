const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
});

navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  const lang = window.LaTardaLang || 'en';
  const t = window.LaTardaI18n?.t;
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute(
    'aria-label',
    open
      ? (t ? t('nav.menuClose', lang) : 'Close menu')
      : (t ? t('nav.menuOpen', lang) : 'Open menu')
  );
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('.reserve-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const lang = window.LaTardaLang || 'en';
  const original = window.LaTardaI18n?.t('form.submit', lang) || btn.textContent;
  const success = window.LaTardaI18n?.t('form.success', lang) || "Request received — we'll be in touch";
  btn.textContent = success;
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = original;
    btn.disabled = false;
    e.target.reset();
  }, 4000);
});
