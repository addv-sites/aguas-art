# DESIGN.md — Agua Artesanal
## Especificación visual para OpenCode

> Este documento define la implementación de la One Page a partir de la referencia visual `assets/design-reference.png`.
> El objetivo es reproducir fielmente la composición, jerarquía, estilo y comportamiento visual de la referencia, respetando el logo original proporcionado por el cliente.

---

## 1. Regla principal

NO rediseñar la marca.

Usar el logo original de Agua Artesanal como fuente de identidad:

- `assets/logo-transparent.png`
- `assets/logo-original-enhanced.jpg`

El logo original es manuscrito/script, azul marino, con detalles decorativos botánicos y rayos/sol alrededor.

La implementación debe conservar esa personalidad.

No sustituirlo por un logo tipográfico nuevo.

---

## 2. Concepto visual

**Premium Fresh Mexican / Artesanal contemporáneo**

Sensación:

- fresco
- limpio
- artesanal
- femenino sin ser infantil
- gastronómico
- confiable
- cercano
- profesional
- visualmente apetitoso

El sitio debe parecer una marca real de bebidas artesanales con una presencia digital profesional.

Evitar estética corporativa fría.

Evitar estética mexicana cliché.

No utilizar cactus, sombreros, papel picado ni motivos folklóricos genéricos.

---

## 3. Paleta visual

La referencia utiliza como base un azul marino profundo con fondos blancos y azul hielo.

### Primarios

```css
--navy: #062B59;
--navy-dark: #041D3D;
--blue: #4DA9E8;
--blue-light: #A9DDF4;
--ice: #F2FAFD;
--white: #FFFFFF;
```

### Acentos

```css
--whatsapp: #25D366;
--gold: #C9A75B;
--botanical: #8DBB91;
--coral-soft: #E9A9A2;
```

El verde WhatsApp se utiliza únicamente para acciones de WhatsApp.

El dorado y los tonos botánicos son detalles, no colores dominantes.

---

## 4. Tipografía

### Headings

Usar:

**Montserrat**

Pesos:

- 700
- 800

### Script/acento

Usar una fuente script disponible vía Google Fonts como:

**Pacifico**

o una alternativa equivalente.

IMPORTANTE:

El script no debe reemplazar al logo.

Se utiliza solamente para palabras destacadas en titulares, por ejemplo:

> algo que quieran

El logo siempre es imagen.

### Body

**Montserrat**

Pesos:

- 400
- 500
- 600

---

## 5. Layout general

Desktop:

- max-width aproximado: 1500px
- layout central
- bordes redondeados externos
- fondo general blanco
- header fijo/pegajoso
- secciones con mucho espacio negativo

Mobile:

- ancho completo
- navegación compacta
- CTA WhatsApp visible
- contenido apilado
- tarjetas horizontales o grid de 2 columnas cuando sea apropiado

---

# 6. HEADER

Altura aproximada:

72–84px.

Fondo:

rgba(255,255,255,.94)

Backdrop blur.

Logo:

izquierda.

Desktop:

```text
LOGO | INICIO | PRODUCTOS | BENEFICIOS | ¿POR QUÉ ELEGIRNOS? | TESTIMONIOS | CONTACTO | [PEDIR POR WHATSAPP]
```

El CTA es verde WhatsApp.

Botón:

- pill
- 44px mínimo de alto
- icono WhatsApp
- texto blanco
- hover ligeramente más oscuro

Mobile:

```text
[☰]      LOGO      [WhatsApp]
```

---

# 7. HERO

La referencia utiliza una composición dividida:

Izquierda:

copy.

Derecha:

producto.

Fondo:

blanco + manchas watercolor azul muy suaves.

Decoración:

- hojas lineales
- pequeñas estrellas
- gotas
- trazos botánicos
- salpicaduras de agua

### Headline

Usar:

> Dale a tus clientes
> **algo que quieran**
> volver a pedir

La frase "algo que quieran" puede usar tipografía script/acento azul claro.

### Subheadline

> Aguas artesanales de alta calidad para restaurantes, taquerías, marisquerías y negocios que buscan lo mejor para sus clientes.

### CTA

Primario:

**PEDIR POR WHATSAPP**

Secundario:

**VER SABORES**

---

# 8. ICONOS DEL HERO

Cuatro beneficios cortos:

1. 100% PURA Y NATURAL
2. INGREDIENTES SELECCIONADOS
3. ENTREGAS RÁPIDAS
4. ATENCIÓN 100% POR WHATSAPP

IMPORTANTE:

Estos claims deben verificarse contra la información real del cliente antes de publicación.

Si no están confirmados, cambiar por beneficios comprobados.

---

# 9. BARRA DE CONFIANZA

Sección azul muy clara.

Cuatro bloques:

- experiencia
- negocios/clientes
- calidad
- atención

Usar iconos lineales.

No inventar números.

Si el catálogo no confirma "25+ años", sustituirlo.

---

# 10. PRODUCTOS / SABORES

Título:

**NUESTROS SABORES**

Subtítulo:

> La presentación ideal para cada necesidad

Mostrar cards horizontales.

Cada card:

- imagen
- nombre
- presentación
- icono pequeño de WhatsApp

La referencia muestra:

- Jamaica
- Horchata
- Tamarindo
- Limón con Chía
- Maracuyá

IMPORTANTE:

Estos nombres son únicamente los que aparecen en la referencia visual generada. Validar contra el catálogo antes de producción.

No inventar sabores.

---

# 11. PRODUCT CARD

Dimensiones desktop aproximadas:

160–190px de ancho.

Fondo:

#FFFFFF

Border:

1px #E4EEF5

Radius:

14–18px

Shadow:

0 8px 30px rgba(6,43,89,.07)

Hover:

- translateY(-4px)
- shadow más pronunciado
- imagen scale(1.02)

---

# 12. SECCIÓN "HECHAS PARA TU NEGOCIO"

Layout:

50% contenido / 50% fotografía.

Título:

**HECHAS PARA TU NEGOCIO**

Tres perfiles:

### RESTAURANTES

Complementa la experiencia gastronómica.

### TAQUERÍAS

El acompañamiento perfecto para cada orden.

### MARISQUERÍAS

Sabores que realzan el sabor del mar.

La fotografía debe mostrar comida mexicana y bebida.

---

# 13. SECCIÓN "¿POR QUÉ ELEGIR AGUA ARTESANAL?"

Fondo:

azul marino.

Texto blanco.

Cards/columnas internas.

Cinco atributos:

- Calidad premium
- Variedad de sabores
- Presentación ideal
- Servicio confiable
- Precios competitivos

Estos textos deben ajustarse al catálogo/información real.

---

# 14. FOTOGRAFÍA

Usar:

- hielo
- gotas
- fruta
- botellas
- vasos transparentes
- hojas
- ingredientes
- tacos
- mariscos
- mesas gastronómicas

La fotografía debe ser luminosa.

Tratamiento:

- high-key
- azul frío
- blancos limpios
- contraste moderado
- saturación natural

No usar fotografías oscuras.

---

# 15. PROCESO

Título:

**PEDIR ES ASÍ DE FÁCIL**

4 pasos:

01 — Elige tus sabores y presentaciones.

02 — Escríbenos por WhatsApp.

03 — Confirmamos tu pedido.

04 — Recibe tu pedido.

Los detalles de entrega deben modificarse según la operación real.

---

# 16. CTA INTERMEDIO

Fondo azul con imagen de agua.

Headline:

> ¿LISTO PARA OFRECER ALGO DIFERENTE?

Texto:

> Escríbenos por WhatsApp y recibe atención inmediata.

CTA:

**PEDIR POR WHATSAPP**

---

# 17. FOOTER

Fondo:

#062B59

Logo en blanco si existe versión apropiada.

Datos:

WhatsApp:

5532400172

Correo:

Javieresp403@gmail.com

Facebook:

perfil oficial proporcionado por cliente.

---

# 18. MOBILE

La referencia incluye una vista mobile independiente.

Prioridades:

1. Logo.
2. menú.
3. WhatsApp.
4. Hero.
5. producto.
6. sabores.
7. beneficios.
8. CTA.

CTA WhatsApp flotante o sticky inferior.

Nunca tapar contenido.

---

# 19. ANIMACIONES

Usar solamente animaciones suaves:

- fade-up
- reveal
- scale pequeño
- hover
- floating water droplets
- product hover

Duración:

250–700ms.

Easing:

ease-out.

Implementar:

```css
@media (prefers-reduced-motion: reduce)
```

y desactivar animaciones.

---

# 20. RESPONSIVE

Breakpoints:

```text
320px
375px
390px
414px
768px
1024px
1280px
1440px
1920px
```

Mobile first.

---

# 21. PERFORMANCE

- WebP/PNG optimizados.
- lazy loading.
- width/height en imágenes.
- fuentes con display swap.
- JavaScript mínimo.
- sin backend.
- sin base de datos.
- GitHub Pages compatible.

---

# 22. WHATSAPP

Número:

5532400172

Crear función:

```js
createWhatsAppLink(message)
```

Mensaje general:

"Hola, vi el sitio de Agua Artesanal y quiero conocer sus sabores y opciones para mi negocio."

Producto:

"Hola, me interesa [PRODUCTO]. Quiero conocer disponibilidad y precio."

---

# 23. REGLAS DE CONTENIDO

NO inventar:

- precios
- clientes
- testimonios
- certificaciones
- años de experiencia
- entregas
- cobertura
- ingredientes
- sabores

El catálogo real es la fuente de verdad.

---

# 24. ARCHIVOS

```text
index.html
styles.css
script.js
assets/
  logo-transparent.png
  logo-original-enhanced.jpg
  hero-products.png
  flavor-jamaica.png
  flavor-horchata.png
  flavor-tamarindo.png
  flavor-limon-chia.png
  flavor-maracuya.png
  food-drink.png
  flavor-table.png
  design-reference.png
```

---

# 25. CRITERIO DE FIDELIDAD

La implementación debe reproducir:

- proporciones;
- jerarquía;
- colores;
- espacios;
- tarjetas;
- botones;
- estructura;
- estética watercolor;
- composición;
- tratamiento fotográfico;
- versión mobile.

No crear otra dirección artística.

La imagen `assets/design-reference.png` es la referencia visual principal.
