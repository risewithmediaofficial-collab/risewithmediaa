import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import emailjs from "@emailjs/browser";
import ScrollSection, { rushEase } from "../components/ScrollSection";

// Client Logos
import arunamLogo from "../assets/clientlogo/Arunam Logo.png";
import killisBirdLogo from "../assets/clientlogo/KILLIS BIRD - LOGO.png";
import royalLogo from "../assets/clientlogo/Royal LOGO.png";
import valsiiLogo from "../assets/clientlogo/Valsii Official LOGO.png";
import chocodorLogo from "../assets/clientlogo/chocodor logo.jpg";
import dishaLogo from "../assets/clientlogo/disha logo.jpeg";
import futureKidsLogo from "../assets/clientlogo/future kids logo.jpeg";
import futureSchoolLogo from "../assets/clientlogo/future school logo.png";
import hseihshuLogo from "../assets/clientlogo/hseihshu logo.png";
import mkLogo from "../assets/clientlogo/mk logo.jpeg";
import mrpLogo from "../assets/clientlogo/mrp logo.jpeg";
import myHosurPropertyLogo from "../assets/clientlogo/my hosur property logo.png";
import richiLogo from "../assets/clientlogo/richi logo.png";
import sanjaySaiLogo from "../assets/clientlogo/sanjay sai logo.png";
import sanjeeviLogo from "../assets/clientlogo/sanjeevi logo.jpeg";
import femi9Logo from "../assets/clientlogo/femi9logo.png";
import kertamLogo from "../assets/clientlogo/kertamlogo.png";
import krinbrinLogo from "../assets/clientlogo/krinbrinlogo.png";
import zoyLogo from "../assets/clientlogo/zoylogo.png";

// Media Assets (Reels)
import reel1 from "../assets/clientvideos/1.mp4";
import reel2 from "../assets/clientvideos/2.mp4";
import reel3 from "../assets/clientvideos/3.mp4";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_s15r115";
const EMAILJS_TEMPLATE_ID = "template_hpylv7f";
const EMAILJS_PUBLIC_KEY = "srGKTSrmIkawAjpyy";

// 3x3 Grid Logo Slots for The Rush Republic auto-changing cards (2-second rotation)
const logoGridSlots = [
  // Row 1
  [arunamLogo, femi9Logo, mkLogo],
  [killisBirdLogo, futureSchoolLogo, mrpLogo],
  [royalLogo, hseihshuLogo, myHosurPropertyLogo],
  // Row 2
  [valsiiLogo, chocodorLogo, richiLogo],
  [dishaLogo, sanjaySaiLogo, sanjeeviLogo],
  [futureKidsLogo, kertamLogo, zoyLogo],
  // Row 3
  [krinbrinLogo, femi9Logo, royalLogo],
  [myHosurPropertyLogo, dishaLogo, chocodorLogo],
  [richiLogo, sanjeeviLogo, sanjaySaiLogo],
];

// Flolapo-Style Skills List (Clean typography - No heavy images)
const flolapoSkills = [
  "Social Media Management",
  "Digital Media Marketing",
  "Web Design & Development",
  "Content Production & Reels",
  "SaaS & Business Automation",
];

// Flolapo-Style Kinetic Scroll Skill Item (Smooth color shift from grey to brand cyan #12b7d4)
function FlolapoSkillItem({ title, onClick }) {
  const itemRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 92%", "center 50%"],
  });

  const scrollColor = useTransform(
    scrollYProgress,
    [0, 0.35, 0.75, 1],
    ["#262626", "#3f3f46", "#0ea5c0", "#12b7d4"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [0.3, 0.65, 1]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.96, 1]
  );

  return (
    <motion.div
      ref={itemRef}
      style={{
        color: isHovered ? "#12b7d4" : scrollColor,
        opacity: isHovered ? 1 : opacity,
        scale,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="cursor-pointer select-none py-2 sm:py-3 md:py-4 transition-transform duration-300 hover:scale-[1.03] active:scale-98 group w-full"
    >
      <h3
        className="text-xl sm:text-2xl md:text-3xl lg:text-[2.8rem] xl:text-[3.4rem] leading-tight uppercase tracking-tight text-center font-black drop-shadow-sm transition-colors duration-200 font-['Varela_Round'] whitespace-normal sm:whitespace-nowrap"
        style={{ fontFamily: "'Varela Round', sans-serif" }}
      >
        {title}
      </h3>
    </motion.div>
  );
}

export default function Home({ setPage }) {
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [activeReview, setActiveReview] = useState(0);
  const [activeLogoStep, setActiveLogoStep] = useState(0);

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

  const testimonials = [
    {
      author: "Ahkila",
      initial: "A",
      role: "Founder, Krin Brin School",
      brand: "Krin Brin School",
      quote:
        "Scaled from 0 to 4L monthly revenue in 3 months. Outstanding execution.",
      avatarBg: "from-[#12b7d4] to-[#0284c7]",
    },
    {
      author: "Saranya",
      initial: "S",
      role: "Founder, saranyaelitebridalstudio",
      brand: "Saranya Elite Bridal Studio",
      quote:
        "High-intent leads surged within weeks. The WhatsApp automation saved hours.",
      avatarBg: "from-[#12b7d4] to-[#0ea5c0]",
    },
    {
      author: "Prem Charlesr",
      initial: "P",
      role: "Founder, Allinov",
      brand: "Allinov",
      quote:
        "A completely different caliber of speed, creative quality, and execution.",
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
        {/* Ambient Blur Color Effect (Luminous Cyan & Sky Glow) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[300px] sm:h-[380px] bg-gradient-to-tr from-[#12b7d4]/20 via-[#38bdf8]/15 to-transparent rounded-full blur-[100px] pointer-events-none -z-0" />
        <div className="absolute top-4 right-10 w-[300px] h-[300px] bg-[#12b7d4]/10 rounded-full blur-[80px] pointer-events-none" />

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
          <div className="max-w-4xl mx-auto mb-8">

            {/* Line 1: “MARKETING THAT WORKS WHILE YOU SNOOZE” */}
            <div className="overflow-hidden flex flex-wrap justify-center leading-[1.08]">
              {/* LEFT HALF */}
              <motion.span
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.05 }}
                transition={{ duration: 0.85, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-black uppercase tracking-tight text-[#000000] font-['Varela_Round'] inline-block pr-[0.18em]"
              >
                “MARKETING THAT WORKS
              </motion.span>
              {/* RIGHT HALF */}
              <motion.span
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.05 }}
                transition={{ duration: 0.85, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-black uppercase tracking-tight text-[#000000] font-['Varela_Round'] inline-block"
              >
                WHILE YOU SNOOZE”
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
                className="font-script text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-[#000000] inline-flex items-baseline"
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
                className="font-script text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-[#000000] inline-block"
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
          SECTION 2: WHAT WE DO (Flolapo UI Style - Kinetic Typography with Scroll Color Shift)
      ───────────────────────────────────────────────────────────────── */}
      <section className="bg-[#000000] text-white py-24 sm:py-32 lg:py-36 relative overflow-hidden border-b border-neutral-900">

        {/* Ambient Blur Color Effect (Dual-Color Luminous Glow) */}
        <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-[#12b7d4]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-[550px] h-[550px] bg-[#0284c7]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="rush-container relative z-10">

          {/* Header Tag matching Flolapo "WHAT WE COVER" */}
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#888888] font-['Varela_Round']">
              WHAT WE COVER
            </span>
          </div>

          {/* Kinetic Typography Vertical Stack */}
          <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 max-w-7xl mx-auto w-full">
            {flolapoSkills.map((skill, idx) => (
              <FlolapoSkillItem
                key={idx}
                title={skill}
                onClick={() => setPage("contact")}
              />
            ))}
          </div>

          {/* Micro CTA Button */}
          <div className="text-center mt-10 sm:mt-14">
            <button
              onClick={() => setPage("contact")}
              className="btn-rush-cyan text-xs uppercase tracking-wider px-8 py-3.5 cursor-pointer shadow-lg hover:scale-105 active:scale-95 font-bold font-['Varela_Round']"
            >
              Start A Project With Us →
            </button>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 3: OUR WORKS (Tilted Video Cards with Stroke Text Blend)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white py-16 sm:py-24 border-b border-[#eaeaea] relative overflow-hidden">

        {/* Ambient Blur Color Effect */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[600px] h-[260px] bg-[#12b7d4]/12 rounded-full blur-[100px] pointer-events-none" />

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
              className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#000000] font-['Varela_Round'] leading-tight mb-3"
            >
              Works That <span className="text-[#12b7d4]">Captivate</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 0.6, delay: 0.16, ease: rushEase }}
              className="font-script text-xl sm:text-2xl md:text-3xl text-[#12b7d4]"
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

        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 4: RESULTS SPEAK LOUDER (Direct Impact Banner - Zero Images)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white py-20 sm:py-28 lg:py-32 border-b border-[#eaeaea] relative overflow-hidden">

        {/* Ambient Blur Color Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-gradient-to-r from-[#12b7d4]/18 via-[#38bdf8]/12 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="rush-container text-center max-w-4xl mx-auto relative z-10">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.5, ease: rushEase }}
            className="tag-bubble-cyan mb-4 inline-block"
          >
            Proven Track Record
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.6, delay: 0.08, ease: rushEase }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-black uppercase tracking-tight text-[#000000] leading-[0.95] font-['Varela_Round'] mb-6"
          >
            RESULTS<br />
            SPEAK<br />
            <span className="text-[#12b7d4]">LOUDER</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.6, delay: 0.16, ease: rushEase }}
            className="font-script text-xl sm:text-2xl md:text-3xl text-[#12b7d4] mb-8"
          >
            Real bottom-line growth, viral traction & market dominance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.6, delay: 0.24, ease: rushEase }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() => setPage("works")}
              className="btn-rush-black text-xs sm:text-sm uppercase tracking-wider px-9 py-4 cursor-pointer hover:bg-[#12b7d4] hover:text-white transition-all shadow-md hover:scale-105 active:scale-95 font-bold flex items-center gap-2"
            >
              <span>View In Case Studies</span>
              <span className="text-[#12b7d4] group-hover:text-white">→</span>
            </button>
          </motion.div>

        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 5: TRUSTED BY VISIONARIES (The Rush Republic Split 3x3 Auto-Changing Grid)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white py-20 lg:py-28 border-b border-[#eaeaea] relative overflow-hidden">

        {/* Ambient Blur Color Effect */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#12b7d4]/10 rounded-full blur-[110px] pointer-events-none" />

        <div className="rush-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Column: Stacked Massive Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 0.7, ease: rushEase }}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <span className="tag-bubble-cyan mb-4 inline-block w-fit">
                Client Partners
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black uppercase tracking-tight text-[#000000] leading-[0.95] font-['Varela_Round'] mb-4">
                Trusted by<br />
                Top <span className="text-[#12b7d4]">Brands</span>
              </h2>
              <p className="text-base text-[#555555] font-medium leading-relaxed max-w-md mb-6">
                Powering market leaders and fast-growing businesses across South India.
              </p>
              <div>
                <button
                  onClick={() => setPage("clients")}
                  className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black hover:text-[#12b7d4] transition-colors inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore All Clients</span>
                  <span className="group-hover:translate-x-1 transition-transform text-[#12b7d4]">→</span>
                </button>
              </div>
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
      <ScrollSection className="bg-[#000000] text-white py-20 lg:py-28 overflow-hidden relative">

        {/* Ambient Blur Color Effect */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#12b7d4]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="rush-container relative z-10">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="tag-bubble bg-[#12b7d4] text-white mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-['Varela_Round']">
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
      <ScrollSection className="bg-white py-20 lg:py-28 border-b border-[#eaeaea] relative overflow-hidden">

        {/* Ambient Blur Color Effect */}
        <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-[#12b7d4]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="rush-container relative z-10">

          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#000000] font-['Varela_Round']">
              Our Initiatives
            </h2>
            <div className="font-script text-xl sm:text-2xl md:text-3xl text-[#555555]">
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
      <ScrollSection id="CTA" className="bg-[#000000] text-white py-20 lg:py-28 relative overflow-hidden">

        {/* Ambient Blur Color Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#12b7d4]/12 rounded-full blur-[140px] pointer-events-none" />

        <div className="rush-container relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.75, ease: rushEase }}
            className="max-w-4xl mx-auto"
          >

            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-3 font-['Varela_Round']">
                Let’s Build Something <span className="text-[#12b7d4]">Great</span>
              </h2>
              <p className="font-script text-xl sm:text-2xl md:text-3xl text-[#12b7d4]">
                Tell us about your brand and let’s make big things happen.
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


