import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, ShieldCheck, Zap, Server, Code2, Globe, Database, Smartphone, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeading from '../Components/SectionHeading';
import { companyInfo, businessesData } from '../data/zuvoData';

export default function TechnologyPage() {
  useEffect(() => {
    document.title = "Technology & Innovation — ZUVO India Pvt. Ltd.";
  }, []);

  const techPillars = [
    {
      icon: Smartphone,
      title: "Mobile Telemetry & Real-Time Dispatch",
      business: "ZUVO Cabs",
      desc: "Native iOS and Android client architectures engineered with low-latency WebSocket connections and battery-efficient GPS polling to deliver responsive ride booking and pilot routing."
    },
    {
      icon: Server,
      title: "Cloud Microservices & High-Availability APIs",
      business: "Group Infrastructure",
      desc: "Containerized, high-availability backend services built for seamless elasticity, ensuring steady response times during peak city commute surges and high-volume wholesale catalog queries."
    },
    {
      icon: Database,
      title: "Automated GST & Supplier Ledgers",
      business: "ALLZON B2B & Supplier Portal",
      desc: "Automated GST compliance algorithms, invoice generators, and supplier ledger systems powering bulk procurement with real-time auditability and zero reconciliation latency."
    },
    {
      icon: Cpu,
      title: "Certified Smart TV OS Integration",
      business: "ZUVO Android TV",
      desc: "Hardware firmware optimization, Quantum Colour panel calibration, and certified Google Android TV OS integration delivering crisp 4K imagery and Dolby Atmos spatial sound."
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-transparent text-[#17171D] min-h-screen">
      {/* 1. Header (Premium White Corporate Hero) */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200/80/60 bg-white/60 backdrop-blur-md overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#015B97]/20 border border-[#015B97]/30 text-[#015B97] text-xs font-semibold tracking-wider uppercase mb-6">
            <Cpu size={14} />
            <span>Digital Engineering & Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#17171D] leading-tight">
            Technology &{' '}
            <span className="text-[#015B97]">
              Innovation at Scale
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#5F5F6E] max-w-2xl mx-auto leading-relaxed">
            Discover the verified software platforms, mobile applications, and hardware integration standards powering ZUVO India Pvt. Ltd. across its four verticals.
          </p>
        </div>
      </div>

      {/* 2. Four Concrete Technology Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          badge="Verified Capabilities"
          title="Core Technological Infrastructure"
          subtitle="How our platforms are built to sustain multi-city mobility and high-volume commercial commerce."
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {techPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel-white glass-panel-white-hover rounded-3xl p-8 sm:p-10 border border-gray-200/80/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#015B97]/20 text-[#015B97] border border-[#015B97]/30 flex items-center justify-center">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-500 uppercase px-3 py-1 rounded bg-gray-50">
                      {pillar.business}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#17171D] mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-[#5F5F6E] text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-200/80 text-xs font-semibold text-[#015B97] flex items-center gap-2">
                  <ShieldCheck size={16} /> Verified Platform Implementation
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 3. Platform Breakdown by Operating Venture */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white/70 border-t border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Digital Matrix"
            title="Digital Platforms by Operating Company"
            subtitle="Verified client and operational applications maintained across our business verticals."
            theme="light"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {businessesData.map((b) => (
              <div key={b.id} className="p-6 rounded-2xl bg-white border border-gray-200/80/80 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#015B97] uppercase">{b.category}</span>
                  <h4 className="text-lg font-bold text-[#17171D] mt-1 mb-2">{b.name}</h4>
                  <p className="text-[#5F5F6E] text-xs leading-relaxed">{b.tagline}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/80 flex items-center justify-between">
                  <Link
                    to={`/businesses/${b.id}`}
                    className="text-xs font-bold text-[#015B97] hover:underline flex items-center gap-1"
                  >
                    <span>View Architecture</span>
                    <ArrowRight size={12} />
                  </Link>
                  <a
                    href={b.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 hover:text-black flex items-center gap-1"
                  >
                    <span>Portal</span>
                    <Globe size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
