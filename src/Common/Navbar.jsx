import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall , ArrowRight  } from "lucide-react";
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import zuvoLogo from '../assets/youtoris-images/zuvohub-logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Scroll panna navbar style change aagum
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/#home' },
        { name: 'Services', href: '/#services' },
        { name: 'About Us', href: '/#about' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms & Conditions', href: '/terms-and-conditions' },
        { name: 'Refund Policy', href: '/refund-policy' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 px-6 py-4 ${scrolled ? 'top-2' : 'top-0'}`}>
            <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-500 ${scrolled
                    ? 'bg-[#e6e6e6] backdrop-blur-lg border border-[#015B97] shadow-2xl py-3 px-8'
                    : 'bg-[#e6e6e6] py-2 px-4'
                }`}>
                <div className="flex justify-between items-center">

                    {/* Logo Section with Image */}
                    <Link to="/">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center cursor-pointer"
                        >
                            {/* 
                            Mapla, inga ungalaoda logo image path-ah kuduthuko. 
                            Design maaramal iruka 'h-10' (height) maintain panniruken.
                            */}
                            <img 
                                src={zuvoLogo}
                                alt="Zuvo Cab's Logo" 
                                className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-14'} w-auto object-contain`}
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative text-light font-medium hover:text-[#015B97] transition-colors group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#015B97] transition-all duration-300 group-hover:w-full"></span>
                            </motion.a>
                        ))}
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2 text-[#015B97] font-bold mr-4 cursor-pointer hover:scale-105 transition-transform">
                            <div className="bg-[#015B97]/10 p-2 rounded-full">
                                <PhoneCall size={18} />
                            </div>
                            <span className="text-sm">24/7 Support</span>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(119, 90, 218, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden md:flex overflow-hidden relative group bg-[#015B97] text-white px-8 py-3 rounded-full font-bold text-sm items-center gap-2"
                        >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform"></div>
                            
                            Get Started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        {/* Mobile Toggle */}
                        {/* <motion.button 
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)} 
                            className={`lg:hidden p-3 rounded-2xl ${
                                scrolled ? 'bg-[#015B97] text-white' : 'bg-white text-[#015B97]'
                            } shadow-lg transition-colors`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button> */}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-light">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#000000] backdrop-blur-xl mt-4 rounded-3xl overflow-hidden border border-[#015B97]/30 shadow-2xl"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-[#e6e6e6] text-xl font-semibold hover:text-[#015B97] transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;