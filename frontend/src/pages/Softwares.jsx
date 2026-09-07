import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollSection, { ScrollText, rushEase } from "../components/ScrollSection";

const saasProducts = [
  {
    id: "company",
    name: "Agency OS",
    category: "Agency OS & Automation",
    tagline: "Operations, Client Management & Agency OS",
    description:
      "Cloud-native operating system built to centralize leads, automated WhatsApp pipelines, staff quotas, and client billing.",
    badge: "Agency OS Platform",
    stats: [
      { label: "Pipelines Automated", value: "99.4%" },
      { label: "Stores Managed", value: "16+" },
      { label: "Uptime SLA", value: "99.9%" },
    ],
    features: [
      "Multi-branch lead routing",
      "Automated WhatsApp pipelines",
      "Staff roles & automated billing",
    ],
    dark: false,
    about: {
      headline: "All-in-One Operations System for High-Growth Agencies",
      summary:
        "Agency OS unifies fragmented agency workflows into one real-time cloud suite. Built to eliminate manual coordination across lead intake, client communication, WhatsApp automation, and invoice collections.",
      capabilities: [
        {
          title: "Multi-Source Lead Pipeline",
          desc: "Instant capture and routing from Meta Ads, Google Ads, and websites with sub-second team assignment.",
        },
        {
          title: "WhatsApp Cloud Automation",
          desc: "Auto-dispatches proposals, onboarding briefs, payment reminders, and campaign updates directly to client WhatsApp.",
        },
        {
          title: "Billing & Invoicing Engine",
          desc: "Integrated invoice generation, recurring retainer schedules, GST compliance, and one-click payment links.",
        },
        {
          title: "Staff Quotas & Deliverables",
          desc: "Role-based dashboards for creators, managers, and media buyers with automated task KPI tracking.",
        },
      ],
      architecture: [
        { label: "Deployment", value: "Cloud Multi-Tenant" },
        { label: "Uptime SLA", value: "99.9% Guaranteed" },
        { label: "Database", value: "Encrypted Cloud DB" },
        { label: "Integrations", value: "WhatsApp API, Webhooks" },
      ],
    },
  },
  {
    id: "hms",
    name: "HMS Software",
    category: "Healthcare SaaS",
    tagline: "Hospital Management & Clinical Operations",
    description:
      "Cloud Hospital Management System for patient registration, OPD/IPD scheduling, and automated pharmacy billing.",
    badge: "Healthcare SaaS",
    stats: [
      { label: "Clinical Modules", value: "12+" },
      { label: "Patient Records", value: "Digital" },
      { label: "Deployment", value: "Cloud" },
    ],
    features: [
      "Patient registration & digital records",
      "OPD scheduling & queue management",
      "Pharmacy stock & billing automation",
    ],
    dark: true,
    about: {
      headline: "Modern Clinical & Hospital Operations Infrastructure",
      summary:
        "HMS Software modernizes healthcare clinics and multispecialty hospitals by replacing paper files with secure electronic health records (EHR), streamlined OPD token queues, IPD bed allocations, and unified pharmacy stock billing.",
      capabilities: [
        {
          title: "Paperless Patient Records (EHR)",
          desc: "Centralized medical histories, doctor diagnoses, and digital prescriptions accessible securely across departments.",
        },
        {
          title: "OPD Queue & Doctor Scheduling",
          desc: "Live token display and patient scheduling to reduce outpatient wait times and prevent reception congestion.",
        },
        {
          title: "Pharmacy & Stock POS",
          desc: "Real-time medicine inventory tracking, expiry batch monitoring, and direct point-of-sale billing synced to prescriptions.",
        },
        {
          title: "IPD & Bed Management",
          desc: "Real-time ward occupancy monitoring, admission-to-discharge tracking, and unified final patient billing.",
        },
      ],
      architecture: [
        { label: "Security", value: "EHR & HIPAA Standard" },
        { label: "Deployment", value: "Dedicated Cloud Server" },
        { label: "Backups", value: "Daily Automated Backups" },
        { label: "Access", value: "Role-Based Doctor/Admin" },
      ],
    },
  },
];

export default function Softwares({ setPage }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProduct(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollToProduct = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-white pt-20 sm:pt-[88px]">

      {/* ─────────────────────────────────────────────────────────────────
          HEADER & 1ST: LIST OUT AVAILABLE SAAS WEBSITES (Short & Crisp)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white pt-14 pb-12 border-b border-[#eaeaea] relative overflow-hidden">
        {/* Ambient Blur Color Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[700px] h-[300px] bg-[#12b7d4]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="rush-container text-center max-w-3xl mx-auto relative z-10">
          <ScrollText as="span" direction="up" delay={0} className="tag-bubble-cyan mb-3 inline-block">
            Proprietary SaaS
          </ScrollText>
          <ScrollText as="h1" direction="up" delay={0.08} className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black uppercase tracking-tight text-[#000000] font-['Sansation'] mb-2.5">
            SaaS & <span className="text-[#12b7d4]">Softwares</span>
          </ScrollText>
          <ScrollText as="p" direction="up" delay={0.16} className="font-script text-xl sm:text-2xl md:text-3xl text-[#12b7d4] mb-6">
            Cloud operating systems built for scale.
          </ScrollText>

          {/* 1st in list: Available SaaS Platforms */}
          <ScrollText as="div" direction="up" delay={0.24} className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#888888] mr-1">
              Available SaaS:
            </span>
            {saasProducts.map((prod) => (
              <button
                key={prod.id}
                onClick={() => scrollToProduct(prod.id)}
                className="px-5 py-2.5 rounded-full border border-black bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-[#12b7d4] hover:border-[#12b7d4] transition-colors cursor-pointer shadow-xs inline-flex items-center gap-1.5"
              >
                <span>{prod.name}</span>
                <span className="text-xs text-[#12b7d4]">↓</span>
              </button>
            ))}
          </ScrollText>
        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          SAAS PRODUCTS (Crisp, Clean & Aesthetic Cards)
      ───────────────────────────────────────────────────────────────── */}
      <div className="divide-y divide-[#eaeaea]">
        {saasProducts.map((product, idx) => (
          <ScrollSection key={product.id} id={product.id} className="py-16 sm:py-20 bg-white">
            <div className="rush-container">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

                {/* Left Column: Product Info */}
                <motion.div
                  className={"lg:col-span-5 flex flex-col items-start " + (idx % 2 === 1 ? "lg:order-2" : "")}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.05 }}
                  transition={{ duration: 0.55, ease: rushEase }}
                >
                  <span className="text-xs font-black uppercase tracking-widest text-[#12b7d4] mb-3 block">
                    {product.badge}
                  </span>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#000000] leading-tight mb-1 font-['Sansation']">
                    {product.name.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="text-[#12b7d4]">{product.name.split(" ").slice(-1)}</span>
                  </h2>

                  <p className="font-script text-2xl sm:text-3xl text-[#12b7d4] -mt-1 mb-2 select-none">
                    by risewithmedia
                  </p>

                  <p className="text-base sm:text-lg font-bold text-[#12b7d4] font-['Sansation'] tracking-tight mb-4">
                    {product.tagline}
                  </p>

                  <p className="text-[#555555] text-sm sm:text-base leading-relaxed mb-6 max-w-md">
                    {product.description}
                  </p>

                  {/* Feature list */}
                  <ul className="flex flex-col gap-2.5 mb-7 w-full">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-[#333333] font-medium">
                        <span className="w-5 h-5 rounded-full bg-[#e6f9fc] border border-[#12b7d4]/40 flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-[#12b7d4]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full">
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(product)}
                      className="btn-rush-cyan text-xs uppercase tracking-wider px-6 sm:px-7 py-3 sm:py-3.5 cursor-pointer shadow-sm inline-flex items-center gap-2 hover:scale-[1.02] transition-all whitespace-nowrap shrink-0"
                    >
                      <span>About Software</span>
                      <span className="text-[11px]">ℹ</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPage("contact")}
                      className="text-xs font-bold text-black border border-black/20 hover:border-[#12b7d4] hover:text-[#12b7d4] px-5 py-3 rounded-full transition-colors cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap"
                    >
                      <span>Request Demo</span>
                      <span className="text-[11px]">→</span>
                    </button>
                  </div>
                </motion.div>

                {/* Right Column: Sleek Interactive Console Preview Card */}
                <motion.div
                  className={"lg:col-span-7 " + (idx % 2 === 1 ? "lg:order-1" : "")}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.05 }}
                  transition={{ duration: 0.55, delay: 0.1, ease: rushEase }}
                >
                  <div
                    onClick={() => setSelectedProduct(product)}
                    className={
                      "rounded-3xl overflow-hidden border p-7 sm:p-9 shadow-lg cursor-pointer group transition-all duration-300 hover:border-[#12b7d4]/70 hover:shadow-2xl relative " +
                      (product.dark
                        ? "border-[#222] bg-[#000000] text-white hover:bg-[#080808]"
                        : "border-[#eaeaea] bg-[#f9fafb] text-black hover:bg-white"
                      )
                    }
                  >
                    {/* Top Console Bar */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/10 dark:border-white/10 gap-2 flex-wrap sm:flex-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#12b7d4] animate-pulse" />
                        <span className={"text-xs font-black uppercase tracking-widest " + (product.dark ? "text-[#aaa]" : "text-[#777]")}>
                          Live Cloud App
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#12b7d4] bg-[#12b7d4]/10 border border-[#12b7d4]/30 px-3 py-1 rounded-full group-hover:bg-[#12b7d4] group-hover:text-white transition-colors">
                          Click for Details ℹ
                        </span>
                      </div>
                    </div>

                    {/* Product Name & Tagline */}
                    <h3 className={"text-3xl sm:text-4xl font-black uppercase tracking-tight font-['Sansation'] mb-0.5 " + (product.dark ? "text-white" : "text-black")}>
                      {product.name}
                    </h3>
                    <p className="font-script text-xl sm:text-2xl text-[#12b7d4] mb-2 select-none">
                      by risewithmedia
                    </p>
                    <p className="text-sm sm:text-base font-bold text-[#12b7d4] font-['Sansation'] tracking-tight mb-6">
                      {product.tagline}
                    </p>

                    {/* Stats Row */}
                    <div className={"grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t " + (product.dark ? "border-[#222]" : "border-[#e5e5e5]")}>
                      {product.stats.map((stat, i) => (
                        <div key={i} className="flex flex-col gap-0.5">
                          <span className="text-2xl sm:text-3xl font-black font-['Sansation'] text-[#12b7d4]">
                            {stat.value}
                          </span>
                          <span className={"text-[10px] font-bold uppercase tracking-wider " + (product.dark ? "text-[#888]" : "text-[#777]")}>
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Interactive Click Hint Footer */}
                    <div className={"mt-5 pt-3.5 border-t flex items-center justify-between text-[11px] transition-colors " + (product.dark ? "border-[#222] text-neutral-400" : "border-[#eaeaea] text-neutral-500")}>
                      <span>Click card to view software features & specs</span>
                      <span className="text-[#12b7d4] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>About Software</span>
                        <span>→</span>
                      </span>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </ScrollSection>
        ))}
      </div>

      {/* ─────────────────────────────────────────────────────────────────
          SIMPLE & MINIMALIST "ABOUT SOFTWARE" MODAL
      ───────────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 320, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl bg-[#0f0f0f] border border-neutral-800 text-white p-6 sm:p-8 shadow-2xl"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-neutral-800 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#12b7d4] animate-pulse" />
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#12b7d4]">
                    About Software
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer text-sm"
                  aria-label="Close details"
                >
                  ✕
                </button>
              </div>

              {/* Title & Tagline */}
              <div className="mb-6">
                <div className="inline-block px-3 py-1 rounded-full bg-[#12b7d4]/10 border border-[#12b7d4]/30 text-[#12b7d4] text-[10px] font-black uppercase tracking-wider mb-2">
                  {selectedProduct.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight font-['Sansation'] text-white mb-0.5">
                  {selectedProduct.name}
                </h3>
                <p className="font-script text-lg sm:text-xl text-[#12b7d4] mb-2 select-none">
                  by risewithmedia
                </p>
                <p className="text-sm sm:text-base font-bold text-[#12b7d4] font-['Sansation']">
                  {selectedProduct.about.headline}
                </p>
                <p className="text-neutral-300 text-sm leading-relaxed mt-3">
                  {selectedProduct.about.summary}
                </p>
              </div>

              {/* Core Capabilities */}
              <div className="mb-6">
                <h4 className="text-xs font-black uppercase tracking-widest text-neutral-400 mb-3 font-['Sansation']">
                  Core Modules & Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProduct.about.capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#12b7d4] shrink-0" />
                        <span className="text-xs font-bold text-white font-['Sansation']">
                          {cap.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-400 leading-relaxed">
                        {cap.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Specs */}
              <div className="mb-6 p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800">
                <h4 className="text-[11px] font-black uppercase tracking-widest text-neutral-400 mb-3 font-['Sansation']">
                  Cloud Architecture & Reliability
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {selectedProduct.about.architecture.map((arch, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-bold">
                        {arch.label}
                      </span>
                      <span className="text-xs font-semibold text-neutral-200 mt-0.5">
                        {arch.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-neutral-800">
                <span className="text-xs font-semibold text-neutral-400">
                  Enterprise Cloud Platform
                </span>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(null)}
                    className="px-5 py-2.5 rounded-full text-xs font-bold text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProduct(null);
                      setPage("contact");
                    }}
                    className="btn-rush-cyan text-xs uppercase tracking-wider px-6 py-2.5 rounded-full font-bold inline-flex items-center gap-1.5 shadow-md hover:scale-105 transition-all cursor-pointer"
                  >
                    <span>Request Demo & Pricing</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─────────────────────────────────────────────────────────────────
          BOTTOM CTA
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="py-16 bg-[#f9f9f9] border-t border-[#eaeaea]">
        <div className="rush-container text-center max-w-2xl mx-auto">
          <ScrollText as="h2" direction="up" delay={0.05} className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black font-['Sansation'] mb-2">
            Deploy Your SaaS with <span className="text-[#12b7d4]">Rise With Media</span>
          </ScrollText>
          <ScrollText as="p" direction="up" delay={0.12} className="font-script text-xl sm:text-2xl md:text-3xl text-[#12b7d4] mb-6">
            Custom enterprise software, automation engines & workflows.
          </ScrollText>
          <ScrollText as="div" direction="up" delay={0.18}>
            <button
              onClick={() => setPage("contact")}
              className="btn-rush-black text-xs uppercase tracking-wider px-8 py-3.5 cursor-pointer hover:bg-[#12b7d4] hover:text-white transition-all shadow-sm"
            >
              Partner With Us &rarr;
            </button>
          </ScrollText>
        </div>
      </ScrollSection>

    </main>
  );
}
