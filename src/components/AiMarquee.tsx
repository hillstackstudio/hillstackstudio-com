import React from 'react';

export interface AiBrand {
  name: string;
  logoSrc: string;
}

const aiBrands: AiBrand[] = [
  {
    name: 'ChatGPT',
    logoSrc: '/images/ai-logos/chatgpt-logo.png.webp',
  },
  {
    name: 'Claude',
    logoSrc: '/images/ai-logos/claude-ai-logo.png.webp',
  },
  {
    name: 'Copilot',
    logoSrc: '/images/ai-logos/co-pilot-ai-logo.png.webp',
  },
  {
    name: 'Perplexity',
    logoSrc: '/images/ai-logos/perplexity-ai-logo.png.webp',
  },
  {
    name: 'Gemini',
    logoSrc: '/images/ai-logos/gemini-logo.png.webp',
  },
  {
    name: 'Google',
    logoSrc: '/images/ai-logos/google-logo-1.png.webp',
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
    <div className="w-full my-6 sm:my-8 md:my-10">
      {/* Title above marquee matching site design system */}
      <span className="text-[#2563EB] text-sm font-bold uppercase tracking-wider mb-4 sm:mb-5 block text-center">
        {title}
      </span>

      {/* Marquee Outer Container with horizontal fade mask */}
      <div className="relative w-full overflow-hidden py-2 sm:py-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Infinite Moving Row */}
        <div className="flex w-max items-center gap-10 sm:gap-14 md:gap-16 lg:gap-20 animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
          {marqueeItems.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-9 sm:h-11 md:h-13 lg:h-14 px-3 select-none group cursor-pointer transition-transform duration-300 hover:scale-110"
            >
              <img
                src={brand.logoSrc}
                alt={`${brand.name} logo`}
                className="h-full w-auto object-contain max-w-[140px] sm:max-w-[180px] md:max-w-[220px] opacity-90 group-hover:opacity-100 transition-opacity duration-200"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiMarquee;
