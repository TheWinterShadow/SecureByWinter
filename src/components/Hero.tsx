'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Lazy load motion only when needed
const MotionButton = dynamic(() => import('framer-motion').then(mod => ({ default: mod.motion.button })), { ssr: false });

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: 'var(--theme-bg)' }}
    >
      {/* Simplified Background Elements - removed heavy blur effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--theme-primary)] rounded-full blur-2xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--theme-secondary)] rounded-full blur-2xl" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Credential Bar */}
        <div className="mb-8" style={{ animation: 'fadeIn 0.5s ease-out 0.1s forwards', opacity: 0 }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-full text-sm md:text-base text-[var(--theme-text-secondary)]">
            <span className="font-semibold text-[var(--theme-primary)]">7+ Years Protecting Enterprise Systems</span>
            <span>|</span>
            <span>Former Amazon & CIA</span>
            <span>|</span>
            <span>500+ Teams Served</span>
          </div>
        </div>

        {/* Main Headline */}
        <div style={{ animation: 'fadeIn 0.5s ease-out 0.2s forwards', opacity: 0 }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-[var(--theme-text)]">
              Enterprise-Grade Security Engineering
            </span>
            <br />
            <span className="text-[var(--theme-primary)]">
              for Growing Companies
            </span>
          </h1>
        </div>

        {/* Subheadline */}
        <div className="text-lg md:text-xl lg:text-2xl text-[var(--theme-text-secondary)] mb-6 max-w-4xl mx-auto" style={{ animation: 'fadeIn 0.5s ease-out 0.3s forwards', opacity: 0 }}>
          I help startups and mid-market businesses build secure, compliant systems—without the enterprise overhead or 6-month timelines.
        </div>

        {/* Supporting Statement */}
        <div className="text-base md:text-lg text-[var(--theme-text-secondary)] mb-12 max-w-3xl mx-auto italic" style={{ animation: 'fadeIn 0.5s ease-out 0.4s forwards', opacity: 0 }}>
          Former Amazon security leader bringing battle-tested frameworks from systems protecting millions of users to companies that need them most.
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16" style={{ animation: 'fadeIn 0.5s ease-out 0.5s forwards', opacity: 0 }}>
          <Link href="/contact">
            {mounted ? (
              <MotionButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[var(--theme-primary)] text-white rounded-lg font-semibold hover:bg-[var(--theme-secondary)] transition-colors shadow-lg text-lg"
              >
                Schedule Free Consultation
              </MotionButton>
            ) : (
              <button className="px-8 py-4 bg-[var(--theme-primary)] text-white rounded-lg font-semibold hover:bg-[var(--theme-secondary)] transition-colors shadow-lg text-lg">
                Schedule Free Consultation
              </button>
            )}
          </Link>
          <Link href="/services">
            {mounted ? (
              <MotionButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-[var(--theme-primary)] text-[var(--theme-primary)] rounded-lg font-semibold hover:bg-[var(--theme-primary)]/10 transition-colors text-lg"
              >
                View Services & Pricing
              </MotionButton>
            ) : (
              <button className="px-8 py-4 border-2 border-[var(--theme-primary)] text-[var(--theme-primary)] rounded-lg font-semibold hover:bg-[var(--theme-primary)]/10 transition-colors text-lg">
                View Services & Pricing
              </button>
            )}
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" style={{ animation: 'fadeIn 0.5s ease-out 0.6s forwards', opacity: 0 }}>
          <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-6">
            <div className="text-4xl font-bold text-[var(--theme-primary)] mb-2">200+</div>
            <div className="text-[var(--theme-text-secondary)]">Security Incidents Resolved</div>
          </div>
          <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-6">
            <div className="text-4xl font-bold text-[var(--theme-primary)] mb-2">70%</div>
            <div className="text-[var(--theme-text-secondary)]">Reduction in Manual Security Work</div>
          </div>
          <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-6">
            <div className="text-4xl font-bold text-[var(--theme-primary)] mb-2">100K+</div>
            <div className="text-[var(--theme-text-secondary)]">Applications Secured</div>
          </div>
        </div>
      </div>
    </section>
  );
}
