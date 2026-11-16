import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Mail, Phone, ArrowRight, Award, Target, Compass, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../Components/SectionHeading';
import { companyInfo, businessVerticals } from '../data/zuvoData';

export default function AboutPage() {
  useEffect(() => {
    document.title = "About ZUVO India Pvt. Ltd. — Corporate Background, Vision & Philosophy";
  }, []);

  return (
    <div className="pt-28 pb-24 bg-transparent text-[#17171D] min-h-screen">
      {/* 1. Header (Premium White Corporate Hero) */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200/80/60 bg-white/60 backdrop-blur-md overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#015B97]/20 border border-[#015B97]/30 text-[#015B97] text-xs font-semibold tracking-wider uppercase mb-6">
            <Building2 size={14} />
            <span>Operating Parent Group</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#17171D] leading-tight">
            About{' '}
            <span className="text-[#015B97]">
              ZUVO India Pvt. Ltd.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#5F5F6E] leading-relaxed max-w-2xl mx-auto">
            Incorporated in 2025 and headquartered at TIDEL Park, Chennai, ZUVO India Pvt. Ltd. is an operating parent company stewarding scalable businesses across passenger mobility, circular commerce, wholesale supply chains, and consumer electronics.
          </p>
        </div>
      </div>

      {/* 2. Institutional Identity & Establishment Story */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#015B97]">Corporate Origin</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17171D] tracking-tight">
              Built on Institutional Discipline & Technological Utility
            </h2>
            <p className="text-[#5F5F6E] text-base leading-relaxed">
              ZUVO India Pvt. Ltd. was established in 2025 by Founder Mr. Udaya Kumar and is stewarded by CEO Mrs. U. Savitha alongside executive officers with a clear mandate: build resilient, consumer-focused digital and physical business models that directly address the daily transport, commerce, and electronics requirements of modern India.
            </p>
            <p className="text-[#5F5F6E] text-base leading-relaxed">
              Operating from TIDEL Park—the IT backbone of Chennai—ZUVO provides centralized engineering governance, strategic capital allocation, and brand stewardship, enabling each operating venture to scale with autonomy and speed.
            </p>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white border border-gray-200/80/80 shadow-xs">
                <span className="text-xs text-gray-500 uppercase font-semibold">Established</span>
                <div className="text-xl font-bold text-[#17171D] mt-1">{companyInfo.establishedYear}</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-gray-200/80/80 shadow-xs">
                <span className="text-xs text-gray-500 uppercase font-semibold">Headquarters</span>
                <div className="text-xl font-bold text-[#17171D] mt-1">Chennai, TN</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-gray-200/80/80 shadow-xs">
                <span className="text-xs text-gray-500 uppercase font-semibold">Industry Sectors</span>
                <div className="text-xl font-bold text-[#015B97] mt-1">4 Verticals</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-panel-white p-8 rounded-3xl border border-gray-200/80/80 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#17171D] flex items-center gap-2">
                <ShieldCheck size={20} className="text-[#015B97]" />
                Corporate Governance Charter
              </h3>
              <ul className="space-y-4 text-sm text-[#5F5F6E]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#015B97] shrink-0 mt-0.5" />
                  <span><strong>Zero Hallucinated Metrics:</strong> Transparent factual reporting across all operating ventures without artificial inflation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#015B97] shrink-0 mt-0.5" />
                  <span><strong>Shared Core Infrastructure:</strong> Scalable cloud microservices, payment compliance, and security standardisation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#015B97] shrink-0 mt-0.5" />
                  <span><strong>Localized Partner Support:</strong> Direct ground-level operations empowering fleet pilots and commercial merchants.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Vision, Mission & Philosophy */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white/70 border-t border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Institutional North Star"
            title="Vision, Mission & Guiding Principles"
            subtitle="The strategic principles directing capital deployment and platform development across ZUVO."
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="glass-panel-white p-8 rounded-3xl border border-gray-200/80/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#015B97]/20 text-[#015B97] border border-[#015B97]/30 flex items-center justify-center mb-6">
                  <Compass size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#17171D] mb-3">Our Vision</h3>
                <p className="text-[#5F5F6E] text-sm leading-relaxed">
                  "To build meaningful platforms that simplify everyday life, empower businesses, and create sustainable economic opportunities through connected technology."
                </p>
              </div>
            </div>

            <div className="glass-panel-white p-8 rounded-3xl border border-gray-200/80/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#015B97]/20 text-[#015B97] border border-[#015B97]/30 flex items-center justify-center mb-6">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#17171D] mb-3">Our Mission</h3>
                <p className="text-[#5F5F6E] text-sm leading-relaxed">
                  "Connecting every journey by delivering reliable passenger mobility, trusted electronics trading, streamlined wholesale procurement, and smart living room hardware."
                </p>
              </div>
            </div>

            <div className="glass-panel-white p-8 rounded-3xl border border-gray-200/80/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#015B97]/20 text-[#015B97] border border-[#015B97]/30 flex items-center justify-center mb-6">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#17171D] mb-3">Our Philosophy</h3>
                <p className="text-[#5F5F6E] text-sm leading-relaxed">
                  "Operational discipline and consumer trust supersede hyper-growth vanity. We build technology that solves genuine operational bottlenecks for real people."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Strategic Industry Verticals Overview */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          badge="Portfolio Allocation"
          title="Overview of the Four Business Verticals"
          subtitle="Explore the diversified sectors stewarded under ZUVO India Pvt. Ltd."
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {businessVerticals.map((v) => (
            <div key={v.id} className="p-6 rounded-2xl bg-white border border-gray-200/80/80 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#015B97] uppercase">Sector 0{v.number}</span>
                <h4 className="text-lg font-bold text-[#17171D] mt-2 mb-2">{v.name}</h4>
                <p className="text-[#5F5F6E] text-xs leading-relaxed">{v.summary}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200/80">
                <Link
                  to="/businesses"
                  className="text-xs font-bold text-[#015B97] hover:underline flex items-center gap-1"
                >
                  <span>Explore Sector</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
