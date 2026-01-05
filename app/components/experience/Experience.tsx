"use client";
import styles from './Experience.module.css';

export default function Experience() {
    const experiences = [
        {
            id: 1,
            title: "Postdoctoral Research Associate",
            institution: "Michigan State University",
            advisor: "Dr. Alex Dickson & Dr. Ben Orlando, Department of Biochemistry & Molecular Biology",
            location: "East Lansing, MI",
            startDate: "August 2025",
            endDate: "Present",
            current: true
        },
        {
            id: 2,
            title: "Graduate Assistant (Teaching/Research Assistant)",
            institution: "The University of Texas at Dallas",
            location: "Richardson, TX",
            startDate: "Aug 2019",
            endDate: "Jul 2025",
            current: false
        },
        {
            id: 3,
            title: "PROM Fellow",
            institution: "Nicolaus Copernicus University",
            advisor: "Dr. Jakub Rydzewski, Assistant Professor, Faculty of Physics, Astronomy and Informatics",
            location: "Toruń, Poland",
            startDate: "Feb 2025",
            endDate: "Mar 2025",
            current: false
        },
        {
            id: 4,
            title: "Intern, R&D Materials Engineering",
            institution: "Alcon Laboratories Ltd",
            manager: "Dr. Huayun Yu, Surgical Devices Materials Engineering",
            location: "Fort Worth, TX",
            startDate: "May 2023",
            endDate: "Aug 2023",
            current: false
        },
        {
            id: 5,
            title: "Trainee, Analytical Development Laboratory",
            institution: "Dishman Pharmaceuticals and Chemicals Ltd",
            location: "Ahmedabad, India",
            startDate: "Jul 2016",
            endDate: "Sep 2016",
            current: false
        }
    ];

    return (
        <div className={styles.container}>
            {experiences.map((exp) => (
                <div key={exp.id} className={`${styles.expCard} ${exp.current ? styles.current : ''}`}>
                    <div className={styles.content}>
                        <div className={styles.leftColumn}>
                            <h3 className={styles.title}>{exp.title}</h3>
                            <p className={styles.institution}>{exp.institution}</p>
                            {exp.advisor && (
                                <p className={styles.advisor}>
                                    <span className={styles.advisorLabel}>Advisor –</span> {exp.advisor}
                                </p>
                            )}
                            {exp.manager && (
                                <p className={styles.manager}>
                                    <span className={styles.managerLabel}>Manager –</span> {exp.manager}
                                </p>
                            )}
                        </div>
                        <div className={styles.rightColumn}>
                            <p className={styles.dateRange}>
                                {exp.startDate} – {exp.endDate}
                            </p>
                            <p className={styles.location}>{exp.location}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}