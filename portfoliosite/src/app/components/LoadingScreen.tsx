'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }}
        >
          {/* Grid background */}
          <div className="absolute inset-0 bg-cyber-grid bg-grid-60 opacity-30" />

          {/* Glow orbs */}
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Orbit animation */}
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-orbit">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full shadow-neon-cyan" />
              </div>
              <div className="absolute inset-3 rounded-full border border-accent/20 animate-counter-orbit">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full" />
              </div>
              <div className="absolute inset-6 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-mono text-xs font-bold">PS</span>
              </div>
            </div>

            {/* Brand name */}
            <div className="text-center">
              <p className="font-mono text-xs text-muted-foreground tracking-[0.3em] uppercase mb-1">Initializing</p>
              <p className="text-foreground font-semibold text-lg tracking-widest">PortfolioSite</p>
            </div>

            {/* Progress bar */}
            <div className="w-48 h-0.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            <p className="font-mono text-xs text-muted-foreground">
              {Math.min(Math.round(progress), 100)}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}