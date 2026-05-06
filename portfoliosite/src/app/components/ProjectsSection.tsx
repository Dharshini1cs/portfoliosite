'use client';
import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  imageAlt: string;
  tags: string[];
  github: string;
  demo?: string;
  span: string;
  accent: 'primary' | 'accent';
}

const projects: Project[] = [
{
  id: 1,
  title: 'Smart Home Energy Management System',
  shortDesc: 'Optimized household energy usage using IoT-based automation',
  fullDesc: 'Developed a smart home energy management system that monitors and controls energy consumption using IoT devices. Implemented automation strategies to reduce power usage and improve efficiency in real-time environments.',
  image: "https://images.unsplash.com/photo-1558002038-1055907df827",
  imageAlt: 'Smart home system with connected devices and energy monitoring dashboard',
  tags: ['IoT', 'Automation', 'Energy Management'],
  github: '#',
  demo: '#',
  span: 'lg:col-span-2',
  accent: 'primary'
},
{
  id: 2,
  title: 'Industrial Embedded System with AI & IoT',
  shortDesc: 'Integrated AI-driven automation in industrial embedded systems',
  fullDesc: 'Built an industrial-grade embedded system combining AI and IoT for real-time monitoring and predictive maintenance. Improved operational efficiency by automating data collection and analysis.',
  image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
  imageAlt: 'Industrial automation system with sensors and digital interface',
  tags: ['Embedded Systems', 'AI', 'IoT'],
  github: '#',
  demo: '#',
  span: 'lg:col-span-2',
  accent: 'accent'
},
{
  id: 3,
  title: 'Fraud Detection in Financial Transactions',
  shortDesc: 'Machine learning model to detect fraudulent transactions',
  fullDesc: 'Developed a fraud detection system using machine learning techniques to identify suspicious financial transactions. Implemented classification models to improve detection accuracy and reduce false positives.',
  image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
  imageAlt: 'Digital financial transaction monitoring with security indicators',
  tags: ['Machine Learning', 'Data Science', 'Python'],
  github: '#',
  demo: '#',
  span: 'lg:col-span-2',
  accent: 'primary'
},
{
  id: 4,
  title: 'Data Science using Python',
  shortDesc: 'Data analysis and visualization using Python libraries',
  fullDesc: 'Performed data analysis and visualization using Python libraries such as Pandas, NumPy, and Matplotlib. Extracted meaningful insights from datasets and built predictive models.',
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  imageAlt: 'Data analysis dashboard with graphs and charts on screen',
  tags: ['Python', 'Pandas', 'Data Analysis', 'Visualization'],
  github: '#',
  demo: '#',
  span: 'lg:col-span-2',
  accent: 'accent'
},
{
  id: 5,
  title: 'PCB Defect Detection using YOLOv5',
  shortDesc: 'Deep learning model for automated PCB defect detection',
  fullDesc: 'Designed a deep learning model using YOLOv5 to detect defects in printed circuit boards. Achieved high accuracy in identifying manufacturing defects, improving quality control in production.',
  image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
  imageAlt: 'Close-up of printed circuit board with inspection highlights',
  tags: ['Deep Learning', 'YOLOv5', 'Computer Vision'],
  github: '#',
  demo: '#',
  span: 'lg:col-span-2',
  accent: 'primary'
}];


function ProjectModal({ project, onClose }: {project: Project;onClose: () => void;}) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}>
      
      <div className="modal-overlay absolute inset-0" />
      <motion.div
        className="relative z-10 glass-card-strong rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}>
        
        <div className="relative h-48 overflow-hidden">
          <AppImage
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-white/20 transition-colors"
            aria-label="Close modal">
            
            ✕
          </button>
        </div>
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{project.fullDesc}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) =>
            <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono">
                {tag}
              </span>
            )}
          </div>
          <div className="flex gap-3 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-all">
              
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            {project.demo &&
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:shadow-neon-cyan transition-all">
              
                Live Demo →
              </a>
            }
          </div>
        </div>
      </motion.div>
    </motion.div>);

}

function ProjectCard({ project, index }: {project: Project;index: number;}) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [selected, setSelected] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: '-60px' });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 12;
    setTilt({ x, y });
  };

  return (
    <>
      <motion.div
        ref={cardRef}
        className={`${project.span} relative rounded-2xl overflow-hidden cursor-pointer group`}
        style={{ minHeight: project.span.includes('col-span-2') || project.span.includes('col-span-3') ? '280px' : '240px' }}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {setHovered(false);setTilt({ x: 0, y: 0 });}}
        onMouseMove={handleMouseMove}
        onClick={() => setSelected(true)}
        style={{
          transform: hovered ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` : 'perspective(800px) rotateX(0deg) rotateY(0deg)',
          transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          minHeight: project.span.includes('col-span-2') || project.span.includes('col-span-3') ? '280px' : '240px'
        }}>
        
        {/* Background image */}
        <AppImage
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105" />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className={`absolute inset-0 ${project.accent === 'primary' ? 'bg-primary/5' : 'bg-accent/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

        {/* Border glow on hover */}
        <div className={`absolute inset-0 rounded-2xl border ${project.accent === 'primary' ? 'border-primary/0 group-hover:border-primary/30' : 'border-accent/0 group-hover:border-accent/30'} transition-all duration-300`} />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.slice(0, 3).map((tag) =>
            <span key={tag} className={`text-xs px-2 py-0.5 rounded-full font-mono ${project.accent === 'primary' ? 'bg-primary/15 text-primary border border-primary/20' : 'bg-accent/15 text-accent border border-accent/20'}`}>
                {tag}
              </span>
            )}
          </div>
          <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{project.shortDesc}</p>
          <div className={`mt-3 text-xs font-semibold ${project.accent === 'primary' ? 'text-primary' : 'text-accent'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1`}>
            View Details →
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {selected &&
        <ProjectModal project={project} onClose={() => setSelected(false)} />
        }
      </AnimatePresence>
    </>);

}

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}>
          
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">02 / Projects</span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            What I&apos;ve <span className="gradient-text">built</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-base max-w-xl">
            From hardware controllers to full-stack applications — click any card to explore.
          </p>
        </motion.div>

        {/* BENTO GRID AUDIT:
           Array has 6 cards: [AIController(cs-2), EmbeddedVision(cs-1), SmartGrid(cs-1), RoboticArm(cs-1), MLPipeline(cs-1), WebDashboard(cs-3)]
           Row 1: [col-1+2: AIController cs-2] [col-3: EmbeddedVision cs-1]
           Row 2: [col-1: SmartGrid cs-1] [col-2: RoboticArm cs-1] [col-3: MLPipeline cs-1]
           Row 3: [col-1+2+3: WebDashboard cs-3]
           Placed 6/6 cards ✓
          */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((project, i) =>
          <ProjectCard key={project.id} project={project} index={i} />
          )}
        </div>
      </div>
    </section>);

}