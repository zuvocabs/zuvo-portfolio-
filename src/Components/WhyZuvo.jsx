import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, GitMerge, HeartHandshake } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function WhyZuvo() {
  const cards = [
    {
      icon: Cpu,
      title: "INNOVATION",
      desc: "Relentless focus on practical digital platforms, intuitive interfaces, and proprietary algorithms that enhance real-world utility.",
      rotateClass: "lg:rotate-[12deg]",
      translateClass: "lg:translate-y-8",
    },
    {
      icon: Layers,
      title: "DIVERSE ECOSYSTEM",
      desc: "Cross-industry resilience spanning passenger mobility, pre-owned commerce, automotive retail, wholesale supply, and consumer TVs.",
      rotateClass: "lg:rotate-[4deg]",
      translateClass: "lg:translate-y-24",
    },
    {
      icon: GitMerge,
      title: "CONNECTED EXPERIENCES",
      desc: "Unified design principles, interoperable technology standards, and synergistic business models that empower users across every journey.",
      rotateClass: "lg:-rotate-[4deg]",
      translateClass: "lg:translate-y-24",
    },
    {
      icon: HeartHandshake,
      title: "CUSTOMER FOCUS",
      desc: "Transparent pricing, verified partners, responsive support, and uncompromised dedication to customer safety and partner prosperity.",
      rotateClass: "lg:-rotate-[12deg]",
      translateClass: "lg:translate-y-8",
    }
  ];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-transparent text-[#17171D] overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          badge="Corporate Values"
          title="Built Around Possibility"
          subtitle="ZUVO India Pvt. Ltd. operates with disciplined governance, long-term technological vision, and an enduring commitment to partner success."
          theme="light"
        />

        {/* U-Shaped Hanging Arc Display (Matches 1st reference diagram) */}
        <div className="relative mt-16 pt-4 pb-24 flex flex-col items-center">
          
          {/* Top Hanging Central Core Sphere & U-Arc Track (Desktop only, subtle & clean) */}
          <div className="hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 flex-col items-center z-10 pointer-events-none">
            {/* Blue Central Disc: CORE VALUES */}
            <div className="w-28 h-28 rounded-full bg-gradient-to-b from-[#0274BE] to-[#015B97] text-white flex flex-col items-center justify-center text-center shadow-[0_12px_32px_rgba(1,91,151,0.35)] border-4 border-white">
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase opacity-90 leading-tight">CORE</span>
              <span className="text-sm font-extrabold tracking-wider uppercase leading-tight">VALUES</span>
            </div>

            {/* Downward U-Arc Curve with Nodes */}
            <svg
              className="w-[820px] h-[160px] -mt-10 overflow-visible"
              viewBox="0 0 820 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* U-Shape Path: High at ends, dipping down in the middle under the circle */}
              <path
                d="M 60 10 C 60 140, 240 150, 410 150 C 580 150, 760 140, 760 10"
                stroke="url(#uArcGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="4 4"
                className="opacity-70"
              />
              <defs>
                <linearGradient id="uArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#015B97" stopOpacity="0.2" />
                  <stop offset="25%" stopColor="#0274BE" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#00C0FF" stopOpacity="1" />
                  <stop offset="75%" stopColor="#0274BE" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#015B97" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Connected Dots on Arc */}
              <circle cx="60" cy="10" r="4.5" fill="#015B97" stroke="#ffffff" strokeWidth="2" />
              <circle cx="160" cy="85" r="4" fill="#0274BE" stroke="#ffffff" strokeWidth="2" />
              <circle cx="280" cy="140" r="4" fill="#00C0FF" stroke="#ffffff" strokeWidth="2" />
              <circle cx="540" cy="140" r="4" fill="#00C0FF" stroke="#ffffff" strokeWidth="2" />
              <circle cx="660" cy="85" r="4" fill="#0274BE" stroke="#ffffff" strokeWidth="2" />
              <circle cx="760" cy="10" r="4.5" fill="#015B97" stroke="#ffffff" strokeWidth="2" />
            </svg>
          </div>

          {/* 4 Cards Arranged in Hanging U-Curve Array */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 w-full max-w-6xl relative z-20 pt-8 lg:pt-28">
            {cards.map((c, idx) => {
              const Icon = c.icon;

              return (
                <div
                  key={c.title}
                  className={`lg:origin-top transition-all duration-500 hover:scale-[1.04] z-20 ${c.translateClass} ${c.rotateClass}`}
                >
                  <div
                    className="liquid-glass-card rounded-3xl p-6 sm:p-7 min-h-[290px] flex flex-col justify-between overflow-hidden shadow-[0_20px_45px_-10px_rgba(1,91,151,0.12)] hover:shadow-[0_28px_60px_-10px_rgba(1,91,151,0.24)] hover:border-cyan-400/50 group cursor-default bg-white/85 backdrop-blur-xl border border-white/90"
                  >
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#015B97]/10 rounded-full blur-xl group-hover:bg-[#015B97]/20 transition-all duration-500 pointer-events-none" />

                    <div className="relative z-10">
                      {/* Header Row: Rounded Icon + Category Title */}
                      <div className="flex items-center gap-3.5 mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#015B97] to-cyan-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-[#015B97]/25 group-hover:scale-105 transition-transform">
                          <Icon size={22} />
                        </div>
                        <h3 className="text-sm sm:text-base font-extrabold text-[#17171D] tracking-tight leading-tight uppercase">
                          {c.title}
                        </h3>
                      </div>

                      {/* Value Description */}
                      <p className="text-[#5F5F6E] text-xs sm:text-[13px] leading-relaxed">
                        {c.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-3.5 border-t border-gray-100/90 flex items-center justify-between text-[11px] font-mono text-[#015B97] font-bold relative z-10">
                      <span>ZUVO FOUNDATION</span>
                      <span>0{idx + 1}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
