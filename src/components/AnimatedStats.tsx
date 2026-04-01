'use client';

import { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
}

const stats: StatItem[] = [
  { value: 500, suffix: '+', label: 'Businesses Protected', duration: 2000 },
  { value: 15, suffix: '+', label: 'Top Insurers', duration: 1500 },
  { value: 0, prefix: '$', label: 'Broker Fees', duration: 800 },
];

function AnimatedNumber({
  value,
  prefix = '',
  suffix = '',
  duration = 2000,
  isVisible,
}: StatItem & { isVisible: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    // For $0, just show immediately with a slight delay
    if (value === 0) {
      const timer = setTimeout(() => setDisplayValue(0), 300);
      return () => clearTimeout(timer);
    }

    const startTime = performance.now();
    let animationFrame: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(eased * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, value, duration]);

  return (
    <span>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export default function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-3 gap-6 text-white">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: `${idx * 200 + 400}ms` }}
        >
          <div className="text-3xl md:text-4xl font-bold">
            <AnimatedNumber {...stat} isVisible={isVisible} />
          </div>
          <p className="text-sm text-slate-300 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
