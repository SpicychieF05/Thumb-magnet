import Image from "next/image";
import Container from "../ui/Container";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.logoContainer}>
          <Image
            src="https://res.cloudinary.com/dlxybta5a/image/upload/v1768503898/image-removebg-preview_kibfga.webp"
            alt="Thumb Magnet Logo"
            width={120}
            height={120}
            className={styles.logoIcon}
            priority
            unoptimized
          />
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
