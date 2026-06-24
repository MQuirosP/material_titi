---
trigger: always_on
description: >
  Reglas de desarrollo obligatorias para el proyecto RíoMate (index.html).
  Aplicar SIEMPRE en cualquier edición, refactorización o generación de código.
---

# 🇨🇷 RíoMate — Reglas de Desarrollo (Manual Oficial)

## ARQUITECTURA: Single-File Mandate

- **Un solo archivo:** Todo HTML5 + CSS (Tailwind CDN) + JS nativo vive en `index.html`.
- **Cero dependencias locales:** Sin imágenes, audios ni videos locales.
- **CDN permitidos únicamente:**
  - `https://cdn.tailwindcss.com` (Tailwind CSS)
  - `https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js`
- **Gráficos:** Solo `<canvas>`, SVG inline o manipulación de clases Tailwind. Nunca assets externos.

## NOTACIÓN MATEMÁTICA — PROHIBICIÓN ABSOLUTA

NUNCA usar:
- El símbolo `$` para delimitar texto o fórmulas.
- Notación LaTeX: `\frac{}{}`, `\times`, `\cdot`, `\approx`, `\div`, `\text{}`, `\Delta`.

SIEMPRE traducir a texto plano/Unicode:

| ❌ Incorrecto (LaTeX) | ✅ Correcto (Texto plano) |
|---|---|
| `$\frac{3}{4}$` | `3/4` |
| `$\times$` o `\cdot` | `×` o `*` |
| `$\approx$` | `aproximadamente` |
| `$\div$` | `÷` |
| `$\text{cm}^2$` | `cm²` |
| `$n$` (variable) | `n` (texto limpio) |
| `$\Delta$` | `Triángulo` (palabra completa) |
| `$6$` | `6` (sin delimitadores) |

## UX/UI — Mobile-First Obligatorio

- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` siempre presente.
- Sin scroll horizontal. Usar `max-w-5xl mx-auto px-4` en contenedor principal.
- Botones y zonas táctiles mínimo **44×44 px** (`p-4`, `py-3`, `min-h-[48px]`).
- Menú de pestañas **sticky** en la parte superior.
- Tipografías: `Fredoka` (títulos/botones) · `Nunito` (cuerpo y explicaciones).

## SIMULADORES INTERACTIVOS — Reglas de Laboratorio

- Geometría: coordenadas SVG actualizadas dinámicamente por `<input type="range">`. La figura no debe desbordar el `viewBox` ni solapar etiquetas de medida.
- Moneda (Pulpería): cálculos exactos enteros en colones. Vuelto visualizado con CSS puro (billetes alargados rotados, monedas redondas).
- Fracciones: grid/flex dinámico basado en denominador. Celdas coloreadas = numerador.

## ESQUEMA DE PREGUNTAS (Quiz) — Formato Estricto

```js
const quizQuestions = [
  {
    topic: "Categoría del Tema",
    question: "Enunciado en texto plano, sin LaTeX.",
    options: [
      { text: "Opción correcta", isCorrect: true,  rationale: "Explicación educativa detallada." },
      { text: "Opción incorrecta 1", isCorrect: false, rationale: "Por qué es incorrecto." },
      { text: "Opción incorrecta 2", isCorrect: false, rationale: "Por qué es incorrecto." },
      { text: "Opción incorrecta 3", isCorrect: false, rationale: "Por qué es incorrecto." }
    ]
  }
];
```

- Deshabilitar todos los botones al seleccionar (`btn.disabled = true`).
- Retroalimentación inmediata con `rationale`.
- Nota final = `(aciertos / total) × 100` → escala 0–100.

## CONTEXTO DEL PROYECTO

- **Audiencia:** Estudiantes de 5º grado (≈10 años), Escuela Riojalandia, Costa Rica.
- **Moneda:** Colón costarricense (₡). Denominaciones: ₡5, ₡10, ₡25, ₡50, ₡100, ₡500 (monedas); ₡1 000, ₡2 000, ₡5 000, ₡10 000, ₡20 000 (billetes).
- **Temas cubiertos:** Múltiplos/pares/impares, Divisores, Fracciones impropias/mixtas, Sistema Monetario, Perímetro y Área de figuras planas.
- **Estado global JS clave:** `studiedCards` (Set), `userHasUsedLab` (bool), `quizState` (obj), `pulperíaCart` (obj), `pulperíaPrices` (obj).

## ESCALABILIDAD — Blueprint de Nuevas Materias

Para clonar a otra materia, mantener el caparazón (pestañas, confetti, progreso, badges) y reemplazar:
1. Arrays de preguntas en `quizTeoricoQuestions` / `quizPracticoQuestions`.
2. Contenido de flashcards en `#content-teoria`.
3. Lógica de laboratorios en sus funciones JS respectivas.
4. Colores temáticos en las tarjetas (uno por tema).
