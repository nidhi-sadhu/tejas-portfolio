"use client";
import styles from "./Publications.module.css";

export default function Publications() {
  const publications = [
    {
      id: 16,
      title:
        "Decoding the Conformational Dynamics and Hyperactivity of Histone H3K36 N-Methyltransferase in Oncogenic Mutations via tICA and Markov State Modeling",
      authors: "Shah, T., Heidari, S., Rydzewski, J., and Torabifard, H.",
      venue: "Journal of Chemical Information and Modeling 66 (20), 13482-13492",
      year: 2026,
      link: "https://pubs.acs.org/jcisd8/article-abstract/66/20/13482/5443622/Decoding-Conformational-Dynamics-and-Hyperactivity",
    },
    {
      id: 15,
      title:
        "Structure and conformational dynamics of the Pseudomonas CbrA transceptor",
      authors:
        "Shah, T., Orlando, M. A., Faber, M. W., Bose, S., and Orlando, B. J.",
      venue: "Protein Science, 35(9), e70775.",
      year: 2026,
      link: "https://onlinelibrary.wiley.com/doi/10.1002/pro.70775",
    },
    {
      id: 14,
      title:
        "Small Structural Variations, Large Functional Consequences: Comparative Analysis Reveals Structural Control of Ubiquitylation Site Selection by BRCA1/BARD1",
      authors:
        "Heidari, S., Lightle, C., Herrington, L., Shah, T., Hossain, F., Morcos, F., Weintraub, S. T., Stewart, M. D., and Torabifard, H.",
      venue: "bioRxiv, 2026.06. 26.734868",
      year: 2026,
      link: "https://www.biorxiv.org/content/10.64898/2026.06.26.734868v1.abstract",
    },
    {
      id: 13,
      title:
        "Fluorescent Poly(ε-Caprolactone)s Micelles for Anticancer Drug Delivery and Bioimaging",
      authors:
        "Babanyinah, G., Bhadran, A., Polara, H., Shah, T., Biewer, M. C., and Stefan, M. C.",
      venue: "Biomacromolecules 26 (6), 3651-3665",
      year: 2025,
      link: "https://pubs.acs.org/doi/abs/10.1021/acs.biomac.5c00262",
    },
    {
      id: 12,
      title:
        "Improved Drug Delivery through Amide-Functionalized Polycaprolactones: Enhanced Loading Capacity and Sustained Drug Release",
      authors:
        "Polara, H., Shah, T., Babanyinah, G., Wang, H., Bhadran, A., Biewer, M. C., Torabifard, H., and Stefan, M. C.",
      venue: "Biomacromolecules, 2025, 26 (5), 3213-3223.",
      year: 2025,
      link: "https://pubs.acs.org/doi/abs/10.1021/acs.biomac.5c00280",
    },
    {
      id: 11,
      title:
        "Computational Design to Experimental Validation: Molecular Dynamics-assisted Development of Polycaprolactone Micelles for Drug Delivery",
      authors:
        "Shah, T., Polara, H., Bhadran, A., Babanyinah, G., Wang, H., Grabowski, G., Biewer, M. C., Torabifard, H., and Stefan, M. C.",
      venue:
        "Journal of Materials Chemistry B, 2025, 13 (13), 4166-4178. (†equally contributed)",
      year: 2025,
      link: "https://pubs.rsc.org/en/content/articlelanding/2025/tb/d4tb02789b/unauth",
    },
    {
      id: 10,
      title:
        "Dynamics of amphiphilic poly(ε-caprolactone) micelles with doxorubicin and transition temperature predictions using all-atom molecular dynamics simulation",
      authors: "Shah, T., Stefan, M. C., and Torabifard, H.",
      venue: "Journal of Physical Chemistry B, 2024, 128 (48), 11981-11991.",
      year: 2024,
      link: "https://pubs.rsc.org/en/content/articlehtml/2024/sc/d4sc01625d",
    },
    {
      id: 9,
      title:
        "Histone H3 orchestrates the ubiquitination of nucleosomal H2A by BRCA1/BARD1-UbcH5c complex",
      authors: "Goldman, A., Shah, T., and Torabifard, H.",
      venue: "BioRxiv, 2024.",
      year: 2024,
      link: "https://www.biorxiv.org/content/10.1101/2024.04.09.588726v1.abstract",
    },
    {
      id: 8,
      title:
        "Synthesis and Characterization of Two New Holmium Metal-Organic Frameworks",
      authors:
        "Abbas, M., Murtaza, D., Joy, M., Sheybani, S., Shah, T., Balkus, K.",
      venue: "CrystEngComm, 2024, 26 (39), 5567-5573.",
      year: 2024,
      link: "https://pubs.rsc.org/en/content/articlelanding/2024/ce/d4ce00592a/unauth",
    },
    {
      id: 7,
      title:
        "Maleimide functionalized polycaprolactone micelles for glutathione quenching and doxorubicin delivery",
      authors:
        "Babanyinah, G., Bhadran, A., Wang, H., Polara, H., Shah, T., Biewer, M. C., and Stefan, M. C.",
      venue:
        "Chemical Science, 2024, 15 (26), 9987-10001. (Featured on Journal Cover)",
      year: 2024,
      link: "https://pubs.rsc.org/en/content/articlehtml/2024/sc/d4sc01625d",
    },
    {
      id: 6,
      title:
        "Effect of aromatic substituents on thermoresponsive functional polycaprolactone micellar carriers for doxorubicin delivery",
      authors:
        "Wang, H., Polara, H., Bhadran, A., Shah, T., Babanyinah, G., Ma, Z., Miller, J., Biewer, M., and Stefan, M.",
      venue: "Frontiers in Pharmacology, 2024, 15, 1356639.",
      year: 2024,
      link: "https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2024.1356639/full",
    },
    {
      id: 5,
      title:
        "Reversible cross-linked thermoresponsive polycaprolactone micelles for enhanced stability and controlled release",
      authors:
        "Bhadran, A., Polara, H., Calubaquib, E., Wang, H., Babanyinah, G., Shah, T., Anderson, P., Saleh, M., Biewer, M. C., and Stefan, M. C.",
      venue: "Biomacromolecules, 2023, 24 (12), 5823-5835.",
      year: 2023,
      link: "https://pubs.acs.org/doi/abs/10.1021/acs.biomac.3c00832",
    },
    {
      id: 4,
      title:
        "Biogenically efficient production and characterization of silver nanoparticles using the marine fungus Hamigera Terricola along with their antimicrobial and antioxidative efficacy",
      authors: "Mistry, H., Thakor, R., Polara, H., Shah, T., and Bariya, H.",
      venue: "Nanotechnology and In Silico Tools, 2024, 89-96.",
      year: 2024,
      link: "https://www.sciencedirect.com/science/chapter/edited-volume/abs/pii/B9780443154577000022",
    },
    {
      id: 3,
      title: "Functional polycaprolactones for drug delivery applications",
      authors:
        "Bhadran, A., Polara, H., Shah, T., Babanyinah, G., Tashiny, S., Biewer, M, C., and Stefan, M, C.",
      venue: "Pharmaceutics, 2023, 15 (7), 1977. (Invited Perspective)",
      year: 2023,
      link: "https://www.mdpi.com/1999-4923/15/7/1977",
    },
    {
      id: 2,
      title: "Organ Chips in Safety Pharmacology",
      authors:
        "Stefan, M. C., Soltantabar, P., Wang, H., Bhadran, A., Polara, H., and Shah, T.",
      venue:
        "Springer Nature, Accepted December 2022. (Corresponding Author, Invited Book Chapter)",
      year: 2022,
      link: "https://link.springer.com/rwe/10.1007/978-3-031-35529-5_79",
    },
    {
      id: 1,
      title:
        "A glimpse of biodegradable polymers and their biomedical applications",
      authors: "Shah, T., and Vasava, D. V.",
      venue: "e-Polymers, 2019, 19 (1), 385-410.",
      year: 2019,
      link: "https://www.degruyterbrill.com/document/doi/10.1515/epoly-2019-0041/html",
    },
  ];

  const handlePublicationClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section className={styles.publicationsSection}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h2 className={styles.pageTitle}>Publications</h2>
          <div className={styles.titleUnderline}></div>
        </div>
        <div className={styles.publicationsList}>
          {publications.map((pub) => (
            <div
              key={pub.id}
              className={styles.publicationCard}
              onClick={() => handlePublicationClick(pub.link)}
              style={{ cursor: "pointer" }}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handlePublicationClick(pub.link);
                }
              }}
            >
              <div className={styles.number}>{pub.id}.</div>
              <div className={styles.content}>
                <p className={styles.title}>{pub.title}</p>
                <p className={styles.authors}>{pub.authors}</p>
                {pub.venue && <p className={styles.venue}>{pub.venue}</p>}
              </div>
              <div className={styles.year}>{pub.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
