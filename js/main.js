/* ============================================================
   AGUA ARTESANAL — main.js
   Navegación móvil, animaciones (IntersectionObserver),
   FAQ accordion y eventos de conversión.
   ============================================================ */

function observeFades() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.fade:not(.visible)').forEach((el) => io.observe(el));
}

function initMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const nav = document.getElementById('navlinks');
  if (!menuBtn || !nav) return;
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

function initFaq() {
  document.querySelectorAll('.faq-q').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-a');
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item.open').forEach((openItem) => {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-a').style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        if (typeof dataLayer !== 'undefined') dataLayer.push({ event: 'faq_open', question: btn.dataset.faq });
      }
    });
  });
}

function initAnalytics() {
  document.addEventListener('click', (e) => {
    const wa = e.target.closest('[data-wa],[data-wa-product],.btn-wa');
    if (wa) {
      const product = wa.getAttribute('data-wa-product');
      if (typeof dataLayer !== 'undefined') {
        dataLayer.push({ event: 'whatsapp_click', context: wa.dataset.wa || 'general', product });
      }
    }
    const chip = e.target.closest('.filter-chip');
    if (chip && typeof dataLayer !== 'undefined') {
      dataLayer.push({ event: 'catalog_filter', filter: chip.dataset.filter });
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initFaq();
  initAnalytics();
  observeFades();
});