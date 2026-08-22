---
name: riomate-new-lab
description: Crea un nuevo laboratorio interactivo dentro de la sección de Laboratorios de RíoMate. Usar cuando el usuario pide agregar un simulador, mini-juego o experimento nuevo.
---

# Skill: Nuevo Laboratorio Interactivo en RíoMate

## Cuándo usar este skill

- "Agrega un laboratorio de [tema]"
- "Crea un simulador de [concepto]"
- "Quiero un experimento interactivo de [materia]"

## Anatomía de un Laboratorio

Cada laboratorio consta de:
1. **Sub-tab button** en la barra de navegación del laboratorio.
2. **Contenedor HTML** `id="lab-sub-content-{nombre}"` con clase `lab-sub-content hidden`.
3. **Módulo JS** en `src/subjects/{materia}/labs/{nombre}.js`.
4. **Registro** en `onLabInit` o inicializador de la materia.
5. **Retroalimentación sonora** usando `playTickWithThrottle()` de `src/shared/modules/audio.js` en controles interactivos (sliders, toggles, botones + / -).

## Restricciones técnicas

- Sin assets externos. Toda visualización es HTML/CSS/SVG/Canvas.
- Touch targets mínimo 44px para botones y sliders.
- SVG: siempre usar `viewBox` fijo (ej. `"0 0 200 200"`) para evitar desbordamiento.
- Canvas: responder al tamaño del contenedor y limpiar animaciones si se cambia de pestaña.
