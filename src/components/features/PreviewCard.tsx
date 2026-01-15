import { useState } from "react";
import Image from "next/image";
import { Download, Check, Image as ImageIcon } from "lucide-react";
import Button from "../ui/Button";
import { ThumbnailData } from "@/utils/youtube";
import clsx from "clsx";
import styles from "./PreviewCard.module.css";

interface PreviewCardProps {
  data: ThumbnailData;
}

export default function PreviewCard({ data }: PreviewCardProps) {
  const [quality, setQuality] = useState<"maxres" | "hq" | "mq">("maxres");
  const [fileType, setFileType] = useState<"jpg" | "png">("jpg");
  const [isDownloading, setIsDownloading] = useState(false);

  const currentUrl = data.thumbnails[quality];

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch(currentUrl);
      const blob = await response.blob();

      let downloadUrl = URL.createObjectURL(blob);
      let filename = `thumb-magnet-${data.videoId}-${quality}.${fileType}`;

      if (fileType === "png") {
        const imageBitmap = await createImageBitmap(blob);
        const canvas = document.createElement("canvas");
        canvas.width = imageBitmap.width;
        canvas.height = imageBitmap.height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(imageBitmap, 0, 0);
          downloadUrl = canvas.toDataURL("image/png");
        }
      }

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed", error);
      alert("Failed to download image. Try opening it in a new tab.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className={styles.cardContainer}>
      <div className={`${styles.glassPanel} glass-panel`}>
        {/* Image Display */}
        <div className={styles.imageWrapper}>
          <Image
            src={currentUrl}
            alt="Video Thumbnail"
            fill
            className={clsx(styles.image, {
              [styles.imageShorts]: data.type === "shorts",
            })}
            unoptimized
          />
          <div className={styles.imageOverlay} />

          {/* Quality Badge */}
          <div className={styles.qualityBadge}>
            {quality === "maxres" ? "HD" : quality === "hq" ? "HQ" : "MQ"}
          </div>
        </div>

        {/* Controls Section */}
        <div className={styles.controlsSection}>
          <div className={styles.controlsLayout}>
            {/* Quality Selector */}
            <div className={styles.qualitySelector}>
              {(["maxres", "hq", "mq"] as const).map((q) => (
                <button
                  key={q}
                  onClick={() => setQuality(q)}
                  className={clsx(styles.qualityButton, {
                    [styles.activeQuality]: quality === q,
                  })}
                >
                  {q === "maxres" ? "Max" : q === "hq" ? "High" : "Med"}
                </button>
              ))}
            </div>

            {/* Download Logic */}
            <div className={styles.downloadSection}>
              <div className={styles.fileTypeSelector}>
                <button
                  onClick={() => setFileType("jpg")}
                  className={clsx(styles.fileTypeButton, {
                    [styles.activeFileType]: fileType === "jpg",
                  })}
                >
                  JPG
                </button>
                <button
                  onClick={() => setFileType("png")}
                  className={clsx(styles.fileTypeButton, {
                    [styles.activeFileType]: fileType === "png",
                  })}
                >
                  PNG
                </button>
              </div>

              <Button
                onClick={handleDownload}
                disabled={isDownloading}
                className={styles.downloadBtn}
              >
                {isDownloading ? (
                  <span className="animate-pulse">Saving...</span>
                ) : (
                  <>
                    <Download size={18} />
                    <span>Download</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
