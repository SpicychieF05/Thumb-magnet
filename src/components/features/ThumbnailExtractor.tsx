"use client";

import { useState } from "react";
import Container from "../ui/Container";
import Input from "../ui/Input";
import Button from "../ui/Button";
import PreviewCard from "./PreviewCard";
import { getThumbnailData, ThumbnailData } from "@/utils/youtube";
import { Search, Sparkles } from "lucide-react";
import styles from "./ThumbnailExtractor.module.css";

export default function ThumbnailExtractor() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ThumbnailData | null>(null);

  const handleExtract = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!url.trim()) return;

    setLoading(true);
    // Simulate slight delay for "processing" feel
    setTimeout(() => {
      const result = getThumbnailData(url);
      if (result) {
        setData(result);
        setUrl(""); // Optional: clear or keep? Keeping usually better for corrections
      } else {
        setError("Invalid YouTube URL. Please check and try again.");
        setData(null);
      }
      setLoading(false);
    }, 600);
  };

  return (
    <section className={styles.section}>
      <Container>
        {/* Input Area */}
        <div className={styles.container}>
          <form onSubmit={handleExtract} className={styles.form}>
            <div className={styles.glowEffect} />

            <div className={styles.inputWrapper}>
              <div className={styles.inputFieldContainer}>
                <div className={styles.searchIcon}>
                  <Search size={20} />
                </div>
                <Input
                  placeholder="Paste YouTube URL here..."
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    if (error) setError("");
                  }}
                  error={!!error}
                  className={styles.inputWithIcon}
                />
              </div>
              <Button type="submit" disabled={loading}>
                {loading ? "..." : "Extract"}
              </Button>
            </div>
          </form>

          {/* Validation Message */}
          {error && <div className={styles.errorMessage}>{error}</div>}
        </div>

        {/* Results Area */}
        {data && <PreviewCard data={data} />}

        {/* Empty State / Decorator */}
        {!data && !loading && (
          <div className={styles.emptyState}>
            <Sparkles className={styles.emptyIcon} />
            <p className={styles.emptyText}>Ready to extract</p>
          </div>
        )}
      </Container>
    </section>
  );
}
