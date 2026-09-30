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
  aboutText = "At Hill Stack Studio, we pair personal consulting with Generative Engine Optimization (GEO) to help our local businesses stand out on traditional search engines like Google and next-generation AI platforms like ChatGPT, Copilot, Perplexity and Gemini.",
  primaryCallToAction = "See Your Online Visibility",
  regionalKeywords = ["Seattle", "Bellevue", "Tacoma", "King County", "Pierce County", "Pacific Northwest"]
}) => {
  return (
    <section className="relative overflow-hidden -mt-20 pt-28 pb-16 sm:pt-36 md:pt-44 md:pb-20 border-b border-slate-200/70">
      {/* 1. Base Vertical Gradient: flows smoothly from header blue (#EFF6FF) down into next section (#F8FAFC) */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'linear-gradient(180deg, #EFF6FF 0%, #F1F7FE 30%, #F5F9FD 60%, #F8FAFC 90%, #F8FAFC 100%)'
        }}
        aria-hidden="true" 
      />

      {/* 2. Top-Center Ambient Illumination: encompasses the header nav bar and upper fold in soft radiant light */}
      <div 
        className="absolute -top-10 sm:-top-16 left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] md:w-[1250px] h-[320px] sm:h-[400px] rounded-full pointer-events-none" 
        style={{
          background: 'radial-gradient(ellipse at 50% 20%, rgba(191, 219, 254, 0.45) 0%, rgba(219, 234, 254, 0.22) 50%, transparent 80%)',
          filter: 'blur(55px)'
        }}
        aria-hidden="true" 
      />

      {/* 3. Left-Side Ambient Depth Glow (established site brand blues: #3B82F6 / #60A5FA / #93C5FD) */}
      <div 
        className="absolute -left-20 sm:-left-12 md:left-[2%] lg:left-[5%] top-[8%] sm:top-[12%] w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full pointer-events-none" 
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.22) 0%, rgba(96, 165, 250, 0.18) 45%, rgba(147, 197, 253, 0.06) 70%, transparent 85%)',
          filter: 'blur(75px)'
        }}
        aria-hidden="true" 
      />

      {/* 4. Right-Side Ambient Depth Glow (established site brand blues: #2563EB / #3B82F6 / #93C5FD) */}
      <div 
        className="absolute -right-20 sm:-right-12 md:right-[2%] lg:right-[5%] top-[18%] sm:top-[22%] w-[400px] h-[400px] sm:w-[520px] sm:h-[520px] lg:w-[620px] lg:h-[620px] rounded-full pointer-events-none" 
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.20) 0%, rgba(59, 130, 246, 0.16) 45%, rgba(147, 197, 253, 0.06) 70%, transparent 85%)',
          filter: 'blur(85px)'
        }}
        aria-hidden="true" 
      />

      {/* 5. Center Focal Luminous Core (Highlight keeping main text ultra-crisp & high contrast) */}
      <div 
        className="absolute top-[16%] sm:top-[20%] left-1/2 -translate-x-1/2 w-[520px] sm:w-[720px] md:w-[920px] lg:w-[1080px] h-[360px] sm:h-[420px] md:h-[480px] rounded-full pointer-events-none" 
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0) 80%)',
          filter: 'blur(35px)'
        }}
        aria-hidden="true" 
      />

      {/* 6. Bottom Ambient Resolution: smoothly gradients all depth into #F8FAFC of the next section */}
      <div 
        className="absolute bottom-0 inset-x-0 h-44 pointer-events-none" 
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(248, 250, 252, 0.6) 45%, #F8FAFC 100%)'
        }}
        aria-hidden="true" 
      />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtitle Text */}
        <span className="text-[#2563EB] text-sm font-bold uppercase tracking-wider mb-6 sm:mb-8 block">
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
            href="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-slate-50 text-[#0B0F19] border border-slate-300 hover:border-slate-400 px-8 py-3.5 rounded-full font-bold text-base transition-all duration-200 shadow-sm"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-3.5 rounded-full font-bold text-base transition-all duration-200 active:scale-95 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30"
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