# Thumb Magnet 🧲

Thumb Magnet is a premium, privacy-focused tool designed to extract high-quality thumbnails from YouTube videos and Shorts instantly. Built with a modern aesthetic and performance in mind.

## ✨ Features

- **🚀 Instant Extraction**: Paste a YouTube link and get results immediately.
- **📱 Universal Support**: Works with standard YouTube videos and YouTube Shorts.
- **💎 High Quality**: Access standard, high, and max-resolution (HD) thumbnails.
- **🖼️ Flexible Formats**: Download thumbnails as **JPG** or **PNG** (converted on-the-fly).
- **🎨 Premium UI**: Features a sleek "Glassmorphism" design with smooth animations.
- **🔒 Privacy Focused**: No data collection—everything runs in your browser.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: Native CSS Modules (No frameworks like Tailwind)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: `clsx` for class management

## 🚀 Getting Started

Follow these steps to run the project locally:

### Prerequisites

- Node.js 18+ installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/thumb-magnet.git
   cd thumb-magnet
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the app in action.

## 📂 Project Structure

```bash
src/
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Global layout & fonts
│   └── globals.css       # Global CSS variables & resets
├── components/
│   ├── features/         # Feature-specific components (Header, Extractor, etc.)
│   │   ├── Header.tsx
│   │   ├── ThumbnailExtractor.tsx
│   │   └── PreviewCard.tsx
│   ├── ui/               # Reusable UI components (Button, Input, Container)
│   │   ├── Button.tsx
│   │   └── Input.tsx
└── utils/                # Helper functions (YouTube URL parsing)
```

## 📝 License

This project is for educational purposes. Feel free to use the code for your own learning or projects.
