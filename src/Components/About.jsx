import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { companyInfo } from '../data/zuvoData';

export default function About() {
  const corporatePillars = [
    {
      title: "Operating Parent Model",
      desc: "Rather than functioning as a passive investment vehicle, ZUVO India Pvt. Ltd. acts as an active operating parent company, providing shared technology infrastructure, capital discipline, and brand leadership across all ventures."
    },
    {
      title: "Cross-Industry Synergies",
      desc: "By combining mobility logistics with wholesale and consumer marketplaces, ZUVO builds interoperable channels where transport feeds commerce, and digital portals empower physical merchants."
    },
    {
      title: "Anchored in TIDEL Park, Chennai",
      desc: "Headquartered inside Tamil Nadu's pioneering IT & technology hub, our engineering and operational teams manage high-uptime systems, regional fleet protocols, and nationwide merchant networks."
    }
  ];

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-transparent text-[#17171D] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          badge="Who We Are"
          title="Diversified Parent Enterprise"
          subtitle="ZUVO India Pvt. Ltd. is an operating parent company established in 2025, stewarding specialized scalable businesses across four strategic industry sectors."
          theme="light"
        />

        {/* Corporate Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {corporatePillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="liquid-glass-card liquid-glass-card-hover rounded-3xl p-8 flex flex-col justify-between overflow-hidden group"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#015B97]/10 rounded-full blur-xl group-hover:bg-[#015B97]/15 transition-all duration-500 pointer-events-none" />
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-xl bg-white/80 backdrop-blur-md text-[#015B97] border border-white/80 shadow-xs">
                  Pillar 0{idx + 1}
                </span>
                <h3 className="text-xl font-bold text-[#17171D] mt-4 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-[#5F5F6E] text-sm mt-3 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100/80 text-xs font-semibold text-[#015B97] flex items-center gap-1.5">
                <ShieldCheck size={15} /> Verified Corporate Foundation
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate Headquarters Banner (Content Without Card Container) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 pt-12 border-t border-gray-200/80 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#015B97]">
              Corporate Governance & Presence
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#17171D] tracking-tight leading-snug">
              Building Enduring Institutional Trust Across India
            </h3>
            <p className="text-[#5F5F6E] text-sm sm:text-base leading-relaxed">
              ZUVO India Pvt. Ltd. operates with disciplined corporate governance, localized field operations, and long-term technological vision. Through our four specialized business verticals, we aim to simplify daily mobility, empower retail merchants through direct manufacturer sourcing, and deliver high-fidelity smart living room electronics.
            </p>
            <div className="pt-2 flex flex-wrap gap-5 text-xs font-semibold">
              <Link
                to="/about"
                className="text-[#015B97] hover:text-[#01426E] flex items-center gap-1.5 uppercase tracking-wider font-bold transition-colors"
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/partnerships"
                className="text-[#686875] hover:text-[#17171D] flex items-center gap-1.5 uppercase tracking-wider font-bold transition-colors"
              >
                <span>Explore Collaboration Models</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full text-center py-4">
              <div className="inline-block px-6 py-3 rounded-2xl bg-black border border-white/20 shadow-md mb-3">
                <img src="/zuvo-hero-pvt-ltd-black.png" alt={companyInfo.name} className="h-10 sm:h-11 w-auto mx-auto object-contain" />
              </div>
              <div className="text-base font-bold text-[#17171D] uppercase tracking-wide">{companyInfo.name}</div>
              <div className="text-xs text-[#015B97] font-semibold uppercase tracking-wider mt-1">{companyInfo.corporateMotto}</div>
              <div className="mt-4 pt-3 border-t border-gray-200/60 text-[11px] text-[#686875]">
                Registered Office: TIDEL Park, Chennai
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
