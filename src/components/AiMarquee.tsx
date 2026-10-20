import React from 'react';

export interface AiBrand {
  name: string;
  logoSrc: string;
}

const aiBrands: AiBrand[] = [
  {
    name: 'Copilot',
    logoSrc: '/images/ai-logos/co-pilot-ai-logo.png.webp',
  },
  {
    name: 'Google',
    logoSrc: '/images/ai-logos/google-logo-1.png.webp',
  },
  {
    name: 'Apple Siri',
    logoSrc: '/images/ai-logos/apple-siri.png.webp',
  },
  {
    name: 'Gemini',
    logoSrc: '/images/ai-logos/gemini-logo.png.webp',
  },
  {
    name: 'ChatGPT',
    logoSrc: '/images/ai-logos/chatgpt-logo.png.webp',
  },
  {
    name: 'Perplexity',
    logoSrc: '/images/ai-logos/perplexity-ai-logo.png.webp',
  },
];

export interface AiMarqueeProps {
  title?: string;
}

export const AiMarquee: React.FC<AiMarqueeProps> = ({
  title = "Engineered for Modern Search",
}) => {
  // Duplicate array 4x to guarantee a seamless continuous translateX(-50%) loop on all screen sizes
  const marqueeItems = [...aiBrands, ...aiBrands, ...aiBrands, ...aiBrands];

  return (
    <div className="relative w-full my-6 sm:my-8 md:my-10">
      {/* Radial Glow behind AI Marquee (#F9FAFC) for contrast and readability */}
      <div 
        className="absolute top-1/2 left-1/2 w-[95%] max-w-[900px] h-[180px] sm:h-[220px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(249, 250, 252, 0.96) 0%, rgba(249, 250, 252, 0.88) 45%, rgba(249, 250, 252, 0.45) 70%, rgba(249, 250, 252, 0) 85%)',
          filter: 'blur(30px)',
          transform: 'translate3d(-50%, -50%, 0)',
          WebkitTransform: 'translate3d(-50%, -50%, 0)',
        }}
        aria-hidden="true"
      />

      {/* Title above marquee matching site design system */}
      <span className="relative z-10 text-[#0B0F19] text-sm font-bold uppercase tracking-wider mb-4 sm:mb-5 block text-center">
        {title}
      </span>

      {/* Marquee Outer Container with horizontal fade mask - non-interactive continuous scroll */}
      <div 
        className="relative z-10 w-full overflow-hidden py-2 sm:py-3 pointer-events-none select-none"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          transform: 'translateZ(0)',
          WebkitTransform: 'translateZ(0)',
        }}
      >
        {/* Infinite Moving Row - continuously scrolls uninterrupted */}
        <div 
          className="flex w-max items-center gap-10 sm:gap-14 md:gap-16 lg:gap-20 animate-marquee"
          style={{
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
            WebkitTransform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          {marqueeItems.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-9 sm:h-11 md:h-13 lg:h-14 px-3"
            >
              <img
                src={brand.logoSrc}
                alt={`${brand.name} logo`}
                width={300}
                height={78}
                className="h-full w-auto object-contain max-w-[140px] sm:max-w-[180px] md:max-w-[220px] opacity-90"
                loading="eager"
                decoding="async"
                draggable={false}
                style={{
                  aspectRatio: '300 / 78',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiMarquee;
