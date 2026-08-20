# SEO.md — Agua Artesanal

> Configuración SEO on-page del sitio. Fecha: 2026-08-19.

## Keyword principal

`aguas artesanales para restaurantes`

## Keywords secundarias

`aguas artesanales CDMX` · `aguas para restaurantes` · `aguas frescas para restaurantes` ·
`proveedor de aguas artesanales` · `bebidas para restaurantes` · `aguas artesanales para taquerías` ·
`aguas artesanales para marisquerías`

Se usan de forma natural en title, description, headings y copy (sin keyword stuffing).

## Implementación (ya en `index.html`)

| Elemento | Valor |
|---|---|
| Title | Agua Artesanal \| Aguas frescas artesanales para restaurantes, taquerías y marisquerías |
| Meta description | 160 chars, incluye propuesta + canal WhatsApp |
| Canonical | `https://addv-sites.github.io/aguas-art/` |
| Open Graph | og:type, og:locale es_MX, og:title, og:description, og:url, og:site_name, og:image |
| Twitter/X | summary_large_image |
| Favicon | `favicon.svg` |
| robots.txt | Allow: / + sitemap |
| sitemap.xml | 1 URL (one page) |
| HTML semántico | header/nav/main/section/article/footer, un solo H1 |
| Alt text | En todas las imágenes descriptivas |
| theme-color | `#062B59` |

## Structured data (JSON-LD)

1. **Organization** — nombre, url, logo, email, contactPoint (telefono, sales), sameAs Facebook.
2. **FAQPage** — 6 preguntas B2B reales con sus respuestas (sabores, presentaciones, pedido,
   restaurantes, cotización, duración).

Omitidos a propósito (no inventar): LocalBusiness (sin dirección física), Offer/price (sin precios
confirmados), Review/AggregateRating (sin testimonios verificados).

## Oportunidades futuras

- Enviar el sitio a **Google Search Console** una vez publicado.
- Registrar el sitemap en GSC.
- Solicitar indexación de `https://addv-sites.github.io/aguas-art/`.
- Analizar el perfil de Facebook para decidir si añadir Product schema con imágenes reales.

## Analytics (preparado, sin librería)

El sitio expone eventos listos para Google Tag Manager / GA4 (ver `js/main.js` y `js/catalog.js`):

`whatsapp_click` (context + product) · `catalog_view` · `catalog_filter` · `faq_open`

No se incluye la librería de GA por defecto para no penalizar performance; se añade vía GTM si el
cliente lo requiere.