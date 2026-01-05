"use client";
import { useState, useEffect, useRef } from 'react';
import styles from './CV.module.css';
import { GraduationCap, Briefcase, Code, Award, Presentation } from 'lucide-react';
import Education from '../components/education/Education';
import Experience from '../components/experience/Experience';
import Skills from '../components/skills/Skills';
import Presentations from '../components/presentation/Presentation';
import Awards from '../components/awards/Awards';

export default function CV() {
    const [activeSection, setActiveSection] = useState('experience');
    const mainContentRef = useRef<HTMLDivElement>(null);

    const menuItems = [
        { id: 'experience', label: 'Experience', icon: Briefcase },
        { id: 'education', label: 'Education', icon: GraduationCap },
        { id: 'skills', label: 'Skills', icon: Code },
        { id: 'awards', label: 'Awards', icon: Award },
        { id: 'presentation', label: 'Presentations', icon: Presentation }
    ];

    useEffect(() => {
        const mainContent = mainContentRef.current;
        if (!mainContent) return;

        const handleScroll = () => {
            const sections = menuItems.map(item => item.id);

            const sectionElements = sections
                .map(id => {
                    const element = document.getElementById(id);
                    return element ? { id, element } : null;
                })
                .filter((item): item is { id: string; element: HTMLElement } => item !== null);

            if (sectionElements.length === 0) return;

            const containerTop = mainContent.getBoundingClientRect().top;

            let currentSection = sections[0];

            for (const { id, element } of sectionElements) {
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top - containerTop;

                if (elementTop <= 100 && elementTop > -element.offsetHeight + 100) {
                    currentSection = id;
                }
            }

            setActiveSection(currentSection);
        };

        mainContent.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => mainContent.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        const mainContent = mainContentRef.current;

        if (element && mainContent) {
            const containerTop = mainContent.getBoundingClientRect().top;
            const elementTop = element.getBoundingClientRect().top;
            const offset = 20;

            const scrollPosition = mainContent.scrollTop + (elementTop - containerTop) - offset;

            mainContent.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        } else if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className={styles.cvSection}>
            <div className={styles.container}>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.pageTitle}>CV</h2>
                    <div className={styles.titleUnderline}></div>
                </div>
                <div className={styles.cvLayout}>
                    <aside className={styles.sideNav}>
                        <nav className={styles.navMenu}>
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`${styles.navItem} ${activeSection === item.id ? styles.navItemActive : ''}`}
                                        type="button"
                                    >
                                        <Icon className={styles.navIcon} />
                                        <span className={styles.navLabel}>{item.label}</span>
                                    </button>
                                );
                            })}
                        </nav>
                    </aside>

                    <main className={styles.mainContent} ref={mainContentRef}>
                        <div id="experience" className={styles.section}>
                            <Experience />
                        </div>

                        <div id="education" className={styles.section}>
                            <Education />
                        </div>

                        <div id="skills" className={styles.section}>
                            <Skills />
                        </div>

                        <div id="awards" className={styles.section}>
                            <Awards />
                        </div>

                        <div id="presentation" className={styles.section}>
                            <Presentations />
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
}