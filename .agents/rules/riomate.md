---
trigger: always_on
description: >
  Reglas de desarrollo y estándares UI/UX obligatorios para el proyecto RíoMate (Escuela Riojalandia).
  Aplicar SIEMPRE en cualquier edición, creación de materias, laboratorios, quizzes o refactorización.
---

# 🇨🇷 RíoMate — Reglas y Estándares Oficiales de Desarrollo

> ⛔ **PROHIBICIÓN ABSOLUTA:** Está terminantemente prohibido modificar cualquier componente UI
> documentado en la **Sección 3** sin instrucción EXPLÍCITA del usuario. Esto incluye estilos,
> estructura HTML, clases Tailwind, IDs, y comportamiento interactivo. Violar esta regla
> constituye un error crítico de desarrollo.

---

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

## 3. ESTÁNDARES DE COMPONENTES UI/UX ⛔ INMUTABLES

### A. Botones de Opciones en Exámenes (Quiz)
Patrón canónico generado dinámicamente desde `src/shared/modules/quiz.js → renderQuestion()`.
**Usar para:** opciones de respuesta en examen teórico y práctico.

```html
<button class="option-btn-{pfx} w-full text-left p-4 rounded-2xl border-2 border-slate-200
               hover:border-slate-300 hover:bg-slate-50 active:scale-[0.99]
               transition-all duration-200 font-medium text-slate-700
               flex justify-between items-center bg-white gap-3.5 min-h-[54px] shadow-sm">
  <span class="flex-1 text-sm sm:text-base leading-snug">{opt.text}</span>
  <span class="circle-icon shrink-0 w-6 h-6 border-2 border-slate-300 rounded-full
               flex items-center justify-center text-xs font-bold text-slate-400"></span>
</button>
```

**Estados del `.circle-icon` (modificados por JS en `selectOption()`):**
- **Neutro (inicial):** `shrink-0 w-6 h-6 border-2 border-slate-300 rounded-full flex items-center justify-center text-xs font-bold text-slate-400`
- **Correcto:** `circle-icon shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-bold` + innerHTML `✓`
- **Incorrecto:** `circle-icon shrink-0 w-6 h-6 bg-rose-500 text-white rounded-full flex items-center justify-center text-xs font-bold` + innerHTML `✗`

> ⛔ **Regla crítica:** `.circle-icon` SIEMPRE debe tener `shrink-0 w-6 h-6`. Sin estos, el
> círculo se aplasta en pantallas de 360px con textos largos. NUNCA eliminarlos.

**Estados del botón completo al responder:**
- Correcto: agrega `border-emerald-500 bg-emerald-50 text-emerald-800 !opacity-100`
- Incorrecto: agrega `border-rose-500 bg-rose-50 text-rose-800 !opacity-100`

---

### B. Tarjetas con Radio Buttons en Laboratorios
**Usar para:** labs donde se muestran TODAS las opciones simultáneamente y el usuario elige una.
**NO usar** cuando el patrón adecuado sea el carrusel (ver sección 3E).

```html
<div onclick="selectSample({idx})"
     class="cursor-pointer p-3.5 rounded-2xl border-2 transition-all duration-200
            flex items-start gap-3 text-left
            {isSelected
              ? 'border-amber-500 bg-amber-50/90 shadow-sm'
              : 'border-slate-200 bg-white hover:border-amber-300 hover:bg-amber-50/30'}">

  <!-- Círculo Radio Button -->
  <div class="mt-0.5 shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
              {isSelected ? 'border-amber-600 bg-amber-600' : 'border-slate-300 bg-white'}">
    <!-- Solo si isSelected: -->
    <div class="w-2 h-2 rounded-full bg-white"></div>
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

> ⛔ **Regla:** NUNCA usar scroll horizontal ni carruseles con botones recortados para listas
> de selección múltiple simultánea. Las tarjetas radio button verticales son el estándar.

---

### C. Campos de Entrada + Botón de Acción en Móvil
**Usar para:** cualquier input donde el usuario escribe texto libre y luego presiona un botón de acción.

```html
<div class="flex flex-col sm:flex-row gap-2.5">
  <input type="text"
         class="w-full sm:flex-1 px-4 py-3 min-h-[48px] rounded-2xl border border-amber-300
                text-sm focus:outline-none focus:ring-2 focus:ring-amber-500
                bg-white shadow-inner">
  <button class="w-full sm:w-auto shrink-0 bg-amber-600 hover:bg-amber-700 active:scale-95
                 text-white font-bold px-6 py-3 min-h-[48px] rounded-2xl text-sm font-fun
                 shadow-md transition-all flex items-center justify-center gap-2">
    <span>Analizar</span>
    <span class="text-base">🔍</span>
  </button>
</div>
```

> ⛔ **Regla móvil:** En `< sm` (360px), input y botón apilados al 100% de ancho con
> `min-h-[48px]`. En `sm:` se alinean horizontalmente. Touch targets mínimo 44×44px.

---

### D. Feedback Card del Quiz (Retroalimentación de Respuesta)
Patrón canónico definido en `practica/index.html` (IDs `quiz-t-feedback` / `quiz-p-feedback`).
Los estilos del contenedor son aplicados dinámicamente por `quiz.js → selectOption()`.
**Usar para:** mostrar el rationale educativo después de cada respuesta en exámenes.

**Estructura HTML en `index.html` (NO MODIFICAR):**
```html
<div id="quiz-{pfx}-feedback" class="hidden mt-6 p-4 sm:p-5 rounded-2xl border transition-all duration-300">
  <!-- Cabecera: ícono + título -->
  <div class="flex items-center gap-2.5 mb-2">
    <span class="text-2xl sm:text-3xl shrink-0" id="quiz-{pfx}-feedback-icon">🎉</span>
    <h4 class="font-bold text-base sm:text-lg font-fun" id="quiz-{pfx}-feedback-title">¡Respuesta Correcta!</h4>
  </div>
  <!-- Card interna con el rationale -->
  <div class="bg-white/90 p-3.5 sm:p-4 rounded-xl border border-black/5 mt-2">
    <p class="text-xs sm:text-sm leading-relaxed text-slate-800" id="quiz-{pfx}-feedback-text"></p>
  </div>
  <!-- Botón siguiente -->
  <div class="mt-4 flex flex-col sm:flex-row sm:justify-end">
    <button onclick="nextQuestion('{type}')"
            class="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 active:scale-95
                   text-white font-bold px-6 py-3 min-h-[48px] rounded-2xl text-sm
                   transition-all font-fun shadow-md flex items-center justify-center gap-2">
      <span>Siguiente Pregunta</span>
      <span class="text-base">➡️</span>
    </button>
  </div>
</div>
```

**Clases del contenedor aplicadas dinámicamente por `quiz.js`:**
- Correcto: `mt-6 p-5 rounded-2xl border-2 border-emerald-200 bg-emerald-50/70 text-emerald-950 transition-all duration-300 shadow-sm`
- Incorrecto: `mt-6 p-5 rounded-2xl border-2 border-rose-200 bg-rose-50/70 text-rose-950 transition-all duration-300 shadow-sm`

> ⛔ **Regla:** El ícono (`🎉` / `💡`) y el título son elementos separados con `shrink-0`.
> El botón "Siguiente" ocupa 100% en móvil (`w-full`) y auto en desktop (`sm:w-auto`).
> NUNCA mezclar el ícono dentro del texto del título.

---

### E. Carrusel de Ejemplos en Laboratorios
Patrón canónico implementado en `detector-oraciones.js → renderSampleCarousel()`.
**Usar para:** labs donde se navegan ejemplos de UNO en UNO (no todos visibles a la vez).
Contiene: badge de tipo, texto destacado, botón de análisis, controles ◀ dots ▶.

```html
<div class="bg-white rounded-3xl p-4 sm:p-5 border-2 border-amber-300 shadow-sm relative transition-all duration-300">

  <!-- Cabecera: badge de categoría + contador de paso -->
  <div class="flex items-center justify-between gap-2 mb-3">
    <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full {s.color} font-fun">
      <span>{s.icon}</span>
      <span>{s.badge}</span>
    </span>
    <span class="text-xs font-bold text-slate-600 font-fun bg-amber-100/60 border border-amber-200 px-2.5 py-1 rounded-full">
      Oración {currentIdx + 1} de {total}
    </span>
  </div>

  <!-- Oración / Ejemplo destacado -->
  <div class="my-3 p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-center">
    <p class="text-base sm:text-lg font-bold text-slate-900 leading-snug font-fun">
      "{s.text}"
    </p>
  </div>

  <!-- Botón de acción principal -->
  <div class="mb-4 text-center">
    <button onclick="window.selectSampleSentence({currentIdx})"
            class="w-full bg-amber-100 hover:bg-amber-200 active:scale-98 text-amber-950
                   font-bold py-2.5 px-3 rounded-2xl text-xs font-fun transition-all
                   border border-amber-300 shadow-sm flex items-center justify-center gap-2 min-h-[44px]">
      <span>🔍 Ver Análisis Lingüístico de este Ejemplo</span>
    </button>
  </div>

  <!-- Controles de navegación: Anterior | Dots | Siguiente -->
  <div class="flex items-center justify-between pt-3 border-t border-slate-100 gap-2">
    <button onclick="window.prevSampleSentence()" aria-label="Anterior"
            class="shrink-0 h-11 px-3 sm:px-4 rounded-2xl border border-amber-300 bg-amber-50
                   hover:bg-amber-100 active:scale-95 text-xs font-bold text-amber-950
                   transition-all font-fun flex items-center justify-center gap-1.5 shadow-sm min-w-[44px]">
      <span class="text-base font-bold">◀</span>
      <span class="hidden sm:inline">Anterior</span>
    </button>

    <!-- Dots indicadores (uno por ítem) -->
    <div class="flex items-center justify-center gap-1.5 px-1 flex-1">
      <!-- activo: bg-amber-600 w-5 | inactivo: bg-slate-200 hover:bg-amber-300 w-2 -->
      <button class="h-2.5 rounded-full transition-all bg-amber-600 w-5"></button>
      <button class="h-2.5 rounded-full transition-all bg-slate-200 hover:bg-amber-300 w-2"></button>
    </div>

    <button onclick="window.nextSampleSentence()" aria-label="Siguiente"
            class="shrink-0 h-11 px-3 sm:px-4 rounded-2xl border border-amber-300 bg-amber-50
                   hover:bg-amber-100 active:scale-95 text-xs font-bold text-amber-950
                   transition-all font-fun flex items-center justify-center gap-1.5 shadow-sm min-w-[44px]">
      <span class="hidden sm:inline">Siguiente</span>
      <span class="text-base font-bold">▶</span>
    </button>
  </div>
</div>
```

> ⛔ **Reglas del carrusel:**
> - Los botones ◀ y ▶ tienen `min-w-[44px]` y `h-11` (touch target 44px mínimo).
> - El texto "Anterior" / "Siguiente" se oculta en móvil (`hidden sm:inline`); solo el ícono se muestra.
> - Los dots tienen altura fija `h-2.5` y ancho variable (activo `w-5`, inactivo `w-2`).
> - NUNCA reemplazar este carrusel por una lista estática ni por scroll horizontal.

---

### F. Card de Resultado de Análisis IA / Laboratorio
Patrón canónico implementado en `detector-oraciones.js → analyzeCustomInput()` y `selectSampleSentence()`.
**Usar para:** mostrar el resultado del análisis lingüístico (o cualquier resultado de lab con IA).

```html
<div class="p-4 sm:p-6 rounded-3xl border-2 border-amber-300 bg-amber-50/70 animate-fadeIn">

  <!-- Cabecera: ícono + tipo + badge IA/Local -->
  <div class="flex items-start justify-between gap-2 mb-3">
    <div class="flex items-center gap-2.5">
      <span class="text-3xl shrink-0">{icon}</span>
      <div>
        <span class="text-[11px] font-bold uppercase tracking-wider text-amber-800 font-fun block">
          Resultado de tu Frase
        </span>
        <h4 class="text-base sm:text-xl font-bold text-slate-900 font-fun leading-tight">{type}</h4>
      </div>
    </div>
    <!-- Badge IA Gemini (índigo) o Modo Local (slate) -->
    <span class="shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-full font-fun flex items-center gap-1
                 {isAI
                   ? 'bg-indigo-100 text-indigo-900 border border-indigo-200 shadow-sm'
                   : 'bg-slate-100 text-slate-700 border border-slate-200'}">
      {isAI ? '✨ IA Gemini' : '🔍 Modo Local'}
    </span>
  </div>

  <!-- Texto analizado -->
  <div class="p-3.5 rounded-2xl bg-white border border-amber-200 mb-3 shadow-inner">
    <p class="text-sm sm:text-base text-slate-800 font-semibold italic text-center font-fun">"{text}"</p>
  </div>

  <!-- Explicación pedagógica + elogio -->
  <div class="bg-white/95 p-4 rounded-2xl border border-amber-100 space-y-2 shadow-sm">
    <div>
      <p class="text-xs text-amber-900 uppercase font-bold tracking-wider font-fun flex items-center gap-1.5">
        <span>🔍</span> <span>Explicación Pedagógica:</span>
      </p>
      <p class="text-xs sm:text-sm text-slate-700 font-medium mt-1 leading-relaxed">{clue}</p>
    </div>
    <!-- Solo si hay elogio (IA Gemini lo devuelve, Local no) -->
    <div class="pt-2.5 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-700 font-fun">
      <span class="text-sm">🌟</span>
      <span>{praise}</span>
    </div>
  </div>
</div>
```

> ⛔ **Reglas de esta card:**
> - El ícono emoji y la etiqueta de tipo son elementos SEPARADOS (no dentro del mismo `h4`).
> - El badge IA/Local tiene `shrink-0` para no deformarse en textos largos.
> - El padding es `p-4 sm:p-6` (móvil compacto, desktop amplio).
> - NUNCA usar `text-3xl` en el título del tipo — solo el emoji usa ese tamaño.

---

## 4. INTEGRACIÓN DE GOOGLE GEMINI IA (ESTÁNDAR DE BAJO CONSUMO)

Cuando se implemente valoración por inteligencia artificial:
1. **Modelo:** Utilizar exclusivamente **`gemini-flash-lite-latest`** (el más rápido y de menor costo).
2. **Tokens estrictos:** `maxOutputTokens: 90` y `temperature: 0.1` con `responseMimeType: "application/json"`.
3. **Caché local (`Map`):** Toda consulta se almacena en memoria; las frases idénticas consumen **0 tokens**.
4. **Fallback:** Si la API falla, conmutar transparente e inmediatamente al motor heurístico local sin arrojar errores al usuario.
5. **API Key:** Leer exclusivamente desde `import.meta.env.VITE_GEMINI_API_KEY`. Nunca hardcodear en el código fuente.

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
5. **UI inmutable:** Verificar que ningún componente de la Sección 3 fue alterado sin autorización explícita del usuario.


