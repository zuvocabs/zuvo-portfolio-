import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BusinessCard({ business, index = 0 }) {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const isTv = business.id === 'zuvo-android-tv';

  const toggleInfo = (e) => {
    e.stopPropagation();
    setIsInfoOpen((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={() => window.open(business.url, '_blank', 'noopener,noreferrer')}
      className={`group relative rounded-3xl h-[240px] sm:h-[270px] overflow-hidden transition-all duration-500 cursor-pointer ${
        isTv
          ? 'bg-black/95 border border-white/10 shadow-lg hover:shadow-cyan-500/10'
          : 'bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_12px_36px_-6px_rgba(1,91,151,0.08),0_4px_12px_rgba(23,23,29,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:shadow-[0_22px_50px_-8px_rgba(1,91,151,0.18),0_8px_20px_rgba(23,23,29,0.06),inset_0_1px_2px_rgba(255,255,255,1)] hover:border-blue-200/80 hover:-translate-y-2'
      }`}
    >
      {/* Specular Liquid Ambient Glow & Sheen */}
      {!isTv && (
        <>
          <div className="absolute -top-16 -right-16 w-44 h-44 bg-[#015B97]/10 rounded-full blur-2xl group-hover:bg-[#015B97]/20 transition-all duration-700 pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-cyan-400/10 rounded-full blur-2xl group-hover:bg-cyan-400/15 transition-all duration-700 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-white/60 pointer-events-none" />
        </>
      )}

      {/* 1. Full Logo Card Canvas */}
      <div className="absolute inset-0 flex items-center justify-center select-none z-10 p-6 overflow-hidden">
        <img
          src={business.image}
          alt={business.name}
          className="max-w-[78%] max-h-[72%] object-contain transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Top-Left Category Badge */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none">
        <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl bg-white/80 backdrop-blur-md text-[#015B97] border border-white/80 shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.9)]">
          {business.badge}
        </span>
      </div>

      {/* Bottom Bar: Info Button on the Left & Dive Into Portal on the Right */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        {/* Info Button - Placed Below on the Left Side */}
        <button
          type="button"
          onClick={toggleInfo}
          className="pointer-events-auto px-3.5 py-1.5 rounded-xl bg-white/85 backdrop-blur-md border border-white/90 text-[#17171D] hover:bg-[#015B97] hover:text-white hover:border-[#015B97] transition-all flex items-center gap-1.5 text-xs font-bold shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.9)] cursor-pointer"
          aria-label={`View brief description of ${business.name}`}
        >
          <Info size={14} className="text-[#015B97]" />
          <span>Info</span>
        </button>

        {/* Dive Into Portal - Placed on the Right Side */}
        <div
          className="pointer-events-auto px-3.5 py-1.5 rounded-xl bg-white/85 backdrop-blur-md border border-white/90 text-[#17171D] group-hover:bg-[#015B97] group-hover:text-white group-hover:border-[#015B97] transition-all flex items-center gap-1.5 text-xs font-bold shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.9)]"
        >
          <span>Dive Into Portal</span>
          <ExternalLink size={12} />
        </div>
      </div>

      {/* 2. Brief Description Overlay (Revealed when Info button is clicked) */}
      <AnimatePresence>
        {isInfoOpen && (
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-0 z-30 p-5 sm:p-6 bg-white/92 backdrop-blur-2xl flex flex-col justify-between text-[#17171D] cursor-default border border-white/80"
          >
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#015B97]">
                    {business.verticalName}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-[#17171D] leading-tight">
                    {business.name}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={toggleInfo}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close Info"
                >
                  <X size={16} />
                </button>
              </div>

              <p className="text-[#5F5F6E] text-xs sm:text-sm mt-3 leading-relaxed line-clamp-3">
                {business.shortDesc}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {business.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-medium text-[#015B97] bg-blue-50/80 border border-blue-100 px-2 py-0.5 rounded-md"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <Link
                to={`/businesses/${business.slug}`}
                className="text-xs font-bold text-[#015B97] hover:underline flex items-center gap-1"
              >
                <span>Group Dossier</span>
                <ArrowRight size={13} />
              </Link>
              <button
                type="button"
                onClick={() => window.open(business.url, '_blank')}
                className="px-3.5 py-1.5 rounded-lg bg-[#015B97] hover:bg-[#01426E] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
              >
                <span>Visit Website</span>
                <ExternalLink size={12} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
