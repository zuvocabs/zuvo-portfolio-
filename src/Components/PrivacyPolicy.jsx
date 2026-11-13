import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
    FaShieldAlt, FaUserEdit, FaMapMarkedAlt, FaLock, 
    FaDatabase, FaExternalLinkAlt, FaHistory, FaEnvelopeOpenText,
    FaFingerprint, FaCheckCircle
} from 'react-icons/fa';

const PrivacyPolicy = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const dataPoints = [
        { label: "Identity", val: "Name", icon: <FaUserEdit />, desc: "Used for profile personalization" },
        { label: "Communication", val: "Email Address", icon: <FaEnvelopeOpenText />, desc: "Critical updates & support" },
        { label: "Verification", val: "Mobile Number", icon: <FaFingerprint />, desc: "Account security & OTP" },
        { label: "Geolocation", val: "Current Location", icon: <FaMapMarkedAlt />, desc: "Service optimization" },
    ];

    const sections = [
        {
            id: "usage",
            title: "Data Utilization",
            icon: <FaDatabase className="text-[#015B97]" />,
            content: "We transform raw data into seamless experiences. Our primary goal is to provide app functionalities, personalize your journey, and maintain peak performance levels.",
            chips: ["Personalization", "Support", "Analytics"]
        },
        {
            id: "location",
            title: "Spatial Privacy",
            icon: <FaMapMarkedAlt className="text-[#015B97]" />,
            content: "Your spatial data is yours. We only access location when the feature is active. Continuous background tracking is strictly prohibited without explicit user authorization.",
            alert: "Location tracking is 100% transparent."
        },
        {
            id: "protection",
            title: "Security Architecture",
            icon: <FaLock className="text-[#015B97]" />,
            content: "We employ military-grade encryption and rigorous security protocols to ensure your data remains immune to unauthorized access or disclosure.",
        },
        {
            id: "sharing",
            title: "Information Integrity",
            icon: <FaShieldAlt className="text-[#015B97]" />,
            content: "Zuvo Cab's operates on a 'Zero-Sale' policy. We never trade, rent, or sell your personal information. Sharing only occurs under legal mandates or essential service logic.",
        }
    ];

    return (
        <div className="bg-[#ffffff] min-h-screen font-sans selection:bg-[#015B97] selection:text-white mt-15">
            {/* Scroll Progress Bar */}
            <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-[#015B97] origin-left z-50" style={{ scaleX }} />

            <div className="max-w-6xl mx-auto px-6 py-24">
                
                {/* 1. ADVANCED HERO SECTION */}
                <header className="mb-32">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-3 mb-8 bg-[#e6e6e6]/50 w-fit px-4 py-2 rounded-full border border-[#e6e6e6]"
                    >
                        <div className="w-2 h-2 rounded-full bg-[#015B97] animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#000000]">Security Protocol v2.0</span>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-7xl md:text-9xl font-black text-[#000000] tracking-tighter leading-[0.8] mb-12"
                    >
                        TRUST BY <br />
                        <span className="text-[#015B97]">DESIGN.</span>
                    </motion.h1>

                    <div className="grid lg:grid-cols-2 gap-12 items-end">
                        <p className="text-xl text-[#000000]/50 font-medium leading-relaxed">
                            At Zuvo Cab's, privacy isn't just a policy—it's our foundation. We've engineered our platform to respect your data while delivering world-class mobility.
                        </p>
                        <div className="flex gap-4 lg:justify-end">
                            <div className="bg-[#000000] text-white p-6 rounded-3xl">
                                <h4 className="text-3xl font-black italic">100%</h4>
                                <p className="text-[10px] uppercase font-bold opacity-50 tracking-widest">Data Encryption</p>
                            </div>
                            <div className="bg-[#e6e6e6] text-[#000000] p-6 rounded-3xl">
                                <h4 className="text-3xl font-black italic">NO</h4>
                                <p className="text-[10px] uppercase font-bold opacity-50 tracking-widest">Third-party Selling</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* 2. DATA POINTS BENTO GRID */}
                <section className="mb-32">
                    <h3 className="text-sm font-black uppercase tracking-[0.4em] mb-10 text-[#000000]/30">Collected Parameters</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {dataPoints.map((point, idx) => (
                            <motion.div 
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="bg-[#fcfcfc] border border-[#e6e6e6] p-8 rounded-[2.5rem] transition-all hover:shadow-2xl hover:shadow-[#015B97]/5 group"
                            >
                                <div className="text-[#015B97] text-2xl mb-6 group-hover:scale-110 transition-transform">
                                    {point.icon}
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#000000]/30 mb-2">{point.label}</p>
                                <h4 className="text-xl font-bold text-[#000000] mb-3">{point.val}</h4>
                                <p className="text-xs text-[#000000]/50 font-medium leading-relaxed">{point.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 3. DETAILED POLICY SECTIONS */}
                <div className="space-y-32">
                    {sections.map((section, idx) => (
                        <motion.section 
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col lg:flex-row gap-16"
                        >
                            <div className="lg:w-1/3">
                                <div className="sticky top-32">
                                    <div className="text-4xl mb-4">{section.icon}</div>
                                    <h2 className="text-4xl font-black tracking-tighter text-[#000000] mb-4">{section.title}</h2>
                                    <div className="w-12 h-1 bg-[#015B97]" />
                                </div>
                            </div>
                            <div className="lg:w-2/3">
                                <p className="text-2xl text-[#000000]/70 leading-relaxed font-medium mb-8">
                                    {section.content}
                                </p>
                                
                                {section.chips && (
                                    <div className="flex flex-wrap gap-3">
                                        {section.chips.map(chip => (
                                            <span key={chip} className="px-5 py-2 bg-[#e6e6e6] text-[#000000] text-xs font-bold rounded-full">{chip}</span>
                                        ))}
                                    </div>
                                )}

                                {section.alert && (
                                    <div className="flex items-center gap-3 p-4 bg-[#015B97]/5 border-l-4 border-[#015B97] rounded-r-xl">
                                        <FaCheckCircle className="text-[#015B97]" />
                                        <p className="text-sm font-bold text-[#015B97]">{section.alert}</p>
                                    </div>
                                )}
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* 4. PREMIUM CONTACT FOOTER */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-28 bg-[#000000] rounded-[4rem] p-12 md:p-24 text-white text-center relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <FaEnvelopeOpenText className="text-6xl text-[#015B97] mx-auto mb-10" />
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">Have legal <br /> inquiries?</h2>
                        <p className="text-[#e6e6e6]/40 text-lg mb-12 max-w-lg mx-auto uppercase tracking-widest font-bold">Reach out to our global privacy office.</p>
                        
                        <a 
                            href="mailto:support@zuvohub.com" 
                            className="inline-block bg-[#015B97] text-white px-12 py-6 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-[#015B97]/40"
                        >
                            support@zuvohub.com
                        </a>
                        
                        <div className="mt-16 flex justify-center gap-12 text-[#e6e6e6]/20 font-black text-[10px] tracking-[0.3em] uppercase">
                            <span>Last Updated: April 2026</span>
                            <span>•</span>
                            <span>Document ID: TR-2023-PRV</span>
                        </div>
                    </div>

                    {/* Background Graphic Elements */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-30">
                        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-[#015B97] rounded-full blur-[120px]" />
                        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#015B97] rounded-full blur-[150px]" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;