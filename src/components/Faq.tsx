import React, { useState } from 'react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  eyebrow?: string;
  title?: string;
  items?: FaqItem[];
}

const defaultFaqs: FaqItem[] = [
  {
    question: "What is Generative Engine Optimization (GEO) and why does my business need it?",
    answer: "Traditional SEO focuses on Google keyword ranking. Generative Engine Optimization (GEO) ensures conversational AI platforms—including ChatGPT, Google Gemini, Copilot, and Perplexity—actively recognize, cite, and recommend your local business when customers ask natural questions about services in your area."
  },
  {
    question: "Why do you build websites with Astro instead of WordPress or Squarespace?",
    answer: "WordPress and visual page builders rely on bloated plugins and heavy database queries that slow down page speeds and require constant security maintenance. We use Astro to compile clean, ultra-fast static HTML. Your website loads in under a second on mobile devices, scores 95-100 on performance, and has zero plugin maintenance headaches."
  },
  {
    question: "Will my business email or existing Google rankings be affected during a migration?",
    answer: "No, your daily operations and email services (such as Google Workspace or Microsoft 365) experience zero downtime. We carefully audit your existing URLs, implement proper 301 redirects, and transfer all metadata so you retain your hard-earned domain authority and search visibility."
  },
  {
    question: "How do your websites convert mobile visitors into paying customers?",
    answer: "Over 70% of local service inquiries happen on mobile phones. Our websites are built mobile-first with instant tap-to-call buttons, frictionless quote consultation forms, and lightning-fast navigation that removes hesitation and converts visitors into leads."
  },
  {
    question: "What ongoing website administration and support is included?",
    answer: "We provide hassle-free hosting, high-performance edge delivery, SSL certificate management, and hands-on updates. When you need text or photo adjustments, our team takes care of it directly—giving you peace of mind without surprise agency retainer fees."
  }
];

const Faq: React.FC<FaqProps> = ({
  eyebrow = "Common Questions",
  title = "Frequently Asked Questions",
  items = defaultFaqs
}) => {
  // First item open by default matching reference design
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      {/* FAQ Schema Markup for Search Engines and AI Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching site design system */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#2563EB] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 block">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B0F19] tracking-tight leading-[1.15]">
            Frequently <br className="hidden sm:inline" />
            Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion List matching component reference */}
        <div className="space-y-3 sm:space-y-3.5 max-w-2xl sm:max-w-3xl mx-auto">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            if (isOpen) {
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl sm:rounded-[28px] p-6 sm:p-7 border border-slate-200/90 shadow-sm transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded="true"
                    aria-controls={`faq-answer-${index}`}
                    className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#0B0F19] pr-4 leading-snug">
                      {item.question}
                    </span>
                    <span 
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EBF2FE] hover:bg-blue-100 text-slate-800 flex items-center justify-center shrink-0 transition-colors"
                      aria-label="Close question"
                    >
                      <svg 
                        className="w-3.5 h-3.5 text-slate-800" 
                        viewBox="0 0 14 14" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M2 2l10 10M12 2l-10 10" />
                      </svg>
                    </span>
                  </button>

                  <div 
                    id={`faq-answer-${index}`} 
                    role="region"
                    className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3.5 pt-1 pr-6 sm:pr-10 text-left border-t border-slate-100/90 pt-3.5"
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            }

            return (
              <button
                key={index}
                type="button"
                onClick={() => toggleItem(index)}
                aria-expanded="false"
                aria-controls={`faq-answer-${index}`}
                className="w-full flex items-center justify-between py-3.5 px-6 sm:py-4 sm:px-8 bg-[#EEF4FB] hover:bg-[#E5EEF9] border border-[#E2E8F0]/70 rounded-full transition-all duration-200 text-left group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40"
              >
                <span className="text-base sm:text-lg font-semibold text-[#0B0F19] pr-4 leading-snug">
                  {item.question}
                </span>
                <span 
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-xs border border-slate-200/60 text-slate-800 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                  aria-label="Expand question"
                >
                  <svg 
                    className="w-3.5 h-3.5 text-slate-800" 
                    viewBox="0 0 14 14" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M7 2v10M2 7h10" />
                  </svg>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
