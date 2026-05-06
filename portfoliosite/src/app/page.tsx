import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import CertificatesSection from '@/app/components/CertificatesSection';
import AchievementsSection from '@/app/components/AchievementsSection';
import ExtracurricularSection from '@/app/components/ExtracurricularSection';
import ContactSection from '@/app/components/ContactSection';
import CustomCursor from '@/app/components/CustomCursor';
import LoadingScreen from '@/app/components/LoadingScreen';

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Header />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CertificatesSection />
        <AchievementsSection />
        <ExtracurricularSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}