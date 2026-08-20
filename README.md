# Agua Artesanal — Sitio corporativo One Page

One Page B2B de **Agua Artesanal** (CDMX): venta de aguas artesanales a restaurantes,
taquerías y marisquerías. **La conversión principal del sitio es contactar por WhatsApp.**

> ⚠️ **Estado actual:** el sitio web aún está en fase de propuesta/aprobación. Este repo contiene
> la documentación del proyecto, el brief (`cat/mp.md`, `cat/data.md`) y el catálogo fuente
> (`cat/CATÁLOGO2025-AGUASARTESANALES-2.pdf`). Ver `project_state.md` para el avance.

## El producto

Aguas frescas artesanales **100% naturales y ya preparadas** (listas para servir), envasadas en
PET reciclable de 1 L y 500 ml, refrigeración 3–5 °C.

- **10 sabores + 1 de temporada:** horchata, coco, avena con nuez, piña colada, naranja, jamaica,
  mazapán, limón con chía, tamarindo y sandía (temporada).
- **Tiempo garantizado:** de 3 a 10 días según el sabor (100% natural, sin conservadores).
- **Sin precios publicados** — la cotización se realiza por WhatsApp.

## Cómo ejecutar el sitio en local

Una vez construido el sitio (cuando exista `index.html` en la raíz):

```bash
# Opción A — servidor local de Python
python3 -m http.server 8000
# abrir http://localhost:8000

# Opción B — abrir el archivo directamente
open index.html
```

El sitio es 100% estático: no requiere instalación de dependencias, Docker, backend ni base de datos.

## Estructura del repositorio

```text
/
├── index.html              # One Page (pendiente de construcción)
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── README.md
├── SEO.md                  # pendiente
├── AI_IMAGE_PROMPTS.md     # pendiente
├── IMAGE_MANIFEST.md       # pendiente
├── MARKET_RESEARCH.md      # pendiente
├── BRAND_STRATEGY.md       # pendiente
├── BRAND_IDENTITY.md       # pendiente
├── SITE_ARCHITECTURE.md    # pendiente
├── QA.md                   # pendiente
├── cat/                    # fuentes de verdad (brief, datos, catálogo PDF)
├── cmem.md                 # memoria compacta de datos y decisiones
├── project_state.md        # estado del proyecto
├── CLAUDE.md               # contexto operativo para sesiones de Claude
├── assets/                 # images/, icons/, fonts/
├── css/                    # styles.css, responsive.css
├── js/                     # main.js, catalog.js, whatsapp.js
└── data/                   # products.json
```

## Cómo modificar el contenido (cuando el sitio exista)

### Productos

Editar `data/products.json`. Cada producto soporta: `id`, `name`, `category`, `flavor`, `size`,
`description`, `price` (nulo si no hay precio), `image`, `featured`, `badge`, `available`.
El catálogo se renderiza dinámicamente desde este archivo; no hace falta tocar el HTML.

### Número de WhatsApp / correo / Facebook

Los datos de contacto se centralizan en un único módulo (`js/whatsapp.js`). Cambia el número en ese
archivo y todos los CTAs del sitio se actualizarán (los enlaces usan el formato
`https://wa.me/<número>?text=<mensaje prellenado>`).

### Mensajes prellenados de WhatsApp

El mensaje se arma contextualmente (hero, producto, cotización, CTA final). Se editan en
`js/whatsapp.js`.

### Imágenes

Colocar las imágenes en `assets/images/` en formato WebP/AVIF optimizado y actualizar las rutas en
`data/products.json` o el HTML. Referencias de prompts de generación/mejora: `AI_IMAGE_PROMPTS.md` e
`IMAGE_MANIFEST.md`.

## Cómo desplegar en GitHub Pages

El sitio se publica desde la rama `main`:

1. **Habilitar Pages:** en el repo → *Settings* → *Pages* → *Source: Deploy from a branch* → rama
   `main`, carpeta `/ (root)`.
2. **Publicar:** cualquier `push` a `main` dispara la publicación automática.
3. **URL:** `https://addv-sites.github.io/aguas-art/`.

Alternativa: publicar desde una carpeta `docs/` o usar Actions con `actions/deploy-pages` (documentado
en `QA.md` cuando se decida el método final).

## Pautas de calidad

- Mobile-first; breakpoints 320 / 375 / 390 / 414 / 768 / 1024 / 1440 / 1920 px.
- Accesibilidad WCAG AA (contraste, focus visible, teclado, aria, `prefers-reduced-motion`).
- Lighthouse objetivo: Performance ≥ 90, resto ≥ 95.
- Animaciones solo con `transform`/`opacity` (bajo costo, sin layout/paint).
- No se inventan datos: sabores, precios, certificaciones, cobertura o testimonios inexistentes
  quedan como `PENDIENTE DE CONFIRMAR`.

## Contacto

- WhatsApp: [5532400172](https://wa.me/5215532400172)
- Correo: Javieresp403@gmail.com
- Facebook: [Agua Artesanal](https://www.facebook.com/profile.php?id=100071090715762)