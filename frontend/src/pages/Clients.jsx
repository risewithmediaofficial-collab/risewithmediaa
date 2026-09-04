import ScrollSection from "../components/ScrollSection";
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
  const tickerLogos = [...allClients, ...allClients];

  return (
    <main className="bg-white pt-20 sm:pt-[88px]">
      
      {/* ─────────────────────────────────────────────────────────────────
          HEADER
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white pt-16 pb-14 border-b border-[#eaeaea]">
        <div className="rush-container text-center">
          <span className="tag-bubble-cyan mb-4">
            Network & Partners
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#000000] font-['Manrope'] mb-4">
            Trusted by Visionaries,<br />
            Admired by the <span className="text-[#12b7d4]">Best</span>
          </h1>
          <p className="font-script text-2xl sm:text-3xl text-[#555555]">
            Powering South India’s most ambitious consumer & retail brands.
          </p>
        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          KEY STATS
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white py-14 border-b border-[#eaeaea]">
        <div className="rush-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((st, i) => (
              <div key={i} className="text-center p-6 rounded-2xl border border-[#eaeaea] bg-white hover:border-[#12b7d4] transition-colors">
                <div className="text-3xl sm:text-5xl font-black text-black font-['Manrope'] mb-2">
                  {st.num}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#777777]">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          CLIENT LOGOS GRID
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white py-20 border-b border-[#eaeaea]">
        <div className="rush-container">
          
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black font-['Manrope']">
              Client Portfolio
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {allClients.map((client, idx) => (
              <div
                key={idx}
                className="h-28 rounded-2xl border border-[#eaeaea] bg-white flex items-center justify-center p-5 hover:border-[#12b7d4] transition-all duration-300 group cursor-pointer"
                title={client.name}
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="max-h-12 w-auto max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          SMOOTH LOGO TICKER
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white py-12 border-b border-[#eaeaea] overflow-hidden">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-rush-ticker flex items-center gap-8">
            {tickerLogos.map((client, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-6 py-3 rounded-2xl border border-[#eaeaea] bg-white flex-shrink-0"
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="h-9 w-auto max-w-[120px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          CLIENT REVIEWS (The Rush Republic Card Layout)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white py-20 lg:py-28 border-b border-[#eaeaea]">
        <div className="rush-container">
          
          <div className="max-w-3xl mb-12">
            <span className="tag-bubble-cyan mb-3">
              Direct Feedback
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black font-['Manrope']">
              What Founders Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientReviews.map((rev, i) => (
              <div
                key={i}
                className="rounded-3xl border border-[#eaeaea] p-8 flex flex-col justify-between hover:border-[#12b7d4] transition-all bg-white"
              >
                <div>
                  {/* 5 Stars Rating */}
                  <div className="flex items-center gap-1 mb-5 text-[#12b7d4] text-sm">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${rev.bg} flex items-center justify-center text-white text-xl font-black font-['Manrope'] shadow-sm flex-shrink-0`}>
                      {rev.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-black font-['Manrope']">
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
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <button
              onClick={() => setPage("contact")}
              className="btn-rush-cyan text-xs uppercase tracking-wider px-8 py-4 cursor-pointer"
            >
              Partner With Us →
            </button>
          </div>

        </div>
      </ScrollSection>

    </main>
  );
}