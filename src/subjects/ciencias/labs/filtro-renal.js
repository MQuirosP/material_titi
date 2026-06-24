// Simulador de Filtro Renal - Ciencias

let canvas = null;
let ctx = null;
let animationFrameId = null;
let particles = [];

class Particle {
    constructor(x, y, radius, type, speedMultiplier) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.type = type; // 'nutrient' (red, big) or 'toxin' (yellow, small)
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.speedMultiplier = speedMultiplier;
    }

    update(width, height, hydrationState) {
        // Apply hydration state rules to toxins
        let currentMultiplier = 1;
        if (this.type === 'toxin') {
            if (hydrationState === 1) { // Poco
                currentMultiplier = 0.3;
            } else if (hydrationState === 3) { // Súper
                currentMultiplier = 2.5;
            } else {
                currentMultiplier = 1.0;
            }
        }

        this.x += this.vx * this.speedMultiplier * currentMultiplier;
        this.y += this.vy * this.speedMultiplier * currentMultiplier;

        const midline = height / 2;

        if (this.type === 'nutrient') {
            // Nutrients bounce off borders and must NOT cross the midline (membrana)
            // Left/Right boundaries
            if (this.x - this.radius < 0) {
                this.x = this.radius;
                this.vx = -this.vx;
            } else if (this.x + this.radius > width) {
                this.x = width - this.radius;
                this.vx = -this.vx;
            }
            // Top/Midline boundaries
            if (this.y - this.radius < 0) {
                this.y = this.radius;
                this.vy = -this.vy;
            } else if (this.y + this.radius > midline - 5) {
                this.y = midline - 5 - this.radius;
                this.vy = -this.vy;
            }
        } else {
            // Toxins cross the midline and descend (filtered)
            // Left/Right boundaries
            if (this.x - this.radius < 0) {
                this.x = this.radius;
                this.vx = -this.vx;
            } else if (this.x + this.radius > width) {
                this.x = width - this.radius;
                this.vx = -this.vx;
            }
            // Top/Bottom boundaries
            if (this.y - this.radius < 0) {
                this.y = this.radius;
                this.vy = -this.vy;
            } else if (this.y - this.radius > height) {
                // Respawn at the top to simulate continuous blood flow
                this.x = Math.random() * width;
                this.y = Math.random() * (midline - 20);
                this.vx = (Math.random() - 0.5) * 2;
                this.vy = Math.random() * 1.5 + 0.5; // push downwards
            }
        }
    }

    draw(ctx, hydrationState) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        if (this.type === 'nutrient') {
            ctx.fillStyle = '#ef4444'; // Red
            ctx.shadowBlur = 0;
        } else {
            // Toxins look different depending on hydration
            if (hydrationState === 1) { // Poco
                ctx.fillStyle = 'rgba(180, 160, 20, 0.4)'; // dark, opaque, slow
                ctx.shadowBlur = 0;
            } else if (hydrationState === 3) { // Súper
                ctx.fillStyle = '#facc15'; // bright yellow
                ctx.shadowColor = '#facc15';
                ctx.shadowBlur = 8;
            } else {
                ctx.fillStyle = '#eab308'; // standard yellow
                ctx.shadowBlur = 0;
            }
        }
        ctx.fill();
        ctx.shadowBlur = 0; // reset
        ctx.closePath();
    }
}

export function initFiltroRenal() {
    canvas = document.getElementById('filtro-renal-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    
    // Set fixed logical size for canvas
    canvas.width = 600;
    canvas.height = 300;

    // Reset particles
    particles = [];
    
    // Generate nutrients (large, red)
    for (let i = 0; i < 15; i++) {
        particles.push(new Particle(
            Math.random() * canvas.width,
            Math.random() * (canvas.height / 2 - 20) + 10,
            12,
            'nutrient',
            1.2
        ));
    }

    // Generate toxins (small, yellow)
    for (let i = 0; i < 25; i++) {
        particles.push(new Particle(
            Math.random() * canvas.width,
            Math.random() * (canvas.height / 2 - 20) + 10,
            6,
            'toxin',
            1.5
        ));
    }

    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    
    tick();
}

function tick() {
    if (!canvas || !ctx) return;
    
    const slider = document.getElementById('filtro-renal-slider');
    const hydrationState = slider ? parseInt(slider.value, 10) : 2;

    // Update status text and style
    const statusText = document.getElementById('filtro-renal-status');
    const container = document.getElementById('filtro-renal-flow-container');
    if (statusText) {
        if (hydrationState === 1) {
            statusText.textContent = 'Poca Hidratación ⚠️ (Flujo obstruido y lento)';
            statusText.className = 'text-sm font-bold text-rose-600';
            if (container) container.className = 'mt-4 p-4 rounded-2xl bg-rose-50 border border-rose-100 transition-colors';
        } else if (hydrationState === 3) {
            statusText.textContent = 'Súper Hidratación 💧 (Flujo rápido y sangre limpia)';
            statusText.className = 'text-sm font-bold text-emerald-600';
            if (container) container.className = 'mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-100 transition-colors';
        } else {
            statusText.textContent = 'Hidratación Regular 👍 (Flujo saludable)';
            statusText.className = 'text-sm font-bold text-teal-600';
            if (container) container.className = 'mt-4 p-4 rounded-2xl bg-teal-50 border border-teal-100 transition-colors';
        }
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background zones
    const midline = canvas.height / 2;
    
    // Upper area (bloodstream - red tint)
    ctx.fillStyle = 'rgba(254, 242, 242, 0.6)';
    ctx.fillRect(0, 0, canvas.width, midline);
    
    // Lower area (urine flow - yellow/teal tint)
    if (hydrationState === 1) {
        ctx.fillStyle = 'rgba(254, 240, 138, 0.4)'; // yellowish urine
    } else if (hydrationState === 3) {
        ctx.fillStyle = 'rgba(240, 253, 244, 0.6)'; // clear/greenish clean
    } else {
        ctx.fillStyle = 'rgba(254, 240, 138, 0.15)'; // light yellow
    }
    ctx.fillRect(0, midline, canvas.width, canvas.height - midline);

    // Draw Midline Membrane (colador microscópico)
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 4;
    ctx.setLineDash([8, 8]);
    ctx.beginPath();
    ctx.moveTo(0, midline);
    ctx.lineTo(canvas.width, midline);
    ctx.stroke();
    ctx.setLineDash([]); // reset

    // Draw Label
    ctx.fillStyle = '#64748b';
    ctx.font = 'bold 11px Fredoka, sans-serif';
    ctx.fillText('Membrana Renal (Filtro)', 10, midline - 8);
    ctx.fillText('Sangre con nutrientes y toxinas', 10, 20);
    ctx.fillText('Orina (Toxinas expulsadas)', 10, canvas.height - 15);

    // Update and draw particles
    particles.forEach(p => {
        p.update(canvas.width, canvas.height, hydrationState);
        p.draw(ctx, hydrationState);
    });

    animationFrameId = requestAnimationFrame(tick);
}

export function stopFiltroRenal() {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
}
