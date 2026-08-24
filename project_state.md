# Project State — Agua Artesanal

> Estado actualizado: 2026-08-24 · Sitio en producción + re-export post-crasheo.

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

## Revisión técnica (Fase 4 — 2026-08-19) ✅

Ejecutada con headless Chrome en viewports 320/375/768/1440 + harness de interacción:

- Sin overflow horizontal en ningún breakpoint.
- Catálogo dinámico funcional (filtro "De temporada" → 1 card; restaurar → 10).
- FAQ accordion abre/cierra correctamente.
- Fuentes Montserrat + Pacifico aplicadas; todas las imágenes cargadas (14/14).
- 19 enlaces WhatsApp con mensaje prellenado; dominio `wa.me/525532400172`.
- Sin errores de consola JS.

### Correcciones aplicadas en revisión (commit `5d013b0`)

- **Contraste WCAG AA**: botones WhatsApp → verde oscuro `#177E44` (el `#25D366` con texto blanco
  fallaba: 1.98:1). Textos secundarios ajustados a ≥4.5:1 (subtítulos, descripciones, duración,
  pasos, FAQ).
- **Barra flotante móvil**: `padding-bottom` en body para no tapar el footer en el scroll.

## Prototipo servido

- `python3 -m http.server 8000` → http://localhost:8000 (abierto en navegador del cliente para revisión visual).

## Pendientes (Fase 4/5)

- [x] Habilitar GitHub Pages → **https://addv-sites.github.io/aguas-art/** (deploy automático vía workflow).
- [x] Auditoría Lighthouse post-deploy: **Performance 93 · Accessibility 100 · Best Practices 100 · SEO 100**
      (objetivo P ≥ 90, resto ≥ 95 — CUMPLIDO). TBT 0 ms, CLS 0.
- [x] Auditoría accesibilidad (axe/Lighthouse): **100, sin violaciones**.
- [ ] Feedback visual del cliente sobre el prototipo en navegador (http://localhost:8000).
- [ ] Sustituir `hero-products.webp` y `food-drink.webp` por fotografía real premium
      (ver `AI_IMAGE_PROMPTS.md`).
- [ ] Registrar en Google Search Console y enviar sitemap.

### Deploy (2026-08-19) — bug crítico corregido

- En GitHub Pages el sitio vive en la subruta `/aguas-art/`: las rutas absolutas
  `/assets/...` de `data/products.json` resolvían a 404 (fuera del subdirectorio).
  **Fix:** rutas relativas (`assets/...`) en `products.json`.
- El modo legacy de Pages no re-desplegaba en cada push → se creó
  `.github/workflows/pages.yml` (deploy automático con `actions/deploy-pages@v4`).
- Corregido además: contraste de `.section-eyebrow` (`#4DA9E8`→`#2878AE`, 2.57→4.79:1)
  y aspect ratio del logo del footer (`height:auto`).

### Optimización de imágenes (2026-08-21)

- **AVIF con fallback WebP** para las dos imágenes grandes (hero y food-drink) vía `<picture>`
  (`<source type="image/avif">`). PNG duplicados eliminados.
- **Re-crop de los 10 sabores**: recortes ajustados al contorno real de cada botella
  (antes uniformes 700×1622; ahora alturas variables, p. ej. piña colada 700×1109).
- **Fix asociado**: `.product-media` pasó de `object-fit:cover` a `contain` +
  `object-position:center bottom` — con recortes ajustados, `cover` cortaba la base de las
  botellas más altas (mazapán, piña colada). Con `contain` la botella se muestra completa,
  alineada a la base de la tarjeta.
- Verificado en local: AVIF servidos 200 y solicitados por Chrome; catálogo dinámico renderiza
  10 tarjetas + 3 filtros; sin referencias rotas tras borrar los PNG; JS sin errores de sintaxis.

### Rediseño de footer + re-compresión (2026-08-21)

- **Footer rediseñado**: de 4 columnas planas a 2 columnas — marca (logo + tagline) y bloque
  "Contacto" con CTA WhatsApp destacado, email y Facebook con iconos Lucide (`i-mail`,
  `i-facebook` añadidos al sprite). En móvil se centra todo a 1 columna; `.footer-bottom`
  simplificado a una sola línea.
- **Re-compresión de los 10 sabores WebP** (~50% más livianos, p. ej. horchata 124→59 KB).
- Verificado: clases CSS del footer completas, iconos presentes en el sprite, `node --check`
  OK en los 3 JS.

### Re-export post-crasheo (2026-08-24)

- **Contexto**: sesión interrumpida dejó 12 PNGs huérfanos sin trackear (`assets/images/flavors/*.png`
  + `hero-products.png` + `food-drink.png`, 1.6–2.3 MB c/u, generados 2026-08-24 14:39–16:23).
  Los WebP existentes habían quedado en 1080×1500 uniformes (estirados) tras la última recompresión,
  contradiciendo el re-crop variable de 2026-08-21.
- **Acción**: reconversión con Pillow (LANCZOS) a WebP q75/method 4 y AVIF q50:
  sabores a 700 px ancho con alturas variables reales (970–1621 px), hero 1220×686, food 1240×743.
  Pesos: sabores 50–97 KB, hero 109 KB WebP / 68 KB AVIF, food 82 KB WebP / 50 KB AVIF.
- **Limpieza**: PNGs huérfanos eliminados (estado previo “PNG duplicados eliminados” restaurado).
- **Docs**: `IMAGE_MANIFEST.md` actualizado con dimensiones reales; `QA.md` marcado como re-export.
- **Verificación**: `python3 -m http.server` → 10 sabores 200, hero/food AVIF+WebP 200,
  `node --check` OK en 3 JS, headless Chrome renderiza sin errores.

## Reglas críticas del proyecto

- **NO inventar** sabores, precios, certificaciones, cobertura, testimonios, características.
- Dato no confirmado → etiquetar `PENDIENTE DE CONFIRMAR`.
- Conversión > claridad > producto > confianza > UX > diseño > SEO > animaciones > tecnología
  (brief, sección 69). Nunca sacrificar conversión por decoración.