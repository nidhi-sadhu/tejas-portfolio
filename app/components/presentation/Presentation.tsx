"use client";
import styles from './Presentation.module.css';

export default function Presentations() {
    const presentations = [
        {
            id: 1,
            title: "Contributed poster at The American Chemical Society national meeting, San Diego, CA. Mar 22-27, 2025.",
            authors: "Shah, T., Polara, H., Bhadran, A., Babanyinah, G., Wang, H., Gerik, G., Biewer, M. C., Torabifard, H., Stefan, M. C.",
            details: "(Sci-Mix, POLY Outstanding Poster Award)",
            year: 2025
        },
        {
            id: 2,
            title: "Contributed poster at The American Chemical Society national meeting, San Diego, CA. Mar 22-27, 2025.",
            authors: "Shah, T., Stefan, M. C., Torabifard, H.",
            details: "(Finalist NVIDIA GPU Poster Award)",
            year: 2025
        },
        {
            id: 3,
            title: "Contributed poster at The American Chemical Society national meeting, Denver, CO. Aug 18-22, 2024.",
            authors: "Shah, T., Torabifard, H.",
            details: "(Sci-Mix, Finalist NVIDIA GPU Poster Award)",
            year: 2024
        },
        {
            id: 4,
            title: "Contributed poster at The American Chemical Society national meeting, Denver, CO. Aug 18-22, 2024.",
            authors: "Shah, T., Polara, H., Babanyinah, G., Bhadran A., Wang, H., Biewer, M., Stefan, M. C.",
            details: "(Sci-Mix)",
            year: 2024
        },
        {
            id: 5,
            title: "AMBER Free Energy Workshop, San Diego Supercomputer Center, San Diego, CA. Aug 11-16, 2024.",
            authors: "Selected through a competitive application process.",
            details: "",
            year: 2024
        },
        {
            id: 6,
            title: "Contributed poster at The American Chemical Society national meeting, New Orleans, LA. Mar 16-21, 2024.",
            authors: "Shah, T., Torabifard, H.",
            details: "",
            year: 2024
        },
        {
            id: 7,
            title: "Contributed Poster at ACS Southwest regional meeting, Oklahoma City, OK. Nov 15 - 18, 2023.",
            authors: "Shah, T., Torabifard, H.",
            details: "",
            year: 2023
        },
        {
            id: 8,
            title: "Contributed lecture at Annual Meeting-in-Miniature, The American Chemical Society, DFW section, Stephenville, TX. Apr 23, 2023.",
            authors: "Shah, T., Stefan, M. C., Torabifard, H.",
            details: "(Awarded 3rd prize in polymer section)",
            year: 2023
        },
        {
            id: 9,
            title: "Contributed poster at The American Chemical Society national meeting, Indianapolis, IN. Mar 26 - 30, 2023.",
            authors: "Shah, T., Stefan, M. C., Torabifard, H.",
            details: "",
            year: 2023
        },
        {
            id: 10,
            title: "Contributed Poster at ACS Southwest regional meeting, Baton Rouge, LA. Nov 06 - 09, 2022.",
            authors: "Shah, T., Stefan, M. C.",
            details: "",
            year: 2022
        },
        {
            id: 11,
            title: "National Workshop on Characterization Techniques for Materials, Sardar Patel University, V. V. Nagar, INDIA. Mar 06 - 07, 2017.",
            authors: "",
            details: "",
            year: 2017
        },
        {
            id: 12,
            title: "Review Poster at International Science Symposium on Recent Trends in Science & Technology, Rajkot, INDIA. Feb 26 - 27, 2017.",
            authors: "Shah, T., Vasava, D. V.",
            details: "",
            year: 2017
        },
        {
            id: 13,
            title: "Contributed talk at Gujarat University Science Excellence Symposium, Ahmedabad, GJ, INDIA. Sep 26, 2015.",
            authors: "Shah, T.",
            details: "",
            year: 2015
        }
    ];

    return (
        <div className={styles.container}>
            {presentations.map((presentation) => (
                <div key={presentation.id} className={styles.presentationCard}>
                    <div className={styles.number}>{presentation.id}.</div>
                    <div className={styles.content}>
                        {presentation.title && (
                            <p className={styles.title}>{presentation.title}</p>
                        )}
                        {presentation.authors && (
                            <p className={styles.authors}>{presentation.authors}</p>
                        )}
                        {presentation.details && (
                            <p className={styles.details}>{presentation.details}</p>
                        )}
                    </div>
                    <div className={styles.year}>{presentation.year}</div>
                </div>
            ))}
        </div>
    );
}