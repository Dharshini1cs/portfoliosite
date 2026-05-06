'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';

const activities = [
{
  id: 1,
  title: 'Classical Dance',
  subtitle: 'Bharatanatyam — 12 years',
  desc: 'Trained in Bharatanatyam under Guru Savitha Krishnamurti. Performed at national cultural festivals and college events. Dance teaches me precision, timing, and the beauty of controlled movement.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12f7b107c-1767593645835.png",
  imageAlt: 'Classical Indian dance performance with dramatic stage lighting, dark background, colorful costume, expressive mudras',
  emoji: '💃',
  color: 'accent',
  tags: ['Performance', 'Classical Arts', '12 Years']
},
{
  id: 2,
  title: 'Robotics Club Lead',
  subtitle: 'IIT Bombay — Team Kratos',
  desc: 'Led a 15-member robotics team to compete in ABU Robocon 2024. Responsible for mechanical design, control systems, and team coordination. Our robot reached the national finals.',
  image: "https://images.unsplash.com/photo-1580613904454-091d7e60c051",
  imageAlt: 'Robotics competition with mechanical robot arm on arena floor, team members in background, bright venue lighting',
  emoji: '🤖',
  color: 'primary',
  tags: ['Leadership', 'Robotics', 'ABU Robocon']
},
{
  id: 3,
  title: 'Open Source Contributor',
  subtitle: 'ROS2, OpenCV, ArduPilot',
  desc: 'Active contributor to open-source robotics and CV projects. 300+ GitHub contributions, 2 merged PRs to ArduPilot, and maintainer of a small PID tuning library with 400+ stars.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11bc57644-1772175190337.png",
  imageAlt: 'Dark mode code editor on screen with colorful syntax highlighting, developer workspace, blue ambient lighting',
  emoji: '🌐',
  color: 'accent',
  tags: ['Open Source', '400+ Stars', 'Community']
},
{
  id: 4,
  title: 'Technical Writing',
  subtitle: 'Medium — 2,000+ Readers',
  desc: 'Write technical articles on control systems, embedded programming, and ML for engineers. Built an audience of 2,000+ readers with articles on PID tuning and FPGA design patterns.',
  image: "https://images.unsplash.com/photo-1578589335615-9e804277a5af",
  imageAlt: 'Person writing at desk with laptop, warm lighting, books in background, focused writing environment',
  emoji: '✍️',
  color: 'primary',
  tags: ['Writing', '2K Readers', 'Medium']
},
{
  id: 5,
  title: 'Chess Player',
  subtitle: 'Strategic Board Game Enthusiast',
  desc: 'Passionate chess player who enjoys the mental challenge of strategic thinking and planning. Chess has sharpened my analytical mindset, patience, and ability to think multiple steps ahead — skills that directly translate to problem-solving in engineering.',
  image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b",
  imageAlt: 'Chess board with pieces mid-game, dramatic lighting, wooden pieces on classic board',
  emoji: '♟️',
  color: 'accent',
  tags: ['Strategy', 'Chess', 'Critical Thinking']
},
{
  id: 6,
  title: 'Ball Badminton',
  subtitle: 'Court Sports & Team Play',
  desc: 'Active Ball Badminton player, a traditional Indian racquet sport requiring speed, agility, and sharp reflexes. Competing at college level has taught me teamwork, quick decision-making, and the importance of staying focused under pressure.',
  image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea",
  imageAlt: 'Badminton court with racquet and shuttlecock, sports action shot, indoor court lighting',
  emoji: '🏸',
  color: 'primary',
  tags: ['Sports', 'Ball Badminton', 'Team Play']
},
{
  id: 7,
  title: 'Throwball',
  subtitle: 'Team Sports & Athletics',
  desc: 'Regular Throwball player at college level. This fast-paced team sport has strengthened my coordination, communication, and competitive spirit. Being part of a team has taught me leadership, trust, and how to perform under pressure.',
  image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0",
  imageAlt: 'Team sport players on court, action shot, athletic competition, outdoor sports',
  emoji: '🏐',
  color: 'accent',
  tags: ['Sports', 'Throwball', 'Teamwork']
}];


export default function ExtracurricularSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="extracurricular" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}>
          
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">05 / Beyond Engineering</span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
        </motion.div>

        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}>
          
          Life <span className="gradient-text">outside the lab</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {activities?.map((act, i) =>
          <motion.div
            key={act?.id}
            className="relative rounded-2xl overflow-hidden group cursor-default"
            style={{ minHeight: '280px' }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}>
            
              {/* Background image */}
              <AppImage
              src={act?.image}
              alt={act?.imageAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105" />
            
              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
              {/* Color tint on hover */}
              <div className={`absolute inset-0 ${act?.color === 'primary' ? 'bg-primary/0 group-hover:bg-primary/8' : 'bg-accent/0 group-hover:bg-accent/8'} transition-all duration-500`} />
              {/* Border */}
              <div className={`absolute inset-0 rounded-2xl border ${act?.color === 'primary' ? 'border-primary/0 group-hover:border-primary/25' : 'border-accent/0 group-hover:border-accent/25'} transition-all duration-300`} />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="text-4xl">{act?.emoji}</div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {act?.tags?.map((tag) =>
                  <span key={tag} className={`text-xs px-2 py-0.5 rounded-full font-mono ${act?.color === 'primary' ? 'bg-primary/15 text-primary border border-primary/20' : 'bg-accent/15 text-accent border border-accent/20'}`}>
                        {tag}
                      </span>
                  )}
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{act?.title}</h4>
                  <p className={`text-xs font-semibold mb-2 ${act?.color === 'primary' ? 'text-primary' : 'text-accent'}`}>{act?.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{act?.desc}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}