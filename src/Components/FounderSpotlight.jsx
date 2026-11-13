import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, Quote, ArrowRight, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { companyInfo } from '../data/zuvoData';

export default function FounderSpotlight() {
  const { founder } = companyInfo;

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#08070D] text-white overflow-hidden border-t border-purple-900/30">
      {/* Background Liquid Atmosphere */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[500px] bg-[#012F4E]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="glass-panel-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#015B97]/30 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Border Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#015B97]/20 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Executive Portrait Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col items-center"
            >
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-[#1E1735] via-[#120D22] to-[#0A0713] border border-[#015B97]/30 flex flex-col items-center justify-center p-0 text-center shadow-xl group">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-white text-xs font-mono font-bold border border-white/20">
                  {founder.title}
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 text-left">
                  <h3 className="text-xl font-extrabold text-white tracking-tight">
                    {founder.name}
                  </h3>
                  <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider font-mono">
                    {founder.title} • {founder.company}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Founder Introduction & Vision */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-white border border-[#015B97]/40 text-blue-200 text-xs font-semibold tracking-wider uppercase">
                <Award size={14} className="text-blue-400" />
                <span>Executive Leadership</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Pioneering Interconnected Enterprises Under{' '}
                <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-white bg-clip-text text-transparent">
                  Visionary Stewardship
                </span>
              </h2>

              <p className="text-[#5F5F6E] text-sm sm:text-base leading-relaxed">
                {founder.bio}
              </p>

              {/* Founder Executive Quote */}
              <div className="relative pl-6 py-2 border-l-2 border-[#015B97]/60 bg-purple-950/20 rounded-r-2xl pr-4">
                <Quote size={20} className="text-blue-400/50 mb-2" />
                <p className="text-blue-100 text-sm sm:text-base italic leading-relaxed">
                  "{founder.quote}"
                </p>
                <span className="block mt-2 text-xs font-bold uppercase tracking-wider text-blue-300">
                  — {founder.name}, {founder.title}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/leadership"
                  className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/30 transition-all flex items-center gap-2"
                >
                  <span>Explore Leadership Profile</span>
                  <ArrowRight size={14} />
                </Link>

                <Link
                  to="/people"
                  className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-blue-200 glass-panel-white border border-[#015B97]/30 hover:border-[#015B97]/40/50 hover:text-white transition-all"
                >
                  Meet Our People
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

