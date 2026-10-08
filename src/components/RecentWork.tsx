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
      name: 'Dr. Calvin Smolich',
      title: 'Owner, Live Right Chiro',
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

        {/* Showcase Layout: Video showcase above description */}
        <div className="max-w-4xl mx-auto">
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

          {/* Details below: Tailwind Horizontal Card with Author on Left, Description on Right */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              {/* Author Profile (CS icon and text below): below description on mobile, on left on desktop */}
              <div className="order-2 md:order-1 w-full md:w-auto flex flex-col items-center text-center pt-6 md:pt-0 border-t md:border-t-0 md:border-r border-slate-200/80 md:pr-8 md:min-w-[240px] shrink-0">
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

              {/* Description: above author on mobile, on right on desktop */}
              <div className="order-1 md:order-2 flex-1 flex flex-col items-start">
                {/* Main Testimonial Quote / Description */}
                <blockquote className="text-base sm:text-lg font-normal text-[#0B0F19] leading-relaxed">
                  {currentWork.testimonial}
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
