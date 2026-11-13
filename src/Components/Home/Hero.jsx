import React from 'react';
import { motion } from 'framer-motion';
import { FaGooglePlay, FaStar } from 'react-icons/fa';
import { RiShieldCheckFill } from 'react-icons/ri';

// Rendu image-ah import pannikonga mapla
import img1 from '../../assets/youtoris-images/1.webp'; // Main Image (Front)
import img2 from '../../assets/youtoris-images/1.webp'; // Secondary Image (Back)

const HeroApp = () => {
    return (
        <section id="home" className="relative min-h-screen bg-[#000000] overflow-hidden flex items-center pt-24 pb-12 px-6">

            {/* Background Aesthetic Glows */}
            <div className="absolute top-0 right-0 w-[40%] h-[80%] bg-[#015B97]/20 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-[#015B97]/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT SIDE: CONTENT */}
                    <div className="relative z-20 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 bg-[#015B97]/10 border border-[#015B97]/20 px-4 py-2 rounded-full mb-8"
                        >
                            <RiShieldCheckFill className="text-[#015B97]" size={18} />
                            <span className="text-[#e6e6e6] text-xs font-black uppercase tracking-widest">Safe • Fast • Reliable</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-8"
                        >
                            Move Faster. <br />
                            <span className="text-[#015B97]">Live Better.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-[#e6e6e6]/60 text-lg md:text-xl font-medium max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0"
                        >
                            The ultimate urban mobility app. Book rides, send parcels, and travel in style with just a few taps. Download now and start your journey.
                        </motion.p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            {/* Google Play Store Button */}
                            <a
                                href="https://play.google.com/store"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: '#015B97' }}
                                    className="bg-[#015B97] text-white px-8 py-4 rounded-2xl flex items-center gap-3 shadow-xl shadow-[#015B97]/20 transition-all font-bold"
                                >
                                    <FaGooglePlay size={22} />
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase font-bold opacity-80 leading-none">Get it on</p>
                                        <p className="text-base font-bold leading-none mt-1">Google Play</p>
                                    </div>
                                </motion.button>
                            </a>
                        </div>

                        {/* RATING BADGE */}
                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-3">
                            <div className="flex text-yellow-500">
                                {[1, 2, 3, 4, 5].map(i => <FaStar key={i} size={14} fill="currentColor" />)}
                            </div>
                            <span className="text-white font-bold text-sm">4.9/5 Rating</span>

                        </div>
                    </div>

                    {/* RIGHT SIDE: DOUBLE IMAGE MOCKUP */}
                    <div className="relative flex justify-center items-center h-[500px] md:h-[600px]">

                        {/* BACKGROUND GLOW CIRCLE */}
                        <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#015B97]/10 rounded-full blur-[80px]"></div>

                        {/* 1. BACK IMAGE (Tilted) */}
                        <motion.div
                            initial={{ opacity: 0, x: 100, rotate: 15, scale: 0.8 }}
                            animate={{ opacity: 0.6, x: 60, rotate: 12, scale: 0.9 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="absolute z-20 w-[220px] md:w-[320px] transition-all duration-500"
                        >
                            <motion.img
                                src={img2}
                                alt="Secondary Mockup"
                                className="w-full h-auto object-contain drop-shadow-2xl"
                                animate={{ y: [0, 20, 0] }}
                                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                            />
                        </motion.div>

                        {/* 2. FRONT IMAGE (Main Focus) */}
                        <motion.div
                            initial={{ opacity: 0, y: 100, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-20 w-[240px] md:w-[350px]"
                        >
                            <motion.img
                                src={img1}
                                alt="Main Mockup"
                                className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(119,90,218,0.3)]"
                                animate={{ y: [0, -20, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            />

                            {/* SMALL FLOATING STATUS BADGE */}
                            <motion.div
                                animate={{ x: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                                className="absolute -right-8 bottom-1/4 bg-white p-3 rounded-2xl hidden md:flex items-center gap-3 shadow-2xl"
                            >
                                <div className="w-8 h-8 bg-[#015B97] rounded-lg flex items-center justify-center text-white">
                                    <RiShieldCheckFill size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-black/40 font-black uppercase leading-none mb-1">Live</p>
                                    <p className="text-xs text-black font-black leading-none">Safe Rides</p>
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroApp;