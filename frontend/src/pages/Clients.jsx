import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollSection, { ScrollText } from "../components/ScrollSection";
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

// Proprietary SaaS Products (Featured 1st in list)
const saasProducts = [
  {
    id: "crm",
    name: "Rise Cloud CRM",
    category: "CRM & Business Automation",
    badge: "Enterprise Platform",
    tagline: "Multi-branch lead, pipeline, and staff automation suite",
    description: "Cloud-native CRM built for fast-scaling multi-location brands. Streamlines lead acquisition, WhatsApp follow-ups, team quotas, and automated client billing.",
    url: "https://company.risewithmedia.com",
    domain: "company.risewithmedia.com",
    highlights: ["Multi-Branch Leads", "Pipeline Automation", "Staff Roles", "Automated Billing"],
    status: "Live Production Suite",
    color: "#12b7d4",
  },
  {
    id: "hms",
    name: "Rise HMS",
    category: "Hospital Management System",
    badge: "Healthcare SaaS",
    tagline: "Cloud clinical workflow, OPD queues, and digital billing OS",
    description: "Full-spectrum hospital operations system powering patient registrations, real-time doctor appointments, digital prescriptions, pharmacy inventory, and GST invoicing.",
    url: "https://hms.risewithmedia.com",
    domain: "hms.risewithmedia.com",
    highlights: ["Patient Records", "OPD & Appointments", "Pharmacy & Lab", "Digital Invoicing"],
    status: "Live Production Suite",
    color: "#0284c7",
  },
];

// Client Websites & Portals (Live production client sites — no numerical numbers shown)
const clientWebsitesList = [
  { name: "Arunam Catering", domain: "arunamcatering.com", url: "https://arunamcatering.com", tag: "Hospitality & Dining" },
  { name: "Atros India", domain: "atrosindia.com", url: "https://atrosindia.com", tag: "Industrial Engineering" },
  { name: "Future Kids Ambur", domain: "futurekidsambur.com", url: "https://futurekidsambur.com", tag: "Education Academy" },
  { name: "GYES Property", domain: "gyesproperty.com", url: "https://gyesproperty.com", tag: "Real Estate & Housing" },
  { name: "GYES Traders", domain: "gyestraders.com", url: "https://gyestraders.com", tag: "Commercial Hardware" },
  { name: "Hsieh Hsu India", domain: "hsiehhsuindia.com", url: "https://hsiehhsuindia.com", tag: "Heavy Machinery" },
  { name: "My Hosur Property", domain: "myhosurproperty.com", url: "https://myhosurproperty.com", tag: "Real Estate Search" },
  { name: "Richi Food Products", domain: "richifoodproducts.com", url: "https://richifoodproducts.com", tag: "Packaged Foods" },
  { name: "Pentacad Tech", domain: "pentacadtech.com", url: "https://pentacadtech.com", tag: "CAD & Tech Systems" },
  { name: "Srijai Tech", domain: "srijaitech.com", url: "https://srijaitech.com", tag: "Industrial Solutions" },
  { name: "Malar Traders", domain: "malartraders.com", url: "https://malartraders.com", tag: "Wholesale Goods" },
  { name: "Kandhan Cars", domain: "kandhancars.com", url: "https://kandhancars.com", tag: "Automotive Showroom" },
  { name: "Dakshine", domain: "dakshine.com", url: "https://dakshine.com", tag: "Traditional Silks & Retail" },
];

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
            Powering South India’s most ambitious consumer, enterprise & healthcare brands.
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
                transition={{ duration: 0.55, delay: i * 0.1, ease: rushEase }}
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
          FEATURED 1ST IN LIST: PROPRIETARY SAAS PRODUCTS
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-[#fcfdfd] py-16 sm:py-24 border-b border-[#eaeaea]">
        <div className="rush-container">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <ScrollText as="span" direction="up" delay={0} className="tag-bubble-cyan mb-3 inline-block">
                Proprietary SaaS Ecosystem
              </ScrollText>
              <ScrollText as="h2" direction="up" delay={0.08} className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-black font-['Varela_Round']">
                Enterprise Software <span className="text-[#12b7d4]">Products</span>
              </ScrollText>
              <ScrollText as="p" direction="up" delay={0.16} className="font-script text-2xl sm:text-3xl text-[#12b7d4] mt-2">
                In-house cloud operating systems built, hosted & scaled by Rise With Media.
              </ScrollText>
            </div>

            <ScrollText as="div" direction="up" delay={0.2} className="flex-shrink-0">
              <button
                onClick={() => setPage("softwares")}
                className="btn-rush-black text-xs uppercase tracking-wider px-6 py-3 cursor-pointer hover:bg-[#12b7d4] transition-all"
              >
                View Full Software Suite →
              </button>
            </ScrollText>
          </div>

          {/* SaaS Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {saasProducts.map((prod, idx) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.05 }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: rushEase }}
                className="rounded-3xl border border-[#eaeaea] bg-white p-7 sm:p-9 flex flex-col justify-between hover:border-[#12b7d4] transition-all shadow-xs group"
              >
                <div>
                  {/* Top Bar with Badge & Live Status */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="text-xs font-black uppercase tracking-widest text-[#12b7d4] bg-[#e6f9fc] border border-[#12b7d4]/30 px-3 py-1 rounded-full">
                      {prod.badge}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#12b7d4] animate-pulse" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#888888]">
                        {prod.status}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black font-['Varela_Round'] mb-2 group-hover:text-[#12b7d4] transition-colors">
                    {prod.name}
                  </h3>
                  <p className="font-script text-xl text-[#12b7d4] mb-4">
                    {prod.tagline}
                  </p>
                  <p className="text-sm text-[#555555] leading-relaxed mb-6">
                    {prod.description}
                  </p>

                  {/* Feature Highlights Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {prod.highlights.map((feat, fi) => (
                      <span
                        key={fi}
                        className="text-xs font-bold text-[#333333] bg-[#f7f7f7] border border-[#eaeaea] px-3 py-1.5 rounded-lg flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#12b7d4]" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-6 border-t border-[#f0f0f0] flex flex-wrap items-center justify-between gap-4">
                  <a
                    href={prod.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#777777] hover:text-[#12b7d4] transition-colors"
                  >
                    https://{prod.domain}
                  </a>
                  <a
                    href={prod.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-rush-cyan text-xs uppercase tracking-wider px-5 py-2.5 cursor-pointer shadow-xs inline-flex items-center gap-1.5"
                  >
                    <span>Launch App</span>
                    <span>↗</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          CLIENT WEBSITES DIRECTORY (No Numerical Numbers Shown)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white py-16 sm:py-20 border-b border-[#eaeaea]">
        <div className="rush-container">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <ScrollText as="span" direction="up" delay={0} className="tag-bubble-cyan mb-3 inline-block">
                Production Deployments
              </ScrollText>
              <ScrollText as="h2" direction="up" delay={0.08} className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black font-['Varela_Round']">
                Client Websites & <span className="text-[#12b7d4]">Live Portals</span>
              </ScrollText>
              <ScrollText as="p" direction="up" delay={0.16} className="font-script text-2xl sm:text-3xl text-[#12b7d4] mt-2">
                High-conversion web platforms engineered for South India's market leaders.
              </ScrollText>
            </div>

            <ScrollText as="div" direction="up" delay={0.2} className="flex-shrink-0">
              <button
                onClick={() => setPage("works")}
                className="px-5 py-2.5 rounded-full border border-black bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-[#12b7d4] hover:border-[#12b7d4] transition-colors cursor-pointer"
              >
                Explore 3D Case Studies Showcase →
              </button>
            </ScrollText>
          </div>

          {/* Client Websites Clean Interactive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {clientWebsitesList.map((site, sIdx) => (
              <motion.a
                key={site.domain}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.05 }}
                transition={{ duration: 0.45, delay: (sIdx % 8) * 0.05, ease: rushEase }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="group p-5 rounded-2xl border border-[#eaeaea] bg-white hover:border-[#12b7d4] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#12b7d4] bg-[#e6f9fc] px-2.5 py-1 rounded-md">
                      {site.tag}
                    </span>
                    <span className="text-[#888888] group-hover:text-[#12b7d4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-xs font-bold">
                      ↗
                    </span>
                  </div>
                  <h4 className="font-black text-base text-black font-['Varela_Round'] group-hover:text-[#12b7d4] transition-colors mb-1">
                    {site.name}
                  </h4>
                </div>
                <div className="mt-3 pt-3 border-t border-[#f4f4f4] flex items-center justify-between text-xs text-[#777777] font-mono">
                  <span>{site.domain}</span>
                  <span className="text-[10px] font-sans font-bold text-[#10b981] bg-[#ecfdf5] px-2 py-0.5 rounded-full">
                    Live
                  </span>
                </div>
              </motion.a>
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
                Client Brands
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
