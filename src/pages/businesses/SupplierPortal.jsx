import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Server, ExternalLink, ArrowRight, ShieldCheck, Database, Sliders, BarChart3, CheckCircle2, ChevronRight } from 'lucide-react';
import SectionHeading from '../../Components/SectionHeading';
import { businessesData } from '../../data/zuvoData';

export default function SupplierPortal() {
  const data = businessesData.find((b) => b.id === 'allzon-supplier');
  const related = businessesData.filter((b) => b.id !== 'allzon-supplier').slice(0, 3);

  useEffect(() => {
    document.title = "ALLZON Supplier Portal — Vendor Command Center & Wholesale Sourcing | ZUVO India";
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
          <span className="text-[#17171D] font-semibold">ALLZON SUPPLIER PORTAL</span>
        </div>
      </div>

      {/* 1. Hero Section (Clean White Corporate) */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200/80/60 bg-white/60 backdrop-blur-md overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#015B97]/20 border border-[#015B97]/30 text-[#015B97] text-xs font-mono uppercase tracking-wider">
              <Server size={14} />
              <span>{data.category}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#17171D] leading-tight">
              ALLZON SUPPLIER PORTAL
            </h1>

            <p className="text-xl text-[#015B97] font-semibold">
              The Dedicated Supplier-Facing Engine Powering ALLZON B2B.
            </p>

            <p className="text-[#5F5F6E] text-base leading-relaxed">
              {data.fullDesc}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#015B97] hover:bg-[#01426E] shadow-sm transition-all flex items-center gap-2"
              >
                <span>VISIT SUPPLIER PORTAL</span>
                <ExternalLink size={15} />
              </a>
              <Link
                to="/partnerships"
                className="px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#17171D] bg-white border border-gray-200/80 hover:bg-gray-50 transition-all"
              >
                Vendor Onboarding Desk
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-white border border-gray-200/80/80 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-[#17171D]">Venture Overview</h3>
              <div className="space-y-3 text-xs text-[#5F5F6E]">
                <div className="flex justify-between py-2 border-b border-gray-200/80">
                  <span className="font-medium text-[#686875]">Parent Entity:</span>
                  <span className="font-bold text-[#17171D]">ZUVO India Pvt. Ltd.</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200/80">
                  <span className="font-medium text-[#686875]">Industry Vertical:</span>
                  <span className="font-bold text-[#015B97]">Wholesale & B2B Commerce</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200/80">
                  <span className="font-medium text-[#686875]">Target Users:</span>
                  <span className="font-bold text-[#17171D]">Manufacturers & Distributors</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium text-[#686875]">Core Engine:</span>
                  <span className="font-bold text-[#17171D]">Catalog, Ledger & Payout APIs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Key Capabilities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          badge="Vendor Command"
          title="Direct Manufacturer Enablement"
          subtitle="How the Supplier Portal manages enterprise inventory, GST billing, and batch order distribution."
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {data.features.map((feat, idx) => {
            const title = typeof feat === 'object' ? feat.title : feat;
            const desc = typeof feat === 'object' ? feat.desc : 'Verified operational capability within the ZUVO platform ecosystem.';
            return (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-gray-200/80/80 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#015B97]/20 text-[#015B97] flex items-center justify-center font-bold text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-[#17171D] mb-2">{title}</h4>
                  <p className="text-[#5F5F6E] text-xs leading-relaxed">{desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200/80 text-xs font-semibold text-[#015B97] flex items-center gap-1.5">
                  <CheckCircle2 size={14} /> Enterprise Standard
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Related Portfolio Ventures */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white/70 border-t border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-xs font-mono font-bold text-[#015B97] uppercase">Portfolio Links</span>
              <h3 className="text-2xl font-bold text-[#17171D] mt-1">Related ZUVO Ventures</h3>
            </div>
            <Link to="/businesses" className="text-xs font-bold text-[#015B97] hover:underline flex items-center gap-1">
              <span>View All 7 Ventures</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((biz) => (
              <div key={biz.id} className="p-6 rounded-2xl bg-white border border-gray-200/80/80 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold text-gray-500 uppercase">{biz.category}</span>
                  <h4 className="text-base font-bold text-[#17171D] mt-1 mb-2">{biz.name}</h4>
                  <p className="text-[#5F5F6E] text-xs leading-relaxed">{biz.tagline}</p>
                </div>
                <Link
                  to={`/businesses/${biz.id}`}
                  className="mt-4 pt-3 border-t border-gray-200/80 text-xs font-bold text-[#015B97] flex items-center gap-1"
                >
                  <span>Explore Venture</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
