"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import HomePage from "./components/home/Home";
import About from "./about/page";
import Publications from "./publications/page";
import CV from "./cv/page";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 92;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    }

    const handleScroll = () => {
      const sections = ['home', 'about', 'publications', 'cv'];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            const newPath = sectionId === 'home' ? '/' : `/#${sectionId}`;
            if (window.location.hash !== `#${sectionId}` && sectionId !== 'home') {
              window.history.replaceState(null, '', newPath);
            } else if (sectionId === 'home' && window.location.hash) {
              window.history.replaceState(null, '', '/');
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.90) 50%, rgba(255, 255, 255, 0.95) 100%)', zIndex: 1 }}></div>
        <Image src="/images/home_page.png" alt="Molecular Structure Background" fill style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.25 }} priority />
      </div>

      <section id="home" style={{ position: 'relative', zIndex: 1 }}>
        <HomePage />
      </section>

      <section id="about" style={{ position: 'relative', zIndex: 1 }}>
        <About />
      </section>

      <section id="publications" style={{ position: 'relative', zIndex: 1 }}>
        <Publications />
      </section>

      <section id="cv" style={{ position: 'relative', zIndex: 1 }}>
        <CV />
      </section>
    </>
  );
}