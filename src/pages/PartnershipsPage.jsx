import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Handshake, ArrowRight, CheckCircle2, Building2, Truck, Users, Tv, ShoppingCart, Send, ExternalLink, ShieldCheck } from 'lucide-react';
import SectionHeading from '../Components/SectionHeading';
import { companyInfo, partnershipCategories } from '../data/zuvoData';

export default function PartnershipsPage() {
  useEffect(() => {
    document.title = "Partnerships & Collaborations — Partner With ZUVO India Pvt. Ltd.";
  }, []);

  const [selectedCategory, setSelectedCategory] = useState(partnershipCategories[0].enquiryType);

  return (
    <div className="pt-28 pb-24 bg-transparent text-[#17171D] min-h-screen">
      {/* 1. Header (Premium White Corporate Hero) */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200/80/60 bg-white/60 backdrop-blur-md overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#015B97]/20 border border-[#015B97]/30 text-[#015B97] text-xs font-semibold tracking-wider uppercase mb-6">
            <Handshake size={14} />
            <span>Institutional Collaborations</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#17171D] leading-tight">
            Partner With{' '}
            <span className="text-[#015B97]">
              ZUVO India Pvt. Ltd.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#5F5F6E] max-w-2xl mx-auto leading-relaxed">
            We partner with fleet owners, factories, national suppliers, retail dealers, and institutional collaborators to scale commercial operations nationwide.
          </p>
        </div>
      </div>

      {/* 2. Four Strategic Collaboration Frameworks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          badge="Structured Opportunities"
          title="Collaboration Frameworks by Vertical"
          subtitle="Explore our formal engagement models designed for mutual long-term commercial value."
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {partnershipCategories.map((part) => (
            <div
              key={part.id}
              className="glass-panel-white glass-panel-white-hover rounded-3xl p-8 sm:p-10 border border-gray-200/80/80 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#015B97]">{part.vertical}</span>
                <h3 className="text-2xl font-bold text-[#17171D] mt-2 mb-3">{part.title}</h3>
                <p className="text-[#5F5F6E] text-sm leading-relaxed mb-6">{part.desc}</p>

                <div className="p-4 rounded-2xl bg-[#015B97]/20/60 border border-[#015B97]/30/80 text-xs text-[#17171D] flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#015B97] shrink-0" />
                  <span><strong>Collaboration Domain:</strong> {part.enquiryType}</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500">Direct Partner Desk</span>
                <a
                  href={`mailto:${companyInfo.email}?subject=Partnership%20Enquiry:%20${encodeURIComponent(part.title)}`}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#015B97] hover:bg-[#01426E] transition-all flex items-center gap-2"
                >
                  <span>Initiate Discussion</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
