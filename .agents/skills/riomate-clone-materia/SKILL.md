---
name: riomate-clone-materia
description: Clona la estructura de RíoMate para una nueva materia (Ciencias, Español, Estudios Sociales, etc.). Usar cuando el usuario pide adaptar la app a un tema diferente de matemáticas.
---

# Skill: Clonar RíoMate para una Nueva Materia

## Cuándo usar este skill

- "Crea una versión de RíoMate para Ciencias"
- "Adapta esto para Estudios Sociales"
- "Clona la app para Español / Gramática"
- "Quiero una versión de historia costarricense"

## Principio: Caparazón + Relleno

El caparazón (mantener intacto):
- Sistema de pestañas (`switchTab`, `.tab-content`)
- Sistema de flashcards (CSS flip 3D)
- Sistema de quiz (`quizState`, `renderQuestion`, `selectOption`, `nextQuestion`)
- Sistema de badges y progreso (`updateBadges`, `updateTheoryProgress`)
- Canvas-confetti para celebración
- Header/Footer, tipografías, estilos globales
- Sintetizador de audio Web Audio API

El relleno (reemplazar/adaptar):
- Arrays de preguntas (`quizTeoricoQuestions`, `quizPracticoQuestions`)
- Contenido de flashcards en `#content-teoria`
- Laboratorios interactivos (funciones `update*Lab()` / simuladores canvas/SVG)
- Paleta de colores dominante
- Título `<h1>` y metadata del header

## Pasos para clonar

1. **Crear o registrar la materia** en `src/subjects/{materia}` o adaptar la vista en `practica/index.html`.
2. **Definir preguntas** teóricas y prácticas en `src/subjects/{materia}/data/`.
3. **Definir laboratorios** en `src/subjects/{materia}/labs/`.
4. **Actualizar el switch de materias** en `src/subjects/matematicas/main.js` (`switchSubject`).
5. **Configurar la tarjeta de acceso** en el portal principal `index.html`.
6. **Mantener** las reglas de notación limpia (sin LaTeX) y touch targets mínimos de 44px.
