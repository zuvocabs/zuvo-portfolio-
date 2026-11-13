import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, ExternalLink, ArrowRight, ShieldCheck, Zap, Rocket, ChevronRight, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { businessesData } from '../../data/zuvoData';

export default function Digiinova() {
  const data = businessesData.find((b) => b.id === 'digiinova');
  const related = businessesData.filter((b) => b.id !== 'digiinova').slice(0, 3);

  useEffect(() => {
    document.title = "DIGIINOVA — Digital Growth, Innovation & Technology Agency | ZUVO India";
  }, []);

  return (
    <div className="pt-28 pb-24 bg-transparent text-[#17171D] min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Link to="/" className="hover:text-[#015B97]">Home</Link>
          <ChevronRight size={12} />
          <Link to="/businesses" className="hover:text-[#015B97]">Our Businesses</Link>
          <ChevronRight size={12} />
          <span className="text-[#17171D] font-semibold">DIGIINOVA</span>
        </div>
      </div>

      {/* 1. Hero Section (Clean White Corporate) */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200/80 bg-white/60 backdrop-blur-md overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#015B97]/20 border border-[#015B97]/30 text-[#015B97] text-xs font-mono uppercase tracking-wider">
              <Sparkles size={14} />
              <span>{data?.badge || "Digital Growth & Agency"}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#17171D] leading-tight">
              DIGIINOVA
            </h1>

            <p className="text-xl text-[#015B97] font-semibold">
              Digital Growth. Transformative Engineering. Measurable Scale.
            </p>

            <p className="text-[#5F5F6E] text-base leading-relaxed">
              {data?.fullDesc}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={data?.url || "https://www.digiinova.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#015B97] hover:bg-[#01426E] text-white font-bold text-sm flex items-center gap-2 transition-all shadow-md cursor-pointer"
              >
                <span>Launch DIGIINOVA Portal</span>
                <ExternalLink size={16} />
              </a>
              <Link
                to="/partnerships"
                className="px-6 py-3.5 rounded-xl bg-white border border-gray-200/80 text-[#17171D] hover:bg-gray-50 font-bold text-sm transition-all"
              >
                Partner With DIGIINOVA
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md p-8 rounded-3xl bg-white border border-gray-200/80 shadow-[0_20px_50px_-15px_rgba(1,91,151,0.15)] flex items-center justify-center">
              <img
                src={data?.image || "/digiinova-logo.jpg"}
                alt="DIGIINOVA"
                className="w-full h-auto max-h-56 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Key Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17171D] mb-8">
          Core Digital Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data?.features?.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-200/80 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 size={18} className="text-[#015B97]" />
                <h3 className="text-base font-bold text-[#17171D]">{feat.title}</h3>
              </div>
              <p className="text-sm text-[#5F5F6E] leading-relaxed pl-7">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Related Ventures */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 border-t border-gray-200/80">
        <h3 className="text-xl font-bold text-[#17171D] mb-6">Other Operating Enterprises</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {related.map((rel) => (
            <Link
              key={rel.id}
              to={`/businesses/${rel.slug}`}
              className="p-5 rounded-2xl bg-white/80 border border-gray-200/80 hover:border-[#015B97]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-[#015B97] uppercase font-bold">{rel.badge}</span>
                <h4 className="text-base font-bold text-[#17171D] mt-1">{rel.name}</h4>
                <p className="text-xs text-[#5F5F6E] mt-2 line-clamp-2">{rel.shortDesc}</p>
              </div>
              <span className="text-xs text-[#015B97] font-semibold mt-4 flex items-center gap-1">
                View Dossier <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

