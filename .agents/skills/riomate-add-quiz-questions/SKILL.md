---
name: riomate-add-quiz-questions
description: Agrega preguntas nuevas al examen teórico o práctico de RíoMate. Usar cuando el usuario pide más preguntas, ampliar el banco, o ajustar dificultad.
---

# Skill: Agregar Preguntas al Quiz en RíoMate

## Cuándo usar este skill
- "Agrega 5 preguntas más al examen de [materia]"
- "Crea ejercicios prácticos sobre [tema]"
- "El banco de preguntas necesita más cobertura"

## Esquema Estricto de Preguntas

```js
export const quizTeoricoMateria = [
  {
    topic: "Nombre del Eje Temático",
    question: "Enunciado limpio en texto plano sin caracteres $ ni LaTeX.",
    options: [
      { text: "Opción correcta", isCorrect: true, rationale: "Explicación educativa clara del porqué." },
      { text: "Opción incorrecta 1", isCorrect: false, rationale: "Por qué es incorrecta pedagógicamente." },
      { text: "Opción incorrecta 2", isCorrect: false, rationale: "Por qué es incorrecta pedagógicamente." },
      { text: "Opción incorrecta 3", isCorrect: false, rationale: "Por qué es incorrecta pedagógicamente." }
    ]
  }
];
```

## Reglas Obligatorias
1. **Un solo `isCorrect: true`** por pregunta.
2. **`rationale` presente** en cada una de las 4 opciones.
3. **Cero LaTeX y cero `$`:** Usar siempre Unicode (`×`, `÷`, `cm²`, `3/4`, `₡1 000`, `Triángulo`).
4. **Renderizado de Botones:** En `quiz.js`, las opciones deben renderizarse con el círculo indicador protegido:
```html
<button class="option-btn-{pfx} w-full text-left p-4 rounded-2xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.99] transition-all duration-200 font-medium text-slate-700 flex justify-between items-center bg-white gap-3.5 min-h-[54px] shadow-sm">
  <span class="flex-1 text-sm sm:text-base leading-snug">{opt.text}</span>
  <span class="circle-icon shrink-0 w-6 h-6 border-2 border-slate-300 rounded-full flex items-center justify-center text-xs font-bold text-slate-400"></span>
</button>
```
5. **Retroalimentación:**
   - Acierto: `playSound('correct')` + Confetti + `border-emerald-500 bg-emerald-50`.
   - Fallo: `playSound('incorrect')` + `border-rose-500 bg-rose-50` + revelar correcta en verde.
