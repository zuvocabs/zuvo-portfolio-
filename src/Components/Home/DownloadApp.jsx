import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, PlayCircle, QrCode, ShieldCheck, Zap } from 'lucide-react';

// --- IMAGE IMPORTS ---
// Replace these paths with your actual image file locations
import userAppImg from '../../assets/youtoris-images/1.webp';
import partnerAppImg from '../../assets/youtoris-images/2.webp';

const DownloadApp = () => {
    return (
        <section className="mt-20 bg-white overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#015B97] font-black tracking-widest text-xs uppercase bg-[#015B97]/10 px-4 py-2 rounded-full"
                    >
                        Experience Zuvo Cab's Anywhere
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-[#000000] mt-6 leading-tight"
                    >
                        Download the app and <br />
                        <span className="text-[#015B97]">start your journey.</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">

                    {/* CARD 1: USER APP */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="relative group bg-[#e6e6e6]/30 border border-gray-200/80 rounded-[3rem] p-10 overflow-hidden"
                    >
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-[#015B97] p-3 rounded-2xl text-white">
                                    <Smartphone size={24} />
                                </div>
                                <h3 className="text-2xl font-black text-[#000000]">User App</h3>
                            </div>
                            <p className="text-[#686875] font-medium mb-8 max-w-sm">
                                Book rides in seconds, track your driver in real-time, and enjoy the most comfortable travel experience.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-10">

                                {/* Google Play */}
                                <a
                                    href="https://play.google.com/store"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="flex items-center gap-3 bg-[#000000] text-white px-6 py-4 rounded-2xl hover:bg-[#015B97] transition-all">
                                        <PlayCircle size={28} />
                                        <div className="text-left">
                                            <p className="text-[10px] uppercase font-bold opacity-60">Get it on</p>
                                            <p className="text-sm font-bold">Google Play</p>
                                        </div>
                                    </button>
                                </a>

                            </div>


                        </div>

                        {/* App Preview Image Mockup */}
                        <motion.div
                            initial={{ y: 150, rotate: 10 }}
                            whileInView={{ y: 40, rotate: -10 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="absolute -right-12 -bottom-10 w-64 h-[500px] bg-white rounded-[2.5rem] shadow-2xl border-[6px] border-[#000000] overflow-hidden hidden md:block"
                        >
                            <img
                                src={userAppImg}
                                alt="User App Screen"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </motion.div>

                    {/* CARD 2: PARTNER APP (DRIVER) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="relative group bg-[#015B97]/5 border border-[#015B97]/10 rounded-[3rem] p-10 overflow-hidden"
                    >
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-[#000000] p-3 rounded-2xl text-white">
                                    <ShieldCheck size={24} />
                                </div>
                                <h3 className="text-2xl font-black text-[#000000]">Partner App</h3>
                            </div>
                            <p className="text-[#686875] font-medium mb-8 max-w-sm">
                                Drive with Zuvo Cab's and earn more. Flexible hours, instant payouts, and 24/7 dedicated support.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-10">

                                {/* Driver Play Store Button */}
                                <a
                                    href="https://play.google.com/store"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 bg-[#015B97] text-white px-6 py-4 rounded-2xl hover:bg-[#000000] transition-all shadow-lg shadow-[#015B97]/20"
                                >
                                    <PlayCircle size={28} />
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase font-bold opacity-60">For Drivers</p>
                                        <p className="text-sm font-bold">Play Store</p>
                                    </div>
                                </a>

                                {/* Partners Join */}
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-[#015B97] font-bold px-4 py-2 border-2 border-[#015B97]/20 rounded-2xl hover:bg-[#015B97]/10 transition-all"
                                >
                                    <Zap size={18} fill="currentColor" />
                                    Join 10k+ Partners
                                </a>

                            </div>


                        </div>

                        {/* Partner Preview Mockup */}
                        <motion.div
                            initial={{ y: 150, rotate: -10 }}
                            whileInView={{ y: 40, rotate: 10 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="absolute -right-12 -bottom-10 w-64 h-[500px] bg-[#000000] rounded-[2.5rem] shadow-2xl border-[6px] border-[#015B97] overflow-hidden hidden md:block"
                        >
                            <img
                                src={partnerAppImg}
                                alt="Partner App Screen"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </motion.div>

                </div>

                {/* Trust Badges */}
                <div className="my-16 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
                    <div className="flex items-center gap-2 font-bold text-gray-800">1M+ Downloads</div>
                    <div className="flex items-center gap-2 font-bold text-gray-800">4.8 App Rating</div>
                    <div className="flex items-center gap-2 font-bold text-gray-800">100% Secure</div>
                    <div className="flex items-center gap-2 font-bold text-gray-800">ISO Certified</div>
                </div>

            </div>
        </section>
    );
};

export default DownloadApp;