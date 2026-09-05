import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollSection, { ScrollText, rushEase } from "../components/ScrollSection";

// Video Assets
import reel1 from "../assets/clientvideos/1.mp4";
import reel2 from "../assets/clientvideos/2.mp4";
import reel3 from "../assets/clientvideos/3.mp4";
import reel4 from "../assets/clientvideos/4.mp4";
import reel5 from "../assets/clientvideos/5.mp4";

// Web Screenshots & Images
import screenshot1 from "../assets/clientweb/1.png";
import screenshot2 from "../assets/clientweb/2.png";

// Campaign Creatives
import campaign1 from "../assets/clientcampaign/1.png";
import campaign2 from "../assets/clientcampaign/2.png";
import campaign3 from "../assets/clientcampaign/3.png";

// Service visuals for diverse mockups
import webFunnelImg from "../assets/services/websites_funnels.jpg";
import contentImg from "../assets/services/content_social.jpg";
import perfImg from "../assets/services/performance_marketing.jpg";
import saasImg from "../assets/services/saas_technology.jpg";

const clientWebsites = [
  {
    id: "arunamcatering",
    name: "Arunam Catering",
    url: "https://arunamcatering.com",
    domain: "arunamcatering.com",
    category: "Catering & Event Dining",
    tag: "Hospitality & Food",
    description: "Premium wedding and event catering platform with interactive menu previews and fast booking inquiry funnels.",
    image: webFunnelImg,
  },
  {
    id: "atrosindia",
    name: "Atros India",
    url: "https://atrosindia.com",
    domain: "atrosindia.com",
    category: "Industrial Manufacturing",
    tag: "B2B & Engineering",
    description: "High-precision fabrication and engineering portal engineered for global export inquiries and industrial specs.",
    image: screenshot1,
  },
  {
    id: "futurekidsambur",
    name: "Future Kids Ambur",
    url: "https://futurekidsambur.com",
    domain: "futurekidsambur.com",
    category: "School & Holistic Academy",
    tag: "Education Portal",
    description: "Modern educational institution portal featuring digital admissions, campus highlights, and parent communication.",
    image: campaign2,
  },
  {
    id: "gyesproperty",
    name: "GYES Property",
    url: "https://gyesproperty.com",
    domain: "gyesproperty.com",
    category: "Real Estate & Developers",
    tag: "Property Showcase",
    description: "Premium property showcase with project floorplans, location blueprints, and direct broker lead routing.",
    image: webFunnelImg,
  },
  {
    id: "gyestraders",
    name: "GYES Traders",
    url: "https://gyestraders.com",
    domain: "gyestraders.com",
    category: "Commercial Distribution",
    tag: "Wholesale & Hardware",
    description: "B2B commercial hardware & building materials catalog platform with instant WhatsApp bulk quote routing.",
    image: saasImg,
  },
  {
    id: "hsiehhsuindia",
    name: "Hsieh Hsu India",
    url: "https://hsiehhsuindia.com",
    domain: "hsiehhsuindia.com",
    category: "Industrial Machinery",
    tag: "Manufacturing Leader",
    description: "World-class industrial web experience for a global machinery manufacturer, delivering +240% qualified international inquiries.",
    image: screenshot1,
  },
  {
    id: "myhosurproperty",
    name: "My Hosur Property",
    url: "https://myhosurproperty.com",
    domain: "myhosurproperty.com",
    category: "Hyperlocal Property Search",
    tag: "Real Estate Portal",
    description: "Fast, search-driven real estate platform for residential plots, villas, and commercial property listings in Hosur.",
    image: screenshot2,
  },
  {
    id: "richifoodproducts",
    name: "Richi Food Products",
    url: "https://richifoodproducts.com",
    domain: "richifoodproducts.com",
    category: "FMCG & Confectionery",
    tag: "Food & Retail Brand",
    description: "Vibrant packaged food brand platform highlighting product catalogs, retail reach, and direct distributor partnerships.",
    image: campaign1,
  },
  {
    id: "risewithmedia",
    name: "Rise With Media",
    url: "https://risewithmedia.com",
    domain: "risewithmedia.com",
    category: "Performance Agency",
    tag: "Agency Platform",
    description: "High-performance digital agency platform engineered with modern 3D interaction design, responsive typography, and fast conversions.",
    image: contentImg,
  },
  {
    id: "royalsignsnetwork",
    name: "Royal Signs Network",
    url: "https://royalsignsnetwork.com",
    domain: "royalsignsnetwork.com",
    category: "Architectural Signage",
    tag: "Outdoor Branding",
    description: "Architectural signage and commercial branding showcase featuring LED signboards, ACP cladding, and outdoor installs.",
    image: campaign3,
  },
  {
    id: "sanjaysaiassociates",
    name: "Sanjay Sai Associates",
    url: "https://sanjaysaiassociates.com",
    domain: "sanjaysaiassociates.com",
    category: "Legal & Corporate Advisory",
    tag: "Consulting & Law",
    description: "High-trust corporate legal & financial advisory platform featuring practice breakdowns and confidential consultation bookings.",
    image: perfImg,
  },
  {
    id: "valsii",
    name: "Valsii",
    url: "https://valsii.com",
    domain: "valsii.com",
    category: "Fashion & Lifestyle",
    tag: "E-Commerce",
    description: "Boutique fashion apparel and lifestyle storefront crafted with mobile-first browsing, lookbook galleries, and fast checkout UX.",
    image: screenshot2,
  },
];

const reelVideos = [
  { id: 1, title: "Beauty & Lifestyle Reels", category: "Beauty", src: reel1 },
  { id: 2, title: "Ed Tech Training Reels", category: "Ed Tech", src: reel2 },
  { id: 3, title: "School Brand Reels", category: "Education", src: reel3 },
  { id: 4, title: "Organic Brand Reels", category: "Organic", src: reel4 },
  { id: 5, title: "Health Brand Reels", category: "Wellness", src: reel5 },
];

const campaigns = [
  { id: 1, title: "Festive E-commerce Campaign", brand: "Retail Brand", src: campaign1, metric: "3.4× ROAS" },
  { id: 2, title: "High-Intent Lead Gen Campaign", brand: "Tech Academy", src: campaign2, metric: "₹42 CPL" },
  { id: 3, title: "Brand Launch Creatives", brand: "FMCG Brand", src: campaign3, metric: "4.8× ROAS" },
];

export default function Works({ setPage }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeReel, setActiveReel] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNextSlide();
    } else if (diff < -50) {
      handlePrevSlide();
    }
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % clientWebsites.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + clientWebsites.length) % clientWebsites.length);
  };

  // 3D Card Deck Perspective Style (Identical to Home page Results Speak Louder)
  const get3DCardStyle = (diff) => {
    if (diff === 0) {
      return {
        x: 0,
        rotateY: 0,
        scale: 1,
        opacity: 1,
        zIndex: 30,
        filter: "grayscale(0%)",
        pointerEvents: "auto",
      };
    }

    if (diff === 1) {
      return {
        x: isMobile ? 320 : 440,
        rotateY: isMobile ? -28 : -35,
        scale: isMobile ? 0.88 : 0.9,
        opacity: isMobile ? 0.75 : 0.95,
        zIndex: 20,
        filter: "grayscale(100%)",
        pointerEvents: "auto",
      };
    }

    if (diff === 2) {
      return {
        x: isMobile ? 500 : 750,
        rotateY: isMobile ? -38 : -45,
        scale: isMobile ? 0.78 : 0.8,
        opacity: isMobile ? 0.25 : 0.75,
        zIndex: 10,
        filter: "grayscale(100%)",
        pointerEvents: isMobile ? "none" : "auto",
      };
    }

    if (diff === 3) {
      return {
        x: isMobile ? 650 : 1020,
        rotateY: -54,
        scale: 0.7,
        opacity: isMobile ? 0 : 0.45,
        zIndex: 5,
        filter: "grayscale(100%)",
        pointerEvents: "none",
      };
    }

    if (diff === clientWebsites.length - 1) {
      return {
        x: isMobile ? -260 : -380,
        rotateY: 36,
        scale: 0.85,
        opacity: 0,
        zIndex: 15,
        filter: "grayscale(100%)",
        pointerEvents: "none",
      };
    }

    return {
      x: isMobile ? 700 : 1200,
      rotateY: -60,
      scale: 0.6,
      opacity: 0,
      zIndex: 1,
      filter: "grayscale(100%)",
      pointerEvents: "none",
    };
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentActive = clientWebsites[activeSlide];

  return (
    <main className="bg-white pt-20 sm:pt-[88px]">
      {/* ─────────────────────────────────────────────────────────────────
          PAGE HEADER (Short & Crisp Typography)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white pt-14 pb-12 border-b border-[#eaeaea]">
        <div className="rush-container text-center max-w-3xl mx-auto">
          <ScrollText as="span" direction="up" delay={0} className="tag-bubble-cyan mb-3 inline-block">
            Case Studies
          </ScrollText>
          <ScrollText as="h1" direction="up" delay={0.08} className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#000000] font-['Varela_Round'] mb-2.5">
            Case Studies & <span className="text-[#12b7d4]">Works</span>
          </ScrollText>
          <ScrollText as="p" direction="up" delay={0.16} className="font-script text-xl sm:text-2xl text-[#12b7d4] mb-6">
            Real brands. Measurable growth.
          </ScrollText>

          {/* Quick Navigation Pills Centered */}
          <ScrollText as="div" direction="up" delay={0.24} className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => scrollToSection("client-websites")}
              className="px-5 py-2.5 rounded-full border border-black bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-[#12b7d4] hover:border-[#12b7d4] transition-colors cursor-pointer"
            >
              Client Websites
            </button>
            <button
              onClick={() => scrollToSection("reels")}
              className="px-5 py-2.5 rounded-full border border-[#eaeaea] bg-white text-xs font-bold uppercase tracking-wider text-black hover:bg-[#000000] hover:text-white transition-colors cursor-pointer"
            >
              Reels & Videos
            </button>
            <button
              onClick={() => scrollToSection("campaigns")}
              className="px-5 py-2.5 rounded-full border border-[#eaeaea] bg-white text-xs font-bold uppercase tracking-wider text-black hover:bg-[#000000] hover:text-white transition-colors cursor-pointer"
            >
              Ad Campaigns
            </button>
            <button
              onClick={() => setPage("softwares")}
              className="px-5 py-2.5 rounded-full border border-[#12b7d4]/40 bg-[#e6f9fc] text-[#087f94] text-xs font-bold uppercase tracking-wider hover:bg-[#12b7d4] hover:text-white transition-colors cursor-pointer"
            >
              SaaS Softwares →
            </button>
          </ScrollText>
        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 1: CLIENT WEBSITES (Home Page 3D Card Deck Carousel Style)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection id="client-websites" className="bg-white py-16 sm:py-20 lg:py-24 border-b border-[#eaeaea] overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 xl:gap-16">

            {/* Left Column: Big Vertically Stacked Title & Tilted Sticker Button */}
            <div className="w-full lg:w-[38%] xl:w-[35%] flex flex-col justify-center select-none flex-shrink-0 mb-6 lg:mb-0">
              <span className="tag-bubble-cyan mb-4 w-fit">
                Client Showcase
              </span>
              <div className="relative inline-block">
                <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-[6.4rem] font-black uppercase tracking-tight text-[#000000] leading-[0.88] font-['Varela_Round']">
                  CLIENT<br />
                  WEBSITES<br />
                  <span className="text-[#12b7d4]">LIVE</span>
                </h2>

                {/* Tilted Sticker Button matching Home page "Results Speak Louder" */}
                <motion.div
                  whileHover={{ scale: 1.08, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="absolute left-6 sm:left-10 top-[48%] -rotate-[5deg] bg-white text-black border-2 border-black rounded-xl px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-black uppercase tracking-wider shadow-[4px_4px_0px_rgba(0,0,0,1)] select-none z-20 pointer-events-none"
                >
                  Client Websites
                </motion.div>
              </div>

              <p className="font-script text-xl sm:text-2xl text-[#12b7d4] mt-5 mb-2">
                Crafted for speed, organic search, and high-conversion funnels.
              </p>

              {/* Status and Active Info */}
              <div className="mt-4 flex items-center gap-3">
                <span className="text-xs font-black uppercase tracking-widest text-[#888888] bg-[#f5f5f5] px-3.5 py-1.5 rounded-full border border-[#eaeaea]">
                  Live Client Deployment
                </span>
                <a
                  href={currentActive.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-black uppercase tracking-wider text-[#12b7d4] hover:underline flex items-center gap-1 font-bold"
                >
                  <span>{currentActive.domain}</span>
                  <span className="text-sm">↗</span>
                </a>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-3 mt-6">
                <button
                  type="button"
                  onClick={handlePrevSlide}
                  className="w-11 h-11 rounded-full border border-black bg-white hover:bg-black hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-sm"
                  aria-label="Previous website"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleNextSlide}
                  className="w-11 h-11 rounded-full border border-black bg-white hover:bg-black hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-sm"
                  aria-label="Next website"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <span className="text-xs font-bold text-[#888888] uppercase tracking-wider ml-1">
                  Swipe or click cards
                </span>
              </div>
            </div>

            {/* Right Column: 3D Perspective Card Deck */}
            <div className="w-full lg:w-[62%] xl:w-[65%] relative h-[520px] sm:h-[550px] lg:h-[580px] flex items-center justify-start overflow-visible [perspective:1400px]">
              <div
                className="relative w-full h-full flex items-center [transform-style:preserve-3d]"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {clientWebsites.map((ws, idx) => {
                  const diff = (idx - activeSlide + clientWebsites.length) % clientWebsites.length;
                  const isCurrent = diff === 0;
                  const cardStyle = get3DCardStyle(diff);

                  return (
                    <motion.div
                      key={ws.id}
                      animate={cardStyle}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 28,
                        mass: 0.85,
                      }}
                      style={{
                        transformStyle: "preserve-3d",
                        transformOrigin: "left center",
                      }}
                      onClick={() => {
                        if (!isCurrent) {
                          setActiveSlide(idx);
                        }
                      }}
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-[290px] sm:w-[350px] lg:w-[380px] xl:w-[400px] h-[470px] sm:h-[510px] lg:h-[540px] xl:h-[560px] rounded-[28px] bg-[#141414] text-white overflow-hidden shadow-2xl select-none flex flex-col border border-neutral-800 ${isCurrent ? "cursor-default" : "cursor-pointer hover:border-[#12b7d4]/60"
                        }`}
                    >
                      {/* Card Top Image with Browser Mockup Header */}
                      <div className="relative w-full h-[255px] sm:h-[285px] lg:h-[305px] xl:h-[315px] bg-[#1a1a1a] overflow-hidden flex flex-col">

                        {/* Browser Bar Frame */}
                        <div className="w-full bg-[#1c1c1c] px-4 py-2 flex items-center justify-between border-b border-white/10 shrink-0 z-20">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                          </div>
                          <div className="bg-black/60 rounded-full px-3 py-0.5 text-[10px] font-mono text-[#bbb] truncate max-w-[170px] sm:max-w-[200px] border border-white/5 flex items-center gap-1">
                            <svg className="w-2.5 h-2.5 text-[#12b7d4] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <span className="truncate">{ws.domain}</span>
                          </div>
                          <div className="w-3" />
                        </div>

                        {/* Image Showcase */}
                        <div className="relative w-full flex-1 overflow-hidden">
                          <img
                            src={ws.image}
                            alt={ws.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/25 pointer-events-none" />

                          {/* Category Badge on Top Left of Image */}
                          <div className="absolute top-3 left-3 z-20">
                            <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-sm text-[10px] font-black uppercase tracking-wider text-white border border-white/10">
                              {ws.tag}
                            </span>
                          </div>

                          {/* Navigation Arrows on Active Card (Rush Republic exact placement) */}
                          {isCurrent && (
                            <>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handlePrevSlide();
                                }}
                                className="absolute left-4 bottom-4 w-11 h-11 rounded-full bg-black/85 hover:bg-[#12b7d4] text-white flex items-center justify-center transition-all cursor-pointer shadow-xl border border-white/10 active:scale-95 z-30"
                                aria-label="Previous website"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                                </svg>
                              </button>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleNextSlide();
                                }}
                                className="absolute right-4 bottom-4 w-11 h-11 rounded-full bg-black/85 hover:bg-[#12b7d4] text-white flex items-center justify-center transition-all cursor-pointer shadow-xl border border-white/10 active:scale-95 z-30"
                                aria-label="Next website"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                </svg>
                              </button>
                            </>
                          )}
                        </div>

                      </div>

                      {/* Card Bottom Content */}
                      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="text-[11px] font-black uppercase tracking-wider text-[#12b7d4]">
                              {ws.category}
                            </span>
                            <span className="text-[10px] font-mono text-[#777]">
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                          </div>

                          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-['Varela_Round'] tracking-tight mb-2 leading-tight">
                            {ws.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#888888] leading-relaxed line-clamp-2 mb-4 font-normal">
                            {ws.description}
                          </p>
                        </div>

                        {/* Bottom Pill Link to Live Website */}
                        <div className="pt-2">
                          <a
                            href={ws.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-black uppercase tracking-wider shadow-sm hover:bg-[#12b7d4] hover:text-white transition-all cursor-pointer group"
                          >
                            <span>Visit Live Website</span>
                            <span className="text-[#12b7d4] font-black group-hover:text-white transition-colors">↗</span>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Quick Clickable Website Directory Pills */}
          <div className="mt-12 pt-8 border-t border-[#eaeaea]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-black uppercase tracking-widest text-[#888888]">
                Jump Directly to Any Client Website:
              </span>
              <span className="text-xs font-bold text-[#12b7d4]">
                Live Deployments
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {clientWebsites.map((ws, i) => {
                const isActive = activeSlide === i;
                return (
                  <button
                    key={ws.id}
                    onClick={() => setActiveSlide(i)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${isActive
                        ? "bg-[#12b7d4] text-white shadow-sm scale-105"
                        : "bg-[#f5f5f5] text-[#444444] hover:bg-[#000000] hover:text-white"
                      }`}
                  >
                    {ws.name}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 2: SHORT-FORM HIGH-RETENTION REELS (Same Tilted UI Alignment)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection id="reels" className="relative bg-white py-16 sm:py-24 border-b border-[#eaeaea] overflow-hidden">
        
        {/* Background "RISE WITH MEDIA" Stroke Text Blend */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
          <span
            className="text-[5.5rem] sm:text-[10rem] md:text-[14rem] lg:text-[17rem] font-black uppercase tracking-tight whitespace-nowrap leading-none select-none opacity-20"
            style={{
              fontFamily: "'Varela_Round', sans-serif",
              WebkitTextStroke: "2px rgba(0, 0, 0, 0.35)",
              color: "transparent",
            }}
          >
            RISE WITH MEDIA
          </span>
        </div>

        <div className="rush-container relative z-10">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <ScrollText as="span" direction="up" delay={0} className="tag-bubble-cyan mb-3 inline-block">
              Short-Form Content Engine
            </ScrollText>
            <ScrollText as="h2" direction="up" delay={0.08} className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#000000] font-['Varela_Round'] leading-tight mb-3">
              High-Retention <span className="text-[#12b7d4]">Reels</span>
            </ScrollText>
            <ScrollText as="p" direction="up" delay={0.16} className="font-script text-2xl sm:text-3xl text-[#12b7d4]">
              Engineered for algorithmic reach, viral watch-time & high conversion.
            </ScrollText>
          </div>

          {/* Tilted Staggered Video Cards (Same UI Alignment - No Numbers) */}
          <div className="relative w-full flex items-center justify-center gap-6 sm:gap-8 lg:gap-14 flex-wrap lg:flex-nowrap pb-4 pt-4">

            {/* Card 01 - Left Tilted */}
            <motion.div
              initial={{ opacity: 0, y: 35, rotate: -7 }}
              whileInView={{ opacity: 1, y: 0, rotate: -4.5 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 0.8, ease: rushEase }}
              className="flex flex-col items-center translate-y-4 sm:translate-y-8 group"
            >
              <motion.div
                whileHover={{ scale: 1.04, y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                onClick={() => setActiveReel(reel1)}
                className="relative w-[235px] sm:w-[275px] lg:w-[305px] h-[380px] sm:h-[440px] lg:h-[485px] rounded-3xl overflow-hidden bg-black shadow-[0_20px_45px_rgba(0,0,0,0.18)] border-2 border-white hover:border-[#12b7d4] transition-colors cursor-pointer group-hover:shadow-[0_25px_60px_rgba(18,183,212,0.25)]"
              >
                <video
                  src={reel1}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover gpu-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#12b7d4] bg-black/60 px-2 py-0.5 rounded-md mb-1.5 inline-block">
                    Creators x Brands
                  </span>
                  <h4 className="font-black text-lg sm:text-xl text-white leading-tight font-['Varela_Round'] drop-shadow-md">
                    Beauty & Lifestyle
                  </h4>
                </div>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-xs border border-white/20 flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  ▶
                </div>
              </motion.div>

              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#777777] mt-3 sm:mt-4">
                REELS
              </span>
            </motion.div>

            {/* Card 02 - Center Elevated & Right Tilted */}
            <motion.div
              initial={{ opacity: 0, y: 35, rotate: 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 2.5 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 0.8, delay: 0.08, ease: rushEase }}
              className="flex flex-col items-center -translate-y-2 sm:-translate-y-4 group z-10"
            >
              <motion.div
                whileHover={{ scale: 1.04, y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                onClick={() => setActiveReel(reel2)}
                className="relative w-[235px] sm:w-[275px] lg:w-[305px] h-[380px] sm:h-[440px] lg:h-[485px] rounded-3xl overflow-hidden bg-black shadow-[0_25px_55px_rgba(0,0,0,0.22)] border-2 border-white hover:border-[#12b7d4] transition-colors cursor-pointer group-hover:shadow-[0_25px_60px_rgba(18,183,212,0.25)]"
              >
                <video
                  src={reel2}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover gpu-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#12b7d4] bg-black/60 px-2 py-0.5 rounded-md mb-1.5 inline-block">
                    Viral Reach
                  </span>
                  <h4 className="font-black text-lg sm:text-xl text-white leading-tight font-['Varela_Round'] drop-shadow-md">
                    Creators x Brands
                  </h4>
                </div>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-xs border border-white/20 flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  ▶
                </div>
              </motion.div>

              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#777777] mt-3 sm:mt-4">
                REELS
              </span>
            </motion.div>

            {/* Card 03 - Right Tilted */}
            <motion.div
              initial={{ opacity: 0, y: 35, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3.5 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 0.8, delay: 0.16, ease: rushEase }}
              className="flex flex-col items-center translate-y-4 sm:translate-y-8 group"
            >
              <motion.div
                whileHover={{ scale: 1.04, y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                onClick={() => setActiveReel(reel3)}
                className="relative w-[235px] sm:w-[275px] lg:w-[305px] h-[380px] sm:h-[440px] lg:h-[485px] rounded-3xl overflow-hidden bg-black shadow-[0_20px_45px_rgba(0,0,0,0.18)] border-2 border-white hover:border-[#12b7d4] transition-colors cursor-pointer group-hover:shadow-[0_25px_60px_rgba(18,183,212,0.25)]"
              >
                <video
                  src={reel3}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover gpu-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                
                {/* Circular Brand Badge */}
                <div className="absolute bottom-5 right-4 w-12 h-12 rounded-full bg-[#12b7d4] border-2 border-white flex items-center justify-center text-white text-[9px] font-black uppercase text-center shadow-lg p-1 select-none pointer-events-none">
                  Rise Media
                </div>

                <div className="absolute bottom-5 left-5 right-18 text-white pointer-events-none">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#12b7d4] bg-black/60 px-2 py-0.5 rounded-md mb-1.5 inline-block">
                    Hospitality
                  </span>
                  <h4 className="font-black text-lg sm:text-xl text-white leading-tight font-['Varela_Round'] drop-shadow-md">
                    Brand Influence
                  </h4>
                </div>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-xs border border-white/20 flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  ▶
                </div>
              </motion.div>

              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#777777] mt-3 sm:mt-4">
                REELS
              </span>
            </motion.div>

          </div>

          {/* Quick Reel Filter Directory Pills */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-[#eaeaea]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-black uppercase tracking-widest text-[#888888]">
                Select Any Reel to Play:
              </span>
              <span className="text-xs font-bold text-[#12b7d4]">
                Production Reels
              </span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {reelVideos.map((reel) => (
                <button
                  key={reel.id}
                  onClick={() => setActiveReel(reel.src)}
                  className="px-4 py-2 rounded-full border border-[#eaeaea] bg-white text-[#333333] hover:bg-black hover:text-white hover:border-black text-xs font-bold transition-all cursor-pointer shadow-xs inline-flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#12b7d4]" />
                  <span>{reel.title}</span>
                  <span className="text-[10px] text-[#888888] group-hover:text-white">▶</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 3: PERFORMANCE CREATIVES & CAMPAIGNS
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection id="campaigns" className="py-20 lg:py-28 bg-white border-b border-[#eaeaea]">
        <div className="rush-container">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <ScrollText as="span" direction="up" delay={0} className="tag-bubble-cyan mb-4 inline-block">
                Performance Creatives
              </ScrollText>
              <ScrollText as="h2" direction="up" delay={0.1} className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-black font-['Varela_Round']">
                Ad Creatives & <span className="text-[#12b7d4]">Campaigns</span>
              </ScrollText>
            </div>
            <ScrollText as="p" direction="up" delay={0.18} className="font-script text-2xl sm:text-3xl text-[#12b7d4]">
              Data-backed creative engines crafted to stop the scroll.
            </ScrollText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {campaigns.map((camp, i) => (
              <motion.div
                key={camp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.05 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl border border-[#eaeaea] p-5 flex flex-col justify-between hover:border-black transition-all bg-white"
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-[#f9f9f9] border border-[#eaeaea] mb-4">
                  <img
                    src={camp.src}
                    alt={camp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#888888]">
                      {camp.brand}
                    </span>
                    <span className="tag-bubble text-[10px] py-0.5 px-2">
                      {camp.metric}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-black font-['Varela_Round']">
                    {camp.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Banner */}
          <ScrollText as="div" direction="up" delay={0.1} className="mt-16 text-center">
            <button
              onClick={() => setPage("contact")}
              className="btn-rush-black text-xs uppercase tracking-wider px-8 py-4 cursor-pointer"
            >
              Start Your Campaign With Us →
            </button>
          </ScrollText>

        </div>
      </ScrollSection>

      {/* Reel Lightbox Modal */}
      <AnimatePresence>
        {activeReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveReel(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-sm w-full bg-black rounded-3xl overflow-hidden border border-white/15 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveReel(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white text-black font-bold flex items-center justify-center cursor-pointer hover:bg-[#12b7d4] hover:text-white transition-colors shadow-lg"
              >
                ✕
              </button>
              <video
                src={activeReel}
                controls
                autoPlay
                playsInline
                preload="auto"
                className="w-full h-full max-h-[85vh] object-cover gpu-smooth"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}

