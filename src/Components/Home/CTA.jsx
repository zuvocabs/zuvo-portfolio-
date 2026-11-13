import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CorporateCTA = () => {
    return (
        <section className="relative pb-14 px-6 bg-white overflow-hidden">
            {/* Subtle Background Decoration - Dot Pattern */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.05] pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
            </div>

            <div className="max-w-[1700px] mx-auto">
                {/* Main Card - Changed to #000000 */}
                <div className="relative bg-[#000000] rounded-3xl overflow-hidden shadow-2xl border border-[#e6e6e6]/10">

                    {/* Background Glow Pattern - Changed to #015B97 */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#015B97] rounded-full blur-[120px]"></div>
                    </div>

                    <div className="relative z-10 grid lg:grid-cols-5 gap-12 p-12 md:p-20 items-center">

                        {/* Content Area (3 Columns) */}
                        <div className="lg:col-span-3">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                // Badge Background changed to #015B97 (low opacity)
                                className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[#ffff] uppercase bg-[#015B97]/60 rounded-full"
                            >
                                Enterprise Solutions
                            </motion.span>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl font-semibold text-[#e6e6e6] leading-tight tracking-tight mb-6"
                            >
                                Move smarter with <br />
                                <span className="text-[#e6e6e6]">Zuvo Cab's Enterprise Mobility.</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-[#e6e6e6]/70 mb-10 max-w-lg leading-relaxed"
                            >
                                Designed for modern businesses, Zuvo Cab's delivers seamless, secure,
                                and efficient transportation solutions that keep your workforce moving—on time, every time.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap gap-4"
                            >
                                {/* Primary Button - Using #015B97 */}
                                <button className="bg-[#015B97] text-white px-8 py-4 rounded-lg font-bold hover:brightness-110 transition-all flex items-center gap-2 group">
                                    Get Started
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>

                                {/* Secondary Button - Using #e6e6e6 border */}
                                <button className="border border-[#e6e6e6]/20 text-[#e6e6e6] px-8 py-4 rounded-lg font-bold hover:bg-white/5 transition-all">
                                    Contact Sales
                                </button>
                            </motion.div>
                        </div>

                        {/* Features Area (2 Columns) */}
                        <div className="lg:col-span-2 space-y-6">
                            {[
                                { title: "Priority Support", desc: "Dedicated 24/7 account management" },
                                { title: "Automated Billing", desc: "Monthly invoicing and expense tracking" },
                                { title: "Premium Fleet", desc: "Executive vehicles for every journey" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + (idx * 0.1) }}
                                    // Item card background using #e6e6e6 low opacity
                                    className="flex items-start gap-4 p-4 rounded-2xl bg-[#e6e6e6]/20 border border-[#e6e6e6]/5 transition-colors"
                                >
                                    <div className="mt-1">
                                        {/* Icon changed to #015B97 */}
                                        <CheckCircle2 size={24} className="text-[#015B97]" />
                                    </div>
                                    <div>
                                        <h4 className="text-[#e6e6e6] font-bold text-lg">{item.title}</h4>
                                        <p className="text-[#e6e6e6]/40 text-sm">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorporateCTA;