import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, Send, AlertCircle, FileText, Sparkles, Building2, GraduationCap, Heart, ShieldCheck } from 'lucide-react';
import SectionHeading from '../Components/SectionHeading';
import { companyInfo, careerOpenings } from '../data/zuvoData';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    roleOfInterest: 'Technology & Development',
    experienceYears: '1-3 years',
    portfolioUrl: '',
    coverNote: '',
  });

  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.title = "Careers & Vacancies — ZUVO India Pvt. Ltd. (Chennai)";
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.coverNote.trim()) {
      newErrors.coverNote = 'Please tell us briefly about your experience';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setFormStatus({ state: 'error', message: 'Please correct the highlighted fields.' });
      return;
    }

    const subject = encodeURIComponent(`[Career Application] ${formData.fullName} - ${formData.roleOfInterest}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nRole of Interest: ${formData.roleOfInterest}\nExperience: ${formData.experienceYears}\nPortfolio/LinkedIn: ${formData.portfolioUrl}\n\nCandidate Note:\n${formData.coverNote}`
    );

    window.location.href = `mailto:${companyInfo.email}?subject=${subject}&body=${body}`;
    setFormStatus({
      state: 'ready',
      message: `Opening your email client to transmit your application directly to ${companyInfo.email}...`
    });
  };

  return (
    <div className="pt-28 pb-24 bg-transparent text-[#17171D] min-h-screen">
      {/* 1. Header (Premium White Corporate Hero) */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200/80 bg-white/60 backdrop-blur-md overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#015B97]/15 border border-[#015B97]/30 text-[#015B97] text-xs font-semibold tracking-wider uppercase mb-6 shadow-xs">
            <Briefcase size={14} className="text-[#015B97]" />
            <span>Opportunities at ZUVO</span>
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#17171D] leading-tight">
            Careers Built Around{' '}
            <span className="text-[#015B97]">
              Ownership & Growth
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#5F5F6E] max-w-2xl mx-auto leading-relaxed">
            Founded in 2025, ZUVO India Pvt. Ltd. invites developers, logistics experts, marketers, and business builders to create connected multi-industry experiences from our TIDEL Park, Chennai headquarters.
          </p>
        </div>
      </div>

      {/* 2. Why Work at ZUVO (4 Pillars Grid) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          badge="Value Proposition"
          title="Why Build Your Career at ZUVO?"
          subtitle="We combine the agility of a rapidly expanding multi-venture group with institutional discipline."
          theme="light"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            {
              icon: Building2,
              title: "Cross-Vertical Exposure",
              desc: "Gain deep practical experience spanning mobility dispatch, e-commerce marketplaces, B2B wholesale logistics, and smart TV electronics."
            },
            {
              icon: GraduationCap,
              title: "Learning & Mentorship",
              desc: "Work directly alongside senior engineers, operations directors, and executive leadership who value execution over corporate hierarchy."
            },
            {
              icon: Sparkles,
              title: "High-Impact Technology",
              desc: "Develop software and systems that solve real urban transport bottlenecks, empower local shop owners, and bring joy into Indian homes."
            },
            {
              icon: Heart,
              title: "People-First Culture",
              desc: "Fair compensation, clear accountability, modern TIDEL Park office infrastructure, and an inclusive, collaborative environment."
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="glass-panel-white p-7 rounded-3xl border border-gray-200/80 shadow-md flex flex-col justify-between hover:shadow-xl hover:border-[#015B97]/40 transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#015B97] to-[#01426E] text-white flex items-center justify-center mb-5 shadow-sm">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-[#17171D] tracking-tight">{item.title}</h3>
                  <p className="text-[#5F5F6E] text-xs sm:text-sm mt-2.5 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-gray-100 text-[11px] font-mono font-semibold text-[#015B97]">
                  Pillar 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Verified Current Vacancies (White Glassmorphism Cards) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading
          badge="Verified Openings"
          title="Current Opportunities in Chennai"
          subtitle="Explore verified roles currently active at our registered office in TIDEL Park, Tharamani."
          theme="light"
        />

        <div className="space-y-6 mt-12">
          {careerOpenings.map((job) => (
            <div
              key={job.id}
              className="glass-panel-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-md hover:shadow-xl hover:border-[#015B97]/40 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#015B97] uppercase tracking-wide bg-[#015B97]/15 px-2.5 py-0.5 rounded border border-[#015B97]/25">
                    {job.department}
                  </span>
                  <span className="text-xs text-[#686875] flex items-center gap-1">
                    <MapPin size={12} className="text-[#015B97]" /> {job.location}
                  </span>
                  <span className="text-xs text-[#686875] flex items-center gap-1">
                    <Clock size={12} className="text-[#015B97]" /> {job.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#17171D] tracking-tight">{job.role}</h3>
                <p className="text-[#5F5F6E] text-sm max-w-2xl leading-relaxed">{job.desc}</p>
              </div>

              <div className="shrink-0">
                <a
                  href={`mailto:${companyInfo.email}?subject=Job%20Application%20-%20${encodeURIComponent(job.role)}`}
                  className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#015B97] hover:bg-[#01426E] shadow-sm inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Apply for Role</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Resume Submission Form (Clean Glassmorphism Form) */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <SectionHeading
          badge="Direct Application"
          title="Submit Your Resume to ZUVO"
          subtitle="Whether applying for an active role or submitting a general interest application, our human resources desk will review your profile."
          theme="light"
        />

        <div className="glass-panel-white p-8 sm:p-12 rounded-3xl border border-gray-200/80 shadow-lg mt-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#17171D] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Priya Sundaram"
                  className={`w-full px-4 py-3 rounded-xl bg-white border ${
                    errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'
                  } text-[#17171D] text-sm focus:outline-none focus:ring-2 focus:ring-[#015B97]`}
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#17171D] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. priya@domain.com"
                  className={`w-full px-4 py-3 rounded-xl bg-white border ${
                    errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'
                  } text-[#17171D] text-sm focus:outline-none focus:ring-2 focus:ring-[#015B97]`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#17171D] mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={`w-full px-4 py-3 rounded-xl bg-white border ${
                    errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'
                  } text-[#17171D] text-sm focus:outline-none focus:ring-2 focus:ring-[#015B97]`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#17171D] mb-1.5">
                  Department of Interest
                </label>
                <select
                  name="roleOfInterest"
                  value={formData.roleOfInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-[#17171D] text-sm focus:outline-none focus:ring-2 focus:ring-[#015B97]"
                >
                  <option value="Technology & Development">Technology & Development</option>
                  <option value="Marketing & Branding">Marketing & Branding</option>
                  <option value="Business Development">Business Development</option>
                  <option value="Operations & Fleet">Operations & Fleet</option>
                  <option value="Sales & Customer Support">Sales & Customer Support</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#17171D] mb-1.5">
                  Total Experience
                </label>
                <select
                  name="experienceYears"
                  value={formData.experienceYears}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-[#17171D] text-sm focus:outline-none focus:ring-2 focus:ring-[#015B97]"
                >
                  <option value="Fresh Graduate / Entry Level">Fresh Graduate / Entry Level</option>
                  <option value="1-3 years">1 - 3 years</option>
                  <option value="3-5 years">3 - 5 years</option>
                  <option value="5-8 years">5 - 8 years</option>
                  <option value="8+ years">8+ years</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#17171D] mb-1.5">
                Portfolio URL / LinkedIn Profile
              </label>
              <input
                type="url"
                name="portfolioUrl"
                value={formData.portfolioUrl}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/yourprofile or https://github.com/..."
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-[#17171D] text-sm focus:outline-none focus:ring-2 focus:ring-[#015B97]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#17171D] mb-1.5">
                Brief Introduction & Key Skills *
              </label>
              <textarea
                rows={4}
                name="coverNote"
                value={formData.coverNote}
                onChange={handleChange}
                placeholder="Summarize your background, primary technical/operational skills, and why you are interested in joining ZUVO..."
                className={`w-full px-4 py-3 rounded-xl bg-white border ${
                  errors.coverNote ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'
                } text-[#17171D] text-sm focus:outline-none focus:ring-2 focus:ring-[#015B97]`}
              />
              {errors.coverNote && <p className="text-red-500 text-xs mt-1">{errors.coverNote}</p>}
            </div>

            {formStatus.state === 'ready' && (
              <div className="p-4 rounded-xl bg-[#015B97]/15 border border-[#015B97]/30 text-[#01426E] text-xs flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#015B97] shrink-0" />
                <span>{formStatus.message}</span>
              </div>
            )}

            {formStatus.state === 'error' && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle size={16} className="text-red-600 shrink-0" />
                <span>{formStatus.message}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-[#015B97] hover:bg-[#01426E] shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send size={16} />
              <span>Transmit Career Application</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
