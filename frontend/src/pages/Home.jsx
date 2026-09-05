import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import ScrollSection, { rushEase } from "../components/ScrollSection";

// Client Logos
import Richilogo from "../assets/clientlogo/richi-logo.png";
import KrinBrinlogo from "../assets/clientlogo/krinbrinlogo.png";
import Savlologo from "../assets/clientlogo/savlologo.png";
import kertamlogo from "../assets/clientlogo/kertamlogo.png";
import neoweblogo from "../assets/clientlogo/neoweblogo.png";
import zoylogo from "../assets/clientlogo/zoylogo.png";
import femi9logo from "../assets/clientlogo/femi9logo.png";
import tryologo from "../assets/clientlogo/tryologo.png";
import pentacadtech from "../assets/clientlogo/pentacadtech.png";
import srijaitechlogo from "../assets/clientlogo/srijaitechlogo.png";
import malartraderslogo from "../assets/clientlogo/malartraderslogo.png";
import kandhancarslogo from "../assets/clientlogo/kandhancarslogo.png";
import dakshinelogo from "../assets/clientlogo/dakshinelogo.png";

// Media Assets
import reel1 from "../assets/clientvideos/1.mp4";
import reel2 from "../assets/clientvideos/2.mp4";
import reel3 from "../assets/clientvideos/3.mp4";
import screenshot1 from "../assets/clientweb/1.png";
import screenshot2 from "../assets/clientweb/2.png";
import campaign1 from "../assets/clientcampaign/1.png";
import campaign2 from "../assets/clientcampaign/2.png";
import campaign3 from "../assets/clientcampaign/3.png";

// Service Card Images (Black, White & Blue/Cyan Theme)
import contentSocialImg from "../assets/services/content_social.jpg";
import websitesFunnelsImg from "../assets/services/websites_funnels.jpg";
import performanceMarketingImg from "../assets/services/performance_marketing.jpg";
import saasTechnologyImg from "../assets/services/saas_technology.jpg";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_s15r115";
const EMAILJS_TEMPLATE_ID = "template_hpylv7f";
const EMAILJS_PUBLIC_KEY = "srGKTSrmIkawAjpyy";

// 3x3 Grid Logo Slots for The Rush Republic auto-changing cards (2-second rotation)
const logoGridSlots = [
  // Row 1
  [Richilogo, srijaitechlogo, malartraderslogo],
  [KrinBrinlogo, kandhancarslogo, dakshinelogo],
  [Savlologo, pentacadtech, Richilogo],
  // Row 2
  [kertamlogo, tryologo, KrinBrinlogo],
  [neoweblogo, femi9logo, Savlologo],
  [zoylogo, srijaitechlogo, kertamlogo],
  // Row 3
  [femi9logo, malartraderslogo, neoweblogo],
  [tryologo, kandhancarslogo, zoylogo],
  [pentacadtech, dakshinelogo, femi9logo],
];

export default function Home({ setPage }) {
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeReview, setActiveReview] = useState(0);
  const [activeLogoStep, setActiveLogoStep] = useState(0);

  // Service Carousel Ref & Drag State
  const serviceCarouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleServicePrev = () => {
    if (serviceCarouselRef.current) {
      serviceCarouselRef.current.scrollBy({ left: -390, behavior: "smooth" });
    }
  };

  const handleServiceNext = () => {
    if (serviceCarouselRef.current) {
      serviceCarouselRef.current.scrollBy({ left: 390, behavior: "smooth" });
    }
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - serviceCarouselRef.current.offsetLeft;
    scrollLeft.current = serviceCarouselRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - serviceCarouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    serviceCarouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Auto change logos every 2 seconds (Rush Republic style)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLogoStep((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Lock body scroll and listen for Escape key when video modal is active
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveVideoModal(null);
      }
    };

    if (activeVideoModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideoModal]);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    challenge: "",
    services: [],
  });
  const [formStatus, setFormStatus] = useState("idle");

  // Screen resize tracking for 3D perspective adjustments
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
    setActiveSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const caseStudies = [
    {
      id: "hsiehhsu",
      client: "HSIEH & HSU INDIA",
      tag: "53x Revenue Revolution",
      category: "Industrial Machinery",
      image: screenshot1,
      impact: "+240% Growth",
      description: "How we transformed a world-class manufacturing giant into an international digital sensation.",
    },
    {
      id: "richi",
      client: "RICHI FOOD PRODUCTS",
      tag: "Sweet Domination",
      category: "FMCG & Food Retail",
      image: campaign1,
      impact: "₹18 Cost Per Lead",
      description: "Crafting viral short-form creative campaigns that drove massive retail footfalls & direct orders.",
    },
    {
      id: "mogi",
      client: "MOGI E-COMMERCE",
      tag: "Precision SEO Dominance",
      category: "E-commerce & Ads",
      image: screenshot2,
      impact: "3× More Leads",
      description: "Breaking through fierce retail category noise with targeted multi-funnel search campaigns.",
    },
    {
      id: "kandhancars",
      client: "KANDHAN CARS",
      tag: "Hyperlocal Footfall Surge",
      category: "Automotive & Retail",
      image: campaign2,
      impact: "4.8× Showroom Visits",
      description: "Dominating local auto dealership search and delivering high-intent buyers straight to the lot.",
    },
    {
      id: "saascrm",
      client: "RISE CLOUD SAAS",
      tag: "Autonomous Growth Engine",
      category: "CRM & Automations",
      image: campaign3,
      impact: "99.4% Workflow Velocity",
      description: "Automating omnichannel pipeline velocity and real-time WhatsApp conversion funnels.",
    },
  ];

  const get3DCardStyle = (diff) => {
    if (diff === 0) {
      // Active center card (100% visible, unobstructed, front-facing)
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
      // 1st right card tilted in 3D (clean visible gap, zero overlap on active card)
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
      // 2nd right card tilted in 3D
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
      // 3rd right card tilted
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

    if (diff === caseStudies.length - 1) {
      // Card exiting to the left
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

    // Default hidden off-screen
    return {
      x: isMobile ? 700 : 1200,
      rotateY: -60,
      scale: 0.6,
      opacity: 0,
      zIndex: 0,
      filter: "grayscale(100%)",
      pointerEvents: "none",
    };
  };

  const serviceCards = [
    {
      id: "service-content-social",
      title: "Content & Social",
      category: "Content & Social",
      description: "Build a brand people notice and remember.",
      keywords: ["Reels", "Videos", "Creatives", "Social Media Strategy"],
      image: contentSocialImg,
      badge: "Brand & Audience",
    },
    {
      id: "service-websites-funnels",
      title: "Websites & Funnels",
      category: "Websites & Funnels",
      description: "Turn your online visitors into real customers.",
      keywords: ["Websites", "Landing Pages", "Funnels", "SEO"],
      image: websitesFunnelsImg,
      badge: "High Conversion",
    },
    {
      id: "service-performance-marketing",
      title: "Performance Marketing",
      category: "Performance Marketing",
      description: "Reach the right audience and drive measurable results.",
      keywords: ["Meta Ads", "Lead Generation", "Retargeting", "Analytics"],
      image: performanceMarketingImg,
      badge: "Targeted Growth",
    },
    {
      id: "service-saas-technology",
      title: "Technology & SaaS",
      category: "Technology & SaaS",
      description: "Build smarter systems for a growing business.",
      keywords: ["SaaS", "CRM", "Automation", "Custom Software"],
      image: saasTechnologyImg,
      badge: "Smart Automation",
    },
  ];

  const testimonials = [
    {
      author: "Ahkila",
      initial: "A",
      role: "Founder, Krin Brin School",
      brand: "Krin Brin School",
      quote:
        "Within 3 months we went from 0 to 4 lakh in monthly revenue. The team just gets it — strategy, execution, everything.",
      avatarBg: "from-[#12b7d4] to-[#0284c7]",
    },
    {
      author: "Saranya",
      initial: "S",
      role: "Founder, saranyaelitebridalstudio",
      brand: "Saranya Elite Bridal Studio",
      quote:
        "I was getting 45 leads a month. Now I get 10+ qualified leads monthly. The WhatsApp automation alone saved me hours.",
      avatarBg: "from-[#12b7d4] to-[#0ea5c0]",
    },
    {
      author: "Prem Charlesr",
      initial: "P",
      role: "Founder, Allinov",
      brand: "Allinov",
      quote:
        "I've hired agencies before — these guys are a completely different level.",
      avatarBg: "from-[#12b7d4] to-[#38bdf8]",
    },
  ];

  const toggleService = (srv) => {
    setFormData((prev) => {
      const exists = prev.services.includes(srv);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== srv)
          : [...prev.services, srv],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      phone: formData.phone,
      company: formData.businessName,
      message: `Challenge: ${formData.challenge} | Services: ${formData.services.join(", ")}`,
    };

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setFormStatus("success");
        setFormData({
          name: "",
          businessName: "",
          phone: "",
          email: "",
          challenge: "",
          services: [],
        });
      })
      .catch((err) => {
        console.error("Form error:", err);
        setFormStatus("error");
      });
  };

  return (
    <main className="bg-white pt-20 sm:pt-[88px]">

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 1: HERO BANNER (The Rush Republic Open Minimalist Hero)
      ───────────────────────────────────────────────────────────────── */}
      <section
        className="bg-white pt-10 sm:pt-14 lg:pt-20 pb-16 lg:pb-20 border-b border-[#eaeaea] relative overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="rush-container text-center relative z-10">

          {/* Centered Brand Badge & Logo (Above Digital Marketing) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.6, delay: 0, ease: rushEase }}
            className="flex items-center justify-center mb-5 sm:mb-6"
          >
            <div className="inline-flex items-center gap-3 transition-all duration-300 group cursor-default">
              <img
                src="/logo.png"
                alt="Rise With Media Logo"
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain group-hover:scale-110 transition-transform"
              />
              <span className="text-xs sm:text-sm md:text-base font-black uppercase tracking-[0.2em] text-[#000000] font-['Varela_Round']">
                Rise With <span className="text-[#12b7d4]">Media</span>
              </span>
            </div>
          </motion.div>

          {/* Main Display Headline — Split Left/Right Merge Animation */}
          <div className="max-w-5xl mx-auto mb-8">

            {/* Line 1: “MAKE YOUR ↔ BRAND MATTER” */}
            <div className="overflow-hidden flex flex-wrap justify-center leading-[1.05]">
              {/* LEFT HALF */}
              <motion.span
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.05 }}
                transition={{ duration: 0.85, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tight text-[#000000] font-['Varela_Round'] inline-block pr-[0.18em]"
              >
                “MAKE YOUR
              </motion.span>
              {/* RIGHT HALF */}
              <motion.span
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.05 }}
                transition={{ duration: 0.85, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tight text-[#000000] font-['Varela_Round'] inline-block"
              >
                BRAND MATTER”
              </motion.span>
            </div>

            {/* Subtitle: “Not just ↔ visible, Memorable.” */}
            <div className="overflow-visible flex flex-wrap justify-center items-baseline mt-3 gap-x-3 sm:gap-x-4 pb-2 pt-1">
              {/* LEFT HALF */}
              <motion.span
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.05 }}
                transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="font-script text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] text-[#000000] inline-flex items-baseline"
              >
                <span>Not</span>
                <span className="inline-block ml-2.5 sm:ml-3.5 md:ml-4.5">just</span>
              </motion.span>
              {/* RIGHT HALF */}
              <motion.span
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.05 }}
                transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="font-script text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] text-[#000000] inline-block"
              >
                <span className="text-[#12b7d4]">visible,</span> Memorable.
              </motion.span>
            </div>

          </div>

          {/* Sub-Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.65, delay: 0.28, ease: rushEase }}
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
          >
            <button
              onClick={() => setPage("contact")}
              className="btn-rush-black cursor-pointer text-xs uppercase tracking-wider px-9 py-4 shadow-sm hover:bg-[#12b7d4] hover:text-white transition-all hover:scale-105 active:scale-95"
            >
              Get Started
            </button>
            <button
              onClick={() => setPage("works")}
              className="btn-rush-cyan cursor-pointer text-xs uppercase tracking-wider px-9 py-4 shadow-sm hover:scale-105 active:scale-95"
            >
              View Case Studies
            </button>
          </motion.div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 2: RESULTS SPEAK LOUDER (The Rush Republic 3D Card Deck)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white py-20 lg:py-28 border-b border-[#eaeaea] overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 xl:gap-16">

            {/* Left Column: Big Vertically Stacked Title & Tilted Sticker Button */}
            <div className="w-full lg:w-[38%] xl:w-[35%] flex flex-col justify-center select-none flex-shrink-0 mb-8 lg:mb-0">
              <div className="relative inline-block">
                <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-[6.4rem] font-black uppercase tracking-tight text-[#000000] leading-[0.88] font-['Varela_Round']">
                  RESULTS<br />
                  SPEAK<br />
                  LOUDER
                </h2>
                {/* Tilted Sticker Button like Rush Republic */}
                <motion.button
                  type="button"
                  onClick={() => setPage("works")}
                  whileHover={{ scale: 1.08, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="absolute left-6 sm:left-10 top-[48%] -rotate-[5deg] bg-white text-black border-2 border-black rounded-xl px-5 py-2.5 text-xs sm:text-sm font-black uppercase tracking-wider shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-[#12b7d4] hover:text-white hover:border-[#12b7d4] hover:shadow-[4px_4px_0px_rgba(18,183,212,1)] transition-all cursor-pointer z-20"
                >
                  View Case Studies
                </motion.button>
              </div>
            </div>

            {/* Right Column: 3D Perspective Card Deck with clean spacing & zero overlap */}
            <div className="w-full lg:w-[62%] xl:w-[65%] relative h-[520px] sm:h-[550px] lg:h-[580px] flex items-center justify-start overflow-visible [perspective:1400px]">
              <div
                className="relative w-full h-full flex items-center [transform-style:preserve-3d]"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {caseStudies.map((cs, idx) => {
                  const diff = (idx - activeSlide + caseStudies.length) % caseStudies.length;
                  const isCurrent = diff === 0;
                  const cardStyle = get3DCardStyle(diff);

                  return (
                    <motion.div
                      key={cs.id}
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
                      {/* Card Top Image */}
                      <div className="relative w-full h-[260px] sm:h-[290px] lg:h-[310px] xl:h-[320px] bg-[#1a1a1a] overflow-hidden">
                        <img
                          src={cs.image}
                          alt={cs.client}
                          className="w-full h-full object-cover"
                        />
                        {/* Soft gradient overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/20 pointer-events-none" />

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
                              aria-label="Previous card"
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
                              aria-label="Next card"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </>
                        )}
                      </div>

                      {/* Card Bottom Content */}
                      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-['Varela_Round'] tracking-tight mb-2 leading-tight">
                            {cs.client}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#888888] leading-relaxed line-clamp-2 mb-4 font-normal">
                            {cs.description}
                          </p>
                        </div>

                        {/* Bottom Pill Badge */}
                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setPage("works");
                            }}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black text-xs font-black uppercase tracking-wider shadow-sm hover:bg-[#12b7d4] hover:text-white transition-colors cursor-pointer"
                          >
                            <span>{cs.tag}</span>
                            <span className="text-[#12b7d4] font-black group-hover:text-white">→</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 3: OUR WORKS (Tilted Video Cards with Stroke Text Blend)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white py-16 sm:py-24 border-b border-[#eaeaea] relative overflow-hidden">
        
        {/* Background "RISE WITH MEDIA" Stroke Text Blend (Reference UI Style) */}
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
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 0.5, ease: rushEase }}
              className="tag-bubble-cyan mb-3 inline-block"
            >
              Our Works
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 0.6, delay: 0.08, ease: rushEase }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#000000] font-['Varela_Round'] leading-tight mb-3"
            >
              Works That <span className="text-[#12b7d4]">Captivate</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 0.6, delay: 0.16, ease: rushEase }}
              className="font-script text-2xl sm:text-3xl text-[#12b7d4]"
            >
              High-converting short-form creative, viral reels & brand storytelling.
            </motion.p>
          </div>

          {/* Tilted Staggered Video Cards (Exact Reference Design Alignment) */}
          <div className="relative w-full flex items-center justify-center gap-6 sm:gap-8 lg:gap-14 flex-wrap lg:flex-nowrap pb-4 pt-4">

            {/* Card 01 - Left Tilted */}
            <motion.div
              initial={{ opacity: 0, y: 35, rotate: -7 }}
              whileInView={{ opacity: 1, y: 0, rotate: -4.5 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 0.85, ease: rushEase }}
              className="flex flex-col items-center translate-y-4 sm:translate-y-8 group"
            >
              {/* Video Card */}
              <motion.div
                whileHover={{ scale: 1.04, y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                onClick={() => setActiveVideoModal(reel1)}
                className="relative w-[235px] sm:w-[275px] lg:w-[305px] h-[380px] sm:h-[440px] lg:h-[485px] rounded-3xl overflow-hidden bg-black shadow-[0_20px_45px_rgba(0,0,0,0.18)] border-2 border-white hover:border-[#12b7d4] transition-colors duration-300 cursor-pointer gpu-smooth"
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
                
                {/* Overlay Text Inside Card */}
                <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#12b7d4] bg-black/60 px-2 py-0.5 rounded-md mb-1.5 inline-block">
                    Creators x Brands
                  </span>
                  <h4 className="font-black text-lg sm:text-xl text-white leading-tight font-['Varela_Round'] drop-shadow-md">
                    Viral Food & Retail
                  </h4>
                </div>

                {/* Play Hint */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-xs border border-white/20 flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  ▶
                </div>
              </motion.div>

              {/* Caption Under Card */}
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#777777] mt-3 sm:mt-4">
                REELS
              </span>
            </motion.div>

            {/* Card 02 - Center Elevated & Right Tilted (Matching Reference) */}
            <motion.div
              initial={{ opacity: 0, y: 35, rotate: 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 2.5 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 0.85, delay: 0.1, ease: rushEase }}
              className="flex flex-col items-center -translate-y-2 sm:-translate-y-4 group z-10"
            >
              {/* Video Card */}
              <motion.div
                whileHover={{ scale: 1.04, y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                onClick={() => setActiveVideoModal(reel2)}
                className="relative w-[235px] sm:w-[275px] lg:w-[305px] h-[380px] sm:h-[440px] lg:h-[485px] rounded-3xl overflow-hidden bg-black shadow-[0_25px_55px_rgba(0,0,0,0.22)] border-2 border-white hover:border-[#12b7d4] transition-colors duration-300 cursor-pointer gpu-smooth"
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
                
                {/* Overlay Text Inside Card (Matching Reference "Creators x Brands") */}
                <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#12b7d4] bg-black/60 px-2 py-0.5 rounded-md mb-1.5 inline-block">
                    Viral Reach
                  </span>
                  <h4 className="font-black text-lg sm:text-xl text-white leading-tight font-['Varela_Round'] drop-shadow-md">
                    Creators x Brands
                  </h4>
                </div>

                {/* Play Hint */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-xs border border-white/20 flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  ▶
                </div>
              </motion.div>

              {/* Caption Under Card */}
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#777777] mt-3 sm:mt-4">
                REELS
              </span>
            </motion.div>

            {/* Card 03 - Right Tilted (Matching Reference with Brand Badge) */}
            <motion.div
              initial={{ opacity: 0, y: 35, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3.5 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 0.85, delay: 0.2, ease: rushEase }}
              className="flex flex-col items-center translate-y-4 sm:translate-y-8 group"
            >
              {/* Video Card */}
              <motion.div
                whileHover={{ scale: 1.04, y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                onClick={() => setActiveVideoModal(reel3)}
                className="relative w-[235px] sm:w-[275px] lg:w-[305px] h-[380px] sm:h-[440px] lg:h-[485px] rounded-3xl overflow-hidden bg-black shadow-[0_20px_45px_rgba(0,0,0,0.18)] border-2 border-white hover:border-[#12b7d4] transition-colors duration-300 cursor-pointer gpu-smooth"
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
                
                {/* Circular Brand Badge (Matching Reference Circular Logo Badge) */}
                <div className="absolute bottom-5 right-4 w-12 h-12 rounded-full bg-[#12b7d4] border-2 border-white flex items-center justify-center text-white text-[9px] font-black uppercase text-center shadow-lg p-1 select-none pointer-events-none">
                  Rise Media
                </div>

                {/* Overlay Text Inside Card */}
                <div className="absolute bottom-5 left-5 right-18 text-white pointer-events-none">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#12b7d4] bg-black/60 px-2 py-0.5 rounded-md mb-1.5 inline-block">
                    Hospitality
                  </span>
                  <h4 className="font-black text-lg sm:text-xl text-white leading-tight font-['Varela_Round'] drop-shadow-md">
                    Brand Influence
                  </h4>
                </div>

                {/* Play Hint */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-xs border border-white/20 flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  ▶
                </div>
              </motion.div>

              {/* Caption Under Card */}
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#777777] mt-3 sm:mt-4">
                REELS
              </span>
            </motion.div>

          </div>

          {/* Bottom Action CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <button
              onClick={() => setPage("works")}
              className="btn-rush-black text-xs uppercase tracking-wider px-9 py-4 cursor-pointer hover:bg-[#12b7d4] hover:text-white transition-all shadow-sm"
            >
              Explore All Case Studies & Reels →
            </button>
          </div>

        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 4: WHAT WE DO (Carousel Swiper Layout with Images)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white py-12 sm:py-20 lg:py-28 border-b border-[#eaeaea] overflow-hidden">
        <div className="rush-container">

          {/* Top Section / Split Header with Headline & Carousel Controls */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6 sm:mb-10">
            
            {/* Headline and Description */}
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e6f9fc] border border-[#12b7d4]/40 text-[#087f94] text-xs font-black uppercase tracking-widest mb-3 inline-block">
                WHAT WE DO
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#000000] leading-tight mb-2 font-['Varela_Round']">
                Everything Your Business Needs to <span className="text-[#12b7d4]">Grow Digitally.</span>
              </h2>
              <p className="font-script text-base sm:text-lg md:text-2xl text-[#12b7d4] leading-snug">
                From content and campaigns to websites and technology — we build digital systems that help your business grow.
              </p>
            </div>

            {/* Carousel Navigation Controls (Responsive for mobile & desktop) */}
            <div className="flex items-center justify-between sm:justify-end gap-3 pt-1 lg:pt-0">
              <span className="text-xs font-bold text-[#888888] uppercase tracking-wider">
                Swipe to explore →
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleServicePrev}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white hover:bg-[#12b7d4] flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
                  aria-label="Previous service"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleServiceNext}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white hover:bg-[#12b7d4] flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
                  aria-label="Next service"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

          </div>

          {/* Carousel Swiper Container */}
          <div className="relative w-full">
            
            {/* Floating In-Track Arrows for Desktop */}
            <button
              type="button"
              onClick={handleServicePrev}
              className="absolute -left-4 lg:-left-5 top-1/3 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black text-white hover:bg-[#12b7d4] hidden lg:flex items-center justify-center shadow-xl border border-white/20 transition-all cursor-pointer hover:scale-110 active:scale-95"
              aria-label="Previous card"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleServiceNext}
              className="absolute -right-4 lg:-right-5 top-1/3 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black text-white hover:bg-[#12b7d4] hidden lg:flex items-center justify-center shadow-xl border border-white/20 transition-all cursor-pointer hover:scale-110 active:scale-95"
              aria-label="Next card"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Horizontal Scroll / Swipe Track with Full-Bleed on Mobile */}
            <div
              ref={serviceCarouselRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeaveOrUp}
              onMouseUp={handleMouseLeaveOrUp}
              onMouseMove={handleMouseMove}
              className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6 pt-1 select-none cursor-grab active:cursor-grabbing scroll-smooth -mx-4 sm:-mx-6 lg:mx-0 px-4 sm:px-6 lg:px-0"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
            >
              {serviceCards.map((service, idx) => (
                <motion.div
                  key={service.id}
                  onClick={() => setPage(service.id)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.05 }}
                  transition={{ duration: 0.65, delay: idx * 0.08, ease: rushEase }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="w-[85vw] sm:w-[340px] md:w-[370px] lg:w-[400px] max-w-[400px] shrink-0 snap-start rounded-3xl border border-[#eaeaea] bg-white p-4 sm:p-6 hover:border-[#12b7d4] hover:shadow-[0_20px_45px_rgba(18,183,212,0.14)] transition-colors duration-300 group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Card Top Image (Black, White & Blue/Cyan Theme - No Numbers) */}
                    <div className="relative w-full h-[180px] sm:h-[220px] rounded-2xl overflow-hidden bg-[#141414] mb-4 sm:mb-5">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        draggable={false}
                      />
                    </div>

                    {/* Bold Service Title - Total Black */}
                    <h3 className="text-xl sm:text-2xl font-black uppercase text-black tracking-tight font-['Varela_Round'] mb-1.5 sm:mb-2">
                      {service.title}
                    </h3>

                    {/* One-Line Description in Script Italic Blue Font */}
                    <p className="font-script text-base sm:text-lg text-[#12b7d4] leading-snug mb-3.5 sm:mb-4">
                      {service.description}
                    </p>

                    {/* Short Service Keywords */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {service.keywords.map((kw, i) => (
                        <span
                          key={i}
                          className="text-[10px] sm:text-[11px] font-semibold text-[#555555] bg-[#f5f5f5] group-hover:bg-[#e6f9fc] group-hover:text-[#087f94] px-2.5 py-1 rounded-full transition-colors whitespace-nowrap"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Link - Read More */}
                  <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-[#f0f0f0] flex items-center justify-between text-xs font-black uppercase tracking-wider text-black group-hover:text-[#12b7d4] transition-colors">
                    <span className="flex items-center gap-1.5">
                      Read More <span className="text-[#12b7d4]">→</span>
                    </span>
                    <span className="text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#12b7d4]">
                      ↗
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Closing Line Callout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.75, ease: rushEase }}
            className="mt-8 sm:mt-14 lg:mt-18 rounded-3xl bg-black text-white p-6 sm:p-10 lg:p-14 relative overflow-hidden border border-[#222222] shadow-2xl"
          >
            {/* Subtle glow accent */}
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#12b7d4]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white font-['Varela_Round'] leading-tight mb-3">
                  “From Building Your Brand to <span className="text-[#12b7d4]">Building Your Business.</span>”
                </blockquote>
                <p className="font-script text-2xl sm:text-3xl text-[#12b7d4] tracking-wide">
                  Content. Technology. Performance. All Under One Roof.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setPage("contact")}
                  className="btn-rush-cyan text-xs sm:text-sm uppercase tracking-wider px-8 py-4 cursor-pointer shadow-lg hover:scale-105 transition-transform"
                >
                  Start Your Project →
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 5: TRUSTED BY VISIONARIES (The Rush Republic Split 3x3 Auto-Changing Grid)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white py-20 lg:py-28 border-b border-[#eaeaea]">
        <div className="rush-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Column: Stacked Massive Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 0.7, ease: rushEase }}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.2rem] xl:text-[4.8rem] font-black uppercase tracking-tight text-[#000000] leading-[0.93] font-['Varela_Round']">
                Trusted by<br />
                Visionaries,<br />
                Admired by the<br />
                <span className="text-[#12b7d4]">Best</span>
              </h2>
            </motion.div>

            {/* Right Column: 3x3 Auto-Changing Logo Cards (Every 2 seconds, full color) */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
                {logoGridSlots.map((slot, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.05 }}
                    transition={{ duration: 0.5, delay: idx * 0.04, ease: rushEase }}
                    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                    className="h-28 sm:h-36 lg:h-40 rounded-2xl sm:rounded-3xl border border-[#eaeaea] bg-white overflow-hidden p-2 sm:p-4 flex items-center justify-center relative shadow-xs hover:border-[#12b7d4] transition-colors"
                  >
                    <div
                      className="w-full h-full flex flex-col transition-transform duration-700 ease-in-out"
                      style={{
                        transform: `translateY(-${activeLogoStep * 100}%)`,
                        transitionDelay: `${(idx % 3) * 60}ms`,
                      }}
                    >
                      {slot.map((logoSrc, logoIdx) => (
                        <div
                          key={logoIdx}
                          className="w-full h-full shrink-0 flex items-center justify-center p-2"
                        >
                          <img
                            src={logoSrc}
                            alt="Client Partner"
                            className="max-h-12 sm:max-h-16 lg:max-h-20 w-auto max-w-[85%] object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 6: OUR SATISFIED CLIENTS (The Rush Republic Dark Section)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-[#000000] text-white py-20 lg:py-28 overflow-hidden">
        <div className="rush-container">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="tag-bubble bg-[#12b7d4] text-white mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-['Varela_Round']">
                Our Satisfied<br /><span className="text-[#12b7d4]">Clients</span>
              </h2>
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveReview((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))}
                className="w-12 h-12 rounded-full border border-white/30 text-white hover:bg-[#12b7d4] hover:text-white hover:border-[#12b7d4] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous Review"
              >
                ←
              </button>
              <button
                onClick={() => setActiveReview((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))}
                className="w-12 h-12 rounded-full bg-[#12b7d4] text-white hover:bg-white hover:text-black flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next Review"
              >
                →
              </button>
            </div>
          </div>

          {/* Testimonial Active Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeReview}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: rushEase }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#111111] border border-[#222222] rounded-3xl p-8 sm:p-12"
            >

              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  {/* 5 Stars Rating */}
                  <div className="flex items-center gap-1.5 mb-5 text-[#12b7d4] text-lg sm:text-xl">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-widest text-[#12b7d4] mb-3 block">
                    {testimonials[activeReview].brand}
                  </span>

                  <p className="text-xl sm:text-2xl lg:text-3xl font-normal text-white/90 leading-relaxed mb-8">
                    "{testimonials[activeReview].quote}"
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-black text-white font-['Varela_Round']">
                    {testimonials[activeReview].author}
                  </h4>
                  <p className="text-sm text-neutral-400 font-medium mt-1">
                    {testimonials[activeReview].role}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className={`w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br ${testimonials[activeReview].avatarBg} flex items-center justify-center text-white text-5xl sm:text-7xl font-black font-['Varela_Round'] shadow-[0_10px_30px_rgba(18,183,212,0.3)] border-4 border-[#222222]`}>
                  {testimonials[activeReview].initial}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 7: OUR INITIATIVES (AKA PROFESSIONAL HOBBY)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white py-20 lg:py-28 border-b border-[#eaeaea]">
        <div className="rush-container">

          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#000000] font-['Varela_Round']">
              Our Initiatives
            </h2>
            <div className="font-script text-2xl sm:text-3xl text-[#555555]">
              AKA <span className="text-[#12b7d4]">professional hobby</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Initiative 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 0.65, ease: rushEase }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="rounded-3xl border border-[#eaeaea] overflow-hidden p-6 sm:p-8 bg-white hover:border-[#12b7d4] transition-colors group"
            >
              <div className="aspect-video rounded-2xl overflow-hidden bg-black mb-6">
                <video
                  src={reel1}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black uppercase text-black font-['Varela_Round']">
                    Rise Creators Lab
                  </h3>
                  <p className="text-xs text-[#666666] mt-1">Short-form storytelling & retention reels</p>
                </div>
                <a
                  href="https://www.instagram.com/risewithmedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#12b7d4] text-white flex items-center justify-center hover:bg-black hover:scale-105 transition-all"
                >
                  ↗
                </a>
              </div>
            </motion.div>

            {/* Initiative 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 0.65, delay: 0.12, ease: rushEase }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="rounded-3xl border border-[#eaeaea] overflow-hidden p-6 sm:p-8 bg-white hover:border-[#12b7d4] transition-colors group"
            >
              <div className="aspect-video rounded-2xl overflow-hidden bg-black mb-6">
                <video
                  src={reel2}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black uppercase text-black font-['Varela_Round']">
                    Autonomous SaaS Studio
                  </h3>
                  <p className="text-xs text-[#666666] mt-1">Custom CRM, hospital ERP & AI workflows</p>
                </div>
                <button
                  onClick={() => setPage("works")}
                  className="w-10 h-10 rounded-full bg-[#12b7d4] text-white flex items-center justify-center hover:bg-black hover:scale-105 transition-all cursor-pointer"
                >
                  ↗
                </button>
              </div>
            </motion.div>

          </div>

        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 8: CTA FORM (LET’S CONNECT TO CREATE MAGIC!)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection id="CTA" className="bg-[#000000] text-white py-20 lg:py-28">
        <div className="rush-container">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.75, ease: rushEase }}
            className="max-w-4xl mx-auto"
          >

            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-3 font-['Varela_Round']">
                Let’s Connect to <span className="text-[#12b7d4]">Create Magic!</span>
              </h2>
              <p className="font-script text-2xl sm:text-3xl text-[#12b7d4]">
                Tell us a little about your brand and we’ll bring big ideas to the table.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Row 1: Name & Business Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Name: (Who are we talking to?)"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#111111] border border-[#2b2b2b] rounded-xl px-5 py-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#12b7d4] transition-colors"
                />
                <input
                  type="text"
                  required
                  placeholder="Your Business Name"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full bg-[#111111] border border-[#2b2b2b] rounded-xl px-5 py-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#12b7d4] transition-colors"
                />
              </div>

              {/* Row 2: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  required
                  placeholder="Phone: (Let's talk business)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#111111] border border-[#2b2b2b] rounded-xl px-5 py-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#12b7d4] transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder="Email: (How do we reach you?)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#111111] border border-[#2b2b2b] rounded-xl px-5 py-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#12b7d4] transition-colors"
                />
              </div>

              {/* Row 3: Challenge */}
              <input
                type="text"
                placeholder="Write one line about your business challenge..."
                value={formData.challenge}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                className="w-full bg-[#111111] border border-[#2b2b2b] rounded-xl px-5 py-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#12b7d4] transition-colors"
              />

              {/* Services Checkboxes (The Rush Republic Style) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#aaaaaa] mb-3">
                  Select Services Needed:
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    "Branding",
                    "SEO",
                    "Social Media",
                    "Website",
                    "Performance Marketing",
                    "Content",
                    "CRM & SaaS",
                    "Design",
                  ].map((srv) => {
                    const checked = formData.services.includes(srv);
                    return (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => toggleService(srv)}
                        className={`px-4 py-2 rounded-full text-xs font-bold border transition-all cursor-pointer ${checked
                          ? "bg-[#12b7d4] text-white border-[#12b7d4]"
                          : "bg-[#111111] text-neutral-300 border-[#333333] hover:border-[#12b7d4]"
                          }`}
                      >
                        {checked ? "✓ " : "+ "}
                        {srv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="btn-rush-cyan w-full py-4 text-sm uppercase tracking-wider font-black cursor-pointer shadow-lg"
                >
                  {formStatus === "submitting" ? "Sending..." : "Let's Dominate →"}
                </button>
              </div>

              {/* Feedback messages */}
              <AnimatePresence>
                {formStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-5 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-sm font-semibold text-center"
                  >
                    ✓ High velocity received! Our strategy lead will reach out to you within 24 hours.
                  </motion.div>
                )}
                {formStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-5 rounded-2xl bg-red-950/60 border border-red-500/50 text-red-300 text-sm font-semibold text-center"
                  >
                    Oops! Something went wrong. Please WhatsApp or call us directly at +91 9345254648.
                  </motion.div>
                )}
              </AnimatePresence>

            </form>

          </motion.div>

        </div>
      </ScrollSection>

      {/* Video Modal Lightbox */}
      <AnimatePresence>
        {activeVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveVideoModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-black rounded-3xl overflow-hidden border border-white/15 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideoModal(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white text-black font-bold flex items-center justify-center cursor-pointer hover:bg-[#12b7d4] hover:text-white transition-colors shadow-lg"
              >
                ✕
              </button>
              <video
                src={activeVideoModal}
                controls
                autoPlay
                playsInline
                preload="auto"
                className="w-full h-full max-h-[80vh] object-contain gpu-smooth"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}


