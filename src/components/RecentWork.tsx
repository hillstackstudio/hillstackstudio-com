import React, { useState } from 'react';

export interface WorkItem {
  id: string;
  company: string;
  domain: string;
  category: string;
  image?: string;
  testimonial: string;
  author: {
    name: string;
    title: string;
    avatar?: string;
    initials: string;
  };
  metrics?: string[];
  color?: string;
}

interface RecentWorkProps {
  works?: WorkItem[];
}

const defaultWorks: WorkItem[] = [
  {
    id: 'liverightchiro',
    company: 'Live Right Chiro',
    domain: 'live-right-chiro.pages.dev',
    category: 'Chiropractic & Wellness',
    image: '/images/recent-work/live-right-chiro.png',
    testimonial:
      '"We\'ve seen an increase in website traffic, and we\'ve received lots of positive feedback from the community. Hill Stack Studio listened, knew the business, and provided a great product on time."',
    author: {
      name: 'Calvin Smolich',
      title: 'Owner & Doctor of Chriopractic',
      initials: 'CS',
    },
    metrics: ['+140% Web Traffic', '97/100 Performance', '100/100 SEO Score'],
    color: '#17A398',
  },
  {
    id: 'soundview',
    company: 'Soundview Plumbing & HVAC',
    domain: 'soundviewplumbing.com',
    category: 'Local Trade Services',
    image: '/images/recent-work/soundview.jpg',
    testimonial:
      '"After launching our new Astro site with Hill Stack Studio, our emergency service calls tripled. When local homeowners ask ChatGPT or Siri for a 24/7 plumber in Puyallup, we show up first!"',
    author: {
      name: 'Marcus Vance',
      title: 'Owner & Master Plumber',
      initials: 'MV',
    },
    metrics: ['3x Emergency Calls', '0.3s Load Speed', 'ChatGPT Ready'],
    color: '#17A398',
  },
  {
    id: 'cascade',
    company: 'Cascade Custom Builders',
    domain: 'cascadebuilderspnw.com',
    category: 'Architecture & Contracting',
    image: '/images/recent-work/cascade.jpg',
    testimonial:
      '"Hill Stack Studio turned our outdated site into a high-converting digital storefront. Their local AI search audit gave us a massive competitive edge across Tacoma and Seattle."',
    author: {
      name: 'Elena Rostova',
      title: 'Operations Manager',
      initials: 'ER',
    },
    metrics: ['+180% Organic Leads', '100% Machine Schema', 'Zero Downtime'],
    color: '#17A398',
  },
];

const RecentWork: React.FC<RecentWorkProps> = ({ works = defaultWorks }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentWork = works[activeIndex] || works[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? works.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === works.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="recent-work" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching site design system */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <span className="text-[#17A398] text-sm font-bold uppercase tracking-wider mb-2 block">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B0F19] tracking-tight leading-[1.15]">
            Discoverable Websites & Optimized Results
          </h2>
        </div>

        {/* Project Selector Tabs & Navigation */}
        {works.length > 1 && (
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-200/80 max-w-6xl mx-auto">
            {/* Tab Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
              {works.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'bg-[#17A398] text-white shadow-md shadow-teal-500/20'
                        : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200/80 hover:text-[#0B0F19]'
                    }`}
                  >
                    {item.company}
                  </button>
                );
              })}
            </div>

            {/* Prev / Next Controls */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 mr-2">
                {activeIndex + 1} / {works.length}
              </span>
              <button
                onClick={handlePrev}
                aria-label="Previous project"
                className="w-9 h-9 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 hover:bg-teal-50 hover:text-[#17A398] hover:border-teal-200 transition-colors font-bold text-base"
              >
                ‹
              </button>
              <button
                onClick={handleNext}
                aria-label="Next project"
                className="w-9 h-9 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 hover:bg-teal-50 hover:text-[#17A398] hover:border-teal-200 transition-colors font-bold text-base"
              >
                ›
              </button>
            </div>
          </div>
        )}

        {/* Showcase Grid Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Testimonial & Client Metadata */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
            <div>
              {/* Domain link with brand accent color */}
              <a
                href={`https://${currentWork.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#17A398] hover:text-[#128279] font-bold text-lg sm:text-xl transition-colors group mb-6"
              >
                <span>{currentWork.domain}</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>

              {/* Main Testimonial Quote */}
              <blockquote className="text-xl sm:text-2xl font-bold text-[#0B0F19] leading-snug sm:leading-normal tracking-tight mb-8">
                {currentWork.testimonial}
              </blockquote>

              {/* Impact Metrics Badges matching brand primary tint */}
              {currentWork.metrics && currentWork.metrics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {currentWork.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-[#17A398] border border-teal-200/80"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Author Profile Footer */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200/80">
              {currentWork.author.avatar ? (
                <img
                  src={currentWork.author.avatar}
                  alt={currentWork.author.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-[#17A398] text-white font-bold flex items-center justify-center text-sm shadow-md">
                  {currentWork.author.initials}
                </div>
              )}
              <div>
                <h4 className="text-base font-bold text-[#0B0F19]">{currentWork.author.name}</h4>
                <p className="text-sm text-slate-500 font-normal">{currentWork.author.title}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Image Display without browser frame */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-3 sm:p-4 border border-slate-200/80 shadow-xl overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/70 min-h-[320px] sm:min-h-[400px] flex items-center justify-center">
                {currentWork.image ? (
                  <img
                    src={currentWork.image}
                    alt={`${currentWork.company} Website`}
                    className="w-full h-full object-cover object-top rounded-2xl"
                    onError={(e) => {
                      // Fallback if local image doesn't exist yet
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `
                          <div class="flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-slate-50 to-teal-50/40 w-full min-h-[360px]">
                            <div class="w-16 h-16 rounded-2xl bg-teal-50 text-[#17A398] flex items-center justify-center mb-4 border border-teal-100 shadow-sm">
                              <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <span class="text-base font-bold text-[#0B0F19] mb-1">${currentWork.company} Screenshot</span>
                            <span class="text-xs text-slate-500 max-w-xs">${currentWork.domain}</span>
                          </div>
                        `;
                      }
                    }}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-slate-50 to-teal-50/40 w-full min-h-[360px]">
                    <div className="w-16 h-16 rounded-2xl bg-teal-50 text-[#17A398] flex items-center justify-center mb-4 border border-teal-100 shadow-sm">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-base font-bold text-[#0B0F19] mb-1">{currentWork.company} Screenshot</span>
                    <span className="text-xs text-slate-500 max-w-xs">{currentWork.domain}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
