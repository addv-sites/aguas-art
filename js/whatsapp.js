/* ============================================================
   AGUA ARTESANAL — whatsapp.js
   Número y enlaces de WhatsApp (conversión principal del sitio)
   Fuente: cat/mp.md · número confirmado 5532400172
   ============================================================ */

const WHATSAPP_NUMBER = '525532400172'; // 52 + 5532400172

function createWhatsAppLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

const WA_MESSAGES = {
  general: 'Hola, vi el sitio de Agua Artesanal y quiero conocer sus sabores y opciones para mi negocio.',
  catalog: 'Hola, quiero conocer el catálogo de aguas artesanales para mi negocio.',
  quote: 'Hola, quiero cotizar aguas artesanales para mi negocio.',
  business: 'Hola, soy dueño de un restaurante/negocio gastronómico y quiero información de Agua Artesanal.',
  final: 'Hola, estoy listo para hacer mi pedido de Agua Artesanal.',
};

function productMessage(productName) {
  return `Hola, me interesa ${productName}. Quiero conocer disponibilidad y precio.`;
}

function bindWhatsApp() {
  document.querySelectorAll('[data-wa]').forEach((el) => {
    const key = el.getAttribute('data-wa');
    el.href = createWhatsAppLink(WA_MESSAGES[key] || WA_MESSAGES.general);
  });
  document.querySelectorAll('[data-wa-product]').forEach((el) => {
    el.href = createWhatsAppLink(productMessage(el.getAttribute('data-wa-product')));
  });
}

document.addEventListener('DOMContentLoaded', bindWhatsApp);

if (typeof window !== 'undefined') {
  window.createWhatsAppLink = createWhatsAppLink;
  window.WA_MESSAGES = WA_MESSAGES;
  window.productMessage = productMessage;
}