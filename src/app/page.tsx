'use client';

import Hero from '@/components/Hero';
import Link from 'next/link';
import { ArrowRight, Terminal, GraduationCap, MessageSquare, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <Hero />
      
      {/* Problem-Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--theme-text)] mb-12 text-center">
              The Security Gap Most Growing Companies Face
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8">
                <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-4">
                  You&apos;re preparing for due diligence or compliance
                </h3>
                <p className="text-[var(--theme-text-secondary)]">
                  Investors, customers, or auditors are asking security questions you can&apos;t confidently answer. You need someone who&apos;s been through this before.
                </p>
              </div>
              <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8">
                <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-4">
                  Your security is reactive, not proactive
                </h3>
                <p className="text-[var(--theme-text-secondary)]">
                  You&apos;re fixing vulnerabilities as they&apos;re discovered instead of preventing them. Manual reviews are slowing down your development velocity.
                </p>
              </div>
              <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8">
                <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-4">
                  You&apos;ve outgrown simple solutions
                </h3>
                <p className="text-[var(--theme-text-secondary)]">
                  Your permission system is getting complex. Your infrastructure is scaling. You need enterprise-grade security without hiring a full team.
                </p>
              </div>
            </div>

            {/* Solution Section */}
            <div className="bg-[var(--theme-surface)] border border-[var(--theme-primary)] rounded-lg p-8 md:p-10">
              <h2 className="text-3xl font-bold text-[var(--theme-text)] mb-6 text-center">
                How I Help
              </h2>
              <p className="text-lg text-[var(--theme-text-secondary)] mb-8 text-center max-w-4xl mx-auto">
                I spent 7+ years building security systems at Amazon and the CIA—protecting critical infrastructure, investigating threats, and automating security at scale. Now I bring that expertise to companies that need enterprise-quality security without enterprise complexity.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-3">
                    Proven Frameworks
                  </h3>
                  <p className="text-[var(--theme-text-secondary)]">
                    I use security processes battle-tested at Amazon scale, adapted for fast-moving teams. You get what works, not what&apos;s trendy.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-3">
                    Measurable Results
                  </h3>
                  <p className="text-[var(--theme-text-secondary)]">
                    My work has reduced security incidents by 35%, cut review time by 70%, and helped companies pass audits they were worried about.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-3">
                    Business-First Mindset
                  </h3>
                  <p className="text-[var(--theme-text-secondary)]">
                    Security isn&apos;t about saying no—it&apos;s about enabling you to move fast safely. I balance risk with business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Preview Section */}
          <div
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--theme-text)] mb-4 text-center">
              How I Can Help Your Business
            </h2>
            <p className="text-lg text-[var(--theme-text-secondary)] mb-12 text-center">
              Programming, Mentorship, Consultation, and Security services. Pricing based on scope and negotiable.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Terminal, emoji: '💻', title: 'Programming', desc: 'Web apps, backends, system design, analytics, automation, and cloud migration. Full-stack development services.', category: 'Programming' },
                { icon: GraduationCap, emoji: '🎓', title: 'Mentorship', desc: 'One-on-one mentorship in programming, security, career development, and technical leadership.', category: 'Mentorship' },
                { icon: MessageSquare, emoji: '💡', title: 'Technical Consultation', desc: 'Expert technical advice, architecture reviews, and strategic guidance for your technical decisions.', category: 'Consultation' },
                { icon: Shield, emoji: '🔒', title: 'Security Work', desc: 'Secure design reviews, code reviews, threat modeling, incident response, compliance, and vulnerability analysis.', category: 'Security' },
              ].map((service, index) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.title}
                    href="/services"
                    className="group bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-6 hover:border-[var(--theme-primary)] transition-all hover:shadow-lg"
                  >
                    <div className="text-3xl mb-3">{service.emoji}</div>
                    <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-3 group-hover:text-[var(--theme-primary)] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[var(--theme-text-secondary)] mb-4 text-sm">
                      {service.desc}
                    </p>
                    <div className="text-xs text-[var(--theme-text-secondary)] mb-3 italic">
                      Pricing based on scope - negotiable
                    </div>
                    <div className="flex items-center gap-2 text-[var(--theme-primary)] font-medium text-sm">
                      <span>View Services</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Why Work With Me Section */}
          <div
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--theme-text)] mb-12 text-center">
              Why Companies Choose to Work With Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8">
                <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-4">
                  Real Enterprise Experience
                </h3>
                <p className="text-[var(--theme-text-secondary)]">
                  I didn&apos;t learn security from tutorials—I built it at Amazon and the CIA. I&apos;ve secured systems protecting millions of users and investigated 200+ actual security incidents. When problems arise, I&apos;ve seen them before.
                </p>
              </div>
              <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8">
                <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-4">
                  Business Context Matters
                </h3>
                <p className="text-[var(--theme-text-secondary)]">
                  At Amazon, I partnered with 50+ development teams and consulted with 40+ healthcare customers. I understand that perfect security means nothing if you miss your launch date or can&apos;t close your funding round.
                </p>
              </div>
              <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8">
                <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-4">
                  Built for Scale
                </h3>
                <p className="text-[var(--theme-text-secondary)]">
                  The frameworks I use aren&apos;t just for today—they&apos;re designed to scale with you. Whether you&apos;re 10 people or 1,000, the foundation stays solid.
                </p>
              </div>
              <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8">
                <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-4">
                  Clear Communication
                </h3>
                <p className="text-[var(--theme-text-secondary)]">
                  I translate security into business terms. Your executives, investors, and non-technical stakeholders will understand the risks and recommendations.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Section */}
          {/* <div
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--theme-text)] mb-12 text-center">
              What Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: 'Working with Elijah gave us the confidence to face our Series B security diligence. His Amazon experience showed through immediately—he knew exactly what investors would ask and how to address it.',
                  author: 'CTO, Series B SaaS Company',
                },
                {
                  quote: 'We were struggling with a complex permissions system that was becoming unmaintainable. Elijah architected a clean ABAC solution that scaled beautifully as we added more customers and features.',
                  author: 'VP Engineering, Healthcare Tech Startup',
                },
                {
                  quote: 'After a security incident, Elijah was our incident commander. His calm, methodical approach and clear communication with stakeholders turned a potential disaster into a learning opportunity.',
                  author: 'Founder, E-commerce Platform',
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-6"
                >
                  <p className="text-[var(--theme-text-secondary)] italic mb-4">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <p className="text-[var(--theme-text)] font-semibold">
                    — {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA Section */}
          <div
            className="text-center bg-[var(--theme-surface)] border border-[var(--theme-primary)] rounded-lg p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--theme-text)] mb-4">
              Ready to Build a More Secure Business?
            </h2>
            <p className="text-lg text-[var(--theme-text-secondary)] mb-8 max-w-2xl mx-auto">
              Let&apos;s have an honest 30-minute conversation about your technical challenges. All initial consultations are always free—no sales pitch, just a practical discussion about where you are and where you need to be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/contact">
                <button className="px-8 py-4 bg-[var(--theme-primary)] text-white rounded-lg font-semibold hover:bg-[var(--theme-secondary)] transition-all hover:scale-105 active:scale-95 shadow-lg">
                  Schedule Free Consultation
                </button>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-[var(--theme-text-secondary)]">
              <Link href="/projects" className="hover:text-[var(--theme-primary)] transition-colors">
                Or view my work
              </Link>
              <span>|</span>
              <a
                href="https://www.elijahwinter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--theme-primary)] transition-colors"
              >
                Download my resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
