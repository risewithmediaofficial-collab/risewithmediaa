import { motion } from "framer-motion";
import ScrollSection, { ScrollText } from "../components/ScrollSection";

const saasProducts = [
  {
    id: "company",
    name: "Rise Cloud CRM",
    tagline: "Business Automation & CRM Platform",
    description:
      "A full-stack cloud CRM and business automation suite built for multi-location businesses. Manage leads, pipelines, staff, billing, and reporting — all from one intelligent dashboard.",
    url: "https://company.risewithmedia.com",
    cta: "Launch App ↗",
    badge: "CRM & ERP",
    stats: [
      { label: "Pipelines Automated", value: "99.4%" },
      { label: "Stores Managed", value: "16+" },
      { label: "Uptime SLA", value: "99.9%" },
    ],
    features: [
      "Multi-branch lead management",
      "Automated follow-up pipelines",
      "Staff & role management",
      "Billing & invoice automation",
      "Real-time analytics dashboard",
    ],
    dark: false,
  },
  {
    id: "hms",
    name: "Rise HMS",
    tagline: "Hospital Management System",
    description:
      "A modern, cloud-based Hospital Management System designed for clinics and healthcare providers. From patient registration to billing, appointments to medical records — fully digitised.",
    url: "https://hms.risewithmedia.com",
    cta: "Launch App ↗",
    badge: "Healthcare SaaS",
    stats: [
      { label: "Modules Available", value: "12+" },
      { label: "Patient Records", value: "Digital" },
      { label: "Deployment", value: "Cloud" },
    ],
    features: [
      "Patient registration & records",
      "Appointment & OPD management",
      "Pharmacy & inventory",
      "Lab & diagnostics module",
      "Doctor & staff scheduling",
    ],
    dark: true,
  },
];

export default function Softwares({ setPage }) {
  return (
    <main className="bg-white pt-20 sm:pt-[88px]">

      {/* ─────────────────────────────────────────────────────────────────
          HEADER (Exact Clients & Home Style Typography)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white pt-16 pb-14 border-b border-[#eaeaea]">
        <div className="rush-container text-center max-w-4xl mx-auto">
          <ScrollText as="span" direction="up" delay={0} className="tag-bubble-cyan mb-4 inline-block">
            Cloud Platforms & SaaS
          </ScrollText>
          <ScrollText as="h1" direction="up" delay={0.08} className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#000000] font-['Varela_Round'] mb-4">
            Built for Workflows,<br />
            Engineered for <span className="text-[#12b7d4]">Scale</span>
          </ScrollText>
          <ScrollText as="p" direction="up" delay={0.18} className="font-script text-2xl sm:text-3xl text-[#12b7d4]">
            Beyond agency marketing — cloud-native operating systems powering real business growth.
          </ScrollText>
        </div>
      </ScrollSection>

      {/* SAAS PRODUCT CARDS */}
      <div className="divide-y divide-[#eaeaea]">
        {saasProducts.map((product, idx) => (
          <ScrollSection key={product.id} id={product.id} className="py-20 lg:py-28 bg-white">
            <div className="rush-container">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

                {/* Text Block */}
                <motion.div
                  className={"lg:col-span-5 flex flex-col items-start " + (idx % 2 === 1 ? "lg:order-2" : "")}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="text-xs font-black uppercase tracking-widest text-[#12b7d4] mb-3 block">
                    {product.badge}
                  </span>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#000000] leading-tight mb-2 font-['Varela_Round']">
                    {product.name.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="text-[#12b7d4]">{product.name.split(" ").slice(-1)}</span>
                  </h2>

                  <p className="font-script text-xl sm:text-2xl text-[#12b7d4] mb-5">
                    {product.tagline}
                  </p>

                  <p className="text-[#555555] text-base leading-relaxed mb-8 max-w-md">
                    {product.description}
                  </p>

                  {/* Feature list */}
                  <ul className="flex flex-col gap-2.5 mb-8 w-full">
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

                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-rush-black text-xs uppercase tracking-wider px-7 py-3 cursor-pointer hover:bg-[#12b7d4] hover:text-white transition-all shadow-sm"
                  >
                    {product.cta}
                  </a>
                </motion.div>

                {/* Stats + URL Card */}
                <motion.div
                  className={"lg:col-span-7 " + (idx % 2 === 1 ? "lg:order-1" : "")}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className={"rounded-3xl overflow-hidden border p-8 sm:p-10 " +
                      (product.dark
                        ? "border-[#222] bg-[#000000]"
                        : "border-[#eaeaea] bg-[#f9f9f9]"
                      )
                    }
                  >
                    {/* Top label */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#12b7d4] animate-pulse" />
                        <span className={"text-xs font-black uppercase tracking-widest " + (product.dark ? "text-[#888]" : "text-[#888888]")}>
                          Live Product
                        </span>
                      </div>
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={"text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border transition-all hover:-translate-y-0.5 " +
                          (product.dark
                            ? "border-[#333] text-[#aaa] hover:border-[#12b7d4] hover:text-[#12b7d4]"
                            : "border-[#eaeaea] text-[#888] hover:border-[#12b7d4] hover:text-[#12b7d4]"
                          )
                        }
                      >
                        {product.url.replace("https://", "")}
                      </a>
                    </div>

                    {/* Product name */}
                    <h3 className={"text-4xl sm:text-5xl font-black uppercase tracking-tight font-['Varela_Round'] mb-1 " + (product.dark ? "text-white" : "text-black")}>
                      {product.name.split(" ").slice(0, -1).join(" ")}{" "}
                      <span className="text-[#12b7d4]">{product.name.split(" ").slice(-1)}</span>
                    </h3>
                    <p className="font-script text-xl sm:text-2xl text-[#12b7d4] mb-8">
                      {product.tagline}
                    </p>

                    {/* Stats row */}
                    <div className={"grid grid-cols-3 gap-4 pt-8 border-t " + (product.dark ? "border-[#222]" : "border-[#e5e5e5]")}>
                      {product.stats.map((stat, i) => (
                        <div key={i} className="flex flex-col gap-1">
                          <span className={"text-2xl sm:text-3xl font-black font-['Varela_Round'] " + (product.dark ? "text-[#12b7d4]" : "text-black")}>
                            {stat.value}
                          </span>
                          <span className={"text-[10px] font-bold uppercase tracking-wider " + (product.dark ? "text-[#888]" : "text-[#888]")}>
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

      {/* MORE COMING SOON BANNER */}
      <ScrollSection className="py-20 bg-[#f9f9f9] border-t border-[#eaeaea]">
        <div className="rush-container text-center max-w-3xl mx-auto">
          <ScrollText as="span" direction="up" delay={0} className="tag-bubble-cyan mb-4 inline-block">Future Deployments</ScrollText>
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

