---
name: riomate-debug-checklist
description: >
  Lista de verificación para diagnosticar y corregir errores comunes en RíoMate.
  Usar cuando algo no funciona correctamente en la app.
---

# Skill: Diagnóstico y Depuración de RíoMate

## Cuándo usar este skill

- "Algo no funciona en el laboratorio"
- "Las tarjetas no se voltean"
- "El quiz no avanza a la siguiente pregunta"
- "El vuelto está mal calculado"
- "El SVG de geometría se sale del contenedor"

---

## 1. Errores de Notación Matemática

**Síntoma:** Se ven caracteres como `$`, `\frac`, `\times`, `\approx` en pantalla.

**Diagnóstico:** Buscar en el archivo `index.html`:
```
$ \frac \times \approx \div \cdot \Delta \text{
```

**Corrección:** Reemplazar con equivalentes de texto plano según la tabla del manual.

---

## 2. Flashcards no se voltean

**Síntomas posibles:**
- Click no hace nada
- La animación se corta
- El dorso aparece en blanco

**Checklist:**
- [ ] `onclick="toggleCard(this, N)"` en el div con clase `flashcard`
- [ ] CSS presente: `.flashcard-inner { transition: transform 0.6s; transform-style: preserve-3d; }`
- [ ] CSS presente: `.flashcard.flipped .flashcard-inner { transform: rotateY(180deg); }`
- [ ] `.flashcard-front` y `.flashcard-back` tienen `backface-visibility: hidden`
- [ ] `.flashcard-back` tiene `transform: rotateY(180deg)` en el CSS base
- [ ] Ambos divs front/back tienen `position: absolute` (clase `absolute` de Tailwind)

---

## 3. Quiz no funciona / preguntas no aparecen

**Checklist:**
- [ ] El array de preguntas existe y no está vacío
- [ ] Exactamente un `isCorrect: true` por objeto de pregunta
- [ ] `startQuiz('teorico'|'practico')` conectado al botón de inicio
- [ ] IDs de HTML correctos: `quiz-t-*` para teórico, `quiz-p-*` para práctico
- [ ] `renderQuestion(type)` es llamado desde `startQuiz()`
- [ ] No hay errores de sintaxis JS en los arrays (comas faltantes, comillas sin cerrar)

---

## 4. Laboratorio de geometría SVG se desborda / solapamiento de etiquetas

**Checklist:**
- [ ] SVG tiene `viewBox="0 0 200 200"` correcto
- [ ] Las coordenadas calculadas no exceden el rango `[0, 200]`
- [ ] La escala de figura usa `* 8` o `* 10` y tiene offset calculado para centrar: `(200 - size) / 2`
- [ ] La línea de altura se dibuja en `heightX = offsetX + width/2` (centro horizontal), no en el borde
- [ ] Las etiquetas de texto tienen margen de al menos 10-15 unidades SVG del borde de la figura

---

## 5. Pulpería / cálculo de vuelto incorrecto

**Checklist:**
- [ ] `pulperíaPrices` tiene los precios correctos (leche: 950, galleta: 650, tropical: 1200, empanada: 800)
- [ ] `calculatePulpería()` usa `parseInt()` o `Number()` para el valor del select de pago
- [ ] El algoritmo greedy itera denominaciones en orden descendente
- [ ] La condición `pago < total` muestra la alerta correctamente antes de calcular vuelto

---

## 6. Progreso y badges no se actualizan

**Checklist:**
- [ ] `updateBadges()` es llamado al completar el quiz (`nextQuestion`) y al usar el lab (`switchTab`)
- [ ] `updateTheoryProgress()` es llamado desde `toggleCard()`
- [ ] El divisor en `updateTheoryProgress()` coincide con el número total de flashcards
- [ ] Los IDs de badges: `badge-teoria`, `badge-formulas`, `badge-quiz-t`, `badge-quiz-p`
- [ ] La condición de score es `finalGrade >= 80` (no `> 80`)

---

## 7. Problema de responsive / scroll horizontal

**Checklist:**
- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1.0">` en `<head>`
- [ ] Contenedor principal usa `max-w-5xl mx-auto px-4` (no anchos fijos en px)
- [ ] Los grids usan `grid-cols-1 md:grid-cols-N` (mobile-first)
- [ ] No hay elementos con `width` fijo mayor al viewport en móvil
- [ ] SVGs tienen `class="w-full h-full max-h-56"` para ser fluidos

---

## 8. Proceso de verificación rápida

Antes de guardar cualquier cambio, verificar:

1. **Abrir en navegador** → F12 → Consola → Sin errores rojos
2. **Reducir ventana a 375px** → Sin scroll horizontal
3. **Clic en todas las pestañas** → Cada sección carga correctamente
4. **Voltear todas las flashcards** → Contador llega al total correcto
5. **Iniciar y completar un quiz** → Nota se muestra y se actualiza en Inicio
6. **Usar la pulpería** → Agregar artículos, cambiar billete, verificar vuelto
7. **Cambiar figura en geometría** → SVG se actualiza sin desbordarse
