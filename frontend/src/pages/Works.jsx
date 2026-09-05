import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollSection from "../components/ScrollSection";

// Videos
import reel1 from "../assets/clientvideos/1.mp4";
import reel2 from "../assets/clientvideos/2.mp4";
import reel3 from "../assets/clientvideos/3.mp4";
import reel4 from "../assets/clientvideos/4.mp4";
import reel5 from "../assets/clientvideos/5.mp4";

// Web Screenshots
import screenshot1 from "../assets/clientweb/1.png";
import screenshot2 from "../assets/clientweb/2.png";

// Campaign Creatives
import campaign1 from "../assets/clientcampaign/1.png";
import campaign2 from "../assets/clientcampaign/2.png";
import campaign3 from "../assets/clientcampaign/3.png";

export default function Works({ setPage }) {
  const [activeReel, setActiveReel] = useState(null);

  const caseStudiesList = [
    {
      id: "hsiehhsu",
      client: "HSIEH & HSU INDIA",
      headline: "A DIGITAL TRANSFORMATION THAT TASTED SUCCESS",
      metric: "+240% REVENUE SCALED",
      readingTime: "1 minute",
      type: "Manufacturing & Retail",
      url: "https://www.hsiehhsuindia.com/",
      mediaType: "image",
      src: screenshot1,
    },
    {
      id: "mogi",
      client: "MOGI E-COMMERCE",
      headline: "A 53X REVENUE EXPLOSION POWERED BY ADS",
      metric: "3× MORE QUALIFIED LEADS",
      readingTime: "1 minute",
      type: "E-commerce & Conversion",
      url: "https://www.mogi.co.in",
      mediaType: "image",
      src: screenshot2,
    },
    {
      id: "richi",
      client: "RICHI FOOD PRODUCTS",
      headline: "SWEET DOMINATION THROUGH PERFORMANCE MARKETING",
      metric: "₹18 COST PER ACQUISITION",
      readingTime: "1 minute",
      type: "FMCG & Social Media",
      url: "https://richifoodproducts.com",
      mediaType: "image",
      src: campaign1,
    },
    {
      id: "saascrm",
      client: "RISE CLOUD SAAS & CRM",
      headline: "THE 16-STORE AUTOMATED LEAP",
      metric: "99.4% AUTOMATED PIPELINE",
      readingTime: "1 minute",
      type: "Cloud ERP & Healthcare",
      url: "https://company.risewithmedia.com",
      mediaType: "video",
      src: reel2,
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

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-white pt-20 sm:pt-[88px]">
      
      {/* ─────────────────────────────────────────────────────────────────
          HEADER & JUMP LINKS (Rush Republic Case Studies Header)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white pt-16 pb-12 border-b border-[#eaeaea]">
        <div className="rush-container">
          
          <div className="max-w-4xl">
            <span className="tag-bubble-cyan mb-4">
              Portfolio & Results
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#000000] font-['Manrope'] mb-8">
              Case <span className="text-[#12b7d4]">Studies</span>
            </h1>
          </div>

          {/* Quick Anchor Jump Pills */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {caseStudiesList.map((cs) => (
              <button
                key={cs.id}
                onClick={() => scrollToSection(cs.id)}
                className="px-5 py-2.5 rounded-full border border-[#eaeaea] bg-white text-xs font-bold uppercase tracking-wider text-black hover:bg-[#000000] hover:text-white transition-colors cursor-pointer"
              >
                {cs.client}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("reels")}
              className="px-5 py-2.5 rounded-full border border-[#eaeaea] bg-white text-xs font-bold uppercase tracking-wider text-black hover:bg-[#000000] hover:text-white transition-colors cursor-pointer"
            >
              Short-Form Reels
            </button>
            <button
              onClick={() => scrollToSection("campaigns")}
              className="px-5 py-2.5 rounded-full border border-[#eaeaea] bg-white text-xs font-bold uppercase tracking-wider text-black hover:bg-[#000000] hover:text-white transition-colors cursor-pointer"
            >
              Ad Creatives
            </button>
          </div>

        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          EDITORIAL CASE STUDY SECTIONS (Rush Republic Alternating Layout)
      ───────────────────────────────────────────────────────────────── */}
      <div className="divide-y divide-[#eaeaea]">
        {caseStudiesList.map((cs, idx) => (
          <ScrollSection key={cs.id} id={cs.id} className="py-20 lg:py-24 bg-white">
            <div className="rush-container">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                
                {/* Text Block (Left) */}
                <div className={`lg:col-span-5 flex flex-col items-start ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  
                  <span className="text-xs font-black uppercase tracking-widest text-[#888888] mb-3 block">
                    {cs.client}
                  </span>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#000000] leading-tight mb-4 font-['Manrope']">
                    {cs.headline}
                  </h2>

                  <div className="mb-6">
                    <span className="tag-bubble">
                      {cs.metric}
                    </span>
                  </div>

                  <div className="text-xs font-bold uppercase tracking-wider text-[#888888] mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black" />
                    <span>Reading Time: {cs.readingTime}</span>
                  </div>

                  <a
                    href={cs.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-rush-black text-xs uppercase tracking-wider px-6 py-3 cursor-pointer"
                  >
                    View Project Live ↗
                  </a>
                </div>

                {/* Media Showcase (Right) */}
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="rounded-3xl overflow-hidden border border-[#eaeaea] bg-[#f9f9f9] aspect-[16/10] shadow-md group">
                    {cs.mediaType === "video" ? (
                      <video
                        src={cs.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={cs.src}
                        alt={cs.client}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-102"
                      />
                    )}
                  </div>
                </div>

              </div>
            </div>
          </ScrollSection>
        ))}
      </div>

      {/* ─────────────────────────────────────────────────────────────────
          SHORT-FORM REELS SHOWCASE
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection id="reels" className="py-20 lg:py-28 bg-[#000000] text-white">
        <div className="rush-container">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12b7d4]/20 border border-[#12b7d4]/40 text-[#12b7d4] text-xs font-black uppercase tracking-widest mb-4 inline-block">
                Short-Form Content
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-['Manrope']">
                High-Retention Reels
              </h2>
            </div>
            <p className="font-script text-2xl text-[#12b7d4]">
              Engineered for algorithmic reach and high retention.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {reelVideos.map((reel) => (
              <div
                key={reel.id}
                onClick={() => setActiveReel(reel.src)}
                className="group relative rounded-2xl overflow-hidden aspect-[9/16] bg-[#111111] border border-[#222222] cursor-pointer hover:border-[#12b7d4] transition-all"
              >
                <video
                  src={reel.src}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Center play button */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-black/70 px-2 py-0.5 rounded-full mb-1 inline-block">
                    {reel.category}
                  </span>
                  <h4 className="text-xs font-bold leading-tight line-clamp-1">
                    {reel.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          CAMPAIGNS & CREATIVES
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection id="campaigns" className="py-20 lg:py-28 bg-white border-b border-[#eaeaea]">
        <div className="rush-container">
          
          <div className="max-w-3xl mb-12">
            <span className="tag-bubble mb-4">
              Performance Creatives
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black font-['Manrope']">
              Ad Creatives & Campaigns
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {campaigns.map((camp) => (
              <div
                key={camp.id}
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
                  <h3 className="text-base font-bold text-black font-['Manrope']">
                    {camp.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-16 text-center">
            <button
              onClick={() => setPage("contact")}
              className="btn-rush-black text-xs uppercase tracking-wider px-8 py-4 cursor-pointer"
            >
              Start Your Campaign With Us →
            </button>
          </div>

        </div>
      </ScrollSection>

      {/* Reel Lightbox Modal */}
      <AnimatePresence>
        {activeReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveReel(null)}
          >
            <div
              className="relative max-w-sm w-full bg-black rounded-3xl overflow-hidden border border-neutral-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveReel(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white text-black font-bold flex items-center justify-center cursor-pointer hover:bg-[#12b7d4] hover:text-white transition-colors"
              >
                ✕
              </button>
              <video
                src={activeReel}
                controls
                autoPlay
                className="w-full h-full max-h-[85vh] object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}