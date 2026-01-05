"use client";
import { useState, useEffect, useRef } from 'react';
import Logo from '../logo/Logo';
import styles from './Header.module.css';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isProgrammaticScroll = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            if (isProgrammaticScroll.current) return;

            const sections = ['home', 'about', 'publications', 'cv'];
            const scrollPosition = window.scrollY + 150;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        isProgrammaticScroll.current = true;
        setActiveSection(sectionId);
        setMobileMenuOpen(false);

        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 92;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

            setTimeout(() => {
                isProgrammaticScroll.current = false;
            }, 1000);
        } else {
            isProgrammaticScroll.current = false;
        }
    };

    const isActive = (section: string) => activeSection === section;

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.headerContent}>
                <div className={styles.logoSection}>
                    <div className={styles.logoWrapper}>
                        <Logo />
                    </div>
                    <button onClick={() => scrollToSection('home')} className={styles.nameLink}>
                        <h1 className={styles.name}>TEJAS SHAH</h1>
                    </button>
                </div>

                <nav className={styles.nav}>
                    <button onClick={() => scrollToSection('about')} className={`${styles.navLink} ${isActive('about') ? styles.navLinkActive : ''}`}>
                        ABOUT
                    </button>
                    <button onClick={() => scrollToSection('publications')} className={`${styles.navLink} ${isActive('publications') ? styles.navLinkActive : ''}`}>
                        PUBLICATIONS
                    </button>
                    <button onClick={() => scrollToSection('cv')} className={`${styles.navLink} ${isActive('cv') ? styles.navLinkActive : ''}`}>
                        CV
                    </button>
                </nav>

                <button className={styles.mobileMenuButton} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu" aria-expanded={mobileMenuOpen}>
                    {mobileMenuOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    )}
                </button>
            </div>

            <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.mobileNavOpen : ''}`}>
                <button onClick={() => scrollToSection('about')} className={`${styles.mobileNavLink} ${isActive('about') ? styles.mobileNavLinkActive : ''}`}>
                    ABOUT
                </button>
                <button onClick={() => scrollToSection('publications')} className={`${styles.mobileNavLink} ${isActive('publications') ? styles.mobileNavLinkActive : ''}`}>
                    PUBLICATIONS
                </button>
                <button onClick={() => scrollToSection('cv')} className={`${styles.mobileNavLink} ${isActive('cv') ? styles.mobileNavLinkActive : ''}`}>
                    CV
                </button>
            </div>
        </header>
    );
}