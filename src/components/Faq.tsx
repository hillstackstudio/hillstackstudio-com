import React, { useState } from 'react';

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
  schemaAnswer?: string;
}

interface FaqProps {
  eyebrow?: string;
  title?: string;
  items?: FaqItem[];
}

const defaultFaqs: FaqItem[] = [
  {
    question: "What is Answer Engine Optimization (AEO)?",
    answer: "Traditional SEO gets your website listed and ranked on Google's search links. AEO makes sure AI tools like ChatGPT, Google AI and Siri actually recommend your business by name when locals ask for help in your area."
  },
  {
    question: "Why is AI visibility critical for local businesses right now?",
    answer: (
      <>
        People aren't clicking through long lists of Google links like they used to, they are asking AI for quick answers. When someone asks ChatGPT or Siri, <em className="italic">"Who is the best plumber near me for an emergency?"</em>, the AI gives them 2 or 3 direct names. If your website isn't built for AI, those calls / bookings go straight to your competitors.
      </>
    ),
    schemaAnswer: "People aren't clicking through long lists of Google links like they used to, they are asking AI for quick answers. When someone asks ChatGPT or Siri, \"Who is the best plumber near me for an emergency?\", the AI gives them 2 or 3 direct names. If your website isn't built for AI, those calls / bookings go straight to your competitors."
  },
  {
    question: "My customers are local and older. Do they really use AI like ChatGPT to find businesses?",
    answer: (
      <>
        <strong className="font-semibold text-[#0B0F19]">Yes, even if they don't realize it!</strong> While younger generations might open the ChatGPT app, older customers use AI every day through Google's new top-of-page summary boxes, voice search on iPhones (Siri) and smart speakers. Whenever someone speaks or types a question into Google today, an AI engine is generating the answer.
      </>
    ),
    schemaAnswer: "Yes, even if they don't realize it! While younger generations might open the ChatGPT app, older customers use AI every day through Google's new top-of-page summary boxes, voice search on iPhones (Siri) and smart speakers. Whenever someone speaks or types a question into Google today, an AI engine is generating the answer."
  },
  {
    question: "How much time will my business need to invest during the project?",
    answer: (
      <>
        <strong className="font-semibold text-[#0B0F19]">Less than an hour total.</strong> After one 30-minute intake call where we learn about your business, goals and brand, our team handles everything else. From the design to technical setup. We respect your time so you can stay focused on running your business.
      </>
    ),
    schemaAnswer: "Less than an hour total. After one 30-minute intake call where we learn about your business, goals and brand, our team handles everything else. From the design to technical setup. We respect your time so you can stay focused on running your business."
  },
  {
    question: "Do I own my website and digital assets after the website rebuild?",
    answer: "Yes, 100%. You own your domain, website code, images and content. We build on modern, scalable infrastructure that you own outright."
  }
];

const Faq: React.FC<FaqProps> = ({
  eyebrow = "FAQ",
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
        "text": item.schemaAnswer || (typeof item.answer === 'string' ? item.answer : '')
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
