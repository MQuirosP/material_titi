// Panel de Decisiones Médicas - Ciencias
import confetti from 'canvas-confetti';
import { playSound } from '../../../shared/modules/audio.js';

const casosMedicosLab = [
    { texto: "La tía de Sofía sufrió un fuerte resbalón y le duele mucho el tobillo. La doctora ocupa verificar si se le quebró o fisuró el hueso.", respuestaCorrecta: "Rayos X", explicacion: "¡Excelente! Los Rayos X atraviesan tejidos blandos para tomar radiografías claras de los huesos." },
    { texto: "El personal de salud visita la Escuela Riojalandia para evitar que los estudiantes se contagien de sarampión o polio este año.", respuestaCorrecta: "Vacunas", explicacion: "¡Muy bien! Las vacunas se aplican de forma preventiva para dar defensas antes del contagio." },
    { texto: "Un niño presenta una fuerte infección de garganta acompañada de placas de pus provocada por la bacteria Estreptococo.", respuestaCorrecta: "Antibióticos", explicacion: "¡Exacto! Los antibióticos combaten infecciones causadas por bacterias específicas." },
    { texto: "Don Carlos tiene un riñón crónicamente enfermo que dejó de funcionar por completo. Ocupa un reemplazo urgente de órgano para salvar su vida.", respuestaCorrecta: "Trasplantes", explicacion: "¡Perfecto! El trasplante quirúrgico permite sustituir un órgano inservible por uno totalmente sano." }
];

let casoActualIdx = 0;
let lockButtons = false;

export function initDecisionesMedicas() {
    casoActualIdx = Math.floor(Math.random() * casosMedicosLab.length);
    lockButtons = false;
    renderCaso();
}

export function renderCaso() {
    const caso = casosMedicosLab[casoActualIdx];
    const textEl = document.getElementById('clinical-case-text');
    const feedbackBox = document.getElementById('clinical-case-feedback');
    
    if (textEl) {
        textEl.textContent = caso.texto;
    }
    
    if (feedbackBox) {
        feedbackBox.classList.add('hidden');
        feedbackBox.innerHTML = '';
    }

    // Reset button states
    document.querySelectorAll('.medical-tool-btn').forEach(btn => {
        btn.disabled = false;
        btn.className = 'medical-tool-btn p-4 bg-white hover:bg-emerald-50 border-2 border-slate-200 hover:border-emerald-400 rounded-2xl flex flex-col items-center gap-2 transition-all duration-300 font-fun text-slate-800 text-sm font-bold shadow-sm';
    });
    
    lockButtons = false;
}

export function chooseMedicalTool(toolName, btnElement) {
    if (lockButtons) return;
    const caso = casosMedicosLab[casoActualIdx];
    const feedbackBox = document.getElementById('clinical-case-feedback');

    // Disable buttons
    document.querySelectorAll('.medical-tool-btn').forEach(btn => {
        btn.disabled = true;
    });
    lockButtons = true;

    if (toolName === caso.respuestaCorrecta) {
        playSound('correct');
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
        
        btnElement.className = 'medical-tool-btn p-4 bg-emerald-50 border-2 border-emerald-500 rounded-2xl flex flex-col items-center gap-2 transition-all duration-300 font-fun text-emerald-800 text-sm font-bold shadow-md scale-105';
        
        if (feedbackBox) {
            feedbackBox.className = 'mt-6 p-5 rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-900 transition-all duration-300';
            feedbackBox.innerHTML = `
                <div class="flex gap-4 items-start">
                    <span class="text-3xl">🎉</span>
                    <div>
                        <h4 class="font-bold text-lg">¡Excelente Decisión!</h4>
                        <p class="text-sm mt-1 leading-relaxed">${caso.explicacion}</p>
                        <p class="text-xs text-emerald-600 mt-2 font-bold font-fun animate-pulse">Siguiente caso en 3 segundos...</p>
                    </div>
                </div>
            `;
            feedbackBox.classList.remove('hidden');
        }

        setTimeout(() => {
            // Ir al siguiente caso
            casoActualIdx = (casoActualIdx + 1) % casosMedicosLab.length;
            renderCaso();
        }, 3000);

    } else {
        playSound('incorrect');
        btnElement.className = 'medical-tool-btn p-4 bg-rose-50 border-2 border-rose-400 rounded-2xl flex flex-col items-center gap-2 transition-all duration-300 font-fun text-rose-800 text-sm font-bold opacity-80';
        
        // Highlight correct button
        document.querySelectorAll('.medical-tool-btn').forEach(btn => {
            if (btn.dataset.tool === caso.respuestaCorrecta) {
                btn.className = 'medical-tool-btn p-4 bg-emerald-50 border-2 border-emerald-400 rounded-2xl flex flex-col items-center gap-2 transition-all duration-300 font-fun text-emerald-800 text-sm font-bold shadow-sm';
            }
        });

        if (feedbackBox) {
            feedbackBox.className = 'mt-6 p-5 rounded-2xl border border-rose-200 bg-rose-50 text-rose-900 transition-all duration-300';
            feedbackBox.innerHTML = `
                <div class="flex gap-4 items-start">
                    <span class="text-3xl">💡</span>
                    <div>
                        <h4 class="font-bold text-lg">Revisemos el caso...</h4>
                        <p class="text-sm mt-1 leading-relaxed">No es la herramienta ideal. La respuesta correcta es <strong>${caso.respuestaCorrecta}</strong>.</p>
                        <p class="text-xs text-rose-700 mt-1 leading-relaxed">${caso.explicacion}</p>
                        <button id="retry-medical-btn" class="mt-3 bg-rose-600 hover:bg-rose-700 text-white font-bold px-4 py-2 rounded-xl text-xs font-fun transition-colors">
                            Volver a intentar
                        </button>
                    </div>
                </div>
            `;
            feedbackBox.classList.remove('hidden');
            
            // Connect retry button
            const retryBtn = document.getElementById('retry-medical-btn');
            if (retryBtn) {
                retryBtn.onclick = () => {
                    renderCaso();
                };
            }
        }
    }
}
