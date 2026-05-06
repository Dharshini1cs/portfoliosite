'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';

const TITLES = [
'Control Systems Engineer',
'Embedded Systems Developer',
'AI Enthusiast'];


function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: {x: number;y: number;vx: number;vy: number;size: number;opacity: number;color: string;}[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = ['rgba(0,200,255,', 'rgba(124,58,237,', 'rgba(0,128,255,'];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x;
          const dy = particles[j].y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,200,255,${(1 - dist / 100) * 0.08})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas w-full h-full" />;
}

function TypewriterTitle() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = TITLES[idx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((idx + 1) % TITLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx]);

  return (
    <span className="text-primary font-mono">
      {displayed}
      <span className="animate-blink">|</span>
    </span>);

}

const statCards = [
{ label: 'Projects Built', value: '5+', icon: '⚙️', color: 'primary' },
{ label: 'Certifications', value: '8', icon: '🏆', color: 'accent' },
{ label: 'GPA', value: '8.81', icon: '📊', color: 'primary' }];


export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://images.unsplash.com/photo-1513204052425-f7306aabccfc"
          alt="Dark circuit board macro photography with blue and purple LED lighting, deep shadows, atmospheric industrial tech environment"
          fill
          priority
          className="object-cover opacity-20" />
        
        {/* Scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
      </div>

      {/* Cyber grid overlay */}
      <div className="absolute inset-0 z-0 bg-cyber-grid bg-grid-60 opacity-20" />

      {/* Particle canvas */}
      <div className="absolute inset-0 z-0">
        <ParticleCanvas />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[100px] animate-pulse-slow z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-[100px] animate-pulse-slow z-0" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">

          {/* Left: Main content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}>
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md text-xs font-mono text-primary tracking-widest uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Available for Opportunities
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}>
              
              Dharshini <span className="gradient-text">Chandrasekaran Sivakumar</span>
            </motion.h1>

            <motion.div
              className="text-xl sm:text-2xl font-medium text-muted-foreground min-h-[2rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}>
              
              <TypewriterTitle />
            </motion.div>

            <motion.p
              className="text-base text-muted-foreground leading-relaxed max-w-xl border-l-2 border-primary/40 pl-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}>
              
              Engineering Intelligent Systems | Control &amp; Computing
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}>
              
              <a
                href="#projects"
                className="px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-neon-cyan transition-all duration-300 hover:scale-105 text-sm tracking-wide">
                
                View Projects
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 border border-border text-foreground font-semibold rounded-full hover:border-primary/60 hover:text-primary hover:bg-primary/5 transition-all duration-300 text-sm tracking-wide">
                
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Right: Profile photo + stat cards */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            {/* Profile photo */}
            <motion.div
              className="relative animate-float"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}>
              
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden neon-border border-2 shadow-neon-cyan relative">
                <AppImage
                  src="/my_photo.jpg"
                  alt="My photo"
                  fill
                  className="object-cover" />
                
              </div>
              {/* Orbit ring */}
              <div className="absolute -inset-4 rounded-full border border-primary/15 animate-orbit pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full shadow-neon-cyan" />
              </div>
              <div className="absolute -inset-8 rounded-full border border-accent/10 animate-counter-orbit pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-accent rounded-full" />
              </div>
            </motion.div>

            {/* Stat cards */}
            <div className="flex gap-3 flex-wrap justify-center">
              {statCards.map((card, i) =>
              <motion.div
                key={card.label}
                className="glass-card-strong rounded-xl px-4 py-3 text-center min-w-[90px] hover:border-primary/30 transition-all duration-300 hover:shadow-neon-cyan"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}>
                
                  <div className="text-lg mb-1">{card.icon}</div>
                  <div className={`text-xl font-bold ${card.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                    {card.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">{card.label}</div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}>
        
        <span className="text-xs text-muted-foreground font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent animate-pulse" />
      </motion.div>
    </section>);

}