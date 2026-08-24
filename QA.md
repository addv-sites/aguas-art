# QA.md — Agua Artesanal

> Checklist de control de calidad. Fecha: 2026-08-19 (build v1) · 2026-08-19 (revisión técnica +
> auditorías post-deploy) · 2026-08-24 (re-export de imágenes). Sitio en producción: https://addv-sites.github.io/aguas-art/

## Contenido / datos

- [x] No existen datos inventados en el sitio.
- [x] Todos los productos coinciden con el catálogo (10 sabores + temporada sandía).
- [x] No se muestran precios (no confirmados).
- [x] Sabores, presentaciones (1 L / 500 ml) y duración coinciden con el catálogo.
- [x] Las imágenes de sabores provienen del catálogo real (recortes).
- [x] WhatsApp correcto: `5532400172` (enlaces `wa.me/525532400172`).
- [x] Correo correcto: `Javieresp403@gmail.com`.
- [x] Recortes de botellas regenerados 2026-08-24 (700 px ancho, alturas variables 970–1621 px, object-fit contain) — pendiente validación visual final del cliente.
- [ ] Pendiente de sustitución: hero y food-drink (imágenes de dirección Stitch) — re-export 2026-08-24 corrigió dimensiones a 1220×686 / 1240×743 y AVIF optimizado, pero siguen siendo dirección Stitch.

## UX / Conversión

- [x] El usuario entiende el negocio en <5 s (hero con beneficio + diferenciador).
- [x] CTA WhatsApp aparece inmediatamente (header + hero).
- [x] Los enlaces WhatsApp abren con mensaje prellenado contextual.
- [x] Catálogo dinámico con filtros y CTA por producto.
- [x] WhatsApp flotante en móvil (con `padding-bottom` en body para no tapar el footer).
- [x] Reducción de fricción: cada sección conduce a una acción clara.

## Responsive

- [x] 375px · [x] 768px · [x] 1440px — probados con headless Chrome (sin overflow, layout correcto).
- [ ] 320px · [ ] 390px · [ ] 414px · [ ] 1024px · [ ] 1920px — CSS definido; falta prueba
      visual en navegador real (headless no baja de ~484 px).

## SEO

- [x] Title · description · canonical · OG · Twitter · favicon · sitemap · robots · H1 · alt · JSON-LD.
- [x] Lighthouse SEO: **100** (post-deploy).
- [ ] Verificación en Google Search Console (después de publicar).

## Performance (Lighthouse post-deploy — 2026-08-19; re-export 2026-08-24)

- [x] **Performance: 93** (objetivo ≥ 90) · CLS 0 · TBT 0 ms · LCP 3.0 s (4G throttled).
- [x] Imágenes en WebP/AVIF con dimensiones explícitas (re-export 2026-08-24: sabores 700 px ancho, hero 1220×686, food 1240×743).
- [x] Lazy loading en imágenes secundarias.
- [x] Fuentes con display=swap y preconnect.
- [x] JS mínimo (3 archivos, sin librerías).
- [x] Hero con `fetchpriority="high"` (LCP).

## Accesibilidad (WCAG AA)

- [x] Contraste suficiente (navy/blanco, azul/ice). Corregidos en revisión: botones WhatsApp
      `#177E44`, `section-eyebrow` `#2878AE`, textos secundarios ≥4.5:1.
- [x] Focus visible en botones (`:focus-visible`).
- [x] Alt text descriptivo.
- [x] aria-labels en menú móvil, filtros y CTAs.
- [x] `prefers-reduced-motion` (desactiva animaciones y scroll suave).
- [x] **Auditoría axe/Lighthouse: 100, sin violaciones** (post-deploy).

## Despliegue (GitHub Pages)

- [x] Sitio publicado: https://addv-sites.github.io/aguas-art/
- [x] Deploy automático en cada push a `main` (workflow `.github/workflows/pages.yml`).
- [x] Recursos verificados: HTML, CSS, JS, `products.json`, imágenes y favicon → 200.
- [x] Bug corregido: rutas de imágenes de `products.json` son relativas (`assets/...`).

## Cómo validar

```bash
# Servir local
python3 -m http.server 8000
# Abrir http://localhost:8000 y revisar consola (sin errores), catálogo cargado,
# enlaces WhatsApp con mensajes prellenados, filtros, FAQ, menú móvil.

# Auditoría Lighthouse completa
npx lighthouse https://addv-sites.github.io/aguas-art/ --only-categories=performance,accessibility,best-practices,seo
```