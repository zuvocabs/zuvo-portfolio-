import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Car, Bike, Navigation, Package, Star } from 'lucide-react';

import cab from '../../assets/youtoris-images/cab.webp'
import bike from '../../assets/youtoris-images/bike.webp'
import auto from '../../assets/youtoris-images/auto.webp'
import parcel from '../../assets/youtoris-images/parcel-2.webp'

const ServiceCard = ({ service, index, progress, targetScale }) => {
    // Scroll progress-ah base panni scale aagum
    const scale = useTransform(progress, [index * 0.25, 1], [1, targetScale]);
    
    return (
        <div className="sticky top-32 h-fit flex items-center justify-center mb-12 md:mb-20">
            <motion.div 
                style={{ scale }}
                className="relative w-full min-h-[500px] md:h-[60vh] bg-white rounded-[3rem] md:rounded-[4.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] border border-[#015B97]/10 overflow-hidden flex flex-col md:flex-row"
            >
                {/* Image Section: Mobile-la full-ah theriyanum, adhunala aspect ratio fix */}
                <div className="w-full md:w-1/2 h-auto aspect-video md:aspect-auto md:h-full relative overflow-hidden order-1 md:order-2">
                    <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover" 
                    />
                    {/* Glassmorphism Badge */}
                    <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-black/40 backdrop-blur-xl border border-white/20 px-4 py-2 md:px-6 md:py-3 rounded-2xl flex items-center gap-2 md:gap-3">
                        <Star size={16} fill="#015B97" className="text-[#015B97]" />
                        <span className="text-white font-black text-xs md:text-sm">4.9 Rating</span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-between relative z-10 bg-white order-2 md:order-1">
                    <div>
                        <div className="flex justify-between items-start mb-6 md:mb-10">
                            <span className="text-[#015B97] text-5xl md:text-7xl font-black opacity-10 leading-none">0{index + 1}</span>
                            <div className="bg-[#015B97]/10 p-3 md:p-4 rounded-2xl md:rounded-3xl text-[#015B97]">
                                {service.icon}
                            </div>
                        </div>
                        
                        <h3 className="text-3xl md:text-5xl font-black text-[#000000] mb-4 md:mb-6 tracking-tighter">
                            {service.title}
                        </h3>
                        <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed max-w-sm mb-6 md:mb-0">
                            {service.desc}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mt-4">

                        <motion.button 
                            whileHover={{ x: 10 }}
                            className="w-full sm:flex-1 bg-[#000000] text-white py-4 md:py-5 rounded-2xl md:rounded-3xl font-black text-base md:text-lg flex items-center justify-center gap-3 hover:bg-[#015B97] transition-all"
                        >
                            Book {service.title.split(' ')[1]} <ArrowRight size={20} />
                        </motion.button>
                    </div>
                </div>

                {/* Subtle Watermark - Mobile-la hide pannitom cleaner look-ku */}
                <div className="absolute -bottom-10 -left-10 text-[10rem] md:text-[15rem] font-black text-gray-50 -z-0 pointer-events-none select-none hidden md:block">
                    ZUVO
                </div>
            </motion.div>
        </div>
    );
};

const Services = () => {
    const container = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const services = [
        {
            title: 'Elite Cab',
            desc: 'Maximum comfort. Professional captains and premium sedans at your service.',
            image: cab,
            icon: <Car size={32} />,
        },
        {
            title: 'Rapid Bike',
            desc: 'The fastest way to zip through city traffic. Economical and swift.',
            image: bike,
            icon: <Bike size={32} />,
        },
        {
            title: 'Classic Auto',
            desc: 'Dependable and easy. Your everyday travel companion for short trips.',
            image: auto,
            icon: <Navigation size={32} className="rotate-45" />,
        },
        {
            title: 'Express Parcel',
            desc: 'Fast delivery of documents and packages. Tracked and insured.',
            image: parcel,
            icon: <Package size={32} />,
        }
    ];

    return (
        <section id="services" ref={container} className="relative bg-[#e6e6e6] py-20 px-4 md:px-6">
            
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-20 md:mb-12 text-center md:text-left">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-4 mb-4 justify-center md:justify-start"
                >
                    <div className="w-12 md:w-16 h-1 bg-[#015B97]"></div>
                    <span className="text-[#015B97] font-black text-xs md:text-sm uppercase tracking-[0.5em]">The Elite Experience</span>
                </motion.div>
                <h2 className="text-5xl md:text-[8rem] font-black text-[#000000] leading-[1] md:leading-[0.85] tracking-tighter">
                    CHOOSE <br className="hidden md:block"/> <span className="text-white text-stroke">YOUR WAY.</span>
                </h2>
            </div>

            {/* Stacking Section */}
            <div className="max-w-[1400px] mx-auto">
                {services.map((service, i) => {
                    // Stacking scale logic (adjust 0.04 to control how much cards shrink)
                    const targetScale = 1 - ((services.length - i) * 0.04);
                    return (
                        <ServiceCard 
                            key={i} 
                            index={i} 
                            service={service} 
                            progress={scrollYProgress}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>

            <style jsx>{`
                .text-stroke {
                    -webkit-text-stroke: 1.5px #000000;
                    color: transparent;
                }
                @media (min-width: 768px) {
                    .text-stroke { -webkit-text-stroke: 2px #000000; }
                }
            `}</style>
        </section>
    );
};

export default Services;