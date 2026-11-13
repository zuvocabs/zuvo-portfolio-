import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { companyInfo, businessesData, businessVerticals } from '../data/zuvoData';

export default function Footer() {
  return (
    <footer className="relative bg-transparent text-[#17171D] pt-20 pb-12 overflow-hidden">
      {/* Subtle Ambient Glass Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-200/80">
          {/* Column 1: Corporate Profile & Group Identity */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            <Link to="/" className="flex items-center group">
              <div className="h-11 px-3.5 py-1.5 rounded-xl bg-black border border-white/20 shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400/40 overflow-hidden">
                <img
                  src="/zuvo-hero-pvt-ltd-black.png"
                  alt="ZUVO India Pvt. Ltd."
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200/80 text-[#686875] text-xs font-semibold tracking-wider uppercase w-fit shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#015B97]"></span>
              Est. {companyInfo.establishedYear} • {companyInfo.corporateMotto}
            </div>

            <p className="text-[#686875] text-sm leading-relaxed">
              Founded in 2025 by Founder <strong>{companyInfo.founder.name}</strong> and led by CEO <strong>{companyInfo.ceo.name}</strong>, ZUVO India Pvt. Ltd. operates as a diversified parent group stewarding ventures across mobility, consumer commerce, wholesale marketplaces, and smart electronics.
            </p>

            {/* Quick Pathways */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <Link
                to="/businesses"
                className="px-3.5 py-1.5 rounded-lg bg-white border border-gray-200/80 text-[#17171D] hover:border-[#015B97] hover:text-[#015B97] transition-colors shadow-xs font-medium"
              >
                Explore Businesses
              </Link>
              <Link
                to="/partnerships"
                className="px-3.5 py-1.5 rounded-lg bg-[#015B97] text-white hover:bg-[#6345C4] transition-colors shadow-xs font-medium"
              >
                Partner With ZUVO
              </Link>
            </div>
          </div>

          {/* Column 2: Corporate & Culture Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#17171D] mb-5">
              Corporate & Culture
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-[#686875] hover:text-[#015B97] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#686875] hover:text-[#015B97] transition-colors">
                  About Us (Parent Group)
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="text-[#686875] hover:text-[#015B97] transition-colors">
                  Executive Leadership & Board
                </Link>
              </li>
              <li>
                <Link to="/people" className="text-[#686875] hover:text-[#015B97] transition-colors">
                  Our People & Teams
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-[#686875] hover:text-[#015B97] transition-colors">
                  Careers & Vacancies
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-[#686875] hover:text-[#015B97] transition-colors">
                  Technology & Innovation
                </Link>
              </li>
              <li>
                <Link to="/digital-solutions" className="text-[#686875] hover:text-[#015B97] transition-colors">
                  Digital Solutions
                </Link>
              </li>
              <li>
                <Link to="/partnerships" className="text-[#686875] hover:text-[#015B97] transition-colors">
                  Partnerships Desk
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#686875] hover:text-[#015B97] transition-colors">
                  Contact Coordinates
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: The 4 Operating Verticals & Businesses */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#17171D] mb-5">
              Operating Portfolio
            </h3>
            <div className="space-y-4">
              {businessVerticals.map((vert) => {
                const bList = businessesData.filter((b) => b.verticalId === vert.id);
                return (
                  <div key={vert.id}>
                    <div className="text-[11px] font-mono uppercase text-[#015B97] font-bold">
                      {vert.name}
                    </div>
                    <ul className="mt-1 space-y-1">
                      {bList.map((b) => (
                        <li key={b.id} className="flex items-center justify-between group text-xs">
                          <Link
                            to={`/businesses/${b.slug}`}
                            className="text-[#686875] group-hover:text-[#17171D] transition-colors"
                          >
                            {b.name}
                          </Link>
                          <a
                            href={b.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#686875] group-hover:text-[#015B97] p-1"
                            title={`Open ${b.name} website`}
                          >
                            <ExternalLink size={11} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 4: Registered Headquarters & Verified Coordinates */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#17171D] mb-1">
              Registered Headquarters
            </h3>

            <div className="flex items-start gap-3 text-xs text-[#686875] leading-relaxed">
              <MapPin size={18} className="text-[#015B97] shrink-0 mt-0.5" />
              <span>{companyInfo.address}</span>
            </div>

            <div className="pt-2 space-y-2.5 text-xs">
              <div className="flex items-center gap-3 text-[#686875]">
                <Mail size={16} className="text-[#015B97] shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-[#015B97] transition-colors"
                >
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-[#686875]">
                <Phone size={16} className="text-[#015B97] shrink-0" />
                <div>
                  <span className="block text-[#686875] text-[10px] uppercase font-semibold">Contact Phone</span>
                  <a href="tel:+919003241214" className="hover:text-[#015B97] transition-colors font-medium">
                    {companyInfo?.phone || "+91 90032 41214"}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-[#686875] flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[#015B97]" />
              <span>Incorporated Corporate Entity in India (Est. 2025)</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#686875] gap-4">
          <p>© {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-5 text-[#686875]">
            <Link to="/privacy-policy" className="hover:text-[#015B97] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-[#015B97] transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/refund-policy" className="hover:text-[#015B97] transition-colors">
              Refund Policy
            </Link>
            <a
              href="https://www.digiinova.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#015B97] transition-colors flex items-center gap-1"
            >
              digiinova.com <ArrowUpRight size={11} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
