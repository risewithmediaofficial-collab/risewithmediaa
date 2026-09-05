import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollSection, { ScrollText, ScrollImage } from "../components/ScrollSection";
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

const rushEase = [0.16, 1, 0.3, 1];

// 3x3 Grid Logo Slots for auto-changing cards (2-second rotation like Home screen)
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

const allClients = [
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

const stats = [
  { num: "30+", label: "PROJECTS COMPLETED" },
  { num: "20+", label: "BRANDS SCALED" },
  { num: "1.4M+", label: "AUDIENCE REACH" },
  { num: "5.3×", label: "AVERAGE ROAS" },
];

const clientReviews = [
  {
    name: "Ahkila",
    initial: "A",
    company: "Krin Brin School",
    role: "Founder",
    quote: "Within 3 months we went from 0 to 4 lakh in monthly revenue. The team just gets it — strategy, execution, everything.",
    bg: "from-[#12b7d4] to-[#0284c7]",
  },
  {
    name: "Saranya",
    initial: "S",
    company: "saranyaelitebridalstudio",
    role: "Founder",
    quote: "I was getting 45 leads a month. Now I get 10+ qualified leads monthly. The WhatsApp automation alone saved me hours.",
    bg: "from-[#12b7d4] to-[#0ea5c0]",
  },
  {
    name: "Prem Charlesr",
    initial: "P",
    company: "Allinov",
    role: "Founder",
    quote: "I've hired agencies before — these guys are a completely different level.",
    bg: "from-[#12b7d4] to-[#38bdf8]",
  },
];

export default function Clients({ setPage }) {
  const [activeLogoStep, setActiveLogoStep] = useState(0);

  // Auto change logos every 2 seconds (Home screen animation style)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLogoStep((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-white pt-20 sm:pt-[88px]">
      
      {/* ─────────────────────────────────────────────────────────────────
          HEADER
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white pt-16 pb-14 border-b border-[#eaeaea]">
        <div className="rush-container text-center">
          <ScrollText as="span" direction="up" delay={0} className="tag-bubble-cyan mb-4 inline-block">
            Network & Partners
          </ScrollText>
          <ScrollText as="h1" direction="up" delay={0.08} className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#000000] font-['Varela_Round'] mb-4">
            Trusted by Visionaries,<br />
            Admired by the <span className="text-[#12b7d4]">Best</span>
          </ScrollText>
          <ScrollText as="p" direction="up" delay={0.18} className="font-script text-2xl sm:text-3xl text-[#12b7d4]">
            Powering South India’s most ambitious consumer & retail brands.
          </ScrollText>
        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          KEY STATS
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white py-14 border-b border-[#eaeaea]">
        <div className="rush-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((st, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.05 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center p-6 rounded-2xl border border-[#eaeaea] bg-white hover:border-[#12b7d4] transition-colors"
              >
                <div className="text-3xl sm:text-5xl font-black text-black font-['Varela_Round'] mb-2">
                  {st.num}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#777777]">
                  {st.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          CLIENT PORTFOLIO (Home Screen 3x3 Auto-Changing Animated Grid)
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
              <span className="tag-bubble-cyan mb-4 inline-block">
                Client Portfolio
              </span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.2rem] xl:text-[4.8rem] font-black uppercase tracking-tight text-[#000000] leading-[0.93] font-['Varela_Round'] mb-4">
                Trusted by<br />
                Visionaries,<br />
                Admired by the<br />
                <span className="text-[#12b7d4]">Best</span>
              </h2>
              <p className="text-base text-[#555555] font-medium leading-relaxed max-w-md">
                Every partnership is built on accountability, high retention, and real bottom-line growth across Tamil Nadu and South India.
              </p>
            </motion.div>

            {/* Right Column: 3x3 Auto-Changing Logo Cards (Home screen animation style) */}
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
          CLIENT REVIEWS (The Rush Republic Card Layout)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white py-20 lg:py-28 border-b border-[#eaeaea]">
        <div className="rush-container">
          
          <div className="max-w-3xl mb-12">
            <ScrollText as="span" direction="up" delay={0} className="tag-bubble-cyan mb-3 inline-block">
              Direct Feedback
            </ScrollText>
            <ScrollText as="h2" direction="up" delay={0.1} className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black font-['Varela_Round']">
              What Founders <span className="text-[#12b7d4]">Say</span>
            </ScrollText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientReviews.map((rev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: false, amount: 0.05 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl border border-[#eaeaea] p-8 flex flex-col justify-between hover:border-[#12b7d4] transition-all bg-white"
              >
                <div>
                  {/* 5 Stars Rating */}
                  <div className="flex items-center gap-1 mb-5 text-[#12b7d4] text-sm">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${rev.bg} flex items-center justify-center text-white text-xl font-black font-['Varela_Round'] shadow-sm flex-shrink-0`}>
                      {rev.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-black font-['Varela_Round']">
                        {rev.name}
                      </h4>
                      <p className="text-xs text-[#777777]">
                        {rev.role}, {rev.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#444444] leading-relaxed">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#f0f0f0] flex items-center justify-between text-xs font-bold text-[#888888]">
                  <span>Verified Client Partner</span>
                  <span className="text-[#12b7d4]">★★★★★</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <ScrollText as="div" direction="up" delay={0.1} className="mt-16 text-center">
            <button
              onClick={() => setPage("contact")}
              className="btn-rush-cyan text-xs uppercase tracking-wider px-8 py-4 cursor-pointer"
            >
              Partner With Us →
            </button>
          </ScrollText>

        </div>
      </ScrollSection>

    </main>
  );
}

