/** Definición de presets para cada figura geométrica */
export const figurePresets = {
  cuadrado: {
    title: 'Cuadrado',
    formulas: '<strong>Perímetro:</strong> Suma de sus 4 lados (P = L + L + L + L o L × 4).<br><strong>Área:</strong> Lado multiplicado por sí mismo (Área = Lado × Lado).',
    variables: [
      { id: 'lado', label: 'Medida del Lado (L)', min: 2, max: 15, val: 8 },
    ],
  },
  rectangulo: {
    title: 'Rectángulo',
    formulas: '<strong>Perímetro:</strong> Suma de los 4 lados (P = Largo × 2 + Ancho × 2).<br><strong>Área:</strong> Base por Altura (Área = Largo × Ancho).',
    variables: [
      { id: 'base',   label: 'Largo o Base (B)',   min: 4, max: 20, val: 12 },
      { id: 'altura', label: 'Ancho o Altura (H)', min: 2, max: 12, val:  6 },
    ],
  },
  triangulo: {
    title: 'Triángulo',
    formulas: '<strong>Perímetro:</strong> Suma de sus 3 lados exteriores (P = L1 + L2 + L3).<br><strong>Área:</strong> Base por la Altura, dividido entre 2 (Área = (Base × Altura) ÷ 2).',
    variables: [
      { id: 'base',   label: 'Base del Triángulo (B)',  min:  4, max: 18, val: 12 },
      { id: 'altura', label: 'Altura del Triángulo (H)', min: 3, max: 15, val:  8 },
      { id: 'ladoA',  label: 'Lado Izquierdo (L1)',     min:  3, max: 18, val:  9 },
      { id: 'ladoB',  label: 'Lado Derecho (L2)',       min:  3, max: 18, val: 10 },
    ],
  },
  paralelogramo: {
    title: 'Paralelogramo',
    formulas: '<strong>Perímetro:</strong> Sumar sus 4 lados (P = L1 + L2 + L1 + L2).<br><strong>Área:</strong> Base por Altura (Área = Base × Altura). ¡Ojo: la altura es la línea recta perpendicular, no el lado inclinado!',
    variables: [
      { id: 'base',          label: 'Base del Paralelogramo (B)', min: 4, max: 18, val: 12 },
      { id: 'altura',        label: 'Altura Vertical (H)',        min: 2, max: 12, val:  6 },
      { id: 'ladoInclinado', label: 'Lado Inclinado (L)',         min: 3, max: 15, val:  7 },
    ],
  },
  trapecio: {
    title: 'Trapecio',
    formulas: '<strong>Perímetro:</strong> Sumar sus 4 lados exteriores (P = B + b + L1 + L2).<br><strong>Área:</strong> Sumar base mayor y menor, multiplicar por la altura, y dividir entre 2 (Área = ((B + b) × H) ÷ 2).',
    variables: [
      { id: 'baseMayor',     label: 'Base Mayor (B)',             min:  6, max: 20, val: 14 },
      { id: 'baseMenor',     label: 'Base Menor (b)',             min:  2, max: 14, val:  8 },
      { id: 'altura',        label: 'Altura Vertical (H)',        min:  3, max: 12, val:  6 },
      { id: 'ladoInclinado', label: 'Lados Inclinados (L1 = L2)', min: 3, max: 14, val:  7 },
    ],
  },
};

/** Se ejecuta al cambiar la figura en el select — regenera sliders y redibuja */
export function onLabFigureChange() {
  const figKey = document.getElementById('lab-figura').value;
  const fig    = figurePresets[figKey];

  document.getElementById('lab-formulas-txt').innerHTML = fig.formulas;

  const container = document.getElementById('sliders-container');
  container.innerHTML = '';

  fig.variables.forEach(v => {
    const div = document.createElement('div');
    div.className = 'space-y-1';
    div.innerHTML = `
      <div class="flex justify-between text-xs font-bold text-slate-600">
        <span>${v.label}</span>
        <span id="val-${v.id}" class="text-teal-600 font-fun text-sm">${v.val} cm</span>
      </div>
      <input type="range" id="slide-${v.id}" min="${v.min}" max="${v.max}" value="${v.val}"
        oninput="onLabSliderInput('${v.id}')"
        class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-500">
    `;
    container.appendChild(div);
  });

  drawAndCalculate();
}

/** Se ejecuta en cada movimiento de slider */
export function onLabSliderInput(varId) {
  const val = document.getElementById(`slide-${varId}`).value;
  document.getElementById(`val-${varId}`).innerText = `${val} cm`;
  drawAndCalculate();
}

/** Dibuja la figura en el SVG y actualiza los cálculos de perímetro y área */
export function drawAndCalculate() {
  const figKey = document.getElementById('lab-figura').value;
  const svg    = document.getElementById('lab-svg');
  svg.innerHTML = '';

  let perimProceso = '', perimResultado = 0;
  let areaProceso  = '', areaResultado  = 0;

  if (figKey === 'cuadrado') {
    const lado   = parseInt(document.getElementById('slide-lado').value);
    const size   = lado * 10;
    const offset = (200 - size) / 2;

    const rect = _svgEl('rect');
    rect.setAttribute('x', offset);
    rect.setAttribute('y', offset);
    rect.setAttribute('width', size);
    rect.setAttribute('height', size);
    rect.setAttribute('class', 'fill-teal-500/20 stroke-teal-400 stroke-2');
    svg.appendChild(rect);

    addSvgText(svg, offset + size / 2, offset - 8, `${lado} cm`);
    addSvgText(svg, offset + size + 10, offset + size / 2, `${lado} cm`, 'start');

    perimProceso   = `${lado} + ${lado} + ${lado} + ${lado}`;
    perimResultado = lado * 4;
    areaProceso    = `${lado} × ${lado}`;
    areaResultado  = lado * lado;

  } else if (figKey === 'rectangulo') {
    const b = parseInt(document.getElementById('slide-base').value);
    const h = parseInt(document.getElementById('slide-altura').value);
    const w = b * 8, ht = h * 8;
    const ox = (200 - w) / 2, oy = (200 - ht) / 2;

    const rect = _svgEl('rect');
    rect.setAttribute('x', ox); rect.setAttribute('y', oy);
    rect.setAttribute('width', w); rect.setAttribute('height', ht);
    rect.setAttribute('class', 'fill-blue-500/20 stroke-blue-400 stroke-2');
    svg.appendChild(rect);

    addSvgText(svg, ox + w / 2, oy - 8,       `${b} cm (Base)`);
    addSvgText(svg, ox + w + 10, oy + ht / 2, `${h} cm (Altura)`, 'start');

    perimProceso   = `${b} + ${b} + ${h} + ${h}`;
    perimResultado = (b * 2) + (h * 2);
    areaProceso    = `${b} × ${h}`;
    areaResultado  = b * h;

  } else if (figKey === 'triangulo') {
    const b  = parseInt(document.getElementById('slide-base').value);
    const h  = parseInt(document.getElementById('slide-altura').value);
    const lA = parseInt(document.getElementById('slide-ladoA').value);
    const lB = parseInt(document.getElementById('slide-ladoB').value);

    const w  = b * 8, ht = h * 8;
    const ox = (200 - w) / 2;
    const oy = (200 - ht) / 2 + ht;
    const px = ox + (w * 0.7);

    const poly = _svgEl('polygon');
    poly.setAttribute('points', `${ox},${oy} ${ox + w},${oy} ${px},${oy - ht}`);
    poly.setAttribute('class', 'fill-indigo-500/20 stroke-indigo-400 stroke-2');
    svg.appendChild(poly);

    _svgLine(svg, px, oy, px, oy - ht, 'stroke-rose-500 stroke-2', '4,4');
    _svgRightAngle(svg, px, oy, 6);

    addSvgText(svg, ox + w / 2, oy + 16, `${b} cm (Base)`);
    addSvgText(svg, px + 18, oy - ht / 2, `${h} cm`, 'start');
    addSvgText(svg, ox + w * 0.3, oy - ht / 2, `${lA} cm`);
    addSvgText(svg, ox + w * 0.85, oy - ht / 2, `${lB} cm`);

    perimProceso   = `${b} + ${lA} + ${lB}`;
    perimResultado = b + lA + lB;
    areaProceso    = `(${b} × ${h}) ÷ 2`;
    areaResultado  = (b * h) / 2;

  } else if (figKey === 'paralelogramo') {
    const b = parseInt(document.getElementById('slide-base').value);
    const h = parseInt(document.getElementById('slide-altura').value);
    const l = parseInt(document.getElementById('slide-ladoInclinado').value);

    const w = b * 8, ht = h * 8, inc = l * 4;
    const ox = (200 - w - inc) / 2, oy = (200 - ht) / 2;

    const poly = _svgEl('polygon');
    poly.setAttribute('points',
      `${ox + inc},${oy} ${ox + w + inc},${oy} ${ox + w},${oy + ht} ${ox},${oy + ht}`);
    poly.setAttribute('class', 'fill-amber-500/20 stroke-amber-400 stroke-2');
    svg.appendChild(poly);

    const hx = ox + (inc + w) / 2;
    _svgLine(svg, hx, oy, hx, oy + ht, 'stroke-rose-500 stroke-2', '4,4');
    _svgRightAngle(svg, hx, oy + ht, 6);

    addSvgText(svg, ox + w / 2 + inc / 2, oy + ht + 16, `${b} cm (Base)`);
    addSvgText(svg, hx + 22, oy + ht / 2, `${h} cm`, 'start');
    addSvgText(svg, ox + inc / 2, oy + ht / 2, `${l} cm`);

    perimProceso   = `${b} + ${b} + ${l} + ${l}`;
    perimResultado = (b * 2) + (l * 2);
    areaProceso    = `${b} × ${h}`;
    areaResultado  = b * h;

  } else if (figKey === 'trapecio') {
    const B = parseInt(document.getElementById('slide-baseMayor').value);
    const b = parseInt(document.getElementById('slide-baseMenor').value);
    const h = parseInt(document.getElementById('slide-altura').value);
    const l = parseInt(document.getElementById('slide-ladoInclinado').value);

    const wB = B * 7, wb = b * 7, ht = h * 7;
    const ox = (200 - wB) / 2, oy = (200 - ht) / 2;
    const shift = (wB - wb) / 2;

    const poly = _svgEl('polygon');
    poly.setAttribute('points',
      `${ox + shift},${oy} ${ox + shift + wb},${oy} ${ox + wB},${oy + ht} ${ox},${oy + ht}`);
    poly.setAttribute('class', 'fill-purple-500/20 stroke-purple-400 stroke-2');
    svg.appendChild(poly);

    const hx = ox + shift + wb / 2;
    _svgLine(svg, hx, oy, hx, oy + ht, 'stroke-rose-500 stroke-2', '4,4');
    _svgRightAngle(svg, hx, oy + ht, 6);

    addSvgText(svg, ox + wB / 2, oy + ht + 16, `${B} cm (Base Mayor)`);
    addSvgText(svg, ox + shift + wb / 2, oy - 8, `${b} cm (Base Menor)`);
    addSvgText(svg, hx + 22, oy + ht / 2, `${h} cm`, 'start');
    addSvgText(svg, ox + shift / 2, oy + ht / 2, `${l} cm`);

    perimProceso   = `${B} + ${b} + ${l} + ${l}`;
    perimResultado = B + b + (l * 2);
    areaProceso    = `((${B} + ${b}) × ${h}) ÷ 2`;
    areaResultado  = ((B + b) * h) / 2;
  }

  document.getElementById('lab-calc-p-proceso').innerHTML =
    `Fórmula: Sumar Lados<br>➔ <span class="font-sans text-slate-600">${perimProceso}</span>`;
  document.getElementById('lab-calc-p-resultado').innerText = `= ${perimResultado} cm`;
  document.getElementById('lab-calc-a-proceso').innerHTML =
    `Aplicando Fórmula<br>➔ <span class="font-sans text-slate-600">${areaProceso}</span>`;
  document.getElementById('lab-calc-a-resultado').innerText = `= ${areaResultado} cm²`;
}

// ── Helpers SVG privados ───────────────────────────────────────────────────

function _svgEl(tag) {
  return document.createElementNS('http://www.w3.org/2000/svg', tag);
}

function _svgLine(svg, x1, y1, x2, y2, cls, dash = '') {
  const l = _svgEl('line');
  l.setAttribute('x1', x1); l.setAttribute('y1', y1);
  l.setAttribute('x2', x2); l.setAttribute('y2', y2);
  l.setAttribute('class', cls);
  if (dash) l.setAttribute('stroke-dasharray', dash);
  svg.appendChild(l);
}

function _svgRightAngle(svg, x, y, s) {
  const p = _svgEl('path');
  p.setAttribute('d', `M ${x} ${y - s} L ${x - s} ${y - s} L ${x - s} ${y}`);
  p.setAttribute('class', 'stroke-rose-500 stroke-[1.5] fill-none');
  svg.appendChild(p);
}

/** Inserta un texto en el SVG */
export function addSvgText(svg, x, y, text, anchor = 'middle') {
  const t = _svgEl('text');
  t.setAttribute('x', x);
  t.setAttribute('y', y);
  t.setAttribute('text-anchor', anchor);
  t.setAttribute('class', 'fill-slate-300 font-fun');
  t.style.fontSize = '10px';
  t.textContent = text;
  svg.appendChild(t);
}
