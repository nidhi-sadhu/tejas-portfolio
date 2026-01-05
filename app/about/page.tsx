"use client";

import { Mail, Twitter, GraduationCap } from 'lucide-react';
import { LinkedinIcon } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
    return (
        <>
            <section id="about" className={styles.aboutSection}>
                <div className={styles.container}>
                    <div className={styles.titleWrapper}>
                        <h2 className={styles.sectionTitle}>About</h2>
                        <div className={styles.titleUnderline}></div>
                    </div>
                    <div className={styles.aboutContent}>
                        <div className={styles.photoContainer}>
                            <div className={styles.photoWrapper}>
                                <img src="/images/img_avatar.jpg" alt="Tejas Shah" className={styles.profilePhoto} />
                            </div>
                            <div className={styles.socialLinks}>
                                <a
                                    href="https://linkedin.com/in/tejas-shah02/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label="LinkedIn"
                                >
                                    <LinkedinIcon className={styles.socialIcon} />
                                </a>
                                <a
                                    href="mailto:t.shah002@gmail.com"
                                    className={styles.socialLink}
                                    aria-label="Email"
                                >
                                    <Mail className={styles.socialIcon} />
                                </a>
                                <a
                                    href="https://scholar.google.com/citations?user=f5-82KUAAAAJ&hl=en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label="Google Scholar"
                                >
                                    <GraduationCap className={styles.socialIcon} />
                                </a>
                                <a
                                    href="https://twitter.com/yourprofile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label="Twitter"
                                >
                                    <Twitter className={styles.socialIcon} />
                                </a>
                            </div>
                        </div>
                        <div className={styles.textContent}>
                            <div className={styles.description}>
                                <p>
                                    I started as a Organic/Polymer Chemist turned into Computational Chemist.
                                    During my PhD at UT Dallas, I performed Molecular dynamics simulations on polymeric micelles to develop novel drug delivery systems. I also simulated nucleosome core particles to understand underlying mechanisms of histone posttranslational modifications. I specialize in Molecular Dynamics Simulations, Homology Modeling, Force Field Development as well as Data Analysis and Visualization.
                                </p>

                                <p>
                                    I am currently Postdoctoral Researcher at Michigan State University working at the intersection of Molecular Simulations and CryoEM data processing. I use advanced computational tools to resolve complex protein structures as well as understand protein allostery and inhibitory mechanisms. My goal is to leverage computational chemistry techniques to contribute to advancements in drug discovery.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}