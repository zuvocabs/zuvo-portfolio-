import React from 'react';
import { motion } from 'framer-motion';
import { 
    Mail, Phone, MapPin, Send, MessageSquare, 
    User, ChevronDown, Car, Briefcase, Crown, Box 
} from 'lucide-react';

const ContactSection = () => {
    return (
        <section id="contact" className="py-14 px-6 bg-white overflow-hidden">
            <div className="max-w-[1450px] mx-auto">

                {/* Header Text */}
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[#015B97] font-bold tracking-[0.2em] uppercase text-sm"
                    >
                        Get In Touch
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-semibold text-[#000000] mt-4 tracking-tight"
                    >
                        Let's start a <span className="text-[#015B97]">conversation.</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 lg:gap-16 items-start">

                    {/* LEFT SIDE: CONTACT FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-[#e6e6e6]/20 p-8 md:p-12 rounded-[2rem] border border-[#e6e6e6]/50 shadow-sm"
                    >
                        <form className="space-y-6">
                            
                            {/* Row 1: Name & Phone */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#000000]/60 ml-1">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#015B97]" size={18} />
                                        <input
                                            type="text"
                                            placeholder="Enter Your Name"
                                            className="w-full bg-white border border-[#e6e6e6] rounded-xl pl-12 pr-5 py-4 focus:outline-none focus:border-[#015B97] transition-all text-[#000000]"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#000000]/60 ml-1">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#015B97]" size={18} />
                                        <input
                                            type="tel"
                                            placeholder="Enter Your Mobile Number"
                                            className="w-full bg-white border border-[#e6e6e6] rounded-xl pl-12 pr-5 py-4 focus:outline-none focus:border-[#015B97] transition-all text-[#000000]"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Row 2: Email & Services Dropdown */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#000000]/60 ml-1">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#015B97]" size={18} />
                                        <input
                                            type="email"
                                            placeholder="Enter Your Email"
                                            className="w-full bg-white border border-[#e6e6e6] rounded-xl pl-12 pr-5 py-4 focus:outline-none focus:border-[#015B97] transition-all text-[#000000]"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#000000]/60 ml-1">Our Services</label>
                                    <div className="relative">
                                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-[#015B97]" size={18} />
                                        <select className="w-full bg-white border border-[#e6e6e6] rounded-xl pl-12 pr-10 py-4 focus:outline-none focus:border-[#015B97] appearance-none transition-all text-[#000000] cursor-pointer">
                                            <option value="">Select a Service</option>
                                            <option value="elite">Elite Ride Booking</option>
                                            <option value="corporate">Corporate Travel</option>
                                            <option value="luxury">Luxury Rental</option>
                                            <option value="rapid">Rapid Delivery</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#000000]/30 pointer-events-none" size={18} />
                                    </div>
                                </div>
                            </div>

                            {/* Message Area */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#000000]/60 ml-1">Message</label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-5 text-[#015B97]" size={18} />
                                    <textarea
                                        rows="4"
                                        placeholder="How can we help you?"
                                        className="w-full bg-white border border-[#e6e6e6] rounded-xl pl-12 pr-5 py-4 focus:outline-none focus:border-[#015B97] transition-all text-[#000000] resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            <button className="w-full bg-[#015B97] text-white font-bold py-5 rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#015B97]/20">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>

                    {/* RIGHT SIDE: CONTACT DETAILS */}
                    <div className="space-y-8 mt-10">

                        {/* Detail Cards */}
                        {[
                            {
                                icon: <Phone className="text-[#015B97]" />,
                                title: "Call Us",
                                value: "+91 90032 41214",
                                desc: "Mon-Fri from 9am to 6pm"
                            },
                            {
                                icon: <Mail className="text-[#015B97]" />,
                                title: "Email Us",
                                value: "support@zuvohub.com",
                                desc: "Our team will respond within 24h"
                            },
                            {
                                icon: <MapPin className="text-[#015B97]" />,
                                title: "Office",
                                value: "1st Floor D Block (Module 115, TIDEL Park, 4, SH 49A, Tharamani, Chennai, Greater Chennai, Tamil Nadu 600113",
                                desc: "Come visit our headquarters"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-6 p-6 rounded-2xl hover:bg-[#e6e6e6]/30 transition-all group border border-transparent hover:border-[#e6e6e6]"
                            >
                                <div className="w-14 h-14 shrink-0 bg-[#e6e6e6] rounded-xl flex items-center justify-center group-hover:bg-[#015B97]/10 transition-colors">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-[#000000]/40 font-bold text-xs uppercase tracking-widest mb-1">{item.title}</h4>
                                    <p className="text-[#000000] text-xl font-semibold mb-1">{item.value}</p>
                                    <p className="text-[#000000]/50 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;