---
name: riomate-new-lab
description: >
  Crea un nuevo laboratorio interactivo dentro de la sección de Laboratorios de RíoMate.
  Usar cuando el usuario pide agregar un simulador, mini-juego o experimento nuevo.
---

# Skill: Nuevo Laboratorio Interactivo en RíoMate

## Cuándo usar este skill

- "Agrega un laboratorio de [tema]"
- "Crea un simulador de [concepto]"
- "Quiero un experimento interactivo de [materia]"

## Anatomía de un Laboratorio (Patrón existente)

Cada laboratorio consta de:

```
1. Sub-tab button en la barra de navegación (.agents/rules/riomate.md → sección Tabs)
2. Contenedor HTML  id="lab-sub-content-{nombre}"  class="lab-sub-content hidden"
3. Función JS       function update{Nombre}Lab() { ... }
4. Llamada en     switchTab('laboratorio')  →  update{Nombre}Lab()
5. Llamada en     window.onload             →  update{Nombre}Lab()
```

## Pasos de implementación

### Paso 1 — Botón sub-pestaña

Insertar en el `<div class="flex flex-wrap gap-2 mb-8 ...">` que contiene los `subtab-btn`:

```html
<button onclick="switchLabSubTab('{nombre}')" id="subtab-{nombre}"
  class="subtab-btn px-4 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 text-slate-600 hover:bg-slate-200">
  {emoji} {Título del Lab}
</button>
```

### Paso 2 — Estructura HTML del laboratorio

```html
<!-- SUB-CONTENIDO: LABORATORIO DE {NOMBRE EN MAYÚSCULAS} -->
<div id="lab-sub-content-{nombre}" class="lab-sub-content hidden">
  <div class="grid grid-cols-1 md:grid-cols-12 gap-8">

    <!-- Panel de control (4 columnas) -->
    <div class="md:col-span-4 bg-{color}-50 p-5 rounded-2xl border border-{color}-100 flex flex-col justify-between">
      <div>
        <h3 class="font-bold text-{color}-900 text-lg font-fun mb-2">{emoji} {Título}</h3>
        <p class="text-xs text-{color}-800 leading-relaxed mb-4">{Descripción del lab}</p>
        <!-- Controles: sliders, checkboxes, selects -->
      </div>
      <div class="bg-white/80 p-3 rounded-xl border border-{color}-100 mt-4 text-xs text-{color}-900">
        💡 <strong>Aprende:</strong> {Dato educativo clave}
      </div>
    </div>

    <!-- Panel de visualización (8 columnas) -->
    <div class="md:col-span-8">
      <!-- Contenido visual dinámico -->
      <div id="lab-{nombre}-visual" class="...">
        <!-- Generado dinámicamente por JS -->
      </div>
    </div>

  </div>
</div>
```

### Paso 3 — Función JavaScript

```js
// ==========================================
// {emoji} LÓGICA: LABORATORIO DE {NOMBRE}
// ==========================================
function update{Nombre}Lab() {
    // 1. Leer valores de inputs
    const val = parseInt(document.getElementById('lab-{nombre}-input').value);
    
    // 2. Actualizar displays de valores
    document.getElementById('lab-{nombre}-val').innerText = val;
    
    // 3. Calcular resultado
    // ... lógica matemática ...
    
    // 4. Renderizar visualización en el DOM
    const container = document.getElementById('lab-{nombre}-visual');
    container.innerHTML = ''; // limpiar
    // ... crear elementos dinámicamente ...
}
```

### Paso 4 — Registrar en switchTab y window.onload

En `switchTab('laboratorio')`:
```js
update{Nombre}Lab(); // agregar junto a los otros update*Lab()
```

En `window.onload`:
```js
update{Nombre}Lab(); // agregar junto a los otros
```

## Paleta de colores por temática

| Tema | Color Tailwind |
|---|---|
| Matemáticas / Números | `teal` |
| Fracciones / Alimentos | `amber` |
| Dinero / Economía | `rose` o `emerald` |
| Geometría / Figuras | `slate` o `purple` |
| Ciencias / Naturaleza | `green` |
| Historia / Social | `orange` |
| Lenguaje / Letras | `blue` |

## Restricciones técnicas

- Sin assets externos. Toda visualización es HTML/CSS/SVG/Canvas.
- Touch targets mínimo 44px para botones y sliders.
- El slider `<input type="range">` debe tener `oninput="update{Nombre}Lab()"`.
- SVG: siempre usar `viewBox` fijo (ej. `"0 0 200 200"`) para evitar desbordamiento.
- Canvas: escalar coordenadas según ancho del contenedor, no usar valores fijos de pantalla.
