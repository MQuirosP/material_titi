// =====================================================
// SÚPER LABORATORIO: EL TALLER DEL LIBRO Y FICHAS
// Explorador anatómico del libro y generador interactivo de fichas
// =====================================================

import { playSound, playTickWithThrottle } from '../../../shared/modules/audio.js';
import { setUserHasUsedLab } from '../../../shared/state/store.js';
import { updateBadges } from '../../../shared/modules/flashcards.js';

const bookPartsData = {
  portada: {
    title: "Portada (Cubierta Delantera)",
    badge: "Parte Externa",
    icon: "📖",
    desc: "Es la cara principal exterior del libro. Muestra el título de la obra, el nombre del autor, la casa editorial y con frecuencia una ilustración representativa.",
    example: "Ejemplo: 'Cuentos de mi Tía Panchita' · Carmen Lyra · Editorial Costa Rica."
  },
  lomo: {
    title: "Lomo del Libro",
    badge: "Parte Externa",
    icon: "📏",
    desc: "Es el canto o borde lateral donde se unen y cosen o pegan todas las hojas. Permite identificar la obra con el título abreviado y autor cuando está ordenada verticalmente en la biblioteca o estante.",
    example: "Ejemplo: En el lomo se lee verticalmente: 'Lyra — Cuentos de mi Tía Panchita'."
  },
  contraportada: {
    title: "Contraportada (Cubierta Posterior)",
    badge: "Parte Externa",
    icon: "📋",
    desc: "Es la cara trasera del libro. Contiene una breve sinopsis o resumen de la obra, semblanza del autor, comentarios críticos y el código de barras comercial.",
    example: "Ejemplo: 'Una joya de la literatura infantil costarricense que reúne las aventuras de Tío Conejo...'"
  },
  prologo: {
    title: "Prólogo o Introducción",
    badge: "Parte Interna",
    icon: "✍️",
    desc: "Texto preliminar situado al inicio donde el autor o un especialista presenta la obra, explica los motivos de su creación o guía al lector sobre cómo disfrutar el texto.",
    example: "Ejemplo: 'Estas historias nacieron al calor del fogón en los valles de San José...'"
  },
  indice: {
    title: "Índice / Tabla de Contenidos",
    badge: "Parte Interna",
    icon: "📑",
    desc: "Lista ordenada de los capítulos, unidades o temas con el número de página exacto donde comienza cada uno. Facilita la navegación rápida.",
    example: "Ejemplo: Cap. 1: Upe Tío Conejo (pág. 5) · Cap. 2: El Coyote y la Luna (pág. 18)..."
  },
  glosario: {
    title: "Glosario de Términos",
    badge: "Parte Interna",
    icon: "📚",
    desc: "Pequeño diccionario especializado al final del libro que define palabras técnicas, históricas, regionales o difíciles empleadas en el texto.",
    example: "Ejemplo: 'Caftán: Prenda de vestir tradicional larga.' · 'Petrificada: Inmóvil por el asombro.'"
  },
  bibliografia: {
    title: "Bibliografía",
    badge: "Parte Interna",
    icon: "🔍",
    desc: "Lista organizada alfabéticamente de todos los libros, artículos y fuentes documentales consultadas para fundamentar la investigación.",
    example: "Ejemplo: MEP (2026). Programas de Estudio de Español V Grado. San José, Costa Rica."
  }
};

let currentCardMode = 'biografica';

export function initTallerLibro() {
  selectBookPart('portada');
  switchCardGeneratorTab('biografica');
}

export function selectBookPart(partKey) {
  playTickWithThrottle();
  const info = bookPartsData[partKey];
  if (!info) return;

  // Actualizar botones activos
  const buttons = document.querySelectorAll('.book-part-btn');
  buttons.forEach(btn => {
    btn.classList.remove('bg-amber-600', 'text-white');
    btn.classList.add('bg-white', 'text-slate-700');
  });
  const activeBtn = document.getElementById(`btn-part-${partKey}`);
  if (activeBtn) {
    activeBtn.classList.remove('bg-white', 'text-slate-700');
    activeBtn.classList.add('bg-amber-600', 'text-white');
  }

  const detailBox = document.getElementById('book-part-detail');
  if (detailBox) {
    detailBox.innerHTML = `
      <div class="p-6 rounded-3xl bg-amber-50/70 border-2 border-amber-300 animate-fadeIn">
        <div class="flex items-center gap-3 mb-2">
          <span class="text-3xl">${info.icon}</span>
          <div>
            <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-900 font-fun">${info.badge}</span>
            <h4 class="text-xl font-bold text-slate-900 font-fun mt-1">${info.title}</h4>
          </div>
        </div>
        <p class="text-sm text-slate-700 leading-relaxed font-medium mt-3">${info.desc}</p>
        <div class="mt-4 bg-white p-3.5 rounded-2xl border border-amber-200 text-xs text-amber-900 font-semibold flex items-center gap-2">
          <span>💡</span>
          <p>${info.example}</p>
        </div>
      </div>
    `;
  }

  setUserHasUsedLab(true);
  updateBadges();
}

export function switchCardGeneratorTab(mode) {
  currentCardMode = mode;
  playTickWithThrottle();

  const tabs = ['biografica', 'textual', 'resumen'];
  tabs.forEach(t => {
    const tabEl = document.getElementById(`fichas-tab-${t}`);
    if (tabEl) {
      if (t === mode) {
        tabEl.className = "px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 text-white font-fun transition-all shadow-sm";
      } else {
        tabEl.className = "px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-600 hover:bg-slate-200 font-fun transition-all";
      }
    }
  });

  const previewBox = document.getElementById('ficha-interactive-preview');
  if (!previewBox) return;

  if (mode === 'biografica') {
    previewBox.innerHTML = `
      <div class="p-5 rounded-2xl bg-white border-2 border-amber-300 shadow-md font-sans text-slate-800 animate-fadeIn">
        <div class="flex justify-between items-start border-b border-amber-100 pb-2 mb-3">
          <span class="text-[11px] font-bold bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full font-fun">Ficha Biográfica / Histórica</span>
          <span class="text-xs text-slate-400 font-bold">Costa Rica · Historia</span>
        </div>
        <h5 class="font-bold text-base text-indigo-900 font-fun">Figueres Ferrer, José María ("Don Pepe")</h5>
        <p class="text-xs text-slate-500 font-semibold mt-0.5">San Ramón, Alajuela (1906 – 1990) · Presidente de la República</p>
        <div class="mt-3 bg-amber-50/60 p-3 rounded-xl border border-amber-100 text-xs text-slate-700 space-y-1.5 leading-relaxed">
          <p>• <strong>1948:</strong> Lideró la abolición del ejército en el Cuartel Bellavista (hoy Museo Nacional).</p>
          <p>• <strong>Instituciones creadas:</strong> Instituto Costarricense de Electricidad (ICE) y Banco Central de Costa Rica.</p>
          <p>• <strong>Derechos cívicos:</strong> Impulsó la consagración constitucional del sufragio femenino en 1949.</p>
        </div>
      </div>
    `;
  } else if (mode === 'textual') {
    previewBox.innerHTML = `
      <div class="p-5 rounded-2xl bg-white border-2 border-indigo-300 shadow-md font-sans text-slate-800 animate-fadeIn">
        <div class="flex justify-between items-start border-b border-indigo-100 pb-2 mb-3">
          <span class="text-[11px] font-bold bg-indigo-100 text-indigo-900 px-2.5 py-0.5 rounded-full font-fun">Ficha de Cita Textual</span>
          <span class="text-xs text-indigo-500 font-bold">Obligatorio: Comillas + Página</span>
        </div>
        <h5 class="font-bold text-sm text-slate-900">Lyra, Carmen. (1920)</h5>
        <p class="text-xs text-indigo-700 italic font-semibold">Cuentos de mi Tía Panchita. San José, Costa Rica.</p>
        <div class="mt-3 bg-indigo-50/60 p-3 rounded-xl border border-indigo-100 text-xs text-slate-800 leading-relaxed font-serif">
          <p>"—¡Upe! gritó Tío Conejo asomando las orejas por entre el matorral. Nadie contestó, pero la sombra del coyote acechaba silenciosa."</p>
        </div>
        <p class="text-right text-[11px] font-bold text-slate-500 mt-2">Página de referencia: <strong>pág. 32</strong></p>
      </div>
    `;
  } else if (mode === 'resumen') {
    previewBox.innerHTML = `
      <div class="p-5 rounded-2xl bg-white border-2 border-emerald-300 shadow-md font-sans text-slate-800 animate-fadeIn">
        <div class="flex justify-between items-start border-b border-emerald-100 pb-2 mb-3">
          <span class="text-[11px] font-bold bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full font-fun">Ficha de Resumen</span>
          <span class="text-xs text-emerald-600 font-bold">Fiel a las ideas del autor</span>
        </div>
        <h5 class="font-bold text-sm text-slate-900">Esopo. Fábulas Clásicas</h5>
        <p class="text-xs text-emerald-700 font-semibold">Tema: "El murciélago y las comadrejas"</p>
        <div class="mt-3 bg-emerald-50/60 p-3 rounded-xl border border-emerald-100 text-xs text-slate-700 leading-relaxed">
          <p>Un murciélago cayó dos veces en trampas de comadrejas enemigas. En la primera se identificó como ratón y en la segunda como ave, salvando su vida mediante astucia e inteligencia.</p>
        </div>
        <p class="text-right text-[11px] font-bold text-slate-500 mt-2">Extracto de estudio</p>
      </div>
    `;
  }

  setUserHasUsedLab(true);
  updateBadges();
}
