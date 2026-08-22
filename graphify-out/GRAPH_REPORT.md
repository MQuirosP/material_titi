# Graph Report - rioja  (2026-08-22)

## Corpus Check
- 39 files · ~47,321 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 303 nodes · 504 edges · 21 communities (18 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c6562ee3`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
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
- [[_COMMUNITY_Community 22|Community 22]]

## God Nodes (most connected - your core abstractions)
1. `playTickWithThrottle()` - 26 edges
2. `playSound()` - 23 edges
3. `updateBadges()` - 17 edges
4. `setUserHasUsedLab()` - 13 edges
5. `selectSampleSentence()` - 10 edges
6. `switchSubject()` - 10 edges
7. `🇨🇷 RíoMate — Reglas de Desarrollo (Manual Oficial)` - 10 edges
8. `Skill: Diagnóstico y Depuración de RíoMate` - 10 edges
9. `Skill: Diagnóstico y Depuración de RíoMate` - 10 edges
10. `🇨🇷 RíoMate — Reglas y Estándares Oficiales de Desarrollo` - 8 edges

## Surprising Connections (you probably didn't know these)
- `analyzeCustomInput()` --calls--> `playSound()`  [EXTRACTED]
  src/subjects/espanol/labs/detector-oraciones.js → src/shared/modules/audio.js
- `resetChallengeDetector()` --calls--> `playSound()`  [EXTRACTED]
  src/subjects/espanol/labs/detector-oraciones.js → src/shared/modules/audio.js
- `resetRefranesGame()` --calls--> `playSound()`  [EXTRACTED]
  src/subjects/espanol/labs/pulperia-refranes.js → src/shared/modules/audio.js
- `selectMeaningToMatch()` --calls--> `playSound()`  [EXTRACTED]
  src/subjects/espanol/labs/pulperia-refranes.js → src/shared/modules/audio.js
- `revealAdivinanzaSolution()` --calls--> `playSound()`  [EXTRACTED]
  src/subjects/espanol/labs/pulperia-refranes.js → src/shared/modules/audio.js

## Communities (21 total, 3 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.08
Nodes (35): quizPracticoCiencias, quizPracticoEspanol, quizPracticoQuestions, quizTeoricoCiencias, quizTeoricoEspanol, quizTeoricoQuestions, casosMedicosLab, chooseMedicalTool() (+27 more)

### Community 1 - "Community 1"
Cohesion: 0.10
Nodes (21): Anatomía de un Laboratorio (Patrón existente), Audio y Estado, code:html (<div onclick="selectSample({idx})" class="cursor-pointer p-3), code:html (<div class="flex flex-col sm:flex-row gap-2.5">), code:html (<!-- SUB-CONTENIDO: LABORATORIO DE {NOMBRE EN MAYÚSCULAS} --), code:js (// ==========================================), code:js (update{Nombre}Lab(); // agregar junto a los otros update*Lab), code:js (update{Nombre}Lab(); // agregar junto a los otros) (+13 more)

### Community 2 - "Community 2"
Cohesion: 0.13
Nodes (14): dependencies, canvas-confetti, devDependencies, gh-pages, tailwindcss, @tailwindcss/vite, vite, name (+6 more)

### Community 4 - "Community 4"
Cohesion: 0.14
Nodes (13): 1. Errores de Notación Matemática, 2. Flashcards no se voltean, 3. Quiz no funciona / preguntas no aparecen, 4. Laboratorio de geometría SVG se desborda / solapamiento de etiquetas, 5. Pulpería / cálculo de vuelto incorrecto, 6. Progreso y badges no se actualizan, 7. Problema de responsive / scroll horizontal, 8. Proceso de verificación rápida (+5 more)

### Community 5 - "Community 5"
Cohesion: 0.08
Nodes (26): 1. ARQUITECTURA GENERAL & SINGLE-BUNDLE MANDATE, 2. CONTEXTO ACADÉMICO, SEMESTRES Y DOCENTES OFICIALES, 3. ESTÁNDARES DE COMPONENTES UI/UX (PROHIBIDO ALTERAR), 4. INTEGRACIÓN DE GOOGLE GEMINI IA (ESTÁNDAR DE BAJO CONSUMO), 5. NOTACIÓN MATEMÁTICA — PROHIBICIÓN ABSOLUTA, 6. SISTEMA DE AUDIO SINTETIZADO (Web Audio API), 7. CHECKLIST MANDATORIO DE DIAGNÓSTICO, A. Botones de Opciones en Exámenes (Quiz) (+18 more)

### Community 6 - "Community 6"
Cohesion: 0.16
Nodes (13): 1. Verificar destino, 2. Estructura obligatoria de cada pregunta, 3. Reglas de calidad, 4. Inserción en el archivo, 5. Verificación post-inserción, code:js (export const quizTeoricoMateria = [), code:html (<button class="option-btn-{pfx} w-full text-left p-4 rounded), Cuándo usar este skill (+5 more)

### Community 7 - "Community 7"
Cohesion: 0.17
Nodes (12): Blueprint de Creación / Clonación, Blueprints por Materia, 🔬 Ciencias, Cuándo usar este skill, 📚 Español / Gramática, 🌍 Estudios Sociales, Mapeo Oficial de Docentes y Semestres, Pasos para clonar (+4 more)

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
Cohesion: 0.14
Nodes (13): 1. Errores de Notación Matemática, 2. Flashcards no se voltean, 3. Quiz no funciona / preguntas no aparecen, 4. Laboratorio de geometría SVG se desborda / solapamiento de etiquetas, 5. Pulpería / cálculo de vuelto incorrecto, 6. Progreso y badges no se actualizan, 7. Problema de responsive / scroll horizontal, 8. Proceso de verificación rápida (+5 more)

### Community 15 - "Community 15"
Cohesion: 0.16
Nodes (13): 1. Verificar destino, 2. Estructura obligatoria de cada pregunta, 3. Reglas de calidad, 4. Inserción en el archivo, 5. Verificación post-inserción, code:js (export const quizTeoricoMateria = [), code:html (<button class="option-btn-{pfx} w-full text-left p-4 rounded), Cuándo usar este skill (+5 more)

### Community 16 - "Community 16"
Cohesion: 0.33
Nodes (5): code:html (<!-- Tarjeta N: {Título del Tema} -->), Cuándo usar este skill, Estructura HTML de una Flashcard, Reglas de contenido, Skill: Flashcards de Teoría en RíoMate

### Community 17 - "Community 17"
Cohesion: 0.29
Nodes (7): Blueprint de Creación / Clonación, Cuándo usar este skill, Mapeo Oficial de Docentes y Semestres, Pasos para clonar, Principio: Caparazón + Relleno, Skill: Clonar Materia en RíoMate (Escuela Riojalandia), Skill: Clonar RíoMate para una Nueva Materia

### Community 18 - "Community 18"
Cohesion: 0.17
Nodes (11): Anatomía de un Laboratorio, Audio y Estado, code:html (<div onclick="selectSample({idx})" class="cursor-pointer p-3), code:html (<div class="flex flex-col sm:flex-row gap-2.5">), Cuándo usar este skill, Estructura Estándar de un Laboratorio (Layout de 2 Columnas), Integración de Gemini IA (Mínimo Consumo), Patrón Oficial de Input + Botón en Móvil (+3 more)

### Community 19 - "Community 19"
Cohesion: 0.13
Nodes (27): analyzeCustomInput(), challengeList, goToSampleSentence(), initDetectorOraciones(), nextSampleSentence(), prevSampleSentence(), renderChallenge(), renderSampleCards() (+19 more)

### Community 20 - "Community 20"
Cohesion: 0.20
Nodes (13): calculatePulpería(), changePulperíaQty(), getLimit(), playSwissSound(), toggleCard(), updateTheoryProgress(), getTotalCardsForActiveSubject(), pulperíaCart (+5 more)

### Community 22 - "Community 22"
Cohesion: 0.22
Nodes (14): adivinanzasData, bombasData, initPulperiaRefranes(), nextAdivinanza(), nextBomba(), refranesGameData, renderAdivinanza(), renderBomba() (+6 more)

## Knowledge Gaps
- **116 isolated node(s):** `name`, `private`, `dev`, `build`, `preview` (+111 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `playTickWithThrottle()` connect `Community 19` to `Community 0`, `Community 8`, `Community 20`, `Community 22`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **Why does `playSound()` connect `Community 0` to `Community 19`, `Community 22`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **What connects `name`, `private`, `dev` to the rest of the system?**
  _116 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.07686274509803921 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.09956709956709957 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._