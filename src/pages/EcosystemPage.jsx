import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Smartphone, Monitor, ShoppingCart, Database, ArrowRight, CheckCircle2, Server, ExternalLink, Network, Layers, Cpu, ShieldCheck, Zap, Globe } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import DigitalEcosystem from '../components/DigitalEcosystem';
import { companyInfo, businessesData } from '../data/zuvoData';

export default function EcosystemPage() {
  useEffect(() => {
    document.title = "Our Ecosystem & Technology Innovation — ZUVO India Pvt. Ltd.";
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
            <Network size={14} />
            <span>Synergistic Portfolio & Technology Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#17171D] leading-tight">
            The ZUVO Connected{' '}
            <span className="text-[#015B97]">
              Ecosystem & Technology
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#5F5F6E] max-w-2xl mx-auto leading-relaxed">
            How our four strategic verticals connect, share core digital channels, and leverage unified engineering infrastructure across mobility, commerce, and hardware.
          </p>
        </div>
      </div>

      {/* 2. Embedded Interactive Digital Ecosystem Matrix */}
      <DigitalEcosystem />

      {/* 3. Technology & Engineering Innovation Infrastructure */}
      <div id="technology" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200/80/60">
        <SectionHeading
          badge="Technology & Innovation"
          title="Core Technological Infrastructure"
          subtitle="How our platforms are engineered to sustain high-uptime urban transit and wholesale transaction volume."
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
                  <ShieldCheck size={16} /> Verified Engineering Standard
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 4. Synergistic Cross-Venture Flywheel */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white/70 border-t border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Synergistic Flywheel"
            title="How ZUVO Platforms Multiply Value"
            subtitle="Understanding the operational touchpoints between transport, digital marketplaces, and consumer hardware."
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="glass-panel-white p-8 rounded-3xl border border-gray-200/80/80 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#015B97] uppercase">Touchpoint 01</span>
                <h3 className="text-xl font-bold text-[#17171D] mt-2 mb-3">Mobility Feeds Commercial Retail</h3>
                <p className="text-[#5F5F6E] text-sm leading-relaxed">
                  Urban transport operations through ZUVO Cabs and ZUVOHUB create frequent passenger engagement, allowing localized cross-promotion for USEDQ and automotive car care accessories.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200/80 text-xs font-semibold text-[#015B97]">
                ZUVO Cabs ↔ USEDQ ↔ ALLZON
              </div>
            </div>

            <div className="glass-panel-white p-8 rounded-3xl border border-gray-200/80/80 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#015B97] uppercase">Touchpoint 02</span>
                <h3 className="text-xl font-bold text-[#17171D] mt-2 mb-3">Wholesale Informs Consumer Pricing</h3>
                <p className="text-[#5F5F6E] text-sm leading-relaxed">
                  Direct manufacturer relations built on ALLZON B2B and the Supplier Portal enable cost advantages that pass down directly to end-consumers buying automotive infotainment and smart electronics.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200/80 text-xs font-semibold text-[#015B97]">
                Supplier Portal ↔ ALLZON B2B ↔ ZUVO Android TV
              </div>
            </div>

            <div className="glass-panel-white p-8 rounded-3xl border border-gray-200/80/80 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#015B97] uppercase">Touchpoint 03</span>
                <h3 className="text-xl font-bold text-[#17171D] mt-2 mb-3">Centralized Tech Governance</h3>
                <p className="text-[#5F5F6E] text-sm leading-relaxed">
                  Headquartered at TIDEL Park, our engineering teams maintain high-uptime cloud infrastructure, automated tax ledgers, and secure authentication across all seven digital web portals.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200/80 text-xs font-semibold text-[#015B97]">
                TIDEL Park IT Center ↔ All 7 Platforms
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
