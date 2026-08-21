# IMAGE_MANIFEST.md — Agua Artesanal

> Inventario de imágenes del sitio. Fecha: 2026-08-21.
> Fuentes: catálogo oficial (PDF) · diseño Stitch aprobado (`stitch/draft.png`).

## Regla de producto

Ninguna imagen contradice el producto real. Las fotos de sabores se recortaron del **catálogo oficial**
(etiqueta y botella reales). Las imágenes generadas por Stitch se usan solo como dirección visual y
están marcadas para sustitución/validación antes de producción.

## Imágenes en producción

| Archivo | Sección | Dimensiones | Formato | Fuente | Estado |
|---|---|---|---|---|---|
| `assets/images/logo.webp` | Header/Footer | 730×600 | WebP | Logo original del cliente | ✅ Real, uso autorizado |
| `assets/images/hero-products.avif` + `.webp` | Hero | 1220×687 | AVIF + WebP (fallback) | Stitch (draft) | ⚠️ Visual de dirección — sustituir por foto real premium |
| `assets/images/food-drink.avif` + `.webp` | Hechas para tu negocio | 1240×595 | AVIF + WebP (fallback) | Stitch (draft) | ⚠️ Visual de dirección — sustituir por foto real gastronómica |
| `assets/images/flavors/sandia.webp` | Catálogo | 700×1621 | WebP | Catálogo PDF pág. 3 | ✅ Real (recorte ajustado por botella) |
| `assets/images/flavors/tamarindo.webp` | Catálogo | 700×1625 | WebP | Catálogo PDF pág. 4 | ✅ Real (recorte ajustado por botella) |
| `assets/images/flavors/naranja.webp` | Catálogo | 700×1622 | WebP | Catálogo PDF pág. 5 | ✅ Real (recorte ajustado por botella) |
| `assets/images/flavors/limon-chia.webp` | Catálogo | 700×1622 | WebP | Catálogo PDF pág. 6 | ✅ Real (recorte ajustado por botella) |
| `assets/images/flavors/jamaica.webp` | Catálogo | 700×1621 | WebP | Catálogo PDF pág. 7 | ✅ Real (recorte ajustado por botella) |
| `assets/images/flavors/pina-colada.webp` | Catálogo | 700×1109 | WebP | Catálogo PDF pág. 8 | ✅ Real (recorte ajustado por botella) |
| `assets/images/flavors/horchata.webp` | Catálogo | 700×1625 | WebP | Catálogo PDF pág. 9 | ✅ Real (recorte ajustado por botella) |
| `assets/images/flavors/avena-nuez.webp` | Catálogo | 700×1622 | WebP | Catálogo PDF pág. 10 | ✅ Real (recorte ajustado por botella) |
| `assets/images/flavors/mazapan.webp` | Catálogo | 700×1548 | WebP | Catálogo PDF pág. 11 | ✅ Real (recorte ajustado por botella) |
| `assets/images/flavors/coco.webp` | Catálogo | 700×1622 | WebP | Catálogo PDF pág. 12 | ✅ Real (recorte ajustado por botella) |
| `favicon.svg` | Head | 64×64 | SVG | Derivado de marca | ✅ |

Notas técnicas:

- **AVIF con fallback**: hero y food-drink se sirven vía `<picture>` (`<source type="image/avif">`
  + `<img>` WebP). Los PNG duplicados (`hero-products.png`, `food-drink.png`) fueron eliminados.
- **Recortes de sabores**: re-crop ajustado al contorno real de cada botella (2026-08-21).
  El contenedor `.product-media` usa `aspect-ratio:0.72` + `object-fit:contain` para mostrar
  la botella completa sin recortarla, alineada a la base de la tarjeta.

## Imágenes del draft Stitch conservadas como referencia

`stitch/draft.png` · `stitch/assets/design-reference.png` · `stitch/assets/mobile-preview.png` ·
`stitch/assets/logo-original-enhanced.jpg` · `stitch/assets/flavor-*.png` (recortes de la referencia).

## Pendientes

- [ ] Sustituir `hero-products.avif/webp` y `food-drink.avif/webp` por fotografía real premium (ver `AI_IMAGE_PROMPTS.md`).
- [ ] Confirmar con el cliente el uso de las imágenes de sabores del catálogo.