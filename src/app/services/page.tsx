'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shield, Lock, Settings, AlertTriangle, Bot, RefreshCw, CheckCircle, ArrowRight, HelpCircle, Lightbulb, GraduationCap, Search, Code, Building2, Users, Briefcase, Phone, Terminal, MessageSquare, Database, Cloud, BarChart, Zap, FileCode, Server, Layout, ChevronDown, ChevronUp, Menu } from 'lucide-react';

// Service Categories
const serviceCategories = [
  {
    id: 'programming',
    title: 'Programming',
    icon: Terminal,
    emoji: '💻',
    description: 'Full-stack development, system design, analytics, and automation services.',
    services: [
      {
        icon: Code,
        emoji: '🌐',
        title: 'Web Application Development',
        description: 'Building full-stack web applications from scratch or enhancing existing ones. Frontend, backend, and full-stack development.',
        includes: [
          'Frontend development (React, Next.js, Vue, etc.)',
          'Backend API development (REST, GraphQL)',
          'Full-stack application architecture',
          'Database integration and optimization',
          'Authentication and authorization implementation',
          'Deployment and hosting setup',
        ],
      },
      {
        icon: Server,
        emoji: '⚙️',
        title: 'Backend Development',
        description: 'Building scalable backend systems, APIs, microservices, and server infrastructure.',
        includes: [
          'API design and development',
          'Microservices architecture',
          'Database design and optimization',
          'Message queue and event streaming',
          'Caching strategies',
          'Performance optimization',
        ],
      },
      {
        icon: Layout,
        emoji: '🏗️',
        title: 'System Design',
        description: 'Designing scalable, reliable systems. Architecture planning for distributed systems, microservices, and cloud-native applications.',
        includes: [
          'System architecture design',
          'Scalability and performance planning',
          'Technology stack selection',
          'Database and storage design',
          'API design and integration patterns',
          'Documentation and diagrams',
        ],
      },
      {
        icon: BarChart,
        emoji: '📊',
        title: 'Analytics Platform Development',
        description: 'Building analytics platforms, dashboards, and data visualization systems.',
        includes: [
          'Analytics dashboard development',
          'Data pipeline architecture',
          'Real-time analytics setup',
          'Data visualization and reporting',
          'Metrics and KPI tracking',
          'Custom analytics solutions',
        ],
      },
      {
        icon: BarChart,
        emoji: '📈',
        title: 'Analytics & Data Analysis',
        description: 'Performing data analysis, building reports, and extracting insights from your data.',
        includes: [
          'Data analysis and insights',
          'Custom reporting and dashboards',
          'Statistical analysis',
          'Business intelligence solutions',
          'Data-driven recommendations',
        ],
      },
      {
        icon: Database,
        emoji: '🔄',
        title: 'Data ETL (Extract, Transform, Load)',
        description: 'Building data pipelines to extract, transform, and load data from various sources.',
        includes: [
          'ETL pipeline development',
          'Data integration from multiple sources',
          'Data transformation and cleaning',
          'Data warehouse setup',
          'Batch and real-time processing',
          'Data quality and validation',
        ],
      },
      {
        icon: Database,
        emoji: '🏞️',
        title: 'Data Lake Building',
        description: 'Designing and building scalable data lakes for storing and processing large volumes of structured and unstructured data.',
        includes: [
          'Data lake architecture design',
          'Cloud data lake setup',
          'Data ingestion pipelines',
          'Data catalog and metadata management',
          'Data governance and access controls',
          'Integration with analytics and ML tools',
          'Cost optimization strategies',
        ],
      },
      {
        icon: Zap,
        emoji: '⚡',
        title: 'Automation (Security & Non-Security)',
        description: 'Building automation solutions for security, operations, or business processes. Custom tooling and scripts.',
        includes: [
          'Security automation (vulnerability scanning, compliance checks)',
          'Operational automation (deployments, monitoring)',
          'Business process automation',
          'Custom tooling and scripts',
          'Workflow automation',
          'Integration automation',
        ],
      },
      {
        icon: FileCode,
        emoji: '🔬',
        title: 'Technical Proof of Concepts (POCs)',
        description: 'Building proof of concepts to validate technical approaches, new technologies, or architectural decisions.',
        includes: [
          'Rapid prototyping',
          'Technology evaluation',
          'Architecture validation',
          'Feasibility studies',
          'MVP development',
          'Technical demonstrations',
        ],
      },
      {
        icon: Database,
        emoji: '🗄️',
        title: 'Database Management',
        description: 'Database administration, optimization, monitoring, and maintenance.',
        includes: [
          'Database design and optimization',
          'Query optimization',
          'Performance tuning',
          'Backup and recovery strategies',
          'Database monitoring and alerting',
          'Capacity planning',
        ],
      },
      {
        icon: Database,
        emoji: '🚀',
        title: 'Database Migration',
        description: 'Migrating databases between systems, versions, or cloud providers with minimal downtime.',
        includes: [
          'Migration planning and strategy',
          'Data migration scripts',
          'Schema transformation',
          'Zero-downtime migration execution',
          'Data validation and testing',
          'Rollback planning',
        ],
      },
      {
        icon: Cloud,
        emoji: '☁️',
        title: 'Cloud Migration & Planning',
        description: 'Cloud infrastructure strategy and migration planning. Help your team move to AWS, Azure, or GCP with a focus on security and scalability.',
        includes: [
          'Cloud strategy and planning',
          'Migration roadmap development',
          'Cloud architecture design',
          'Cost optimization analysis',
          'Migration execution support',
          'Multi-cloud strategy',
        ],
      },
    ],
  },
  {
    id: 'mentorship',
    title: 'Mentorship',
    icon: GraduationCap,
    emoji: '🎓',
    description: 'One-on-one mentorship in programming, security, career development, and technical leadership.',
    services: [
      {
        icon: GraduationCap,
        emoji: '💻',
        title: 'Programming Mentorship',
        description: 'Learn software engineering, system design, and best practices from an experienced engineer.',
        includes: [
          'Code review and feedback',
          'Architecture and design patterns',
          'Best practices and coding standards',
          'Performance optimization techniques',
          'Technology stack guidance',
          'Project portfolio development',
        ],
      },
      {
        icon: Shield,
        emoji: '🔒',
        title: 'Security Mentorship',
        description: 'Level up your security engineering skills. Learn from 7+ years of Amazon and CIA experience.',
        includes: [
          'Application security and secure code review',
          'Cloud security architecture',
          'IAM and access control patterns',
          'Security automation and tooling',
          'Incident response and forensics',
          'Security career progression',
        ],
      },
      {
        icon: Briefcase,
        emoji: '📈',
        title: 'Career Mentorship',
        description: 'Career guidance for engineers, security professionals, and technical leaders.',
        includes: [
          'Career path planning',
          'Resume and portfolio review',
          'Interview preparation (FAANG, startups)',
          'Salary negotiation guidance',
          'Technical leadership development',
          'Skill development roadmap',
        ],
      },
      {
        icon: Users,
        emoji: '👥',
        title: 'Technical Leadership Mentorship',
        description: 'Guidance for engineers transitioning into leadership roles or improving their leadership skills.',
        includes: [
          'Team management strategies',
          'Technical decision-making',
          'Architecture and system design leadership',
          'Cross-functional collaboration',
          'Engineering culture building',
          'Stakeholder communication',
        ],
      },
    ],
  },
  {
    id: 'consultation',
    title: 'General Technical Consultation',
    icon: MessageSquare,
    emoji: '💡',
    description: 'Expert technical advice, architecture reviews, and strategic guidance for your technical decisions.',
    services: [
      {
        icon: Lightbulb,
        emoji: '💡',
        title: 'Technical Advisory Sessions',
        description: 'Get expert guidance on specific technical decisions, architecture reviews, or second opinions on technical approaches.',
        includes: [
          'Architecture review for features or systems',
          'Technology stack evaluation',
          'Technical decision support',
          'Second opinions on technical approaches',
          'Best practices consultation',
          'Written summary and recommendations',
        ],
      },
      {
        icon: Building2,
        emoji: '🏗️',
        title: 'Architecture Consulting',
        description: 'Strategic architecture design sessions. Get Amazon-proven frameworks adapted to your business.',
        includes: [
          'System architecture design',
          'Threat modeling and security architecture',
          'Scalability planning',
          'Technology selection guidance',
          'Implementation roadmap',
          'Architecture documentation',
        ],
      },
      {
        icon: Search,
        emoji: '🔍',
        title: 'Technical Reviews',
        description: 'Review of code, architecture, or technical decisions. Get expert feedback and recommendations.',
        includes: [
          'Code review and feedback',
          'Architecture review',
          'Technical design review',
          'Performance analysis',
          'Security review',
          'Best practices recommendations',
        ],
      },
      {
        icon: Settings,
        emoji: '⚙️',
        title: 'Technology Evaluation',
        description: 'Evaluate and select technologies, tools, or vendors for your technical needs.',
        includes: [
          'Technology stack evaluation',
          'Tool and vendor assessment',
          'Cost-benefit analysis',
          'Proof of concept guidance',
          'Migration feasibility studies',
          'Recommendation reports',
        ],
      },
    ],
  },
  {
    id: 'security',
    title: 'Security Work',
    icon: Shield,
    emoji: '🔒',
    description: 'Comprehensive security services including design reviews, code reviews, threat modeling, incident response, and compliance.',
    services: [
      {
        icon: Building2,
        emoji: '🏗️',
        title: 'Secure Design Review',
        description: 'Review and improve the security architecture of your systems before implementation.',
        includes: [
          'Security architecture review',
          'Threat modeling',
          'Security design patterns',
          'Attack surface analysis',
          'Security control recommendations',
          'Architecture security documentation',
        ],
      },
      {
        icon: Code,
        emoji: '📝',
        title: 'Secure Code Review',
        description: 'Security-focused code review and vulnerability assessment for enterprise applications.',
        includes: [
          'Deep-dive review of specified code sections',
          'Vulnerability identification and severity ratings',
          'Remediation recommendations with code examples',
          'Security best practices guidance',
          'Re-review after fixes',
          'Developer Q&A session',
        ],
      },
      {
        icon: Lock,
        emoji: '🔐',
        title: 'Access Analysis',
        description: 'Analyze and improve your access control systems. IAM architecture, permissions, and authorization.',
        includes: [
          'Current access control assessment',
          'Authorization model design (RBAC, ABAC, FGAC)',
          'Access control architecture',
          'Permission system optimization',
          'Zero-trust architecture planning',
          'Implementation guidance',
        ],
      },
      {
        icon: Shield,
        emoji: '🎯',
        title: 'Threat Modeling',
        description: 'Comprehensive threat modeling for your systems. Identify and mitigate security threats proactively.',
        includes: [
          'Threat model development',
          'Attack vector analysis',
          'Risk assessment and prioritization',
          'Mitigation strategy development',
          'Threat modeling documentation',
          'Team training on threat modeling',
        ],
      },
      {
        icon: AlertTriangle,
        emoji: '🚨',
        title: 'Incident Response',
        description: 'Fast response to security incidents. Investigation, containment, remediation, and post-mortem.',
        includes: [
          'Immediate incident assessment and scoping',
          'Containment strategy and execution',
          'Digital forensics investigation',
          'Root cause analysis',
          'Remediation implementation',
          'Post-mortem documentation',
          'Incident response planning',
        ],
      },
      {
        icon: CheckCircle,
        emoji: '✅',
        title: 'Compliance Preparation',
        description: 'Prepare for SOC 2, ISO 27001, HIPAA, GDPR, and other compliance certifications.',
        includes: [
          'Compliance gap analysis',
          'Security assessment for compliance',
          'Policy and procedure documentation',
          'Compliance roadmap development',
          'Audit preparation support',
          'Remediation guidance',
        ],
      },
      {
        icon: Search,
        emoji: '🔍',
        title: 'Vulnerability Analysis',
        description: 'Comprehensive security assessment to identify vulnerabilities across infrastructure, applications, and processes.',
        includes: [
          'Vulnerability scanning and identification',
          'Risk prioritization',
          'Vulnerability assessment reports',
          'Remediation recommendations',
          'Security posture evaluation',
          'Ongoing vulnerability monitoring',
        ],
      },
      {
        icon: Briefcase,
        emoji: '👔',
        title: 'Security Leadership Advising',
        description: 'Fractional CISO services. Security program development, strategic planning, and board-level reporting.',
        includes: [
          'Security program development',
          'Strategic security planning',
          'Board-level security reporting',
          'Vendor security assessments',
          'Security policy development',
          'Team leadership and guidance',
        ],
      },
      {
        icon: Bot,
        emoji: '🤖',
        title: 'AI/ML Security',
        description: 'Specialized security for AI-powered products. Model security, prompt injection protection, and AI compliance.',
        includes: [
          'AI/ML security assessment',
          'Threat modeling for AI systems',
          'Prompt injection and jailbreak testing',
          'Model security framework',
          'Data privacy and governance',
          'AI security best practices',
        ],
      },
      {
        icon: Settings,
        emoji: '⚙️',
        title: 'Security Automation',
        description: 'Automate security processes. Security monitoring and alerting automation, vulnerability scanning, and continuous monitoring.',
        includes: [
          'Automated vulnerability scanning',
          'Security monitoring and alerting automation',
          'Security metrics and dashboards',
          'Custom security tooling',
          'Alert and notification automation',
          'Security workflow optimization',
        ],
      },
      {
        icon: Users,
        emoji: '👥',
        title: 'Security Training & Workshops',
        description: 'Custom security training for your development team. Build security culture and knowledge.',
        includes: [
          'Custom content tailored to your tech stack',
          'Interactive workshops (virtual or on-site)',
          'Hands-on exercises and scenarios',
          'Workshop materials and guides',
          'Post-training Q&A support',
          'Certificate of completion',
        ],
      },
    ],
  },
];

// Expandable Service Card Component
function ServiceCard({ service, serviceIndex, categoryIndex }: { service: any; serviceIndex: number; categoryIndex: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const ServiceIcon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (categoryIndex * 0.1) + (serviceIndex * 0.05) }}
      className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-6 hover:border-[var(--theme-primary)] transition-all"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="text-3xl">{service.emoji}</div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-[var(--theme-primary)]/20 rounded">
              <ServiceIcon size={20} className="text-[var(--theme-primary)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--theme-text)]">
              {service.title}
            </h3>
          </div>
          <p className="text-sm text-[var(--theme-text-secondary)] mb-4">
            {service.description}
          </p>
        </div>
      </div>

      {/* Compact View - Always Visible */}
      {service.includes && service.includes.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-[var(--theme-text)] mb-2">
            Includes:
          </h4>
          <ul className="space-y-1.5">
            {service.includes.slice(0, 2).map((item: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-[var(--theme-text-secondary)]">
                <CheckCircle size={14} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
            {!isExpanded && service.includes.length > 2 && (
              <li className="text-xs text-[var(--theme-text-secondary)] italic">
                + {service.includes.length - 2} more items
              </li>
            )}
          </ul>
        </div>
      )}

      {/* Expanded View - Collapsible */}
      {isExpanded && service.includes && service.includes.length > 2 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-4 overflow-hidden"
        >
          <ul className="space-y-1.5">
            {service.includes.slice(2).map((item: string, idx: number) => (
              <li key={idx + 2} className="flex items-start gap-2 text-xs text-[var(--theme-text-secondary)]">
                <CheckCircle size={14} className="text-[var(--theme-primary)] mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Expand/Collapse Button */}
      {service.includes && service.includes.length > 2 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mb-4 px-4 py-2 text-sm text-[var(--theme-primary)] hover:bg-[var(--theme-primary)]/10 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          {isExpanded ? (
            <>
              <span>Show Less</span>
              <ChevronUp size={16} />
            </>
          ) : (
            <>
              <span>Show More Details</span>
              <ChevronDown size={16} />
            </>
          )}
        </button>
      )}

      <Link href="/contact">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-4 py-2 bg-[var(--theme-primary)] text-white rounded-lg font-semibold hover:bg-[var(--theme-secondary)] transition-colors text-sm"
        >
          Discuss {service.title}
        </motion.button>
      </Link>
    </motion.div>
  );
}

// Service Grid Component
function ServiceGrid({ services, categoryIndex }: { services: any[]; categoryIndex: number }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, serviceIndex) => (
        <ServiceCard
          key={service.title}
          service={service}
          serviceIndex={serviceIndex}
          categoryIndex={categoryIndex}
        />
      ))}
    </div>
  );
}

const faqs = [
  {
    question: 'How is pricing determined?',
    answer: 'Pricing is based on the scope and amount of work requested. All pricing is negotiable and will be discussed during our initial consultation. I work with clients to find pricing that fits their budget and needs.',
  },
  {
    question: 'Do you work with my tech stack?',
    answer: 'I specialize in AWS, Python, JavaScript/Node.js, PostgreSQL, and most modern development stacks. I\'m technology-agnostic and comfortable learning what\'s needed. If you\'re using something unusual, let\'s discuss—I\'ve worked with everything from cutting-edge AI frameworks to legacy mainframe systems and love to learn new systems and custom solutions for my customers\' needs.',
  },
  {
    question: 'Can you start immediately?',
    answer: 'It depends on current project commitments. Typical lead time is 1-2 weeks for new engagements. Emergency incident response can often be prioritized within 24 hours. Retainer clients get immediate priority access.',
  },
  {
    question: 'What if the scope changes mid-project?',
    answer: 'We\'ll establish clear milestones and check-ins. If scope changes, we handle it through a transparent change order process—you\'ll always know what you\'re paying for and why. No surprise bills.',
  },
  {
    question: 'Do you sign NDAs and work under contract?',
    answer: 'Absolutely. Your security concerns and business details stay confidential. I\'ll sign your NDA or we can use mine. All work is done under a clear contract with defined scope, deliverables, and terms.',
  },
  {
    question: 'Do you work onsite or remote?',
    answer: 'Primarily remote, which keeps costs down for you. I\'m based in Arlington, VA and can meet onsite for initial kickoffs or critical sessions if you\'re in the DC/Northern Virginia area.',
  },
  {
    question: 'What if we\'re not a good fit?',
    answer: 'I\'ll tell you honestly in our first conversation. If I\'m not the right person for your needs, I\'ll likely know someone who is and can make a referral.',
  },
  {
    question: 'Do you have experience with [specific compliance standard]?',
    answer: 'I\'ve worked extensively with SOC 2, HIPAA, and GDPR requirements, particularly at Amazon where compliance was critical. If you need specialized expertise in CMMC, PCI-DSS, or other frameworks, I can advise or bring in a specialist partner.',
  },
  {
    question: 'What happens after the project ends?',
    answer: 'Every engagement includes a support period (typically 2-4 weeks) for questions and minor adjustments. After that, you own all deliverables and documentation. Many clients convert to retainers for ongoing support or run on their own with the documentation I provide.',
  },
  {
    question: 'How do you communicate progress?',
    answer: 'Weekly status updates minimum, plus async updates via Slack/email as needed. For longer engagements, bi-weekly check-in calls. You\'ll always know what\'s been done, what\'s next, and if there are any blockers.',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--theme-text)] mb-4">
            Technical Services & Consulting
          </h1>
          <p className="text-lg text-[var(--theme-text-secondary)] max-w-3xl mx-auto mb-6">
            Enterprise-quality technical services adapted for growing companies. Programming, mentorship, consultation, and security work.
          </p>
          <p className="text-[var(--theme-text-secondary)] max-w-4xl mx-auto mb-4">
            I offer a wide range of technical services designed for startups and mid-market companies. From building web applications to security audits, from mentorship to system design—I bring 7+ years of Amazon and CIA experience to help you build better systems.
          </p>
          <div className="space-y-3 max-w-4xl mx-auto mb-6">
            <p className="text-sm text-[var(--theme-text-secondary)] italic bg-[var(--theme-primary)]/10 border border-[var(--theme-primary)] rounded-lg p-4">
              💰 <strong>Pricing:</strong> All pricing is based on the scope and amount of work requested and is negotiable. Contact me to discuss your specific needs and get a customized quote.
            </p>
            <p className="text-sm text-[var(--theme-text-secondary)] italic bg-green-500/10 border border-green-500 rounded-lg p-4">
              🎁 <strong>Free Consultation:</strong> All initial 30-minute consultations are always free. No obligation, no sales pressure—just an honest conversation about your needs and how I can help.
            </p>
          </div>
        </motion.div>

        {/* TLDR Quick Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="bg-[var(--theme-surface)] border border-[var(--theme-primary)] rounded-lg p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--theme-text)]">
                TLDR: What I Offer
              </h2>
              <span className="text-2xl">⚡</span>
            </div>
            <p className="text-[var(--theme-text-secondary)] mb-8 max-w-3xl">
              Quick overview of all services. Click any category below to jump to details, or scroll down to see everything.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {serviceCategories.map((category, index) => {
                const CategoryIcon = category.icon;
                return (
                  <a
                    key={category.id}
                    href={`#${category.id}`}
                    className="group bg-[var(--theme-bg)] border border-[var(--theme-border)] rounded-lg p-6 hover:border-[var(--theme-primary)] hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl">{category.emoji}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CategoryIcon size={24} className="text-[var(--theme-primary)]" />
                          <h3 className="text-xl font-bold text-[var(--theme-text)] group-hover:text-[var(--theme-primary)] transition-colors">
                            {category.title}
                          </h3>
                        </div>
                        <p className="text-sm text-[var(--theme-text-secondary)] mb-3">
                          {category.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-[var(--theme-text-secondary)]">
                          <span className="px-2 py-1 bg-[var(--theme-primary)]/20 text-[var(--theme-primary)] rounded">
                            {category.services.length} services
                          </span>
                          <span className="group-hover:text-[var(--theme-primary)] transition-colors">
                            View details →
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Quick Service List Preview */}
                    <div className="mt-4 pt-4 border-t border-[var(--theme-border)]">
                      <p className="text-xs font-semibold text-[var(--theme-text-secondary)] mb-2 uppercase">
                        Includes:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {category.services.slice(0, 4).map((service: any) => (
                          <span
                            key={service.title}
                            className="text-xs px-2 py-1 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded text-[var(--theme-text-secondary)]"
                          >
                            {service.title}
                          </span>
                        ))}
                        {category.services.length > 4 && (
                          <span className="text-xs px-2 py-1 text-[var(--theme-text-secondary)] italic">
                            +{category.services.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Category Navigation Bar - Sticky */}
        <div className="sticky top-4 z-50 mb-12">
          <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-4 shadow-lg">
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              <span className="text-sm font-semibold text-[var(--theme-text-secondary)] mr-2">Jump to:</span>
              {serviceCategories.map((category) => {
                const CategoryIcon = category.icon;
                return (
                  <a
                    key={category.id}
                    href={`#${category.id}`}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[var(--theme-text)] hover:text-[var(--theme-primary)] hover:bg-[var(--theme-primary)]/10 rounded-lg transition-colors"
                  >
                    <CategoryIcon size={16} />
                    <span>{category.title}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Service Categories */}
        {serviceCategories.map((category, categoryIndex) => {
          const CategoryIcon = category.icon;
          return (
            <motion.div
              key={category.id}
              id={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-20 scroll-mt-24"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="text-5xl">{category.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-[var(--theme-primary)]/20 rounded-lg">
                      <CategoryIcon size={32} className="text-[var(--theme-primary)]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--theme-text)]">
                      {category.title}
                    </h2>
                  </div>
                  <p className="text-lg text-[var(--theme-text-secondary)]">
                    {category.description}
                  </p>
                </div>
              </div>

              <ServiceGrid services={category.services} categoryIndex={categoryIndex} />
            </motion.div>
          );
        })}

        {/* Disclaimer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-6 mb-8">
            <p className="text-sm text-[var(--theme-text-secondary)]">
              <strong className="text-[var(--theme-text)]">Note:</strong> All services are provided as consulting to end-user companies and organizations. I do not provide services to companies that directly compete with my current or former employers.
            </p>
          </div>
        </motion.div>

        {/* Custom Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--theme-surface)] border border-[var(--theme-primary)] rounded-lg p-8 md:p-10 mb-20"
        >
          <h2 className="text-3xl font-bold text-[var(--theme-text)] mb-4">
            Need Something Different?
          </h2>
          <p className="text-lg text-[var(--theme-text-secondary)] mb-6">
            Every business has unique technical challenges. If your needs don&apos;t fit a standard service above, let&apos;s discuss a custom engagement.
          </p>
          <p className="text-[var(--theme-text-secondary)] mb-6">
            I&apos;ll work with you to define scope, deliverables, timeline, and pricing that fits your situation. All pricing is negotiable based on the work required.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border-2 border-[var(--theme-primary)] text-[var(--theme-primary)] rounded-lg font-semibold hover:bg-[var(--theme-primary)]/10 transition-colors"
            >
              Request Custom Quote
            </motion.button>
          </Link>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle size={32} className="text-[var(--theme-primary)]" />
            <h2 className="text-3xl font-bold text-[var(--theme-text)]">
              Common Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-[var(--theme-text)] mb-3">
                  Q: {faq.question}
                </h3>
                <p className="text-[var(--theme-text-secondary)]">
                  A: {faq.answer}
                </p>
              </motion.div>
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
            Ready to Get Started?
          </h2>
          <p className="text-lg text-[var(--theme-text-secondary)] mb-8 max-w-2xl mx-auto">
            Schedule a free 30-minute consultation to discuss your technical needs. All initial consultations are always free—no obligation, no sales pressure. Just an honest conversation about your challenges and how I can help. All pricing is negotiable based on your specific requirements.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[var(--theme-primary)] text-white rounded-lg font-semibold hover:bg-[var(--theme-secondary)] transition-colors shadow-lg"
            >
              Schedule Free Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
