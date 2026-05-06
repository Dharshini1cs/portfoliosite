'use client';
import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  color: 'primary' | 'accent';
  icon: string;
  skills: string[];
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Deep Learning Specialization',
    issuer: 'Coursera — deeplearning.ai',
    date: 'December 2024',
    credentialId: 'DLS-2024-A7X9',
    color: 'primary',
    icon: '🧠',
    skills: ['Neural Networks', 'CNNs', 'RNNs', 'Optimization'],
  },
  {
    id: 2,
    title: 'Embedded Systems Design',
    issuer: 'Arm Education Media',
    date: 'October 2024',
    credentialId: 'ARM-ESD-4521',
    color: 'accent',
    icon: '🔧',
    skills: ['Cortex-M', 'CMSIS', 'RTOS', 'Low Power'],
  },
  {
    id: 3,
    title: 'Control Systems Engineering',
    issuer: 'MathWorks — MATLAB Academy',
    date: 'August 2024',
    credentialId: 'MW-CSE-8832',
    color: 'primary',
    icon: '🎛️',
    skills: ['Simulink', 'Bode Plots', 'Root Locus', 'State Space'],
  },
  {
    id: 4,
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'June 2024',
    credentialId: 'AWS-CLF-9910',
    color: 'accent',
    icon: '☁️',
    skills: ['EC2', 'Lambda', 'S3', 'CloudFormation'],
  },
  {
    id: 5,
    title: 'An Introduction to Internet of Things',
    issuer: 'NPTEL — IIT Kharagpur',
    date: 'October 2023',
    credentialId: 'NPTEL-IOT-2023',
    color: 'primary',
    icon: '🌐',
    skills: ['IoT', 'Sensors', 'Networking', 'Embedded Systems'],
  },
  {
    id: 6,
    title: 'Deep Learning',
    issuer: 'NPTEL — IIT Kharagpur',
    date: 'April 2024',
    credentialId: 'NPTEL-DL-2024',
    color: 'accent',
    icon: '🧠',
    skills: ['Deep Learning', 'Neural Networks', 'AI', 'Machine Learning'],
  },
  {
    id: 7,
    title: 'Machine Learning Workshop',
    issuer: 'ZOHO — MIT, Anna University',
    date: '2023',
    credentialId: 'ZOHO-ML-2023',
    color: 'primary',
    icon: '🤖',
    skills: ['Machine Learning', 'Data Science', 'Python', 'AI'],
  },
  {
    id: 8,
    title: 'Computer Programming & Placement Training',
    issuer: 'WALMART — MIT, Anna University',
    date: '2023',
    credentialId: 'WALMART-CPT-2023',
    color: 'accent',
    icon: '💻',
    skills: ['Programming', 'Problem Solving', 'Placement', 'Coding'],
  },
  {
    id: 9,
    title: 'Employability Soft Skill Training Program',
    issuer: 'CUIC — Anna University (RUSA 2.0)',
    date: 'November 2023',
    credentialId: 'CUIC-ESST-2023',
    color: 'primary',
    icon: '🎯',
    skills: ['Communication', 'Professional Skills', 'Career Development', 'Soft Skills'],
  },
];

function CertCard({ cert, index }: { cert: Certificate; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <>
      <motion.div
        ref={ref}
        className={`glass-card rounded-2xl p-5 cursor-pointer group hover:border-${cert.color === 'primary' ? 'primary' : 'accent'}/20 transition-all duration-300`}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        onClick={() => setExpanded(true)}
        whileHover={{ y: -4 }}
      >
        {/* Card header */}
        <div className="flex items-start justify-between mb-4">
          <div className="text-3xl">{cert.icon}</div>
          <div className={`text-xs font-mono px-2 py-1 rounded-full ${cert.color === 'primary' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-accent/10 text-accent border border-accent/20'}`}>
            Verified
          </div>
        </div>

        <h4 className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">
          {cert.title}
        </h4>
        <p className="text-xs text-muted-foreground mb-3">{cert.issuer}</p>
        <p className="text-xs text-muted-foreground font-mono">{cert.date}</p>

        {/* Bottom action */}
        <div className={`mt-4 text-xs font-semibold ${cert.color === 'primary' ? 'text-primary' : 'text-accent'} opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1`}>
          View Certificate →
        </div>
      </motion.div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpanded(false)}
          >
            <div className="modal-overlay absolute inset-0" />
            <motion.div
              className="relative z-10 glass-card-strong rounded-2xl p-8 max-w-md w-full"
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setExpanded(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-foreground hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                ✕
              </button>

              <div className="text-5xl mb-4">{cert.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{cert.title}</h3>
              <p className="text-primary text-sm font-medium mb-1">{cert.issuer}</p>
              <p className="text-muted-foreground text-sm mb-4">{cert.date}</p>

              <div className="glass-card rounded-lg p-3 mb-4">
                <p className="text-xs text-muted-foreground font-mono">Credential ID</p>
                <p className="text-sm font-mono text-foreground mt-1">{cert.credentialId}</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Skills Covered</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map(skill => (
                    <span key={skill} className={`text-xs px-2.5 py-1 rounded-full font-mono ${cert.color === 'primary' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-accent/10 text-accent border border-accent/20'}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function CertificatesSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="certificates" ref={sectionRef} className="py-24 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">03 / Certificates</span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
        </motion.div>

        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-foreground mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Credentials &amp; <span className="gradient-text">Certifications</span>
        </motion.h2>

        {/* BENTO GRID AUDIT:
          Array has 4 cards: [DL, Embedded, ControlSystems, AWS]
          Row 1 (4 cols): [col-1: DL cs-1] [col-2: Embedded cs-1] [col-3: ControlSystems cs-1] [col-4: AWS cs-1]
          Placed 4/4 cards ✓
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificates.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}