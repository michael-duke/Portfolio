import { useState, useEffect } from 'react';
import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import WorkGallery from '@/components/portfolio/WorkGallery';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Footer from '@/components/portfolio/Footer';
import ContactOverlay from '@/components/portfolio/ContactOverlay';
import CustomCursor from '@/components/portfolio/CustomCursor';

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    document.title = 'Portfolio | Michael Mesfin';
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      <Hero />
      <WorkGallery />
      <About />
      <Skills />
      <Footer onContactOpen={() => setContactOpen(true)} />
      <ContactOverlay
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}
