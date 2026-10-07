import React from 'react';

export interface WorkItem {
  id: string;
  company: string;
  domain: string;
  category: string;
  image?: string;
  video?: string;
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
    video: '/videos/recent-work-lrc.mp4',
    image: '/images/recent-work/live-right-chiro.png',
    testimonial:
      '"It was a pleasure working with Hill Stack Studio, our traffic has increased significantly with higher rankings on Google and ChatGPT. We’re also converting a larger percentage of website traffic with better user engagement and more patient inquiries."',
    author: {
      name: 'Calvin Smolich',
      title: 'Owner & Doctor of Chiropractic',
      initials: 'CS',
    },
    metrics: ['+140% Web Traffic', '97/100 Performance', '100/100 SEO Score'],
    color: '#2563EB',
  },
];

const RecentWork: React.FC<RecentWorkProps> = ({ works = defaultWorks }) => {
  const currentWork = works[0] || defaultWorks[0];
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section id="recent-work" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching site design system */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <span className="text-[#2563EB] text-sm font-bold uppercase tracking-wider mb-2 block">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B0F19] tracking-tight leading-[1.15]">
            Discoverable Websites & Optimized Results
          </h2>
        </div>

        {/* Showcase Layout: Video showcase above link and description */}
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Site Showcase Display */}
          <div className="w-full mb-8 sm:mb-10">
            <a
              href={`https://${currentWork.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <video 
                ref={videoRef}
                autoPlay 
                loop 
                muted 
                playsInline 
                poster={currentWork.image}
                className="w-full h-auto rounded-xl shadow-lg"
              >
                <source src={currentWork.video || "/videos/recent-work-lrc.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </a>
          </div>

          {/* Details below: Link to site, Description/Testimonial, Metrics, Author */}
          <div className="w-full max-w-3xl flex flex-col items-center text-center">
            {/* Domain link with brand accent color */}
            <a
              href={`https://${currentWork.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#2563EB] hover:text-[#1D4ED8] font-bold text-lg sm:text-xl transition-colors group mb-6"
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

            {/* Main Testimonial Quote / Description */}
            <blockquote className="text-xl sm:text-2xl font-bold text-[#0B0F19] leading-snug sm:leading-normal tracking-tight mb-8">
              {currentWork.testimonial}
            </blockquote>

            {/* Impact Metrics Badges matching brand primary tint */}
            {currentWork.metrics && currentWork.metrics.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {currentWork.metrics.map((metric, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-blue-50 text-[#2563EB] border border-blue-200/80"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            )}

            {/* Author Profile Footer */}
            <div className="flex flex-col items-center text-center pt-6 border-t border-slate-200/80 w-full max-w-md mx-auto">
              {currentWork.author.avatar ? (
                <img
                  src={currentWork.author.avatar}
                  alt={currentWork.author.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm mb-3"
                />
              ) : (
                <div className="w-14 h-14 rounded-full bg-[#2563EB] text-white font-bold flex items-center justify-center text-base shadow-md mb-3">
                  {currentWork.author.initials}
                </div>
              )}
              <div>
                <h4 className="text-lg font-bold text-[#0B0F19] mb-1">{currentWork.author.name}</h4>
                <p className="text-sm sm:text-base text-slate-500 font-normal">{currentWork.author.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
