# IMAGE_MANIFEST.md — Agua Artesanal

> Inventario de imágenes del sitio. Fecha: 2026-08-25 · Lighthouse 98.
> Fuentes: catálogo oficial (PDF) · diseño Stitch aprobado (`stitch/draft.png`).

## Regla de producto

Ninguna imagen contradice el producto real. Las fotos de sabores se recortaron del **catálogo oficial**
(etiqueta y botella reales). Las imágenes generadas por Stitch se usan solo como dirección visual y
están marcadas para sustitución/validación antes de producción.

## Imágenes en producción

| Archivo | Sección | Dimensiones | Formato | Fuente | Estado |
|---|---|---|---|---|---|
| `assets/images/logo-240.webp` | Header/Footer 1x | 240×160 | WebP | Logo original cliente | ✅ Real |
| `assets/images/logo-480.webp` | Header/Footer 2x | 480×319 | WebP | Logo original cliente | ✅ Real |
| `assets/images/logo.webp` | Fallback/OG | 730×486 | WebP | Logo original cliente | ✅ |
| `assets/images/hero-products-640.avif` | Hero mobile | 640×360 | AVIF | Stitch | ⚠️ Dirección — 23KB |
| `assets/images/hero-products-640.webp` | Hero mobile | 640×360 | WebP | Stitch | ⚠️ 34KB |
| `assets/images/hero-products-880.avif` | Hero desktop exact (871 display) | 880×495 | AVIF q50 | Stitch | ⚠️ 38KB — LCP |
| `assets/images/hero-products-880.webp` | Hero desktop exact | 880×495 | WebP q78 | Stitch | ⚠️ 66KB |
| `assets/images/hero-products-1220.avif` | Hero fallback | 1220×686 | AVIF q50 | Stitch | ⚠️ 69KB |
| `assets/images/hero-products-1220.webp` | Hero fallback | 1220×686 | WebP q78 | Stitch | ⚠️ 102KB |
| `assets/images/food-drink-640.avif` | Negocio mobile | 640×383 | AVIF | Stitch | ⚠️ 19KB |
| `assets/images/food-drink-640.webp` | Negocio mobile | 640×383 | WebP | Stitch | ⚠️ 30KB |
| `assets/images/food-drink-1240.webp` | Negocio desktop | 1240×743 | WebP | Stitch | ⚠️ 77KB |
| `assets/images/food-drink.avif` | Negocio fallback | 1240×743 | AVIF | Stitch | ⚠️ 50KB |
| `assets/images/flavors/sandia-320.webp` | Catálogo 1x | 320×443 | WebP q75 | Catálogo p.3 | ✅ |
| `assets/images/flavors/sandia-560.webp` | Catálogo 2x retina | 560×776 | WebP | Catálogo p.3 | ✅ |
| `assets/images/flavors/sandia.webp` | Catálogo 700w | 700×970 | WebP | Catálogo p.3 | ✅ 78KB |
| `assets/images/flavors/tamarindo-320/560.webp` | Catálogo | 320/560 | WebP | Catálogo p.4 | ✅ |
| `assets/images/flavors/naranja-320/560.webp` | Catálogo | 320/560 | WebP | Catálogo p.5 | ✅ |
| `assets/images/flavors/limon-chia-320/560.webp` | Catálogo | 320/560 | WebP | Catálogo p.6 | ✅ |
| `assets/images/flavors/jamaica-320/560.webp` | Catálogo | 320/560 | WebP | Catálogo p.7 | ✅ |
| `assets/images/flavors/pina-colada-320/560.webp` | Catálogo | 320/560 | WebP | Catálogo p.8 | ✅ |
| `assets/images/flavors/horchata-320/560.webp` | Catálogo | 320/560 | WebP | Catálogo p.9 | ✅ |
| `assets/images/flavors/avena-nuez-320/560.webp` | Catálogo | 320/560 | WebP | Catálogo p.10 | ✅ |
| `assets/images/flavors/mazapan-320/560.webp` | Catálogo | 320/560 | WebP | Catálogo p.11 | ✅ |
| `assets/images/flavors/coco-320/560.webp` | Catálogo | 320/560 | WebP | Catálogo p.12 | ✅ |
| `assets/fonts/montserrat-latin.woff2` | Tipografía | 35KB | woff2 | Self-host latin | ✅ swap |
| `assets/fonts/pacifico-latin.woff2` | Tipografía | 22KB | woff2 | Self-host latin | ✅ swap |
| `favicon.svg` | Head | 64×64 | SVG | Derivado marca | ✅ |

Notas técnicas (2026-08-25):

- **Responsive srcset** (`js/catalog.js:17` `srcSetFor`): sabores `320w/560w/700w` con `sizes="(max-width:760px) 50vw, (max-width:1180px) 25vw, 18vw"`; `src` fallback `320w` (antes `700w`). Hero `640/880/1220` AVIF+WebP vía `<picture>` + preload `imagesrcset`. Logo `240/480` 1x/2x. `hero-880` es exacto para display 871 y ahorra 31KB vs 1220.
- **AVIF con fallback**: hero y food-drink vía `<picture>`; PNG duplicados eliminados.
- **Critical inline 6KB** en `index.html:34` (header+hero+trust) + `preload onload` para `styles/responsive/order-modal` y `fonts.css` local; `content-visibility:auto` en `.product-grid` (800px intrinsic) + `requestIdleCallback` en `catalog.js`.
- **Self-host fonts**: `assets/fonts/fonts.css` 1.3KB con 6×`@font-face` swap; preload `woff2` 35+22KB (elimina `fonts.googleapis` chain 760ms → 150ms).
- **Pesos**: sabores `320 ~9-19KB / 560 ~23-52KB / 700 ~45-78KB`; hero total ~38KB avif LCP; ahorro SI 3.9→1.5s local.

## Imágenes del draft Stitch conservadas como referencia

`stitch/draft.png` · `stitch/assets/design-reference.png` · `stitch/assets/mobile-preview.png` ·
`stitch/assets/logo-original-enhanced.jpg` · `stitch/assets/flavor-*.png`.

## Pendientes

- [ ] Sustituir `hero-products.*` y `food-drink.*` por fotografía real premium (ver `AI_IMAGE_PROMPTS.md`).
- [ ] Confirmar con cliente uso de imágenes de sabores del catálogo.
