import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Vision() {
  return (
    <section id="innovation" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-transparent text-[#17171D] overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/80 shadow-xs text-xs font-semibold tracking-wider uppercase mb-6"
        >
          <Sparkles size={14} className="text-[#015B97]" />
          <span className="text-[#015B97] font-bold">Our North Star</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#17171D] leading-tight"
        >
          Connecting Every Journey.{' '}
          <span className="text-[#015B97] block mt-1">
            Creating New Possibilities.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-[#5F5F6E] leading-relaxed max-w-3xl font-normal"
        >
          "We believe the future belongs to connected experiences. Our vision is to build meaningful platforms that simplify everyday life, empower businesses and create new opportunities through technology."
        </motion.p>

        {/* Corporate Commitment Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full text-left"
        >
          <div className="liquid-glass-card liquid-glass-card-hover rounded-3xl p-7 flex flex-col justify-between overflow-hidden">
            <div>
              <span className="text-[#015B97] font-mono text-xs font-bold uppercase px-3 py-1 rounded-xl bg-white/80 backdrop-blur-md border border-white/80 shadow-xs inline-block">01. Human-Centric</span>
              <h4 className="text-[#17171D] font-bold text-lg mt-3">Effortless Everyday Utility</h4>
              <p className="text-[#5F5F6E] text-xs sm:text-sm mt-2 leading-relaxed">Designing software and hardware interfaces that remove friction from travel, trading, and entertainment.</p>
            </div>
          </div>

          <div className="liquid-glass-card liquid-glass-card-hover rounded-3xl p-7 flex flex-col justify-between overflow-hidden">
            <div>
              <span className="text-[#015B97] font-mono text-xs font-bold uppercase px-3 py-1 rounded-xl bg-white/80 backdrop-blur-md border border-white/80 shadow-xs inline-block">02. Cross-Synergies</span>
              <h4 className="text-[#17171D] font-bold text-lg mt-3">Interoperable Ventures</h4>
              <p className="text-[#5F5F6E] text-xs sm:text-sm mt-2 leading-relaxed">Linking passenger fleet movements with commercial deliveries and automotive aftermarket distribution.</p>
            </div>
          </div>

          <div className="liquid-glass-card liquid-glass-card-hover rounded-3xl p-7 flex flex-col justify-between overflow-hidden">
            <div>
              <span className="text-[#015B97] font-mono text-xs font-bold uppercase px-3 py-1 rounded-xl bg-white/80 backdrop-blur-md border border-white/80 shadow-xs inline-block">03. Enduring Trust</span>
              <h4 className="text-[#17171D] font-bold text-lg mt-3">Capital & Governance</h4>
              <p className="text-[#5F5F6E] text-xs sm:text-sm mt-2 leading-relaxed">Transparent financial accountability, data privacy, and ethical compliance across all nationwide operations.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
