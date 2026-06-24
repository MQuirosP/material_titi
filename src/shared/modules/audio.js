// Sintetizador nativo para efectos de sonido
export function playSound(type) {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        
        if (type === 'correct') {
            // Sonido alegre de campana / arpegio ascendente brillante (C5 -> E5 -> G5)
            const playNote = (freq, startTime, duration) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, startTime);
                
                gain.gain.setValueAtTime(0.12, startTime);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
                
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(startTime);
                osc.stop(startTime + duration);
            };
            
            const start = ctx.currentTime;
            playNote(523.25, start, 0.25);       // C5
            playNote(659.25, start + 0.07, 0.25); // E5
            playNote(783.99, start + 0.14, 0.35); // G5
        } else if (type === 'incorrect') {
            // Sonido doble sutil descendente, no invasivo ("oh-oh" / "slide-down")
            const playLowNote = (startFreq, endFreq, startTime, duration) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'triangle'; // Onda triangular para que sea más suave que la sierra
                osc.frequency.setValueAtTime(startFreq, startTime);
                osc.frequency.exponentialRampToValueAtTime(endFreq, startTime + duration);
                
                gain.gain.setValueAtTime(0.15, startTime);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
                
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(startTime);
                osc.stop(startTime + duration);
            };
            
            const start = ctx.currentTime;
            playLowNote(220, 150, start, 0.14);       // Primer tono descendente
            playLowNote(180, 110, start + 0.11, 0.22); // Segundo tono más bajo y descendente
        } else if (type === 'tick') {
            // Sonido de "click" o "tap" muy corto, sutil y limpio
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(900, ctx.currentTime);
            
            gain.gain.setValueAtTime(0.04, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
            
            osc.start();
            osc.stop(ctx.currentTime + 0.04);
        } else if (type === 'tab_click') {
            // Sonido de "pop" de pestaña suave
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(450, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(700, ctx.currentTime + 0.07);
            
            gain.gain.setValueAtTime(0.06, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);
            
            osc.start();
            osc.stop(ctx.currentTime + 0.07);
        } else if (type === 'score_excellent') {
            // Fanfarria triunfal alegre (Do mayor ascendente)
            const playNote = (freq, startTime, duration) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, startTime);
                gain.gain.setValueAtTime(0.1, startTime);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(startTime);
                osc.stop(startTime + duration);
            };
            const start = ctx.currentTime;
            playNote(523.25, start, 0.2); // C5
            playNote(659.25, start + 0.1, 0.2); // E5
            playNote(783.99, start + 0.2, 0.2); // G5
            playNote(1046.50, start + 0.3, 0.55); // C6
        } else if (type === 'score_good') {
            // Melodía agradable corta (Sol5 -> Do6)
            const playNote = (freq, startTime, duration) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, startTime);
                gain.gain.setValueAtTime(0.12, startTime);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(startTime);
                osc.stop(startTime + duration);
            };
            const start = ctx.currentTime;
            playNote(783.99, start, 0.25); // G5
            playNote(1046.50, start + 0.12, 0.45); // C6
        } else if (type === 'score_retry') {
            // Melodía acogedora y motivadora (Fa4 -> La4 -> Do5)
            const playNote = (freq, startTime, duration) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, startTime);
                gain.gain.setValueAtTime(0.12, startTime);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(startTime);
                osc.stop(startTime + duration);
            };
            const start = ctx.currentTime;
            playNote(349.23, start, 0.3); // F4
            playNote(440.00, start + 0.15, 0.3); // A4
            playNote(523.25, start + 0.3, 0.45); // C5
        }
    } catch (e) {
        console.log("Audio no soportado o bloqueado por el navegador", e);
    }
}

let lastTickTime = 0;
export function playTickWithThrottle() {
  const now = Date.now();
  if (now - lastTickTime >= 65) {
    lastTickTime = now;
    playSound('tick');
  }
}
