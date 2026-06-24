---
name: riomate-clone-materia
description: >
  Clona la estructura de RíoMate para una nueva materia (Ciencias, Español, Estudios Sociales, etc.).
  Usar cuando el usuario pide adaptar la app a un tema diferente de matemáticas.
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

El relleno (reemplazar):
- Arrays de preguntas (`quizTeoricoQuestions`, `quizPracticoQuestions`)
- Contenido de flashcards en `#content-teoria`
- Laboratorios interactivos (funciones `update*Lab()` y HTML de sub-contenidos)
- Paleta de colores dominante
- Título `<h1>` y metadata del header

## Blueprints por Materia

### 🌍 Estudios Sociales

| Sección | Contenido |
|---|---|
| Flashcards | Efemérides: Batalla de Rivas, Independencia, Juan Santamaría, Óscar Arias. Provincias de CR. |
| Lab 1 | **Línea de Tiempo:** Slider de años (1821–1948). Muestra evento histórico con CSS. |
| Lab 2 | **Mapa de Provincias:** 7 divs con nombre y capital al hacer click. |
| Lab 3 | **Símbolos Patrios:** Carrusel de tarjetas (bandera, escudo, flor, árbol, ave, animal). |
| Quiz Teórico | Definiciones de democracia, poderes del Estado, provincias. |
| Quiz Práctico | Eventos históricos en orden cronológico, identificación de mapas. |
| Colores | `red` (patriótico) + `blue` + `white` |

### 🔬 Ciencias

| Sección | Contenido |
|---|---|
| Flashcards | Sistemas del cuerpo humano, estados de la materia, célula animal vs vegetal. |
| Lab 1 | **Fábrica de Materia:** Slider de temperatura → partículas `<canvas>` (quietas/Sólido, moviéndose/Líquido, libres/Gas). |
| Lab 2 | **Cadena Alimenticia:** Click en eslabones para ver quién come a quién. |
| Lab 3 | **Ciclo del Agua:** SVG animado (evaporación → condensación → precipitación). |
| Quiz Teórico | Definiciones de fotosíntesis, cadena trófica, órganos. |
| Quiz Práctico | Problemas de clasificación de seres vivos, hábitats. |
| Colores | `green` + `teal` + `sky` |

### 📚 Español / Gramática

| Sección | Contenido |
|---|---|
| Flashcards | Reglas de acentuación (agudas/graves/esdrújulas), uso de B y V, tipos de oraciones. |
| Lab 1 | **Clasificador de Palabras:** Palabras en tarjetas que el estudiante arrastra a cajas de Sustantivo/Verbo/Adjetivo. |
| Lab 2 | **Sílabas:** Input de texto → conteo dinámico de sílabas con código de colores. |
| Lab 3 | **Tildador:** Palabra dada → identificar y colocar el acento correcto. |
| Quiz Teórico | Reglas ortográficas, identificación de partes de la oración. |
| Quiz Práctico | Completar oraciones, corrección ortográfica. |
| Colores | `blue` + `violet` + `indigo` |

## Pasos para clonar

1. **Crear un nuevo archivo** `index-{materia}.html` en la misma carpeta.
2. **Copiar** todo el `index.html` original como base.
3. **Cambiar** el `<title>` y el `<h1>` del header.
4. **Reemplazar** los arrays de preguntas (vaciar y rellenar con nuevo contenido).
5. **Reemplazar** el HTML de flashcards (`#content-teoria`).
6. **Reemplazar** los laboratorios: HTML en `#content-laboratorio` + funciones JS.
7. **Ajustar colores** del header y badges.
8. **Mantener** el CDN de Tailwind y canvas-confetti sin cambios.

## Restricciones al clonar

- Las mismas reglas de notación (sin LaTeX) aplican a toda materia.
- Los quizzes siempre usan el mismo formato `{topic, question, options[]}`.
- Touch targets mínimo 44px en todos los controles interactivos.
- El archivo resultante debe ser autocontenido (un solo `.html`).
