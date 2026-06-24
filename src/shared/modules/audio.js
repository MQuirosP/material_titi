// Sintetizador nativo para efectos de sonido
export function playSound(type) {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        
        if (type === 'correct') {
            // Sonido alegre tipo moneda "retro" (Dos tonos ascendentes rápidos)
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.type = 'sine';
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            
            osc.frequency.setValueAtTime(523.25, ctx.currentTime); // Nota C5
            osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // Nota E5
            
            osc.start();
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
            osc.stop(ctx.currentTime + 0.3);
        } else if (type === 'incorrect') {
            // Sonido tipo "buzzer" de error (Frecuencia baja y distorsionada)
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.type = 'sawtooth';
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            osc.frequency.setValueAtTime(130.81, ctx.currentTime); // Nota C3 baja
            
            osc.start();
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
            osc.stop(ctx.currentTime + 0.4);
        }
    } catch (e) {
        console.log("Audio no soportado o bloqueado por el navegador", e);
    }
}
