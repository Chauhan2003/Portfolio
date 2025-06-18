import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { MatrixBackground } from '@/components/ScrollAnimations';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative">
      <MatrixBackground />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
