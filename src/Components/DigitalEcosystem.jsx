import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Monitor, ShoppingCart, Database, CheckCircle2, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function DigitalEcosystem() {
  const [activeTab, setActiveTab] = useState('mobile');

  const categories = [
    { id: 'mobile', label: 'MOBILE APPLICATIONS', icon: Smartphone },
    { id: 'web', label: 'WEB PLATFORMS', icon: Monitor },
    { id: 'marketplaces', label: 'MARKETPLACES', icon: ShoppingCart },
    { id: 'business', label: 'BUSINESS SYSTEMS', icon: Database },
  ];

  const contentMap = {
    mobile: {
      title: "ZUVO User & Pilot Native Mobile Ecosystem",
      subtitle: "Engineered for rapid ride booking, accurate GPS tracking, and pilot dispatch efficiency.",
      items: [
        {
          name: "ZUVO Customer Mobility App",
          desc: "Allows passengers to book local rides, choose vehicle categories (Cab XL, Sedan, Auto), track drivers in real-time, and pay securely.",
          features: ["Instant cab & auto booking", "Live telemetry route sharing", "Multi-mode digital payments", "24/7 in-app emergency support"]
        },
        {
          name: "ZUVO Pilot Driver Partner App",
          desc: "Dedicated driver application providing transparent trip requests, navigation guidance, route optimization, and daily earnings ledger.",
          features: ["Direct trip acceptance", "Turn-by-turn navigation overlay", "Daily payout reconciliations", "Flexible driver duty schedules"]
        }
      ]
    },
    web: {
      title: "Web-Based Mobility & Transit Portals",
      subtitle: "High-uptime web services connecting travelers and dispatch centers seamlessly.",
      items: [
        {
          name: "ZUVO Enterprise Cloud Operations",
          desc: "Centralized cloud operations interface for fleet scheduling, zone management, trip analytics, and regional driver partner support.",
          features: ["Central fleet telemetry", "Dynamic surge & zone management", "Customer grievance resolution", "Multi-city operations hub"],
          image: "/2.webp",
          caption: "ZUVO Enterprise Operations & Web System"
        },
        {
          name: "ZUVO Cabs Online Web Booker",
          desc: "Lightweight, responsive web booking enabling users to schedule airport pickups, outstation rentals, and local rides without prior app download.",
          features: ["Zero-install quick bookings", "Corporate billing accounts", "Outstation roundtrip planning", "SMS & WhatsApp ride tracking"],
          image: "/cab-xl.webp",
          caption: "ZUVO CABS Ride Services Fleet"
        }
      ]
    },
    marketplaces: {
      title: "Consumer & Automotive Marketplaces",
      subtitle: "Modern e-commerce infrastructure supporting retail transactions and circular goods.",
      items: [
        {
          name: "USEDQ Circular Marketplace",
          desc: "Safe digital classifieds and verified peer-to-peer trading platform for smartphones, laptops, electronics, and gadgets.",
          features: ["Strict identity verification", "Fraud-resistant in-app chat", "Fair market price estimator", "Local pickup safety guidelines"],
          image: "/parcel-1.webp",
          caption: "USEDQ Verified Delivery & Goods Fulfillment"
        },
        {
          name: "ALLZON Automotive Retail",
          desc: "Comprehensive direct-to-consumer store for vehicle infotainment systems, LED headlights, interior trims, and car styling kits.",
          features: ["Direct OEM fitment search", "Audio & Android screen bundles", "Pan-India express delivery", "Hassle-free return guarantees"],
          image: "/cab.webp",
          caption: "ALLZON Automotive Aftermarket & Infotainment"
        }
      ]
    },
    business: {
      title: "Enterprise Wholesale & Electronics Ecosystem",
      subtitle: "Digital backbone for bulk procurement and smart living-room experiences.",
      items: [
        {
          name: "ALLZON B2B Wholesale & Supplier Portal",
          desc: "Dual portal powering wholesale distributors with factory-direct pricing, volume tiers, automated GST tax invoices, and supplier SKU tools.",
          features: ["Tiered bulk sourcing catalog", "Automated GST purchase ledger", "Supplier inventory upload studio", "Container and carton freight tracking"],
          image: "/parcel-2.webp",
          caption: "ALLZON B2B Bulk Commercial Logistics"
        },
        {
          name: "ZUVO Android TV Smart Ecosystem",
          desc: "Modern consumer television line offering certified Google TV OS, quantum color panels, and Dolby Atmos audio across 24\" to 55\" screens.",
          features: ["Google Assistant voice remote", "Pre-loaded streaming apps", "Quantum panel color fidelity", "Dealership and service network"],
          image: "/hero.png",
          caption: "ZUVO Connected Consumer Ecosystem"
        }
      ]
    }
  };

  const currentData = contentMap[activeTab];

  return (
    <section id="ecosystem" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-transparent text-[#17171D] overflow-hidden border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          badge="Technological Depth"
          title="Technology That Connects Every Experience"
          subtitle="Explore the digital architecture powering ZUVO: from consumer smartphones and pilot cockpits to B2B wholesale portals and smart TV hardware."
          theme="light"
        />

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? 'bg-[#015B97] text-white border-[#015B97] shadow-md shadow-[#015B97]/20'
                    : 'bg-white/80 backdrop-blur-md text-[#5F5F6E] border-white/90 hover:text-[#015B97] hover:bg-white'
                }`}
              >
                <Icon size={16} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Tab Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl font-bold text-[#17171D] tracking-tight">{currentData.title}</h3>
              <p className="text-[#5F5F6E] text-sm mt-2">{currentData.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {currentData.items.map((item, idx) => (
                <div
                  key={idx}
                  className="liquid-glass-card liquid-glass-card-hover rounded-3xl p-7 sm:p-9 flex flex-col justify-between overflow-hidden group"
                >
                  <div className="absolute -top-16 -right-16 w-44 h-44 bg-[#015B97]/10 rounded-full blur-2xl group-hover:bg-[#015B97]/15 transition-all duration-500 pointer-events-none" />
                  <div className="relative z-10">
                    {/* Visual Asset Container (shown only when image is defined) */}
                    {item.image && (
                      <div className="relative rounded-2xl overflow-hidden bg-white/90 backdrop-blur-md border border-white/90 mb-6 h-64 flex items-center justify-center p-4 shadow-xs">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        {item.caption && (
                          <span className="absolute bottom-3 left-4 z-20 text-[11px] font-mono text-[#17171D] bg-white/90 px-3 py-1 rounded-lg border border-white/90 shadow-xs backdrop-blur-md">
                            {item.caption}
                          </span>
                        )}
                      </div>
                    )}

                    <h4 className="text-xl font-bold text-[#17171D] group-hover:text-[#015B97] transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-[#5F5F6E] text-sm mt-2 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="mt-5 space-y-2">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-xs text-[#5F5F6E]">
                          <CheckCircle2 size={14} className="text-[#015B97] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100/80 flex items-center justify-between text-xs text-[#686875] relative z-10">
                    <span>Verified ZUVO Platform Architecture</span>
                    <span className="text-[#015B97] font-mono text-[10px] uppercase font-bold">Active Platform</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
