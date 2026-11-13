import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Users, Trophy, Globe, Heart, ArrowRight } from 'lucide-react';

const About = () => {
    const coreValues = [
        {
            title: "Safety First",
            desc: "Every ride is monitored 24/7 with SOS integration and verified captains.",
            icon: <ShieldCheck size={32} className="text-[#015B97]" />,
        },
        {
            title: "Rapid Motion",
            desc: "Redefining speed with smart routing technology to beat urban congestion.",
            icon: <Zap size={32} className="text-[#015B97]" />,
        },
        {
            title: "User Centric",
            desc: "Designed for comfort and accessibility, making travel seamless for everyone.",
            icon: <Heart size={32} className="text-[#015B97]" />,
        }
    ];

    return (
        <section id="about" className="relative pt-24 bg-white overflow-hidden">

            {/* Background Decorative Text - Corporate Style */}
            <div className="absolute top-20 -right-20 text-[18rem] font-black text-gray-50 -z-0 pointer-events-none select-none leading-none">
                VISION
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

                    {/* LEFT SIDE: THE STORY */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-3 bg-[#015B97]/10 px-5 py-2 rounded-full mb-8">
                            <span className="w-2 h-2 bg-[#015B97] rounded-full animate-pulse"></span>
                            <span className="text-[#015B97] font-black text-xs uppercase tracking-[0.3em]">Who We Are</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black text-[#000000] leading-[0.9] tracking-tighter mb-8">
                            Moving Minds, <br />
                            <span className="text-[#015B97]">Connecting Hearts.</span>
                        </h2>

                        <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-xl">
                            Zuvo Cab's isn't just a ride-hailing service; it's a commitment to urban mobility.
                            Since our inception, we've focused on creating a safer, faster, and more
                            transparent transportation ecosystem for millions.
                        </p>



                        <motion.button
                            whileHover={{ x: 10 }}
                            className="flex items-center gap-4 bg-[#000000] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#015B97] transition-all shadow-xl shadow-black/10"
                        >
                            Our Full Story <ArrowRight size={20} />
                        </motion.button>
                    </motion.div>

                    {/* RIGHT SIDE: UNIQUE IMAGE COMPOSITION */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        {/* Main Image Frame */}
                        <div className="relative z-10 rounded-[4rem] overflow-hidden aspect-[4/5] shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                                alt="Our Team"
                                className="w-full h-full object-cover"
                            />
                            {/* Glass Overlay on Image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#015B97]/40 to-transparent"></div>
                        </div>



                        {/* Decorative Circles */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#015B97]/10 rounded-full blur-3xl"></div>
                    </motion.div>
                </div>

                {/* BOTTOM SECTION: CORE VALUES (The 'Different Style' Grid) */}
                {/* <div className="grid md:grid-cols-3 gap-8">
                    {coreValues.map((value, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-[#e6e6e6]/30 p-10 rounded-[3.5rem] border border-transparent hover:border-[#015B97]/20 hover:bg-white transition-all duration-500 group"
                        >
                            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-8 group-hover:bg-[#015B97] group-hover:text-white transition-all">
                                {value.icon}
                            </div>
                            <h3 className="text-2xl font-black text-[#000000] mb-4">{value.title}</h3>
                            <p className="text-gray-500 font-medium leading-relaxed">
                                {value.desc}
                            </p>
                        </motion.div>
                    ))}
                </div> */}

                {/* Corporate Trust Bar */}
                {/* <div className="mt-24 pt-16 border-t border-gray-200/80 flex flex-wrap justify-center gap-10 md:gap-20 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    <div className="flex items-center gap-2 font-black text-[#000000]"><Globe size={20} /> GLOBAL REACH</div>
                    <div className="flex items-center gap-2 font-black text-[#000000]"><Users size={20} /> 5M+ PARTNERS</div>
                    <div className="flex items-center gap-2 font-black text-[#000000]"><Trophy size={20} /> TOP LOGISTICS AWARD</div>
                </div> */}

            </div>
        </section>
    );
};

export default About;