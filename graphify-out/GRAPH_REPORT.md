# Graph Report - rioja  (2026-08-22)

## Corpus Check
- 39 files · ~48,968 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 259 nodes · 450 edges · 23 communities (20 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f0ba19cd`
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
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]

## God Nodes (most connected - your core abstractions)
1. `playTickWithThrottle()` - 26 edges
2. `playSound()` - 23 edges
3. `updateBadges()` - 17 edges
4. `setUserHasUsedLab()` - 13 edges
5. `switchSubject()` - 10 edges
6. `🇨🇷 RíoMate — Reglas de Desarrollo (Manual Oficial)` - 10 edges
7. `Skill: Diagnóstico y Depuración de RíoMate` - 10 edges
8. `Skill: Diagnóstico y Depuración de RíoMate` - 10 edges
9. `selectSampleSentence()` - 9 edges
10. `analyzeCustomInput()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `selectOption()` --calls--> `playSound()`  [EXTRACTED]
  src/shared/modules/quiz.js → src/shared/modules/audio.js
- `nextQuestion()` --calls--> `playSound()`  [EXTRACTED]
  src/shared/modules/quiz.js → src/shared/modules/audio.js
- `switchTab()` --calls--> `playSound()`  [EXTRACTED]
  src/shared/modules/tabs.js → src/shared/modules/audio.js
- `switchLabSubTab()` --calls--> `playSound()`  [EXTRACTED]
  src/shared/modules/tabs.js → src/shared/modules/audio.js
- `chooseMedicalTool()` --calls--> `playSound()`  [EXTRACTED]
  src/subjects/ciencias/labs/decisiones-medicas.js → src/shared/modules/audio.js

## Communities (23 total, 3 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.10
Nodes (27): quizPracticoCiencias, quizPracticoEspanol, quizPracticoQuestions, quizTeoricoCiencias, quizTeoricoEspanol, quizTeoricoQuestions, casosMedicosLab, chooseMedicalTool() (+19 more)

### Community 1 - "Community 1"
Cohesion: 0.12
Nodes (16): Anatomía de un Laboratorio (Patrón existente), code:block1 (1. Sub-tab button en la barra de navegación (.agents/rules/r), code:html (<button onclick="switchLabSubTab('{nombre}')" id="subtab-{no), code:html (<!-- SUB-CONTENIDO: LABORATORIO DE {NOMBRE EN MAYÚSCULAS} --), code:js (// ==========================================), code:js (update{Nombre}Lab(); // agregar junto a los otros update*Lab), code:js (update{Nombre}Lab(); // agregar junto a los otros), Cuándo usar este skill (+8 more)

### Community 2 - "Community 2"
Cohesion: 0.13
Nodes (14): dependencies, canvas-confetti, devDependencies, gh-pages, tailwindcss, @tailwindcss/vite, vite, name (+6 more)

### Community 3 - "Community 3"
Cohesion: 0.40
Nodes (9): checkBombaRhyme(), revealAdivinanzaSolution(), selectMeaningToMatch(), bookPartsData, initTallerLibro(), selectBookPart(), switchCardGeneratorTab(), updateBadges() (+1 more)

### Community 4 - "Community 4"
Cohesion: 0.17
Nodes (11): 1. Errores de Notación Matemática, 2. Flashcards no se voltean, 3. Quiz no funciona / preguntas no aparecen, 4. Laboratorio de geometría SVG se desborda / solapamiento de etiquetas, 5. Pulpería / cálculo de vuelto incorrecto, 6. Progreso y badges no se actualizan, 7. Problema de responsive / scroll horizontal, 8. Proceso de verificación rápida (+3 more)

### Community 5 - "Community 5"
Cohesion: 0.15
Nodes (12): ARQUITECTURA: Single-File Mandate, CHECKLIST DE DIAGNÓSTICO Y DEPURACIÓN (MANDATORIO), code:js (const quizQuestions = [), CONTEXTO DEL PROYECTO, ESCALABILIDAD — Blueprint de Nuevas Materias, ESQUEMA DE PREGUNTAS (Quiz) — Formato Estricto, Mandato de Audio:, NOTACIÓN MATEMÁTICA — PROHIBICIÓN ABSOLUTA (+4 more)

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

### Community 13 - "Community 13"
Cohesion: 0.40
Nodes (4): cards, destination, playClickSound(), switchSemester()

### Community 14 - "Community 14"
Cohesion: 0.17
Nodes (11): 1. Errores de Notación Matemática, 2. Flashcards no se voltean, 3. Quiz no funciona / preguntas no aparecen, 4. Laboratorio de geometría SVG se desborda / solapamiento de etiquetas, 5. Pulpería / cálculo de vuelto incorrecto, 6. Progreso y badges no se actualizan, 7. Problema de responsive / scroll horizontal, 8. Proceso de verificación rápida (+3 more)

### Community 15 - "Community 15"
Cohesion: 0.20
Nodes (9): 1. Verificar destino, 2. Estructura obligatoria de cada pregunta, 3. Reglas de calidad, 4. Inserción en el archivo, 5. Verificación post-inserción, code:js ({), Cuándo usar este skill, Procedimiento (+1 more)

### Community 16 - "Community 16"
Cohesion: 0.33
Nodes (5): code:html (<!-- Tarjeta N: {Título del Tema} -->), Cuándo usar este skill, Estructura HTML de una Flashcard, Reglas de contenido, Skill: Flashcards de Teoría en RíoMate

### Community 17 - "Community 17"
Cohesion: 0.40
Nodes (4): Cuándo usar este skill, Pasos para clonar, Principio: Caparazón + Relleno, Skill: Clonar RíoMate para una Nueva Materia

### Community 18 - "Community 18"
Cohesion: 0.40
Nodes (4): Anatomía de un Laboratorio, Cuándo usar este skill, Restricciones técnicas, Skill: Nuevo Laboratorio Interactivo en RíoMate

### Community 19 - "Community 19"
Cohesion: 0.14
Nodes (23): analyzeCustomInput(), answerChallengeDetector(), challengeList, goToSampleSentence(), initDetectorOraciones(), nextSampleSentence(), prevSampleSentence(), renderChallenge() (+15 more)

### Community 20 - "Community 20"
Cohesion: 0.19
Nodes (14): calculatePulpería(), changePulperíaQty(), getLimit(), playSwissSound(), toggleCard(), updateTheoryProgress(), getTotalCardsForActiveSubject(), pulperíaCart (+6 more)

### Community 21 - "Community 21"
Cohesion: 0.29
Nodes (4): initFiltroRenal(), Particle, particles, tick()

### Community 22 - "Community 22"
Cohesion: 0.27
Nodes (12): adivinanzasData, bombasData, initPulperiaRefranes(), nextAdivinanza(), nextBomba(), refranesGameData, renderAdivinanza(), renderBomba() (+4 more)

## Knowledge Gaps
- **102 isolated node(s):** `name`, `private`, `dev`, `build`, `preview` (+97 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `playTickWithThrottle()` connect `Community 19` to `Community 3`, `Community 8`, `Community 20`, `Community 21`, `Community 22`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **Why does `playSound()` connect `Community 19` to `Community 0`, `Community 3`, `Community 22`?**
  _High betweenness centrality (0.007) - this node is a cross-community bridge._
- **What connects `name`, `private`, `dev` to the rest of the system?**
  _102 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.0960960960960961 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `Community 19` be split into smaller, more focused modules?**
  _Cohesion score 0.13793103448275862 - nodes in this community are weakly interconnected._