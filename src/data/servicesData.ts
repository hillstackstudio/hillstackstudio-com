export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  heroDescription: string;
  iconIndex: number;
  heroImage?: string;
  flipHeroImage?: boolean;
  aiImpactTitle: string;
  aiImpactDescription: string;
  features: ServiceFeature[];
  deliverables: string[];
  processSteps: ProcessStep[];
  faq: Array<{ question: string; answer: string }>;
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "custom-web-design-development",
    name: "Custom Web Design & Development",
    tagline: "Ultra-fast, high-converting websites engineered on Astro.",
    shortDescription: "Clean custom code and modern website redesigns engineered for fast page loads, AI search recommendations and customer conversion.",
    heroDescription: "We build modern, high-performance websites built from the ground up on Astro architecture. Engineered specifically for local service providers, our sites load in sub-seconds and convert phone calls effortlessly.",
    iconIndex: 0,
    heroImage: "/images/services/web-development.svg",
    aiImpactTitle: "Why Web Speed & Architecture Matter for AI Search",
    aiImpactDescription: "Modern AI search engines like ChatGPT, Gemini and Google AI Overviews prioritize websites with clean HTML markup and sub-second response times. Slow, bloated legacy CMS sites get deprioritized by web crawlers. Our Astro builds ensure AI agents consume and index your business data instantly without rendering lag.",
    features: [
      {
        title: "Sub-Second Page Loads",
        description: "Zero heavy CMS plugins or render-blocking scripts. Experience instantaneous page transitions on mobile devices."
      },
      {
        title: "Mobile-First Click-to-Call CTAs",
        description: "Designed from the ground up for phone viewports so customers can call or request a quote with a single tap."
      },
      {
        title: "Tailored Brand Aesthetics",
        description: "Custom typography, rich color palettes and modern micro-animations that reflect your local business reputation."
      },
      {
        title: "Structured Semantic HTML",
        description: "Semantic markup designed to ensure accessibility tools and AI search engines interpret your core content perfectly."
      }
    ],
    deliverables: [
      "Custom Astro web project tailored to your local business",
      "Mobile-responsive design verified on iOS and Android devices",
      "Integrated tap-to-call buttons and interactive contact forms",
      "Core Web Vitals green-check optimization (95+ Lighthouse scores)",
      "Zero-downtime deployment on global edge servers"
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Discovery & Structure",
        description: "We audit your existing web presence and map out customer conversion paths tailored to your local trade."
      },
      {
        stepNumber: "02",
        title: "Design & UX Prototyping",
        description: "We craft custom layout mockups focusing on trust signals, trade credentials and mobile usability."
      },
      {
        stepNumber: "03",
        title: "Astro Code Development",
        description: "We build your website using lightweight static generation, incorporating modern styling and speed standards."
      },
      {
        stepNumber: "04",
        title: "Launch & Verification",
        description: "We deploy your site to fast edge servers, verify indexing and test mobile conversion actions."
      }
    ],
    faq: [
      {
        question: "Why do you use Astro instead of WordPress?",
        answer: "WordPress relies on bloated database queries and plugin updates that slow down your site and create security vulnerabilities. Astro generates ultra-fast static HTML, loading near-instantaneously on mobile phones and providing zero maintenance overhead."
      },
      {
        question: "Will my custom website work well on mobile phones?",
        answer: "Yes, 100%. All of our websites are designed mobile-first, ensuring high visibility click-to-call buttons and seamless navigation for local customers on the go."
      }
    ]
  },
  {
    slug: "answer-engine-optimization",
    name: "Answer Engine Optimization (AEO)",
    tagline: "Be the top AI search answer when local customers ask.",
    shortDescription: "Comprehensive audit of your current website for traditional search engines and AI tools like ChatGPT, Claude and Gemini to maximize your local online discoverability.",
    heroDescription: "Traditional SEO is no longer enough. Local consumers are now asking AI assistants like ChatGPT, Perplexity and Google AI Overviews for trade recommendations. AEO ensures your business is recommended first.",
    iconIndex: 1,
    heroImage: "/images/services/geo-image.svg",
    aiImpactTitle: "The Shift from Keyword Searches to Natural Language Prompts",
    aiImpactDescription: "Consumers don't just type 'electrician near me' anymore. They ask detailed prompts like 'Find me a licensed 24/7 electrician in Puyallup with great reviews'. Answer Engine Optimization aligns your digital presence across the 5 Pillars of AI Visibility so conversational search tools cite your business as the authoritative answer.",
    features: [
      {
        title: "Five Pillars AI Visibility Audit",
        description: "In-depth inspection of AI search access, entity trust, conversion friction, service boundaries and data density."
      },
      {
        title: "LLM Citation Optimization",
        description: "Structuring your business facts, licenses and reviews into structured formats that AI crawlers synthesize."
      },
      {
        title: "Entity Authority Building",
        description: "Aligning your NAP (Name, Address, Phone) and trade credentials across regional directories and search indices."
      },
      {
        title: "Conversational Query Targeting",
        description: "Optimizing content for full-sentence voice queries and complex multi-requirement customer searches."
      }
    ],
    deliverables: [
      "Complete 5-Pillars AI Visibility Audit Report",
      "LLM citation optimization for ChatGPT, Perplexity and Gemini",
      "Structured entity data updates and trade credential formatting",
      "Regional search boundary alignment for target cities & counties",
      "Quarterly AI search ranking & citation tracking report"
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "AI Search Baseline Audit",
        description: "We run actual conversational queries on leading AI engines to measure how your business is currently cited."
      },
      {
        stepNumber: "02",
        title: "Entity & Credential Mapping",
        description: "We standardize your licenses, business boundaries, reviews and service details for machine evaluation."
      },
      {
        stepNumber: "03",
        title: "Content & Schema Injection",
        description: "We inject machine-readable schema markup and structured data density across your digital footprint."
      },
      {
        stepNumber: "04",
        title: "Re-indexing & Citation Verification",
        description: "We submit updated entity assets to search indexers and confirm improved AI recommendation rankings."
      }
    ],
    faq: [
      {
        question: "What is the difference between SEO and AEO?",
        answer: "SEO focuses on placing blue links on Google search results pages. AEO (Answer Engine Optimization) ensures conversational AI search tools (like ChatGPT, Gemini and Perplexity) select and recommend your specific business when answering user questions."
      },
      {
        question: "How fast can I see results from AEO?",
        answer: "AI search engines constantly update their web crawls. Most local businesses see improved AI recommendation accuracy and citations within 4 to 8 weeks after structured entity optimization."
      }
    ]
  },
  {
    slug: "consulting-site-migration",
    name: "Consulting & Site Migration",
    tagline: "Zero downtime migrations & plain-English strategic partner.",
    shortDescription: "Consulting and strategic guidance for local business owners including seamless website transfers with zero downtime.",
    heroDescription: "Upgrading your website shouldn't risk losing hard-earned search rankings or causing business interruption. We provide hands-on local consulting and seamless site migrations with zero downtime.",
    iconIndex: 2,
    heroImage: "/images/services/migration.svg",
    aiImpactTitle: "Preserving Search Engine & AI Engine Authority During Transfers",
    aiImpactDescription: "Moving a website without proper 301 redirect mapping, canonical tag setup and schema migration can destroy years of accumulated search authority. We meticulously preserve all URL paths, backlink juice and structured entity data so search engines and AI assistants never drop your coverage.",
    features: [
      {
        title: "Zero-Downtime Migration",
        description: "Seamless DNS switches and server transitions that keep your phone lines ringing without missing a beat."
      },
      {
        title: "301 Redirect Architecture",
        description: "Complete mapping of every existing web page URL to maintain SEO juice and prevent broken links."
      },
      {
        title: "Plain-English Strategic Guidance",
        description: "No confusing technical jargon. We explain every step in plain language tailored to busy trade owners."
      },
      {
        title: "Domain & DNS Management",
        description: "Full handling of registrar settings, SSL security certificates and email MX record preservation."
      }
    ],
    deliverables: [
      "Full URL mapping and 301 redirect implementation schedule",
      "Domain, DNS and MX record safety migration checklist",
      "Pre- and post-migration SEO rank and indexing audit",
      "Direct 1-on-1 strategy calls with our Pacific Northwest team",
      "Post-launch 30-day monitor to ensure 100% uptime and link health"
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Website Inventory & Link Audit",
        description: "We crawl your existing website to index every live URL, image asset and incoming backlink."
      },
      {
        stepNumber: "02",
        title: "Staging & Redirect Strategy",
        description: "We build your new site in a private staging environment and set up precise 1-to-1 redirect mapping."
      },
      {
        stepNumber: "03",
        title: "DNS & SSL Deployment",
        description: "We perform a seamless switch during low-traffic windows while continuously monitoring traffic."
      },
      {
        stepNumber: "04",
        title: "Post-Launch Rank Safeguard",
        description: "We re-verify search engine indexation, submit sitemaps and confirm search positions remain intact."
      }
    ],
    faq: [
      {
        question: "Will my business email or phone service be affected during migration?",
        answer: "No. We separate your web hosting records from your domain email records (MX settings) to ensure your business communication remains active without a second of downtime."
      },
      {
        question: "Will I lose my current Google rankings?",
        answer: "Not with our process. Our 301 redirect mapping and sitemap re-submission preserve all existing search engine authority and index points."
      }
    ]
  },
  {
    slug: "web-hosting-administration",
    name: "Web Hosting & Administration",
    tagline: "Ultra-reliable, high-speed hosting with zero maintenance stress.",
    shortDescription: "We manage your website hosting, security and updates so you can focus on what matters, running your business.",
    heroDescription: "Forget slow shared servers, constant plugin crashes and security worries. We provide managed edge web hosting with automatic backups, high uptime and proactive technical administration.",
    iconIndex: 3,
    heroImage: "/images/services/hosting.svg",
    flipHeroImage: true,
    aiImpactTitle: "Global Edge Infrastructure for Maximum Uptime",
    aiImpactDescription: "AI search engines perform frequent lightweight web checks. If your web host is slow or experiences frequent outages, AI web crawlers skip your site. Hosted on high-speed Content Delivery Networks (CDNs), your site responds instantly anywhere in the Pacific Northwest.",
    features: [
      {
        title: "Global CDN Edge Hosting",
        description: "Your web assets are served from lightning-fast edge locations close to local customers in WA."
      },
      {
        title: "Continuous Uptime Monitoring",
        description: "24/7 automated health checks that monitor site availability and instant recovery protocols."
      },
      {
        title: "Automated Daily Backups",
        description: "Peace of mind with point-in-time restore points stored in secure, redundant cloud storage."
      },
      {
        title: "SSL & Domain Administration",
        description: "Automatic SSL certificate renewals and domain settings management so you never expire."
      }
    ],
    deliverables: [
      "High-speed CDN static hosting environment",
      "Free SSL security certificate (HTTPS) setup & maintenance",
      "Automated daily backups and instant rollback capability",
      "24/7 technical monitoring and uptime protection",
      "Direct technical support for DNS & domain settings"
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Hosting Environment Provisioning",
        description: "We configure your custom domain on high-speed edge hosting nodes."
      },
      {
        stepNumber: "02",
        title: "SSL & Security Shielding",
        description: "We issue SSL certificates and configure HTTP/3 encryption headers for secure data transmission."
      },
      {
        stepNumber: "03",
        title: "Backup & Restore Setup",
        description: "We set up automated daily snapshots stored in secure secondary cloud buckets."
      },
      {
        stepNumber: "04",
        title: "Proactive Health Monitoring",
        description: "Our automated monitoring tools watch your site 24/7 to guarantee peak uptime."
      }
    ],
    faq: [
      {
        question: "Do I need to manage server updates or plugins?",
        answer: "No! Because we build on modern Astro architecture, there are no databases or plugin updates to break your website. We handle 100% of administrative maintenance."
      },
      {
        question: "What happens if I need to update text or photos on my site?",
        answer: "As part of our managed hosting & administration, simply send us an email and our team will handle content updates promptly."
      }
    ]
  },
  {
    slug: "search-engine-readiness",
    name: "Search Engine Readiness",
    tagline: "Machine-readable structured data & clean LLM handshakes.",
    shortDescription: "Structure your website's data into a clean, machine-readable format so AI assistants can accurately recommend and cite your business to local customers.",
    heroDescription: "Make your business 100% readable to search engines and AI models. We equip your website with rich JSON-LD schemas and `./llms.txt` integration so AI search tools understand your exact services without confusion.",
    iconIndex: 4,
    heroImage: "/images/services/search-engine-readiness.svg",
    aiImpactTitle: "Direct Handshake via JSON-LD & LLM Files",
    aiImpactDescription: "When ChatGPT or Google AI Overviews read your website, they don't look at pretty colors—they parse structured data. Search Engine Readiness builds explicit schema representations of your business type, service areas, licenses and operating hours into clean machine data.",
    features: [
      {
        title: "Custom JSON-LD Schema Architecture",
        description: "Comprehensive LocalBusiness, Service and GeoCoordinates structured data embedded directly in site code."
      },
      {
        title: "LLM Machine Standard (llms.txt)",
        description: "Dedicated markdown documentation optimized specifically for Large Language Model crawlers."
      },
      {
        title: "Search Console & Indexing Setup",
        description: "Direct registration and XML sitemap submission with Google, Bing and major search portals."
      },
      {
        title: "Entity Disambiguation",
        description: "Structuring trade badges, review counts and operational hours to prevent AI hallucinations."
      }
    ],
    deliverables: [
      "Custom JSON-LD schema markup tailored to your specific trade",
      "Standardized `/llms.txt` and `/llms-full.txt` files for AI crawlers",
      "Google Search Console & Bing Webmaster Tools setup",
      "Valid XML Sitemaps & robots.txt configuration",
      "Schema validation report with zero errors or warnings"
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Business Entity Mapping",
        description: "We gather exact trade parameters, license details, physical coordinates and service lists."
      },
      {
        stepNumber: "02",
        title: "Schema & File Generation",
        description: "We write clean JSON-LD microdata and markdown files tailored for machine consumption."
      },
      {
        stepNumber: "03",
        title: "Search Portal Submission",
        description: "We submit sitemaps directly to Google Search Console, Bing and web indexing APIs."
      },
      {
        stepNumber: "04",
        title: "Machine Validation",
        description: "We test your markup using Google Rich Results Test and Schema Validator to confirm 100% compliance."
      }
    ],
    faq: [
      {
        question: "What is an llms.txt file?",
        answer: "An `llms.txt` file is a modern web standard similar to `robots.txt`, specifically formatted to help AI models like ChatGPT and Claude understand the key facts about your business in a clean, high-density format."
      },
      {
        question: "How does structured schema help my Google search ranking?",
        answer: "Schema markup gives search engines direct answers about your business location, hours and services, making your site eligible for rich search snippets and AI overview recommendations."
      }
    ]
  },
  {
    slug: "copywriting-content-adjustments",
    name: "Copywriting & Content Adjustments",
    tagline: "High-converting, factual messaging that drives phone calls.",
    shortDescription: "Improve website messaging and content with search-optimized copy designed to capture customers searching across modern online platforms.",
    heroDescription: "Replace generic filler text with sharp, compelling content rooted in local authority. We write high-density copy designed to convert local web visitors while feeding AI engines exact factual details.",
    iconIndex: 5,
    heroImage: "/images/services/copy-writing-content.svg",
    flipHeroImage: true,
    aiImpactTitle: "High Information Density for Human & Machine Readers",
    aiImpactDescription: "Generic marketing fluff like 'We deliver quality service' gets ignored by both human customers and AI engines. Factual, dense copy detailing your specific trade processes, emergency response times and city service areas provides the concrete data AI tools need to select your business.",
    features: [
      {
        title: "Factual Information Density",
        description: "Clear operational details, response times and trade specialties that build immediate customer trust."
      },
      {
        title: "Local Keyword Integration",
        description: "Natural placement of regional city, county and community names across Puyallup, Tacoma, Bellevue & PNW."
      },
      {
        title: "Clear Call-to-Action Messaging",
        description: "Action-oriented copy guiding visitors seamlessly toward calling or requesting a consultation."
      },
      {
        title: "Brand Voice Alignment",
        description: "Professional, down-to-earth tone that resonates with Pacific Northwest homeowners and business owners."
      }
    ],
    deliverables: [
      "Custom hero headlines, subheadings and conversion copy",
      "Service area & trade specialty content blocks",
      "Frequently Asked Questions (FAQ) copy formatted for AI search",
      "Meta titles & meta descriptions optimized for click-through rate",
      "Full brand voice review and local tone alignment"
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Local Audience Research",
        description: "We analyze local search intents and trade-specific questions PNW homeowners ask most."
      },
      {
        stepNumber: "02",
        title: "Factual Copy Drafting",
        description: "We craft clear, high-density messaging highlighting your trade licenses, experience and response times."
      },
      {
        stepNumber: "03",
        title: "SEO & AEO Optimization",
        description: "We naturally integrate city boundaries and conversational keywords without keyword stuffing."
      },
      {
        stepNumber: "04",
        title: "Review & Integration",
        description: "We refine the copy with your feedback and publish it across key landing page touchpoints."
      }
    ],
    faq: [
      {
        question: "Do you write copy tailored to my specific industry?",
        answer: "Yes! We work directly with plumbers, electricians, roofers, contractors and local service professionals to capture the exact terminology, licenses and trade details that set your business apart."
      },
      {
        question: "Will the copy sound natural to human readers?",
        answer: "Absolutely. We write plain-English, customer-focused copy first, ensuring it sounds authentic to local homeowners while meeting AI search indexing standards."
      }
    ]
  },
  {
    slug: "performance-visibility-audit",
    name: "Performance & Visibility Audit",
    tagline: "Identify speed bottlenecks, indexing gaps and AI visibility opportunities.",
    shortDescription: "Internal analysis of speed benchmarks, mobile responsiveness, accessibility scoring and AI engine discoverability.",
    heroDescription: "Uncover exactly what is holding your website back. Our comprehensive audit measures your mobile load speed, Google indexing status, Core Web Vitals and AI search engine recommendation presence.",
    iconIndex: 6,
    heroImage: "/images/services/performance.svg",
    flipHeroImage: true,
    aiImpactTitle: "Benchmark Your Position Against Local Competitors",
    aiImpactDescription: "Our performance & visibility audit inspects your website across all 5 Pillars of AI Visibility. We pinpoint hidden technical errors, slow server response times, missing schemas and gaps where competitors are outranking you on Google and ChatGPT.",
    features: [
      {
        title: "Core Web Vitals Speed Benchmark",
        description: "Detailed measurement of LCP, FID and CLS performance metrics on 3G/4G mobile networks."
      },
      {
        title: "AI Engine Visibility Score",
        description: "Real-world prompt testing across ChatGPT, Perplexity and Gemini to evaluate recommendation presence."
      },
      {
        title: "Technical SEO & Indexing Check",
        description: "Scanning for broken links, duplicate content, crawl errors and missing meta tags."
      },
      {
        title: "Actionable Prioritized Roadmap",
        description: "Step-by-step fix recommendation report categorized by impact and implementation effort."
      }
    ],
    deliverables: [
      "Comprehensive PDF & web performance audit report",
      "Lighthouse & Core Web Vitals speed breakdown",
      "AI search visibility benchmark score against local competitors",
      "Technical SEO fix checklist (URLs, tags, redirects, schemas)",
      "1-on-1 strategy call to walk through priority recommendations"
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Automated & Manual Inspection",
        description: "We run deep technical scans across your site's code, speed metrics and search console accounts."
      },
      {
        stepNumber: "02",
        title: "AI Search Prompt Testing",
        description: "We execute local trade prompts on top AI models to check if your business is recommended."
      },
      {
        stepNumber: "03",
        title: "Competitive Gap Analysis",
        description: "We benchmark your website against top local competitors in your service area."
      },
      {
        stepNumber: "04",
        title: "Roadmap Presentation",
        description: "We deliver a clear, actionable audit report detailing exact steps to unlock maximum online visibility."
      }
    ],
    faq: [
      {
        question: "How long does a performance & visibility audit take?",
        answer: "Our team completes a thorough performance & visibility audit within 48 to 72 hours, delivering a detailed report and strategy recommendations."
      },
      {
        question: "Do I need to give you password access to my site for an audit?",
        answer: "No sensitive login passwords are required for an initial audit. We perform external speed, indexation and AI prompt analysis safely."
      }
    ]
  },
  {
    slug: "accessibility-compliance",
    name: "Accessibility Compliance",
    tagline: "WCAG 2.2 standards for an inclusive, legally compliant website.",
    shortDescription: "WCAG 2.2 compliant web standards ensuring inclusivity, legal protection and a seamless usability experience for all visitors.",
    heroDescription: "Ensure your website is accessible to every local customer, regardless of ability. We implement WCAG 2.2 standards to improve usability, protect against legal liability and boost search rankings.",
    iconIndex: 7,
    heroImage: "/images/services/accessibility.svg",
    aiImpactTitle: "Accessible Web Design Benefits Both Humans and AI Crawlers",
    aiImpactDescription: "Accessibility compliance relies on clear color contrast, keyboard navigation, aria-labels and alt attributes. Remarkably, the exact code structures required for WCAG compliance make it significantly easier for AI search bots to navigate and understand your web pages.",
    features: [
      {
        title: "WCAG 2.2 AA Standards",
        description: "Ensuring proper visual color contrast, screen reader compatibility, 24x24px touch targets and font legibility under current W3C standards."
      },
      {
        title: "Keyboard & Focus Navigation",
        description: "Fully navigable site architecture with unobscured focus indicators and standard keyboard controls without mouse dependence."
      },
      {
        title: "Alt Text & ARIA Labels",
        description: "Meaningful image descriptions and structural ARIA attributes for screen reader devices."
      },
      {
        title: "Semantic Heading Hierarchy",
        description: "Properly ordered H1-H6 tags that establish logical content order for assistive tools."
      }
    ],
    deliverables: [
      "WCAG 2.2 AA accessibility audit & remediation report",
      "Screen reader compatibility verification",
      "Keyboard focus visibility & unobscured navigation fixes",
      "Color contrast, typography legibility and touch target enhancements",
      "Accessibility Statement page for your website"
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Accessibility Audit",
        description: "We evaluate your site using automated scanners and manual screen reader tools."
      },
      {
        stepNumber: "02",
        title: "Code Remediation",
        description: "We update HTML tags, ARIA attributes, image alt descriptions and form labels."
      },
      {
        stepNumber: "03",
        title: "Color, Focus & Target Tuning",
        description: "We adjust color contrast ratios, 24x24px touch target sizes and unobscured keyboard focus rings to meet WCAG 2.2 AA standards."
      },
      {
        stepNumber: "04",
        title: "Compliance Certification",
        description: "We publish a custom Accessibility Statement on your website documenting compliance."
      }
    ],
    faq: [
      {
        question: "Why is accessibility important for local businesses?",
        answer: "Beyond providing equal access to all members of your community, accessibility compliance protects your business from potential legal lawsuits and significantly improves overall user experience and search engine rankings."
      },
      {
        question: "What is the difference between WCAG 2.1 and WCAG 2.2?",
        answer: "WCAG 2.2 is the latest official W3C accessibility recommendation. It builds on WCAG 2.1 by introducing new criteria focused on modern mobile usability—such as minimum 24x24px touch target sizes, ensuring keyboard focus indicators are never obscured by sticky headers or popups, and eliminating cognitive hurdles in forms."
      },
      {
        question: "Does accessibility compliance slow down my site?",
        answer: "Not at all. In fact, clean semantic HTML and proper markup improve site performance and search crawler efficiency."
      }
    ]
  },
  {
    slug: "security-privacy-compliance",
    name: "Security & Privacy Compliance",
    tagline: "Protect your local business and customer data with robust security.",
    shortDescription: "Robust security measures, privacy compliance and site protection standards to safeguard your business and customer data.",
    heroDescription: "Protect your local business reputation and build customer trust. We implement enterprise-grade web security headers, HTTPS encryption, privacy policy compliance and malware protection.",
    iconIndex: 8,
    heroImage: "/images/services/security.svg",
    flipHeroImage: true,
    aiImpactTitle: "Build Unshakeable Entity Trust with Secure Infrastructure",
    aiImpactDescription: "Security and trust are core ranking factors for Google and AI engines. Sites lacking HTTPS certificates, privacy disclosures or security headers receive lower trust scores from AI crawlers. We ensure your site meets 100% of modern web security and privacy benchmarks.",
    features: [
      {
        title: "HTTPS Encryption & SSL Shield",
        description: "Modern TLS/SSL certificate setup ensuring encrypted end-to-end web connections."
      },
      {
        title: "Security Header Configuration",
        description: "Implementation of Content Security Policy (CSP), HSTS and X-Frame-Options to block attacks."
      },
      {
        title: "Privacy Policy & Cookie Standards",
        description: "Clear privacy policy documentation ensuring compliance with modern data regulations."
      },
      {
        title: "Zero Database Vulnerabilities",
        description: "Our static Astro builds eliminate SQL injection and database hack targets completely."
      }
    ],
    deliverables: [
      "Enterprise SSL/TLS encryption setup",
      "Custom security response headers (HSTS, CSP, X-Content-Type)",
      "Privacy Policy & Terms of Service template integration",
      "Form spam protection (reCAPTCHA/turnstile integration)",
      "Security audit certificate and clean scan badge"
    ],
    processSteps: [
      {
        stepNumber: "01",
        title: "Vulnerability Scan",
        description: "We perform security scans to check SSL protocols, header configurations and form safety."
      },
      {
        stepNumber: "02",
        title: "Header & SSL Hardening",
        description: "We configure strict transport security, SSL certificates and security policy headers."
      },
      {
        stepNumber: "03",
        title: "Privacy Policy Integration",
        description: "We embed transparent privacy policies and cookie compliance notices on your site."
      },
      {
        stepNumber: "04",
        title: "Security Verification",
        description: "We verify site security scores on SSL Labs and SecurityHeaders.com to achieve top grades."
      }
    ],
    faq: [
      {
        question: "Can an Astro website get hacked like a WordPress site?",
        answer: "Astro static websites have no database, no underlying PHP code and no vulnerable plugins, making them virtually immune to traditional web hacks and SQL injection attacks."
      },
      {
        question: "Do you help with contact form spam protection?",
        answer: "Yes! We implement modern, invisible spam protection like Cloudflare Turnstile to prevent spam bots without annoying your real human visitors."
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((service) => service.slug);
}
