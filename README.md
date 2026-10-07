# Hill Stack Studio

> **Locally rooted. AI Optimized.**

Official website and digital presence for **Hill Stack Studio** — a web engineering and digital strategy studio based in the Pacific Northwest helping local businesses, contractors and service providers succeed in the era of AI search.

---

## 🌟 Overview & Mission

Hill Stack Studio bridges the gap between hard-working local business owners and modern web technology. By pairing human-centered consulting with cutting-edge **Answer Engine Optimization (AEO)** and ultra-fast web architecture, we ensure local businesses are easily discovered, recommended and trusted across both traditional search engines (Google) and next-generation AI assistants (**ChatGPT**, **Perplexity**, **Claude**, **Google Gemini** and **Google AI Overviews**).

### The Five Pillars of AI Visibility
Our audit and optimization framework inspects and enhances digital presence across:
1. **AI Search Engine Access**: Explicit crawl permissions and machine-readable data layers (`llms.txt`, JSON-LD schemas).
2. **Entity Trust & Credentials**: Structured contractor license numbers, trade association badges and verified local reviews.
3. **Instant Mobile Action Signals**: Sub-second page loads, click-to-call CTAs and frictionless instant quote requests.
4. **Localized Service Area Coverage**: Explicit geo-targeting across King County, Pierce County and the greater PNW (Seattle, Tacoma, Bellevue, Puyallup).
5. **Information Density & Accuracy**: High-value operational details (e.g. response times, service guarantees) structured for conversational AI answers.

---

## 🛠️ Core Services

Hill Stack Studio provides 9 specialized services tailored for local service providers and businesses:

1. **Custom Web Design & Development**: Sub-second, high-converting websites built from the ground up on Astro architecture with zero bloat.
2. **Answer Engine Optimization (AEO)**: End-to-end optimization ensuring conversational AI engines recommend your business first.
3. **Consulting & Site Migration**: Plain-English strategic guidance and zero-downtime domain/website transfers preserving SEO equity.
4. **Web Hosting & Administration**: Proactive hosting management, performance tuning and dependable site maintenance.
5. **Search Engine Readiness**: Structured data formatting and machine-readable schemas (`schema.json`) for seamless crawler parsing.
6. **Copywriting & Content Adjustments**: Clear, conversion-driven messaging communicating operational trust and local expertise.
7. **Performance & Visibility Audit**: Deep-dive benchmarking of Core Web Vitals, mobile responsiveness and AI search discoverability.
8. **Accessibility Compliance**: WCAG 2.2 AA compliant standards ensuring digital inclusivity and legal protection.
9. **Security & Privacy Compliance**: Modern web security standards, privacy best practices and data protection safeguards.

---

## 💻 Tech Stack

- **Framework**: [Astro 4](https://astro.build/) (Static Site Generation / SSG)
- **UI Islands**: [React 18](https://react.dev/) (Interactive client-side components)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) (Custom brand tokens & typography)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **AI Discoverability**: Machine-readable `llms.txt` and Schema.org JSON-LD structured data
- **Runtime / Node**: Node.js `>= 22.12.0`

---

## 📁 Project Structure

```text
/
├── public/
│   ├── images/
│   │   ├── ai-logos/           # AI search engine logos (ChatGPT, Gemini, Claude, etc.)
│   │   ├── recent-work/        # Featured client portfolio screenshots
│   │   ├── services/           # Service-specific vector illustrations & graphics
│   │   └── team/               # Team member avatar assets
│   ├── favicon.ico             # Favicon icon
│   ├── favicon.svg             # Vector favicon
│   ├── llms.txt                # Machine-readable context file for AI crawlers & LLMs
│   ├── logo.svg                # Primary brand logo
│   ├── logo-dark.svg           # Dark mode brand logo
│   ├── logo-icon.svg           # Brand icon mark
│   ├── robots.txt              # Search engine & AI crawler access rules
│   └── schema.json             # Schema.org JSON-LD LocalBusiness & Organization data
├── src/
│   ├── components/             # Astro & React (TSX) components
│   │   ├── Advantage.astro     # Agency comparison & competitive advantage matrix
│   │   ├── AiMarquee.tsx       # Interactive AI platform ticker/marquee (React)
│   │   ├── Contact.tsx         # Contact form & regional inquiry component (React)
│   │   ├── Footer.astro        # Site footer with service links and contact details
│   │   ├── Header.astro        # Navigation bar with responsive mobile menu
│   │   ├── Hero.tsx            # Main hero section with interactive CTAs (React)
│   │   ├── RecentWork.tsx      # Case studies & recent project showcase (React)
│   │   ├── ServiceAreas.astro  # PNW service area geographic coverage section
│   │   ├── Services.tsx        # Interactive service catalog tabs & cards (React)
│   │   └── StickyMobileBar.astro # Floating mobile call & consultation action bar
│   ├── data/
│   │   ├── servicesData.ts     # In-depth service details, features, processes & FAQs
│   │   └── siteContext.json    # Global company metadata, contact info & services list
│   ├── layouts/
│   │   └── BaseLayout.astro    # Root layout with meta tags, SEO and JSON-LD schema
│   ├── pages/
│   │   ├── index.astro         # Homepage (Landing page)
│   │   ├── about.astro         # About Us page (Mission, story and leadership)
│   │   └── services/
│   │       ├── index.astro     # Services directory page
│   │       └── [slug].astro    # Dynamic static routes for each of the 9 services
│   └── styles/
│       └── global.css          # Global CSS imports, font declarations and base styles
├── astro.config.mjs            # Astro configuration (React & Tailwind integrations)
├── tailwind.config.mjs         # Tailwind theme extension (colors, fonts, keyframes)
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies, engines and npm scripts
```

---

## 🗺️ Routes & Pages

The application statically pre-renders 12 routes on build:

| Route | File | Description |
| :--- | :--- | :--- |
| `/` | `src/pages/index.astro` | Main landing page highlighting mission, services and work |
| `/about` | `src/pages/about.astro` | Company story, core mission and co-founders |
| `/services` | `src/pages/services/index.astro` | Comprehensive catalog of all 9 agency services |
| `/services/[slug]` | `src/pages/services/[slug].astro` | Dedicated deep-dive page for each service with FAQs and deliverables |

---

## 🚀 Local Development & Scripts

### Prerequisites
- Node.js `>= 22.12.0`
- npm `>= 10.0.0`

### Commands

| Command | Description |
| :--- | :--- |
| `npm install` | Install project dependencies |
| `npm run dev` | Launch local development server at `http://localhost:4321` |
| `npm run build` | Build static production assets to `./dist/` |
| `npm run preview` | Start a local preview server for `./dist/` |
| `npm run astro check` | Run Astro and TypeScript diagnostics |

> [!TIP]
> If building in restricted or sandboxed environments, you can disable Astro telemetry by setting `ASTRO_TELEMETRY_DISABLED=1`.

---

## 🎨 Design System & Brand Palette

- **Brand Dark**: `#0B0F19` (High-contrast typography and deep backgrounds)
- **Brand Primary**: `#2563EB` (Cobalt Blue accent & active CTAs)
- **Brand Primary Hover**: `#1D4ED8`
- **Brand Slate / Text**: `#1E293B`
- **Brand Surface**: `#FFFFFF`
- **Brand Background**: `#F8FAFC`
- **Typography**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Headings & Display), [Inter](https://fonts.google.com/specimen/Inter) (Body)

---

## 📄 License & Copyright

© Hill Stack Studio. All rights reserved.
