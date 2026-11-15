import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import CardSwap, { Card } from './CardSwap';
import { businessesData } from '../data/zuvoData';

export default function BusinessGrid() {
  const [selectedBiz, setSelectedBiz] = useState(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const cardSwapRef = useRef(null);

  const currentBiz = businessesData[activeCardIndex] || businessesData[0];

  const toggleInfo = (biz, e) => {
    e.stopPropagation();
    setSelectedBiz(biz);
  };

  return (
    <section id="businesses" className="relative py-24 bg-transparent text-[#17171D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* TWO-COLUMN LAYOUT: Content on the Left, CardSwap on the Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Section Title, Subtitle, Active Venture Overview & Controls */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <SectionHeading
              badge="Business Portfolio"
              title="Seven Operating Ventures"
              subtitle="Explore the seven specialized enterprises of ZUVO India Pvt. Ltd. structured across our four operating business verticals."
              centered={false}
              theme="light"
            />

            {/* Dynamic Active Venture Highlight Card */}
            <div className="mt-8 p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-200/70 shadow-[0_10px_30px_-10px_rgba(1,91,151,0.08)]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#015B97] bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-100">
                  {currentBiz.verticalName}
                </span>
                <span className="text-xs font-mono font-semibold text-gray-400">
                  Venture 0{activeCardIndex + 1} of 0{businessesData.length}
                </span>
              </div>

              <h4 className="text-xl font-bold text-[#17171D] mb-2">
                {currentBiz.name}
              </h4>

              <p className="text-sm text-[#5F5F6E] leading-relaxed line-clamp-3 mb-4">
                {currentBiz.shortDesc}
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setSelectedBiz(currentBiz)}
                  className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#17171D] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Info size={14} className="text-[#015B97]" />
                  <span>Full Dossier</span>
                </button>
                <a
                  href={currentBiz.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#015B97] hover:bg-[#01426E] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
                >
                  <span>Visit Website</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Navigation Swap Controls */}
            <div className="flex items-center gap-4 mt-8">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => cardSwapRef.current?.prev()}
                  className="w-12 h-12 rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-md text-[#17171D] hover:border-blue-300 hover:text-[#015B97] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95 hover:shadow-md"
                  aria-label="Previous card"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={() => cardSwapRef.current?.next()}
                  className="w-12 h-12 rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-md text-[#17171D] hover:border-blue-300 hover:text-[#015B97] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95 hover:shadow-md"
                  aria-label="Next card"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              <span className="text-xs font-mono text-[#686875]">
                Scroll, fling or click arrows to swap cards
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive 3D CardSwap */}
          <div className="lg:col-span-7 relative h-[480px] sm:h-[540px] select-none flex items-center justify-center">
            <CardSwap
              ref={cardSwapRef}
              width={460}
              height={310}
              cardDistance={52}
              verticalDistance={54}
              depth={75}
              skewAmount={3.5}
              visibleCards={4}
              delay={5000}
              enableWheel={true}
              speed={0.75}
              bounce={0.12}
              hoverSpread={0.14}
              parallax={0.35}
              theme="light"
              onChange={(index) => setActiveCardIndex(index)}
              onCardClick={(index) => {
                const biz = businessesData[index];
                if (index === activeCardIndex && biz?.url) {
                  window.open(biz.url, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              {businessesData.map((biz, idx) => {
                const isTv = biz.id === 'zuvo-android-tv';
                const isLogoCard = ['usedq', 'allzon', 'allzon-b2b', 'zuvo-cabs', 'digiinova'].includes(biz.id);

                return (
                  <Card
                    key={biz.id}
                    className={`relative overflow-hidden transition-all duration-300 ${
                      isTv
                        ? 'bg-black text-white'
                        : isLogoCard
                        ? 'bg-white text-[#17171D] border border-gray-200/90 shadow-[0_20px_50px_-15px_rgba(1,91,151,0.14),0_4px_16px_rgba(23,23,29,0.04)]'
                        : 'bg-white/95 backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_-15px_rgba(1,91,151,0.14),0_4px_16px_rgba(23,23,29,0.04)]'
                    }`}
                  >
                    {/* Ambient Soft Sheen */}
                    {!isTv && (
                      <>
                        <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#015B97]/10 rounded-full blur-2xl pointer-events-none" />
                        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />
                      </>
                    )}

                    {/* Top Bar: Category Badge & Index */}
                    <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-xl bg-white/85 backdrop-blur-md text-[#015B97] border border-white/90 shadow-xs">
                        {biz.badge}
                      </span>
                      <span
                        className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-xl backdrop-blur-md ${
                          isTv ? 'text-gray-400 bg-white/10' : 'text-gray-500 bg-gray-100/80 border border-gray-200/60'
                        }`}
                      >
                        0{idx + 1} / 0{businessesData.length}
                      </span>
                    </div>

                    {/* Card Canvas Logo / Image - Edge-to-edge full bleed representation */}
                    <div className="absolute inset-0 flex items-center justify-center p-6 select-none z-10 overflow-hidden">
                      <img
                        src={biz.image}
                        alt={biz.name}
                        className={`${
                          isTv ? 'w-full h-full object-cover' : 'max-w-[78%] max-h-[72%] object-contain'
                        } transform group-hover:scale-105 transition-transform duration-500`}
                      />
                    </div>

                    {/* Bottom Bar: Venture Info & Direct Portal Trigger */}
                    <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                      {/* Info Button */}
                      <button
                        type="button"
                        onClick={(e) => toggleInfo(biz, e)}
                        className="pointer-events-auto px-3.5 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-white/95 text-[#17171D] hover:bg-[#015B97] hover:text-white hover:border-[#015B97] transition-all flex items-center gap-1.5 text-xs font-bold shadow-xs cursor-pointer"
                        aria-label={`View description of ${biz.name}`}
                      >
                        <Info size={13} className="text-[#015B97] group-hover:text-white" />
                        <span>Info</span>
                      </button>

                      {/* Dive Into Portal */}
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(biz.url, '_blank', 'noopener,noreferrer');
                        }}
                        className="pointer-events-auto px-3.5 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-white/95 text-[#17171D] hover:bg-[#015B97] hover:text-white hover:border-[#015B97] transition-all flex items-center gap-1.5 text-xs font-bold shadow-xs cursor-pointer"
                      >
                        <span>Dive Into Portal</span>
                        <ExternalLink size={12} />
                      </div>
                    </div>
                  </Card>
                );
              })}
            </CardSwap>
          </div>
        </div>
      </div>

      {/* VENTURE DETAILS MODAL */}
      <AnimatePresence>
        {selectedBiz && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBiz(null)}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-gray-100 relative text-[#17171D]"
            >
              <button
                type="button"
                onClick={() => setSelectedBiz(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 p-2 flex items-center justify-center">
                  <img src={selectedBiz.image} alt={selectedBiz.name} className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#015B97]">
                    {selectedBiz.verticalName}
                  </span>
                  <h3 className="text-xl font-bold">{selectedBiz.name}</h3>
                </div>
              </div>

              <p className="text-sm text-[#5F5F6E] leading-relaxed mb-4">
                {selectedBiz.shortDesc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedBiz.highlights?.map((h, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-[#015B97] bg-blue-50/80 border border-blue-100 px-2.5 py-1 rounded-md"
                  >
                    {h}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <Link
                  to={`/businesses/${selectedBiz.slug}`}
                  onClick={() => setSelectedBiz(null)}
                  className="text-xs font-bold text-[#015B97] hover:underline flex items-center gap-1"
                >
                  <span>Detailed Dossier</span>
                  <ArrowRight size={13} />
                </Link>
                <a
                  href={selectedBiz.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#015B97] hover:bg-[#01426E] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
                >
                  <span>Launch Portal</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
