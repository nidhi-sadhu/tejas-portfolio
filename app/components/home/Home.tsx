"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Home.module.css';
import Illustration from '../illustration/Illustration';

export default function HomePage() {
    const [currentTitle, setCurrentTitle] = useState(0);
    const titles = ["Computational Chemist", "Organic Chemist", "Polymer Chemist"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitle((prev) => (prev + 1) % titles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <div className={styles.textSection}>
                    <h1 className={styles.greeting}>HI There!</h1>
                    <h2 className={styles.name}>
                        I&apos;M <span className={styles.nameHighlight}>TEJAS SHAH</span>
                    </h2>
                    <div className={styles.titleContainer}>
                        <div className={styles.rotatingTitle}>
                            {titles.map((title, index) => (
                                <h3 key={index} className={`${styles.title} ${index === currentTitle ? styles.titleActive : ''}`}>
                                    {title}
                                </h3>
                            ))}
                        </div>
                    </div>
                    <p className={styles.description}>
                        Passionate about computational biochemistry, structural biology and drug discovery.
                        Exploring the intersection of biology and technology to advance scientific research.
                    </p>
                    {/* <div className={styles.buttonGroup}>
                        <a href="/documents/TVS_CV.pdf" download="TVS_CV.pdf" className={styles.btnPrimary}>
                            <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Download CV</span>
                        </a>
                    </div> */}
                </div>
                <Illustration />
            </div>
            <div className={styles.stickyBackground}>
                <Image src="/images/IMG_0499.png" alt="Molecular Structure" fill className={styles.backgroundImage} priority />
            </div>
        </div>
    );
}
