import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeSEO = {
  '/': {
    title: 'ZUVO INDIA PVT. LTD. — Connecting Every Journey | Corporate Group',
    description: 'ZUVO India Pvt. Ltd. is a diversified corporate conglomerate operating across Urban Mobility, Circular Economy, Wholesale B2B Commerce, and Smart Consumer Electronics.',
    keywords: 'ZUVO, ZUVO India, Zuvo India Pvt Ltd, Zuvo Hub, zuvohub, Zuvo Group, Zuvo Cabs, Allzon, Digiinova, UsedQ, corporate conglomerate India, mobility company Chennai, TIDEL Park companies, startup ecosystem Chennai'
  },
  '/about': {
    title: 'About Us — Corporate Vision & Mission | ZUVO India Pvt. Ltd.',
    description: 'Learn about ZUVO India Pvt. Ltd., our institutional values, corporate governance, and multi-business enterprise journey headquartered in Chennai.',
    keywords: 'about zuvo, zuvo india corporate background, zuvo founders, TIDEL Park corporate, indian tech conglomerate, mission vision values zuvo, business portfolio india'
  },
  '/businesses': {
    title: 'Our Businesses & Strategic Verticals | ZUVO India Pvt. Ltd.',
    description: 'Explore the 4 strategic pillars of ZUVO: Mobility & Transportation, Consumer Commerce, Wholesale & B2B Distribution, and Digital Innovation.',
    keywords: 'zuvo businesses, mobility vertical, consumer retail platform, B2B wholesale marketplace, circular electronics trade, smart consumer tech, diversified corporate group'
  },
  '/ecosystem': {
    title: 'The ZUVO Interconnected Ecosystem | Collaborative Commerce & Mobility',
    description: 'Discover how ZUVO connects urban transport, certified secondary commerce, wholesale platforms, and smart entertainment into a unified ecosystem.',
    keywords: 'zuvo ecosystem, connected commerce, digital synergy, smart mobility ecosystem, unified customer network, omnichannel wholesale supply'
  },
  '/technology': {
    title: 'Technology & Digital Architecture | ZUVO India Pvt. Ltd.',
    description: 'High-concurrency cloud engineering, AI routing algorithms, distributed infrastructure, and microservice architectures powering ZUVO.',
    keywords: 'zuvo tech stack, ride dispatch algorithm, AI route optimization, high concurrency cloud, microservices architecture, scalable enterprise systems'
  },
  '/digital-solutions': {
    title: 'Digital Solutions & Enterprise Innovation | Digiinova by ZUVO',
    description: 'Custom enterprise software, modern cloud platforms, mobile application ecosystems, and IT modernization solutions.',
    keywords: 'digiinova, enterprise software solutions, custom cloud applications, IT modernization India, mobile app development Chennai, enterprise digital transformation'
  },
  '/leadership': {
    title: 'Executive Leadership & Board of Directors | ZUVO India Pvt. Ltd.',
    description: 'Meet the executive leadership and governing board driving ZUVO India forward: Founder Mr. Udaya Kumar and CEO Mrs. U. Savitha.',
    keywords: 'zuvo leadership, Udaya Kumar founder, U. Savitha CEO, board of directors zuvo, executive team chennai, corporate governance zuvo india'
  },
  '/people': {
    title: 'Our People & Culture | Empowering Talent at ZUVO India',
    description: 'Our people drive our excellence. Learn about our inclusive engineering, operations, and leadership culture across India.',
    keywords: 'zuvo team, company culture, life at zuvo, engineering teams chennai, workplace innovation, talent empowerment india'
  },
  '/partnerships': {
    title: 'Strategic Partnerships & Investor Relations | ZUVO India',
    description: 'Collaborate with ZUVO India. Partner with us across fleet operations, supply chains, technology licensing, and institutional alliances.',
    keywords: 'zuvo partnerships, fleet operator partnership, B2B supplier alliance, institutional investors zuvo, corporate tie-ups india, business collaboration chennai'
  },
  '/careers': {
    title: 'Careers at ZUVO India — Build the Future of Mobility & Commerce',
    description: 'Join our high-impact teams at TIDEL Park Chennai. Explore open opportunities across engineering, product management, and operations.',
    keywords: 'zuvo careers, jobs at zuvo, tech jobs chennai, TIDEL park openings, software developer jobs chennai, mobility startup hiring, product manager careers'
  },
  '/contact': {
    title: 'Contact Corporate Desk — TIDEL Park, Chennai | ZUVO India',
    description: 'Get in touch with ZUVO India Pvt. Ltd. corporate headquarters at TIDEL Park, Tharamani, Chennai. Phone: +91 90032 41214.',
    keywords: 'contact zuvo, zuvo phone number, zuvo email address, TIDEL park module 115 address, corporate headquarters chennai, support zuvocabs'
  },
  '/businesses/zuvo-cabs': {
    title: 'Zuvo Cabs — Zero-Commission Ride Hailing & Urban Mobility | ZUVO India',
    description: 'Affordable, transparent cab, auto, and bike rides across India. Zero driver commission, direct earnings, and reliable daily passenger travel.',
    keywords: 'zuvo cabs, zero commission taxi, cab booking chennai, auto booking online, bike taxi india, affordable ride hailing, best taxi service tamil nadu, rider app, driver zero commission app'
  },
  '/businesses/digiinova': {
    title: 'Digiinova — Advanced Software Engineering & Cloud Platforms | ZUVO India',
    description: 'Enterprise digital transformation, high-scale application engineering, cloud infrastructure, and modern IT delivery.',
    keywords: 'digiinova chennai, software engineering services, cloud native development, web application developers, mobile app agency, digital transformation solutions'
  },
  '/businesses/usedq': {
    title: 'UsedQ — Certified Circular Electronics Marketplace | ZUVO India',
    description: 'Buy and sell authenticated, warranty-backed pre-owned smartphones, laptops, and gadgets through circular trade.',
    keywords: 'usedq, refurbished phones india, second hand laptops chennai, certified pre-owned gadgets, buy used iphone india, warranty refurbished electronics, circular economy gadgets'
  },
  '/businesses/allzon': {
    title: 'Allzon — Omnichannel Retail & Consumer Commerce | ZUVO India',
    description: 'Direct-to-consumer digital marketplace offering authentic lifestyle, essentials, and electronics with lightning-fast delivery.',
    keywords: 'allzon, online shopping india, ecommerce marketplace chennai, fast delivery shopping, lifestyle electronics online, direct to consumer retail'
  },
  '/businesses/allzon-b2b': {
    title: 'Allzon B2B — Bulk Wholesale Supply & Merchant Distribution | ZUVO India',
    description: 'Empowering Indian retailers and bulk suppliers with transparent pricing, credit financing, and verified wholesale goods.',
    keywords: 'allzon b2b, wholesale supplier india, bulk buying portal, merchant distributor chennai, b2b marketplace india, wholesale electronics FMCG supply'
  },
  '/businesses/allzon-supplier': {
    title: 'Allzon Supplier Portal — Direct Manufacturer & Wholesale Ingress',
    description: 'Direct manufacturer and distributor ingress for nationwide order fulfillment and verified wholesale dispatch.',
    keywords: 'allzon supplier, manufacturer onboarding portal, supplier registration india, wholesale vendor portal, supply chain network'
  },
  '/businesses/zuvo-android-tv': {
    title: 'Zuvo Android TV — 4K UHD Smart Entertainment & Consumer Tech | ZUVO India',
    description: 'Immersive 4K visual clarity, Android TV operating ecosystem, and smart connected living manufactured by ZUVO.',
    keywords: 'zuvo android tv, 4k smart tv india, best budget 4k tv, android tv chennai, smart consumer electronics, led smart screens, entertainment operating system'
  },
  '/privacy-policy': {
    title: 'Privacy Policy — User Data Protection & Compliance | ZUVO India',
    description: 'Official privacy statement and data governance policy of ZUVO India Pvt. Ltd. and its affiliated operating platforms.',
    keywords: 'privacy policy zuvo, data governance, security compliance, user information policy'
  },
  '/terms-and-conditions': {
    title: 'Terms and Conditions — Legal & Commercial Terms | ZUVO India',
    description: 'Terms of service, user agreements, and commercial governing conditions for all ZUVO India web and mobile applications.',
    keywords: 'terms and conditions zuvo, user terms of service, legal commercial terms, ride terms'
  },
  '/refund-policy': {
    title: 'Refund Policy — Transparent Dispute Resolution | ZUVO India',
    description: 'Customer consumer protection, cancellations, and fair refund policies across ZUVO operating services.',
    keywords: 'refund policy zuvo, ride cancellation refund, dispute resolution, customer guarantee'
  }
};

export default function RouteSEO() {
  const location = useLocation();

  useEffect(() => {
    const meta = routeSEO[location.pathname] || routeSEO['/'];
    document.title = meta.title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', meta.description);
    }

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && meta.keywords) {
      metaKeywords.setAttribute('content', meta.keywords);
    }

    // Update OpenGraph Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', meta.title);
    }
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', meta.description);
    }
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://zuvohub.com${location.pathname}`);
    }

    // Update Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://zuvohub.com${location.pathname}`);
    }
  }, [location.pathname]);

  return null;
}
