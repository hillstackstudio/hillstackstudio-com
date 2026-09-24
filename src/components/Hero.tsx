import React from 'react';
import AiMarquee from './AiMarquee';

interface HeroProps {
  companyName?: string;
  tagline?: string;
  aboutText?: string;
  primaryCallToAction?: string;
  regionalKeywords?: string[];
}

const Hero: React.FC<HeroProps> = ({
  companyName = "Hill Stack Studio",
  tagline = "Locally rooted. AI Optimized.",
  aboutText = "At Hill Stack Studio, we pair personal consulting with Generative Engine Optimization (GEO) to help our local businesses stand out on traditional search engines like Google and next-generation AI platforms like ChatGPT, Copilot, Perplexity, and Gemini.",
  primaryCallToAction = "See Your Online Visibility",
  regionalKeywords = ["Seattle", "Bellevue", "Tacoma", "King County", "Pierce County", "Pacific Northwest"]
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E6F6F5] to-[#F8FAFC] pt-16 pb-16 md:pt-24 md:pb-20 border-b border-slate-200/70">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-teal-100/60 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtitle Text */}
        <span className="text-[#17A398] text-sm font-bold uppercase tracking-wider mb-6 sm:mb-8 block">
          Performance Web Design &amp; AI Search Optimization
        </span>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B0F19] tracking-tight max-w-4xl mx-auto leading-[1.15] mb-8 sm:mb-12">
          Empower Your Business <br className="hidden sm:inline" />
          in the Age of AI Search
        </h1>

        {/* Subtitle Paragraph */}
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 sm:mb-16 font-normal leading-relaxed">
          {aboutText}
        </p>

        {/* Action Buttons (Swapped Positions) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 sm:mb-20 md:mb-24">
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-slate-50 text-[#0B0F19] border border-slate-300 hover:border-slate-400 px-8 py-3.5 rounded-full font-bold text-base transition-all duration-200 shadow-sm"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#17A398] hover:bg-[#128279] text-white px-8 py-3.5 rounded-full font-bold text-base shadow-lg shadow-teal-500/25 hover:shadow-teal-500/35 transition-all duration-200 active:scale-95"
          >
            <span>{primaryCallToAction}</span>
          </a>
        </div>

        {/* AI Search Brand Infinite Scrolling Marquee */}
        <AiMarquee />
      </div>
    </section>
  );
};

export default Hero;