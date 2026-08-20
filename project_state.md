# Project State — Agua Artesanal

> Estado actualizado: 2026-08-19 · Última actualización tras análisis inicial y documentación del repo.

## Resumen del proyecto

Sitio corporativo One Page B2B para **Agua Artesanal** (CDMX): venta de aguas artesanales
a restaurantes, taquerías y marisquerías. **La conversión principal es WhatsApp.**

- Tipo: sitio estático para **GitHub Pages** (sin backend, sin Docker, sin DB).
- Repo: `addv-sites/aguas-art` → https://github.com/addv-sites/aguas-art
- Publicación planificada: GitHub Pages (`addv-sites.github.io/aguas-art`).

## Qué existe hoy (2026-08-19)

| Artefacto | Estado | Nota |
|---|---|---|
| `cat/mp.md` | ✅ Documento maestro (brief completo) | Fuente de verdad de requisitos, 70 secciones |
| `cat/data.md` | ✅ Datos base del cliente | Contactos, contexto, tecnología |
| `cat/CATÁLOGO2025-AGUASARTESANALES-2.pdf` | ✅ Catálogo fuente (13 págs, imagen) | Sin texto; extraído vía OCR |
| `README.md`, `project_state.md`, `CLAUDE.md`, `cmem.md` | ✅ Documentación del repo | Este commit |
| Sitio web | ⬜ NO construido | En fase de propuesta/aprobación |

## Análisis completado

1. **Brief**: leído y analizado (mp.md + data.md).
2. **Catálogo**: 13 páginas PDF sin texto extraíble → OCR con Vision framework (macOS). Datos
   extraídos y verificados (sabores, presentaciones, duración, características). Ver `cmem.md`.
3. **Investigación de mercado ligera CDMX**: competidores analizados (Porto Alegre, Frutiva,
   JC Regios, La Ranita de la Paz, Don Zabor, Pulpalove, La Frutal Michoacana, Happiness in a Can,
   Aguazul, BENATI).
4. **Facebook**: analizado visualmente como referencia de identidad (sin imágenes descargadas aún).

## Decisión estratégica tomada (propuesta en espera)

**Diferenciador propuesto:** "Aguas frescas 100% naturales, **ya preparadas**. Llegas, abres, sirves."
La competencia CDMX vende concentrados (trabajo + merma para el restaurante); Agua Artesanal vende
producto terminado. Eje de copy, hero y sección de beneficios.

## Pendiente de confirmar por el cliente

1. **Número de WhatsApp correcto**: ✅ **CONFIRMADO** — `5532400172` (fuente: brief mp.md, decisión del cliente 2026-08-19). El número `5615136270` del catálogo NO se usa.
2. **Sabor de temporada "Sandía"**: ✅ **CONFIRMADO** — se lanzará como "Nuevo".
3. **Condiciones de operación** (entregas, pedido mínimo, muestras, cobertura, pagos): **PENDIENTE** — el sitio remitirá a WhatsApp sin inventar datos.
4. **Precios**: no existen en catálogo → el sitio NO mostrará precios (CTA "Quiero cotizar"). (Aceptado implícitamente con la propuesta.)
5. **Diferenciador "ya preparada, cero complicación"**: ✅ **CONFIRMADO** como eje central del sitio.

## Próximos pasos (secuencia propuesta)

1. Fase 1 — `MARKET_RESEARCH.md` + `BRAND_STRATEGY.md` (cristaliza diferenciador y posicionamiento). ✅ **ENTREGADO (2026-08-19)**.
2. Fase 2 — Extraer/seleccionar imágenes del PDF y generar `AI_IMAGE_PROMPTS.md` + `IMAGE_MANIFEST.md`.
3. Fase 3 — Construcción del sitio (HTML/CSS/JS estáticos) + SEO + analítica de eventos.
4. Fase 4 — QA en breakpoints (320–1920) + checklist del brief + `QA.md` + `SEO.md` + `SITE_ARCHITECTURE.md`.
5. Fase 5 — Deploy a GitHub Pages.

## Reglas críticas del proyecto

- **NO inventar** sabores, precios, certificaciones, cobertura, testimonios, características.
- Dato no confirmado → etiquetar `PENDIENTE DE CONFIRMAR`.
- Conversión > claridad > producto > confianza > UX > diseño > SEO > animaciones > tecnología
  (brief, sección 69). Nunca sacrificar conversión por decoración.
