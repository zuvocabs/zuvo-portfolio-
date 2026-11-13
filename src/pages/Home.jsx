import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import BusinessGrid from '../components/BusinessGrid';
import Vision from '../components/Vision';
import WhyZuvo from '../components/WhyZuvo';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Handshake, Briefcase, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function Home() {
  useEffect(() => {
    document.title = "ZUVO INDIA PVT. LTD. — Connecting Every Journey | Operating Parent Group";
  }, []);

  return (
    <main className="w-full overflow-hidden bg-transparent text-[#17171D]">
      {/* 1. CORPORATE HERO (Parent Group Identity & Navigation Pathways) */}
      <Hero />

      {/* 2. WHO WE ARE — Short Corporate Introduction */}
      <About />

      {/* 3. BUSINESS PORTFOLIO HIGHLIGHTS (Venture Showcase) */}
      <BusinessGrid />

      {/* 4. VISION & CORPORATE NORTH STAR */}
      <Vision />

      {/* 5. WHY ZUVO / OUR APPROACH & VALUES */}
      <WhyZuvo />

      {/* 6. PARTNERSHIP & CAREERS HIGHLIGHTS (Dual Engagement Desks) */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Institutional Collaboration"
            title="Engage With ZUVO Parent Group"
            subtitle="Explore dedicated commercial partnerships or discover high-impact careers across our business verticals."
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Partnerships Desk Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="liquid-glass-card liquid-glass-card-hover rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden group"
            >
              <div className="absolute -top-14 -right-14 w-40 h-40 bg-[#015B97]/10 rounded-full blur-2xl group-hover:bg-[#015B97]/20 transition-all duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#015B97]/15 text-[#015B97] border border-[#015B97]/25 flex items-center justify-center mb-6">
                  <Handshake size={24} />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#015B97] px-3 py-1 rounded-xl bg-white/80 backdrop-blur-md border border-white/80 shadow-xs inline-block">Commercial Gateway</span>
                <h3 className="text-2xl font-bold text-[#17171D] mt-3 mb-3">Partnerships & Sourcing</h3>
                <p className="text-[#5F5F6E] text-sm leading-relaxed">
                  We collaborate with fleet operators, automotive manufacturers, industrial suppliers, retail distributors, and institutional partners across India.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100/80 flex items-center justify-between relative z-10">
                <span className="text-xs font-semibold text-gray-500">Fleet • Wholesale • Retail</span>
                <Link
                  to="/partnerships"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#015B97] hover:bg-[#01426E] transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>Explore Partnerships</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>

            {/* Careers Desk Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="liquid-glass-card liquid-glass-card-hover rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden group"
            >
              <div className="absolute -top-14 -right-14 w-40 h-40 bg-cyan-400/10 rounded-full blur-2xl group-hover:bg-cyan-400/20 transition-all duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#015B97]/15 text-[#015B97] border border-[#015B97]/25 flex items-center justify-center mb-6">
                  <Briefcase size={24} />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#015B97] px-3 py-1 rounded-xl bg-white/80 backdrop-blur-md border border-white/80 shadow-xs inline-block">Talent & Workplace</span>
                <h3 className="text-2xl font-bold text-[#17171D] mt-3 mb-3">Careers at ZUVO</h3>
                <p className="text-[#5F5F6E] text-sm leading-relaxed">
                  Join our engineering, operations, and business strategy teams at TIDEL Park, Chennai. Build resilient products that touch everyday Indian lives.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100/80 flex items-center justify-between relative z-10">
                <span className="text-xs font-semibold text-gray-500">TIDEL Park, Chennai HQ</span>
                <Link
                  to="/careers"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#17171D] bg-white/80 hover:bg-white border border-white/90 transition-all flex items-center gap-2 shadow-xs"
                >
                  <span>View Opportunities</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
