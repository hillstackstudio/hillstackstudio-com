import React, { useEffect, useRef, useState } from 'react';
import { servicesData } from '../data/servicesData';

export interface ServiceItem {
  name: string;
  description: string;
  slug?: string;
}

interface ServicesProps {
  services?: ServiceItem[];
}

const getServiceIcon = (index: number) => {
  const icons = [
    // 1. AEO & SEO Website Audit (Magnifying Glass)
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>,
    // 2. Custom Web Design & Development (Code </>)
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>,
    // 3. Hosting & Administration (Server)
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>,
    // 4. Consulting & Site Migration (Arrows/Exchange)
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>,
    // 5. Search Engine Readiness (Code/Schema Data)
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>,
    // 6. Copywriting & Content Adjustments (Edit/Pencil)
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>,
    // 7. Performance & Visibility Audit (Chart/Bar)
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>,
    // 8. Accessibility Compliance (Eye)
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>,
    // 9. Security & Privacy Compliance (Shield)
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ];
  return icons[index % icons.length];
};

const defaultServices: ServiceItem[] = [
  {
    name: "AEO & SEO Website Audit",
    description: "An in-depth look at why local customers might be missing your business online. We uncover why search engines and AI assistants are skipping over your website.",
    slug: "answer-engine-optimization",
    href: "/services/answer-engine-optimization"
  },
  {
    name: "Custom Web Design & Development",
    description: "Clean custom code and modern website redesigns engineered for fast page loads, AI search recommendations and customer conversion.",
    slug: "custom-web-design-development",
    href: "/services/custom-web-design-development"
  },
  {
    name: "Hosting & Administration",
    description: "Fast, worry-free cloud hosting, continuous security updates, automated backups, and routine content adjustments to keep your website fast, secure, and always accessible.",
    slug: "hosting-administration",
    href: "/services#hosting"
  }
];

const Services: React.FC<ServicesProps> = ({ services }) => {
  const displayServices = defaultServices.map((defaultItem, index) => {
    const override = services ? services[index] : null;
    return {
      name: override?.name || defaultItem.name,
      description: override?.description || defaultItem.description,
      slug: override?.slug || defaultItem.slug,
      href: override?.href || defaultItem.href
    };
  });

  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idxAttr = entry.target.getAttribute('data-index');
            if (idxAttr !== null) {
              const idx = parseInt(idxAttr, 10);
              setVisibleIndices((prev) => {
                if (prev.has(idx)) return prev;
                const next = new Set(prev);
                next.add(idx);
                return next;
              });
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [displayServices.length]);

  return (
    <section id="services" className="py-20 md:py-28 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-[2.5rem] sm:text-4xl md:text-5xl font-extrabold text-[#0B0F19] tracking-tight leading-[1.08] mb-6">
            Our solutions
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            We ensure the best businesses are seen as trusted and recommended by local online searches.
          </p>
        </div>

        {/* 3-Column Agency Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayServices.map((service, index) => {
            const isVisible = visibleIndices.has(index);
            return (
              <a
                key={index}
                data-index={index}
                ref={(el) => (cardRefs.current[index] = el)}
                href={service.href || (service.slug ? `/services/${service.slug}` : '/services')}
                style={{
                  transitionDelay: `${(index % 3) * 120}ms`
                }}
                className={`group bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:bg-white/90 hover:border-white/80 hover:shadow-[0_16px_36px_-6px_rgba(15,23,42,0.1)] hover:-translate-y-1.5 flex flex-col justify-between transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-black border border-black shadow-[0_2px_8px_rgba(0,0,0,0.18)] text-[#169F94] flex items-center justify-center mb-6 mx-auto group-hover:scale-105 transition-transform duration-300">
                    {getServiceIcon(index)}
                  </div>
                  <h3 className="text-xl font-bold text-[#0B0F19] mb-3 group-hover:text-black transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-center text-[#0B0F19] text-sm font-bold group-hover:underline">
                  <span>Learn more</span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Section Bottom Action */}
        <div className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-black hover:bg-slate-900 text-white font-bold py-3.5 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 text-base"
          >
            <span>Request a Consultation</span>
          </a>
          <a
            href="/services"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-black/5 text-[#0B0F19] font-bold py-3.5 px-8 rounded-full border border-black shadow-none transition-all duration-200 active:scale-95 text-base"
          >
            <span>View Our Process</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;