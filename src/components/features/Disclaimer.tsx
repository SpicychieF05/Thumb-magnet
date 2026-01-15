"use client";

import { useEffect, useState } from "react";
import styles from "./Disclaimer.module.css";
import { X } from "lucide-react";

export default function Disclaimer() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    // Show immediately on load
    setIsVisible(true);

    // Timer to close
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsVisible(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>Disclaimer</h2>
          <button
            className={styles.closeButton}
            onClick={() => setIsVisible(false)}
            aria-label="Close disclaimer"
          >
            <X size={20} />
          </button>
        </div>
        <p className={styles.text}>
          This tool is intended for{" "}
          <strong>educational and reference purposes only</strong>. All
          thumbnails belong to their respective owners. Please respect copyright
          and YouTube&apos;s terms of service.
        </p>
        <div className={styles.timer}>Closing in {timeLeft}s</div>
      </div>
    </div>
  );
}
