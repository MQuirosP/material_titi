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
