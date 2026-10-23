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
    tagline: "Fast, reliable, high-converting websites engineered for your business needs.",
    shortDescription: "Clean custom code and modern website redesigns engineered for fast page loads, AI search recommendations and customer conversion.",
    heroDescription: "Clean custom code and modern website redesigns engineered for fast page loads, AI search recommendations and customer conversion.",
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
      "Custom-built for speed and reliability, tailored directly to your local market.",
      "Clean mobile designs verified on iOS and Android devices",
      "Integrated tap-to-call buttons and interactive contact forms",
      "Core Web Vitals green-check optimization (90+ Lighthouse scores)",
      "Continuous updates with zero interruptions to your business."
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
        question: "How is this different from a Squarespace or Wordpress website?",
        answer: "Most websites built on platforms like WordPress or Squarespace are loaded down with heavy templates and unnecessary background code that degrades your load speeds over time.<br>Instead, we build your site from the ground up using lean, clean code. Because there is no unnecessary clutter under the hood, your site opens instantly and runs smoothly on mobile phones."
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
    tagline: "Be the top AI recommended answer when local customers ask.",
    shortDescription: "An in-depth look at why local customers might be missing your business online. We uncover why search engines and AI assistants are skipping over your website.",
    heroDescription: "Our comprehensive audit identifies why your business is not recommended to local customers. Allowing us to fix these issues so local searches can lead more customers to you.",
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
      "Complete AI Visibility and SEO Audit Report",
      "Enable your business to be recommended when locals ask ChatGPT, Gemini or Siri for services you provide.",
      "Organize your licenses, credentials and business info so search systems easily verify who you are and what you do.",
      "Define your exact coverage area so nearby customers will be directed to you"
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
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((service) => service.slug);
}
