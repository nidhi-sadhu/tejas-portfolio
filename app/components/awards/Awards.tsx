"use client";
import styles from './Awards.module.css';
import { Award } from 'lucide-react';

export default function Awards() {
    const awards = [
        {
            id: 1,
            title: "Finalist, NVIDIA GPU Poster Award - American Chemical Society National Meeting Spring 2025",
            year: 2025
        },
        {
            id: 2,
            title: "POLY Outstanding Poster Award - American Chemical Society National Meeting Spring 2025",
            year: 2025
        },
        {
            id: 3,
            title: "PROM Fellow, National Academy of Academic Exchange (NAWA), Poland",
            year: 2025
        },
        {
            id: 4,
            title: "Finalist, NVIDIA GPU Poster Award - American Chemical Society National Meeting Fall 2024",
            year: 2024
        },
        {
            id: 5,
            title: "Research and Travel Grant Award - Royal Society of Chemistry",
            year: 2023
        },
        {
            id: 6,
            title: "School of Natural Science and Mathematics Travel Award – UTD",
            year: 2023
        },
        {
            id: 7,
            title: "Graduate Research and Cancer Research Fellowship – Office of Research and Innovation, UTD",
            year: 2023
        },
        {
            id: 8,
            title: "Awarded third prize for oral presentations 55th meeting in miniature – ACS DFW section",
            year: 2023
        },
        {
            id: 9,
            title: "Betty and Gifford Johnson Travel Grant Award – Office of Graduate Education, UTD",
            year: 2023
        },
        {
            id: 10,
            title: "Orator 2020 award on departmental seminar talk – Department of Chemistry, UTD",
            year: 2020
        },
        {
            id: 11,
            title: "Financial support to apply for admission for PhD in chemistry at USA – Dr. Rohitkumar Vora",
            year: 2019
        },
        {
            id: 12,
            title: "Gold Medal for highest marks among all the students – Bhavan's Sheth R. A. College of Science",
            year: 2016
        },
        {
            id: 13,
            title: "Awarded second prize for the presentation at the Science Excellence Symposium",
            year: 2015
        },
        {
            id: 14,
            title: "Monetary support for graduate education – Shree Modasa Ekda Dasha Khadayta Kelvani Mandal",
            year: 2014
        },
        {
            id: 15,
            title: "Scholarship for Undergraduate Education – Shree Modasa Ekda Dasha Khadayta Kelvani Mandal",
            year: 2012
        }
    ];

    return (
        <>
            <div className={styles.container}>
                {awards.map((award) => (
                    <div key={award.id} className={styles.awardItem}>
                        <Award className={styles.icon} />
                        <div className={styles.content}>
                            <p className={styles.title}>{award.title}</p>
                        </div>
                        <span className={styles.year}>{award.year}</span>
                    </div>
                ))}
            </div>
        </>

    );
}