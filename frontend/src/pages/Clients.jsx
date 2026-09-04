import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TestimonialSlider from "../components/TestimonialSlider";
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

// Split into two rows
const clientsRow1 = allClients.slice(0, 7);
const clientsRow2 = allClients.slice(7);

const stats = [
  { num: "30+", label: "Projects Completed", icon: "📁" },
  { num: "20+", label: "Brands Served", icon: "🏆" },
  { num: "1M+", label: "Views Generated", icon: "👁️" },
  { num: "5+", label: "Industries Served", icon: "🌐" },
];

const industries = [
  "Real Estate", "Fashion & Retail", "Healthcare", "Education",
  "Food & Beverage", "Technology", "Fitness", "Hospitality",
];

// ─── Marquee Row with Logo Images ────────────────────────────────────
function MarqueeRow({ clients, direction = 1, speed = 28 }) {
  const duplicated = [...clients, ...clients, ...clients];
  return (
    <div className="relative overflow-hidden py-3">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: direction === 1 ? ["0%", "-33.33%"] : ["-33.33%", "0%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}>
        {duplicated.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="flex items-center justify-center px-6 py-4 rounded-[22px] border border-[#dff6ff] bg-white flex-shrink-0 hover:border-[#06b6d4]/40 hover:shadow-md transition-all duration-300"
            style={{ minWidth: "150px" }}
            title={client.name}
          >
            <img
              src={client.src}
              alt={client.name}
              className="h-12 w-auto max-w-[130px] object-contain opacity-95 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Clients() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <div className="pt-28 sm:pt-32 pb-20 min-h-screen bg-white">

      {/* ─── Page Header ──────────────────────────────────────────── */}
      <div className="text-center max-w-4xl mx-auto px-6 py-14 sm:py-18">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 bg-[#f0fbff] border border-[#dff6ff] text-[#06b6d4] text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
            Client Network
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#0f172a] uppercase tracking-tight mb-3">
            TRUSTED BY <span className="text-[#06b6d4]">GROWING BRANDS</span>
          </h1>
          <p className="text-lg sm:text-xl font-serif italic text-[#06b6d4] mb-4">
            We partner with businesses to build high-performance digital engines.
          </p>
          <p className="text-[#64748b] text-base max-w-xl mx-auto leading-relaxed font-normal">
            From regional market leaders to ambitious direct-to-consumer businesses, see who relies on Rise With Media for predictable digital scaling.
          </p>
        </motion.div>
      </div>

      {/* ─── MARQUEE CLIENT LOGOS ─────────────────────────────────── */}
      <motion.div
        className="mb-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}>
        <MarqueeRow clients={clientsRow1} direction={1} speed={30} />
      </motion.div>
      <motion.div
        className="mb-16 sm:mb-20"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}>
        <MarqueeRow clients={clientsRow2} direction={-1} speed={26} />
      </motion.div>

      {/* ─── Divider / Pill Badge ─────────────────────────────────── */}
      <div className="max-w-xl mx-auto px-6 mb-20">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#dff6ff]" />
          <span className="bg-[#f0fbff] border border-[#dff6ff] text-[#0f172a] text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-xs">
            20+ Brands & Counting
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#dff6ff]" />
        </div>
      </div>

      {/* ─── STATS SECTION (Neo-Brutalist MarkitUp Style) ──────────── */}
      <div className="bg-[#0f172a] relative overflow-hidden py-24 sm:py-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#06b6d4]/15 blur-[100px] pointer-events-none" />

        <div ref={statsRef} className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }} animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-[#06b6d4] text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
              By The Numbers
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-3">
              Results That Speak
            </h2>
            <p className="text-lg font-serif italic text-[#67e8f9]">
              Measurable milestones achieved across all active client accounts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div key={stat.label}
                className="group relative text-center p-8 rounded-[26px] bg-white border-2 border-[#0f172a] shadow-[4px_4px_0px_#06b6d4] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#06b6d4] transition-all duration-300 flex flex-col justify-between"
                initial={{ opacity: 0, y: 40 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div>
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <div className="text-4xl sm:text-5xl font-black text-[#0f172a] mb-2 tracking-tight">
                    {stat.num}
                  </div>
                  <p className="text-[#64748b] text-sm font-semibold">{stat.label}</p>
                </div>

                {/* Signature 3x3 dot matrix */}
                <div className="pt-6 mt-4 border-t border-[#dff6ff]/60 flex justify-end">
                  <div className="grid grid-cols-3 gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
                    {[...Array(9)].map((_, idx) => (
                      <span key={idx} className="w-1.5 h-1.5 rounded-full bg-[#0f172a] group-hover:bg-[#06b6d4] transition-colors" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 sm:py-28">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 bg-[#f0fbff] border border-[#dff6ff] text-[#06b6d4] text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] uppercase tracking-tight mb-3">
            What Our Clients Say
          </h2>
          <p className="text-lg font-serif italic text-[#06b6d4] mb-3">
            Direct feedback from founders who trust our execution.
          </p>
          <p className="text-[#64748b] max-w-md mx-auto text-sm font-normal leading-relaxed">
            Real words from real business owners who partnered with Rise With Media for sustainable growth.
          </p>
        </motion.div>

        <TestimonialSlider />
      </div>

      {/* ─── INDUSTRIES STRIP (Neo-brutalist Pills) ────────────────── */}
      <div className="bg-[#f7fcff] border-t border-b border-[#dff6ff] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs font-black text-[#0f172a]/40 uppercase tracking-[0.2em] mb-8">
            Industries We Serve
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {industries.map((ind, i) => (
              <motion.span key={ind}
                className="bg-white border-2 border-[#0f172a] text-[#0f172a] text-xs sm:text-sm font-black px-6 py-3 rounded-full shadow-[2px_2px_0px_#0f172a] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none hover:bg-[#f0fbff] transition-all cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                whileHover={{ scale: 1.03 }}>
                {ind}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}