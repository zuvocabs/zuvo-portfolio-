import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  Code2,
  Smartphone,
  Database,
  Layers,
  ShoppingBag,
  Palette,
  Network,
  Wrench,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Cpu,
  Monitor,
  Terminal,
  Server
} from 'lucide-react';
import SectionHeading from '../Components/SectionHeading';
import { companyInfo } from '../data/zuvoData';

export default function DigitalSolutionsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Software & Digital Solutions — ZUVO India Pvt. Ltd.";
  }, []);

  const handleStartProject = () => {
    navigate('/contact?type=software', {
      state: { enquiryType: 'Software & Digital Solutions Project Enquiry' },
    });
  };

  const services = [
    {
      id: 'website-development',
      icon: Monitor,
      title: 'Website Development',
      badge: 'Web Architectures',
      desc: 'High-performance corporate portals, dynamic single-page applications, and headless web platforms engineered with React, Next.js, and modern cloud deployment frameworks.',
      deliverables: ['Custom React / Next.js Web Apps', 'Responsive Corporate Websites', 'Jamstack & Headless CMS', 'Core Web Vitals & SEO Tuning'],
    },
    {
      id: 'mobile-app-development',
      icon: Smartphone,
      title: 'Mobile App Development',
      badge: 'iOS & Android',
      desc: 'Native and cross-platform mobile applications delivering fluid animations, real-time geolocation telemetry, secure offline storage, and responsive payment gateways.',
      deliverables: ['Flutter & React Native Builds', 'Native iOS (Swift) & Android (Kotlin)', 'Live GPS & Dispatch Interfaces', 'App Store / Play Store Release'],
    },
    {
      id: 'erp-systems',
      icon: Database,
      title: 'ERP Systems',
      badge: 'Enterprise Automation',
      desc: 'Custom enterprise resource planning systems streamlining multi-warehouse inventory, procurement ledgers, automated GST invoicing, and operational workforce governance.',
      deliverables: ['Inventory & Warehouse SCM', 'Automated GST & E-Way Billing', 'Role-Based Access & Audit Logs', 'Supplier & Vendor Portals'],
    },
    {
      id: 'custom-software',
      icon: Code2,
      title: 'Custom Software Development',
      badge: 'Bespoke Engineering',
      desc: 'Tailored backend engines, microservice clusters, and proprietary business applications designed to solve unique organizational bottlenecks with high reliability.',
      deliverables: ['High-Concurrency Microservices', 'Workflow Automation Engines', 'Telemetry & Event Streaming', 'Scalable Cloud Databases'],
    },
    {
      id: 'ecommerce-solutions',
      icon: ShoppingBag,
      title: 'Ecommerce Solutions',
      badge: 'Digital Commerce',
      desc: 'Direct-to-consumer and B2B wholesale shopping platforms featuring ultra-fast faceted search, instant checkout funnels, multi-tier pricing, and courier integrations.',
      deliverables: ['B2B & B2C Commerce Platforms', 'Tiered Pricing & Volume Slabs', 'Integrated Indian Payment Gateways', 'Logistics & Courier API Sync'],
    },
    {
      id: 'ui-ux-design',
      icon: Palette,
      title: 'UI/UX Design',
      badge: 'Design Systems',
      desc: 'Handcrafted human-centered interfaces, interaction design systems, and clickable high-fidelity prototypes validated with usability testing and accessibility standards.',
      deliverables: ['Design Systems & Component Kits', 'Interactive Figma Prototypes', 'User Journey Mapping & Wireframes', 'WCAG Accessibility Standards'],
    },
    {
      id: 'api-integration',
      icon: Network,
      title: 'API / System Integration',
      badge: 'Ecosystem Interoperability',
      desc: 'Connecting disparate ERPs, payment gateways, banking APIs, telematics devices, and third-party SaaS platforms through clean, rate-limited REST and GraphQL bridges.',
      deliverables: ['Payment & Banking Gateways', 'SMS, WhatsApp & Email Pipelines', 'Hardware / Telematics Connectors', 'Secure Webhook Ingestion Engines'],
    },
    {
      id: 'software-maintenance',
      icon: Wrench,
      title: 'Software Maintenance & Support',
      badge: '24/7 Reliability',
      desc: 'Proactive infrastructure monitoring, SLA-backed vulnerability patching, database optimization, and continuous feature iterations to ensure zero downtime.',
      deliverables: ['Round-the-Clock Server Monitoring', 'Security Audits & Patching', 'Database Query Optimization', 'Dedicated Monthly Engineering SLAs'],
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-transparent text-[#17171D] min-h-screen">
      {/* 1. Hero Section (Premium White Corporate Design) */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-xl border-b border-gray-200/80 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#015B97]/15 border border-[#015B97]/30 text-[#015B97] text-xs font-semibold tracking-wider uppercase mb-6">
            <Cpu size={14} />
            <span>Enterprise Technology & Client Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#17171D] leading-[1.08]">
            Architecting Scalable{' '}
            <span className="text-[#015B97]">Digital Solutions</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#5F5F6E] max-w-3xl mx-auto leading-relaxed">
            From modern responsive web applications and cross-platform mobile apps to bespoke enterprise ERP platforms and high-throughput APIs — ZUVO engineers robust digital systems designed for performance, resilience, and measurable growth.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleStartProject}
              className="px-8 py-4 rounded-2xl bg-[#015B97] hover:bg-[#01426E] text-white text-sm font-bold tracking-wider uppercase flex items-center gap-2 shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight size={16} />
            </button>
            <Link
              to="/technology"
              className="px-8 py-4 rounded-2xl bg-white border border-gray-200/80 hover:bg-gray-50 text-[#17171D] text-sm font-bold tracking-wider uppercase transition-all"
            >
              Explore Engineering Pillars
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Structured Services Portfolio Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#015B97] mb-2">
            Engineering Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17171D] tracking-tight">
            Full-Spectrum Software Lifecycle Services
          </h2>
          <p className="text-[#5F5F6E] text-sm mt-3 leading-relaxed">
            Each service is delivered with dedicated agile sprint governance, comprehensive documentation, and strict quality assurance protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/90 shadow-sm hover:shadow-[0_20px_45px_-12px_rgba(1,91,151,0.18)] hover:border-[#015B97]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon size={22} className="text-[#015B97]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-gray-100 text-[#015B97]">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#17171D] group-hover:text-[#015B97] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-[#5F5F6E] mt-2.5 leading-relaxed">
                    {srv.desc}
                  </p>

                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Key Deliverables
                    </div>
                    <ul className="space-y-1.5">
                      {srv.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-1.5 text-xs text-[#17171D]">
                          <CheckCircle2 size={13} className="text-[#015B97] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={handleStartProject}
                    className="w-full py-2.5 rounded-xl bg-gray-50 hover:bg-[#015B97] text-[#17171D] hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Enquire on this Service</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 3. Engineering Standard & Engagement Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#015B97]/15 via-blue-50/50 to-white/80 border border-blue-100/90 shadow-sm backdrop-blur-xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#015B97]">
              Disciplined Technical Governance
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17171D] mt-2 tracking-tight">
              Ready to accelerate your technological roadmap?
            </h3>
            <p className="text-[#5F5F6E] text-sm mt-3 leading-relaxed">
              Connect directly with our senior software architects at TIDEL Park, Chennai. We analyze your requirements, establish technical milestones, and build scalable architectures aligned with your commercial objectives.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleStartProject}
                className="px-7 py-3.5 rounded-xl bg-[#015B97] hover:bg-[#01426E] text-white text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-md cursor-pointer transition-all"
              >
                <span>Start a Project</span>
                <ArrowRight size={14} />
              </button>
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-xl bg-white border border-gray-200/80 hover:bg-gray-50 text-[#17171D] text-xs font-bold tracking-wider uppercase transition-all"
              >
                Contact Secretariat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

