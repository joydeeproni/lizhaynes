'use client';

import { useEffect, useState } from 'react';

export default function ComingSoon() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full-screen hero background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1512095662389-83dfa94f3e0b?auto=format&fit=crop&w=2000&q=80)',
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(31,31,31,0.92) 0%, rgba(31,31,31,0.7) 40%, rgba(31,31,31,0.4) 100%)',
        }}
      />

      {/* Content — bottom-aligned like transformationalsports hero */}
      <div className="relative z-10 flex min-h-screen items-end pb-16 md:pb-24 px-6">
        <div className="mx-auto w-full max-w-4xl">
          {/* Section label */}
          <p
            className={`text-xs font-medium uppercase tracking-[3px] text-amber/70 mb-6 transition-all duration-700 delay-[0ms] ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Coming Soon
          </p>

          {/* Name */}
          <h1
            className={`font-light text-white tracking-tight leading-[1.08] mb-6 transition-all duration-700 delay-[150ms] ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}
          >
            Liz Haynes
          </h1>

          {/* Divider */}
          <div
            className={`h-[2px] w-16 bg-amber mb-8 transition-all duration-700 delay-[300ms] ${
              loaded ? 'opacity-100 scale-x-100 origin-left' : 'opacity-0 scale-x-0 origin-left'
            }`}
          />

          {/* Description */}
          <p
            className={`max-w-[560px] text-base md:text-md leading-relaxed text-white/80 mb-10 transition-all duration-700 delay-[450ms] ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Director of Transformational Sports — using mixed-gender sport as a
            vehicle for social change in rural India. Liz works with young people
            and communities to challenge gender norms, build leadership, and
            create a more equitable world through the power of play.
          </p>

          {/* Links row */}
          <div
            className={`flex flex-wrap items-center gap-x-5 gap-y-3 transition-all duration-700 delay-[600ms] ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href="https://transformationalsports.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-amber px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-near-black transition-colors duration-200 hover:bg-amber-light"
            >
              Transformational Sports
              <span aria-hidden="true">&rarr;</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lizhaynes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-white/90 transition-all duration-200 hover:border-white/50 hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="mailto:lizhaynes11@gmail.com"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-white/90 transition-all duration-200 hover:border-white/50 hover:text-white"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-5 text-center">
        <p className="text-[10px] uppercase tracking-wider text-white/30">
          &copy; 2026 Liz Haynes
        </p>
      </div>
    </div>
  );
}
