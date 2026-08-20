/* ============================================================
   AGUA ARTESANAL — catalog.js
   Renderiza el catálogo desde data/products.json (dinámico)
   Fuente de verdad: cat/CATÁLOGO2025-AGUASARTESANALES-2.pdf
   ============================================================ */

const PRODUCTS_URL = 'data/products.json';

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function productCard(p) {
  const badge = p.badge ? `<span class="product-badge">${escapeHtml(p.badge)}</span>` : '';
  const link = window.createWhatsAppLink(window.productMessage(p.name));
  return `
    <article class="product fade" data-category="${escapeHtml(p.category)}">
      <div class="product-media">
        ${badge}
        <img src="${escapeHtml(p.image)}" alt="Agua artesanal ${escapeHtml(p.name)}" loading="lazy" width="560" height="1300">
      </div>
      <h3>${escapeHtml(p.name)}</h3>
      <p class="product-size">${escapeHtml(p.size)}</p>
      <p class="product-dur">Tiempo garantizado: ${escapeHtml(p.duration)}</p>
      <div class="product-wa">
        <a href="${link}" target="_blank" rel="noopener" data-wa-product="${escapeHtml(p.name)}">Pedir por WhatsApp ↗</a>
      </div>
    </article>`;
}

async function loadProducts() {
  const grid = document.getElementById('product-grid');
  const filterBar = document.getElementById('product-filters');
  if (!grid) return;

  let products = [];
  try {
    const res = await fetch(PRODUCTS_URL, { cache: 'no-cache' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    products = await res.json();
  } catch (err) {
    grid.innerHTML = '<p class="section-sub">No pudimos cargar el catálogo. Escríbenos por WhatsApp y con gusto te lo enviamos.</p>';
    console.error('Error cargando catálogo:', err);
    return;
  }

  const available = products.filter((p) => p.available);
  const categories = ['Todos', ...new Set(available.map((p) => p.category))];

  const render = (cat) => {
    const list = cat === 'Todos' ? available : available.filter((p) => p.category === cat);
    grid.innerHTML = list.map(productCard).join('');
    observeFades();
    bindWhatsApp();
    trackCatalogView();
  };

  filterBar.innerHTML = categories
    .map((c, i) => `<button class="filter-chip${i === 0 ? ' active' : ''}" data-filter="${escapeHtml(c)}">${escapeHtml(c)}</button>`)
    .join('');

  filterBar.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;
    filterBar.querySelectorAll('.filter-chip').forEach((c) => c.classList.remove('active'));
    chip.classList.add('active');
    render(chip.dataset.filter);
    trackCatalogFilter(chip.dataset.filter);
  });

  render('Todos');
}

function trackCatalogView() {
  if (typeof dataLayer !== 'undefined') dataLayer.push({ event: 'catalog_view' });
}
function trackCatalogFilter(filter) {
  if (typeof dataLayer !== 'undefined') dataLayer.push({ event: 'catalog_filter', filter });
}

document.addEventListener('DOMContentLoaded', loadProducts);