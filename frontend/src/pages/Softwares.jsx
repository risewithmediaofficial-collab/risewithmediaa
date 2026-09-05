import { motion } from "framer-motion";
import ScrollSection, { ScrollText, rushEase } from "../components/ScrollSection";

const saasProducts = [
  {
    id: "company",
    name: "Rise Cloud CRM",
    category: "CRM & ERP Platform",
    tagline: "Business Automation & Multi-Branch CRM",
    description:
      "Cloud-native CRM built to centralize leads, automated WhatsApp pipelines, staff quotas, and branch billing.",
    url: "https://company.risewithmedia.com",
    domain: "company.risewithmedia.com",
    cta: "Launch CRM App ↗",
    badge: "CRM Platform",
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
  },
  {
    id: "hms",
    name: "Rise HMS",
    category: "Healthcare SaaS",
    tagline: "Hospital Management & Clinical Operations",
    description:
      "Cloud Hospital Management System for patient registration, OPD/IPD scheduling, and automated pharmacy billing.",
    url: "https://hms.risewithmedia.com",
    domain: "hms.risewithmedia.com",
    cta: "Launch HMS App ↗",
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
  },
];

export default function Softwares({ setPage }) {
  const scrollToProduct = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-white pt-20 sm:pt-[88px]">

      {/* ─────────────────────────────────────────────────────────────────
          HEADER & 1ST: LIST OUT AVAILABLE SAAS WEBSITES
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white pt-16 pb-14 border-b border-[#eaeaea]">
        <div className="rush-container text-center max-w-4xl mx-auto">
          <ScrollText as="span" direction="up" delay={0} className="tag-bubble-cyan mb-4 inline-block">
            Proprietary SaaS
          </ScrollText>
          <ScrollText as="h1" direction="up" delay={0.08} className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#000000] font-['Varela_Round'] mb-3">
            Built for Workflows,<br />
            Engineered for <span className="text-[#12b7d4]">Scale</span>
          </ScrollText>
          <ScrollText as="p" direction="up" delay={0.16} className="font-script text-2xl sm:text-3xl text-[#12b7d4] mb-8">
            Cloud-native operating systems powering real business growth.
          </ScrollText>

          {/* 1st in list: Available SaaS Websites */}
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
            {saasProducts.map((prod) => (
              <a
                key={`link-${prod.id}`}
                href={prod.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-[#eaeaea] bg-white text-[#555555] text-xs font-mono font-bold hover:border-[#12b7d4] hover:text-[#12b7d4] transition-colors inline-flex items-center gap-1"
              >
                <span>{prod.domain}</span>
                <span className="text-[10px]">↗</span>
              </a>
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

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#000000] leading-tight mb-2 font-['Varela_Round']">
                    {product.name.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="text-[#12b7d4]">{product.name.split(" ").slice(-1)}</span>
                  </h2>

                  <p className="font-script text-xl sm:text-2xl text-[#12b7d4] mb-4">
                    {product.tagline}
                  </p>

                  <p className="text-[#555555] text-base leading-relaxed mb-6 max-w-md">
                    {product.description}
                  </p>

                  {/* Feature list */}
                  <ul className="flex flex-col gap-2.5 mb-7 w-full">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-[#333333] font-medium">
                        <span className="w-5 h-5 rounded-full bg-[#e6f9fc] border border-[#12b7d4]/40 flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-[#12b7d4]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-4">
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-rush-cyan text-xs uppercase tracking-wider px-7 py-3.5 cursor-pointer shadow-sm inline-flex items-center gap-2 hover:scale-[1.02] transition-all"
                    >
                      <span>{product.cta}</span>
                    </a>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-bold text-[#777777] hover:text-[#12b7d4] transition-colors"
                    >
                      {product.domain}
                    </a>
                  </div>
                </motion.div>

                {/* Right Column: Sleek Console Preview Card */}
                <motion.div
                  className={"lg:col-span-7 " + (idx % 2 === 1 ? "lg:order-1" : "")}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.05 }}
                  transition={{ duration: 0.55, delay: 0.1, ease: rushEase }}
                >
                  <div
                    className={
                      "rounded-3xl overflow-hidden border p-7 sm:p-9 shadow-lg " +
                      (product.dark
                        ? "border-[#222] bg-[#000000] text-white"
                        : "border-[#eaeaea] bg-[#f9fafb] text-black"
                      )
                    }
                  >
                    {/* Top Console Bar */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/10 dark:border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#12b7d4] animate-pulse" />
                        <span className={"text-xs font-black uppercase tracking-widest " + (product.dark ? "text-[#aaa]" : "text-[#777]")}>
                          Live Cloud App
                        </span>
                      </div>
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={"text-xs font-mono px-3.5 py-1.5 rounded-full border transition-all " +
                          (product.dark
                            ? "border-[#333] text-[#12b7d4] hover:bg-[#1a1a1a]"
                            : "border-[#eaeaea] text-[#12b7d4] bg-white hover:border-[#12b7d4]"
                          )
                        }
                      >
                        https://{product.domain} ↗
                      </a>
                    </div>

                    {/* Product Name & Tagline */}
                    <h3 className={"text-3xl sm:text-4xl font-black uppercase tracking-tight font-['Varela_Round'] mb-1 " + (product.dark ? "text-white" : "text-black")}>
                      {product.name}
                    </h3>
                    <p className="font-script text-xl text-[#12b7d4] mb-6">
                      {product.tagline}
                    </p>

                    {/* Stats Row */}
                    <div className={"grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t " + (product.dark ? "border-[#222]" : "border-[#e5e5e5]")}>
                      {product.stats.map((stat, i) => (
                        <div key={i} className="flex flex-col gap-0.5">
                          <span className="text-2xl sm:text-3xl font-black font-['Varela_Round'] text-[#12b7d4]">
                            {stat.value}
                          </span>
                          <span className={"text-[10px] font-bold uppercase tracking-wider " + (product.dark ? "text-[#888]" : "text-[#777]")}>
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </ScrollSection>
        ))}
      </div>

      {/* ─────────────────────────────────────────────────────────────────
          BOTTOM CTA
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="py-16 bg-[#f9f9f9] border-t border-[#eaeaea]">
        <div className="rush-container text-center max-w-2xl mx-auto">
          <ScrollText as="h2" direction="up" delay={0.05} className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black font-['Varela_Round'] mb-2">
            Deploy Your SaaS with <span className="text-[#12b7d4]">Rise With Media</span>
          </ScrollText>
          <ScrollText as="p" direction="up" delay={0.12} className="font-script text-xl sm:text-2xl text-[#12b7d4] mb-6">
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
