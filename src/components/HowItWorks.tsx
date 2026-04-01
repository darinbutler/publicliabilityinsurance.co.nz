'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    step: '1',
    title: 'Tell Us About Your Business',
    description:
      'Share your business type, location, turnover, and coverage needs. Takes just 5 minutes.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    step: '2',
    title: 'Compare Tailored Quotes',
    description:
      'We instantly match you with 15+ insurers. Review coverage options and pricing side-by-side.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    step: '3',
    title: 'Get Covered Today',
    description:
      'Choose your policy, bind coverage immediately, and receive your certificate online within hours.',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-20 px-4 bg-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Simple Process
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Getting the right public liability insurance for your NZ business is simpler than you
            think.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connecting lines — desktop only */}
          <div className="hidden md:block absolute top-[72px] left-[calc(33.333%-12px)] right-[calc(33.333%-12px)] z-0">
            <div
              className={`h-[2px] bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-400 transition-all duration-1000 delay-700 ${
                isVisible ? 'w-full opacity-100' : 'w-0 opacity-0'
              }`}
              style={{ transitionProperty: 'width, opacity' }}
            />
          </div>

          {steps.map((item, idx) => (
            <div
              key={idx}
              className={`relative z-10 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${idx * 200 + 200}ms` }}
            >
              {/* Mobile connecting line */}
              {idx < 2 && (
                <div className="md:hidden flex justify-center py-2">
                  <div
                    className={`w-[2px] h-8 bg-gradient-to-b from-emerald-400 to-sky-400 transition-all duration-500 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ transitionDelay: `${idx * 200 + 500}ms` }}
                  />
                </div>
              )}

              {/* Card */}
              <div className="group relative bg-white rounded-2xl border-2 border-slate-100 hover:border-emerald-200 p-8 text-center transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 h-full">
                {/* Gradient accent top */}
                <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r from-emerald-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Step number circle */}
                <div className="relative mx-auto mb-6">
                  <div className="w-[88px] h-[88px] mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 group-hover:scale-110 transition-all duration-300">
                    <div className="w-[78px] h-[78px] rounded-full bg-gradient-to-br from-emerald-500 to-sky-600 flex items-center justify-center border-2 border-white/20">
                      <span className="text-3xl font-black text-white">{item.step}</span>
                    </div>
                  </div>
                  {/* Icon badge */}
                  <div className="absolute -bottom-1 -right-1 left-1/2 ml-4 w-10 h-10 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center shadow-md">
                    <div className="w-5 h-5 flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5">
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>

              {/* Mobile connecting line (below card, between cards) */}
              {idx < 2 && (
                <div className="md:hidden flex justify-center py-2">
                  <div
                    className={`w-[2px] h-8 bg-gradient-to-b from-sky-400 to-emerald-400 transition-all duration-500 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ transitionDelay: `${idx * 200 + 600}ms` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <a
            href="#quote-form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5"
          >
            Start Your Free Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-sm text-slate-500 mt-3">No obligation. Takes less than 5 minutes.</p>
        </div>
      </div>
    </section>
  );
}
