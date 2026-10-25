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
  companyName: _companyName = "Hill Stack Studio",
  tagline: _tagline = "Locally rooted. AI Optimized.",
  aboutText = "We rebuild your website to better reflect your business. We run our audit so local searches can lead customers straight to you.",
  primaryCallToAction = "Audit Your Website",
  regionalKeywords: _regionalKeywords = ["Seattle", "Bellevue", "Tacoma", "King County", "Pierce County", "Pacific Northwest"]
}) => {
  return (
    <section className="relative overflow-hidden -mt-20 pt-28 pb-16 sm:pt-36 md:pt-44 md:pb-20 border-b border-slate-200/70">
      {/* Hero Background Image */}
      <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden" aria-hidden="true">
        <img 
          src="/images/water-bg2.webp" 
          alt="" 
          className="w-full h-full object-cover object-center"
        />
        {/* Bottom gradient fade into next section (#E3E9EF) */}
        <div 
          className="absolute inset-x-0 bottom-0 h-32 sm:h-44 md:h-56 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(227, 233, 239, 0) 0%, rgba(227, 233, 239, 0.4) 35%, rgba(227, 233, 239, 0.85) 70%, #E3E9EF 100%)'
          }}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Radial Glow behind text for high contrast readability (#F9FAFC) */}
        <div 
          className="absolute top-[42%] sm:top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] sm:w-[90%] md:w-[85%] max-w-[1050px] h-[520px] sm:h-[620px] md:h-[680px] rounded-full pointer-events-none -z-10"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(249, 250, 252, 0.96) 0%, rgba(249, 250, 252, 0.90) 38%, rgba(249, 250, 252, 0.55) 62%, rgba(249, 250, 252, 0) 82%)',
            filter: 'blur(35px)'
          }}
          aria-hidden="true"
        />

        {/* Main Headline */}
        <h1 
          className="hero-landing-headline font-fraunces text-[clamp(2.75rem,8vw,5rem)] font-bold text-[#0B0F19] tracking-tight max-w-5xl mx-auto leading-[1.08] sm:leading-[1.12] mb-8 sm:mb-12"
          style={{ 
            fontFamily: "'Fraunces', Georgia, serif",
            fontWeight: 700
          }}
        >
          Help Local Customers <br />
          Find Your Business <br />
          <span className="hand-drawn-wrapper">
            <span className="hand-drawn-text">Instantly</span>
            {/* Hand-drawn organic angled underline */}
            <svg 
              className="hand-drawn-underline" 
              viewBox="0 0 280 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                {/* SVG Filter creating natural crayon / chalk rough edge and grain texture */}
                <filter id="crayon-roughness" x="-10%" y="-40%" width="120%" height="180%" filterUnits="objectBoundingBox">
                  <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.4" xChannelSelector="R" yChannelSelector="G" result="displaced" />
                  <feMerge>
                    <feMergeNode in="displaced" />
                  </feMerge>
                </filter>
              </defs>

              {/* Primary expressive hand-drawn stroke with a natural hand-drawn slight angle */}
              <path 
                className="hand-drawn-path"
                d="M 6,17 C 52,19 118,13 182,10 C 218,8.5 254,9 275,13"
                stroke="#FBF719" 
                strokeWidth="7" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                filter="url(#crayon-roughness)"
                opacity="0.95"
              />

              {/* Secondary overlapping hand pressure accent */}
              <path 
                className="hand-drawn-path"
                d="M 16,16 C 68,17.5 132,13 192,10.5 C 224,9.2 250,9.8 268,12"
                stroke="#FBF719" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                filter="url(#crayon-roughness)"
                opacity="0.85"
              />
            </svg>
          </span>
        </h1>

        {/* Subtitle Paragraph */}
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 sm:mb-16 font-normal leading-relaxed">
          {aboutText}
        </p>

        {/* Action Buttons: Audit on left, Learn More on right */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 sm:mb-20 md:mb-24">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-black hover:bg-slate-900 text-white border border-black px-8 py-3.5 rounded-full font-bold text-base transition-all duration-200 active:scale-95 shadow-md hover:shadow-lg"
          >
            <span>{primaryCallToAction}</span>
          </a>
          <a
            href="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent hover:bg-black/5 text-[#0B0F19] border border-black px-8 py-3.5 rounded-full font-bold text-base transition-all duration-200 shadow-none active:scale-95"
          >
            Learn More
          </a>
        </div>

        {/* AI Search Brand Infinite Scrolling Marquee */}
        <AiMarquee />
      </div>
    </section>
  );
};

export default Hero;