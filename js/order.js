/* ============================================================
   AGUA ARTESANAL — order.js
   Carrito pedido WhatsApp · modal accesible · persistencia local
   Mobile-first, vanilla JS, sin dependencias
   ============================================================ */

const ORDER_STORAGE_KEY = 'aguaArtesanal_cart_v1';
const ORDER_META_KEY = 'aguaArtesanal_meta_v1';

let productsCache = [];
let cart = [];
let meta = { business: '', notes: '' };

function loadCart() {
  try {
    const raw = localStorage.getItem(ORDER_STORAGE_KEY);
    if (raw) cart = JSON.parse(raw) || [];
    const m = localStorage.getItem(ORDER_META_KEY);
    if (m) meta = JSON.parse(m) || meta;
  } catch (_) { cart = []; }
}

function saveCart() {
  try {
    localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(cart));
    localStorage.setItem(ORDER_META_KEY, JSON.stringify(meta));
  } catch (_) {}
}

function totalPieces() {
  return cart.reduce((s, it) => s + it.qty, 0);
}
function totalFlavors() {
  return cart.length;
}

// --- Product cache ---
async function ensureProducts() {
  if (productsCache.length) return productsCache;
  try {
    const res = await fetch('data/products.json', { cache: 'default' });
    productsCache = await res.json();
  } catch (_) { productsCache = []; }
  return productsCache;
}

// --- WhatsApp message builder ---
function buildMessage() {
  if (!cart.length) return '';
  const lines = ['Hola, quiero hacer un pedido de Agua Artesanal 🧃', ''];
  cart.forEach((it) => {
    // find duration/badge
    const p = productsCache.find((x) => x.id === it.id);
    const dur = p ? ` (${p.duration})` : '';
    const badge = p && p.badge ? ` · ${p.badge}` : '';
    // normalize presentation: 1 L / 500 ml
    lines.push(`• ${it.qty}× ${it.name} — ${it.presentation}${dur}${badge}`);
  });
  lines.push('');
  lines.push(`Total: ${totalPieces()} piezas (${totalFlavors()} sabores)`);
  if (meta.business.trim()) lines.push(`Negocio: ${meta.business.trim()}`);
  if (meta.notes.trim()) lines.push(`Notas: ${meta.notes.trim()}`);
  lines.push('');
  lines.push('¿Me confirmas disponibilidad y condiciones? Gracias.');
  return lines.join('\n');
}

// --- DOM refs (filled on init) ---
let overlay, dialog, selectEl, qtyOutput, qtyMinus, qtyPlus, radio1L, radio500, addBtn, listEl, countEl, businessEl, notesEl, previewEl, sendBtn, closeBtn, cancelBtn;

function $(sel) { return document.querySelector(sel); }

function initOrderDOM() {
  overlay = $('#order-overlay');
  dialog = overlay.querySelector('.order-dialog');
  selectEl = $('#order-flavor');
  qtyOutput = $('#order-qty-output');
  qtyMinus = $('#order-qty-minus');
  qtyPlus = $('#order-qty-plus');
  radio1L = $('#order-pres-1l');
  radio500 = $('#order-pres-500');
  addBtn = $('#order-add');
  listEl = $('#order-list');
  countEl = $('#order-count');
  businessEl = $('#order-business');
  notesEl = $('#order-notes');
  previewEl = $('#order-preview');
  sendBtn = $('#order-send');
  closeBtn = $('#order-close');
  cancelBtn = $('#order-cancel');
  if (!overlay) return false;
  return true;
}

// --- Render helpers ---
function renderSelect() {
  if (!selectEl) return;
  const opts = ['<option value="">Selecciona un sabor…</option>']
    .concat(productsCache.filter(p => p.available).map(p => {
      const badge = p.badge ? ` · ${p.badge}` : '';
      return `<option value="${p.id}">${p.name}${badge} — ${p.duration}</option>`;
    }));
  const prev = selectEl.value;
  selectEl.innerHTML = opts.join('');
  if (prev) selectEl.value = prev;
}

function renderCart() {
  if (!listEl || !countEl) return;
  const pieces = totalPieces();
  countEl.textContent = cart.length ? `${totalFlavors()} sabores · ${pieces} piezas` : '0 productos';
  if (!cart.length) {
    listEl.innerHTML = '<div class="order-empty">Aún no agregas productos.<br><span style="font-size:11px">Elige sabor, presentación y cantidad → “Agregar a la lista”</span></div>';
  } else {
    listEl.innerHTML = cart.map((it, idx) => {
      const p = productsCache.find(x => x.id === it.id);
      const img = p ? p.image : '';
      const dur = p ? p.duration : '';
      return `<div class="order-item">
        <img src="${img}" alt="" loading="lazy" width="48" height="48">
        <div class="order-item-meta"><b>${it.name}</b><span>${it.presentation} × ${it.qty}${dur ? ' · ' + dur : ''}</span></div>
        <div class="order-item-actions">
          <button class="order-icon-btn" data-edit="${idx}" aria-label="Editar ${it.name}">✎</button>
          <button class="order-icon-btn" data-remove="${idx}" aria-label="Eliminar ${it.name}">🗑</button>
        </div>
      </div>`;
    }).join('');
  }
  // update badge elsewhere
  updateBadge();
  // update preview + send enabled
  const msg = buildMessage();
  if (previewEl) {
    previewEl.textContent = msg;
    previewEl.classList.toggle('visible', cart.length > 0);
  }
  if (sendBtn) sendBtn.disabled = cart.length === 0;
  saveCart();
}

function updateBadge() {
  const badge = document.querySelectorAll('.order-badge');
  const count = totalPieces();
  badge.forEach(b => {
    b.textContent = String(count);
    b.classList.toggle('has-items', count > 0);
  });
  const viewBtn = document.querySelector('.btn-order-view');
  if (viewBtn) viewBtn.classList.toggle('has-items', count > 0);
}

// --- Qty logic ---
let currentQty = 1;
function setQty(n) {
  currentQty = Math.max(1, Math.min(99, n|0 || 1));
  if (qtyOutput) qtyOutput.textContent = String(currentQty);
  if (qtyMinus) qtyMinus.disabled = currentQty <= 1;
  if (qtyPlus) qtyPlus.disabled = currentQty >= 99;
}

// --- Add to cart ---
function handleAdd() {
  const id = selectEl.value;
  if (!id) {
    selectEl.focus();
    selectEl.style.borderColor = '#E9A9A2';
    setTimeout(()=> selectEl.style.borderColor='', 1200);
    return;
  }
  const p = productsCache.find(x => x.id === id);
  if (!p) return;
  const presentation = radio500 && radio500.checked ? '500 ml' : '1 L';
  // check existing same id+presentation
  const existing = cart.find(it => it.id === id && it.presentation === presentation);
  if (existing) {
    existing.qty = Math.min(99, existing.qty + currentQty);
  } else {
    cart.push({ id: p.id, name: p.name, presentation, qty: currentQty });
  }
  // reset qty to 1 but keep selection for rapid add
  setQty(1);
  renderCart();
  // feedback
  addBtn.textContent = '✓ Agregado';
  setTimeout(()=> addBtn.textContent = '+ Agregar a la lista', 900);
  if (typeof dataLayer !== 'undefined') dataLayer.push({ event: 'order_add', flavor: p.name, presentation, qty: currentQty });
}

// --- Modal open/close ---
let lastFocus = null;
let trapHandler = null;

function openOrder(preselectedId = null) {
  if (!overlay) return;
  lastFocus = document.activeElement;
  overlay.classList.remove('closing');
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  // preselect if needed
  if (preselectedId && selectEl) {
    const exists = productsCache.some(p=>p.id===preselectedId);
    if (exists) selectEl.value = preselectedId;
  }
  renderCart();
  setQty(currentQty);
  // focus first element
  setTimeout(()=> selectEl && selectEl.focus(), 80);
  // trap focus
  trapHandler = (e) => {
    if (e.key === 'Escape') { e.preventDefault(); closeOrder(); }
    if (e.key !== 'Tab') return;
    const focusable = dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const list = Array.from(focusable).filter(el=> !el.disabled && el.offsetParent !== null);
    if (!list.length) return;
    const first = list[0], last = list[list.length-1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };
  document.addEventListener('keydown', trapHandler);
  if (typeof dataLayer !== 'undefined') dataLayer.push({ event: 'order_open', preselected: preselectedId || '' });
}

function closeOrder() {
  if (!overlay) return;
  overlay.classList.add('closing');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', trapHandler);
  setTimeout(()=> {
    overlay.classList.remove('open','closing');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }, 180);
  if (typeof dataLayer !== 'undefined') dataLayer.push({ event: 'order_close' });
}

// --- Send to WhatsApp ---
function sendOrder() {
  const msg = buildMessage();
  if (!msg) return;
  const url = window.createWhatsAppLink ? window.createWhatsAppLink(msg) : `https://wa.me/525532400172?text=${encodeURIComponent(msg)}`;
  if (typeof dataLayer !== 'undefined') dataLayer.push({ event: 'whatsapp_order_send', items: cart.length, pieces: totalPieces() });
  window.open(url, '_blank', 'noopener');
}

// --- Init ---
document.addEventListener('DOMContentLoaded', async () => {
  loadCart();
  await ensureProducts();
  if (!initOrderDOM()) return;
  renderSelect();
  // restore meta
  if (businessEl) businessEl.value = meta.business || '';
  if (notesEl) notesEl.value = meta.notes || '';
  renderCart();
  setQty(1);

  // events
  qtyMinus && qtyMinus.addEventListener('click', ()=> setQty(currentQty-1));
  qtyPlus && qtyPlus.addEventListener('click', ()=> setQty(currentQty+1));
  addBtn && addBtn.addEventListener('click', handleAdd);
  closeBtn && closeBtn.addEventListener('click', closeOrder);
  cancelBtn && cancelBtn.addEventListener('click', closeOrder);
  overlay && overlay.addEventListener('click', (e)=> { if (e.target === overlay) closeOrder(); });
  sendBtn && sendBtn.addEventListener('click', sendOrder);

  businessEl && businessEl.addEventListener('input', (e)=> { meta.business = e.target.value; saveCart(); renderCart(); });
  notesEl && notesEl.addEventListener('input', (e)=> { meta.notes = e.target.value; saveCart(); renderCart(); });

  // list edit/remove delegation
  listEl && listEl.addEventListener('click', (e)=>{
    const rem = e.target.closest('[data-remove]');
    if (rem) {
      const idx = parseInt(rem.getAttribute('data-remove'),10);
      cart.splice(idx,1);
      renderCart();
      return;
    }
    const ed = e.target.closest('[data-edit]');
    if (ed) {
      const idx = parseInt(ed.getAttribute('data-edit'),10);
      const it = cart[idx];
      if (!it) return;
      // load back to form for editing: select + presentation + qty, then remove
      if (selectEl) selectEl.value = it.id;
      if (it.presentation === '500 ml' && radio500) radio500.checked = true;
      else if (radio1L) radio1L.checked = true;
      setQty(it.qty);
      cart.splice(idx,1);
      renderCart();
      selectEl && selectEl.focus();
    }
  });

  // intercept whatsapp triggers to open modal, except catalog/footer direct links
  document.querySelectorAll('[data-wa], [data-wa-product]').forEach(el=>{
    if (el.hasAttribute('data-no-order') || el.getAttribute('data-wa') === 'catalog') return;
    // keep original href for fallback, but override click
    el.addEventListener('click', (e)=>{
      // allow direct if user holds modifier or is auxiliary button
      if (e.ctrlKey || e.metaKey || e.button === 1) return;
      e.preventDefault();
      const prod = el.getAttribute('data-wa-product');
      let preId = null;
      if (prod) {
        const found = productsCache.find(p=> p.name.toLowerCase() === prod.toLowerCase());
        if (found) preId = found.id;
      }
      openOrder(preId);
    });
  });

  // header view button + product grid delegation
  document.addEventListener('click', (e)=>{
    const view = e.target.closest('#order-view-btn');
    if (view) { e.preventDefault(); openOrder(); return; }
    const addCart = e.target.closest('[data-add-cart]');
    if (addCart) {
      e.preventDefault();
      const pid = addCart.getAttribute('data-add-cart');
      openOrder(pid);
      return;
    }
    const direct = e.target.closest('[data-direct-wa]');
    if (direct) {
      // direct wa without modal
      const name = direct.getAttribute('data-direct-wa');
      const msg = window.productMessage ? window.productMessage(name) : `Hola, me interesa ${name}. Quiero conocer disponibilidad y precio.`;
      const url = window.createWhatsAppLink ? window.createWhatsAppLink(msg) : `https://wa.me/525532400172?text=${encodeURIComponent(msg)}`;
      window.open(url,'_blank','noopener');
      return;
    }
  });

  // expose for debugging/catalog
  window.openOrder = openOrder;
  window.closeOrder = closeOrder;
  window._orderCart = () => cart;
});
