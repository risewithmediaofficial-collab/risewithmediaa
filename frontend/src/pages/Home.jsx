import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
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


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

// ─── Animated Counter ────────────────────────────────────────────────
function AnimatedCounter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const num = parseFloat(end);
    const duration = 1600;
    const step = (num / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setCount(num); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);
  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Hero (MarkitUp Inspired Split Layout) ──────────────────────────
function Hero({ setPage }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-white pt-32 pb-20 lg:pt-36 lg:pb-24">
      {/* Background ambient tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7fcff] via-[#f0fbff]/60 to-white pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#06b6d4 1px,transparent 1px),linear-gradient(90deg,#06b6d4 1px,transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ─── LEFT COLUMN: Title & Connected CTA ─────────────────── */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Kicker Text (MarkitUp clean text style without rounded border) */}
            <motion.div
              variants={fadeUp}
              className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0f172a] mb-4 flex items-center gap-1.5"
            >
              <span>HELLO WORLD,</span>
              <span className="text-[#06b6d4]">WE ARE</span>
            </motion.div>

            {/* Massive Display Title */}
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0f172a] uppercase tracking-tight leading-[1.04] mb-3"
            >
              RISE WITH MEDIA
            </motion.h1>

            {/* Stylized Cursive Subhead Accent */}
            <motion.div
              variants={fadeUp}
              custom={2}
              className="text-lg sm:text-2xl font-serif italic font-medium text-[#06b6d4] mb-5 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-[#06b6d4]/40" />
              <span>We Build Brands That Convert</span>
              <span className="w-8 h-px bg-[#06b6d4]/40" />
            </motion.div>

            {/* Concise Pitch */}
            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-[#64748b] text-base sm:text-lg max-w-xl mb-7 leading-relaxed font-normal"
            >
              Rise With Media helps businesses grow with social media marketing, Meta ads, websites, reels, and data-driven execution across every region.
            </motion.p>

            {/* Social Links Row (Refined Neo-Brutalist Micro-Pills) */}
            <motion.div variants={fadeUp} custom={4} className="flex items-center gap-3 sm:gap-3.5 mb-8">
              <a
                href="https://www.instagram.com/risewithmedia/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="w-10 h-10 rounded-full bg-white border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#0f172a] hover:bg-[#06b6d4] hover:text-white flex items-center justify-center text-[#0f172a] transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/919345254648"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="w-10 h-10 rounded-full bg-white border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#0f172a] hover:bg-[#06b6d4] hover:text-white flex items-center justify-center text-[#0f172a] transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.97.53 1.871.821 2.796.821 3.183 0 5.768-2.586 5.769-5.766.001-3.182-2.585-5.767-5.769-5.767zm7.545 5.767c-.002 4.163-3.387 7.548-7.55 7.548-1.282 0-2.476-.324-3.525-.889l-4.501 1.18 1.201-4.387c-.66-1.1-1.037-2.39-1.037-3.752 0-4.162 3.385-7.547 7.55-7.547 4.162 0 7.547 3.385 7.547 7.547z" />
                </svg>
              </a>
              <a
                href="mailto:hello@risewithmedia.com"
                title="Email Us"
                className="w-10 h-10 rounded-full bg-white border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#0f172a] hover:bg-[#06b6d4] hover:text-white flex items-center justify-center text-[#0f172a] transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/risewithmedia/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-10 h-10 rounded-full bg-white border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#0f172a] hover:bg-[#06b6d4] hover:text-white flex items-center justify-center text-[#0f172a] transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </motion.div>

            {/* Connected Pill CTA (MarkitUp Signature Seamless Circuit) */}
            <motion.div variants={fadeUp} custom={5} className="flex items-center">
              {/* Primary Pill Button */}
              <button
                onClick={() => setPage("contact")}
                className="relative z-10 h-12 sm:h-14 px-7 sm:px-8 rounded-full border-2 border-[#0f172a] bg-white text-[#0f172a] font-black text-xs sm:text-sm tracking-wider uppercase shadow-[3px_3px_0px_#0f172a] hover:bg-[#06b6d4] hover:text-white hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#0f172a] transition-all duration-200 inline-flex items-center justify-center shrink-0"
              >
                <span>GET STRATEGY CALL</span>
              </button>

              {/* Seamless Connecting Bridge */}
              <div className="w-8 sm:w-12 h-[2px] bg-[#0f172a] shrink-0" />

              {/* Secondary Action with Matching Height and Precision SVG Arrow */}
              <button
                onClick={() => setPage("works")}
                className="h-12 sm:h-14 pl-4 sm:pl-5 text-xs sm:text-sm font-black uppercase tracking-wider text-[#0f172a] hover:text-[#06b6d4] transition-colors inline-flex items-center gap-2 group/work whitespace-nowrap shrink-0"
              >
                <span className="border-b-2 border-transparent group-hover/work:border-[#06b6d4] transition-all pb-0.5">
                  VIEW OUR WORK
                </span>
                <svg
                  className="w-3.5 h-3.5 text-[#0f172a] group-hover/work:text-[#06b6d4] group-hover/work:translate-x-1 transition-all shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </motion.div>
          </motion.div>

          {/* ─── RIGHT COLUMN: Circular Focal Graphic & Floating Badges ── */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0">

            {/* Focal Circle Canvas */}
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[440px] lg:h-[440px] rounded-full bg-gradient-to-tr from-[#dff6ff] via-[#f0fbff] to-white shadow-[0_20px_50px_rgba(6,182,212,0.14)] flex items-center justify-center p-6">

              {/* Concentric inner orbit ring */}
              <div className="absolute inset-4 rounded-full border border-dashed border-[#06b6d4]/20 pointer-events-none" />

              {/* Center Growth Display Card */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative z-10 w-full max-w-[270px] bg-white border border-[#dff6ff] rounded-[24px] p-5 shadow-xl text-left"
              >
                <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[#dff6ff]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#06b6d4] animate-pulse" />
                    <span className="text-xs font-black text-[#0f172a] tracking-tight">Growth Velocity</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#06b6d4] bg-[#f0fbff] border border-[#dff6ff] px-2 py-0.5 rounded-full">
                    Live Engine
                  </span>
                </div>

                {/* Sparkline & Metric */}
                <div className="mb-3">
                  <div className="text-[11px] font-medium text-[#64748b]">Total Audience Reach</div>
                  <div className="text-2xl font-black text-[#0f172a] tracking-tight mt-0.5 flex items-baseline gap-2">
                    <span>1.4M+</span>
                    <span className="text-xs font-bold text-emerald-500">↑ 340%</span>
                  </div>
                </div>

                {/* Minimal bar chart illustration */}
                <div className="flex items-end justify-between gap-1.5 h-12 pt-2 border-t border-[#f0fbff]">
                  {[35, 52, 65, 45, 80, 92, 100].map((h, idx) => (
                    <div key={idx} className="flex-1 bg-[#dff6ff] hover:bg-[#06b6d4] rounded-t transition-colors h-full flex items-end">
                      <div className="w-full bg-[#06b6d4] rounded-t transition-all" style={{ height: `${h}%` }} />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Decorative 3x3 Dot Matrix Top-Right */}
              <div className="absolute -top-3 -right-3 grid grid-cols-3 gap-1.5 opacity-35">
                {[...Array(9)].map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#0f172a]" />
                ))}
              </div>

              {/* Decorative 3x3 Dot Matrix Bottom-Left */}
              <div className="absolute -bottom-3 -left-3 grid grid-cols-3 gap-1.5 opacity-35">
                {[...Array(9)].map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
                ))}
              </div>

              {/* Floating Neo-Brutalist Pill Badge 1 (Top Left) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 sm:-left-8 z-20 bg-white border-2 border-[#0f172a] text-[#0f172a] font-black text-[11px] sm:text-xs px-3.5 py-1.5 rounded-full shadow-[3px_3px_0px_#0f172a] flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>⭐</span>
                <span>30+ Happy Clients</span>
              </motion.div>

              {/* Floating Neo-Brutalist Pill Badge 2 (Top Right) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-8 -right-4 sm:-right-8 z-20 bg-white border-2 border-[#0f172a] text-[#0f172a] font-black text-[11px] sm:text-xs px-3.5 py-1.5 rounded-full shadow-[3px_3px_0px_#0f172a] flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>🚀</span>
                <span>1M+ Views Generated</span>
              </motion.div>

              {/* Floating Neo-Brutalist Pill Badge 3 (Bottom Left) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-3 sm:-left-6 z-20 bg-white border-2 border-[#0f172a] text-[#0f172a] font-black text-[11px] sm:text-xs px-3.5 py-1.5 rounded-full shadow-[3px_3px_0px_#0f172a] flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>📈</span>
                <span>5× Average ROI</span>
              </motion.div>

              {/* Floating Neo-Brutalist Pill Badge 4 (Bottom Right) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-6 -right-3 sm:-right-8 z-20 bg-white border-2 border-[#0f172a] text-[#0f172a] font-black text-[11px] sm:text-xs px-3.5 py-1.5 rounded-full shadow-[3px_3px_0px_#0f172a] flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>⚡</span>
                <span>SaaS & Web Engineered</span>
              </motion.div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

// ─── Ticker / Trust Bar ──────────────────────────────────────────────
function TrustBar() {
  const logos = [
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

  return (
    <div className="bg-white border-y border-[#dff6ff] py-9 overflow-hidden">
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 bg-[#f0fbff] border border-[#dff6ff] text-[#0f172a]/60 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
          Trusted by 20+ Growing Brands
        </span>
      </div>

      {/* Fade edges */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex">
          {[0, 1, 2].map((setIndex) => (
            <div
              key={setIndex}
              className="flex items-center flex-shrink-0 animate-marquee pr-[56px]"
              style={{ gap: "56px" }}
            >
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex items-center justify-center px-4 py-2.5 rounded-2xl bg-white border border-[#dff6ff] shadow-sm hover:border-[#06b6d4]/40 transition-all duration-300"
                  title={logo.name}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-12 w-auto max-w-[150px] object-contain opacity-95 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}

// ─── What We Build / Services (MarkitUp Inspired) ─────────────────────
const servicesData = [
  {
    num: "01",
    category: "CONTENT & SOCIAL",
    subtitle: "Make Your Brand Seen",
    description: "We turn ideas into content people stop, watch and remember. High-retention reels, shorts, creative design, and monthly strategy.",
    tag: "Instagram, YouTube & more",
  },
  {
    num: "02",
    category: "WEB & CONVERSION",
    subtitle: "Turn Visitors Into Customers",
    description: "Your website shouldn't just look good. We build high-converting websites, landing pages, and funnels engineered for real action.",
    tag: "Websites, Funnels & SEO",
  },
  {
    num: "03",
    category: "PERFORMANCE MARKETING",
    subtitle: "Reach The Right Audience",
    description: "We combine scroll-stopping creative, precision targeting, and data to turn ad spend into qualified leads, sales, and sustainable ROAS.",
    tag: "Meta Ads & Lead Gen",
  },
  {
    num: "04",
    category: "SAAS & TECHNOLOGY",
    subtitle: "Build The System Behind You",
    description: "We build the technology that powers your growth. Custom CRM, ERP, and automated workflows that help businesses scale effortlessly.",
    tag: "Custom SaaS & CRM",
  },
];

// ─── Minimalist MarkitUp Service Card ────────────────────────────────
function MarkitUpCard({ service, index }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="group relative bg-white border border-[#dff6ff]/80 rounded-[28px] p-8 sm:p-9 shadow-[0_10px_35px_-15px_rgba(6,182,212,0.08)] hover:shadow-[0_20px_45px_-12px_rgba(6,182,212,0.18)] hover:border-[#06b6d4]/40 transition-all duration-500 flex flex-col justify-between"
      whileHover={{ y: -6 }}
    >
      <div>
        {/* Top: Category Title & Number */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#06b6d4]">
            {service.category}
          </span>
          <span className="text-xs font-mono font-bold text-[#0f172a]/20 group-hover:text-[#06b6d4] transition-colors">
            {service.num}
          </span>
        </div>

        {/* Subtitle */}
        <h3 className="text-xl sm:text-[1.35rem] font-bold text-[#0f172a] mb-4 leading-snug group-hover:text-[#0891b2] transition-colors">
          {service.subtitle}
        </h3>

        {/* Clean Pitch Description */}
        <p className="text-[#64748b] text-sm leading-relaxed mb-8 font-normal">
          {service.description}
        </p>
      </div>

      {/* Bottom Row: Tag & 3x3 Dot Grid Pattern (Signature MarkitUp) */}
      <div className="pt-5 border-t border-[#dff6ff]/60 flex items-end justify-between gap-3">
        <span className="text-[11px] font-semibold text-[#0f172a]/60 bg-[#f7fcff] border border-[#dff6ff] px-3 py-1.5 rounded-full truncate">
          {service.tag}
        </span>

        {/* Signature 3x3 geometric dot pattern */}
        <div className="grid grid-cols-3 gap-1.5 opacity-30 group-hover:opacity-100 transition-all shrink-0">
          {[...Array(9)].map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full border border-[#0f172a] group-hover:border-[#06b6d4] group-hover:bg-[#06b6d4] transition-all"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── What We Build Section (Streamlined & Minimalist) ─────────────────
function ServicesSection({ setPage }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#f7fcff] py-24 sm:py-28 px-6 lg:px-10 relative overflow-hidden" ref={ref} id="services">
      {/* Subtle ambient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#06b6d4]/8 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Minimal Section Heading */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-white border border-[#dff6ff] text-[#06b6d4] text-xs font-bold uppercase tracking-[0.22em] px-4 py-1.5 rounded-full mb-4 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] animate-pulse" />
            What We Build
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl sm:text-5xl font-black text-[#0f172a] uppercase tracking-tight mb-3"
          >
            Our Services
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg font-serif italic text-[#06b6d4] mb-3"
          >
            We engineer attention that translates directly into revenue.
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="text-[#64748b] text-sm sm:text-base max-w-lg mx-auto leading-relaxed"
          >
            From scroll-stopping reels to high-converting funnels and automated SaaS, we build the entire digital growth machine for your brand.
          </motion.p>
        </motion.div>

        {/* 4 Clean Minimalist Cards */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicesData.map((service, i) => (
            <MarkitUpCard
              key={service.num}
              service={service}
              index={i}
            />
          ))}
        </motion.div>

        {/* Clean Call to Action */}
        {setPage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center mt-12 sm:mt-16"
          >
            <button
              onClick={() => setPage("contact")}
              className="inline-flex items-center gap-2 bg-[#06b6d4] hover:bg-[#0891b2] text-white font-black text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-full border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_#0f172a] transition-all"
            >
              <span>Discuss Your Project</span>
              <span>→</span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// ─── How It Works (MarkitUp Numbered Process) ─────────────────────────
function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const steps = [
    { num: "01", icon: "📞", title: "Free Strategy Call", desc: "We learn your business, goals, and challenges in a 30-min call — no pressure, no sales pitch." },
    { num: "02", icon: "🗺️", title: "Custom Growth Plan", desc: "We build a tailored strategy with clear milestones and expected outcomes specific to you." },
    { num: "03", icon: "⚡", title: "Execution Begins", desc: "Our team starts creating, publishing, and optimizing. You see real deliverables within 72 hours." },
    { num: "04", icon: "📊", title: "Results & Scaling", desc: "We track KPIs weekly, refine what converts, and scale the winning campaigns." },
  ];
  return (
    <section ref={ref} className="bg-white py-24 sm:py-28 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" animate={inView ? "show" : "hidden"} variants={stagger} className="text-center mb-16">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#f0fbff] border border-[#dff6ff] text-[#06b6d4] text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
            Our Process
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-5xl font-black text-[#0f172a] uppercase tracking-tight mb-3">
            How We Work
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-lg font-serif italic text-[#06b6d4] mb-3">
            A simple, proven process to get you from zero to consistent growth.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" animate={inView ? "show" : "hidden"} variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="group bg-[#f7fcff] border border-[#dff6ff] rounded-[26px] p-7 shadow-sm hover:shadow-lg hover:border-[#06b6d4]/40 hover:bg-white transition-all duration-400 flex flex-col justify-between"
              whileHover={{ y: -5 }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-[#06b6d4]">{step.num}</span>
                  <div className="w-10 h-10 rounded-2xl bg-white border border-[#dff6ff] flex items-center justify-center text-xl shadow-sm">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-[#0f172a] font-bold text-base mb-2 group-hover:text-[#0891b2] transition-colors">{step.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed font-normal">{step.desc}</p>
              </div>

              {/* Signature 3x3 dot matrix */}
              <div className="pt-6 mt-4 border-t border-[#dff6ff]/60 flex justify-end">
                <div className="grid grid-cols-3 gap-1 opacity-25 group-hover:opacity-100 transition-opacity">
                  {[...Array(9)].map((_, idx) => (
                    <span key={idx} className="w-1 h-1 rounded-full bg-[#0f172a] group-hover:bg-[#06b6d4] transition-colors" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── AI Automation ───────────────────────────────────────────────────
function AISection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const items = ["WhatsApp Automation", "CRM Setup", "Auto Reply Bots", "Lead Tracking Systems", "AI Tools for Business", "Custom Automations"];
  return (
    <section ref={ref} className="bg-[#0f172a] py-24 px-6 relative overflow-hidden">
      <div className="absolute top-[-80px] right-[-80px] w-[340px] h-[340px] rounded-full bg-[#06b6d4]/15 blur-[90px]" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[260px] h-[260px] rounded-full bg-[#dff6ff]/10 blur-[80px]" />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "50px 50px" }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div initial="hidden" animate={inView ? "show" : "hidden"} variants={stagger}
          className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full text-xs font-bold text-[#06b6d4] uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
              SaaS & Automations
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              AI Automation<br />& CRM Solutions
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-[#9ca3af] mb-8 leading-relaxed">
              We automate your business so you save time and never miss a lead. Our AI-powered systems work 24/7 while you focus on what matters.
            </motion.p>
            <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}
              className="grid grid-cols-2 gap-3">
              {items.map((item, i) => (
                <motion.div key={i} variants={fadeUp} custom={i}
                  className="flex items-center gap-2 text-sm text-[#d1d5db]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] flex-shrink-0" />
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeUp} custom={3} className="relative flex items-center justify-center">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-56 h-56 rounded-full border border-dashed border-[#06b6d4]/20" />

            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8 text-center max-w-xs w-full">
              <div className="text-5xl mb-4">🤖</div>
              <p className="text-white font-bold text-base mb-2">AI-First Approach</p>
              <p className="text-[#9ca3af] text-sm leading-relaxed">
                From WhatsApp bots to full CRM automation — we build intelligent systems that grow with your business.
              </p>
            </div>

            <div className="absolute left-0 top-4 space-y-2">
              {[
                { label: "Response Rate", val: "99%", color: "bg-[#0f172a]" },
                { label: "Lead Capture", val: "24/7", color: "bg-[#06b6d4]" },
                { label: "Time Saved", val: "4h/day", color: "bg-[#67e8f9]" },
              ].map((m, i) => (
                <motion.div key={i} initial={{ x: -30, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                  className={`${m.color} backdrop-blur-sm rounded-xl px-3 py-2 text-xs font-bold text-white`}>
                  {m.val} <span className="font-normal opacity-80">{m.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
              className="absolute right-0 top-6 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl px-3 py-2 text-xs text-white font-semibold">
              🔔 New Lead
            </motion.div>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              className="absolute right-0 bottom-6 bg-[#06b6d4]/20 border border-[#06b6d4]/30 backdrop-blur-sm rounded-2xl px-3 py-2 text-xs text-white font-semibold">
              ✅ Auto-replied
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Results (MarkitUp Styled Metric Cards) ───────────────────────────
function ResultsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const cases = [
    { client: "School Brand", metric: "340", suffix: "%", label: "Revenue Growth in 60 Days", tag: "Meta Ads + Content" },
    { client: "Bridal Studio", metric: "120", suffix: "+", label: "Qualified Leads / Month", tag: "Lead Gen + Automation" },
    { client: "Coaching Business", metric: "28", suffix: "L+", label: "Organic Views in 60 Days", tag: "Short-Form Content" },
  ];
  return (
    <section ref={ref} className="bg-[#f7fcff] py-24 sm:py-28 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <motion.div initial="hidden" animate={inView ? "show" : "hidden"} variants={stagger} className="text-center mb-16">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white border border-[#dff6ff] text-[#06b6d4] text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
            Real Results
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-5xl font-black text-[#0f172a] uppercase tracking-tight mb-3">
            Numbers That Speak
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-lg font-serif italic text-[#06b6d4] mb-3">
            Not claims — actual metrics delivered for real clients.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" animate={inView ? "show" : "hidden"} variants={stagger}
          className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}
              className="group bg-white border border-[#dff6ff] rounded-[28px] p-8 hover:border-[#06b6d4]/40 hover:shadow-xl hover:shadow-[#06b6d4]/10 transition-all duration-400 flex flex-col justify-between"
              whileHover={{ y: -6 }}>
              <div>
                <div className="inline-flex items-center bg-[#f7fcff] border border-[#dff6ff] rounded-full px-3.5 py-1 text-xs font-semibold text-[#0f172a]/60 mb-6 shadow-sm">
                  {c.tag}
                </div>
                <div className="text-5xl font-black text-[#06b6d4] tracking-tight mb-2">
                  <AnimatedCounter end={c.metric} suffix={c.suffix} />
                </div>
                <p className="text-[#64748b] text-sm mb-4 font-normal">{c.label}</p>
                <p className="text-[#0f172a] font-bold text-sm">{c.client}</p>
              </div>

              {/* 3x3 Dot Pattern */}
              <div className="pt-6 mt-4 border-t border-[#dff6ff]/60 flex justify-end">
                <div className="grid grid-cols-3 gap-1 opacity-25 group-hover:opacity-100 transition-opacity">
                  {[...Array(9)].map((_, idx) => (
                    <span key={idx} className="w-1.5 h-1.5 rounded-full bg-[#0f172a] group-hover:bg-[#06b6d4] transition-colors" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Why Us (MarkitUp Grid Cards) ────────────────────────────────────
function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reasons = [
    { icon: "🎯", title: "Strategy First", desc: "We don't just post content — we build growth systems with clear KPIs and monthly reviews." },
    { icon: "🤝", title: "Dedicated Team", desc: "You get a team of specialists, not a single freelancer juggling 20 clients at once." },
    { icon: "📊", title: "Full Transparency", desc: "Weekly reports and honest communication. No vanity metrics, no fluff." },
    { icon: "⚡", title: "Fast Execution", desc: "Most clients see first deliverables within 72 hours of onboarding. We move fast." },
    { icon: "🔒", title: "No Lock-in Contracts", desc: "Month-to-month plans with no long-term commitment. We earn your trust every month." },
    { icon: "🌐", title: "Multi-Channel Expertise", desc: "From Instagram to Google Ads — we manage your entire digital presence." },
  ];
  return (
    <section ref={ref} className="bg-white py-24 sm:py-28 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" animate={inView ? "show" : "hidden"} variants={stagger} className="text-center mb-16">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#f0fbff] border border-[#dff6ff] text-[#06b6d4] text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
            Why Us
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-5xl font-black text-[#0f172a] uppercase tracking-tight mb-3">
            What Makes Us Different
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-lg font-serif italic text-[#06b6d4] mb-3">
            Built for performance, transparency, and relentless execution.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" animate={inView ? "show" : "hidden"} variants={stagger}
          className="grid md:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}
              className="group bg-[#f7fcff] border border-[#dff6ff] rounded-[26px] p-7 hover:border-[#06b6d4]/40 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              whileHover={{ y: -4 }}>
              <div>
                <div className="text-3xl mb-4">{r.icon}</div>
                <h3 className="text-[#0f172a] font-bold text-base mb-2 group-hover:text-[#0891b2] transition-colors">{r.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed font-normal">{r.desc}</p>
              </div>

              {/* 3x3 Dot Pattern */}
              <div className="pt-6 mt-4 border-t border-[#dff6ff]/60 flex justify-end">
                <div className="grid grid-cols-3 gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
                  {[...Array(9)].map((_, idx) => (
                    <span key={idx} className="w-1 h-1 rounded-full bg-[#0f172a] group-hover:bg-[#06b6d4] transition-colors" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Testimonials (MarkitUp Avatar with Quote Badge) ─────────────────
function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reviews = [
    { name: "Ahkila", role: "Retail Brand Founder", text: "Within 3 months we went from 0 to 4 lakh in monthly revenue. The team just gets it — strategy, execution, everything." },
    { name: "Saranya", role: "Bridal Studio Owner", text: "I was getting 4-5 leads a month. Now I get 10+ qualified leads monthly. The WhatsApp automation alone saved me hours." },
    { name: "Prem Charles", role: "EdTech Director", text: "I've hired agencies before — these guys are a completely different level. Professional, fast, and metric-focused." },
  ];
  return (
    <section ref={ref} className="bg-[#f7fcff] py-24 sm:py-28 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" animate={inView ? "show" : "hidden"} variants={stagger} className="text-center mb-16">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white border border-[#dff6ff] text-[#06b6d4] text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
            Testimonials
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-5xl font-black text-[#0f172a] uppercase tracking-tight mb-3">
            What Clients Say
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-lg font-serif italic text-[#06b6d4] mb-3">
            Real feedback from business leaders we've helped scale.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" animate={inView ? "show" : "hidden"} variants={stagger}
          className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}
              className="group bg-white border border-[#dff6ff] rounded-[28px] p-8 hover:border-[#06b6d4]/40 hover:shadow-xl hover:shadow-[#06b6d4]/10 transition-all duration-400 flex flex-col justify-between"
              whileHover={{ y: -5 }}>
              <div>
                {/* Avatar with MarkitUp overlapping quote badge */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#06b6d4] to-[#dff6ff] flex items-center justify-center text-white font-black text-base shadow-sm">
                      {r.name[0]}
                    </div>
                    {/* Quote bubble badge */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0f172a] text-[#06b6d4] flex items-center justify-center text-[11px] font-black border-2 border-white shadow-xs">
                      "
                    </div>
                  </div>
                  <div>
                    <p className="text-[#0f172a] font-bold text-sm">{r.name}</p>
                    <p className="text-[#64748b] text-xs">{r.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 text-amber-400 text-xs">
                  {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
                </div>

                <p className="text-[#334155] text-sm leading-relaxed font-normal">
                  "{r.text}"
                </p>
              </div>

              {/* Signature 3x3 dot matrix */}
              <div className="pt-6 mt-6 border-t border-[#dff6ff]/60 flex justify-end">
                <div className="grid grid-cols-3 gap-1 opacity-25 group-hover:opacity-100 transition-opacity">
                  {[...Array(9)].map((_, idx) => (
                    <span key={idx} className="w-1.5 h-1.5 rounded-full bg-[#0f172a] group-hover:bg-[#06b6d4] transition-colors" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────
function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: "How quickly will I see results?", a: "Most clients see measurable traction within 30–45 days. For paid ads, results can be visible within the first week of running campaigns." },
    { q: "Do you work with all business sizes?", a: "Absolutely. We work with businesses of all sizes — from early-stage founders to established medium-scale enterprises. Our process adapts to your budget and growth targets." },
    { q: "What industries do you work with?", a: "Retail, fashion, healthcare, education, SaaS, real estate, manufacturing, and food products. Our strategy engine adapts to any industry." },
    { q: "Can I cancel anytime?", a: "Yes. All our plans are month-to-month with no long-term contracts. We believe in earning your business every single month." },
    { q: "What do you need from me to get started?", a: "Very little. We do a 30-min onboarding call, gather your existing brand assets, and handle the entire strategy and execution for you." },
  ];
  return (
    <section ref={ref} className="bg-white py-24 sm:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div initial="hidden" animate={inView ? "show" : "hidden"} variants={stagger} className="text-center mb-16">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#f0fbff] border border-[#dff6ff] text-[#06b6d4] text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
            FAQ
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-5xl font-black text-[#0f172a] uppercase tracking-tight mb-3">
            Common Questions
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-lg font-serif italic text-[#06b6d4] mb-3">
            Clear answers to everything you need to know before getting started.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" animate={inView ? "show" : "hidden"} variants={stagger} className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}
              className="border border-[#dff6ff] rounded-2xl overflow-hidden bg-[#f7fcff] hover:border-[#06b6d4]/40 transition-colors">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between text-[#0f172a] font-bold text-sm sm:text-base hover:bg-white transition-colors">
                <span>{faq.q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.25 }}
                  className="text-[#06b6d4] text-xl flex-shrink-0 ml-4 font-mono font-bold">+</motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                    <p className="px-6 pb-5 text-[#64748b] text-sm leading-relaxed border-t border-[#dff6ff]/50 pt-3 bg-white font-normal">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── CTA Strip (MarkitUp Neo-Brutalist Pill) ───────────────────────────
function CTAStrip({ setPage }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="bg-[#0f172a] py-24 px-6 relative overflow-hidden">
      <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[500px] h-[260px] bg-[#06b6d4]/15 rounded-full blur-[100px]" />
      <motion.div initial="hidden" animate={inView ? "show" : "hidden"} variants={stagger}
        className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
          Ready to Scale Your Brand?
        </motion.h2>
        <motion.p variants={fadeUp} custom={1} className="text-lg font-serif italic text-[#67e8f9] mb-4">
          Book a free strategy session with our core team.
        </motion.p>
        <motion.p variants={fadeUp} custom={2} className="text-[#9ca3af] mb-10 max-w-md mx-auto text-sm leading-relaxed">
          We'll analyze your current digital presence, pinpoint gaps, and outline a tailored execution roadmap.
        </motion.p>
        <motion.button variants={fadeUp} custom={3}
          onClick={() => setPage("contact")}
          className="bg-[#06b6d4] text-white px-9 py-4 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-white shadow-[4px_4px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#ffffff] transition-all"
          whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          Book Free Strategy Call →
        </motion.button>
        <motion.div variants={fadeUp} custom={4} className="flex flex-wrap items-center justify-center gap-6 mt-10">
          {["30-min call", "Custom roadmap", "Zero commitment"].map((item, i) => (
            <span key={i} className="flex items-center gap-1.5 text-[#9ca3af] text-xs font-semibold">
              <span className="text-[#06b6d4]">✓</span> {item}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Export ──────────────────────────────────────────────────────────
export default function Home({ setPage }) {
  return (
    <main className="overflow-x-hidden">
      <Hero setPage={setPage} />
      <TrustBar />
      <ServicesSection setPage={setPage} />
      <HowItWorks />
      <AISection />
      <ResultsSection />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <CTAStrip setPage={setPage} />
    </main>
  );
}