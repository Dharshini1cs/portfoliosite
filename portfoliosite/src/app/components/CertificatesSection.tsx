'use client';
import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  color: 'primary' | 'accent';
  icon: string;
  link?: string;
  skills: string[];
   credentialUrl?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'An Introduction to Internet of Things',
    issuer: 'NPTEL — IIT Kharagpur',
    date: 'October 2023',
    credentialId: 'NPTEL-IOT-2023',
    credentialUrl: 'https://drive.google.com/file/d/1WrF0jpm6IkVMQfmsNu0qDBfkyNi5J5z3/view?usp=drive_link',
    color: 'primary',
    icon: '🌐',
    skills: ['IoT', 'Sensors', 'Networking', 'Embedded Systems'],
  },
  {
    id: 2,
    title: 'Deep Learning',
    issuer: 'NPTEL — IIT Kharagpur',
    credentialUrl: 'https://drive.google.com/file/d/17eIB6R3IsW56lq3XA78L38gOOJkBTcJI/view?usp=drive_link',
    date: 'April 2024',
    credentialId: 'NPTEL-DL-2024',
    color: 'accent',
    icon: '🧠',
    skills: ['Deep Learning', 'Neural Networks', 'AI', 'Machine Learning'],
  },
  {
    id: 3,
    title: 'Machine Learning Workshop',
    issuer: 'ZOHO — MIT, Anna University',
    credentialUrl: 'https://drive.google.com/file/d/1TqvB8NuX1fN0qwDPvoYQWxdBReVmzjpI/view?usp=drive_link',
    date: '2023',
    credentialId: 'ZOHO-ML-2023',
    color: 'primary',
    icon: '🤖',
    skills: ['Machine Learning', 'Data Science', 'Python', 'AI'],
  },
  {
    id: 4,
    title: 'Computer Programming & Placement Training',
    issuer: 'WALMART — MIT, Anna University',
    credentialUrl: 'https://drive.google.com/file/d/1-6zhRs0v8YC87CQ4dDV-heNQj8hBc0ZV/view?usp=drive_link',
    date: '2023',
    credentialId: 'WALMART-CPT-2023',
    color: 'accent',
    icon: '💻',
    skills: ['Programming', 'Problem Solving', 'Placement', 'Coding'],
  },
  {
    id: 5,
    title: 'Employability Soft Skill Training Program',
    issuer: 'CUIC — Anna University (RUSA 2.0)',
    credentialUrl: 'https://drive.google.com/file/d/1lPjMNQy_Kx9fOCs_YILxqBLNSIjMktKl/view?usp=drive_link',
    date: 'November 2023',
    credentialId: 'CUIC-ESST-2023',
    color: 'primary',
    icon: '🎯',
    skills: ['Communication', 'Professional Skills', 'Career Development', 'Soft Skills'],
  },
];

function CertCard({ cert, index }: { cert: Certificate; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const borderColor = cert.color === 'primary' ? 'border-primary' : 'border-accent';
  const bgColor = cert.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent';

  return (
    <>
      <motion.div
        ref={ref}
        className={`glass-card rounded-2xl p-6 cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-transparent hover:${borderColor}/30`}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.08 }}
        onClick={() => setExpanded(true)}
      >
        <div className="flex items-start justify-between mb-5">
          <div className="text-4xl transition-transform group-hover:scale-110 duration-300">
            {cert.icon}
          </div>

          <div className={`text-xs font-mono px-3 py-1 rounded-full border ${bgColor}`}>
            Verified
          </div>
        </div>

        <h4 className="font-semibold text-lg leading-tight mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {cert.title}
        </h4>

        <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
        <p className="text-xs text-muted-foreground font-mono">{cert.date}</p>

        <div className="mt-6 flex items-center gap-2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          <span className={cert.color === 'primary' ? 'text-primary' : 'text-accent'}>
            View Details
          </span>
          {cert.credentialUrl && <ExternalLink size={16} />}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpanded(false)}
          >
            <motion.div
              className="relative z-10 glass-card-strong rounded-3xl p-8 max-w-lg w-full"
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setExpanded(false)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="text-6xl mb-6">{cert.icon}</div>

              <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
              <p className="text-primary font-medium">{cert.issuer}</p>
              <p className="text-muted-foreground mb-6">{cert.date}</p>

              <div className="mb-6 p-4 rounded-2xl bg-black/30">
                <p className="uppercase text-xs tracking-widest text-muted-foreground mb-1">Credential ID</p>
                <p className="font-mono text-foreground">{cert.credentialId}</p>
              </div>

          {cert.credentialUrl && (
  <a
    href={cert.credentialUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-white font-medium py-3.5 rounded-2xl transition-all mb-6"
  >
    View/Download Certificate
    <ExternalLink size={18} />
  </a>
)}

              <div>
                <p className="uppercase text-xs tracking-widest text-muted-foreground mb-3">Skills Covered</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-4 py-2 rounded-full font-medium ${bgColor}`}
                    >
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
    <section id="certificates" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
        >
          <span className="font-mono text-xs tracking-[0.125em] text-primary uppercase">03 • Certifications</span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
        </motion.div>

        <motion.h2
          className="text-5xl sm:text-6xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          Credentials &amp; <span className="gradient-text">Certifications</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {certificates.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
