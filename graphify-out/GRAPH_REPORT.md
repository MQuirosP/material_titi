# Graph Report - rioja  (2026-06-23)

## Corpus Check
- 23 files · ~17,596 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 134 nodes · 173 edges · 14 communities (11 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ca173b97`
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

## God Nodes (most connected - your core abstractions)
1. `Skill: Diagnóstico y Depuración de RíoMate` - 10 edges
2. `🇨🇷 RíoMate — Reglas de Desarrollo (Manual Oficial)` - 8 edges
3. `drawAndCalculate()` - 7 edges
4. `Procedimiento` - 6 edges
5. `Skill: Clonar RíoMate para una Nueva Materia` - 6 edges
6. `Skill: Flashcards de Teoría en RíoMate` - 6 edges
7. `Skill: Nuevo Laboratorio Interactivo en RíoMate` - 6 edges
8. `scripts` - 5 edges
9. `updateBadges()` - 5 edges
10. `_svgEl()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `nextQuestion()` --calls--> `updateBadges()`  [EXTRACTED]
  src/shared/modules/quiz.js → src/shared/modules/flashcards.js
- `switchTab()` --calls--> `setActiveTab()`  [EXTRACTED]
  src/shared/modules/tabs.js → src/shared/state/store.js
- `switchTab()` --calls--> `setUserHasUsedLab()`  [EXTRACTED]
  src/shared/modules/tabs.js → src/shared/state/store.js

## Communities (14 total, 3 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.17
Nodes (15): quizPracticoQuestions, quizTeoricoQuestions, updateDivisoresLab(), updateFraccionesLab(), updateMultiplesLab(), toggleCard(), updateBadges(), updateTheoryProgress() (+7 more)

### Community 1 - "Community 1"
Cohesion: 0.12
Nodes (16): Anatomía de un Laboratorio (Patrón existente), code:block1 (1. Sub-tab button en la barra de navegación (.agents/rules/r), code:html (<button onclick="switchLabSubTab('{nombre}')" id="subtab-{no), code:html (<!-- SUB-CONTENIDO: LABORATORIO DE {NOMBRE EN MAYÚSCULAS} --), code:js (// ==========================================), code:js (update{Nombre}Lab(); // agregar junto a los otros update*Lab), code:js (update{Nombre}Lab(); // agregar junto a los otros), Cuándo usar este skill (+8 more)

### Community 2 - "Community 2"
Cohesion: 0.13
Nodes (14): dependencies, canvas-confetti, devDependencies, gh-pages, tailwindcss, @tailwindcss/vite, vite, name (+6 more)

### Community 3 - "Community 3"
Cohesion: 0.24
Nodes (10): calculatePulpería(), changePulperíaQty(), labInitCallbacks, onLabInit(), switchLabSubTab(), switchTab(), pulperíaCart, pulperíaPrices (+2 more)

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

## Knowledge Gaps
- **59 isolated node(s):** `name`, `private`, `dev`, `build`, `preview` (+54 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `name`, `private`, `dev` to the rest of the system?**
  _59 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._