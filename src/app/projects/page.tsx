'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Github, ExternalLink } from 'lucide-react';

const caseStudies = [
  {
    title: 'Enterprise IAM Overhaul for Healthcare Platform',
    subtitle: '',
    challenge: 'A healthcare technology platform had outgrown their simple role-based permission system. They needed fine-grained access control where doctors could only see patients they\'re treating, administrators could manage their facility but not others, and insurance partners could access aggregate data but not PHI. Their existing codebase had permission checks scattered everywhere, making changes risky and slow.',
    solution: 'Migrated from basic RBAC to an attribute-based access control (ABAC) model with centralized policy enforcement.',
    solutionPoints: [
      'Designed ABAC model supporting complex healthcare access rules',
      'Centralized policy engine replacing scattered permission checks',
      'Database schema migration to support attribute-based queries',
      'Policy-as-code framework enabling non-engineers to update rules',
      'Comprehensive audit logging for HIPAA compliance',
    ],
    results: [
      'Reduced unauthorized access attempts by 42% through better enforcement',
      'Cut time to implement new permission rules from 2 weeks to 2 days',
      'Reduced permission-related code by 60% through centralization',
      'Passed HIPAA audit with zero access control findings',
      'Enabled new business model (facility-specific pricing) previously impossible',
    ],
    quote: {
      text: 'Elijah didn\'t just build us a permission system—he taught us how to think about access control at scale. Six months later, we\'re still finding new use cases the framework handles elegantly.',
      author: 'Sr SDE, Healthcare Platform',
    },
  },
  {
    title: 'Security Incident Response',
    subtitle: '',
    challenge: 'Customer\'s platform detected unusual API activity suggesting unauthorized access to customer data. They weren\'t sure what was compromised, how the attacker got in, or if the breach was still active. With thousands of customers potentially affected and a legal obligation to report within 72 hours, they needed fast, definitive answers.',
    solution: 'Led complete incident response from detection through remediation and post-mortem.',
    solutionSections: [
      {
        title: 'Investigation & Containment:',
        points: [
          'Forensic analysis of application logs, database queries, and Cloud Logs',
          'Identified attack vector (exposed API endpoint with weak authentication)',
          'Contained breach by rotating credentials and patching vulnerability',
          'Collected evidence for potential law enforcement reporting',
        ],
      },
      {
        title: 'Remediation & Prevention:',
        points: [
          'Implemented API authentication and rate limiting',
          'Added monitoring alerts for similar access patterns',
          'Conducted security audit of remaining endpoints',
          'Created incident response playbook for future events',
        ],
      },
    ],
    results: [
      'Fully contained breach within 18 hours of engagement',
      'Determined exact scope for accurate customer notification',
      'Provided documentation meeting legal reporting requirements',
      'Zero additional customer records compromised after containment',
      'Company maintained customer trust through transparent, professional response',
    ],
  },
  {
    title: 'AI Security Framework for ML Platform',
    subtitle: '',
    challenge: 'An AI-powered product platform was preparing for launch. Leaders were asking detailed questions about AI security: "How do you prevent prompt injection? What\'s your model governance? How do you secure training data?" The team had strong ML expertise but limited security experience, and generic security consultants didn\'t understand AI-specific risks.',
    solution: 'Implemented comprehensive AI security framework adapted for their specific business needs.',
    solutionPoints: [
      'Threat model for their specific AI architecture (fine-tuned LLMs for data analysis)',
      'Input validation and sanitization to prevent prompt injection attacks',
      'Model output filtering to prevent data leakage',
      'Secure model training pipeline with data lineage tracking',
      'Access controls for model artifacts and training data',
      'Monitoring for adversarial inputs and model behavior anomalies',
    ],
    results: [
      'Identified and fixed 12 AI-specific security vulnerabilities',
      'Passed leadership-level security review with zero critical findings',
      'Reduced AI model deployment security review from 2 weeks to 2 days',
      'Framework now used for 15+ models in production',
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--theme-text)] mb-4">
            Security Projects & Case Studies
          </h1>
          <p className="text-lg text-[var(--theme-text-secondary)] max-w-3xl mx-auto">
            Real security challenges I&apos;ve solved for real companies. Each project shows the business problem, technical solution, and measurable impact.
          </p>
          <p className="text-sm text-[var(--theme-text-secondary)] mt-4 italic">
            Note: Some details are anonymized or aggregated to protect client confidentiality.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-16 mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8 md:p-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--theme-text)] mb-2">
                {study.title}
              </h2>
              <p className="text-[var(--theme-text-secondary)] mb-8">
                {study.subtitle}
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[var(--theme-text)] mb-4">
                  THE CHALLENGE:
                </h3>
                <p className="text-lg text-[var(--theme-text-secondary)] leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[var(--theme-text)] mb-4">
                  THE SOLUTION:
                </h3>
                <p className="text-[var(--theme-text-secondary)] mb-4">
                  {study.solution}
                </p>
                {study.solutionPoints && (
                  <>
                    <p className="text-sm font-semibold text-[var(--theme-text)] mb-3">Key components:</p>
                    <ul className="space-y-2">
                      {study.solutionPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                          <span className="text-[var(--theme-text-secondary)]">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {study.solutionSections && (
                  <div className="space-y-6">
                    {study.solutionSections.map((section, idx) => (
                      <div key={idx}>
                        <p className="text-sm font-semibold text-[var(--theme-text)] mb-3">{section.title}</p>
                        <ul className="space-y-2">
                          {section.points.map((point, pidx) => (
                            <li key={pidx} className="flex items-start gap-3">
                              <CheckCircle size={20} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                              <span className="text-[var(--theme-text-secondary)]">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[var(--theme-text)] mb-4">
                  THE RESULTS:
                </h3>
                <ul className="space-y-3">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <ArrowRight size={20} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                      <span className="text-[var(--theme-text-secondary)]">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {study.quote && (
                <div className="bg-[var(--theme-bg)] border-l-4 border-[var(--theme-primary)] rounded p-6 mb-8">
                  <p className="text-lg text-[var(--theme-text-secondary)] italic mb-4">
                    &quot;{study.quote.text}&quot;
                  </p>
                  <p className="text-[var(--theme-text)] font-semibold">
                    — {study.quote.author}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-semibold text-[var(--theme-text)] mb-4">
            More Work Examples
          </h2>
          <p className="text-[var(--theme-text-secondary)] mb-6">
            Beyond these detailed case studies, I&apos;ve worked on:
          </p>
          <div className="space-y-4">
            {[
              {
                title: 'Insider Threat Detection',
                desc: 'Built automated detection system that investigated 200+ potential insider threat incidents, achieving 95% case closure rate within SLA. Created 12 new behavioral detection rules reducing manual investigation time by 66%.',
              },
              {
                title: 'Security Posture Management Tool',
                desc: 'Architected tool visualizing security posture for 100,000+ applications, reducing security review time by 15% and enabling real-time risk assessment across AWS organization.',
              },
              {
                title: 'Security Analytics Data Lake',
                desc: 'Designed data lake processing 10TB+ daily security events, enabling real-time threat detection and reducing false positives by 30% across 18 security teams.',
              },
              {
                title: 'Cloud Migration Security',
                desc: 'Secured cloud migrations for 5+ companies moving from on-premise to AWS/Azure, ensuring zero security incidents during transitions and improved security posture post-migration.',
              },
              {
                title: 'Security Training Program',
                desc: 'Designed and launched engineering bootcamp for 25+ junior security engineers, reducing onboarding time by 40% and expanding team capabilities.',
              },
            ].map((project, idx) => (
              <div key={idx} className="border-l-4 border-[var(--theme-primary)] pl-4">
                <h3 className="font-semibold text-[var(--theme-text)] mb-2">
                  {project.title}
                </h3>
                <p className="text-[var(--theme-text-secondary)]">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-[var(--theme-surface)] border border-[var(--theme-primary)] rounded-lg p-12"
        >
          <h2 className="text-3xl font-bold text-[var(--theme-text)] mb-4">
            Have a Similar Challenge?
          </h2>
          <p className="text-lg text-[var(--theme-text-secondary)] mb-8 max-w-2xl mx-auto">
            These projects show the range of security work I do—from strategic frameworks to hands-on incident response. If you&apos;re facing something similar, let&apos;s talk about how I can help.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[var(--theme-primary)] text-white rounded-lg font-semibold hover:bg-[var(--theme-secondary)] transition-colors shadow-lg"
            >
              Discuss Your Project
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
