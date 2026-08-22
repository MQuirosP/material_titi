---
trigger: always_on
description: >
  Reglas de desarrollo y estándares UI/UX obligatorios para el proyecto RíoMate (Escuela Riojalandia).
  Aplicar SIEMPRE en cualquier edición, creación de materias, laboratorios, quizzes o refactorización.
---

# 🇨🇷 RíoMate — Reglas y Estándares Oficiales de Desarrollo

## 1. ARQUITECTURA GENERAL & SINGLE-BUNDLE MANDATE

- **Cero dependencias locales:** Sin imágenes, audios ni videos locales. Todo vive en código fuente (HTML5 + Tailwind CSS + Web Audio API + SVG/Canvas inline).
- **CDN permitidos únicamente:**
  - `https://cdn.tailwindcss.com` (Tailwind CSS)
  - `https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js`
- **Gráficos:** Exclusivamente `<canvas>`, SVG inline o manipulación de clases Tailwind.

---

## 2. CONTEXTO ACADÉMICO, SEMESTRES Y DOCENTES OFICIALES

- **Audiencia:** Estudiantes de 5º grado (Secciones 5-1 y 5-2), Escuela Riojalandia, Costa Rica.
- **Asignación Oficial de Docentes por Materia:**
  - **👩‍🏫 Maestra: Florisel Olmazo López** → *Matemáticas* y *Ciencias*.
  - **👩‍🏫 Maestra: Licda. Maureen Vargas Solano** → *Español* y *Estudios Sociales*.
- **Distribución Oficial por Semestre:**
  - **📅 Primer Semestre 2026:**
    - 🧮 Matemáticas (Disponible — Múltiplos, divisores, fracciones, sistema monetario ₡ y geometría plana).
    - 🔬 Ciencias (Disponible — Sistema urinario, excreción celular, avances médicos y biodiversidad).
    - 📚 Español I (Archivado) / 🌎 Estudios Sociales I (Archivado).
  - **📅 Segundo Semestre 2026:**
    - 📚 Español (Disponible — Comprensión lectora, partes del libro, géneros literarios, tipos de oraciones, tradición costarricense).
    - 🌎 Estudios Sociales (Próximamente — Geografía, provincias, relieve e historia patria).
    - 🧮 Matemáticas II (Próximamente) / 🔬 Ciencias II (Próximamente).
  - **🎨 Materias Complementarias:** Espacio reservado para Inglés, Educación Musical, Artes Plásticas y Educación Física.

---

## 3. ESTÁNDARES DE COMPONENTES UI/UX (PROHIBIDO ALTERAR)

### A. Botones de Opciones en Exámenes (Quiz)
Las opciones de respuesta deben mantener una estructura inquebrantable en móvil y escritorio:
```html
<button class="option-btn-{pfx} w-full text-left p-4 rounded-2xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.99] transition-all duration-200 font-medium text-slate-700 flex justify-between items-center bg-white gap-3.5 min-h-[54px] shadow-sm">
  <span class="flex-1 text-sm sm:text-base leading-snug">{opt.text}</span>
  <span class="circle-icon shrink-0 w-6 h-6 border-2 border-slate-300 rounded-full flex items-center justify-center text-xs font-bold text-slate-400"></span>
</button>
```
- **Regla crítica:** El elemento `.circle-icon` **SIEMPRE debe tener `shrink-0 w-6 h-6`** para evitar que se aplaste o se deforme en pantallas angostas (360px) al haber textos largos.
- Al acertar: `border-emerald-500 bg-emerald-50 text-emerald-800` con `✓` blanco dentro de `bg-emerald-500`.
- Al fallar: `border-rose-500 bg-rose-50 text-rose-800` con `✗` blanco dentro de `bg-rose-500`.

### B. Tarjetas con Radio Buttons en Laboratorios (Selector de Ejemplos)
Cuando un laboratorio ofrece una lista de opciones para analizar o interactuar, usar el patrón de **Radio Button Cards**:
```html
<div onclick="selectSample({idx})" class="cursor-pointer p-3.5 rounded-2xl border-2 transition-all duration-200 flex items-start gap-3 text-left {isSelected ? 'border-amber-500 bg-amber-50/90 shadow-sm' : 'border-slate-200 bg-white hover:border-amber-300 hover:bg-amber-50/30'}">
  <!-- Círculo de Radio Button -->
  <div class="mt-0.5 shrink-0 w-5 h-5 rounded-full border-2 {isSelected ? 'border-amber-600 bg-amber-600' : 'border-slate-300 bg-white'} flex items-center justify-center transition-all">
    {isSelected ? '<div class="w-2 h-2 rounded-full bg-white"></div>' : ''}
  </div>
  <div class="flex-1 min-w-0">
    <div class="flex items-center gap-2 mb-1">
      <span class="text-base">{s.icon}</span>
      <span class="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full {s.badgeColor} font-fun">{s.badge}</span>
    </div>
    <p class="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">"{s.text}"</p>
  </div>
</div>
```
- **Regla:** NUNCA usar scroll horizontal ni carruseles con botones recortados para listas de selección. Las tarjetas con radio buttons verticales son el estándar oficial.

### C. Campos de Entrada + Botón de Acción en Móvil
Para inputs con botón de búsqueda o análisis (ej. *"Escribe tu propia frase"*):
```html
<div class="flex flex-col sm:flex-row gap-2.5">
  <input type="text" class="w-full sm:flex-1 px-4 py-3 min-h-[48px] rounded-2xl border border-amber-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white shadow-inner">
  <button class="w-full sm:w-auto shrink-0 bg-amber-600 hover:bg-amber-700 active:scale-95 text-white font-bold px-6 py-3 min-h-[48px] rounded-2xl text-sm font-fun shadow-md transition-all flex items-center justify-center gap-2">
    <span>Analizar</span>
    <span class="text-base">🔍</span>
  </button>
</div>
```
- **Regla:** En pantallas pequeñas (`< sm`), el input y el botón se apilan al 100% de ancho con `min-h-[48px]`. En pantallas medianas se alinean horizontalmente (`sm:flex-row`).

### D. Card de Resultados / Feedback / Rationale
- Debe tener espaciado amplio `p-5`, esquinas redondeadas `rounded-2xl`, borde sutil y tipografía legible `Nunito` con títulos en `Fredoka`.

---

## 4. INTEGRACIÓN DE GOOGLE GEMINI IA (ESTÁNDAR DE BAJO CONSUMO)

Cuando se implemente valoración por inteligencia artificial:
1. **Modelo:** Utilizar exclusivamente **`gemini-flash-lite-latest`** (el más rápido y de menor costo).
2. **Tokens estrictos:** `maxOutputTokens: 90` y `temperature: 0.1` con `responseMimeType: "application/json"`.
3. **Caché local (`Map`):** Toda consulta se almacena en memoria; las frases idénticas consumen **0 tokens**.
4. **Fallback:** Si la API falla, conmutar transparente e inmediatamente al motor heurístico local sin arrojar errores al usuario.

---

## 5. NOTACIÓN MATEMÁTICA — PROHIBICIÓN ABSOLUTA

NUNCA usar el símbolo `$` ni comandos LaTeX (`\frac{}{}`, `\times`, `\cdot`, `\approx`, `\div`, `\text{}`, `\Delta`).
SIEMPRE usar texto plano o Unicode: `3/4`, `×`, `÷`, `cm²`, `Triángulo`, `n`, `₡500`.

---

## 6. SISTEMA DE AUDIO SINTETIZADO (Web Audio API)

Toda interacción debe utilizar las funciones de `src/shared/modules/audio.js`:
- `playSound('correct')` en aciertos.
- `playSound('incorrect')` en fallos.
- `playTickWithThrottle()` en sliders y selección de opciones.
- `playSound('tab_click')` en cambios de pestaña.
- `playHooraySound()` al entrar a una materia desde el Menú Principal.
- `playSound('score_excellent')` / `playSound('score_good')` / `playSound('score_retry')` en notas finales de examen.

---

## 7. CHECKLIST MANDATORIO DE DIAGNÓSTICO

Antes de finalizar cualquier cambio:
1. **Compilación limpia:** `npm run build` sin advertencias ni errores.
2. **Mobile First:** Probar a **360×800 px (Galaxy S20)** asegurando cero scroll horizontal y touch targets de mínimo 44×44 px.
3. **Quizzes íntegros:** Exactamente un `isCorrect: true` y `rationale` educativo presente en cada opción.
4. **Badges sincronizados:** `updateBadges()` y `updateTheoryProgress()` llamados tras cada acción.
