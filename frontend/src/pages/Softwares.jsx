import { motion } from "framer-motion";
import ScrollSection, { ScrollText } from "../components/ScrollSection";

const rushEase = [0.16, 1, 0.3, 1];

const saasProducts = [
  {
    id: "company",
    name: "Rise Cloud CRM",
    category: "CRM & ERP Platform",
    tagline: "Business Automation & Multi-Branch CRM Platform",
    description:
      "A full-stack cloud CRM and business automation suite built for multi-location enterprises. Centralize inbound leads, automate multi-channel follow-ups, assign staff quotas, and track branch-level P&L in real time.",
    url: "https://company.risewithmedia.com",
    domain: "company.risewithmedia.com",
    cta: "Launch CRM App ↗",
    badge: "Enterprise Platform",
    version: "v2.8 Live",
    stats: [
      { label: "Pipelines Automated", value: "99.4%" },
      { label: "Branches Managed", value: "16+" },
      { label: "Cloud Uptime SLA", value: "99.9%" },
    ],
    features: [
      "Multi-branch lead distribution & routing",
      "Automated WhatsApp & SMS follow-up pipelines",
      "Granular role-based staff access & KPI quotas",
      "Automated GST billing, invoices & payment logs",
      "Real-time executive performance dashboards",
    ],
    modules: ["Lead Funnel", "WhatsApp Engine", "Branch Quotas", "Billing Hub"],
    dark: false,
  },
  {
    id: "hms",
    name: "Rise HMS",
    category: "Healthcare SaaS",
    tagline: "Modern Hospital Management & Clinical Operations Suite",
    description:
      "A high-security, cloud-native Hospital Management System designed for clinics, diagnostic centers, and multi-speciality hospitals. Digitizes patient registration, doctor scheduling, OPD/IPD flows, and automated pharmacy billing.",
    url: "https://hms.risewithmedia.com",
    domain: "hms.risewithmedia.com",
    cta: "Launch HMS App ↗",
    badge: "Clinical Operating System",
    version: "v3.1 Live",
    stats: [
      { label: "Clinical Modules", value: "12+" },
      { label: "Patient Records", value: "100% Digital" },
      { label: "Deployment Type", value: "Zero-Latency Cloud" },
    ],
    features: [
      "Rapid patient registration & biometric check-in",
      "Real-time OPD queue & doctor scheduling",
      "In-house pharmacy inventory & batch tracking",
      "Lab diagnostics integration & PDF reporting",
      "Centralized insurance, TPA & digital billing",
    ],
    modules: ["OPD Queue", "EHR Records", "Pharmacy OS", "Lab Diagnostic"],
    dark: true,
  },
];

const techPillars = [
  {
    num: "01",
    title: "Cloud-Native Speed",
    desc: "Sub-100ms API response times hosted on distributed low-latency SSD clusters.",
    tag: "High Throughput",
  },
  {
    num: "02",
    title: "Enterprise RBAC Security",
    desc: "Granular multi-tiered user roles, encrypted sessions, and full audit logs.",
    tag: "Zero-Trust",
  },
  {
    num: "03",
    title: "Omni-Channel Sync",
    desc: "Instant automated WhatsApp, SMS, email, and Webhook triggers built-in.",
    tag: "Automated Triggers",
  },
  {
    num: "04",
    title: "99.9% Uptime Guarantee",
    desc: "Automated daily multi-region backups and continuous hot failover protection.",
    tag: "Always Online",
  },
];

export default function Softwares({ setPage }) {
  return (
    <main className="bg-white pt-20 sm:pt-[88px] overflow-hidden">

      {/* ─────────────────────────────────────────────────────────────────
          HERO SECTION (Aesthetic Ambient Gradient & Tech Badges)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="relative bg-white pt-16 sm:pt-20 pb-16 sm:pb-20 border-b border-[#eaeaea] overflow-hidden">
        {/* Ambient Cyan Glow Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[350px] bg-gradient-to-b from-[#12b7d4]/12 via-[#12b7d4]/4 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="rush-container text-center max-w-4xl mx-auto relative z-10">
          
          {/* Animated Tech Badge */}
          <ScrollText as="div" direction="up" delay={0} className="inline-flex items-center gap-2 bg-[#e6f9fc] border border-[#12b7d4]/30 px-4 py-1.5 rounded-full mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#12b7d4] animate-pulse" />
            <span className="text-xs font-black uppercase tracking-widest text-[#087f94]">
              Proprietary Cloud Platforms • 99.9% Uptime SLA
            </span>
          </ScrollText>

          {/* Massive Varela Heading */}
          <ScrollText as="h1" direction="up" delay={0.08} className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-[#000000] font-['Varela_Round'] leading-[0.95] mb-4">
            Built for Workflows,<br />
            Engineered for <span className="text-[#12b7d4]">Scale</span>
          </ScrollText>

          {/* Script Subtitle */}
          <ScrollText as="p" direction="up" delay={0.16} className="font-script text-2xl sm:text-3xl text-[#12b7d4] max-w-2xl mx-auto mb-8">
            Beyond marketing — cloud-native operating systems powering real South Indian enterprise growth.
          </ScrollText>

          {/* Mini Tech Ribbon */}
          <ScrollText as="div" direction="up" delay={0.24} className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-bold text-[#555555]">
            <span className="bg-[#f5f5f5] px-3.5 py-1.5 rounded-full border border-[#e5e5e5]">⚡ Microservices Architecture</span>
            <span className="bg-[#f5f5f5] px-3.5 py-1.5 rounded-full border border-[#e5e5e5]">🔒 Role-Based Permissions</span>
            <span className="bg-[#f5f5f5] px-3.5 py-1.5 rounded-full border border-[#e5e5e5]">📱 Mobile Responsive PWA</span>
            <span className="bg-[#f5f5f5] px-3.5 py-1.5 rounded-full border border-[#e5e5e5]">💬 WhatsApp API Integrated</span>
          </ScrollText>

        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          SAAS PRODUCTS SHOWCASE (Console Mockup & High-End Aesthetic UI)
      ───────────────────────────────────────────────────────────────── */}
      <div className="divide-y divide-[#eaeaea]">
        {saasProducts.map((product, idx) => (
          <ScrollSection key={product.id} id={product.id} className="py-20 lg:py-28 bg-white relative overflow-hidden">
            <div className="rush-container">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                {/* Left Column: Product Information */}
                <motion.div
                  className={"lg:col-span-5 flex flex-col items-start " + (idx % 2 === 1 ? "lg:order-2" : "")}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.05 }}
                  transition={{ duration: 0.6, ease: rushEase }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-black uppercase tracking-widest text-[#12b7d4] bg-[#e6f9fc] border border-[#12b7d4]/30 px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-[#888888] bg-[#f5f5f5] px-2.5 py-1 rounded-full border border-[#eaeaea]">
                      {product.version}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black uppercase tracking-tight text-[#000000] leading-tight mb-2 font-['Varela_Round']">
                    {product.name.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="text-[#12b7d4]">{product.name.split(" ").slice(-1)}</span>
                  </h2>

                  <p className="font-script text-xl sm:text-2xl text-[#12b7d4] mb-4">
                    {product.tagline}
                  </p>

                  <p className="text-[#555555] text-base leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="flex flex-col gap-3 mb-8 w-full">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#333333] font-medium">
                        <span className="w-5 h-5 rounded-full bg-[#e6f9fc] border border-[#12b7d4]/40 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                          <svg className="w-3 h-3 text-[#12b7d4]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-rush-cyan text-xs uppercase tracking-wider px-7 py-3.5 cursor-pointer shadow-md inline-flex items-center gap-2 hover:scale-[1.02] transition-all"
                    >
                      <span>{product.cta}</span>
                    </a>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#666666] hover:text-[#12b7d4] transition-colors flex items-center gap-1 font-bold"
                    >
                      <span>https://{product.domain}</span>
                    </a>
                  </div>
                </motion.div>

                {/* Right Column: Sleek Dashboard Console Mockup */}
                <motion.div
                  className={"lg:col-span-7 " + (idx % 2 === 1 ? "lg:order-1" : "")}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.05 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: rushEase }}
                >
                  <div
                    className={
                      "rounded-3xl border overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl " +
                      (product.dark
                        ? "border-neutral-800 bg-[#0d0d0d] text-white"
                        : "border-[#e0e0e0] bg-white text-black"
                      )
                    }
                  >
                    {/* Browser / Console Window Header */}
                    <div
                      className={
                        "px-5 py-3.5 flex items-center justify-between border-b shrink-0 " +
                        (product.dark
                          ? "bg-[#161616] border-neutral-800 text-neutral-400"
                          : "bg-[#f5f5f5] border-[#eaeaea] text-[#777777]"
                        )
                      }
                    >
                      {/* Traffic Light Dots */}
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                      </div>

                      {/* URL Address Bar */}
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          "flex items-center gap-2 px-4 py-1 rounded-full text-xs font-mono transition-colors " +
                          (product.dark
                            ? "bg-[#222222] text-[#12b7d4] hover:bg-[#2a2a2a]"
                            : "bg-white text-[#12b7d4] border border-[#e2e2e2] hover:border-[#12b7d4]"
                          )
                        }
                      >
                        <span className="text-[10px]">🔒</span>
                        <span>{product.domain}</span>
                        <span className="text-[10px]">↗</span>
                      </a>

                      {/* Live Beacon Status */}
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#10b981]">
                          Online
                        </span>
                      </div>
                    </div>

                    {/* Dashboard Body with High-End Cyber Aesthetics */}
                    <div className="p-7 sm:p-9">

                      {/* Active Modules Tab Strip */}
                      <div className="flex flex-wrap items-center gap-2 mb-8">
                        <span className={"text-[11px] font-bold uppercase tracking-wider mr-1 " + (product.dark ? "text-neutral-500" : "text-[#888888]")}>
                          Modules:
                        </span>
                        {product.modules.map((mod, mi) => (
                          <span
                            key={mi}
                            className={
                              "text-xs font-bold px-3 py-1.5 rounded-lg border transition-all " +
                              (mi === 0
                                ? "bg-[#12b7d4] text-white border-[#12b7d4] shadow-xs"
                                : product.dark
                                ? "bg-[#1a1a1a] text-neutral-300 border-neutral-800"
                                : "bg-[#f8f8f8] text-[#444444] border-[#eaeaea]"
                              )
                            }
                          >
                            {mod}
                          </span>
                        ))}
                      </div>

                      {/* Core Title & Tagline in Console */}
                      <div className="mb-8">
                        <h3 className={"text-3xl sm:text-4xl font-black uppercase tracking-tight font-['Varela_Round'] mb-1 " + (product.dark ? "text-white" : "text-black")}>
                          {product.name}
                        </h3>
                        <p className="font-script text-xl text-[#12b7d4]">
                          {product.tagline}
                        </p>
                      </div>

                      {/* Live Metric Cards Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                        {product.stats.map((stat, i) => (
                          <div
                            key={i}
                            className={
                              "p-4 rounded-2xl border transition-all hover:scale-[1.02] " +
                              (product.dark
                                ? "bg-[#181818] border-neutral-800 hover:border-[#12b7d4]/60"
                                : "bg-[#f9fafb] border-[#eaeaea] hover:border-[#12b7d4]/60"
                              )
                            }
                          >
                            <div className="text-2xl sm:text-3xl font-black font-['Varela_Round'] text-[#12b7d4] mb-1">
                              {stat.value}
                            </div>
                            <div className={"text-[10px] font-bold uppercase tracking-wider " + (product.dark ? "text-neutral-400" : "text-[#777777]")}>
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Terminal Footer Bar */}
                      <div className="mt-8 pt-5 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs">
                        <span className={"font-mono text-[11px] " + (product.dark ? "text-neutral-500" : "text-[#888888]")}>
                          cloud://{product.id}.cluster.risewithmedia
                        </span>
                        <a
                          href={product.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-[#12b7d4] hover:underline flex items-center gap-1"
                        >
                          <span>Open Live Environment</span>
                          <span>→</span>
                        </a>
                      </div>

                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </ScrollSection>
        ))}
      </div>

      {/* ─────────────────────────────────────────────────────────────────
          CORE ARCHITECTURE & ENGINEERING STANDARDS
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="py-20 lg:py-24 bg-[#fafbfc] border-b border-[#eaeaea]">
        <div className="rush-container">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollText as="span" direction="up" delay={0} className="tag-bubble-cyan mb-3 inline-block">
              Engineering Architecture
            </ScrollText>
            <ScrollText as="h2" direction="up" delay={0.08} className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black font-['Varela_Round'] mb-3">
              Engineered for <span className="text-[#12b7d4]">Peak Performance</span>
            </ScrollText>
            <ScrollText as="p" direction="up" delay={0.16} className="font-script text-2xl text-[#12b7d4]">
              High-availability infrastructure engineered to scale seamlessly across enterprise teams.
            </ScrollText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techPillars.map((pillar, pIdx) => (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.05 }}
                transition={{ duration: 0.5, delay: pIdx * 0.1, ease: rushEase }}
                className="p-7 rounded-3xl border border-[#eaeaea] bg-white hover:border-[#12b7d4] transition-all hover:-translate-y-1 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-black font-mono text-[#12b7d4]">
                      {pillar.num}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#087f94] bg-[#e6f9fc] px-2.5 py-1 rounded-md">
                      {pillar.tag}
                    </span>
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tight text-black font-['Varela_Round'] mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#f4f4f4] flex items-center gap-2 text-xs font-bold text-[#12b7d4]">
                  <span>System Active</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#12b7d4]" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          MORE COMING SOON BANNER
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="py-20 lg:py-24 bg-white">
        <div className="rush-container text-center max-w-3xl mx-auto">
          <ScrollText as="span" direction="up" delay={0} className="tag-bubble-cyan mb-4 inline-block">
            Future Deployments
          </ScrollText>
          <ScrollText as="h2" direction="up" delay={0.1} className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black font-['Varela_Round'] mb-3">
            More SaaS Systems in the <span className="text-[#12b7d4]">Pipeline</span>
          </ScrollText>
          <ScrollText as="p" direction="up" delay={0.18} className="font-script text-2xl sm:text-3xl text-[#12b7d4] mb-8">
            Next-generation business workflows, AI copilots & automation engines dropping soon.
          </ScrollText>
          <ScrollText as="div" direction="up" delay={0.26}>
            <button
              onClick={() => setPage("contact")}
              className="btn-rush-black text-xs uppercase tracking-wider px-9 py-4 cursor-pointer hover:bg-[#12b7d4] hover:text-white transition-all shadow-sm"
            >
              Partner With Us &rarr;
            </button>
          </ScrollText>
        </div>
      </ScrollSection>

    </main>
  );
}
