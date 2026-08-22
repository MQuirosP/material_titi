---
name: riomate-clone-materia
description: Clona la estructura de RíoMate para una nueva materia (Ciencias, Español, Estudios Sociales, etc.). Usar cuando el usuario pide adaptar la app a un tema diferente de matemáticas.
---

# Skill: Clonar Materia en RíoMate (Escuela Riojalandia)

## Cuándo usar este skill
- "Agrega la materia de [nombre]"
- "Adapta la aplicación para [Ciencias / Español / Estudios Sociales]"
- "Prepara el material de estudio para el examen de [materia]"

## Mapeo Oficial de Docentes y Semestres
- **👩‍🏫 Maestra Florisel Olmazo López:** Responsable oficial de **Matemáticas** y **Ciencias** (I Semestre y II Semestre).
- **👩‍🏫 Maestra Licda. Maureen Vargas Solano:** Responsable oficial de **Español** y **Estudios Sociales** (I Semestre y II Semestre).
- **Materias Complementarias:** Inglés, Educación Musical, Artes Plásticas y Educación Física.

## Blueprint de Creación / Clonación

1. **Directorio de Materia (`src/subjects/{materia}/`):**
   - `data/quiz-teorico.js`: Array `quizTeorico{Materia}` con preguntas teóricas.
   - `data/quiz-practico.js`: Array `quizPractico{Materia}` con problemas aplicados.
   - `labs/{nombre-lab}.js`: Laboratorios interactivos con **Radio Button Cards** o simuladores SVG.

2. **Integración en Portal (`index.html`):**
   - Registrar la tarjeta en el contenedor de semestre correspondiente (`#semester-1-container` o `#semester-2-container`).
   - Indicar docente oficial y badge temático.

3. **Integración en la Aplicación de Práctica (`practica/index.html`):**
   - `#welcome-{materia}`: Banner de bienvenida con resumen.
   - `#temario-{materia}`: Cuadrícula de 6 a 8 temas clave.
   - `#theory-{materia}`: 10 Flashcards 3D interactivas.
   - `#subtabs-{materia}`: Barra de navegación de laboratorios.
   - `#lab-contents-{materia}`: Contenedores HTML de los laboratorios.

4. **Sincronización en `src/subjects/matematicas/main.js`:**
   - Asignar `quizState.teorico.questions` y `quizState.practico.questions`.
   - Configurar título, subtítulo, fecha de examen, docente oficial y badge de semestre (`Primer Semestre 2026` o `Segundo Semestre 2026`).
   - Sincronizar conjunto de tarjetas estudiadas (`syncStudiedCardsSet`).
