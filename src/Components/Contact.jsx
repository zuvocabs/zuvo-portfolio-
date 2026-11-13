import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Upload, FileText, X } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { companyInfo } from '../data/zuvoData';

const SOFTWARE_ENQUIRY_TYPE = 'Software & Digital Solutions Project Enquiry';

const ENQUIRY_OPTIONS = [
  'Corporate & Strategic Partnership',
  'Mobility Fleet & Pilot Operations',
  'B2B Wholesale & Supplier Onboarding',
  'TV Dealership & Retail Distribution',
  'E-Commerce Merchant Queries',
  'General Corporate Support',
  SOFTWARE_ENQUIRY_TYPE,
];

const PROJECT_TYPES = [
  'Website Development',
  'Ecommerce Development',
  'Mobile App Development',
  'ERP System Development',
  'Custom Software Development',
  'UI/UX Design',
  'API / System Integration',
  'Existing Software Enhancement',
  'Maintenance & Support',
  'Other',
];

const TARGET_PLATFORMS = [
  'Web',
  'Android',
  'iOS',
  'Desktop',
  'Multiple Platforms',
  'Not Sure',
];

export default function Contact() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    enquiryType: 'Corporate & Strategic Partnership',
    message: '',
    // Conditional Project fields
    projectType: 'Website Development',
    projectTitle: '',
    projectDescription: '',
    targetPlatform: 'Web',
    estimatedBudget: '',
    expectedTimeline: '',
    referenceUrl: '',
    additionalComments: '',
  });

  const [attachedFile, setAttachedFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });

  // Handle automatic preselection from query param, state, or hash (e.g., from /digital-solutions CTA)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const typeParam = params.get('type') || params.get('enquiryType');
    const stateType = location.state?.enquiryType || location.state?.type;

    if (
      typeParam === 'software' ||
      typeParam === 'digital-solutions' ||
      typeParam === SOFTWARE_ENQUIRY_TYPE ||
      stateType === SOFTWARE_ENQUIRY_TYPE
    ) {
      setFormData((prev) => ({
        ...prev,
        enquiryType: SOFTWARE_ENQUIRY_TYPE,
      }));
    } else if (typeParam) {
      const matched = ENQUIRY_OPTIONS.find(
        (opt) => opt.toLowerCase() === typeParam.toLowerCase()
      );
      if (matched) {
        setFormData((prev) => ({ ...prev, enquiryType: matched }));
      }
    }
  }, [location.search, location.state]);

  const isSoftwareEnquiry = formData.enquiryType === SOFTWARE_ENQUIRY_TYPE;

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Business Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (isSoftwareEnquiry) {
      if (!formData.projectType.trim()) {
        newErrors.projectType = 'Project Type is required';
      }
      if (!formData.projectTitle.trim()) {
        newErrors.projectTitle = 'Project Title is required';
      }
      if (!formData.projectDescription.trim()) {
        newErrors.projectDescription = 'Project Description / Requirements are required';
      }
    } else {
      if (!formData.message.trim()) {
        newErrors.message = 'Please provide details about your enquiry';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // 10MB limit guard
      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          file: 'File size must be under 10MB',
        }));
        return;
      }
      setAttachedFile(file);
      setErrors((prev) => ({ ...prev, file: '' }));
    }
  };

  const removeFile = () => {
    setAttachedFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setFormStatus({
        state: 'error',
        message: 'Please review and correct the highlighted fields above.',
      });
      return;
    }

    const mailtoSubject = encodeURIComponent(
      isSoftwareEnquiry
        ? `[${SOFTWARE_ENQUIRY_TYPE}] ${formData.projectTitle} - ${formData.fullName} (${formData.company || 'Individual'})`
        : `[${formData.enquiryType}] Enquiry from ${formData.fullName} - ${formData.company || 'Individual'}`
    );

    let bodyText = `CORPORATE ENQUIRY SUBMISSION\n` +
      `==============================\n` +
      `Full Name: ${formData.fullName}\n` +
      `Business Email: ${formData.email}\n` +
      `Phone Number: ${formData.phone}\n` +
      `Company / Organization: ${formData.company || 'N/A'}\n` +
      `Enquiry Type: ${formData.enquiryType}\n`;

    if (isSoftwareEnquiry) {
      bodyText += `\nSOFTWARE & DIGITAL PROJECT DETAILS\n` +
        `----------------------------------\n` +
        `Project Type: ${formData.projectType}\n` +
        `Project Title: ${formData.projectTitle}\n` +
        `Target Platform: ${formData.targetPlatform}\n` +
        `Estimated Budget: ${formData.estimatedBudget || 'Not specified'}\n` +
        `Expected Timeline: ${formData.expectedTimeline || 'Not specified'}\n` +
        `Reference Website URL: ${formData.referenceUrl || 'N/A'}\n` +
        `Attached Document: ${attachedFile ? `${attachedFile.name} (${(attachedFile.size / 1024).toFixed(1)} KB)` : 'None'}\n\n` +
        `Project Description & Requirements:\n${formData.projectDescription}\n`;

      if (formData.additionalComments.trim()) {
        bodyText += `\nAdditional Comments:\n${formData.additionalComments}\n`;
      }
    } else {
      bodyText += `\nMessage / Proposal:\n${formData.message}\n`;
    }

    const mailtoBody = encodeURIComponent(bodyText);

    // Launch existing email transmission mechanism
    window.location.href = `mailto:${companyInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setFormStatus({
      state: 'ready',
      message: `Opening your default email client with your pre-filled ${formData.enquiryType} to ${companyInfo.email}...${attachedFile ? ` (Please remember to attach "${attachedFile.name}" in your email client)` : ''}`,
    });
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-transparent text-[#17171D] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/3 w-[550px] h-[550px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          badge="Direct Engagement"
          title="Let's Build Something Meaningful Together."
          subtitle="Have a business enquiry, partnership opportunity or collaboration idea? Connect directly with the ZUVO executive and operational teams."
          theme="light"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
          {/* Corporate Information Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="liquid-glass-card rounded-3xl p-8 border border-white/80 shadow-sm relative overflow-hidden bg-white/70 backdrop-blur-xl">
              <div className="absolute -top-16 -right-16 w-44 h-44 bg-[#015B97]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold text-[#17171D] tracking-tight">
                  Corporate Headquarters
                </h3>
                <p className="text-[#5F5F6E] text-sm mt-2 leading-relaxed">
                  Connect with our strategic leadership, venture heads, or regional operational liaisons.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-[#015B97]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#015B97]">
                        Registered Office
                      </div>
                      <div className="text-sm font-semibold text-[#17171D] mt-0.5">
                        {companyInfo.address}
                      </div>
                      <div className="text-xs text-[#5F5F6E] mt-1">
                        Module 115, D Block • TIDEL Park Chennai
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-[#015B97]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#015B97]">
                        Electronic Mail
                      </div>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="text-sm font-semibold text-[#17171D] hover:text-[#015B97] transition-colors block mt-0.5"
                      >
                        {companyInfo.email}
                      </a>
                      <div className="text-xs text-[#5F5F6E] mt-1">
                        Corporate Secretariat & Strategic Sourcing Desk
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-[#015B97]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#015B97]">
                        Telephonic Lines
                      </div>
                      <div className="text-sm font-semibold text-[#17171D] mt-0.5">
                        <a href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`} className="hover:text-[#015B97] transition-colors">
                          {companyInfo.phone}
                        </a>
                      </div>
                      <div className="text-xs text-[#5F5F6E] mt-1">
                        Corporate Headquarters & Support Desk
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Venture Pathways Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#015B97]/15 via-blue-50/60 to-white/70 border border-blue-100/80 shadow-xs backdrop-blur-md flex items-center justify-between">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#015B97]">
                  Instant Commercial Sourcing
                </div>
                <div className="text-sm font-bold text-[#17171D] mt-0.5">
                  Direct B2B Wholesale Portal
                </div>
                <div className="text-xs text-[#5F5F6E] mt-0.5">
                  Access wholesale price tiers on ALLZON B2B
                </div>
              </div>
              <CheckCircle2 size={30} className="text-[#015B97]" />
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="liquid-glass-card rounded-3xl p-8 sm:p-10 border border-white/80 shadow-sm relative overflow-hidden bg-white/80 backdrop-blur-xl">
              <div className="absolute -top-20 -right-20 w-52 h-52 bg-[#015B97]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#17171D] tracking-tight">
                  Send a Corporate Enquiry
                </h3>
                <p className="text-[#686875] text-sm mt-1">
                  Fill in your details below and our team will get in touch directly.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  {/* Basic Client Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#17171D] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Anand Kumar"
                        className={`w-full px-4 py-3 rounded-xl bg-white border ${
                          errors.fullName ? 'border-red-500' : 'border-gray-200/80'
                        } text-[#17171D] text-sm focus:outline-none focus:border-[#015B97] focus:ring-1 focus:ring-[#015B97] transition-all`}
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#17171D] mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. anand@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white border ${
                          errors.email ? 'border-red-500' : 'border-gray-200/80'
                        } text-[#17171D] text-sm focus:outline-none focus:border-[#015B97] focus:ring-1 focus:ring-[#015B97] transition-all`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                          errors.phone ? 'border-red-500' : 'border-gray-200/80'
                        } text-[#17171D] text-sm focus:outline-none focus:border-[#015B97] focus:ring-1 focus:ring-[#015B97] transition-all`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#17171D] mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Apex Enterprises"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200/80 text-[#17171D] text-sm focus:outline-none focus:border-[#015B97] focus:ring-1 focus:ring-[#015B97] transition-all"
                      />
                    </div>
                  </div>

                  {/* Enquiry Type Dropdown */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#17171D] mb-1.5">
                      Enquiry Type
                    </label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200/80 text-[#17171D] text-sm focus:outline-none focus:border-[#015B97] focus:ring-1 focus:ring-[#015B97] transition-all"
                    >
                      <option value="Corporate & Strategic Partnership">Corporate & Strategic Partnership</option>
                      <option value="Mobility Fleet & Pilot Operations">Mobility Fleet & Pilot Operations</option>
                      <option value="B2B Wholesale & Supplier Onboarding">B2B Wholesale & Supplier Onboarding</option>
                      <option value="TV Dealership & Retail Distribution">TV Dealership & Retail Distribution</option>
                      <option value="E-Commerce Merchant Queries">E-Commerce Merchant Queries</option>
                      <option value="General Corporate Support">General Corporate Support</option>
                      <option value={SOFTWARE_ENQUIRY_TYPE}>{SOFTWARE_ENQUIRY_TYPE}</option>
                    </select>
                  </div>

                  {/* CONDITIONAL FIELDS: Software & Digital Solutions Project Enquiry */}
                  {isSoftwareEnquiry ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-5 pt-2"
                    >
                      <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/70 text-xs text-[#015B97] flex items-center gap-2">
                        <CheckCircle2 size={16} className="shrink-0" />
                        <span>Project Specification Mode active: please provide your digital product parameters below.</span>
                      </div>

                      {/* Project Type & Target Platform */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#17171D] mb-1.5">
                            Project Type *
                          </label>
                          <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl bg-white border ${
                              errors.projectType ? 'border-red-500' : 'border-gray-200/80'
                            } text-[#17171D] text-sm focus:outline-none focus:border-[#015B97] focus:ring-1 focus:ring-[#015B97] transition-all`}
                          >
                            {PROJECT_TYPES.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                          {errors.projectType && (
                            <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#17171D] mb-1.5">
                            Target Platform
                          </label>
                          <select
                            name="targetPlatform"
                            value={formData.targetPlatform}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200/80 text-[#17171D] text-sm focus:outline-none focus:border-[#015B97] focus:ring-1 focus:ring-[#015B97] transition-all"
                          >
                            {TARGET_PLATFORMS.map((plat) => (
                              <option key={plat} value={plat}>
                                {plat}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Project Title */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#17171D] mb-1.5">
                          Project Title *
                        </label>
                        <input
                          type="text"
                          name="projectTitle"
                          value={formData.projectTitle}
                          onChange={handleChange}
                          placeholder="e.g. Next-Gen B2B Logistics Dashboard & Mobile App"
                          className={`w-full px-4 py-3 rounded-xl bg-white border ${
                            errors.projectTitle ? 'border-red-500' : 'border-gray-200/80'
                          } text-[#17171D] text-sm focus:outline-none focus:border-[#015B97] focus:ring-1 focus:ring-[#015B97] transition-all`}
                        />
                        {errors.projectTitle && (
                          <p className="text-red-500 text-xs mt-1">{errors.projectTitle}</p>
                        )}
                      </div>

                      {/* Project Description / Requirements */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#17171D] mb-1.5">
                          Project Description / Requirements *
                        </label>
                        <textarea
                          rows={4}
                          name="projectDescription"
                          value={formData.projectDescription}
                          onChange={handleChange}
                          placeholder="Outline the core objective, desired features, user personas, or target workflow..."
                          className={`w-full px-4 py-3 rounded-xl bg-white border ${
                            errors.projectDescription ? 'border-red-500' : 'border-gray-200/80'
                          } text-[#17171D] text-sm focus:outline-none focus:border-[#015B97] focus:ring-1 focus:ring-[#015B97] transition-all`}
                        />
                        {errors.projectDescription && (
                          <p className="text-red-500 text-xs mt-1">{errors.projectDescription}</p>
                        )}
                      </div>

                      {/* Estimated Budget & Expected Timeline */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#17171D] mb-1.5">
                            Estimated Budget (Optional)
                          </label>
                          <input
                            type="text"
                            name="estimatedBudget"
                            value={formData.estimatedBudget}
                            onChange={handleChange}
                            placeholder="e.g. ₹5,00,000 - ₹10,00,000 or $10,000"
                            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200/80 text-[#17171D] text-sm focus:outline-none focus:border-[#015B97] focus:ring-1 focus:ring-[#015B97] transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#17171D] mb-1.5">
                            Expected Timeline (Optional)
                          </label>
                          <input
                            type="text"
                            name="expectedTimeline"
                            value={formData.expectedTimeline}
                            onChange={handleChange}
                            placeholder="e.g. 2-3 Months / Q3 Launch"
                            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200/80 text-[#17171D] text-sm focus:outline-none focus:border-[#015B97] focus:ring-1 focus:ring-[#015B97] transition-all"
                          />
                        </div>
                      </div>

                      {/* Reference Website URL */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#17171D] mb-1.5">
                          Reference Website URL (Optional)
                        </label>
                        <input
                          type="url"
                          name="referenceUrl"
                          value={formData.referenceUrl}
                          onChange={handleChange}
                          placeholder="e.g. https://competitor.com or Figma prototype link"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200/80 text-[#17171D] text-sm focus:outline-none focus:border-[#015B97] focus:ring-1 focus:ring-[#015B97] transition-all"
                        />
                      </div>

                      {/* Document Upload */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#17171D] mb-1.5">
                          Project Brief / Requirement Document (Optional)
                        </label>
                        <div className="relative border-2 border-dashed border-gray-200/90 hover:border-[#015B97]/50 rounded-2xl p-5 text-center transition-colors bg-white/50">
                          {attachedFile ? (
                            <div className="flex items-center justify-between px-3 py-2 bg-blue-50/70 border border-blue-200/60 rounded-xl">
                              <div className="flex items-center gap-2 text-xs font-semibold text-[#17171D] truncate">
                                <FileText size={16} className="text-[#015B97] shrink-0" />
                                <span className="truncate">{attachedFile.name}</span>
                                <span className="text-gray-400 text-[11px]">
                                  ({(attachedFile.size / 1024).toFixed(1)} KB)
                                </span>
                              </div>
                              <button
                                type="button"
                                onClick={removeFile}
                                className="p-1 hover:bg-white rounded-lg text-gray-500 hover:text-red-500 transition-colors"
                              >
                                <X size={15} />
                              </button>
                            </div>
                          ) : (
                            <label className="cursor-pointer flex flex-col items-center justify-center gap-1.5">
                              <Upload size={20} className="text-[#015B97]" />
                              <span className="text-xs font-semibold text-[#17171D]">
                                Click to upload brief or specifications
                              </span>
                              <span className="text-[11px] text-gray-400">
                                PDF, DOCX, XLSX, or ZIP up to 10MB
                              </span>
                              <input
                                type="file"
                                onChange={handleFileChange}
                                accept=".pdf,.doc,.docx,.xls,.xlsx,.txt,.zip"
                                className="hidden"
                              />
                            </label>
                          )}
                        </div>
                        {errors.file && (
                          <p className="text-red-500 text-xs mt-1">{errors.file}</p>
                        )}
                      </div>

                      {/* Additional Comments */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#17171D] mb-1.5">
                          Additional Comments (Optional)
                        </label>
                        <textarea
                          rows={2}
                          name="additionalComments"
                          value={formData.additionalComments}
                          onChange={handleChange}
                          placeholder="Any specific tech stack preferences, compliance requirements, or notes..."
                          className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200/80 text-[#17171D] text-sm focus:outline-none focus:border-[#015B97] focus:ring-1 focus:ring-[#015B97] transition-all"
                        />
                      </div>
                    </motion.div>
                  ) : (
                    /* Default General Message Field */
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#17171D] mb-1.5">
                        Your Message / Proposal *
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your requirements, city of operation, or proposal..."
                        className={`w-full px-4 py-3 rounded-xl bg-white border ${
                          errors.message ? 'border-red-500' : 'border-gray-200/80'
                        } text-[#17171D] text-sm focus:outline-none focus:border-[#015B97] focus:ring-1 focus:ring-[#015B97] transition-all`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                      )}
                    </div>
                  )}

                  {formStatus.state === 'ready' && (
                    <div className="p-4 rounded-xl bg-[#015B97]/20 border border-blue-200 text-[#01426E] text-xs flex items-center gap-2">
                      <CheckCircle2 size={16} className="shrink-0 text-[#015B97]" />
                      <span>{formStatus.message}</span>
                    </div>
                  )}

                  {formStatus.state === 'error' && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle size={16} className="shrink-0 text-red-600" />
                      <span>{formStatus.message}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-[#015B97] hover:bg-[#6345C4] transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <Send size={16} />
                    <span>
                      {isSoftwareEnquiry
                        ? 'Transmit Project Specifications'
                        : 'Transmit Corporate Enquiry'}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
