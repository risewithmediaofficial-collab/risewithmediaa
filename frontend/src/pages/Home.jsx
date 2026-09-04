import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import ScrollSection from "../components/ScrollSection";

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
import screenshot1 from "../assets/clientweb/1.png";
import screenshot2 from "../assets/clientweb/2.png";
import campaign1 from "../assets/clientcampaign/1.png";
import campaign2 from "../assets/clientcampaign/2.png";
import campaign3 from "../assets/clientcampaign/3.png";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_s15r115";
const EMAILJS_TEMPLATE_ID = "template_hpylv7f";
const EMAILJS_PUBLIC_KEY = "srGKTSrmIkawAjpyy";

// Client Logos Array
const clientLogos = [
  { name: "Richi", src: Richilogo },
  { name: "Krin Brin", src: KrinBrinlogo },
  { name: "Savlo", src: Savlologo },
  { name: "Kertam", src: kertamlogo },
  { name: "Neoweb", src: neoweblogo },
  { name: "Zoy", src: zoylogo },
  { name: "Femi9", src: femi9logo },
  { name: "Tryo", src: tryologo },
  { name: "Pentacad Tech", src: pentacadtech },
  { name: "Srijai Tech", src: srijaitechlogo },
  { name: "Malar Traders", src: malartraderslogo },
  { name: "Kandhan Cars", src: kandhancarslogo },
  { name: "Dakshine", src: dakshinelogo },
];

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
  const [activeArticle, setActiveArticle] = useState(null);
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeReview, setActiveReview] = useState(0);
  const [activeLogoStep, setActiveLogoStep] = useState(0);

  // Auto change logos every 2 seconds (Rush Republic style)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLogoStep((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Lock body scroll and listen for Escape key when modals are active
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveArticle(null);
        setActiveVideoModal(null);
      }
    };

    if (activeArticle || activeVideoModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeArticle, activeVideoModal]);

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

  const articles = [
    {
      id: 1,
      category: "Digital",
      readTime: "8 min read",
      title: "How to Create Campaigns That Get Results Fast",
      tag: "Real-world strategies to supercharge brand velocity.",
      intro: "In today's hyper-saturated feed, standard marketing campaigns fail not because of budget, but because of slow iteration and weak creative hooks. Here is the rapid-deployment framework we use to generate immediate traction.",
      sections: [
        {
          heading: "1. The 3-Second Hook Rule",
          text: "If your creative doesn't capture qualified attention within the first 3 seconds, 85% of viewers scroll away. Test 5 distinctly different visual and verbal hooks for every single core campaign concept.",
        },
        {
          heading: "2. Offer Architecture Over Ad Copy",
          text: "The greatest copy cannot save an ambiguous offer. Structure your proposition around solving one distinct pain point with transparent pricing, zero friction, and clear proof of results.",
        },
        {
          heading: "3. Algorithmic Budget Scaling",
          text: "Start with agile test budgets across broad audiences. Let Meta's machine learning identify high-intent buyer clusters, and scale only when Cost Per Acquisition (CPA) stabilizes below your target threshold.",
        },
      ],
      takeaway: "Never optimize for vanity metrics like clicks or impressions. Optimize exclusively for qualified leads, pipeline velocity, and direct revenue.",
      stat: "+340% Revenue Velocity",
    },
    {
      id: 2,
      category: "Product",
      readTime: "6 min read",
      title: "The Psychology Behind Buying Decisions",
      tag: "How to tap into real consumer behaviour and drive action.",
      intro: "Consumers don't buy products based on raw features; they make emotional decisions and justify them with logic. Understanding core cognitive drivers separates stagnant brands from category leaders.",
      sections: [
        {
          heading: "1. Loss Aversion & Ethical Urgency",
          text: "People are twice as motivated by the prospect of avoiding a loss than gaining a benefit. Frame your service around what they forfeit by maintaining the status quo.",
        },
        {
          heading: "2. The Power of Social Validation",
          text: "Generic testimonials don't convert. Specific, metric-backed case studies (e.g. 'How Anandhaas gained 53x revenue') build immediate trust and eliminate purchase anxiety.",
        },
        {
          heading: "3. Friction Elimination",
          text: "Every extra form field, slow page load, or ambiguous checkout step drops conversions by 12%. Make reaching your brand as effortless as a single WhatsApp tap.",
        },
      ],
      takeaway: "Eliminate cognitive overload. A single, focused call-to-action consistently out-converts cluttered option menus.",
      stat: "5.3× Average ROAS",
    },
    {
      id: 3,
      category: "Software Engineering",
      readTime: "7 min read",
      title: "5 Signs Your Brand Needs a Digital Revamp",
      tag: "Is your platform falling behind? Here is the blueprint.",
      intro: "Your digital presence is the primary storefront for your enterprise. If your systems are sluggish, disconnected, or outdated, you are silently leaking high-value customers every day.",
      sections: [
        {
          heading: "1. High Bounce Rate (>60%)",
          text: "If mobile visitors leave within 4 seconds, your site is too slow, confusing, or poorly formatted for modern smartphones.",
        },
        {
          heading: "2. Manual Lead Management",
          text: "If incoming inquiries sit in spreadsheets or unread inboxes instead of automated CRM workflows, 70% of high-intent leads go cold within 15 minutes.",
        },
        {
          heading: "3. Low Paid Ad ROAS",
          text: "Sending expensive paid traffic to an outdated homepage is burning capital. You need dedicated, fast, high-converting landing funnels.",
        },
      ],
      takeaway: "A website revamp is not a cosmetic coat of paint; it is an engineered commercial growth engine designed to convert traffic into revenue.",
      stat: "72h Modernization Speed",
    },
    {
      id: 4,
      category: "Performance",
      readTime: "5 min read",
      title: "The Social Media & Meta Ads Playbook for 2026",
      tag: "Unleash scalable customer acquisition built for the now.",
      intro: "The era of manual interest hacks and cookie-cutter ad copy is over. The 2026 Meta ads algorithm rewards authentic short-form retention creative, consolidated ad structures, and first-party data capture.",
      sections: [
        {
          heading: "1. Vertical Video Dominance",
          text: "9:16 authentic retention reels consistently outperform high-cost studio commercials in Cost Per Acquisition across retail, FMCG, and service industries.",
        },
        {
          heading: "2. Creative Fatigue Management",
          text: "Winning creatives experience fatigue every 12-16 days. Establish an agile weekly production cadence to refresh creative angles without resetting ad sets.",
        },
        {
          heading: "3. Direct WhatsApp & Automated Funnels",
          text: "In South India and emerging markets, directing Meta ads to automated WhatsApp flows increases conversion speed by over 300% compared to standard email forms.",
        },
      ],
      takeaway: "Treat social creative as your primary targeting tool. The creative hook qualifies the buyer before they ever click your link.",
      stat: "1.4M+ Views Generated",
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
      <ScrollSection
        className="bg-white pt-4 sm:pt-5 lg:pt-7 pb-16 lg:pb-20 border-b border-[#eaeaea] relative overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="rush-container text-center relative z-10">
          
          {/* Centered Brand Badge & Logo (Above Digital Marketing) */}
          <div className="flex items-center justify-center mb-5 sm:mb-6">
            <div className="inline-flex items-center gap-3.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white border border-[#eaeaea] shadow-xs hover:border-[#12b7d4] transition-all duration-300 group cursor-default">
              <img
                src="/logo.png"
                alt="Rise With Media Logo"
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain group-hover:scale-110 transition-transform"
              />
              <span className="text-xs sm:text-sm md:text-base font-black uppercase tracking-[0.2em] text-[#000000] font-['Manrope']">
                Rise With <span className="text-[#12b7d4]">Media</span>
              </span>
            </div>
          </div>

          {/* Main Display Headline */}
          <div className="max-w-5xl mx-auto mb-8">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tight text-[#000000] leading-[1.0] mb-3 font-['Manrope']">
              Digital Marketing That
            </h1>
            <div className="font-script text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] text-[#000000] tracking-normal">
              Thrills, <span className="text-[#12b7d4]">Converts</span> and Delivers.
            </div>
          </div>

          {/* Sub-Hero CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setPage("contact")}
              className="btn-rush-black cursor-pointer text-xs uppercase tracking-wider px-9 py-4 shadow-sm hover:bg-[#12b7d4] hover:text-white transition-all"
            >
              Get Started
            </button>
            <button
              onClick={() => setPage("works")}
              className="btn-rush-cyan cursor-pointer text-xs uppercase tracking-wider px-9 py-4 shadow-sm"
            >
              View Case Studies
            </button>
          </div>

        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 2: RESULTS SPEAK LOUDER (The Rush Republic 3D Card Deck)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white py-20 lg:py-28 border-b border-[#eaeaea] overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 xl:gap-16">
            
            {/* Left Column: Big Vertically Stacked Title & Tilted Sticker Button */}
            <div className="w-full lg:w-[38%] xl:w-[35%] flex flex-col justify-center select-none flex-shrink-0 mb-8 lg:mb-0">
              <div className="relative inline-block">
                <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-[6.4rem] font-black uppercase tracking-tight text-[#000000] leading-[0.88] font-['Manrope']">
                  RESULTS<br />
                  SPEAK<br />
                  LOUDER
                </h2>
                {/* Tilted Sticker Button like Rush Republic */}
                <button
                  type="button"
                  onClick={() => setPage("works")}
                  className="absolute left-6 sm:left-10 top-[48%] -rotate-[5deg] bg-white text-black border-2 border-black rounded-xl px-5 py-2.5 text-xs sm:text-sm font-black uppercase tracking-wider shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-[#12b7d4] hover:text-white hover:border-[#12b7d4] hover:shadow-[4px_4px_0px_rgba(18,183,212,1)] hover:-rotate-[2deg] hover:scale-105 transition-all cursor-pointer z-20"
                >
                  View Case Studies
                </button>
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
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-[290px] sm:w-[350px] lg:w-[380px] xl:w-[400px] h-[470px] sm:h-[510px] lg:h-[540px] xl:h-[560px] rounded-[28px] bg-[#141414] text-white overflow-hidden shadow-2xl select-none flex flex-col border border-neutral-800 ${
                        isCurrent ? "cursor-default" : "cursor-pointer hover:border-[#12b7d4]/60"
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
                          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-['Manrope'] tracking-tight mb-2 leading-tight">
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
          SECTION 3: BUILT FOR THE NOW (Manifesto Split Layout)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white py-20 lg:py-28 border-b border-[#eaeaea]">
        <div className="rush-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#000000] leading-[1.05] mb-6 font-['Manrope']">
                Built for the Now
              </h2>

              <p className="text-base sm:text-lg text-[#444444] font-medium leading-relaxed mb-8">
                Rise With Media isn’t just an agency. We’re the engine driving modern brands forward. For years, we’ve relentlessly engineered bold ideas, content engines, and high-converting systems that defy expectations.
              </p>

              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#000000] mb-4 font-['Manrope']">
                Agency for the <span className="text-[#12b7d4]">Now</span>
              </h3>

              <p className="text-base sm:text-lg text-[#444444] font-medium leading-relaxed mb-8">
                Unafraid, unrelenting and unapologetically obsessed with making your brand a force to be reckoned with. When others stop at “good enough,” we go all the way. We’re not here to fit in, we’re here to scale.
              </p>

              <button
                onClick={() => setPage("contact")}
                className="btn-rush-cyan text-xs uppercase tracking-wider px-8 py-3.5 cursor-pointer"
              >
                Contact us
              </button>
            </div>

            {/* Right Media Card Column */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-[#eaeaea] bg-black aspect-[4/3] shadow-xl">
                <video
                  src={reel2}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="tag-bubble bg-[#12b7d4] text-white mb-2">
                    Rise Production Core
                  </span>
                  <p className="text-xl font-black uppercase tracking-tight text-white mt-1">
                    Engineered Attention That Converts
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 4: R.O.A.R / RISE INSIGHTS
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white py-20 lg:py-28 border-b border-[#eaeaea]">
        <div className="rush-container">
          
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#000000] leading-none mb-3 font-['Manrope']">
              Republic Of Results<br />
              R.O.A.R
            </h2>
            <div className="font-script text-2xl sm:text-3xl text-[#555555]">
              We don’t just write about trends, we <span className="text-[#12b7d4]">create</span> them.
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((art) => (
              <div
                key={art.id}
                onClick={() => setActiveArticle(art)}
                className="group rounded-2xl border border-[#eaeaea] p-6 flex flex-col justify-between hover:border-[#12b7d4] transition-all duration-300 cursor-pointer bg-white"
              >
                <div>
                  {/* Category & Read time */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="tag-bubble-cyan text-[11px] py-1 px-3">
                      {art.category}
                    </span>
                    <span className="text-xs font-semibold text-[#888888]">
                      {art.readTime}
                    </span>
                  </div>

                  {/* Article Title */}
                  <h3 className="text-lg font-bold text-[#000000] group-hover:text-[#12b7d4] transition-colors leading-snug mb-3 font-['Manrope']">
                    {art.title}
                  </h3>

                  <p className="text-xs text-[#666666] leading-relaxed">
                    {art.tag}
                  </p>
                </div>

                {/* Read post link */}
                <div className="mt-6 pt-4 border-t border-[#f0f0f0] flex items-center justify-between text-xs font-bold text-black group-hover:text-[#12b7d4] transition-colors">
                  <span>Read post</span>
                  <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    ↗
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 5: TRUSTED BY VISIONARIES (The Rush Republic Split 3x3 Auto-Changing Grid)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white py-20 lg:py-28 border-b border-[#eaeaea]">
        <div className="rush-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Stacked Massive Headline */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.2rem] xl:text-[4.8rem] font-black uppercase tracking-tight text-[#000000] leading-[0.93] font-['Manrope']">
                Trusted by<br />
                Visionaries,<br />
                Admired by the<br />
                <span className="text-[#12b7d4]">Best</span>
              </h2>
            </div>

            {/* Right Column: 3x3 Auto-Changing Logo Cards (Every 2 seconds, full color) */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
                {logoGridSlots.map((slot, idx) => (
                  <div
                    key={idx}
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
                  </div>
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
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-['Manrope']">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#111111] border border-[#222222] rounded-3xl p-8 sm:p-12">
            
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
                <h4 className="text-xl font-black text-white font-['Manrope']">
                  {testimonials[activeReview].author}
                </h4>
                <p className="text-sm text-neutral-400 font-medium mt-1">
                  {testimonials[activeReview].role}
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className={`w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br ${testimonials[activeReview].avatarBg} flex items-center justify-center text-white text-5xl sm:text-7xl font-black font-['Manrope'] shadow-[0_10px_30px_rgba(18,183,212,0.3)] border-4 border-[#222222]`}>
                {testimonials[activeReview].initial}
              </div>
            </div>

          </div>

        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 7: OUR INITIATIVES (AKA PROFESSIONAL HOBBY)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white py-20 lg:py-28 border-b border-[#eaeaea]">
        <div className="rush-container">
          
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#000000] font-['Manrope']">
              Our Initiatives
            </h2>
            <div className="font-script text-2xl sm:text-3xl text-[#555555]">
              AKA <span className="text-[#12b7d4]">professional hobby</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Initiative 1 */}
            <div className="rounded-3xl border border-[#eaeaea] overflow-hidden p-6 sm:p-8 bg-white hover:border-[#12b7d4] transition-all group">
              <div className="aspect-video rounded-2xl overflow-hidden bg-black mb-6">
                <video
                  src={reel1}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black uppercase text-black font-['Manrope']">
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
            </div>

            {/* Initiative 2 */}
            <div className="rounded-3xl border border-[#eaeaea] overflow-hidden p-6 sm:p-8 bg-white hover:border-[#12b7d4] transition-all group">
              <div className="aspect-video rounded-2xl overflow-hidden bg-black mb-6">
                <video
                  src={reel2}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black uppercase text-black font-['Manrope']">
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
            </div>

          </div>

        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 8: CTA FORM (LET’S CONNECT TO CREATE MAGIC!)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection id="CTA" className="bg-[#000000] text-white py-20 lg:py-28">
        <div className="rush-container">
          
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-3 font-['Manrope']">
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
                        className={`px-4 py-2 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                          checked
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

          </div>

        </div>
      </ScrollSection>

      {/* Video Modal Lightbox */}
      <AnimatePresence>
        {activeVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveVideoModal(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden border border-neutral-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideoModal(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white text-black font-bold flex items-center justify-center cursor-pointer hover:bg-[#12b7d4] hover:text-white transition-colors"
              >
                ✕
              </button>
              <video
                src={activeVideoModal}
                controls
                autoPlay
                className="w-full h-full max-h-[80vh] object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Article Detail Modal (Read Post in Detail) */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-3 sm:p-6 md:p-8"
            onClick={() => setActiveArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.22 }}
              className="relative max-w-2xl w-full max-h-[92vh] sm:max-h-[88vh] bg-white rounded-2xl sm:rounded-3xl border border-[#eaeaea] shadow-2xl flex flex-col overflow-hidden text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Pinned Header with Badges & Always-Visible Close Button */}
              <div className="flex items-center justify-between px-5 sm:px-8 py-3.5 sm:py-4 border-b border-[#eaeaea] bg-white shrink-0 z-10">
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                  <span className="tag-bubble-cyan text-xs font-black">
                    {activeArticle.category}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#777777]">
                    {activeArticle.readTime}
                  </span>
                  {activeArticle.stat && (
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider bg-[#12b7d4] text-white px-2.5 py-0.5 rounded-full">
                      {activeArticle.stat}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setActiveArticle(null)}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f2f2f2] text-black font-bold flex items-center justify-center hover:bg-[#12b7d4] hover:text-white hover:scale-105 transition-all cursor-pointer shrink-0 ml-2"
                  aria-label="Close dialog"
                >
                  <span className="text-base sm:text-lg leading-none">✕</span>
                </button>
              </div>

              {/* Scrollable Article Body */}
              <div className="overflow-y-auto px-5 sm:px-8 py-6 space-y-6 overscroll-contain">
                {/* Full Title */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-black font-['Manrope'] leading-tight">
                  {activeArticle.title}
                </h2>

                {/* Subtitle / Intro */}
                <p className="text-sm sm:text-base text-[#444444] font-medium leading-relaxed pb-4 border-b border-[#eaeaea]">
                  {activeArticle.intro}
                </p>

                {/* Content Sections */}
                <div className="space-y-4">
                  {activeArticle.sections.map((sec, idx) => (
                    <div key={idx} className="bg-[#fafafa] border border-[#eaeaea] rounded-2xl p-4 sm:p-5">
                      <h3 className="text-sm sm:text-base font-black uppercase tracking-wide text-black mb-1.5 font-['Manrope']">
                        {sec.heading}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                        {sec.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Actionable Strategic Takeaway */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#e6f9fc]/70 border-l-4 border-[#12b7d4]">
                  <span className="text-xs font-black uppercase tracking-wider text-[#087f94] block mb-1">
                    Key Strategic Takeaway
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-black leading-relaxed italic">
                    "{activeArticle.takeaway}"
                  </p>
                </div>
              </div>

              {/* Pinned Bottom Footer Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-8 py-3.5 sm:py-4 border-t border-[#eaeaea] bg-[#fafafa] shrink-0 z-10">
                <div className="text-[11px] sm:text-xs font-bold text-[#888888] hidden sm:block">
                  Rise With Media Insights
                </div>
                <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-[#eaeaea] text-xs font-bold uppercase tracking-wider text-black hover:bg-white cursor-pointer transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setActiveArticle(null);
                      setPage("contact");
                    }}
                    className="btn-rush-cyan text-xs uppercase tracking-wider px-5 py-2 sm:px-6 sm:py-2.5 cursor-pointer shadow-sm"
                  >
                    Discuss Strategy →
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}