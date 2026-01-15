import Header from "@/components/features/Header";
import Disclaimer from "@/components/features/Disclaimer";
import ThumbnailExtractor from "@/components/features/ThumbnailExtractor";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Background Decorators */}
      <div className={styles.background} />

      <Disclaimer />

      <div className={styles.content}>
        <Header />
        <ThumbnailExtractor />
      </div>

      {/* Simple Footer */}
      <footer className={`${styles.footer} glass-panel`}>
        <p>© {new Date().getFullYear()} Thumb Magnet. Educational use only.</p>
      </footer>
    </main>
  );
}
