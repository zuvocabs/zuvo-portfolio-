import React, { useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import BusinessCard from '../components/BusinessCard';
import { businessesData, businessVerticals } from '../data/zuvoData';
import { Layers, Briefcase, Car, ShoppingBag, Tv, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BusinessesPage() {
  useEffect(() => {
    document.title = "Our Businesses — ZUVO India Pvt. Ltd. Portfolio & Verticals";
  }, []);

  const verticalIcons = {
    mobility: Car,
    consumer: ShoppingBag,
    b2b: Briefcase,
    electronics: Tv
  };

  return (
    <div className="pt-28 pb-24 bg-transparent text-[#17171D] min-h-screen">
      {/* 1. Header (Premium White Corporate Hero) */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200/80/60 bg-white/60 backdrop-blur-md overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#015B97]/20 border border-[#015B97]/30 text-[#015B97] text-xs font-semibold tracking-wider uppercase mb-6">
            <Layers size={14} />
            <span>Operating Portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#17171D] leading-tight">
            Seven Purpose-Built{' '}
            <span className="text-[#015B97]">
              Operating Ventures
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#5F5F6E] max-w-2xl mx-auto leading-relaxed">
            Discover each operating company stewarded by ZUVO India Pvt. Ltd. Structured across four strategic industry verticals to deliver focused utility and nationwide scale.
          </p>
        </div>
      </div>

      {/* 2. Structured Verticals Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        {businessVerticals.map((vertical) => {
          const Icon = verticalIcons[vertical.id] || Layers;
          const ventures = businessesData.filter((b) => b.verticalId === vertical.id);

          return (
            <div key={vertical.id} className="space-y-8">
              {/* Vertical Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-200/80/80 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#015B97]/20 text-[#015B97] flex items-center justify-center border border-[#015B97]/30">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#17171D]">{vertical.name}</h2>
                    <p className="text-xs text-[#5F5F6E]">{vertical.tagline}</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-gray-500 uppercase px-3 py-1 rounded bg-gray-50 w-fit">
                  {ventures.length} {ventures.length === 1 ? 'Operating Venture' : 'Operating Ventures'}
                </span>
              </div>

              {/* Ventures in this Vertical */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ventures.map((biz, idx) => (
                  <BusinessCard key={biz.id} business={biz} index={idx} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
