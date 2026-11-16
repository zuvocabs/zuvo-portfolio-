import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Building2, Code2, Megaphone, TrendingUp, Cpu, Headset, CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, Crown } from 'lucide-react';
import SectionHeading from '../Components/SectionHeading';
import { departmentsData, cultureStories, companyInfo } from '../data/zuvoData';

export default function PeoplePage() {
  const [activeDept, setActiveDept] = useState('all');

  useEffect(() => {
    document.title = "Our People & Workplace Culture — ZUVO India Pvt. Ltd.";
  }, []);

  const deptIcons = {
    executive: Crown,
    tech: Code2,
    marketing: Megaphone,
    bizdev: TrendingUp,
    ops: Cpu,
    support: Headset
  };

  const filteredDepts = activeDept === 'all'
    ? departmentsData
    : departmentsData.filter((d) => d.id === activeDept);

  return (
    <div className="pt-28 pb-24 bg-transparent text-[#17171D] min-h-screen">
      {/* 1. Header (Premium White Corporate Hero) */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-md border-b border-gray-200/80 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#015B97]/15 border border-[#015B97]/30 text-[#015B97] text-xs font-semibold tracking-wider uppercase mb-6 shadow-xs">
            <Users size={14} className="text-[#015B97]" />
            <span>People & Culture</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#17171D] leading-tight">
            The Dedicated Minds Powering{' '}
            <span className="text-[#015B97]">
              Every Journey
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#5F5F6E] max-w-2xl mx-auto leading-relaxed">
            Meet the leadership and cross-functional teams building, operating, and stewarding ZUVO India Pvt. Ltd. across Executive Direction, Technology, Marketing, Business Development, Operations, and Customer Support.
          </p>
        </div>
      </div>

      {/* 2. Department Filter Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            onClick={() => setActiveDept('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all border ${
              activeDept === 'all'
                ? 'bg-[#015B97] text-white border-[#015B97] shadow-sm'
                : 'bg-white text-[#5F5F6E] border-gray-200 hover:border-[#015B97]/40 hover:text-[#015B97]'
            }`}
          >
            All Departments
          </button>
          {departmentsData.map((d) => (
            <button
              key={d.id}
              onClick={() => setActiveDept(d.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all border ${
                activeDept === d.id
                  ? 'bg-[#015B97] text-white border-[#015B97] shadow-sm'
                  : 'bg-white text-[#5F5F6E] border-gray-200 hover:border-[#015B97]/40 hover:text-[#015B97]'
              }`}
            >
              {d.shortName}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Department Showcases & Employee Profile Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {filteredDepts.map((dept) => {
          const Icon = deptIcons[dept.id] || Users;

          return (
            <div key={dept.id} className="space-y-6">
              {/* Department Header */}
              <div className="p-6 sm:p-8 rounded-3xl glass-panel-white border border-gray-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-[#015B97] to-[#01426E] text-white flex items-center justify-center shadow-md">
                    <Icon size={24} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase font-bold text-[#015B97]">
                      {dept.leadDesignation || 'Department Showcase'}
                    </span>
                    <h2 className="text-2xl font-extrabold text-[#17171D] tracking-tight">
                      {dept.name}
                    </h2>
                  </div>
                </div>

                <p className="text-[#5F5F6E] text-xs sm:text-sm max-w-lg leading-relaxed">
                  {dept.description}
                </p>
              </div>

              {/* Functional Units / Team Cards */}
              <div className={`grid grid-cols-1 ${dept.id === 'executive' ? 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5' : 'md:grid-cols-2'} gap-6`}>
                {dept.members.map((member) => (
                  <div
                    key={member.id}
                    className="glass-panel-white rounded-3xl border border-gray-200/80 p-5 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group hover:border-[#015B97]/40"
                  >
                    <div>
                      {/* Photo if available */}
                      {member.image && (
                        <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden mb-4 bg-gray-100 border border-gray-200">
                          <img
                            src={member.image}
                            alt={`${member.role} - ${member.name}`}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/85 backdrop-blur-md text-white text-[10px] font-mono font-bold border border-white/20">
                            {member.role}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#015B97]/15 text-[#015B97] border border-[#015B97]/25">
                          {member.department}
                        </span>
                        <span className="text-[11px] text-[#686875] font-mono">Chennai HQ</span>
                      </div>

                      <h3 className="text-lg font-extrabold text-[#17171D] group-hover:text-[#015B97] transition-colors tracking-tight">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#015B97] uppercase tracking-wider font-mono mt-0.5">
                        {member.title || member.role}
                      </p>

                      <p className="text-[#5F5F6E] text-xs sm:text-sm mt-2.5 leading-relaxed">
                        {member.focus}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-gray-200/70 flex items-center justify-between text-xs text-[#686875]">
                      <span>ZUVO Corporate Group</span>
                      <span className="text-[#015B97] font-semibold flex items-center gap-1">
                        <CheckCircle2 size={13} /> Active Division
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. Employee Stories & Workplace Culture */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          badge="Workplace Culture"
          title="Life & Values Inside ZUVO"
          subtitle="How our teams collaborate across Chennai headquarters and regional operations nodes."
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {cultureStories.map((story, i) => (
            <div key={i} className="glass-panel-white p-8 rounded-3xl flex flex-col justify-between border border-gray-200/80 shadow-xs">
              <div>
                <span className="text-xs font-mono font-bold text-[#015B97] bg-[#015B97]/15 border border-[#015B97]/25 px-3 py-1 rounded uppercase">
                  {story.tag}
                </span>
                <h3 className="text-xl font-bold text-[#17171D] mt-4">{story.title}</h3>
                <p className="text-[#5F5F6E] text-sm mt-3 leading-relaxed">{story.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-200/70 text-xs font-semibold text-[#015B97] flex items-center gap-1.5">
                <HeartHandshake size={15} /> Cultural Tenet
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Careers Invitation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel-white border border-gray-200/80 shadow-md">
          <h2 className="text-3xl font-extrabold text-[#17171D]">Want to Be Part of Our Team?</h2>
          <p className="text-[#5F5F6E] text-sm max-w-xl mx-auto mt-2 leading-relaxed">
            We are always looking for ambitious engineers, product designers, field operators, and commercial minds to shape our growing multi-business ecosystem.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/careers"
              className="px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#015B97] hover:bg-[#01426E] shadow-sm transition-all"
            >
              Explore Career Opportunities
            </Link>
            <Link
              to="/leadership"
              className="px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#17171D] bg-white border border-gray-200/80 hover:border-[#015B97] hover:text-[#015B97] transition-all"
            >
              View Leadership Governance
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
