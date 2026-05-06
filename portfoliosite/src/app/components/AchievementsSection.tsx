'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const achievements = [
  {
  icon: '🥇',
  title: 'Academic Execellence',
  subtitle: 'First Class with Distinction',
  desc: 'Secured 1st rank in Bachelors degree with First Class and Distinction, demonstrating outstanding academic performance.',
  tag: 'Academics',
  color: 'primary',
  year: '2021 - 2025',
  },
  {
  
    icon: '🥈',
    title: 'Debug IT Hackathon',
    subtitle: '2nd Prize Winner',
    desc: 'Our team secured 2nd prize in the "Debug IT" Hackathon organized by Edveon Technologies, showcasing strong problem-solving and development skills.',
    tag: 'Hackathon',
    color: 'accent',
    year: '2024'

  },
  {
    icon: '🥉',
    title: 'ISRO SHAR Quiz Competition',
    subtitle: '3rd Prize Winner',
    desc: 'Won 3rd prize in the quiz competition organized by SHAR, ISRO at Sriharikota, demonstrating strong knowledge in space science and technology.',
    tag: 'Quiz',
    color: 'primary',
    year: '2023'
  },
];

export default function AchievementsSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="achievements" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-grid-60 opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">04 / Achievements</span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
        </motion.div>

        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Awards &amp; <span className="gradient-text">Recognition</span>
        </motion.h2>

        {/* BENTO GRID AUDIT:
          Array has 5 cards: [Hackathon, Paper, DRDO, Scholarship, GSoC]
          Row 1 (3 cols desktop): [col-1: Hackathon cs-1] [col-2: Paper cs-1] [col-3: DRDO cs-1]
          Row 2 (3 cols desktop): [col-1: Scholarship cs-1] [col-2: GSoC cs-2]
          Placed 5/5 cards ✓
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements?.map((ach, i) => (
            <motion.div
              key={ach?.title}
              className={`glass-card rounded-2xl p-6 group hover:border-${ach?.color === 'primary' ? 'primary' : 'accent'}/20 transition-all duration-300 relative overflow-hidden ${i === 4 ? 'sm:col-span-2 lg:col-span-2' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Background glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${ach?.color === 'primary' ? 'bg-primary/5' : 'bg-accent/5'} blur-[40px] rounded-full pointer-events-none`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{ach?.icon}</div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${ach?.color === 'primary' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-accent/10 text-accent border border-accent/20'}`}>
                      {ach?.tag}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">{ach?.year}</span>
                  </div>
                </div>

                <h4 className="font-bold text-foreground text-base mb-1 group-hover:text-primary transition-colors">
                  {ach?.title}
                </h4>
                <p className={`text-xs font-semibold mb-3 ${ach?.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                  {ach?.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {ach?.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}