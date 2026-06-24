# Graph Report - rioja  (2026-06-24)

## Corpus Check
- 28 files · ~25,633 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 165 nodes · 244 edges · 16 communities (12 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9a2f06d5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]

## God Nodes (most connected - your core abstractions)
1. `playTickWithThrottle()` - 12 edges
2. `Skill: Diagnóstico y Depuración de RíoMate` - 10 edges
3. `switchSubject()` - 9 edges
4. `🇨🇷 RíoMate — Reglas de Desarrollo (Manual Oficial)` - 8 edges
5. `drawAndCalculate()` - 7 edges
6. `playSound()` - 6 edges
7. `updateBadges()` - 6 edges
8. `Procedimiento` - 6 edges
9. `Skill: Clonar RíoMate para una Nueva Materia` - 6 edges
10. `Skill: Flashcards de Teoría en RíoMate` - 6 edges

## Surprising Connections (you probably didn't know these)
- `onLabSliderInput()` --calls--> `playTickWithThrottle()`  [EXTRACTED]
  src/subjects/matematicas/labs/geometria.js → src/shared/modules/audio.js
- `switchSubject()` --calls--> `stopFiltroRenal()`  [EXTRACTED]
  src/subjects/matematicas/main.js → src/subjects/ciencias/labs/filtro-renal.js
- `selectOption()` --calls--> `playSound()`  [EXTRACTED]
  src/shared/modules/quiz.js → src/shared/modules/audio.js
- `chooseMedicalTool()` --calls--> `playSound()`  [EXTRACTED]
  src/subjects/ciencias/labs/decisiones-medicas.js → src/shared/modules/audio.js
- `updateDivisoresLab()` --calls--> `playTickWithThrottle()`  [EXTRACTED]
  src/subjects/matematicas/labs/divisores.js → src/shared/modules/audio.js

## Communities (16 total, 4 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.13
Nodes (26): quizPracticoCiencias, quizPracticoQuestions, quizTeoricoCiencias, quizTeoricoQuestions, switchSubject(), urlParams, playSwissSound(), toggleCard() (+18 more)

### Community 1 - "Community 1"
Cohesion: 0.12
Nodes (16): Anatomía de un Laboratorio (Patrón existente), code:block1 (1. Sub-tab button en la barra de navegación (.agents/rules/r), code:html (<button onclick="switchLabSubTab('{nombre}')" id="subtab-{no), code:html (<!-- SUB-CONTENIDO: LABORATORIO DE {NOMBRE EN MAYÚSCULAS} --), code:js (// ==========================================), code:js (update{Nombre}Lab(); // agregar junto a los otros update*Lab), code:js (update{Nombre}Lab(); // agregar junto a los otros), Cuándo usar este skill (+8 more)

### Community 2 - "Community 2"
Cohesion: 0.13
Nodes (14): dependencies, canvas-confetti, devDependencies, gh-pages, tailwindcss, @tailwindcss/vite, vite, name (+6 more)

### Community 3 - "Community 3"
Cohesion: 0.27
Nodes (8): updateDivisoresLab(), updateFraccionesLab(), updateMultiplesLab(), calculatePulpería(), changePulperíaQty(), playTickWithThrottle(), pulperíaCart, pulperíaPrices

### Community 4 - "Community 4"
Cohesion: 0.17
Nodes (11): 1. Errores de Notación Matemática, 2. Flashcards no se voltean, 3. Quiz no funciona / preguntas no aparecen, 4. Laboratorio de geometría SVG se desborda / solapamiento de etiquetas, 5. Pulpería / cálculo de vuelto incorrecto, 6. Progreso y badges no se actualizan, 7. Problema de responsive / scroll horizontal, 8. Proceso de verificación rápida (+3 more)

### Community 5 - "Community 5"
Cohesion: 0.20
Nodes (9): ARQUITECTURA: Single-File Mandate, code:js (const quizQuestions = [), CONTEXTO DEL PROYECTO, ESCALABILIDAD — Blueprint de Nuevas Materias, ESQUEMA DE PREGUNTAS (Quiz) — Formato Estricto, NOTACIÓN MATEMÁTICA — PROHIBICIÓN ABSOLUTA, 🇨🇷 RíoMate — Reglas de Desarrollo (Manual Oficial), SIMULADORES INTERACTIVOS — Reglas de Laboratorio (+1 more)

### Community 6 - "Community 6"
Cohesion: 0.20
Nodes (9): 1. Verificar destino, 2. Estructura obligatoria de cada pregunta, 3. Reglas de calidad, 4. Inserción en el archivo, 5. Verificación post-inserción, code:js ({), Cuándo usar este skill, Procedimiento (+1 more)

### Community 7 - "Community 7"
Cohesion: 0.20
Nodes (9): Blueprints por Materia, 🔬 Ciencias, Cuándo usar este skill, 📚 Español / Gramática, 🌍 Estudios Sociales, Pasos para clonar, Principio: Caparazón + Relleno, Restricciones al clonar (+1 more)

### Community 8 - "Community 8"
Cohesion: 0.47
Nodes (8): addSvgText(), drawAndCalculate(), figurePresets, onLabFigureChange(), onLabSliderInput(), _svgEl(), _svgLine(), _svgRightAngle()

### Community 9 - "Community 9"
Cohesion: 0.25
Nodes (7): code:html (<!-- Tarjeta N: {Título del Tema} -->), Cuándo usar este skill, Estructura HTML de una Flashcard, Paleta de colores por tarjeta existente, Pasos al agregar una tarjeta nueva, Reglas de contenido, Skill: Flashcards de Teoría en RíoMate

### Community 14 - "Community 14"
Cohesion: 0.38
Nodes (6): casosMedicosLab, chooseMedicalTool(), initDecisionesMedicas(), renderCaso(), playSound(), selectOption()

### Community 15 - "Community 15"
Cohesion: 0.25
Nodes (5): initFiltroRenal(), Particle, particles, stopFiltroRenal(), tick()

## Knowledge Gaps
- **66 isolated node(s):** `name`, `private`, `dev`, `build`, `preview` (+61 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `name`, `private`, `dev` to the rest of the system?**
  _66 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.12773109243697478 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._