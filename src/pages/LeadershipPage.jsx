import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, Award, ShieldCheck, Quote, Sparkles, Briefcase, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import AccordionGallery from '../components/AccordionGallery';
import { companyInfo, executiveLeadership } from '../data/zuvoData';

export default function LeadershipPage() {
  const { founder, ceo, boardOfDirectors } = companyInfo;

  useEffect(() => {
    document.title = "Leadership & Executive Governance — ZUVO India Pvt. Ltd.";
  }, []);

  return (
    <div className="pt-28 pb-24 bg-transparent text-[#17171D] min-h-screen">
      {/* 1. Header (Premium White Glassmorphism) */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200/80 bg-white/60 backdrop-blur-md overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#015B97]/15 border border-[#015B97]/30 text-[#015B97] text-xs font-semibold tracking-wider uppercase mb-6 shadow-xs">
            <Award size={14} className="text-[#015B97]" />
            <span>Executive Governance</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#17171D] leading-tight">
            Leadership Behind{' '}
            <span className="text-[#015B97]">
              ZUVO India Pvt. Ltd.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#5F5F6E] max-w-2xl mx-auto leading-relaxed">
            Founded in 2025 by Mr. Udaya Kumar and stewarded by CEO Mrs. U. Savitha alongside executive officers, ZUVO India Pvt. Ltd. drives institutional discipline and scalable innovation from TIDEL Park, Chennai.
          </p>
        </div>
      </div>

      {/* 2. Detailed Profile Spotlights: 1) Founder First, 2) CEO Next (with Right-Side Image) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 space-y-12">
        {/* 1) Founder Spotlight (Image on Left) */}
        <div className="glass-panel-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-gray-200/80 shadow-md relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 shadow-md">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-white text-xs font-mono font-bold border border-white/20">
                  Founder
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#015B97]/15 border border-[#015B97]/30 text-[#015B97] text-xs font-semibold tracking-wider uppercase">
                <Sparkles size={13} />
                <span>Founding Visionary</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17171D] tracking-tight">
                {founder.name} — Founder
              </h2>

              <p className="text-[#5F5F6E] text-sm sm:text-base leading-relaxed">
                {founder.bio}
              </p>

              <div className="relative pl-6 py-4 border-l-2 border-[#015B97] bg-white/70 rounded-r-2xl pr-4 shadow-2xs">
                <Quote size={20} className="text-[#015B97] mb-2" />
                <p className="text-[#17171D] text-sm sm:text-base italic leading-relaxed">
                  "{founder.quote}"
                </p>
                <span className="block mt-2 text-xs font-bold uppercase tracking-wider text-[#015B97]">
                  — {founder.name}, Founder
                </span>
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#17171D]">
                  Founding Philosophy
                </h4>
                <p className="text-[#5F5F6E] text-sm leading-relaxed">
                  {founder.visionPhilosophy}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2) CEO Spotlight (Image on Right Side) */}
        <div className="glass-panel-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-gray-200/80 shadow-md relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Text & Content */}
            <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#015B97]/15 border border-[#015B97]/30 text-[#015B97] text-xs font-semibold tracking-wider uppercase">
                <Briefcase size={13} />
                <span>Executive Chief</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17171D] tracking-tight">
                {ceo.name} — Chief Executive Officer (CEO)
              </h2>

              <p className="text-[#5F5F6E] text-sm sm:text-base leading-relaxed">
                {ceo.bio}
              </p>

              <div className="relative pl-6 py-4 border-l-2 border-[#015B97] bg-white/70 rounded-r-2xl pr-4 shadow-2xs">
                <Quote size={20} className="text-[#015B97] mb-2" />
                <p className="text-[#17171D] text-sm sm:text-base italic leading-relaxed">
                  "{ceo.quote}"
                </p>
                <span className="block mt-2 text-xs font-bold uppercase tracking-wider text-[#015B97]">
                  — {ceo.name}, CEO
                </span>
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#17171D]">
                  Executive Operational Mandate
                </h4>
                <p className="text-[#5F5F6E] text-sm leading-relaxed">
                  {ceo.visionPhilosophy}
                </p>
              </div>
            </div>

            {/* Right Column: CEO Portrait Image Placement */}
            <div className="lg:col-span-5 flex flex-col items-center order-1 lg:order-2">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 shadow-md">
                <img
                  src={ceo.image}
                  alt={ceo.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-white text-xs font-mono font-bold border border-white/20">
                  CEO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. 5 Employee Leadership Cards Grid (Next in Hierarchy) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#015B97] px-3.5 py-1.5 rounded-full bg-[#015B97]/15 border border-[#015B97]/30">
            C-Suite & Key Executives
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17171D] tracking-tight mt-4">
            Executive Leadership Team
          </h2>
          <p className="text-[#5F5F6E] text-sm sm:text-base mt-2">
            The visionary leaders and executive heads spearheading technology, operations, strategy, finance, and enterprise foundations.
          </p>
        </div>

        {/* Interactive React Bits AccordionGallery for the 5 Executive Cards (Standard Natural Container) */}
        <div className="w-full">
          <AccordionGallery
            items={executiveLeadership}
            defaultIndex={2}
            expandRatio={0.36}
            height={520}
            trigger="hover"
            gap={16}
            radius={24}
            duration={0.65}
            ease="power3.out"
            tilt={4}
            grayscale={false}
            showLabels={false}
              renderCustomCard={(exec, isActive, idx) => (
                <div className="glass-panel-white rounded-3xl border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden group hover:border-[#015B97]/50 select-none relative">
                  {/* Executive Photo Container */}
                  <div className="relative flex-1 w-full overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 min-h-0">
                    <img
                      src={exec.image}
                      alt={`${exec.role} - ${exec.name}`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Role Pill Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/85 backdrop-blur-md text-white text-[10px] font-mono font-bold border border-white/20 shadow-md">
                      {exec.role}
                    </div>
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-md text-[#015B97] text-[10px] font-mono font-bold border border-gray-200 shadow-xs">
                      0{idx + 1}
                    </div>
                  </div>

                  {/* Executive Info Card Body */}
                  <div className="p-3.5 sm:p-4 bg-white/95 shrink-0 border-t border-gray-100/90 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm sm:text-base font-extrabold text-[#17171D] group-hover:text-[#015B97] transition-colors tracking-tight truncate">
                        {exec.name}
                      </h3>
                      <p className="text-[11px] font-semibold text-[#015B97] tracking-wider uppercase font-mono truncate mt-0.5">
                        {exec.title}
                      </p>
                      <p className="text-[10px] text-[#5F5F6E] font-medium truncate">
                        {exec.department}
                      </p>
                      {isActive ? (
                        <p className="text-[11px] text-[#5F5F6E] mt-2 leading-relaxed border-t border-gray-100 pt-1.5 line-clamp-2">
                          {exec.focus}
                        </p>
                      ) : null}
                    </div>

                    <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] text-[#686875]">
                      <span className="truncate">ZUVO Group</span>
                      <span className="text-[#015B97] font-semibold flex items-center gap-1 shrink-0 ml-1">
                        <CheckCircle2 size={11} /> Executive
                      </span>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
      </div>

      {/* 4. Board of Directors Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#015B97] px-3.5 py-1.5 rounded-full bg-[#015B97]/15 border border-[#015B97]/30">
            Corporate Oversight
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17171D] tracking-tight mt-4">
            Board Of Directors
          </h2>
          <p className="text-[#5F5F6E] text-sm sm:text-base mt-2">
            Providing directorial governance, fiduciary oversight, and strategic guidance for ZUVO India Pvt. Ltd.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {boardOfDirectors.map((director, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel-white p-8 rounded-3xl border border-gray-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#015B97] px-3 py-1 rounded bg-[#015B97]/15 border border-[#015B97]/30">
                    Board Of Directors
                  </span>
                  <ShieldCheck size={18} className="text-[#015B97]" />
                </div>

                <h3 className="text-2xl font-extrabold text-[#17171D]">
                  {director.name}
                </h3>
                <p className="text-xs font-semibold text-[#015B97] uppercase tracking-wider font-mono mt-1">
                  {director.title} • {director.company}
                </p>

                <p className="text-[#5F5F6E] text-sm mt-4 leading-relaxed">
                  {director.focus}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200/70 flex items-center justify-between text-xs text-[#686875]">
                <span>Directorial Governance</span>
                <span className="text-[#015B97] font-semibold">TIDEL Park, Chennai</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 5. Core Leadership Principles */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          badge="Executive Principles"
          title="How We Govern the ZUVO Group"
          subtitle="The leadership tenets guiding decisions across our mobility, commerce, and electronics ventures."
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Disciplined Multi-Venture Execution",
              desc: "We prioritize long-term sustainable growth and operational rigor over vanity growth metrics, ensuring each business vertical is built on strong unit economics."
            },
            {
              title: "Ground-Level Empathy",
              desc: "Whether dealing with a passenger in a cab, an auto pilot seeking daily earnings, or a small shopkeeper ordering wholesale goods, our executive choices center on human reality."
            },
            {
              title: "Technological Sovereignty",
              desc: "We build our own dispatch engines, merchant catalogs, and firmware integrations in-house to safeguard platform agility and customer data integrity."
            }
          ].map((p, idx) => (
            <div key={idx} className="glass-panel-white p-8 rounded-3xl flex flex-col justify-between border border-gray-200/80 shadow-xs">
              <div>
                <span className="text-xs font-mono font-bold text-[#015B97] bg-[#015B97]/20 border border-[#015B97]/30 px-3 py-1 rounded uppercase">
                  Tenet 0{idx + 1}
                </span>
                <h4 className="text-xl font-bold text-[#17171D] mt-4">{p.title}</h4>
                <p className="text-[#5F5F6E] text-sm mt-3 leading-relaxed">{p.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-200/80 text-xs font-semibold text-[#015B97] flex items-center gap-1.5">
                <ShieldCheck size={15} /> Verified Governance
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Navigation Pathways */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel-white border border-gray-200/80 shadow-xs">
          <h3 className="text-2xl font-bold text-[#17171D]">Meet Our People & Connect</h3>
          <p className="text-[#5F5F6E] text-sm max-w-xl mx-auto mt-2 leading-relaxed">
            Discover our operational, engineering, and commercial teams or reach our directorial secretariat at TIDEL Park.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <Link
              to="/people"
              className="px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#015B97] hover:bg-[#01426E] transition-all shadow-xs"
            >
              Meet Our Teams (Our People)
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#17171D] bg-white border border-gray-200/80 hover:border-[#015B97] hover:text-[#015B97] transition-all"
            >
              Directorial Secretariat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
