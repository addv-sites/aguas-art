# AI_IMAGE_PROMPTS.md — Agua Artesanal

> Prompts para generar o mejorar imágenes con IA. Fecha: 2026-08-19.
> Regla: la IA puede mejorar iluminación/composición/fondo, NUNCA alterar etiqueta, botella, sabor o presentación.

## IMAGE: hero-product.webp

**OBJETIVO:** Fotografía principal del Hero (derecha del headline).

**REFERENCIA:** `assets/images/hero-products.webp` (actual) · `stitch/draft.png` (composición deseada)

**PROMPT:**
> Fotografía comercial premium de bebidas mexicanas artesanales. Grupo de botellas PET de 1 litro y
> 500 ml con etiqueta azul marino de la marca Agua Artesanal, sabores jamaica, horchata y tamarindo,
> con hielo, gotas de condensación, frutas y flores naturales alrededor. Fondo blanco limpio con
> degradados azul agua suaves. Iluminación high-key, luminosa, apetitosa. Composición horizontal
> estilo catálogo gastronómico premium. Mantener exactamente la etiqueta, botella, colores y logotipo
> del producto real.

**FORMATO:** 16:9 (610×345 como referencia)

**ESTILO:** Fotografía comercial premium de bebidas; high-key, azul frío, blancos limpios.

**RESTRICCIONES:** No alterar etiqueta, botella, sabor ni logotipo. No inventar sabores. No agregar
texto. No usar clichés mexicanos (sombreros, papel picado).

---

## IMAGE: food-drink.webp

**OBJETIVO:** Fotografía de la sección "Hechas para tu negocio" (comida mexicana + bebida).

**REFERENCIA:** `assets/images/food-drink.webp` (actual) · `stitch/draft.png`

**PROMPT:**
> Fotografía gastronómica premium: mesa de restaurante mexicano contemporáneo con tacos y una botella
> de agua artesanal con etiqueta azul marino "Agua Artesanal" con hielo y vaso servido al lado.
> Luz natural luminosa, fondo desenfocado de restaurante moderno, composición editorial limpia.
> Mantener exactamente el producto real (botella, etiqueta, sabor).

**FORMATO:** 2:1 (490×235 como referencia)

**ESTILO:** Editorial gastronómico premium; high-key, colores naturales, apetitoso.

**RESTRICCIONES:** No alterar producto. No inventar sabores ni logos.

---

## IMAGE: flavor-<sabor>.webp (opcional, mejora de recortes)

**OBJETIVO:** Mejorar iluminación/composición de los recortes del catálogo si el cliente lo solicita.

**REFERENCIA:** `assets/images/flavors/<sabor>.webp`

**PROMPT:**
> Mejorar la fotografía de producto de una botella PET de agua artesanal mexicana con etiqueta azul
> marino. Mejorar iluminación, eliminar ruido, fondo limpio blanco/azul hielo, gotas de condensación
> y hielo. Mantener EXACTAMENTE la botella, etiqueta, sabor y logotipo originales. No agregar texto.

**FORMATO:** Portrait ~1:2.3 (700×1622)

**RESTRICCIONES:** No alterar etiqueta, botella, sabor, colores de la etiqueta ni cantidad.

---

## Notas de uso

- Todos los prompts deben ejecutarse con la imagen de referencia adjunta.
- Las imágenes producidas deben guardarse en `assets/images/` con el mismo nombre y en WebP optimizado.
- Validar siempre contra el producto real antes de publicación.