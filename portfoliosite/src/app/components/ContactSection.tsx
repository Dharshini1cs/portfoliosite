'use client';
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ContactSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const socials = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dharshini-chandrasekaran-sivakumar-3a719128b',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      href: 'dharshin2020@gmail.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">06 / Contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Text + socials */}
          <motion.div
            className="lg:col-span-2 flex flex-col justify-between gap-8"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Let&apos;s <span className="gradient-text">connect</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                Open to internships, research collaborations, and interesting engineering problems. Response time: under 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Find me on</p>
              <div className="flex gap-4">
                {socials.map(social => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={social.name}
                    className="w-11 h-11 glass-card rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-neon-cyan transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <div className="glass-card rounded-xl p-4">
                <p className="text-xs text-muted-foreground font-mono mb-1">Direct email</p>
                <p className="text-sm text-primary font-medium">dharshin2020@gmail.com</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                className="glass-card-strong rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center gap-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="text-5xl">🚀</div>
                <h3 className="text-xl font-bold text-foreground">Message sent!</h3>
                <p className="text-muted-foreground text-sm">I&apos;ll get back to you within 24 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-2 text-xs text-primary font-mono hover:underline"
                >
                  Send another →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card-strong rounded-2xl p-6 sm:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Your Name "
                      className="w-full bg-white/[0.03] border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="Your Email"
                      className="w-full bg-white/[0.03] border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    placeholder="Write Here"
                    className="w-full bg-white/[0.03] border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Write Here"
                    className="w-full bg-white/[0.03] border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-neon-cyan transition-all duration-300 hover:scale-[1.02] text-sm tracking-wide"
                >
                  Send Message →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}