import Container from "../ui/Container";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={`${styles.logoContainer} glass-panel`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#gradient-logo)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.logoIcon}
          >
            <defs>
              <linearGradient id="gradient-logo" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--color-crystal-blue)" />
                <stop offset="100%" stopColor="var(--color-emerald-blue)" />
              </linearGradient>
            </defs>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h1 className={styles.title}>
          <span className="text-gradient">Thumb Magnet</span>
        </h1>
        <p className={styles.subtitle}>
          Extract high-quality YouTube thumbnails instantly. Zero clutter,
          privacy-focused.
        </p>
      </Container>
    </header>
  );
}
