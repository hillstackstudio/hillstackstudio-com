# Hill Stack Studio

> **Locally rooted. AI Optimized.**

Official website codebase for **Hill Stack Studio** — an agency based in the Pacific Northwest helping local businesses, contractors, and service providers succeed in the age of AI search.

---

## Overview

Hill Stack Studio pairs human-centered consulting with cutting-edge **Generative Engine Optimization (GEO)** and ultra-fast web architecture. We ensure local businesses are easily discovered and recommended across traditional search engines (Google) and next-generation AI platforms (**ChatGPT**, **Perplexity**, **Gemini**, and **Google AI Overviews**).

### Core Offerings & Services
- **Generative Engine Optimization (GEO) & Local AI Audits**: Structured digital presence across the Five Pillars of AI Visibility.
- **Ultra-Fast Web Architecture**: Built on Astro for sub-second page loads, zero maintenance bloat, and top performance scores.
- **AI-Ready Machine Data Infrastructure**: Clean JSON-LD schemas and machine-readable data layer for AI search agents.
- **Mobile-First Conversion Design**: Frictionless user experiences with prominent tap-to-call CTAs and instant quote features.
- **Hands-On Local Consulting & Migration**: End-to-end partner support with zero-downtime domain migrations.

---

## Tech Stack

- **Framework**: [Astro 4](https://astro.build/)
- **UI Components**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Node.js**: `>= 22.12.0`

---

## Project Structure

```text
/
├── public/
│   └── images/              # Static media assets & service icons
├── src/
│   ├── components/          # Reusable Astro & React components (Header, Footer, Marquee, etc.)
│   ├── data/                # Data files and service definitions
│   ├── layouts/             # Page layout templates (Layout.astro)
│   ├── pages/
│   │   ├── index.astro      # Main landing page
│   │   └── services/
│   │       ├── index.astro  # Services overview page
│   │       └── [slug].astro # Individual dynamic service pages
│   └── styles/              # Global CSS & Tailwind styles
├── astro.config.mjs         # Astro project configuration
├── tailwind.config.mjs      # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

---

## Local Development & Commands

Run commands from the root directory:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts local development server at `http://localhost:4321` |
| `npm run build` | Builds production bundle to `./dist/` |
| `npm run preview` | Previews production build locally |
| `npm run astro check` | Runs Astro & TypeScript diagnostic type checks |

---

© Hill Stack Studio. All rights reserved.
