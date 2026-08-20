# CLAUDE.md — Agua Artesanal

Contexto operativo persistente del repo para cualquier sesión futura de Claude en este proyecto.

## Qué es este proyecto

One Page B2B de **Agua Artesanal** (CDMX) para vender aguas artesanales a restaurantes,
taquerías y marisquerías. **Conversión principal: WhatsApp** (número: `5532400172`, a confirmar).

- **Sitio estático** para GitHub Pages. Sin backend, sin Docker, sin base de datos, sin frameworks
  pesados. Stack objetivo: HTML5 + CSS3 + JS vanilla (+ `data/products.json`, Lucide Icons).
- Repo remoto: `https://github.com/addv-sites/aguas-art` (rama `main`).

## Fuentes de verdad

- **`cat/mp.md`** — brief maestro (70 secciones): UX, CRO, SEO, neuroventas, identidad visual,
  estructura de la one page, paleta, tipografía, QA y criterios de éxito. **Leer antes de decidir.**
- **`cat/data.md`** — datos base del cliente (contactos, contexto, tecnología).
- **`cat/CATÁLOGO2025-AGUASARTESANALES-2.pdf`** — catálogo del producto. **Es imagen** (13 páginas,
  JPEG 2480×3425). No tiene texto extraíble; usar OCR (macOS Vision / swift) para leerlo.
- **`cmem.md`** — memoria compacta de datos extraídos y decisiones (inyectar en sesiones nuevas).

## Datos del producto (extraídos del catálogo)

- **Sabores (10 + temporada):** horchata, coco, avena con nuez, piña colada, naranja, jamaica,
  mazapán, limón con chía, tamarindo + **sandía (nuevo, de temporada)**.
- **Presentaciones:** PET reciclable de 1 L y 500 ml. Refrigeración 3–5 °C.
- **Duración garantizada:** naranja, limón con chía, sandía = 3 días · piña colada, horchata,
  avena con nuez, mazapán, coco = 5 días · tamarindo, jamaica = 10 días.
- **Atributos generales:** 100% natural, agua de sabor azucarada, control de calidad e higiene,
  envase PET reciclable. Detalle de vitaminas/beneficios por sabor en `cmem.md`.
- **NO hay precios en el catálogo.** El sitio no mostrará precios.

## Reglas del protocolo (skill addv-web-app)

1. **Analizar → Proponer → Confirmar → Implementar.** No escribir/modificar archivos ni cambiar
   estado sin confirmación explícita del segmento aprobado.
2. **No asumir requisitos.** Ante ambigüedad genuina, preguntar. Dato incierto → `PENDIENTE DE CONFIRMAR`.
3. **Regla crítica de producto:** nunca generar una imagen que contradiga el producto real (etiqueta,
   botella, sabor, cantidad). La IA puede mejorar iluminación/composición/fondo, no inventar atributos.
4. **Estándares de entrega:** UX/UI, accesibilidad (WCAG AA), performance (Lighthouse ≥ 90 P, ≥ 95
   resto), animaciones de bajo costo (transform/opacity), `prefers-reduced-motion`, cero regresiones.
5. **Análisis de mercado CDMX** ya realizado (ver `project_state.md`): diferenciador = "ya preparadas,
   cero complicación" vs competencia de concentrados.

## Arquitectura objetivo del sitio (del brief, sección 49)

```text
/
├── index.html
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── README.md
├── SEO.md
├── AI_IMAGE_PROMPTS.md
├── IMAGE_MANIFEST.md
├── assets/ (images/, icons/, fonts/)
├── css/ (styles.css, responsive.css)
├── js/ (main.js, catalog.js, whatsapp.js)
└── data/ (products.json)
```

## Identidad visual definida (brief)

- Paleta: Navy `#082B49` · Water Blue `#20B8D6` · Light Aqua `#8DE5F2` · Blanco `#FFFFFF` ·
  Ice `#F4F9FB` · Texto `#102A3A` · WhatsApp `#25D366` (solo icono WhatsApp) · Acento `#F47C48`
  (solo badges/promos).
- Tipografía: Plus Jakarta Sans (headings 700/800) + Inter (body 400–600).
- Dirección visual: "Premium Fresh Mexican" — sin clichés (sin sombreros/papel picado/cactus).
- Iconos: Lucide. Border radius 12–24px. Mobile-first.

## Comandos frecuentes

- Servir el sitio en local (una vez construido): `python3 -m http.server 8000` (o abrir `index.html`).
- Verificar imágenes del PDF: `python3 -c "import pymupdf; ..."` (pymupdf disponible en el entorno).
- OCR de páginas del catálogo: script Swift en `/var/folders/.../T/opencode/ocr.swift` (no versionar).
- No hay tests/build/lint por definir aún; se agregarán comandos aquí cuando exista el sitio.

## Recordatorio

El objetivo no es una página "bonita": es **la principal herramienta digital de ventas** de
Agua Artesanal. Cada sección debe conducir a WhatsApp.
