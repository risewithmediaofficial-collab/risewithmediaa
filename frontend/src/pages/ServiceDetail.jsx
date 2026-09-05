import { motion } from "framer-motion";
import ScrollSection from "../components/ScrollSection";

// Service Card Images (Black, White & Blue/Cyan Theme)
import contentSocialImg from "../assets/services/content_social.jpg";
import websitesFunnelsImg from "../assets/services/websites_funnels.jpg";
import performanceMarketingImg from "../assets/services/performance_marketing.jpg";
import saasTechnologyImg from "../assets/services/saas_technology.jpg";

export const servicesData = {
  "service-content-social": {
    id: "service-content-social",
    tag: "Content & Social",
    title: "CONTENT & SOCIAL MEDIA",
    highlightTitle: (
      <>
        CONTENT & <span className="text-[#12b7d4]">SOCIAL MEDIA</span>
      </>
    ),
    shortTitle: "Content & Social Media",
    subtitle: "Build a Brand People Want to Follow.",
    description:
      "Your social media presence is more than just posting content. We create strategic content that helps your brand stay visible, relevant, and connected with the right audience.",
    image: contentSocialImg,
    itemsTitle: "What We Do",
    items: [
      {
        title: "Content Strategy",
        description: "We plan content around your business goals, audience, and brand identity.",
        icon: "🎯",
      },
      {
        title: "Reels & Short-Form Content",
        description: "Scroll-stopping videos designed to capture attention and increase engagement.",
        icon: "⚡",
      },
      {
        title: "Long-Form Video Production",
        description: "Professional videos for YouTube, brand storytelling, interviews, and more.",
        icon: "🎬",
      },
      {
        title: "Creative Design",
        description: "High-quality posters and visual content that maintain a consistent brand identity.",
        icon: "🎨",
      },
      {
        title: "Video Production",
        description: "From planning and shooting to professional editing, we handle the complete process.",
        icon: "🎥",
      },
      {
        title: "Captions & Content Writing",
        description: "Clear and engaging copy designed to complement your content.",
        icon: "✍️",
      },
      {
        title: "Publishing & Management",
        description: "We help schedule and organize your content for a consistent online presence.",
        icon: "📅",
      },
    ],
    processTitle: "Our Focus",
    processSteps: ["Strategy", "Creation", "Consistency", "Growth"],
    ctaText: "Let's Build Your Digital Presence →",
    contactService: "Social Media",
    keywords: ["Reels", "Videos", "Creatives", "Social Media Strategy"],
  },
  "service-websites-funnels": {
    id: "service-websites-funnels",
    tag: "Websites & Funnels",
    title: "WEBSITES & CONVERSION FUNNELS",
    highlightTitle: (
      <>
        WEBSITES & <span className="text-[#12b7d4]">CONVERSION FUNNELS</span>
      </>
    ),
    shortTitle: "Websites & Funnels",
    subtitle: "Don't Just Get Visitors. Turn Them Into Customers.",
    description:
      "A good website should do more than look great. We create digital experiences that clearly communicate your value and guide visitors towards taking action.",
    image: websitesFunnelsImg,
    itemsTitle: "What We Build",
    items: [
      {
        title: "Business Websites",
        description: "Professional websites designed to represent your company and build credibility.",
        icon: "🏢",
      },
      {
        title: "Corporate Websites",
        description: "Structured and scalable digital platforms for established businesses and organizations.",
        icon: "🌐",
      },
      {
        title: "Landing Pages",
        description: "Focused pages built for campaigns, products, services, and lead generation.",
        icon: "🎯",
      },
      {
        title: "Sales & Lead Funnels",
        description: "Strategic customer journeys designed to convert visitors into qualified leads.",
        icon: "📈",
      },
      {
        title: "Portfolio Websites",
        description: "Showcase your work, products, or services with a strong visual experience.",
        icon: "✨",
      },
      {
        title: "SEO-Ready Foundation",
        description: "Websites structured to provide a strong foundation for search visibility.",
        icon: "🔍",
      },
      {
        title: "Conversion Optimization",
        description: "Improving the user experience to encourage more enquiries and conversions.",
        icon: "⚡",
      },
    ],
    processTitle: "Our Approach",
    processSteps: ["Strategy", "Design", "Development", "Conversion"],
    ctaText: "Build Your Digital Experience →",
    contactService: "Website Development",
    keywords: ["Websites", "Landing Pages", "Funnels", "SEO"],
  },
  "service-performance-marketing": {
    id: "service-performance-marketing",
    tag: "Performance Marketing",
    title: "PERFORMANCE MARKETING",
    highlightTitle: (
      <>
        PERFORMANCE <span className="text-[#12b7d4]">MARKETING</span>
      </>
    ),
    shortTitle: "Performance Marketing",
    subtitle: "Reach the Right People. Drive Real Results.",
    description:
      "Great marketing isn't about reaching everyone. It's about reaching the right audience with the right message at the right time. We create data-driven campaigns designed around your business objectives.",
    image: performanceMarketingImg,
    itemsTitle: "What We Do",
    items: [
      {
        title: "Meta Advertising",
        description: "Strategic Facebook and Instagram advertising campaigns built around your goals.",
        icon: "📱",
      },
      {
        title: "Lead Generation",
        description: "Campaigns designed to attract and capture high-quality potential customers.",
        icon: "👥",
      },
      {
        title: "Sales Campaigns",
        description: "Conversion-focused advertising that helps drive product or service sales.",
        icon: "💰",
      },
      {
        title: "Retargeting",
        description: "Reconnect with people who have already interacted with your business or brand.",
        icon: "🔄",
      },
      {
        title: "Audience Strategy",
        description: "Identify and target audiences most relevant to your products and services.",
        icon: "🎯",
      },
      {
        title: "Campaign Management",
        description: "Continuous monitoring and optimization throughout your campaign.",
        icon: "📊",
      },
      {
        title: "Analytics & Reporting",
        description: "Clear insights into campaign performance and marketing results.",
        icon: "📋",
      },
    ],
    processTitle: "Our Process",
    processSteps: ["Research", "Strategy", "Launch", "Optimize", "Scale"],
    ctaText: "Start Growing With Performance Marketing →",
    contactService: "Performance Marketing",
    keywords: ["Meta Ads", "Lead Generation", "Retargeting", "Analytics"],
  },
  "service-saas-technology": {
    id: "service-saas-technology",
    tag: "Technology & SaaS",
    title: "SAAS PRODUCTS & BUSINESS TECHNOLOGY",
    highlightTitle: (
      <>
        SAAS PRODUCTS & <span className="text-[#12b7d4]">BUSINESS TECHNOLOGY</span>
      </>
    ),
    shortTitle: "Technology & SaaS",
    subtitle: "Technology Built Around Your Business.",
    description:
      "As your business grows, managing operations becomes more complex. We build custom digital solutions that simplify workflows, improve efficiency, and support long-term growth.",
    image: saasTechnologyImg,
    itemsTitle: "What We Build",
    items: [
      {
        title: "Custom SaaS Platforms",
        description: "Scalable software products designed around specific business requirements.",
        icon: "💻",
      },
      {
        title: "CRM Systems",
        description: "Manage leads, customers, sales, and relationships from one centralized platform.",
        icon: "🗂️",
      },
      {
        title: "Business Management Software",
        description: "Custom systems designed to simplify and organize day-to-day operations.",
        icon: "⚙️",
      },
      {
        title: "Workflow Automation",
        description: "Reduce repetitive manual work by connecting and automating your business processes.",
        icon: "⚡",
      },
      {
        title: "Custom Dashboards",
        description: "Get a clear view of your important business data and performance.",
        icon: "📊",
      },
      {
        title: "Multi-Tenant SaaS Development",
        description: "Build scalable platforms capable of serving multiple users or businesses.",
        icon: "🏢",
      },
      {
        title: "API Integrations",
        description: "Connect your software with third-party platforms and services.",
        icon: "🔌",
      },
      {
        title: "Cloud Infrastructure",
        description: "Reliable deployment and infrastructure designed for scalability.",
        icon: "☁️",
      },
    ],
    processTitle: "Our Approach",
    processSteps: ["Understand", "Build", "Automate", "Scale"],
    ctaText: "Let's Build Something Powerful →",
    contactService: "CRM & SaaS",
    keywords: ["SaaS", "CRM", "Automation", "Custom Software"],
  },
};

export default function ServiceDetail({ serviceId, setPage, setSelectedContactService }) {
  const service = servicesData[serviceId] || servicesData["service-content-social"];
  const otherServices = Object.values(servicesData).filter((s) => s.id !== service.id);

  const handleCtaClick = () => {
    if (setSelectedContactService) {
      setSelectedContactService(service.contactService);
    }
    setPage("contact");
  };

  return (
    <main className="bg-white pt-24 sm:pt-28 pb-20">
      
      {/* ─── Top Breadcrumb Navigation ─── */}
      <div className="rush-container mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#eaeaea] pb-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#666666]">
            <button
              onClick={() => setPage("home")}
              className="hover:text-[#12b7d4] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={() => setPage("home")}
              className="hover:text-[#12b7d4] transition-colors cursor-pointer"
            >
              Services
            </button>
            <span>/</span>
            <span className="text-black font-bold">{service.shortTitle}</span>
          </div>

          <button
            onClick={() => setPage("home")}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#12b7d4] hover:text-[#0ea5c0] transition-colors cursor-pointer group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to All Services</span>
          </button>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <ScrollSection className="pb-16 sm:pb-20 border-b border-[#eaeaea]">
        <div className="rush-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Category Badge - No Numbers */}
              <div className="flex items-center gap-3 mb-6">
                <span className="tag-bubble-cyan text-xs uppercase tracking-widest font-black py-1 px-3.5">
                  {service.tag}
                </span>
              </div>

              {/* Main Headline with Blue Word Highlight */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-black leading-[1.05] mb-3 font-['Varela_Round']">
                {service.highlightTitle || service.title}
              </h1>

              {/* Subtitle in Caveat script italic blue font like second image */}
              <p className="font-script text-2xl sm:text-3xl md:text-4xl text-[#12b7d4] leading-relaxed mb-6">
                {service.subtitle}
              </p>

              {/* Detailed Description */}
              <p className="text-base sm:text-lg text-[#555555] font-medium leading-relaxed mb-8 max-w-2xl">
                {service.description}
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={handleCtaClick}
                  className="btn-rush-cyan text-xs sm:text-sm uppercase tracking-wider px-8 py-4 cursor-pointer shadow-md hover:scale-105 transition-transform"
                >
                  {service.ctaText}
                </button>
                <a
                  href={`https://wa.me/919345254648?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20${encodeURIComponent(service.shortTitle)}%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-rush-black text-xs sm:text-sm uppercase tracking-wider px-7 py-4 cursor-pointer hover:bg-[#12b7d4] transition-all"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Media Preview */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#eaeaea] bg-black shadow-2xl aspect-[4/3] group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="tag-bubble bg-[#12b7d4] text-white text-[11px] font-black uppercase tracking-wider mb-1.5 inline-block">
                    Rise Service Suite
                  </span>
                  <p className="text-lg font-black uppercase tracking-tight text-white">
                    {service.shortTitle}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </ScrollSection>

      {/* ─── What We Do / What We Build Section ─── */}
      <ScrollSection className="py-20 lg:py-24 border-b border-[#eaeaea]">
        <div className="rush-container">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <span className="tag-bubble bg-[#12b7d4] text-white text-xs uppercase tracking-wider font-bold mb-3 inline-block">
                Core Capabilities
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black font-['Varela_Round']">
                {service.itemsTitle}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#666666] max-w-md">
              Comprehensive, high-performance execution built for tangible business outcomes.
            </p>
          </div>

          {/* Grid of Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {service.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative bg-[#fafafa] hover:bg-white rounded-3xl p-7 sm:p-8 border border-[#eaeaea] hover:border-[#12b7d4] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-12 h-12 rounded-2xl bg-white border border-[#eaeaea] group-hover:border-[#12b7d4] flex items-center justify-center text-2xl shadow-xs transition-colors">
                      {item.icon}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#888888] group-hover:text-[#12b7d4] transition-colors">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-black font-['Varela_Round'] tracking-tight mb-2.5 group-hover:text-[#12b7d4] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#555555] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#f0f0f0] flex items-center gap-2 text-xs font-bold text-[#888888] group-hover:text-black transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#12b7d4]" />
                  <span>Enterprise Grade Standard</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </ScrollSection>

      {/* ─── Process / Focus Flowchart Section ─── */}
      <ScrollSection className="py-20 lg:py-24 border-b border-[#eaeaea] bg-[#fafafa]">
        <div className="rush-container">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="tag-bubble-cyan text-xs uppercase tracking-widest font-black mb-3 inline-block">
              Execution Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black font-['Varela_Round'] mb-4">
              {service.processTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#666666]">
              A proven, step-by-step roadmap that eliminates guesswork and maximizes return on investment.
            </p>
          </div>

          {/* Process Progression Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {service.processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative bg-white rounded-3xl p-8 border border-[#eaeaea] shadow-sm hover:border-[#12b7d4] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-10 h-10 rounded-full bg-[#12b7d4]/10 text-[#087f94] font-mono font-black text-sm flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    {idx < service.processSteps.length - 1 && (
                      <span className="hidden lg:block text-2xl font-black text-[#12b7d4]">
                        →
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight text-black font-['Varela_Round'] mb-2">
                    {step}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                    Systematic alignment ensuring every phase builds compound momentum toward growth.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#f0f0f0] text-[11px] font-bold uppercase tracking-wider text-[#12b7d4]">
                  Phase 0{idx + 1} Milestone
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </ScrollSection>

      {/* ─── High-Conversion CTA Callout ─── */}
      <ScrollSection className="py-20 lg:py-24 border-b border-[#eaeaea]">
        <div className="rush-container">
          <div className="bg-black text-white rounded-3xl sm:rounded-[36px] p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
            {/* Subtle glow background */}
            <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#12b7d4]/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <span className="tag-bubble bg-[#12b7d4] text-white text-xs uppercase tracking-wider font-black mb-4 inline-block">
                Ready To Get Started?
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-['Varela_Round'] leading-[1.05] mb-6">
                {service.ctaText}
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-8 max-w-2xl">
                Let's discuss how our {service.shortTitle} team can engineer measurable results and scalable momentum for your business.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={handleCtaClick}
                  className="btn-rush-cyan text-xs sm:text-sm uppercase tracking-wider px-9 py-4 cursor-pointer shadow-lg hover:scale-105 transition-transform"
                >
                  Schedule Consultation →
                </button>
                <button
                  onClick={() => setPage("works")}
                  className="px-8 py-4 rounded-full border border-white/20 text-white text-xs sm:text-sm uppercase tracking-wider font-bold hover:bg-white hover:text-black transition-colors cursor-pointer"
                >
                  View Related Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* ─── Explore Other Services Navigation ─── */}
      <ScrollSection className="pt-20 pb-12">
        <div className="rush-container">
          <div className="flex items-center justify-between gap-4 mb-10">
            <div>
              <span className="tag-bubble-cyan text-xs uppercase tracking-widest font-black mb-2 inline-block">
                Comprehensive Suite
              </span>
              <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black font-['Varela_Round']">
                Explore Other Services
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((other) => (
              <div
                key={other.id}
                onClick={() => setPage(other.id)}
                className="group p-6 sm:p-7 rounded-3xl border border-[#eaeaea] hover:border-[#12b7d4] bg-white hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="tag-bubble-cyan text-[11px] font-black py-0.5 px-3">
                      {other.tag}
                    </span>
                    <span className="text-xs text-[#12b7d4] font-bold">Read More →</span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-black uppercase tracking-tight text-black mb-2 font-['Varela_Round']">
                    {other.shortTitle || other.title}
                  </h4>

                  <p className="font-script text-lg sm:text-xl text-[#12b7d4] leading-snug mb-4">
                    {other.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#f0f0f0] flex flex-wrap gap-1.5">
                  {other.keywords.slice(0, 3).map((kw, i) => (
                    <span key={i} className="text-[11px] font-semibold text-[#666666] bg-[#f5f5f5] px-2.5 py-0.5 rounded-full">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </ScrollSection>

    </main>
  );
}
