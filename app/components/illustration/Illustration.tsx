import styles from './Illustration.module.css';

export default function Illustration() {
    return (
        <div className={styles.illustrationSection}>
            <svg className={styles.illustration} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                <rect x="100" y="320" width="300" height="15" fill="#9a7dc3ff" rx="5" />
                <polygon points="80,335 420,335 400,420 100,420" fill="#042806ff" opacity="0.9" />

                <rect x="180" y="160" width="200" height="140" fill="#7588adff" rx="8" />
                <rect x="190" y="170" width="180" height="120" fill="#1a2940" rx="4" />

                <line x1="200" y1="185" x2="280" y2="185" stroke="#18453B" strokeWidth="2.5" />
                <line x1="200" y1="195" x2="260" y2="195" stroke="#2d6d5f" strokeWidth="2.5" />
                <line x1="200" y1="205" x2="300" y2="205" stroke="#18453B" strokeWidth="2.5" />
                <line x1="200" y1="215" x2="240" y2="215" stroke="#3d8a75" strokeWidth="2.5" />

                <circle cx="320" cy="220" r="8" fill="#3d8a75" stroke="#18453B" strokeWidth="2" />
                <circle cx="340" cy="240" r="8" fill="#3d8a75" stroke="#18453B" strokeWidth="2" />
                <circle cx="300" cy="240" r="8" fill="#3d8a75" stroke="#18453B" strokeWidth="2" />
                <circle cx="320" cy="260" r="8" fill="#3d8a75" stroke="#18453B" strokeWidth="2" />
                <line x1="320" y1="228" x2="335" y2="235" stroke="#18453B" strokeWidth="2.5" />
                <line x1="335" y1="245" x2="320" y2="252" stroke="#18453B" strokeWidth="2.5" />
                <line x1="305" y1="245" x2="320" y2="252" stroke="#18453B" strokeWidth="2.5" />
                <line x1="320" y1="228" x2="305" y2="235" stroke="#18453B" strokeWidth="2.5" />

                <circle cx="250" cy="280" r="30" fill="#2d6d5f" />
                <ellipse cx="250" cy="310" rx="35" ry="15" fill="#2d6d5f" opacity="0.8" />
                <rect x="220" y="310" width="60" height="60" fill="#18453B" rx="10" />
                <rect x="215" y="340" width="25" height="40" fill="#3d8a75" rx="5" />
                <rect x="260" y="340" width="25" height="40" fill="#3d8a75" rx="5" />

                <rect x="200" y="325" width="15" height="35" fill="#3d8a75" rx="5" transform="rotate(-20 207 325)" />
                <rect x="285" y="325" width="15" height="35" fill="#3d8a75" rx="5" transform="rotate(20 293 325)" />

                <rect x="180" y="305" width="100" height="8" fill="#4b5563" rx="2" />

                <ellipse cx="350" cy="315" rx="12" ry="4" fill="#a0522d" />
                <rect x="338" y="310" width="24" height="15" fill="#f4a460" rx="2" />
                <path d="M362 312 Q367 310 368 308" stroke="#a0522d" strokeWidth="2.5" fill="none" />
                <path d="M345 305 Q345 295 343 290" stroke="#cbd5e1" strokeWidth="1.5" fill="none" opacity="0.6" />
                <path d="M355 305 Q355 295 357 290" stroke="#cbd5e1" strokeWidth="1.5" fill="none" opacity="0.6" />

                <rect x="120" y="305" width="40" height="25" fill="#18453B" rx="2" />
                <line x1="125" y1="310" x2="155" y2="310" stroke="#3d8a75" strokeWidth="1.5" />
                <line x1="125" y1="315" x2="155" y2="315" stroke="#3d8a75" strokeWidth="1.5" />
                <line x1="125" y1="320" x2="145" y2="320" stroke="#3d8a75" strokeWidth="1.5" />

                <ellipse cx="420" cy="315" rx="15" ry="8" fill="#2d6d5f" />
                <path d="M420,315 Q415,300 410,285" stroke="#22c55e" strokeWidth="3.5" fill="none" />
                <path d="M420,315 Q425,300 430,285" stroke="#22c55e" strokeWidth="3.5" fill="none" />
                <ellipse cx="410" cy="285" rx="9" ry="13" fill="#4ade80" />
                <ellipse cx="430" cy="285" rx="9" ry="13" fill="#4ade80" />

                <g className={styles.floatingMolecule}>
                    <circle cx="100" cy="150" r="7" fill="#c22d2dff" stroke="#18453B" strokeWidth="2" opacity="0.8" />
                    <circle cx="120" cy="150" r="7" fill="#c22d2dff" stroke="#18453B" strokeWidth="2" opacity="0.8" />
                    <line x1="107" y1="150" x2="113" y2="150" stroke="#18453B" strokeWidth="2.5" opacity="0.8" />
                </g>

                <g className={styles.floatingMolecule2}>
                    <circle cx="450" cy="200" r="6" fill="#c22d2dff" stroke="#18453B" strokeWidth="2" opacity="0.8" />
                    <circle cx="465" cy="210" r="6" fill="#c22d2dff" stroke="#18453B" strokeWidth="2" opacity="0.8" />
                    <circle cx="450" cy="220" r="6" fill="#c22d2dff" stroke="#18453B" strokeWidth="2" opacity="0.8" />
                    <line x1="454" y1="205" x2="461" y2="210" stroke="#18453B" strokeWidth="2" opacity="0.8" />
                    <line x1="461" y1="210" x2="454" y2="215" stroke="#18453B" strokeWidth="2" opacity="0.8" />
                </g>
            </svg>
        </div>
    );
}