# Project State — Agua Artesanal

> Estado actualizado: 2026-08-19 · Sitio construido v1 (build respetando `stitch/draft.png`).

## Resumen del proyecto

Sitio corporativo One Page B2B para **Agua Artesanal** (CDMX): venta de aguas artesanales
a restaurantes, taquerías y marisquerías. **La conversión principal es WhatsApp.**

- Tipo: sitio estático para **GitHub Pages** (sin backend, sin Docker, sin DB).
- Repo: `addv-sites/aguas-art` → https://github.com/addv-sites/aguas-art
- Publicación planificada: GitHub Pages (`addv-sites.github.io/aguas-art`).

## Qué existe hoy (2026-08-19)

| Artefacto | Estado | Nota |
|---|---|---|
| `cat/mp.md`, `cat/data.md` | ✅ Fuentes de verdad | Brief (70 secciones) + datos base |
| `cat/CATÁLOGO2025-AGUASARTESANALES-2.pdf` | ✅ Catálogo fuente | 13 págs imagen; leído vía OCR |
| `MARKET_RESEARCH.md` | ✅ Fase 1 | Investigación de mercado CDMX |
| `BRAND_STRATEGY.md` | ✅ Fase 1 | Posicionamiento y copy |
| `stitch/` | ✅ Diseño de referencia | `draft.png` + `DESIGN.md` + maqueta |
| **Sitio (build v1)** | ✅ **CONSTRUIDO** | `index.html` + css + js + data + assets |
| `SEO.md`, `QA.md`, `IMAGE_MANIFEST.md`, `AI_IMAGE_PROMPTS.md` | ✅ Entregables | Documentación del build |
| `README.md`, `CLAUDE.md`, `cmem.md`, `project_state.md` | ✅ Documentación | Estado y contexto |

## Decisiones confirmadas por el cliente

1. **WhatsApp** `5532400172` (confirmado; el `5615136270` del catálogo NO se usa).
2. **Sandía** de temporada → badge "Nuevo" (confirmado).
3. **Diferenciador** "ya preparadas, cero complicación" como eje central (confirmado).
4. **Diseño a respetar**: `stitch/draft.png` + `stitch/DESIGN.md` (logo original del cliente,
   Montserrat + Pacifico, paleta navy `#062B59`, etc.).

## Pendiente de confirmar por el cliente

1. **Condiciones de operación** (entregas, pedido mínimo, muestras, cobertura, pagos): **PENDIENTE** —
   el sitio remite a WhatsApp sin inventar datos.
2. **Precios**: no existen en catálogo → el sitio NO muestra precios (aceptado implícitamente).

## Build v1 — qué incluye

- One Page completa respetando el diseño de `stitch/draft.png` (header sticky, hero con script
  Pacifico, barra de confianza, catálogo con filtros, hechas para tu negocio, ¿por qué elegirnos?,
  proceso, FAQ, CTA, footer, WhatsApp flotante móvil).
- **Catálogo dinámico** desde `data/products.json` (10 sabores + sandía, datos reales del catálogo).
- **Fotos reales** de producto: recortes del PDF oficial (págs. 3–12) optimizados a WebP.
- SEO on-page completo: title, meta, canonical, OG, Twitter, JSON-LD (Organization + FAQPage),
  `robots.txt`, `sitemap.xml`, `favicon.svg`.
- Analítica preparada (eventos `whatsapp_click`, `catalog_view`, `catalog_filter`, `faq_open`).
- Validación local OK: 15/15 assets 200, JS sin errores de sintaxis, headless Chrome renderiza
  10 cards + 3 filtros + 7 FAQs + 19 enlaces wa.me.

## Validaciones pendientes (Fase 4/5)

- [ ] Revisión visual del cliente en navegador (mobile + desktop).
- [ ] Sustituir `hero-products.webp` y `food-drink.webp` por fotografía real premium
      (ver `AI_IMAGE_PROMPTS.md`).
- [ ] Auditoría Lighthouse post-deploy (objetivo P ≥ 90, resto ≥ 95).
- [ ] Auditoría accesibilidad (axe/pa11y) post-deploy.
- [ ] Habilitar GitHub Pages + registrar en Search Console.

## Reglas críticas del proyecto

- **NO inventar** sabores, precios, certificaciones, cobertura, testimonios, características.
- Dato no confirmado → etiquetar `PENDIENTE DE CONFIRMAR`.
- Conversión > claridad > producto > confianza > UX > diseño > SEO > animaciones > tecnología
  (brief, sección 69). Nunca sacrificar conversión por decoración.