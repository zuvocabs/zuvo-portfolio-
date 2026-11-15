import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, Award, Users } from 'lucide-react';
import { companyInfo, businessesData } from '../data/zuvoData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);
  const [peopleDropdownOpen, setPeopleDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setBusinessDropdownOpen(false);
    setPeopleDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 lg:px-12 py-3.5 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-gray-200/80 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Authentic Brand Logo - Clean curved black badge */}
        <Link to="/" className="flex items-center group shrink-0" aria-label="ZUVO Home">
          <div className="h-10 sm:h-11 px-3 sm:px-3.5 py-1.5 rounded-xl bg-black border border-white/20 shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400/40 group-hover:shadow-[0_4px_16px_rgba(0,180,255,0.2)] overflow-hidden">
            <img
              src="/zuvo-hero-pvt-ltd-black.png"
              alt="ZUVO India Pvt. Ltd."
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-1.5 lg:gap-2">
          <Link
            to="/about"
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
              location.pathname === '/about'
                ? 'text-[#015B97] bg-[#015B97]/20 font-bold border border-[#015B97]/30'
                : 'text-[#5F5F6E] hover:text-white hover:bg-white/5'
            }`}
          >
            About Us
          </Link>

          {/* Our Businesses Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setBusinessDropdownOpen(true)}
            onMouseLeave={() => setBusinessDropdownOpen(false)}
          >
            <Link
              to="/businesses"
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                location.pathname.startsWith('/businesses')
                  ? 'text-[#015B97] bg-[#015B97]/20 font-bold border border-[#015B97]/30'
                  : 'text-[#5F5F6E] hover:text-white hover:bg-white/5'
              }`}
            >
              Our Businesses
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${
                  businessDropdownOpen ? 'rotate-180 text-[#015B97]' : 'text-gray-500'
                }`}
              />
            </Link>

            {businessDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[720px] z-50">
                <div className="rounded-2xl p-6 border border-gray-200/80 shadow-2xl bg-white/95 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150">
                  <div className="pb-3 mb-3 border-b border-gray-200/80 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-[#17171D]">Business Portfolio</h4>
                      <p className="text-xs text-[#686875]">Operating enterprises across four market sectors</p>
                    </div>
                    <Link
                      to="/businesses"
                      className="text-xs font-semibold text-[#015B97] hover:underline flex items-center gap-1"
                    >
                      <span>View All</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {businessesData.map((biz) => (
                      <Link
                        key={biz.id}
                        to={`/businesses/${biz.id}`}
                        className="p-3 rounded-xl border border-gray-100 hover:border-[#015B97]/40 hover:bg-gray-50 transition-all flex items-start gap-3 group/item"
                      >
                        <div className="w-9 h-9 rounded-lg bg-black border border-gray-200/80 flex items-center justify-center p-1 shrink-0 group-hover/item:border-[#0084D1]/50 overflow-hidden shadow-xs">
                          <img src={biz.image || biz.logo} alt={biz.name} className="w-full h-full object-contain" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-[#17171D] group-hover/item:text-[#015B97] flex items-center gap-1 transition-colors">
                            <span className="truncate">{biz.name}</span>
                          </div>
                          <div className="text-[11px] text-[#686875] truncate mt-0.5">{biz.tagline || biz.shortDesc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/ecosystem"
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
              location.pathname === '/ecosystem'
                ? 'text-[#015B97] bg-[#015B97]/20 font-bold border border-[#015B97]/30'
                : 'text-[#5F5F6E] hover:text-[#17171D] hover:bg-black/5'
            }`}
          >
            Our Ecosystem
          </Link>

          {/* People & Leadership Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPeopleDropdownOpen(true)}
            onMouseLeave={() => setPeopleDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                location.pathname === '/leadership' || location.pathname === '/people'
                  ? 'text-[#015B97] bg-[#015B97]/20 font-bold border border-[#015B97]/30'
                  : 'text-[#5F5F6E] hover:text-[#17171D] hover:bg-black/5'
              }`}
            >
              People & Culture
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${
                  peopleDropdownOpen ? 'rotate-180 text-[#015B97]' : 'text-gray-500'
                }`}
              />
            </button>

            {peopleDropdownOpen && (
              <div className="absolute top-full left-0 pt-2.5 w-60 z-50">
                <div className="rounded-2xl p-2.5 border border-gray-200/80 shadow-2xl bg-white/95 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150 space-y-1">
                  <Link
                    to="/leadership"
                    className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-gray-50 text-xs text-[#5F5F6E] hover:text-[#015B97] transition-colors"
                  >
                    <Award size={16} className="text-[#015B97] shrink-0" />
                    <div>
                      <div className="font-bold text-[#17171D]">Leadership</div>
                      <div className="text-[10px] text-[#686875]">Founder Mr. Udaya Kumar & CEO Ms. Savitha U</div>
                    </div>
                  </Link>

                  <Link
                    to="/people"
                    className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-gray-50 text-xs text-[#5F5F6E] hover:text-[#015B97] transition-colors"
                  >
                    <Users size={16} className="text-[#015B97] shrink-0" />
                    <div>
                      <div className="font-bold text-[#17171D]">Our People</div>
                      <div className="text-[10px] text-[#686875]">Teams & Workplace Culture</div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/partnerships"
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
              location.pathname === '/partnerships'
                ? 'text-[#015B97] bg-[#015B97]/20 font-bold border border-[#015B97]/30'
                : 'text-[#5F5F6E] hover:text-white hover:bg-white/5'
            }`}
          >
            Partnerships
          </Link>

          <Link
            to="/careers"
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
              location.pathname === '/careers'
                ? 'text-[#015B97] bg-[#015B97]/20 font-bold border border-[#015B97]/30'
                : 'text-[#5F5F6E] hover:text-white hover:bg-white/5'
            }`}
          >
            Careers
          </Link>

          <Link
            to="/contact"
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
              location.pathname === '/contact'
                ? 'text-[#015B97] bg-[#015B97]/20 font-bold border border-[#015B97]/30'
                : 'text-[#5F5F6E] hover:text-white hover:bg-white/5'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Clean Header Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            to="/partnerships"
            className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#015B97] hover:bg-[#0084D1] shadow-md shadow-[#015B97]/30 transition-all transform hover:-translate-y-0.5"
          >
            Partner With ZUVO
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#17171D] hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden mt-3 p-5 rounded-2xl border border-gray-200/80 bg-white/95 backdrop-blur-2xl flex flex-col gap-2 shadow-2xl animate-in fade-in duration-150">
          <div className="grid grid-cols-2 gap-2 mb-2">
            <Link
              to="/businesses"
              className="text-center py-2.5 px-2 rounded-xl text-[11px] font-bold uppercase tracking-wider text-white bg-white/5 border border-gray-200/80"
            >
              Our Businesses
            </Link>
            <Link
              to="/partnerships"
              className="text-center py-2.5 px-2 rounded-xl text-[11px] font-bold uppercase tracking-wider text-white bg-[#015B97] shadow-sm"
            >
              Partner With Us
            </Link>
          </div>

          <Link to="/about" className="px-3 py-2 rounded-lg text-xs font-semibold text-[#5F5F6E] hover:bg-white/5 hover:text-white">
            About Us
          </Link>
          <Link to="/businesses" className="px-3 py-2 rounded-lg text-xs font-semibold text-[#015B97] bg-[#015B97]/20 border border-[#015B97]/30">
            Our Businesses (4 Verticals)
          </Link>
          <Link to="/ecosystem" className="px-3 py-2 rounded-lg text-xs font-semibold text-[#5F5F6E] hover:bg-white/5 hover:text-white">
            Our Ecosystem
          </Link>

          <div className="px-3 py-1 text-[11px] font-mono text-[#015B97] font-bold uppercase mt-1">
            People & Culture
          </div>
          <div className="pl-4 pr-2 space-y-1">
            <Link to="/leadership" className="block py-1.5 px-2 text-xs text-[#686875] hover:text-white">
              Executive Leadership & Board
            </Link>
            <Link to="/people" className="block py-1.5 px-2 text-xs text-[#686875] hover:text-white">
              Our People (Teams)
            </Link>
          </div>

          <Link to="/partnerships" className="px-3 py-2 rounded-lg text-xs font-semibold text-[#5F5F6E] hover:bg-white/5 hover:text-white">
            Partnerships
          </Link>
          <Link to="/careers" className="px-3 py-2 rounded-lg text-xs font-semibold text-[#5F5F6E] hover:bg-white/5 hover:text-white">
            Careers at ZUVO
          </Link>
          <Link to="/contact" className="px-3 py-2 rounded-lg text-xs font-semibold text-[#5F5F6E] hover:bg-white/5 hover:text-white">
            Contact Desk
          </Link>
        </div>
      )}
    </header>
  );
}
