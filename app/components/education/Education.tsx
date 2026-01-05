"use client";
import styles from './Education.module.css';

export default function Education() {
    const education = [
        {
            id: 1,
            institution: "The University of Texas at Dallas",
            degree: "Doctor of Philosophy (Ph.D.), Computational and Organic Chemistry",
            advisor: "Dr. Mihaela C. Stefan, Co-advisor: Dr. Hedieh Torabifard",
            dissertation: "Multiscale Investigation of Highly Dynamic Systems: Polymeric Micelle for Drug Delivery Applications and Histone Tail Modifications",
            location: "Richardson, TX",
            startDate: "Aug 2019",
            endDate: "Jul 2025",
            current: false
        },
        {
            id: 2,
            institution: "Gujarat University",
            degree: "Master of Science (M.Sc.), Organic Chemistry",
            award: "Recipient of the Gold medal for obtaining the highest score in the class",
            location: "Ahmedabad, India",
            startDate: "Jul 2014",
            endDate: "Jun 2016",
            current: false
        },
        {
            id: 3,
            institution: "Gujarat University",
            degree: "Bachelor of Science (B.Sc.), Chemistry",
            location: "Ahmedabad, India",
            startDate: "Aug 2011",
            endDate: "Jun 2014",
            current: false
        }
    ];

    return (
        <div className={styles.container}>
            {education.map((edu) => (
                <div
                    key={edu.id}
                    className={`${styles.eduCard} ${edu.current ? styles.current : ''}`}
                >
                    <div className={styles.content}>
                        <div className={styles.leftColumn}>
                            <h3 className={styles.institution}>{edu.institution}</h3>
                            <p className={styles.degree}>{edu.degree}</p>
                            {edu.advisor && (
                                <p className={styles.advisor}>
                                    <span className={styles.advisorLabel}>Advisor:</span> {edu.advisor}
                                </p>
                            )}
                            {edu.dissertation && (
                                <p className={styles.dissertation}>
                                    <span className={styles.dissertationLabel}>Dissertation Title:</span> {edu.dissertation}
                                </p>
                            )}
                            {edu.award && (
                                <p className={styles.award}>{edu.award}</p>
                            )}
                        </div>
                        <div className={styles.rightColumn}>
                            <p className={styles.location}>{edu.location}</p>
                            <p className={styles.dateRange}>
                                {edu.startDate} – {edu.endDate}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}