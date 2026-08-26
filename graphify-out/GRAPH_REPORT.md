# Graph Report - rioja  (2026-08-26)

## Corpus Check
- 53 files · ~67,910 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 443 nodes · 771 edges · 24 communities (21 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7a654bad`
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
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]

## God Nodes (most connected - your core abstractions)
1. `playSound()` - 40 edges
2. `playTickWithThrottle()` - 31 edges
3. `updateBadges()` - 23 edges
4. `setUserHasUsedLab()` - 15 edges
5. `switchSubject()` - 15 edges
6. `selectSampleSentence()` - 12 edges
7. `🇨🇷 RíoMate — Reglas y Estándares Oficiales de Desarrollo` - 11 edges
8. `🇨🇷 RíoMate — Reglas de Desarrollo (Manual Oficial)` - 10 edges
9. `Skill: Diagnóstico y Depuración de RíoMate` - 10 edges
10. `Skill: Diagnóstico y Depuración de RíoMate` - 10 edges

## Surprising Connections (you probably didn't know these)
- `chooseMedicalTool()` --calls--> `playSound()`  [EXTRACTED]
  src/subjects/ciencias/labs/decisiones-medicas.js → src/shared/modules/audio.js
- `initApp()` --calls--> `playSound()`  [EXTRACTED]
  src/subjects/matematicas/main.js → src/shared/modules/audio.js
- `selectOption()` --calls--> `playSound()`  [EXTRACTED]
  src/shared/modules/quiz.js → src/shared/modules/audio.js
- `nextQuestion()` --calls--> `playSound()`  [EXTRACTED]
  src/shared/modules/quiz.js → src/shared/modules/audio.js
- `switchTab()` --calls--> `playSound()`  [EXTRACTED]
  src/shared/modules/tabs.js → src/shared/modules/audio.js

## Communities (24 total, 3 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.08
Nodes (29): quizPracticoCiencias, quizPracticoCienciasSem1Eval2, quizPracticoCienciasSem2Eval1, quizPracticoEspanol, quizPracticoQuestions, quizTeoricoCiencias, quizTeoricoCienciasSem1Eval2, quizTeoricoCienciasSem2Eval1 (+21 more)

### Community 1 - "Community 1"
Cohesion: 0.10
Nodes (21): Anatomía de un Laboratorio (Patrón existente), Audio y Estado, code:html (<div onclick="selectSample({idx})" class="cursor-pointer p-3), code:html (<div class="flex flex-col sm:flex-row gap-2.5">), code:html (<!-- SUB-CONTENIDO: LABORATORIO DE {NOMBRE EN MAYÚSCULAS} --), code:js (// ==========================================), code:js (update{Nombre}Lab(); // agregar junto a los otros update*Lab), code:js (update{Nombre}Lab(); // agregar junto a los otros) (+13 more)

### Community 2 - "Community 2"
Cohesion: 0.13
Nodes (14): dependencies, canvas-confetti, devDependencies, gh-pages, tailwindcss, @tailwindcss/vite, vite, name (+6 more)

### Community 3 - "Community 3"
Cohesion: 0.09
Nodes (36): addChainOrganism(), answerRelacionType(), cadenasData, compostItems, compostSelected, fotosintesisState, GasParticle, initCadenasLab() (+28 more)

### Community 4 - "Community 4"
Cohesion: 0.14
Nodes (13): 1. Errores de Notación Matemática, 2. Flashcards no se voltean, 3. Quiz no funciona / preguntas no aparecen, 4. Laboratorio de geometría SVG se desborda / solapamiento de etiquetas, 5. Pulpería / cálculo de vuelto incorrecto, 6. Progreso y badges no se actualizan, 7. Problema de responsive / scroll horizontal, 8. Proceso de verificación rápida (+5 more)

### Community 5 - "Community 5"
Cohesion: 0.06
Nodes (36): 1. ARQUITECTURA GENERAL & SINGLE-BUNDLE MANDATE, 2. CONTEXTO ACADÉMICO, SEMESTRES Y DOCENTES OFICIALES, 3. ESTÁNDARES DE COMPONENTES UI/UX ⛔ INMUTABLES, 3. ESTÁNDARES DE COMPONENTES UI/UX (PROHIBIDO ALTERAR), 4. INTEGRACIÓN DE GOOGLE GEMINI IA (ESTÁNDAR DE BAJO CONSUMO), 5. NOTACIÓN MATEMÁTICA — PROHIBICIÓN ABSOLUTA, 6. SISTEMA DE AUDIO SINTETIZADO (Web Audio API), 7. CHECKLIST MANDATORIO DE DIAGNÓSTICO (+28 more)

### Community 6 - "Community 6"
Cohesion: 0.16
Nodes (13): 1. Verificar destino, 2. Estructura obligatoria de cada pregunta, 3. Reglas de calidad, 4. Inserción en el archivo, 5. Verificación post-inserción, code:js (export const quizTeoricoMateria = [), code:html (<button class="option-btn-{pfx} w-full text-left p-4 rounded), Cuándo usar este skill (+5 more)

### Community 7 - "Community 7"
Cohesion: 0.17
Nodes (12): Blueprint de Creación / Clonación, Blueprints por Materia, 🔬 Ciencias, Cuándo usar este skill, 📚 Español / Gramática, 🌍 Estudios Sociales, Mapeo Oficial de Docentes y Semestres, Pasos para clonar (+4 more)

### Community 8 - "Community 8"
Cohesion: 0.29
Nodes (5): registry, cienciasSem1Eval2Module, matematicasSem1Eval2Module, cienciasSem2Eval1Module, espanolSem2Eval1Module

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
Cohesion: 0.29
Nodes (6): code:html (<!-- Tarjeta N: {Título del Tema} -->), Cuándo usar este skill, Estructura HTML de una Flashcard, ⛔ Regla Crítica de Estructura DOM, Reglas de contenido, Skill: Flashcards de Teoría en RíoMate

### Community 17 - "Community 17"
Cohesion: 0.10
Nodes (21): 1. Crear el Módulo de Contenido (`src/subjects/{materia}/{sem_eval}/content.js`), 2. Registrar en `subjectRegistry.js` (`src/shared/modules/subjectRegistry.js`), 3. Agregar Contenedores Segregados en `practica/index.html`, 3. Crear Preguntas Exclusivas en `src/subjects/{materia}/{sem_eval}/data/`, 4. Agregar Contenedores Segregados en `practica/index.html`, 4. ⛔ Verificación Estricta de Cierre de Etiquetas `<div>`, 5. Compilación y Validación, Blueprint de Creación / Clonación (+13 more)

### Community 18 - "Community 18"
Cohesion: 0.09
Nodes (22): Anatomía de un Laboratorio, Audio y Estado, Carrusel vs Radio Button Cards?, Checklist antes de entregar el lab, code:html (<div onclick="selectSample({idx})" class="cursor-pointer p-3), code:html (<div class="flex flex-col sm:flex-row gap-2.5">), Cuando usar este skill, Cuándo usar este skill (+14 more)

### Community 19 - "Community 19"
Cohesion: 0.17
Nodes (20): analyzeCustomInput(), answerChallengeDetector(), challengeList, goToSampleSentence(), initDetectorOraciones(), nextSampleSentence(), prevSampleSentence(), renderChallenge() (+12 more)

### Community 20 - "Community 20"
Cohesion: 0.08
Nodes (20): updateDivisoresLab(), initFiltroRenal(), Particle, particles, tick(), updateFraccionesLab(), updateMultiplesLab(), calculatePulpería() (+12 more)

### Community 21 - "Community 21"
Cohesion: 0.28
Nodes (8): casosMedicosLab, chooseMedicalTool(), initDecisionesMedicas(), renderCaso(), casosMedicosLab, chooseMedicalTool(), initDecisionesMedicas(), renderCaso()

### Community 23 - "Community 23"
Cohesion: 0.09
Nodes (48): adivinanzasData, bombasData, checkBombaRhyme(), initPulperiaRefranes(), nextAdivinanza(), nextBomba(), refranesGameData, renderAdivinanza() (+40 more)

### Community 24 - "Community 24"
Cohesion: 0.47
Nodes (8): addSvgText(), drawAndCalculate(), figurePresets, onLabFigureChange(), onLabSliderInput(), _svgEl(), _svgLine(), _svgRightAngle()

## Knowledge Gaps
- **149 isolated node(s):** `name`, `private`, `dev`, `build`, `preview` (+144 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `playSound()` connect `Community 3` to `Community 0`, `Community 19`, `Community 20`, `Community 21`, `Community 23`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **Why does `playTickWithThrottle()` connect `Community 20` to `Community 19`, `Community 24`, `Community 3`, `Community 23`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Why does `updateBadges()` connect `Community 23` to `Community 0`, `Community 19`?**
  _High betweenness centrality (0.007) - this node is a cross-community bridge._
- **What connects `name`, `private`, `dev` to the rest of the system?**
  _149 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.08478513356562137 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.09956709956709957 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._