import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thumb Magnet | YouTube Thumbnail Extractor",
  description:
    "Extract high-quality YouTube thumbnails instantly. Supports Videos, Shorts, and Live Streams.",
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/dlxybta5a/image/upload/v1768503898/image-removebg-preview_kibfga.webp",
        href: "https://res.cloudinary.com/dlxybta5a/image/upload/v1768503898/image-removebg-preview_kibfga.webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
