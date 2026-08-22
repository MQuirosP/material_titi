---
name: riomate-new-flashcard
description: Agrega o modifica tarjetas de estudio (flashcards) en la sección Teoría Interactiva de RíoMate. Usar cuando el usuario pide más tarjetas de teoría, cambiar contenido existente, o añadir un tema nuevo.
---

# Skill: Flashcards de Teoría en RíoMate

## Cuándo usar este skill

- "Agrega una tarjeta de teoría sobre [tema]"
- "Actualiza la tarjeta de [concepto]"
- "Cambia el contenido de la flashcard de fracciones"

## Estructura HTML de una Flashcard

```html
<!-- Tarjeta N: {Título del Tema} -->
<div class="flashcard h-80 w-full cursor-pointer group" onclick="toggleCard(this, N)">
  <div class="flashcard-inner relative w-full h-full shadow-lg rounded-3xl border border-{color}-100 duration-500">

    <!-- FRENTE (visible por defecto) -->
    <div class="flashcard-front absolute w-full h-full p-6 bg-gradient-to-br from-{color}-50 to-white rounded-3xl flex flex-col justify-between">
      <div class="flex justify-between items-center">
        <span class="text-xs font-bold text-{color}-700 bg-{color}-100 px-3 py-1 rounded-full uppercase font-fun">Tema N</span>
        <span class="text-2xl">{emoji}</span>
      </div>
      <div class="my-auto">
        <h3 class="text-xl font-bold text-slate-800 font-fun">{Título de la tarjeta}</h3>
        <p class="text-slate-500 text-sm mt-1">{Pregunta o subtítulo provocador}</p>
      </div>
      <div class="text-center text-xs text-{color}-600 font-bold font-fun">👆 ¡Haz clic para ver la teoría y fórmulas!</div>
    </div>

    <!-- DORSO (visible al girar) -->
    <div class="flashcard-back absolute w-full h-full p-6 bg-{color}-950 text-white rounded-3xl overflow-y-auto flex flex-col justify-between">
      <div>
        <h4 class="font-bold text-{color}-200 text-sm uppercase tracking-wider font-fun">La Teoría Esencial:</h4>
        <ul class="text-sm mt-2 space-y-2 list-disc list-inside text-{color}-100">
          <li><strong class="text-white">{Concepto 1}:</strong> {Explicación clara y breve.}</li>
          <li><strong class="text-white">{Concepto 2}:</strong> <strong class="text-amber-300">{Dato clave resaltado}</strong>.</li>
          <li><strong class="text-white">{Concepto 3}:</strong> {Explicación.}</li>
        </ul>
      </div>
      <div class="bg-{color}-900/60 p-2.5 rounded-xl border border-{color}-800/50 mt-2">
        <p class="text-xs font-bold text-amber-300">💡 Truco de Examen:</p>
        <p class="text-xs text-{color}-200">{Consejo memorístico o mnemotécnico breve}</p>
      </div>
    </div>

  </div>
</div>
```

## Reglas de contenido

- Sin LaTeX. Usar `×`, `÷`, `/`, `²` directamente.
- Máximo 4 items en la lista del dorso para no desbordar la altura `h-80`.
- El "Truco de Examen" debe ser una frase memorable, no una repetición de la teoría.
- El color `amber-300` se reserva para resaltar conceptos críticos de examen.
- `text-white` para términos definidos; `text-{color}-100` para explicaciones.
