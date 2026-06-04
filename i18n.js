const STORAGE_KEY = 'latarda-lang';

const translations = {
  en: {
    'meta.title': 'La Tarda · Wine Bar',
    'meta.description':
      'La Tarda — an intimate wine bar in El Born, Barcelona. Curated pours, small plates, and unhurried evenings.',
    'nav.about': 'About',
    'nav.wines': 'Wines',
    'nav.kitchen': 'Kitchen',
    'nav.visit': 'Visit',
    'nav.reserve': 'Reserve',
    'nav.menuOpen': 'Open menu',
    'nav.menuClose': 'Close menu',
    'lang.label': 'Language',
    'hero.eyebrow': 'Wine bar · El Born, Barcelona',
    'hero.title': 'Stories in every<br /><em>glass</em>',
    'hero.lead':
      'A candlelit room for natural wines, seasonal small plates, and conversations that linger past midnight.',
    'hero.book': 'Book a table',
    'hero.list': 'View the list',
    'hero.scroll': 'Scroll',
    'about.label': 'Our story',
    'about.title': 'An intimate room<br />for curious palates',
    'about.p1':
      'A thirty-seat wine bar on a quiet lane in El Born, built around small producers: skin-contact oranges from Slovenia, gamay from Beaujolais, and the occasional magnum we’ve been saving for someone special.',
    'about.p2': 'Our list rotates weekly. Ask your server — they’ve tasted everything on it.',
    'about.stat.seats': 'seats',
    'about.stat.bottles': 'bottles',
    'about.stat.glass': 'by the glass',
    'wines.label': 'Current pours',
    'wines.title': 'On the list this week',
    'wines.desc': 'Glass · carafe · bottle. Ask about our Coravin selections.',
    'wines.staffPick': 'Staff pick',
    'wines.glass': 'Glass',
    'wines.bottle': 'Bottle',
    'wines.card1.region': 'Beaujolais, France',
    'wines.card1.notes': 'Cherry, granite, gamay · 2022',
    'wines.card2.region': 'Styria, Austria',
    'wines.card2.notes': 'Skin contact, apricot, saline · 2021',
    'wines.card3.region': 'Etna, Sicily',
    'wines.card3.notes': 'Volcanic, rose petal, fine tannin · 2020',
    'wines.card4.region': 'Willamette, Oregon',
    'wines.card4.notes': 'Cranberry, forest floor, elegant · 2019',
    'wines.footer': 'Full list available at the bar. No corkage on bottles purchased here.',
    'kitchen.label': 'From the kitchen',
    'kitchen.title': 'Plates to pass,<br />glasses to refill',
    'kitchen.p':
      'Our menu is designed for sharing — think burrata with fig honey, duck rillettes, and whatever bread our baker dropped off that morning.',
    'kitchen.item1.title': 'Charcuterie board',
    'kitchen.item1.desc': 'Two meats, cornichons, mustard, grilled sourdough',
    'kitchen.item2.title': 'Roasted beet & goat cheese',
    'kitchen.item2.desc': 'Walnuts, aged balsamic, micro herbs',
    'kitchen.item3.title': 'Truffle arancini',
    'kitchen.item3.desc': 'Pecorino, black truffle oil, lemon aioli',
    'kitchen.item4.title': 'Olive oil cake',
    'kitchen.item4.desc': 'Mascarpone, blood orange, sea salt',
    'visit.label': 'Find us',
    'visit.title': 'Visit La Tarda',
    'visit.hours.tue': 'Tue – Thu',
    'visit.hours.fri': 'Fri – Sat',
    'visit.hours.sun': 'Sunday',
    'visit.hours.mon': 'Monday',
    'visit.hours.tueTime': '5pm – 11pm',
    'visit.hours.friTime': '5pm – 1am',
    'visit.hours.sunTime': '4pm – 10pm',
    'visit.hours.closed': 'Closed',
    'reserve.label': 'Reservations',
    'reserve.title': 'Save your seat',
    'reserve.p':
      'Walk-ins welcome at the bar. Tables held for 15 minutes. Groups of 6+ please call.',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.date': 'Date',
    'form.guests': 'Guests',
    'form.time': 'Time',
    'form.notes': 'Notes (optional)',
    'form.placeholder': 'Allergies, celebration, bar seating…',
    'form.submit': 'Request reservation',
    'form.success': "Request received — we'll be in touch",
    'form.guests2': '2 guests',
    'form.guests3': '3 guests',
    'form.guests4': '4 guests',
    'form.guests5': '5 guests',
    'form.guests6': '6 guests',
    'footer.tagline': 'El Born, Barcelona · curated wines · seasonal kitchen',
    'footer.instagram': 'Instagram',
    'footer.newsletter': 'Newsletter',
    'footer.copy': '© 2026 La Tarda. All rights reserved.',
  },
  es: {
    'meta.title': 'La Tarda · Bar de vinos',
    'meta.description':
      'La Tarda — un bar de vinos íntimo en El Born, Barcelona. Copas seleccionadas, platos de temporada y noches sin prisas.',
    'nav.about': 'Nosotros',
    'nav.wines': 'Vinos',
    'nav.kitchen': 'Cocina',
    'nav.visit': 'Visítanos',
    'nav.reserve': 'Reservar',
    'nav.menuOpen': 'Abrir menú',
    'nav.menuClose': 'Cerrar menú',
    'lang.label': 'Idioma',
    'hero.eyebrow': 'Bar de vinos · El Born, Barcelona',
    'hero.title': 'Historias en cada<br /><em>copa</em>',
    'hero.lead':
      'Una sala a la luz de las velas para vinos naturales, platos de temporada y conversaciones que se alargan hasta la madrugada.',
    'hero.book': 'Reservar mesa',
    'hero.list': 'Ver la carta',
    'hero.scroll': 'Desliza',
    'about.label': 'Nuestra historia',
    'about.title': 'Un rincón íntimo<br />para paladares curiosos',
    'about.p1':
      'Un bar de vinos de treinta cubiertos en una calle tranquila del Born, centrado en pequeños productores: naranjas maceradas de Eslovenia, gamay de Beaujolais y algún magnum que guardamos para alguien especial.',
    'about.p2': 'La carta cambia cada semana. Pregunta al equipo — lo han probado todo.',
    'about.stat.seats': 'cubiertos',
    'about.stat.bottles': 'botellas',
    'about.stat.glass': 'por copa',
    'wines.label': 'Carta actual',
    'wines.title': 'Esta semana en carta',
    'wines.desc': 'Copa · jarra · botella. Pregunta por nuestras selecciones Coravin.',
    'wines.staffPick': 'Favorito del equipo',
    'wines.glass': 'Copa',
    'wines.bottle': 'Botella',
    'wines.card1.region': 'Beaujolais, Francia',
    'wines.card1.notes': 'Cereza, granito, gamay · 2022',
    'wines.card2.region': 'Estiria, Austria',
    'wines.card2.notes': 'Maceración, albaricoque, salino · 2021',
    'wines.card3.region': 'Etna, Sicilia',
    'wines.card3.notes': 'Volcánico, pétalo de rosa, tanino fino · 2020',
    'wines.card4.region': 'Willamette, Oregón',
    'wines.card4.notes': 'Arándano, bosque, elegante · 2019',
    'wines.footer': 'Carta completa en la barra. Sin descorche en botellas compradas aquí.',
    'kitchen.label': 'Desde la cocina',
    'kitchen.title': 'Platos para compartir,<br />copas para rellenar',
    'kitchen.p':
      'La carta está pensada para compartir: burrata con miel de higo, rillettes de pato y el pan que nos dejó el panadero esa mañana.',
    'kitchen.item1.title': 'Tabla de embutidos',
    'kitchen.item1.desc': 'Dos embutidos, pepinillos, mostaza, sourdough a la plancha',
    'kitchen.item2.title': 'Remolacha asada y queso de cabra',
    'kitchen.item2.desc': 'Nueces, balsámico añejo, microhierbas',
    'kitchen.item3.title': 'Arancini de trufa',
    'kitchen.item3.desc': 'Pecorino, aceite de trufa negra, alioli de limón',
    'kitchen.item4.title': 'Bizcocho de aceite de oliva',
    'kitchen.item4.desc': 'Mascarpone, naranja sanguina, sal marina',
    'visit.label': 'Encuéntranos',
    'visit.title': 'Visita La Tarda',
    'visit.hours.tue': 'Mar – Jue',
    'visit.hours.fri': 'Vie – Sáb',
    'visit.hours.sun': 'Domingo',
    'visit.hours.mon': 'Lunes',
    'visit.hours.tueTime': '17:00 – 23:00',
    'visit.hours.friTime': '17:00 – 01:00',
    'visit.hours.sunTime': '16:00 – 22:00',
    'visit.hours.closed': 'Cerrado',
    'reserve.label': 'Reservas',
    'reserve.title': 'Reserva tu mesa',
    'reserve.p':
      'Sin reserva en la barra. Las mesas se guardan 15 minutos. Grupos de 6 o más, por favor llamad.',
    'form.name': 'Nombre',
    'form.email': 'Correo',
    'form.date': 'Fecha',
    'form.guests': 'Comensales',
    'form.time': 'Hora',
    'form.notes': 'Notas (opcional)',
    'form.placeholder': 'Alergias, celebración, mesa en la barra…',
    'form.submit': 'Solicitar reserva',
    'form.success': 'Solicitud recibida — nos pondremos en contacto',
    'form.guests2': '2 comensales',
    'form.guests3': '3 comensales',
    'form.guests4': '4 comensales',
    'form.guests5': '5 comensales',
    'form.guests6': '6 comensales',
    'footer.tagline': 'El Born, Barcelona · vinos seleccionados · cocina de temporada',
    'footer.instagram': 'Instagram',
    'footer.newsletter': 'Boletín',
    'footer.copy': '© 2026 La Tarda. Todos los derechos reservados.',
  },
};

function t(key, lang) {
  return translations[lang]?.[key] ?? translations.en[key] ?? '';
}

function applyLanguage(lang) {
  const l = translations[lang] ? lang : 'en';
  document.documentElement.lang = l;

  const title = t('meta.title', l);
  document.title = title;

  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', t('meta.description', l));

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const value = t(key, l);
    if (!value) return;
    if (el.dataset.i18nHtml === 'true') {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder, l);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria, l));
  });

  document.querySelectorAll('[data-set-lang]').forEach((btn) => {
    const active = btn.dataset.setLang === l;
    btn.setAttribute('aria-pressed', String(active));
  });

  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle && !document.querySelector('.site-nav.open')) {
    navToggle.setAttribute(
      'aria-label',
      navToggle.getAttribute('aria-expanded') === 'true'
        ? t('nav.menuClose', l)
        : t('nav.menuOpen', l)
    );
  }

  localStorage.setItem(STORAGE_KEY, l);
  window.LaTardaLang = l;
}

function initI18n() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const browser = navigator.language?.startsWith('es') ? 'es' : 'en';
  const lang = translations[saved] ? saved : browser;

  document.querySelectorAll('[data-set-lang]').forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.setLang));
  });

  applyLanguage(lang);
}

window.LaTardaI18n = { t, applyLanguage, initI18n };

document.addEventListener('DOMContentLoaded', initI18n);
