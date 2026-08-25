# Agua Artesanal — Sitio corporativo One Page

One Page B2B de **Agua Artesanal** (CDMX): venta de aguas artesanales a restaurantes,
taquerías y marisquerías. **La conversión principal del sitio es contactar por WhatsApp.**

> ✅ **Estado actual:** sitio construido (v1) respetando el diseño aprobado (`stitch/draft.png`),
> **en producción** y con auditorías Lighthouse en objetivo. Ver `project_state.md` para el avance.

## El producto

Aguas frescas artesanales **100% naturales y ya preparadas** (listas para servir), envasadas en
PET reciclable de 1 L y 500 ml, refrigeración 3–5 °C.

- **10 sabores + 1 de temporada:** horchata, coco, avena con nuez, piña colada, naranja, jamaica,
  mazapán, limón con chía, tamarindo y sandía (temporada).
- **Tiempo garantizado:** de 3 a 10 días según el sabor (100% natural).
- **Sin precios publicados** — la cotización se realiza por WhatsApp.

## Cómo ejecutar el sitio en local

```bash
# Opción A — servidor local de Python (recomendado)
python3 -m http.server 8000
# abrir http://localhost:8000

# Opción B — abrir el archivo directamente
open index.html
```

El sitio es 100% estático: no requiere instalación de dependencias, Docker, backend ni base de datos.

## Estructura del repositorio

```text
/
├── index.html              # One Page completa (construida)
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── README.md
├── SEO.md                  # SEO on-page + structured data
├── AI_IMAGE_PROMPTS.md     # prompts para generar/mejorar imágenes
├── IMAGE_MANIFEST.md       # inventario de imágenes
├── MARKET_RESEARCH.md      # investigación de mercado CDMX
├── BRAND_STRATEGY.md       # posicionamiento y copy
├── QA.md                   # checklist de control de calidad
├── stitch/                 # diseño de referencia (draft.png + DESIGN.md + maqueta)
├── cat/                    # fuentes de verdad (brief, datos, catálogo PDF)
├── cmem.md                 # memoria compacta de datos y decisiones
├── project_state.md        # estado del proyecto
├── CLAUDE.md               # contexto operativo para sesiones de Claude
├── assets/images/          # logo, hero, food, sabores (WebP/AVIF responsive)
├── assets/fonts/           # montserrat/pacifico woff2 self-host
├── css/                    # styles.css, responsive.css, order-modal.css
├── js/                     # main.js, catalog.js, whatsapp.js, order.js
└── data/                   # products.json (catálogo dinámico)
```

## Cómo modificar el contenido

### Productos

Editar `data/products.json`. Cada producto soporta: `id`, `name`, `category`, `size`,
`description`, `duration`, `image`, `featured`, `badge`, `available`.
El catálogo se renderiza dinámicamente desde este archivo; no hace falta tocar el HTML.

### Número de WhatsApp / mensajes

Los datos de contacto se centralizan en `js/whatsapp.js` (constante `WHATSAPP_NUMBER` y `WA_MESSAGES`).
Cambia ahí el número y los mensajes prellenados y todo el sitio se actualizará. Formato:
`https://wa.me/<número>?text=<mensaje prellenado>`.

### Imágenes

Colocar las imágenes en `assets/images/` en WebP optimizado y actualizar las rutas en
`data/products.json` o el HTML. Referencias de prompts y estado: `AI_IMAGE_PROMPTS.md` e
`IMAGE_MANIFEST.md`.

### Colores / tipografía

Estilos en `css/styles.css` (variables CSS en `:root`) y `css/responsive.css` (breakpoints).

## Cómo desplegar en GitHub Pages

El deploy es **automático**: cualquier `push` a `main` dispara el workflow
`.github/workflows/pages.yml` (`actions/deploy-pages@v4`, sin build previo).

1. **URL pública:** `https://addv-sites.github.io/aguas-art/`.
2. Para verificar un deploy: *Actions* → workflow *Deploy to GitHub Pages* → *completed*.
3. **Regla de rutas:** las rutas de imágenes en `data/products.json` deben ser **relativas**
   (`assets/...`, sin `/` inicial) por la subruta `/aguas-art/` (las rutas absolutas dan 404).
4. Pendiente: registrar el sitio en Google Search Console y enviar `sitemap.xml`.

## Pautas de calidad

- Mobile-first; breakpoints 320 / 375 / 390 / 414 / 768 / 1024 / 1440 / 1920 px.
- Accesibilidad WCAG AA (contraste, focus visible, teclado, aria, `prefers-reduced-motion`).
- Lighthouse **2026-08-25:** Performance **98** · Accessibility 100 · Best Practices 100 · SEO 100 (objetivo: P ≥ 90, resto ≥ 95). CLS 0.013, TBT 0ms, LCP 2.4s, SI 1.5s local (Pages 98). Histórico 93→98.
- Critical CSS inline + self-host fonts + responsive srcset (320/560/700, hero 640/880/1220) + `requestIdleCallback` catálogo.
- Animaciones solo con `transform`/`opacity` (bajo costo, sin layout/paint).
- No se inventan datos: sabores, precios, certificaciones, cobertura o testimonios inexistentes
  quedan como `PENDIENTE DE CONFIRMAR`.

## Contacto

- WhatsApp: [5532400172](https://wa.me/525532400172)
- Correo: Javieresp403@gmail.com
- Facebook: [Agua Artesanal](https://www.facebook.com/profile.php?id=100071090715762)