import React from 'react';
import { motion } from 'framer-motion';
import { Car, ShoppingBag, Briefcase, Tv, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import { businessVerticals, businessesData } from '../data/zuvoData';

export default function IndustrySection() {
  const iconMap = {
    Car: Car,
    ShoppingBag: ShoppingBag,
    Briefcase: Briefcase,
    Tv: Tv,
  };

  return (
    <section id="verticals" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-transparent text-[#17171D] overflow-hidden border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          badge="Market Diversification"
          title="Organized Into Four Strategic Verticals"
          subtitle="ZUVO India Pvt. Ltd. connects specialized operations across urban mobility, pre-owned trading, automotive retail, wholesale commerce, and smart electronics."
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {businessVerticals.map((vert, idx) => {
            const IconComponent = iconMap[vert.icon] || Car;
            const relatedBizs = businessesData.filter((b) => b.verticalId === vert.id);

            return (
              <motion.div
                key={vert.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="liquid-glass-card liquid-glass-card-hover rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden group"
              >
                <div className="absolute -top-14 -right-14 w-40 h-40 bg-[#015B97]/10 rounded-full blur-2xl group-hover:bg-[#015B97]/20 transition-all duration-500 pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#015B97]/15 text-[#015B97] border border-[#015B97]/25 flex items-center justify-center">
                      <IconComponent size={24} />
                    </div>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-xl bg-white/80 backdrop-blur-md text-[#015B97] border border-white/80 shadow-xs">
                      Vertical 0{vert.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#17171D] tracking-tight">
                    {vert.name}
                  </h3>

                  <p className="text-sm font-semibold text-[#015B97] mt-1 mb-3">
                    {vert.tagline}
                  </p>

                  <p className="text-[#5F5F6E] text-sm leading-relaxed mb-6">
                    {vert.summary}
                  </p>

                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Operating Portfolio Ventures:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {relatedBizs.map((b) => (
                        <Link
                          key={b.id}
                          to={`/businesses/${b.slug}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 backdrop-blur-md border border-white/90 text-xs font-semibold text-[#17171D] hover:border-[#015B97] hover:text-[#015B97] transition-all shadow-xs"
                        >
                          <span>{b.name}</span>
                          <ArrowRight size={11} className="text-[#015B97]" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-8 border-t border-gray-100/80 flex items-center justify-between relative z-10">
                  <span className="text-xs text-gray-500 font-mono">
                    High Operational Governance
                  </span>
                  <Link
                    to="/businesses"
                    className="text-xs font-bold text-[#015B97] hover:text-[#01426E] flex items-center gap-1 uppercase tracking-wider transition-colors"
                  >
                    <span>Sector Details</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
