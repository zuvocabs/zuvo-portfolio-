import React from 'react';
import { motion } from 'framer-motion';
// React Icons Imports
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPhoneAlt
} from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

import logo1 from '../assets/youtoris-images/zuvohub-logo-white.png'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        services: [
            { name: 'Cab Service', href: '/#services' },
            { name: 'Bike Service', href: '/#services' },
            { name: 'Auto Service', href: '/#services' },
            { name: 'Parcel Service', href: '/#services' }
        ],
        quickLinks: [
            { name: 'Home', href: '/#home' },
            { name: 'About Us', href: '/#about' },
            { name: 'Our Services', href: '/#services' },
            { name: 'Contact Us', href: '/#contact' },
            { name: 'Privacy Policy', href: '/privacy-policy' },
            { name: 'Terms & Conditions', href: '/terms-and-conditions' },
            { name: 'Refund Policy', href: '/refund-policy' }
        ]
    };

    return (
        <footer className="bg-[#000000] text-[#e6e6e6] pt-20 pb-10 px-6 overflow-hidden border-t border-[#e6e6e6]/5 relative">
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">

                    {/* COLUMN 1: LOGO & ABOUT */}
                    <div className="space-y-8">
                        <div>
                            {/* Logo Image */}
                            <Link to="/">
                                <img
                                    src={logo1}   // 👉 replace with your logo path
                                    alt="Zuvo Cab's Logo"
                                    className="h-20 w-auto object-contain"
                                />
                            </Link>

                            <p className="mt-6 text-[#e6e6e6]/50 leading-relaxed max-w-sm">
                                Redefining urban mobility with premium services tailored for professionals and elite travelers. Experience the future of transportation today.
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {[
                                { Icon: FaInstagram, href: '#' },
                                { Icon: FaLinkedinIn, href: '#' },
                                { Icon: FaTwitter, href: '#' },
                                { Icon: FaFacebookF, href: '#' }
                            ].map((item, index) => (
                                <motion.a
                                    key={index}
                                    whileHover={{ y: -5, backgroundColor: '#015B97', borderColor: '#015B97' }}
                                    href={item.href}
                                    className="w-10 h-10 rounded-full border border-[#e6e6e6]/10 flex items-center justify-center transition-all duration-300 text-white"
                                >
                                    <item.Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* COLUMN 2: OUR SERVICES */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
                            Our Services
                            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-[#015B97]"></span>
                        </h4>
                        <ul className="space-y-4">
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <motion.a
                                        whileHover={{ x: 10, color: '#015B97' }}
                                        href={link.href}
                                        className="text-[#e6e6e6]/50 hover:text-[#015B97] transition-all flex items-center gap-2 group"
                                    >
                                        <HiArrowNarrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#015B97]" />
                                        {link.name}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 3: QUICK LINKS */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-[#015B97]"></span>
                        </h4>
                        <ul className="space-y-4">
                            {footerLinks.quickLinks.map((link, index) => (
                                <li key={index}>
                                    <motion.a
                                        whileHover={{ x: 10, color: '#015B97' }}
                                        href={link.href}
                                        className="text-[#e6e6e6]/50 hover:text-[#015B97] transition-all flex items-center gap-2 group"
                                    >
                                        <HiArrowNarrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#015B97]" />
                                        {link.name}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter / Contact Strip */}
                <div className="bg-[#e6e6e6]/5 rounded-[1rem] p-8 mb-20 border border-[#e6e6e6]/40 flex flex-col lg:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-[#015B97] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#015B97]/20">
                            <MdEmail size={28} />
                        </div>
                        <div>
                            <p className="text-xs text-[#e6e6e6]/40 uppercase font-black tracking-widest">Support Email</p>
                            <p className="text-xl font-bold text-white">support@zuvohub.com</p>
                        </div>
                    </div>

                    <div className="h-12 w-[1px] bg-[#e6e6e6]/10 hidden lg:block"></div>

                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-white/5 border border-gray-200/80 rounded-2xl flex items-center justify-center text-[#015B97]">
                            <FaPhoneAlt size={22} />
                        </div>
                        <div>
                            <p className="text-xs text-[#e6e6e6]/40 uppercase font-black tracking-widest">Direct Line</p>
                            <p className="text-xl font-bold text-white">+91 90032 41214</p>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#015B97] text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-[#015B97]/30"
                    >
                        Book Now
                    </motion.button>
                </div>

                {/* UPDATED BOTTOM BAR: Left - Center - Right */}
                <div className="pt-10 border-t border-[#e6e6e6]/5 grid grid-cols-1 md:grid-cols-3 items-center gap-6">

                    {/* LEFT: Copyright */}
                    <div className="text-[#e6e6e6]/40 text-[10px] md:text-xs font-bold uppercase tracking-widest text-center md:text-left leading-none">
                        © {currentYear} Zuvo Cab's All Rights Reserved.
                    </div>

                    {/* CENTER: Privacy Policy */}
                    <div className="flex justify-center">
                        <a href="/privacy-policy" className="text-[#e6e6e6]/40 hover:text-[#015B97] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-colors border-b border-transparent hover:border-[#015B97] pb-1">
                            Privacy Policy
                        </a>
                    </div>

                    {/* RIGHT: Designed By */}
                    <div className="text-[#e6e6e6]/40 text-[10px] md:text-xs font-bold uppercase tracking-widest text-center md:text-right">
                        Designed By <span className="text-[#015B97]">MDS DIGITAL HUB PVT LTD</span>
                    </div>
                </div>

            </div>

            {/* Background Aesthetic Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-[#015B97]/5 blur-[120px] pointer-events-none -z-0"></div>
        </footer>
    );
};

export default Footer;