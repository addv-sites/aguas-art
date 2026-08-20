# QA.md — Agua Artesanal

> Checklist de control de calidad. Fecha: 2026-08-19 (primera validación del build v1).

## Contenido / datos

- [x] No existen datos inventados en el sitio.
- [x] Todos los productos coinciden con el catálogo (10 sabores + temporada sandía).
- [x] No se muestran precios (no confirmados).
- [x] Sabores, presentaciones (1 L / 500 ml) y duración coinciden con el catálogo.
- [x] Las imágenes de sabores provienen del catálogo real (recortes).
- [x] WhatsApp correcto: `5532400172` (enlaces `wa.me/525532400172`).
- [x] Correo correcto: `Javieresp403@gmail.com`.
- [ ] Pendiente de revisión visual: recortes de botellas (recorte automático).
- [ ] Pendiente de sustitución: hero y food-drink (imágenes de dirección Stitch).

## UX / Conversión

- [x] El usuario entiende el negocio en <5 s (hero con beneficio + diferenciador).
- [x] CTA WhatsApp aparece inmediatamente (header + hero).
- [x] Los enlaces WhatsApp abren con mensaje prellenado contextual.
- [x] Catálogo dinámico con filtros y CTA por producto.
- [x] WhatsApp flotante en móvil.
- [x] Reducción de fricción: cada sección conduce a una acción clara.

## Responsive

- [ ] 320px · [ ] 375px · [ ] 390px · [ ] 414px · [ ] 768px · [ ] 1024px · [ ] 1440px · [ ] 1920px
  (CSS definido para todos; falta prueba visual en navegador real).

## SEO

- [x] Title · description · canonical · OG · Twitter · favicon · sitemap · robots · H1 · alt · JSON-LD.
- [ ] Verificación en Google Search Console (después de publicar).

## Performance (objetivos Lighthouse)

- [x] Imágenes en WebP con dimensiones explícitas.
- [x] Lazy loading en imágenes secundarias.
- [x] Fuentes con display=swap y preconnect.
- [x] JS mínimo (3 archivos, sin librerías).
- [ ] Ejecutar Lighthouse real tras deploy y ajustar si P < 90 / resto < 95.

## Accesibilidad (WCAG AA)

- [x] Contraste suficiente (navy/blanco, azul/ice).
- [x] Focus visible en botones (`:focus-visible`).
- [x] Alt text descriptivo.
- [x] aria-labels en menú móvil, filtros y CTAs.
- [x] `prefers-reduced-motion` (desactiva animaciones y scroll suave).
- [ ] Auditoría axe/pa11y tras deploy.

## Cómo validar

```bash
# Servir local
python3 -m http.server 8000
# Abrir http://localhost:8000 y revisar consola (sin errores), catálogo cargado,
# enlaces WhatsApp con mensajes prellenados, filtros, FAQ, menú móvil.
```