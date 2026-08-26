---
name: riomate-clone-materia
description: Clona o agrega una nueva materia, semestre o evaluación en RíoMate (Ciencias, Español, Estudios Sociales, Matemáticas). Usar cuando el usuario pide agregar una nueva materia o nuevo semestre.
---

# Skill: Agregar Materia, Semestre o Evaluación en RíoMate (Escuela Riojalandia)

## Cuándo usar este skill
- "Agrega la materia de [Estudios Sociales / Ciencias / Español / Matemáticas]"
- "Agrega el [Primer Semestre / Segundo Semestre] de [materia]"
- "Crea la [1ª Evaluación / 2ª Evaluación] de [materia]"

## Mapeo Oficial de Docentes y Semestres
- **👩‍🏫 Maestra Florisel Olmazo López:** Responsable oficial de **Matemáticas** y **Ciencias** (I Semestre y II Semestre).
- **👩‍🏫 Maestra Licda. Maureen Vargas Solano:** Responsable oficial de **Español** y **Estudios Sociales** (I Semestre y II Semestre).
- **Materias Complementarias:** Inglés, Educación Musical, Artes Plásticas y Educación Física.

---

## 🏛️ Estructura Modular Jerárquica Obligatoria

Cada materia, semestre y evaluación DEBE vivir en su propio módulo jerárquico independiente:

```
src/subjects/{materia}/{sem_eval}/
├── content.js              <-- Módulo de contenido (bienvenida, temario, subtabs, docente)
├── data/
│   ├── quiz-teorico.js     <-- Banco de preguntas teóricas con rationale educativo
│   └── quiz-practico.js    <-- Banco de preguntas prácticas
└── labs/
    └── {nombre-lab}.js     <-- Laboratorios interactivos independientes
```

---

## 📋 Pasos de Implementación Estricta

### 1. Crear el Módulo de Contenido (`src/subjects/{materia}/{sem_eval}/content.js`)
Define los atributos del módulo:
```javascript
export const materiaSemXEvalYModule = {
  id: 'materia-semX-evalY',
  subject: 'materia',
  sem: 'X',
  eval: 'Y',
  title: 'RíoMateria 5º',
  subtitle: 'Escuela Riojalandia · Yª Evaluación · X Semestre · Secciones 5-1 y 5-2',
  examDate: 'Fecha del Examen',
  teacher: '👩‍🏫 Maestra: Nombre Docente',
  semesterBadge: 'Semestre X 2026 · Yª Evaluación',
  themeClass: 'clases-de-fondo-tailwind',
  favicon: 'favicon-svg-inline',
  badgeFormulaTitle: 'Título de Medalla de Laboratorio',
  badgeFormulaIcon: 'Icono',
  welcomeHTML: `...`,
  temarioHTML: `...`,
  subtabsHTML: `...`,
  defaultLabSubTab: 'lab-defecto'
};
```

### 2. Registrar en `subjectRegistry.js` (`src/shared/modules/subjectRegistry.js`)
Importar y agregar el módulo al array `registry`:
```javascript
import { materiaSemXEvalYModule } from '../../subjects/materia/semX_evalY/content.js';

const registry = [
  ...
  materiaSemXEvalYModule
];
```

### 3. Crear Preguntas Exclusivas en `src/subjects/{materia}/{sem_eval}/data/`
- **PROHIBICIÓN:** NUNCA usar o compartir bancos de preguntas de otros semestres o evaluaciones.
- Crear `quiz-teorico.js` y `quiz-practico.js` exclusivos en esa carpeta.
- En `src/subjects/matematicas/main.js → switchSubject()` importarlos y asignarlos de forma explícita:
  ```javascript
  if (targetSubject === 'materia' && targetSem === 'X' && targetEval === 'Y') {
    quizState.teorico.questions = quizTeoricoMateriaSemXEvalY;
    quizState.practico.questions = quizPracticoMateriaSemXEvalY;
  }
  ```

### 4. Agregar Contenedores Segregados en `practica/index.html`
- **Tarjetas de Teoría:** Contenedor `<div id="theory-materia-semX-evalY" data-subject="materia" data-sem="X" data-eval="Y" data-display="grid" class="grid grid-cols-1 md:grid-cols-2 gap-6" style="display: none;">` con exactamente las flashcards 3D interactivas.
- **Laboratorios:** Contenedor `<div id="lab-contents-materia-semX-evalY" data-subject="materia" data-sem="X" data-eval="Y" data-display="block">` con los laboratorios correspondientes.

### 4. ⛔ Verificación Estricta de Cierre de Etiquetas `<div>`
Antes de compilar:
- Verificar con lupa que **todas** las tarjetas `.flashcard` dentro del nuevo bloque tengan sus `<div>` de apertura y cierre perfectamente emparejados.
- Confirmar que el `</div>` de cierre del contenedor principal `#theory-...` no se trague el siguiente bloque ni se cierre prematuramente.

### 5. Compilación y Validación
- Ejecutar `npm run build` para asegurar 0 errores.
- Verificar navegando a `?subject=materia&sem=X&eval=Y`.
