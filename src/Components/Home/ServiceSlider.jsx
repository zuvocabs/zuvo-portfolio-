import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Briefcase, Crown, Box, ArrowRight } from 'lucide-react';

const services = [
    {
        id: 1,
        title: "Elite Ride Booking",
        desc: "Get premium transport at your doorstep with professional chauffeurs.",
        icon: <Car size={32} />,
        image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Corporate Travel",
        desc: "Tailored mobility solutions for businesses and executive teams.",
        icon: <Briefcase size={32} />,
        image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Luxury Rental",
        desc: "Experience high-end luxury vehicles for your special occasions.",
        icon: <Crown size={32} />,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Rapid Delivery",
        desc: "Secure and lightning-fast parcel delivery across the city.",
        icon: <Box size={32} />,
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop"
    }
];

const ServiceSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    // Auto-slider logic with progress bar
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
                    return 0;
                }
                return prev + 0.5; // Speed of loading
            });
        }, 25); // Refresh rate

        return () => clearInterval(timer);
    }, [activeIndex]);

    const handleSelect = (index) => {
        setActiveIndex(index);
        setProgress(0);
    };

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-[#000000] text-5xl font-semibold tracking-tight mb-4">
                        Our Premium <span className="text-[#015B97]">Services</span>
                    </h2>
                    <p className="text-[#000000]/50 text-lg max-w-xl">
                        Explore our world-class mobility solutions designed for the modern era.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Services List with Progress Bars */}
                    <div className="space-y-4">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                onClick={() => handleSelect(index)}
                                className={`relative cursor-pointer p-6 rounded-2xl transition-all duration-300 ${activeIndex === index ? 'bg-[#f8f7ff]' : 'hover:bg-gray-50'
                                    }`}
                            >
                                <div className="flex items-center gap-6 relative z-10">
                                    <div className={`p-4 rounded-xl transition-colors ${activeIndex === index ? 'bg-[#015B97] text-white' : 'bg-[#e6e6e6]/50 text-[#000000]'
                                        }`}>
                                        {service.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`text-xl font-bold mb-1 ${activeIndex === index ? 'text-[#000000]' : 'text-[#000000]/40'
                                            }`}>
                                            {service.title}
                                        </h3>
                                        {activeIndex === index && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                className="text-[#000000]/60 text-sm"
                                            >
                                                {service.desc}
                                            </motion.p>
                                        )}
                                    </div>
                                </div>

                                {/* Loading Progress Bar Background */}
                                {activeIndex === index && (
                                    <div className="absolute bottom-0 left-0 h-1 bg-[#e6e6e6] w-full rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-[#015B97]"
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Side: Image Display */}
                    <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#015B97]/10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.6 }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={services[activeIndex].image}
                                    alt={services[activeIndex].title}
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-transparent to-transparent"></div>

                                <div className="absolute bottom-10 left-10 right-10">
                                    <button className="bg-white text-[#000000] px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#015B97] hover:text-white transition-all group">
                                        Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceSlider;