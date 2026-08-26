// ============================================================================
// RIOCIENCIAS — II SEMESTRE (1ª EVALUACIÓN)
// SÚPER LABORATORIOS INTERACTIVOS DE CIENCIAS
// Escuela Riojalandia · 5º Grado · Maestra Florisel Olmazo López
// ============================================================================
import { playSound, playTickWithThrottle } from '../../../../shared/modules/audio.js';

// ── ESTADO GENERAL DE LOS LABS DE CIENCIAS ──────────────────────────────────
let fotosintesisCanvas = null;
let fotosintesisCtx = null;
let animFrameId = null;

let fotosintesisState = {
  sunlight: 3,
  water: 3,
  co2: 3,
  phase: 'luminosa', // 'luminosa' | 'oscura'
  type: 'oxigenica', // 'oxigenica' | 'anoxigenica'
  zoomPart: 'cloroplasto' // 'cloroplasto' | 'membrana' | 'vacuola'
};

let particles = [];

class GasParticle {
  constructor(x, y, type, targetX, targetY) {
    this.x = x;
    this.y = y;
    this.type = type; // 'O2' | 'Glucosa' | 'H2S' | 'H2O' | 'CO2'
    this.targetX = targetX;
    this.targetY = targetY;

    if (type === 'Glucosa') {
      this.vy = 1.0 + Math.random() * 0.5;
      this.vx = (Math.random() - 0.5) * 1.2;
      this.radius = 8;
    } else if (type === 'O2' || type === 'H2S') {
      this.vy = -2.0 - Math.random() * 0.8;
      this.vx = (Math.random() - 0.5) * 2.0;
      this.radius = 6;
    } else if (type === 'H2O') {
      // Viaja de raíces hacia la hoja
      this.vy = -2.2;
      this.vx = (Math.random() - 0.5) * 1.0;
      this.radius = 4;
    } else if (type === 'CO2') {
      // Viaja del aire lateral hacia la hoja
      this.vy = (Math.random() - 0.5) * 0.8;
      this.vx = 2.2;
      this.radius = 5;
    }
    this.alpha = 1.0;
    this.absorbed = false;
  }

  update(w, h, leafX, leafY, leafRx, leafRy) {
    this.x += this.vx;
    this.y += this.vy;

    // Si es reactivo (H2O o CO2), verificar si entró en la superficie del cloroplasto/hoja
    if (this.type === 'H2O' || this.type === 'CO2') {
      const dx = (this.x - leafX) / leafRx;
      const dy = (this.y - leafY) / leafRy;
      if (dx * dx + dy * dy <= 1.0) {
        this.absorbed = true; // Consumido por el cloroplasto
      }
    } else {
      this.alpha -= 0.009;
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.alpha);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

    if (this.type === 'O2') {
      ctx.fillStyle = '#38bdf8'; // Celeste brillante (Oxígeno)
      ctx.shadowColor = '#0284c7';
      ctx.shadowBlur = 8;
    } else if (this.type === 'Glucosa') {
      ctx.fillStyle = '#fbbf24'; // Dorado brillante (Glucosa)
      ctx.shadowColor = '#d97706';
      ctx.shadowBlur = 10;
    } else if (this.type === 'H2S') {
      ctx.fillStyle = '#c084fc'; // Púrpura (Sulfuro)
      ctx.shadowColor = '#9333ea';
      ctx.shadowBlur = 8;
    } else if (this.type === 'H2O') {
      ctx.fillStyle = '#3b82f6'; // Azul agua
      ctx.shadowColor = '#1d4ed8';
      ctx.shadowBlur = 4;
    } else if (this.type === 'CO2') {
      ctx.fillStyle = '#94a3b8'; // Gris CO2
      ctx.shadowColor = '#475569';
      ctx.shadowBlur = 4;
    }
    ctx.fill();

    ctx.fillStyle = (this.type === 'CO2' || this.type === 'H2O') ? '#ffffff' : '#ffffff';
    ctx.font = 'bold 8px Fredoka, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.type, this.x, this.y);
    ctx.restore();
  }
}

// ── 1. SIMULADOR DE FOTOSÍNTESIS Y CÉLULA VEGETAL ───────────────────────────
export function initFotosintesisLab() {
  fotosintesisCanvas = document.getElementById('fotosintesis-canvas');
  if (!fotosintesisCanvas) return;
  fotosintesisCtx = fotosintesisCanvas.getContext('2d');

  fotosintesisCanvas.width = 540;
  fotosintesisCanvas.height = 260;

  particles = [];
  if (animFrameId) cancelAnimationFrame(animFrameId);

  renderFotosintesisLoop();
  updateFotosintesisUI();
  window.addEventListener('resize', updateFotosintesisUI);
}

function renderFotosintesisLoop() {
  if (!fotosintesisCanvas || !fotosintesisCtx) return;
  const ctx = fotosintesisCtx;
  const w = fotosintesisCanvas.width;
  const h = fotosintesisCanvas.height;

  const leafX = w / 2;
  const leafY = h / 2 + 15;
  const leafRx = 135;
  const leafRy = 70;

  ctx.clearRect(0, 0, w, h);

  // 1. Fondo animado según la Fase
  if (fotosintesisState.phase === 'luminosa') {
    const skyGradient = ctx.createLinearGradient(0, 0, 0, h);
    skyGradient.addColorStop(0, '#fef08a');
    skyGradient.addColorStop(1, '#fef3c7');
    ctx.fillStyle = skyGradient;
  } else {
    const nightGradient = ctx.createLinearGradient(0, 0, 0, h);
    nightGradient.addColorStop(0, '#0f172a');
    nightGradient.addColorStop(1, '#1e1b4b');
    ctx.fillStyle = nightGradient;
  }
  ctx.fillRect(0, 0, w, h);

  // 2. Sol (Fase Luminosa) o Luna (Fase Oscura)
  if (fotosintesisState.phase === 'luminosa') {
    const sunRadius = 12 + fotosintesisState.sunlight * 6; // Radio de 18px a 42px
    const sunGlow = ctx.createRadialGradient(55, 45, 5, 55, 45, sunRadius + 25);
    sunGlow.addColorStop(0, '#fde047');
    sunGlow.addColorStop(1, 'rgba(250, 204, 21, 0)');
    ctx.fillStyle = sunGlow;
    ctx.beginPath();
    ctx.arc(55, 45, sunRadius + 25, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#eab308';
    ctx.beginPath();
    ctx.arc(55, 45, sunRadius, 0, Math.PI * 2);
    ctx.fill();

    // Rayos de Sol cayendo sobre la hoja según 'sunlight'
    ctx.save();
    ctx.strokeStyle = 'rgba(253, 224, 71, 0.45)';
    ctx.lineWidth = fotosintesisState.sunlight;
    for (let r = 0; r < fotosintesisState.sunlight + 2; r++) {
      const angle = (Math.PI / 6) + (r * 0.14);
      ctx.beginPath();
      ctx.moveTo(55, 45);
      ctx.lineTo(55 + Math.cos(angle) * 190, 45 + Math.sin(angle) * 190);
      ctx.stroke();
    }
    ctx.restore();
  } else {
    // Luna en Fase Oscura
    ctx.fillStyle = '#e2e8f0';
    ctx.beginPath();
    ctx.arc(55, 45, 20, 0, Math.PI * 2);
    ctx.fill();
  }

  // 3. Ley de Liebig / Factor Limitante: La producción depende estrictamente del reactivo más escaso
  const lightFactor = fotosintesisState.phase === 'luminosa' ? fotosintesisState.sunlight : 5; // En fase oscura usa energía acumulada
  const limitingFactor = Math.min(lightFactor, fotosintesisState.water, fotosintesisState.co2);
  const yieldPercentage = Math.round((limitingFactor / 5) * 100);

  // 4. Cloroplasto / Hoja Central (Brillo proporcional al rendimiento)
  ctx.save();
  const isOxi = fotosintesisState.type === 'oxigenica';
  ctx.fillStyle = isOxi ? '#16a34a' : '#7e22ce';
  ctx.beginPath();
  ctx.ellipse(leafX, leafY, leafRx, leafRy, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = isOxi ? '#15803d' : '#581c87';
  ctx.lineWidth = 4;
  ctx.stroke();

  // Brillo de clorofila interna según el factor limitante
  const glowAlpha = 0.1 + (limitingFactor / 5) * 0.4;
  ctx.fillStyle = isOxi ? `rgba(34, 197, 94, ${glowAlpha})` : `rgba(168, 85, 247, ${glowAlpha})`;
  ctx.beginPath();
  ctx.ellipse(leafX, leafY, leafRx - 20, leafRy - 20, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // 5. Inyección de Gotas de Agua (H2O) proporcional al slider 'water'
  // Si water = 1 (raro), si water = 5 (abundante)
  if (Math.random() < fotosintesisState.water * 0.15) {
    particles.push(new GasParticle(leafX + (Math.random() - 0.5) * 180, h - 5, 'H2O', leafX, leafY));
  }

  // 6. Inyección de CO2 proporcional al slider 'co2'
  if (Math.random() < fotosintesisState.co2 * 0.15) {
    particles.push(new GasParticle(5, leafY + (Math.random() - 0.5) * 70, 'CO2', leafX, leafY));
  }

  // 7. Salida de Producto (O2 / H2S / Glucosa) estrictamente según el FACTOR LIMITANTE
  const outputSpawnProbability = (limitingFactor / 5) * 0.45;
  if (Math.random() < outputSpawnProbability) {
    if (fotosintesisState.phase === 'luminosa') {
      const pType = isOxi ? 'O2' : 'H2S';
      particles.push(new GasParticle(leafX + (Math.random() - 0.5) * 140, leafY, pType, 0, 0));
    } else {
      particles.push(new GasParticle(leafX + (Math.random() - 0.5) * 120, leafY - 20, 'Glucosa', 0, 0));
    }
  }

  // 8. Actualizar y renderizar partículas
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.update(w, h, leafX, leafY, leafRx, leafRy);
    p.draw(ctx);

    // Si la partícula de H2O o CO2 fue absorbida o expiró, se elimina
    if (p.absorbed || p.alpha <= 0 || p.y < -30 || p.y > h + 30 || p.x > w + 30) {
      particles.splice(i, 1);
    }
  }

  // 9. Marcadores y advertencias visuales del Factor Limitante
  ctx.fillStyle = fotosintesisState.phase === 'luminosa' ? '#0f172a' : '#f8fafc';
  ctx.font = 'bold 11px Fredoka, sans-serif';
  ctx.fillText(
    `Fase: ${fotosintesisState.phase.toUpperCase()} | Modo: ${isOxi ? 'Oxigénica (Plantas)' : 'Anoxigénica (Bacterias)'}`,
    120,
    20
  );

  // Status del Factor Limitante en pantalla
  if (limitingFactor <= 2) {
    ctx.fillStyle = '#ef4444'; // Rojo advertencia
    let bottleneck = 'Luz Solar';
    if (fotosintesisState.water <= fotosintesisState.sunlight && fotosintesisState.water <= fotosintesisState.co2) bottleneck = 'Agua (H₂O)';
    else if (fotosintesisState.co2 <= fotosintesisState.sunlight && fotosintesisState.co2 <= fotosintesisState.water) bottleneck = 'Dióxido de Carbono (CO₂)';

    ctx.fillText(`⚠️ Rendimiento: ${yieldPercentage}% (Limitado por ${bottleneck})`, 120, 36);
  } else {
    ctx.fillStyle = fotosintesisState.phase === 'luminosa' ? '#15803d' : '#a7f3d0';
    ctx.fillText(`✨ Rendimiento Fotosintético: ${yieldPercentage}% (Producción Óptima)`, 120, 36);
  }

  animFrameId = requestAnimationFrame(renderFotosintesisLoop);
}

export function setFotosintesisSlider(type, value) {
  fotosintesisState[type] = parseInt(value, 10);
  playTickWithThrottle();
  updateFotosintesisUI();
}

export function setFotosintesisPhase(phase) {
  fotosintesisState.phase = phase;
  playSound('tab_click');
  updateFotosintesisUI();
}

export function setFotosintesisType(type) {
  fotosintesisState.type = type;
  playSound('tab_click');
  updateFotosintesisUI();
}

export function selectCellPart(part) {
  fotosintesisState.zoomPart = part;
  playSound('tab_click');
  updateFotosintesisUI();
}

function updateFotosintesisUI() {
  const btnLum = document.getElementById('btn-fase-luminosa');
  const btnOsc = document.getElementById('btn-fase-oscura');
  const btnOxi = document.getElementById('btn-foto-oxi');
  const btnAnoxi = document.getElementById('btn-foto-anoxi');

  if (btnLum && btnOsc) {
    if (fotosintesisState.phase === 'luminosa') {
      btnLum.className = "px-4 py-2 rounded-xl text-xs font-bold font-fun bg-amber-500 text-white shadow-sm flex-1";
      btnOsc.className = "px-4 py-2 rounded-xl text-xs font-bold font-fun bg-slate-100 text-slate-600 hover:bg-slate-200 flex-1";
    } else {
      btnOsc.className = "px-4 py-2 rounded-xl text-xs font-bold font-fun bg-indigo-600 text-white shadow-sm flex-1";
      btnLum.className = "px-4 py-2 rounded-xl text-xs font-bold font-fun bg-slate-100 text-slate-600 hover:bg-slate-200 flex-1";
    }
  }

  if (btnOxi && btnAnoxi) {
    if (fotosintesisState.type === 'oxigenica') {
      btnOxi.className = "px-3 py-1.5 rounded-xl text-xs font-bold font-fun bg-emerald-600 text-white shadow-sm flex-1";
      btnAnoxi.className = "px-3 py-1.5 rounded-xl text-xs font-bold font-fun bg-slate-100 text-slate-600 hover:bg-slate-200 flex-1";
    } else {
      btnAnoxi.className = "px-3 py-1.5 rounded-xl text-xs font-bold font-fun bg-purple-600 text-white shadow-sm flex-1";
      btnOxi.className = "px-3 py-1.5 rounded-xl text-xs font-bold font-fun bg-slate-100 text-slate-600 hover:bg-slate-200 flex-1";
    }
  }

  // 1. Banner Pedagógico de la Fase Activa
  const phaseBanner = document.getElementById('foto-phase-banner');
  const phaseIcon = document.getElementById('foto-phase-icon');
  const phaseTitle = document.getElementById('foto-phase-title');
  const phaseText = document.getElementById('foto-phase-text');

  if (phaseBanner && phaseIcon && phaseTitle && phaseText) {
    if (fotosintesisState.phase === 'luminosa') {
      phaseBanner.className = "p-4 rounded-2xl border-2 transition-all duration-300 bg-amber-50 border-amber-200 text-amber-950 shadow-sm";
      phaseIcon.textContent = "☀️";
      phaseTitle.textContent = "Fase Luminosa (Dependiente de la Luz Solar)";
      phaseText.innerHTML = "La clorofila capta los fotones de luz solar en los tilacoides. Ocurre la <strong>Fotólisis del Agua (H₂O)</strong> rompiendo la molécula para liberar <strong>Oxígeno (O₂)</strong> a la atmósfera y recargar energía química (ATP + NADPH).";
    } else {
      phaseBanner.className = "p-4 rounded-2xl border-2 transition-all duration-300 bg-indigo-950 border-indigo-700 text-indigo-100 shadow-sm";
      phaseIcon.textContent = "🌙";
      phaseTitle.textContent = "Fase Oscura (Ciclo de Calvin / Independiente de la Luz)";
      phaseText.innerHTML = "No requiere sol directo en este instante. Ocurre en el <strong>Estroma del Cloroplasto</strong>: la célula vegetal aprovecha la energía reservada previamente para fijar el <strong>Dióxido de Carbono (CO₂)</strong> y fabricar <strong>Glucosa (C₆H₁₂O₆)</strong>.";
    }
  }

  // 2. Medidores en Tiempo Real
  const lightFactor = fotosintesisState.phase === 'luminosa' ? fotosintesisState.sunlight : 5;
  const limitingFactor = Math.min(lightFactor, fotosintesisState.water, fotosintesisState.co2);
  const yieldPct = Math.round((limitingFactor / 5) * 100);

  const glucoseBar = document.getElementById('meter-glucose-bar');
  const glucoseVal = document.getElementById('meter-glucose-val');
  const o2Bar = document.getElementById('meter-o2-bar');
  const o2Val = document.getElementById('meter-o2-val');

  // En Fase Oscura se prioriza la síntesis de glucosa
  const glucoseRate = fotosintesisState.phase === 'oscura' ? yieldPct : Math.round(yieldPct * 0.7);
  // El O2 solo se expulsa en la Fase Luminosa Oxigénica
  const o2Rate = (fotosintesisState.phase === 'luminosa' && fotosintesisState.type === 'oxigenica') ? yieldPct : 0;

  if (glucoseBar && glucoseVal) {
    glucoseBar.style.width = `${glucoseRate}%`;
    glucoseVal.textContent = `${glucoseRate}%`;
  }
  if (o2Bar && o2Val) {
    o2Bar.style.width = `${o2Rate}%`;
    o2Val.textContent = `${o2Rate}%`;
  }

  // 3. Explorador Anatómico Célula Vegetal (Resalto de SVG y Botones)
  const partTitle = document.getElementById('cell-part-title');
  const partDesc = document.getElementById('cell-part-desc');
  const partIcon = document.getElementById('cell-part-icon');

  const part = fotosintesisState.zoomPart || 'cloroplasto';
  const allParts = ['cloroplasto', 'membrana', 'vacuola', 'pared', 'nucleo', 'nucleolo', 'mitocondria', 'reticulo', 'golgi', 'lisosoma', 'ribosoma'];

  // Botones directos
  allParts.forEach(p => {
    const btn = document.getElementById(`cell-btn-${p}`);
    if (btn) {
      if (p === part) {
        btn.className = "px-2.5 py-1.5 rounded-xl text-xs font-bold bg-emerald-600 text-white font-fun transition-all shadow-sm ring-2 ring-emerald-400";
      } else {
        btn.className = "px-2.5 py-1.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 font-fun transition-all";
      }
    }

    // Elementos del SVG
    const svgEl = document.getElementById(`cell-svg-${p}`);
    if (svgEl) {
      if (p === part) {
        svgEl.style.filter = "url(#glow-gold)";
        svgEl.style.opacity = "1";
      } else {
        svgEl.style.filter = "none";
        svgEl.style.opacity = "0.9";
      }
    }

    // Líneas y grupos de etiquetas conectoras del SVG
    const lineEl = document.getElementById(`line-${p}`);
    const labelBgEl = document.getElementById(`label-bg-${p}`);
    const labelTextEl = document.getElementById(`label-text-${p}`);
    const labelGroupEl = document.getElementById(`label-group-${p}`);

    const isMobile = window.innerWidth < 640;

    if (labelGroupEl) {
      if (isMobile) {
        // En móvil: solo mostrar el grupo de etiqueta del organelo seleccionado
        labelGroupEl.style.display = (p === part) ? 'block' : 'none';
      } else {
        labelGroupEl.style.display = 'block';
      }
    }

    if (lineEl) {
      if (p === part) {
        lineEl.setAttribute('stroke', '#ca8a04'); // Dorado brillante
        lineEl.setAttribute('stroke-width', '4');
      } else {
        lineEl.setAttribute('stroke', '#64748b');
        lineEl.setAttribute('stroke-width', '1.5');
      }
    }

    if (labelBgEl) {
      if (p === part) {
        labelBgEl.setAttribute('fill', '#fef08a'); // Fondo amarillo brillante para el nombre
        labelBgEl.setAttribute('stroke', '#b45309');
        labelBgEl.setAttribute('stroke-width', '3');
      } else {
        labelBgEl.setAttribute('fill', '#ffffff');
        labelBgEl.setAttribute('stroke', '#94a3b8');
        labelBgEl.setAttribute('stroke-width', '1.5');
      }
    }

    if (labelTextEl) {
      if (p === part) {
        labelTextEl.setAttribute('font-size', isMobile ? '20' : '18');
        labelTextEl.setAttribute('font-weight', '900');
        labelTextEl.setAttribute('fill', '#78350f'); // Marrón oscuro de alto contraste
      } else {
        labelTextEl.setAttribute('font-size', '13.5');
        labelTextEl.setAttribute('font-weight', 'bold');
        labelTextEl.setAttribute('fill', '#0f172a');
      }
    }
  });

  if (partTitle && partDesc && partIcon) {
    if (part === 'cloroplasto') {
      partIcon.textContent = "🟢";
      partTitle.textContent = "Cloroplastos (Fotosíntesis y Clorofila)";
      partDesc.innerHTML = "Organelos verdes ricos en clorofila. Absorben la luz solar para convertir agua (H₂O) y dióxido de carbono (CO₂) en glucosa y oxígeno.<br><strong class='text-amber-700 font-fun'>💡 Truco de Examen:</strong> Son exclusivos de la célula vegetal (los animales no tienen cloroplastos).";
    } else if (part === 'membrana') {
      partIcon.textContent = "🛡️";
      partTitle.textContent = "Membrana Celular (Permeabilidad Selectiva)";
      partDesc.innerHTML = "Fina cubierta interna semipermeable que envuelve el citoplasma. Controla la entrada de agua y nutrientes y la salida de deshechos.<br><strong class='text-amber-700 font-fun'>💡 Truco de Examen:</strong> Regula el paso selectivo de sustancias.";
    } else if (part === 'vacuola') {
      partIcon.textContent = "💧";
      partTitle.textContent = "Vacuola Central (Reserva de Agua y Turgencia)";
      partDesc.innerHTML = "Gran saco membranoso central que almacena reservas de agua y minerales. Genera presión hidrostática para mantener firmes las hojas y el tallo.<br><strong class='text-amber-700 font-fun'>💡 Truco de Examen:</strong> La turgencia de la vacuola evita que la planta se marchite.";
    } else if (part === 'pared') {
      partIcon.textContent = "🧱";
      partTitle.textContent = "Pared Celular (Soporte Rígido de Celulosa)";
      partDesc.innerHTML = "Capa exterior gruesa y resistente compuesta de celulosa. Le otorga rigidez, protección física y forma poligonal a la célula vegetal.<br><strong class='text-amber-700 font-fun'>💡 Truco de Examen:</strong> Otorga resistencia estructural mecánica a la planta.";
    } else if (part === 'nucleo') {
      partIcon.textContent = "🟣";
      partTitle.textContent = "Núcleo Celular (Centro de Control)";
      partDesc.innerHTML = "Estructura membranosa esférica que alberga el material genético (ADN) de la planta. Dirige la división celular y la síntesis de proteínas.<br><strong class='text-amber-700 font-fun'>💡 Truco de Examen:</strong> Contiene las instrucciones genéticas de la célula.";
    } else if (part === 'nucleolo') {
      partIcon.textContent = "🟡";
      partTitle.textContent = "Nucléolo (Fábrica de Ribosomas)";
      partDesc.innerHTML = "Región densa ubicada en el interior del núcleo celular. Se encarga de sintetizar el ARN ribosómico y ensamblar los ribosomas de la célula vegetal.<br><strong class='text-amber-700 font-fun'>💡 Truco de Examen:</strong> Es el taller especializado dentro del núcleo donde nacen los ribosomas.";
    } else if (part === 'mitocondria') {
      partIcon.textContent = "🔴";
      partTitle.textContent = "Mitocondrias (Respiración Celular y Energía ATP)";
      partDesc.innerHTML = "Organelos con forma de bastón rodeados de pliegues llamados crestas. Queman la glucosa con oxígeno mediante la respiración celular para liberar energía ATP.<br><strong class='text-amber-700 font-fun'>💡 Truco de Examen:</strong> Son la central energética de la célula.";
    } else if (part === 'reticulo') {
      partIcon.textContent = "🌀";
      partTitle.textContent = "Retículo Endoplasmático (Red de Transporte)";
      partDesc.innerHTML = "Sistema de canales y sacos aplanados conectados al núcleo. Transporta proteínas y lípidos a través del citoplasma celular.<br><strong class='text-amber-700 font-fun'>💡 Truco de Examen:</strong> Funciona como la autopista de transporte interno celular.";
    } else if (part === 'golgi') {
      partIcon.textContent = "🟠";
      partTitle.textContent = "Complejo / Aparato de Golgi (Empaque y Secreción)";
      partDesc.innerHTML = "Conjunto de vesículas aplanadas apiladas. Modifica, empaqueta y distribuye moléculas sintetizadas hacia el exterior o interior celular.<br><strong class='text-amber-700 font-fun'>💡 Truco de Examen:</strong> Es la oficina de correo y empaque celular.";
    } else if (part === 'lisosoma') {
      partIcon.textContent = "🔮";
      partTitle.textContent = "Lisosomas (Digestión Celular)";
      partDesc.innerHTML = "Vesículas esféricas ricas en enzimas digestivas. Descomponen organelos viejos o sustancias extrañas introducidas a la célula.<br><strong class='text-amber-700 font-fun'>💡 Truco de Examen:</strong> Se encargan del reciclaje y digestión interna.";
    } else if (part === 'ribosoma') {
      partIcon.textContent = "🟡";
      partTitle.textContent = "Ribosomas (Fabrica de Proteínas)";
      partDesc.innerHTML = "Pequeños gránulos libres en el citoplasma o adheridos al retículo. Ensamblan los aminoácidos para sintetizar proteínas celulares.<br><strong class='text-amber-700 font-fun'>💡 Truco de Examen:</strong> Sintetizan las proteínas vitales de la planta.";
    }

    const activeNameEl = document.getElementById('cell-active-name');
    if (activeNameEl) {
      activeNameEl.textContent = `${partIcon.textContent} ${partTitle.textContent}`;
    }
  }
}

export function stopFotosintesisLab() {
  if (animFrameId) {
    cancelAnimationFrame(animFrameId);
    animFrameId = null;
  }
}

// ── 2. CONSTRUCTOR DE CADENAS TRÓFICAS ──────────────────────────────────────
const cadenasData = [
  {
    id: 'cadena-a',
    title: 'Cadena A (Examen): Ecosistema de Huerto y Bosque',
    steps: [
      { name: 'Zanahoria', role: 'Autótrofo (Productor)', icon: '🥕', category: 'productor' },
      { name: 'Conejo', role: 'Consumidor Primario (Herbívoro)', icon: '🐇', category: 'primario' },
      { name: 'Zorro', role: 'Consumidor Secundario (Carnívoro)', icon: '🦊', category: 'secundario' },
      { name: 'León', role: 'Consumidor Terciario (Carnívoro)', icon: '🦁', category: 'terciario' }
    ]
  },
  {
    id: 'cadena-b',
    title: 'Cadena B (Examen): Ecosistema de Pradera y Selva',
    steps: [
      { name: 'Pasto', role: 'Autótrofo (Productor)', icon: '🌱', category: 'productor' },
      { name: 'Oruga', role: 'Consumidor Primario (Herbívoro)', icon: '🐛', category: 'primario' },
      { name: 'Pájaro', role: 'Consumidor Secundario (Insectívoro)', icon: '🐦', category: 'secundario' },
      { name: 'Zorro', role: 'Consumidor Terciario (Carnívoro)', icon: '🦊', category: 'terciario' },
      { name: 'Hongos', role: 'Descomponedores', icon: '🍄', category: 'descomponedor' }
    ]
  }
];

let activeChainIdx = 0;
let userChainOrder = [];
let shuffledSteps = [];

function shuffleChainSteps(steps) {
  const arr = [...steps];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // Si por azar el shuffle produce la secuencia exacta ordenada, invertimos para asegurar desorden
  if (arr.every((el, idx) => el === steps[idx]) && arr.length > 1) {
    arr.reverse();
  }
  return arr;
}

export function initCadenasLab() {
  activeChainIdx = 0;
  userChainOrder = [];
  shuffledSteps = shuffleChainSteps(cadenasData[0].steps);
  renderCadenasUI();
}

export function selectChainPreset(idx) {
  activeChainIdx = idx;
  userChainOrder = [];
  shuffledSteps = shuffleChainSteps(cadenasData[activeChainIdx].steps);
  playSound('tab_click');
  renderCadenasUI();
}

export function addChainOrganism(name) {
  const currentChain = cadenasData[activeChainIdx];
  const org = currentChain.steps.find(s => s.name === name);

  if (!org || userChainOrder.includes(org)) return;

  userChainOrder.push(org);
  playSound('tab_click');
  renderCadenasUI();
}

export function resetChainOrder() {
  userChainOrder = [];
  shuffledSteps = shuffleChainSteps(cadenasData[activeChainIdx].steps);
  playSound('tab_click');
  renderCadenasUI();
}

function renderCadenasUI() {
  const container = document.getElementById('cadena-builder-container');
  const availableContainer = document.getElementById('cadena-available-container');
  const feedbackEl = document.getElementById('cadena-feedback');

  if (!container || !availableContainer) return;

  const currentChain = cadenasData[activeChainIdx];

  // Organismos colocados en el diagrama
  container.innerHTML = userChainOrder.map((item, idx) => `
    <div class="flex flex-col sm:flex-row items-center gap-2.5 animate-fadeIn w-full sm:w-auto">
      <div class="bg-amber-50/90 border-2 border-amber-300 p-3 sm:p-3.5 rounded-2xl text-center w-full sm:min-w-[110px] shadow-sm">
        <span class="text-3xl block mb-1">${item.icon}</span>
        <span class="text-xs font-bold text-slate-800 font-fun block">${item.name}</span>
        <span class="text-[10px] text-amber-800 font-bold block mt-0.5">${item.role}</span>
      </div>
      ${idx < userChainOrder.length - 1 ? `
        <div class="flex items-center justify-center my-0.5 sm:my-0 shrink-0">
          <span class="sm:hidden text-xl font-bold text-amber-600">⬇️</span>
          <span class="hidden sm:inline text-xl font-bold text-amber-600">➔</span>
        </div>
      ` : ''}
    </div>
  `).join('');

  if (userChainOrder.length === 0) {
    container.innerHTML = `<p class="text-xs text-slate-400 font-medium italic">Toca los seres vivos desordenados de abajo en el orden correcto para construir el flujo de energía.</p>`;
  }

  // Organismos disponibles (desordenados de forma aleatoria/Shuffle)
  availableContainer.innerHTML = shuffledSteps.map((item) => {
    const isAdded = userChainOrder.includes(item);
    return `
      <button onclick="window.addChainOrganism('${item.name}')" ${isAdded ? 'disabled' : ''}
              class="p-3 rounded-2xl border-2 transition-all font-fun text-center flex flex-col items-center min-h-[90px]
                     ${isAdded ? 'border-slate-200 bg-slate-100 opacity-40 cursor-not-allowed' : 'border-amber-300 bg-white hover:bg-amber-50 active:scale-95 shadow-sm'}">
        <span class="text-2xl mb-1">${item.icon}</span>
        <span class="text-xs font-bold text-slate-900">${item.name}</span>
      </button>
    `;
  }).join('');

  // Verificación de la cadena completa
  if (feedbackEl) {
    if (userChainOrder.length === currentChain.steps.length) {
      const isCorrect = userChainOrder.every((item, idx) => item === currentChain.steps[idx]);
      if (isCorrect) {
        playSound('correct');
        feedbackEl.className = "mt-4 p-4 rounded-2xl border-2 border-emerald-300 bg-emerald-50 text-emerald-900 text-xs font-fun font-bold block";
        feedbackEl.innerHTML = `🎉 ¡Cadena Trófica Correcta! La energía fluye desde los autótrofos (${currentChain.steps[0].name}) hasta los consumidores superiores y descomponedores.`;
      } else {
        playSound('incorrect');
        feedbackEl.className = "mt-4 p-4 rounded-2xl border-2 border-rose-300 bg-rose-50 text-rose-900 text-xs font-fun font-bold block";
        feedbackEl.innerHTML = `💡 Revisa el orden. Recuerda: 1º Productor (Planta) ➔ 2º Herbívoro ➔ 3º Carnívoro ➔ 4º Descomponedor. Presiona "Reiniciar".`;
      }
    } else {
      feedbackEl.className = "hidden";
    }
  }
}

// ── 3. DETECTIVE DE RELACIONES ECOLÓGICAS ──────────────────────────────────
const relacionesData = [
  {
    icon: '🐸',
    title: 'Rana Roja cazando hormigas y termitas',
    clue: 'La Rana Roja atrapa activamente hormigas y termitas como su alimento principal.',
    type: 'Interespecífica',
    subtype: 'Depredación (+/-)',
    rationale: '¡Correcto! En la depredación, el depredador (rana) caza y devora a la presa (termitas).'
  },
  {
    icon: '🌿',
    title: 'El Matapalo en un árbol del bosque',
    clue: 'Planta epífita que se enreda en el tronco del árbol hospedante y le sustrae agua y minerales.',
    type: 'Interespecífica',
    subtype: 'Parasitismo (+/-)',
    rationale: '¡Exacto! El Matapalo es un parásito vegetal que debilita al árbol hospedero.'
  },
  {
    icon: '🦅',
    title: 'Gavilanes volando en formación de "V"',
    clue: 'Aves de la misma especie que se agrupan en vuelo para protegerse y migrar juntas.',
    type: 'Intraespecífica',
    subtype: 'Asociación Gregaria',
    rationale: '¡Excelente! Es una agrupación temporal de individuos de la misma especie para apoyarse en migración.'
  },
  {
    icon: '🦁',
    title: 'Leones peleando por la jefatura de la manada',
    clue: 'Lucha entre dos machos de la misma especie por el liderazgo del territorio y la manada.',
    type: 'Intraespecífica',
    subtype: 'Competencia Intraespecífica',
    rationale: '¡Brillante! Lucha entre miembros de la misma especie por recursos o estatus.'
  },
  {
    icon: '🐝',
    title: 'Abeja recolectando néctar de una flor',
    clue: 'La abeja obtiene alimento (néctar) y la flor logra su polinización reproductiva.',
    type: 'Interespecífica',
    subtype: 'Mutualismo (+/+)',
    rationale: '¡Muy bien! Ambas especies obtienen un beneficio mutuo directo.'
  },
  {
    icon: '🐄',
    title: 'Garza bueyera acompañando al ganado vacuno',
    clue: 'La garza come los insectos espantados por el ganado al caminar. El ganado no sufre daño ni beneficio.',
    type: 'Interespecífica',
    subtype: 'Comensalismo (+/0)',
    rationale: '¡Perfecto! La garza se beneficia y el ganado vacuno no se ve afectado.'
  }
];

let currentRelacionIdx = 0;

export function initRelacionesLab() {
  currentRelacionIdx = 0;
  renderRelacionesUI();
}

export function answerRelacionType(selectedType) {
  const item = relacionesData[currentRelacionIdx];
  const feedbackEl = document.getElementById('relaciones-feedback');

  if (!feedbackEl) return;

  if (selectedType === item.type) {
    playSound('correct');
    feedbackEl.className = "mt-4 p-4 rounded-2xl border-2 border-emerald-300 bg-emerald-50 text-emerald-950 font-fun animate-fadeIn";
    feedbackEl.innerHTML = `
      <div class="flex items-center gap-2 mb-1">
        <span class="text-2xl">🎉</span>
        <h5 class="font-bold text-sm">¡Clasificación Correcta!</h5>
      </div>
      <p class="text-xs font-semibold text-emerald-800">Tipo: <span class="bg-emerald-200 px-2 py-0.5 rounded-full text-emerald-900 font-bold">${item.subtype}</span></p>
      <p class="text-xs mt-1 leading-relaxed">${item.rationale}</p>
    `;
  } else {
    playSound('incorrect');
    feedbackEl.className = "mt-4 p-4 rounded-2xl border-2 border-rose-300 bg-rose-50 text-rose-950 font-fun animate-fadeIn";
    feedbackEl.innerHTML = `
      <div class="flex items-center gap-2 mb-1">
        <span class="text-2xl">💡</span>
        <h5 class="font-bold text-sm">¡Revisa el tipo de especie!</h5>
      </div>
      <p class="text-xs leading-relaxed">Recuerda: <b>Intraespecífica</b> ocurre entre la MISMA especie. <b>Interespecífica</b> ocurre entre ESPECIES DIFERENTES.</p>
    `;
  }
}

export function nextRelacionCard() {
  currentRelacionIdx = (currentRelacionIdx + 1) % relacionesData.length;
  playSound('tab_click');
  renderRelacionesUI();
}

export function prevRelacionCard() {
  currentRelacionIdx = (currentRelacionIdx - 1 + relacionesData.length) % relacionesData.length;
  playSound('tab_click');
  renderRelacionesUI();
}

function renderRelacionesUI() {
  const cardContainer = document.getElementById('relacion-card-container');
  const feedbackEl = document.getElementById('relaciones-feedback');

  if (!cardContainer) return;
  if (feedbackEl) feedbackEl.className = "hidden";

  const item = relacionesData[currentRelacionIdx];

  cardContainer.innerHTML = `
    <div class="bg-white rounded-3xl p-5 border-2 border-amber-300 shadow-sm text-center animate-fadeIn">
      <div class="flex items-center justify-between gap-2 mb-3">
        <span class="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full font-fun">
          Caso ${currentRelacionIdx + 1} de ${relacionesData.length}
        </span>
        <span class="text-xs text-slate-500 font-bold font-fun">Detective de Relaciones</span>
      </div>

      <span class="text-5xl block my-3">${item.icon}</span>
      <h4 class="text-base sm:text-lg font-bold text-slate-900 font-fun mb-2">${item.title}</h4>
      <p class="text-xs sm:text-sm text-slate-600 font-medium bg-amber-50/70 p-3 rounded-2xl border border-amber-200 mb-4">${item.clue}</p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <button onclick="window.answerRelacionType('Intraespecífica')"
                class="w-full bg-indigo-50 hover:bg-indigo-100 active:scale-95 text-indigo-900 border-2 border-indigo-200 font-bold p-3 rounded-2xl text-xs font-fun transition-all shadow-sm">
          👥 Relación Intraespecífica<br><span class="text-[10px] font-normal text-indigo-700">(Misma Especie)</span>
        </button>
        <button onclick="window.answerRelacionType('Interespecífica')"
                class="w-full bg-teal-50 hover:bg-teal-100 active:scale-95 text-teal-900 border-2 border-teal-200 font-bold p-3 rounded-2xl text-xs font-fun transition-all shadow-sm">
          🌐 Relación Interespecífica<br><span class="text-[10px] font-normal text-teal-700">(Diferentes Especies)</span>
        </button>
      </div>
    </div>
  `;
}

// ── 4. TALLER DE ABONO ORGÁNICO Y DESAFÍO 5 R ───────────────────────────────
const compostItems = [
  { name: 'Cáscaras de Plátano', isOrganic: true, icon: '🍌' },
  { name: 'Broza de Café', isOrganic: true, icon: '☕' },
  { name: 'Botella de Plástico', isOrganic: false, icon: '🍾' },
  { name: 'Restos de Manzana', isOrganic: true, icon: '🍎' },
  { name: 'Pila Usada', isOrganic: false, icon: '🔋' },
  { name: 'Hojas Secas del Jardín', isOrganic: true, icon: '🍂' }
];

let compostScore = 0;
let compostSelected = [];

export function initCompostLab() {
  compostScore = 0;
  compostSelected = [];
  renderCompostUI();
}

export function selectCompostItem(idx) {
  const item = compostItems[idx];
  if (compostSelected.includes(idx)) return;

  compostSelected.push(idx);

  if (item.isOrganic) {
    compostScore += 25;
    playSound('correct');
  } else {
    compostScore = Math.max(0, compostScore - 15);
    playSound('incorrect');
  }

  renderCompostUI();
}

export function resetCompostLab() {
  compostScore = 0;
  compostSelected = [];
  playSound('tab_click');
  renderCompostUI();
}

function renderCompostUI() {
  const listContainer = document.getElementById('compost-items-container');
  const meterEl = document.getElementById('compost-meter');
  const feedbackEl = document.getElementById('compost-feedback');

  if (!listContainer || !meterEl) return;

  meterEl.style.width = `${Math.min(100, compostScore)}%`;

  listContainer.innerHTML = compostItems.map((item, idx) => {
    const isChosen = compostSelected.includes(idx);
    return `
      <button onclick="window.selectCompostItem(${idx})" ${isChosen ? 'disabled' : ''}
              class="p-3 rounded-2xl border-2 font-fun text-center transition-all flex flex-col items-center justify-center min-h-[85px]
                     ${isChosen ? (item.isOrganic ? 'border-emerald-400 bg-emerald-50 opacity-60' : 'border-rose-400 bg-rose-50 opacity-60') : 'border-amber-300 bg-white hover:bg-amber-50 active:scale-95 shadow-sm'}">
        <span class="text-2xl mb-1">${item.icon}</span>
        <span class="text-xs font-bold text-slate-800 leading-snug">${item.name}</span>
      </button>
    `;
  }).join('');

  if (feedbackEl) {
    if (compostScore >= 100) {
      feedbackEl.className = "mt-4 p-4 rounded-2xl border-2 border-emerald-300 bg-emerald-50 text-emerald-950 font-fun text-xs font-bold block";
      feedbackEl.innerHTML = `🎉 ¡Compostera 100% Nutritiva! Has creado abono orgánico fértil reciclando residuos del hogar y devolviendo minerales al suelo.`;
    } else {
      feedbackEl.className = "hidden";
    }
  }
}

// ── EXPONER AL WINDOW PARA ONCLICK ──────────────────────────────────────────
Object.assign(window, {
  setFotosintesisSlider,
  setFotosintesisPhase,
  setFotosintesisType,
  selectCellPart,
  selectChainPreset,
  addChainOrganism,
  resetChainOrder,
  answerRelacionType,
  nextRelacionCard,
  prevRelacionCard,
  selectCompostItem,
  resetCompostLab
});
