import confetti from 'canvas-confetti';
import { quizState } from '../state/store.js';
import { updateBadges } from './flashcards.js';
import { playSound } from './audio.js';

/** Inicia (o reinicia) un quiz del tipo dado */
export function startQuiz(type) {
  const state = quizState[type];
  state.currentIdx  = 0;
  state.score       = 0;
  state.answers     = [];
  state.isCompleted = false;

  const pfx = type === 'teorico' ? 't' : 'p';
  document.getElementById(`quiz-${pfx}-intro`)?.classList.add('hidden');
  document.getElementById(`quiz-${pfx}-container`)?.classList.remove('hidden');
  document.getElementById(`quiz-${pfx}-results`)?.classList.add('hidden');

  renderQuestion(type);
}

/** Renderiza la pregunta activa en pantalla */
export function renderQuestion(type) {
  const state = quizState[type];
  const q     = state.questions[state.currentIdx];
  const pfx   = type === 'teorico' ? 't' : 'p';

  // Ocultar feedback anterior
  document.getElementById(`quiz-${pfx}-feedback`)?.classList.add('hidden');

  // Progreso
  const total = state.questions.length;
  const pct   = ((state.currentIdx + 1) / total) * 100;
  const counter = document.getElementById(`quiz-${pfx}-counter`);
  const bar     = document.getElementById(`quiz-${pfx}-progress-bar`);
  if (counter) counter.textContent = `Pregunta ${state.currentIdx + 1} de ${total}`;
  if (bar)     bar.style.width = `${pct}%`;

  // Enunciado
  const topicEl    = document.getElementById(`quiz-${pfx}-topic`);
  const questionEl = document.getElementById(`quiz-${pfx}-question-text`);
  if (topicEl)    topicEl.textContent    = q.topic;
  if (questionEl) questionEl.textContent = q.question;

  // Opciones
  const container = document.getElementById(`quiz-${pfx}-options`);
  if (!container) return;
  container.innerHTML = '';

  // Clonar y barajar opciones para evitar memorización
  const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);

  shuffledOptions.forEach((opt) => {
    const btn = document.createElement('button');
    btn.className = `option-btn-${pfx} w-full text-left p-4 rounded-2xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 font-medium text-slate-700 flex justify-between items-center bg-white`;
    btn.dataset.isCorrect = opt.isCorrect;
    btn.onclick = () => selectOption(type, opt, btn);
    btn.innerHTML = `
      <span>${opt.text}</span>
      <span class="circle-icon w-6 h-6 border-2 border-slate-300 rounded-full flex items-center justify-center text-xs font-bold text-slate-400"></span>
    `;
    container.appendChild(btn);
  });
}

/** Evalúa la opción elegida por el estudiante */
export function selectOption(type, opt, buttonElement) {
  const state = quizState[type];
  const pfx   = type === 'teorico' ? 't' : 'p';

  // Deshabilitar todos los botones (evita doble clic)
  document.querySelectorAll(`.option-btn-${pfx}`).forEach(btn => {
    btn.disabled = true;
    btn.classList.add('opacity-60', 'cursor-not-allowed');
  });

  const isCorrect = opt.isCorrect;
  if (isCorrect) {
    state.score++;
    buttonElement.classList.remove('border-slate-200', 'bg-white', 'opacity-60');
    buttonElement.classList.add('border-emerald-500', 'bg-emerald-50', 'text-emerald-800', '!opacity-100');
    buttonElement.querySelector('.circle-icon').innerHTML = '✓';
    buttonElement.querySelector('.circle-icon').className =
      'circle-icon w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-bold';
    
    // Sonido de acierto
    playSound('correct');
    
    confetti({ particleCount: 30, spread: 40, origin: { y: 0.8 } });
  } else {
    buttonElement.classList.remove('border-slate-200', 'bg-white', 'opacity-60');
    buttonElement.classList.add('border-rose-500', 'bg-rose-50', 'text-rose-800', '!opacity-100');
    buttonElement.querySelector('.circle-icon').innerHTML = '✗';
    buttonElement.querySelector('.circle-icon').className =
      'circle-icon w-6 h-6 bg-rose-500 text-white rounded-full flex items-center justify-center text-xs font-bold';

    // Sonido de fallo
    playSound('incorrect');

    // Resaltar la opción correcta en verde usando dataset
    document.querySelectorAll(`.option-btn-${pfx}`).forEach(btn => {
      if (btn.dataset.isCorrect === 'true') {
        btn.classList.remove('opacity-60');
        btn.classList.add('border-emerald-500', 'bg-emerald-50', 'text-emerald-800', '!opacity-100');
      }
    });
  }

  // Mostrar retroalimentación
  const feedbackBox = document.getElementById(`quiz-${pfx}-feedback`);
  const fbTitle     = document.getElementById(`quiz-${pfx}-feedback-title`);
  const fbText      = document.getElementById(`quiz-${pfx}-feedback-text`);
  const fbIcon      = document.getElementById(`quiz-${pfx}-feedback-icon`);

  if (feedbackBox) {
    feedbackBox.classList.remove('hidden');
    if (isCorrect) {
      feedbackBox.className = 'mt-6 p-5 rounded-2xl border border-emerald-100 bg-emerald-50/50 text-emerald-900 transition-all duration-300';
      if (fbIcon)  fbIcon.textContent  = '🎉 ¡Excelente!';
      if (fbTitle) fbTitle.textContent = '¡Respuesta Correcta!';
    } else {
      feedbackBox.className = 'mt-6 p-5 rounded-2xl border border-rose-100 bg-rose-50/50 text-rose-900 transition-all duration-300';
      if (fbIcon)  fbIcon.textContent  = '💡 ¡Aprendamos juntos!';
      if (fbTitle) fbTitle.textContent = '¡Sigue practicando!';
    }
    if (fbText) fbText.innerHTML = opt.rationale;
  }
}

/** Avanza a la siguiente pregunta o muestra la pantalla de resultados */
export function nextQuestion(type) {
  const state = quizState[type];
  const pfx   = type === 'teorico' ? 't' : 'p';

  if (state.currentIdx < state.questions.length - 1) {
    state.currentIdx++;
    renderQuestion(type);
    return;
  }

  // Quiz completado
  state.isCompleted = true;
  document.getElementById(`quiz-${pfx}-container`)?.classList.add('hidden');
  document.getElementById(`quiz-${pfx}-results`)?.classList.remove('hidden');

  const finalGrade = Math.round((state.score / state.questions.length) * 100);
  const scoreEl    = document.getElementById(`quiz-${pfx}-results-score`);
  const summaryEl  = document.getElementById(`quiz-${pfx}-results-summary`);
  const emojiEl    = document.getElementById(`quiz-${pfx}-results-emoji`);

  if (scoreEl) scoreEl.textContent = `${finalGrade} / 100`;

  // Actualizar barra de progreso en Inicio
  const scoreTxt = document.getElementById(`score-${type}-txt`);
  const scoreBar = document.getElementById(`score-${type}-bar`);
  if (scoreTxt) scoreTxt.textContent  = `${finalGrade}/100`;
  if (scoreBar) scoreBar.style.width  = `${finalGrade}%`;

  // Mensaje según nota
  if (finalGrade >= 90) {
    if (summaryEl) summaryEl.textContent = '¡Wao! Eres toda una experta en esta materia. ¡La maestra Florisel va a quedar asombrada!';
    if (emojiEl)   emojiEl.textContent   = '🏆✨';
    confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
  } else if (finalGrade >= 70) {
    if (summaryEl) summaryEl.textContent = '¡Buen trabajo! Tienes un excelente dominio de estos temas. Repasa los errores y asegurarás el 100.';
    if (emojiEl)   emojiEl.textContent   = '⭐😊';
  } else {
    if (summaryEl) summaryEl.textContent = '¡Sigue estudiando! Revisa la teoría interactiva y vuelve a intentarlo. ¡Tú eres capaz de lograrlo!';
    if (emojiEl)   emojiEl.textContent   = '💪📚';
  }

  updateBadges();
}

/** Resetea el quiz y vuelve a la pantalla de inicio */
export function resetQuiz(type) {
  const pfx = type === 'teorico' ? 't' : 'p';
  document.getElementById(`quiz-${pfx}-results`)?.classList.add('hidden');
  document.getElementById(`quiz-${pfx}-intro`)?.classList.remove('hidden');
}
