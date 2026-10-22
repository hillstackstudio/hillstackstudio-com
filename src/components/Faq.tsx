import React, { useState } from 'react';

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
  schemaAnswer?: string;
}

interface FaqProps {
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
    question: "Do older customers really use AI like ChatGPT to find businesses?",
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
  title = "Frequently asked questions",
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
    <section id="faq" className="py-20 md:py-28 bg-[#F4F4F8] border-b border-slate-200/80">
      {/* FAQ Schema Markup for Search Engines and AI Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching site design system */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <h2 className="text-[2.5rem] sm:text-4xl md:text-5xl font-extrabold text-[#0B0F19] tracking-tight leading-[1.08] mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            Everything you need to know about our web engineering, AEO, and how we help your local business get discovered.
          </p>
        </div>

        {/* FAQ Accordion List matching site design system */}
        <div className="space-y-4 max-w-2xl sm:max-w-3xl mx-auto">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl sm:rounded-3xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-slate-300 shadow-md ring-1 ring-black/5'
                    : 'border-slate-200/80 shadow-xs hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full flex items-center justify-between text-left p-6 sm:p-7 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                >
                  <span className={`text-base sm:text-lg font-bold pr-4 leading-snug transition-colors ${
                    isOpen ? 'text-[#0B0F19]' : 'text-slate-800 group-hover:text-black'
                  }`}>
                    {item.question}
                  </span>
                  <span 
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen 
                        ? 'bg-[#0B0F19] text-white rotate-45 shadow-xs' 
                        : 'bg-slate-100 text-slate-700 group-hover:bg-[#0B0F19] group-hover:text-white'
                    }`}
                    aria-label={isOpen ? "Collapse question" : "Expand question"}
                  >
                    <svg 
                      className="w-4 h-4 transition-transform duration-300" 
                      viewBox="0 0 16 16" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <line x1="8" y1="2" x2="8" y2="14" />
                      <line x1="2" y1="8" x2="14" y2="8" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div 
                    id={`faq-answer-${index}`} 
                    role="region"
                    className="px-6 pb-6 pt-0 sm:px-7 sm:pb-7 text-slate-600 text-sm sm:text-base leading-relaxed text-left"
                  >
                    <div className="pt-3.5 border-t border-slate-100">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Faq;
