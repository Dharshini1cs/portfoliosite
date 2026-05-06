'use client';
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';


const skills = [
  { name: 'Control Systems', level: 92 },
  { name: 'Python / ML', level: 88 },
  { name: 'C / C++ Embedded', level: 85 },
  { name: 'MATLAB / Simulink', level: 90 },
];

const expertise = [
  { icon: '🎛️', title: 'Control Systems', desc: 'PID, State Space, Robust Control' },
  { icon: '🤖', title: 'Embedded Systems', desc: 'Arduino, STM32, RTOS, FPGAs' },
  { icon: '🧠', title: 'AI & ML', desc: 'PyTorch, TensorFlow, Scikit-learn' },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setWidth(level), delay * 1000);
      return () => clearTimeout(t);
    }
  }, [inView, level, delay]);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs font-mono text-primary">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className="skill-bar-fill"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={sectionRef} className="py-24 section-glow relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-grid-60 opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">01 / About</span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio + photo */}
          <div className="space-y-8">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6">
                Building the future<br />
                <span className="gradient-text">one system at a time</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                I&apos;m Aryan Sharma, a final-year B.Tech student specializing in Electrical Engineering with a minor in Computer Science at IIT Bombay. My work sits at the intersection of intelligent control, embedded hardware, and software systems.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                From designing PID controllers for autonomous drones to building real-time computer vision pipelines on FPGAs, I&apos;m passionate about making machines smarter and more responsive. I bring the same rigor to software — building full-stack applications with clean architecture.
              </p>
            </motion.div>

            {/* Expertise grid */}
            <motion.div
              className="grid grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {expertise.map(item => (
                <div
                  key={item.title}
                  className="glass-card rounded-xl p-4 hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Skill bars */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">Technical Proficiency</h3>
            <div className="space-y-5">
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={0.1 * i} />
              ))}
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-border">
              {[
                { label: 'Years Coding', value: '4+' },
                { label: 'Papers Read', value: '50+' },
                { label: 'Hackathons', value: '6' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills categories */}
        <motion.div
          id="skills"
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {[
            {
              category: 'Programming',
              color: 'primary',
              items: ['Python', 'C/C++', 'MATLAB', 'JavaScript', 'TypeScript', 'Verilog', 'Rust'],
            },
            {
              category: 'Control & Hardware',
              color: 'accent',
              items: ['PID Control', 'State Space', 'FPGA Design', 'STM32', 'Arduino', 'ROS', 'Simulink'],
            },
            {
              category: 'Tools & Platforms',
              color: 'primary',
              items: ['Git', 'Docker', 'Linux', 'SOLIDWORKS', 'LTSpice', 'Jupyter', 'VS Code'],
            },
          ].map(cat => (
            <div key={cat.category} className="glass-card rounded-2xl p-6 hover:border-primary/20 transition-all duration-300">
              <h4 className={`text-sm font-semibold mb-4 ${cat.color === 'primary' ? 'text-primary' : 'text-accent'} font-mono tracking-wider uppercase`}>
                {cat.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(item => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-muted-foreground border border-border hover:border-primary/30 hover:text-foreground transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}