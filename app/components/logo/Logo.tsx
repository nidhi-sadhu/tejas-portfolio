import styles from './Logo.module.css';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className={styles.logoSection}>
      <div className={styles.logoWrapper}>
        <Link href='/'>
          <svg width="72" height="72" viewBox="0 0 72 72" className={styles.logo}>
            <defs>
              <linearGradient id="hair" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2d2520" />
                <stop offset="100%" stopColor="#1a1410" />
              </linearGradient>

              <linearGradient id="hairShine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3e2f28" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#4a3a30" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3e2f28" stopOpacity="0.6" />
              </linearGradient>

              <linearGradient id="skin" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#d4a574" />
                <stop offset="100%" stopColor="#c19564" />
              </linearGradient>

              <linearGradient id="screen" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3d8a75" />
                <stop offset="100%" stopColor="#2d6d5f" />
              </linearGradient>
            </defs>

            <g className={styles.laptop}>
              <path d="M 15 56 L 12 66 L 60 66 L 57 56 Z"
                fill="#37474f" stroke="#263238" strokeWidth="1" />
              <rect x="18" y="58" width="36" height="5" rx="0.8" fill="#455a64" />
              <rect x="20" y="38" width="32" height="22" rx="1.2" fill="#1a1a1a" stroke="#0d0d0d" strokeWidth="1" />
              <rect x="21.5" y="39.5" width="29" height="19" rx="0.8" fill="#0a1929" className={styles.screen} />
              <g className={styles.molecularDesign} opacity="0.85">
                <circle cx="36" cy="49" r="2" fill="#18453B" />
                <circle cx="31" cy="44" r="1.5" fill="#2d6d5f" />
                <circle cx="41" cy="44" r="1.5" fill="#2d6d5f" />
                <circle cx="31" cy="54" r="1.5" fill="#3d8a75" />
                <circle cx="41" cy="54" r="1.5" fill="#3d8a75" />
                <circle cx="27" cy="49" r="1.2" fill="#3d8a75" />
                <circle cx="45" cy="49" r="1.2" fill="#3d8a75" />

                <line x1="36" y1="49" x2="31" y2="44" stroke="#2d6d5f" strokeWidth="0.7" opacity="0.7" />
                <line x1="36" y1="49" x2="41" y2="44" stroke="#2d6d5f" strokeWidth="0.7" opacity="0.7" />
                <line x1="36" y1="49" x2="31" y2="54" stroke="#3d8a75" strokeWidth="0.7" opacity="0.7" />
                <line x1="36" y1="49" x2="41" y2="54" stroke="#3d8a75" strokeWidth="0.7" opacity="0.7" />
                <line x1="36" y1="49" x2="27" y2="49" stroke="#3d8a75" strokeWidth="0.7" opacity="0.6" />
                <line x1="36" y1="49" x2="45" y2="49" stroke="#3d8a75" strokeWidth="0.7" opacity="0.6" />
              </g>

              <rect x="21.5" y="39.5" width="29" height="19" rx="0.8"
                fill="#18453B" opacity="0.12" className={styles.screenGlow} />
            </g>
            <rect x="32" y="30" width="8" height="8" fill="url(#skin)" rx="2" />
            <ellipse cx="36" cy="24" rx="11" ry="13" fill="url(#skin)" className={styles.face} />

            <ellipse cx="25" cy="24" rx="2" ry="3" fill="#c19564" />
            <ellipse cx="47" cy="24" rx="2" ry="3" fill="#c19564" />

            <g className={styles.hair}>
              <path d="M 24 18 Q 22 12 26 10 Q 30 8 36 8 Q 42 8 46 10 Q 50 12 48 18"
                fill="url(#hair)" />

              <path d="M 30 12 Q 34 11 38 12"
                stroke="url(#hairShine)" strokeWidth="2" fill="none" opacity="0.5" className={styles.hairShine} />
              <path d="M 28 15 Q 32 14 36 14 Q 40 14 44 15"
                stroke="url(#hairShine)" strokeWidth="1.5" fill="none" opacity="0.4" />
            </g>

            <g className={styles.glasses}>
              <rect x="27" y="22" width="7" height="5" rx="1" fill="#e8f4f8" opacity="0.5" />
              <rect x="27" y="22" width="7" height="5" rx="1" fill="none" stroke="#3e2723" strokeWidth="0.8" />
              <rect x="38" y="22" width="7" height="5" rx="1" fill="#e8f4f8" opacity="0.5" />
              <rect x="38" y="22" width="7" height="5" rx="1" fill="none" stroke="#3e2723" strokeWidth="0.8" />

              <line x1="34" y1="24.5" x2="38" y2="24.5" stroke="#3e2723" strokeWidth="0.8" />

              <line x1="27" y1="24.5" x2="25" y2="24.5" stroke="#3e2723" strokeWidth="0.8" />
              <line x1="45" y1="24.5" x2="47" y2="24.5" stroke="#3e2723" strokeWidth="0.8" />

              <rect x="28" y="23" width="2.5" height="2" rx="0.5" fill="#ffffff" opacity="0.6" />
              <rect x="39" y="23" width="2.5" height="2" rx="0.5" fill="#ffffff" opacity="0.6" />
            </g>

            <g className={styles.eyes}>
              <ellipse cx="30.5" cy="24" rx="1.8" ry="2.2" fill="#1a0f0a" />
              <ellipse cx="31" cy="23.5" rx="0.7" ry="1" fill="#ffffff" opacity="0.9" />

              <ellipse cx="41.5" cy="24" rx="1.8" ry="2.2" fill="#1a0f0a" />
              <ellipse cx="42" cy="23.5" rx="0.7" ry="1" fill="#ffffff" opacity="0.9" />
            </g>

            <path d="M 27 20 Q 30.5 19.5 34 20" stroke="#2d2520" strokeWidth="0.9" fill="none" strokeLinecap="round" />
            <path d="M 38 20 Q 41.5 19.5 45 20" stroke="#2d2520" strokeWidth="0.9" fill="none" strokeLinecap="round" />

            <path d="M 30 30 Q 36 33 42 30" stroke="#8d5524" strokeWidth="1" fill="none" strokeLinecap="round" className={styles.smile} />

            <g className={styles.headphones}>
              <path d="M 25 20 Q 24 14 36 13 Q 48 14 47 20"
                stroke="#90a4ae" strokeWidth="2.2" fill="none" strokeLinecap="round" />

              <ellipse cx="25" cy="22" rx="3.5" ry="4.5" fill="#b0bec5" />
              <ellipse cx="25" cy="22" rx="2.5" ry="3.5" fill="#90a4ae" />
              <circle cx="25" cy="22" r="0.8" fill="#18453B" className={styles.ledLight} />

              <ellipse cx="47" cy="22" rx="3.5" ry="4.5" fill="#b0bec5" />
              <ellipse cx="47" cy="22" rx="2.5" ry="3.5" fill="#90a4ae" />
              <circle cx="47" cy="22" r="0.8" fill="#18453B" className={styles.ledLight} />
            </g>

            <ellipse cx="20" cy="58" rx="3.5" ry="3" fill="#c19564" className={styles.handLeft} />
            <ellipse cx="52" cy="58" rx="3.5" ry="3" fill="#c19564" className={styles.handRight} />

            <g className={styles.coffee}>
              <ellipse cx="62" cy="54" rx="3" ry="3.5" fill="#6d4c41" />
              <ellipse cx="62" cy="54" rx="2.5" ry="2.8" fill="#5d4037" />
              <ellipse cx="62" cy="53" rx="2.5" ry="1" fill="#8d6e63" />
              <path d="M 64.5 54 Q 66 54 66 55.5 Q 66 57 64.5 57"
                stroke="#6d4c41" strokeWidth="1" fill="none" />
              <path d="M 61 51 Q 61 49.5 61.5 49" stroke="#bdbdbd" strokeWidth="0.7"
                opacity="0.6" fill="none" strokeLinecap="round" className={styles.steam1} />
              <path d="M 63 51 Q 63 49.5 62.5 49" stroke="#bdbdbd" strokeWidth="0.7"
                opacity="0.6" fill="none" strokeLinecap="round" className={styles.steam2} />
            </g>
          </svg>
        </Link>
        <div className={styles.logoGlow}></div>
      </div>
    </div>
  );
}