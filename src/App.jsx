import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import RouteSEO from './components/RouteSEO'

// Main Corporate Pages
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import BusinessesPage from './pages/BusinessesPage'
import EcosystemPage from './pages/EcosystemPage'
import TechnologyPage from './pages/TechnologyPage'
import LeadershipPage from './pages/LeadershipPage'
import PeoplePage from './pages/PeoplePage'
import PartnershipsPage from './pages/PartnershipsPage'
import CareersPage from './pages/CareersPage'
import ContactPage from './pages/ContactPage'
import DigitalSolutionsPage from './pages/DigitalSolutionsPage'

// Seven Dedicated Business Detail Pages
import ZuvoCabs from './pages/businesses/ZuvoCabs'
import Digiinova from './pages/businesses/Digiinova'
import UsedQ from './pages/businesses/UsedQ'
import Allzon from './pages/businesses/Allzon'
import AllzonB2B from './pages/businesses/AllzonB2B'
import SupplierPortal from './pages/businesses/SupplierPortal'
import ZuvoAndroidTV from './pages/businesses/ZuvoAndroidTV'

// Retained Policy Pages
import PrivacyPolicy from './Components/PrivacyPolicy'
import TermsAndConditions from './Components/TermsAndConditions'
import RefundPolicy from './Components/RefundPolicy'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteSEO />
      <div className="min-h-screen flex flex-col bg-[#F8FAFD] text-[#17171D] relative overflow-hidden">
        {/* Curving Header Blue Gradient Canopy with Soft Bottom Fade-Out - Refined & Lighter */}
        <div className="absolute top-0 left-0 right-0 h-[680px] pointer-events-none z-0 overflow-hidden">
          {/* 1. Large Smooth Arc/Curve Canopy Masked with Soft Cyan & Corporate Blue */}
          <div
            className="absolute -top-[320px] sm:-top-[340px] left-1/2 -translate-x-1/2 w-[160%] sm:w-[130%] lg:w-[115%] h-[820px] rounded-[50%] bg-gradient-to-b from-[#015B97]/28 via-[#0284d8]/18 via-cyan-400/10 to-transparent blur-[45px]"
          />

          {/* 2. Concentrated Ambient Radial Core behind Navbar & Logo - Subtle & Soft */}
          <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[950px] h-[480px] rounded-full bg-gradient-to-b from-[#015B97]/30 via-[#0091FF]/20 via-cyan-300/12 to-transparent blur-[85px]" />

          {/* 3. High-Luminance Soft Focal Spotlight on Header Title */}
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[600px] h-[280px] rounded-full bg-cyan-300/12 blur-[65px]" />

          {/* 4. Sweeping SVG Curved Wave Line & Shading for Visual Organic Curve */}
          <svg
            className="absolute top-0 left-0 w-full h-[580px] opacity-45 overflow-visible"
            viewBox="0 0 1440 580"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="headerCurveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#01426E" stopOpacity="0.15" />
                <stop offset="25%" stopColor="#015B97" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.6" />
                <stop offset="75%" stopColor="#0284d8" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#01426E" stopOpacity="0.15" />
              </linearGradient>
              <linearGradient id="headerFillGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#015B97" stopOpacity="0.16" />
                <stop offset="40%" stopColor="#0284d8" stopOpacity="0.09" />
                <stop offset="75%" stopColor="#00E5FF" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#F8FAFD" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Curving fill basin */}
            <path
              d="M 0 0 L 1440 0 L 1440 380 C 1100 480, 340 480, 0 380 Z"
              fill="url(#headerFillGrad)"
            />
            {/* Elegant curving contour glow stroke */}
            <path
              d="M 0 380 C 340 480, 1100 480, 1440 380"
              stroke="url(#headerCurveGrad)"
              strokeWidth="2"
              className="blur-[1.5px]"
            />
          </svg>

          {/* 5. Smooth Bottom Fade Veil into Page Body */}
          <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-transparent to-[#F8FAFD]" />
        </div>

        {/* Global Ambient Gradients & Architectural Micro-Grid for Full Website */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Continuous Micro Grid Texture */}
          <div
            className="absolute inset-0 opacity-[0.038]"
            style={{
              backgroundImage: `linear-gradient(#015B97 1px, transparent 1px), linear-gradient(90deg, #015B97 1px, transparent 1px)`,
              backgroundSize: '48px 48px',
            }}
          />

          {/* Subtle & Light Organic Ambient Blue Glow Across Scroll & Pages */}
          <div className="absolute top-[20%] -left-[10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#015B97]/12 via-[#0284d8]/08 to-transparent blur-[140px]" />
          <div className="absolute top-[45%] -right-[10%] w-[750px] h-[750px] rounded-full bg-gradient-to-bl from-cyan-400/10 via-[#015B97]/08 to-transparent blur-[140px]" />
          <div className="absolute top-[70%] -left-[10%] w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#01426E]/10 via-[#0284d8]/07 to-transparent blur-[140px]" />
          <div className="absolute bottom-[3%] right-[3%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#0284d8]/10 via-cyan-400/06 to-transparent blur-[140px]" />
        </div>

        <Navbar />
        <div className="flex-grow relative z-10">
          <Routes>
            {/* Core Corporate Parent Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/businesses" element={<BusinessesPage />} />
            <Route path="/ecosystem" element={<EcosystemPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/digital-solutions" element={<DigitalSolutionsPage />} />

            {/* People & Culture Routes */}
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/partnerships" element={<PartnershipsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Seven Dedicated Operating Business Pages */}
            <Route path="/businesses/zuvo-cabs" element={<ZuvoCabs />} />
            <Route path="/businesses/digiinova" element={<Digiinova />} />
            <Route path="/businesses/usedq" element={<UsedQ />} />
            <Route path="/businesses/allzon" element={<Allzon />} />
            <Route path="/businesses/allzon-b2b" element={<AllzonB2B />} />
            <Route path="/businesses/allzon-supplier" element={<SupplierPortal />} />
            <Route path="/businesses/zuvo-android-tv" element={<ZuvoAndroidTV />} />

            {/* Retained Policy Routes */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />

            {/* Fallback Catch-all Route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
