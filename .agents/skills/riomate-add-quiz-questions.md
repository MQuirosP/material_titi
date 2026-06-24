---
name: riomate-add-quiz-questions
description: >
  Agrega preguntas nuevas al examen teórico o práctico de RíoMate.
  Usar cuando el usuario pide más preguntas, ampliar el banco, o ajustar dificultad.
---

# Skill: Agregar Preguntas al Quiz de RíoMate

## Cuándo usar este skill

- "Agrega N preguntas al examen teórico"
- "Crea preguntas prácticas sobre fracciones"
- "Amplía el banco de preguntas"
- "Ajusta la dificultad de las preguntas"

## Procedimiento

### 1. Verificar destino
- **Examen teórico** → array `quizTeoricoQuestions` (aprox. línea 939 de `index.html`)
- **Examen práctico** → array `quizPracticoQuestions` (aprox. línea 1143 de `index.html`)

### 2. Estructura obligatoria de cada pregunta

```js
{
  topic: "Nombre claro de la categoría temática",
  question: "Enunciado completo sin LaTeX. Usar ×, ÷, ², / en lugar de símbolos LaTeX.",
  options: [
    {
      text: "Respuesta CORRECTA — formulada como afirmación completa",
      isCorrect: true,
      rationale: "Explicación educativa detallada. Reforzar la regla matemática. Mínimo 2 oraciones."
    },
    {
      text: "Distractor 1 — error conceptual común del estudiante",
      isCorrect: false,
      rationale: "Explicar amigablemente por qué esta opción es incorrecta. Mencionar el concepto correcto."
    },
    {
      text: "Distractor 2 — confusión típica con término relacionado",
      isCorrect: false,
      rationale: "Explicación del error. Redirigir al concepto clave."
    },
    {
      text: "Distractor 3 — respuesta plausible pero incorrecta",
      isCorrect: false,
      rationale: "Breve aclaración del error."
    }
  ]
}
```

### 3. Reglas de calidad

| Regla | Detalle |
|---|---|
| Sin LaTeX | Nunca `$...$`, `\frac`, `\times`, `\approx` |
| Contexto costarricense | Contextualizar en La pulpería, Escuela Riojalandia, Costa Rica |
| Un isCorrect: true | Exactamente UNO por pregunta |
| Rationale obligatorio | En TODAS las opciones, correctas e incorrectas |
| Texto completo | Opciones deben ser afirmaciones completas, no solo números |
| Distribución | Mezclar temas: no agrupar todas las de un mismo tema |

### 4. Inserción en el archivo

Agregar los objetos al final del array correspondiente, antes del `];` de cierre.
Separar con coma del objeto anterior.
Actualizar el texto del botón/header si cambia el total (ej. "20 Preguntas" → "25 Preguntas").

### 5. Verificación post-inserción

- Contar que el número total de preguntas en el array coincide con lo indicado en el HTML.
- Revisar que no hay caracteres `$` en ningún `question`, `text` ni `rationale`.
- Confirmar que exactamente un `isCorrect: true` existe por objeto.
