import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Handshake } from 'lucide-react';
import { companyInfo, businessVerticals } from '../data/zuvoData';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      {/* Subtle, refined ambient liquid glass aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-b from-blue-100/40 via-indigo-50/30 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />

      {/* Background Micro Grid for Structural Polish */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#17171D 1px, transparent 1px), linear-gradient(90deg, #17171D 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Hero Foreground Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Brand Group Signature Lockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-block px-7 py-3.5 rounded-3xl bg-black border border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.4),0_0_28px_rgba(1,91,151,0.25)] overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/40">
            <img
              src="/zuvo-hero-pvt-ltd-black.png"
              alt="ZUVO India Pvt. Ltd."
              className="h-14 sm:h-16 md:h-20 w-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Main Corporate Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#17171D] leading-[1.08] max-w-4xl"
        >
          ONE GROUP.{' '}
          <span className="text-[#015B97]">
            MULTIPLE BUSINESSES.
          </span>{' '}
          ONE VISION.
        </motion.h1>

        {/* Supporting Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-5 text-lg sm:text-2xl font-bold text-[#17171D] tracking-wide max-w-3xl"
        >
          CONNECTING EVERY JOURNEY.
        </motion.h2>

        {/* Concise Company Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-[#686875] font-normal max-w-3xl leading-relaxed"
        >
          {companyInfo.parentDescription}
        </motion.p>

        {/* Two Clear Pathways: Explore Businesses & Partner with ZUVO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <Link
            to="/businesses"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#015B97] hover:bg-[#01426E] shadow-md shadow-[#015B97]/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
          >
            <span>Explore Businesses</span>
            <ArrowRight size={16} />
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/partnerships"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#17171D] glass-panel-white hover:bg-white hover:border-[#015B97]/40 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-sm"
          >
            <Handshake size={16} className="text-[#015B97]" />
            <span>Partner With ZUVO</span>
          </Link>
        </motion.div>

        {/* Four Strategic Verticals Summary Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-16 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl text-left"
        >
          {businessVerticals.map((vert) => (
            <Link
              key={vert.id}
              to="/businesses"
              className="glass-panel-white glass-panel-white-hover p-5 rounded-2xl border border-gray-200/80 group block"
            >
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-mono font-bold text-[#015B97] uppercase">
                  Vertical 0{vert.number}
                </span>
                <ChevronRight size={14} className="text-gray-400 group-hover:text-[#015B97] group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="text-sm font-bold text-[#17171D] group-hover:text-[#015B97] transition-colors leading-snug">
                {vert.name}
              </h3>
              <p className="text-xs text-[#686875] mt-1.5 line-clamp-2 leading-relaxed">
                {vert.summary}
              </p>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
