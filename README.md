# Artjom Becker — Developer Portfolio

[![GitHub Release](https://img.shields.io/github/v/release/artjomartur/portfolio?style=flat-square&color=blue)](https://github.com/artjomartur/portfolio/releases)
[![Build Status](https://img.shields.io/github/actions/workflow/status/artjomartur/portfolio/deploy.yml?branch=main&style=flat-square&label=build&logo=github)](https://github.com/artjomartur/portfolio)
[![Repository Link](https://img.shields.io/badge/GitHub-Repository-black?style=flat-square&logo=github)](https://github.com/artjomartur/portfolio)
[![Live Site](https://img.shields.io/badge/Live-artjombecker.com-0071e3?style=flat-square&logo=safari)](https://artjombecker.com)

A high-performance, modern developer portfolio website. Designed with a sleek, Apple-inspired glassmorphic UI, responsive layouts, interactive elements, custom-built chatbot, and hidden easter eggs.

🔗 **GitHub Repository:** [github.com/artjomartur/portfolio](https://github.com/artjomartur/portfolio)  
🌐 **Live Website:** [artjombecker.com](https://artjombecker.com)

---

## ✨ Features & Highlights

### 🖥️ Apple-Inspired UI
- **Glassmorphic Design**: Clean blur effects, interactive scale animations, and dark/light mode support.
- **Custom Cursor Interaction**: Cursor-tracking effect that expands and adapts to hover targets.
- **Split-Flap Text**: Dynamic text animations for headings and metrics.

### 🎮 Hidden Easter Eggs & Minigames
The portfolio contains multiple interactive retro games and overlays triggered by hidden actions or hotkeys:
- **Tech Memory**: Classic memory match game built with a modern tech-stack theme.
- **Pong**: Fully playable Pong game directly in the browser.
- **Osu!**: Aim-trainer mini-game inspired by Osu!.
- **Arcade Rain**: Matrix-style rain effect.
- **Popcorn**: Interactive popcorn physics overlay.
- **Soft Glow**: Ambient interactive lighting background.

### 🤖 Smart Chatbot Integration
- Integrates with **OpenRouter API** for dynamic, character-based conversations.
- Automatically falls back to a custom, offline mock-response algorithm if the API key is not configured.

### 📄 Interactive CV & PDF Export
- Live preview of accomplishments and professional experience.
- Built-in PDF generation and download via `jspdf`.

---

## 🛠️ Tech Stack

- **Core Framework**: React 19 + Vite 8
- **Animations**: Framer Motion
- **PDF Export**: jsPDF
- **Styling**: Modern CSS (Custom properties, CSS Grid, Flexbox, media queries)
- **Deployment**: Cloudflare Workers / Pages (via Wrangler)

---

## 🚀 Quick Start & Installation

### Prerequisites
- Node.js (Version defined in [.nvmrc](file:///.nvmrc))
- npm

### 1. Clone the Repository
```bash
git clone https://github.com/artjomartur/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Local Development Server
Start the Vite development server:
```bash
npm run dev
```

### 4. Chatbot API Configuration (Optional)
To enable the OpenRouter AI Chatbot, create a `.env` file in the root folder and add your API key:
```env
VITE_OPENROUTER_API_KEY=your_openrouter_api_key
```
If omitted, the chatbot runs in offline fallback mode.

---

## 📦 Scripts

- `npm run dev` — Launch the local Vite development server
- `npm run build` — Compile production-ready assets to `dist/`
- `npm run preview` — Locally preview the compiled production build
- `npm run lint` — Run ESLint rules
- `npm run deploy:cf` — Build and deploy the site directly to Cloudflare via Wrangler

---

## 🌍 Deployment

The site is configured for Cloudflare Pages/Workers deployment.
Deployment configurations are stored in [wrangler.jsonc](file:///Users/artjombecker/Documents/Bildung/Projekte/portfolio-1/wrangler.jsonc).
```bash
npm run deploy:cf
```

---

## 📬 Contact & Socials

- **Website:** [artjombecker.com](https://artjombecker.com)
- **Email:** [hi@artjombecker.com](mailto:hi@artjombecker.com)
- **GitHub:** [@artjomartur](https://github.com/artjomartur)
