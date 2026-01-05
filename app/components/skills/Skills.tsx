"use client";
import styles from './Skills.module.css';
import { Code, Microscope } from 'lucide-react';

export default function Skills() {
    const skillCategories = [
        {
            id: 1,
            title: "Computational:",
            icon: Code,
            sections: [
                {
                    subtitle: "MOLECULAR DYNAMICS SIMULATIONS:",
                    skills: ["AMBER", "CPPTRAJ", "tLeap", "Antechamber", "Packmol", "VMD"]
                },
                {
                    subtitle: "FORCE FIELD DEVELOPMENT:",
                    skills: ["Gaussian16", "PyRED"]
                },
                {
                    subtitle: "HOMOLOGY MODELING:",
                    skills: ["Swiss Modeller", "PyMOL"]
                },
                {
                    subtitle: "PROGRAMMING LANGUAGES AND PACKAGES:",
                    skills: ["Bash", "Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "SciPy", "Scikit-learn", "GNUPLOT", "MDTraj", "MDAnalysis", "PyTorch", "TensorFlow"]
                }
            ]
        },
        {
            id: 2,
            title: "Characterization Techniques:",
            icon: Microscope,
            sections: [
                {
                    subtitle: "ADVANCE MATERIALS CHARACTERIZATION:",
                    skills: ["DSC", "TGA", "DLS"]
                },
                {
                    subtitle: "SPECTROSCOPIC TECHNIQUES:",
                    skills: ["NMR", "UV-Vis", "FT-IR", "ATR-IR", "MS", "Fluorescence Spectroscopy"]
                },
                {
                    subtitle: "CHROMATOGRAPHY TECHNIQUES:",
                    skills: ["Column Chromatography", "HPLC", "GC", "SEC"]
                },
                {
                    subtitle: "MICROSCOPY TECHNIQUES:",
                    skills: ["TEM", "SEM", "CLSM", "Optical Microscopy"]
                }
            ]
        }
    ];

    return (
        <div className={styles.container}>
            {skillCategories.map((category) => {
                const Icon = category.icon;
                return (
                    <div key={category.id} className={styles.categoryCard}>
                        {/* Category Header */}
                        <div className={styles.categoryHeader}>
                            <Icon className={styles.categoryIcon} />
                            <h3 className={styles.categoryTitle}>{category.title}</h3>
                        </div>

                        {/* Sections */}
                        <div className={styles.sections}>
                            {category.sections.map((section, index) => (
                                <div key={index} className={styles.section}>
                                    <h4 className={styles.sectionTitle}>{section.subtitle}</h4>
                                    <div className={styles.skillTags}>
                                        {section.skills.map((skill, skillIndex) => (
                                            <span key={skillIndex} className={styles.skillTag}>
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}