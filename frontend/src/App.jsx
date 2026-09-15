import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Softwares from "./pages/Softwares";
import ServiceDetail, { servicesData } from "./pages/ServiceDetail";

// Floating WhatsApp Button with authentic WhatsApp branding
function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919345254648?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_6px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_26px_rgba(37,211,102,0.6)] transition-all duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.0, type: "spring", stiffness: 220, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
    >
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-sm"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </motion.a>
  );
}

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export const routeMeta = {
  home: {
    title: "Best Digital Marketing Agency in Krishnagiri & Hosur, Tamil Nadu | Rise With Media",
    description: "Rise With Media is the #1 rated digital marketing agency in Krishnagiri and Hosur, Tamil Nadu. We deliver high-ROI Meta ads, viral Instagram reels, custom business websites, local SEO, and B2B lead generation across Hosur, Dharmapuri, Salem, Bengaluru, and all of Tamil Nadu.",
    keywords: "digital marketing agency Krishnagiri, best digital marketing company in Krishnagiri, top digital marketing agency Hosur, digital marketing agency near me, social media marketing Krishnagiri, Meta ads agency Krishnagiri, website development company Krishnagiri, website design Hosur, கிருஷ்ணகிரி டிஜிட்டல் மார்க்கெட்டிங்",
    canonical: "https://risewithmedia.com/",
  },
  works: {
    title: "Case Studies & Client Results | Digital Marketing Krishnagiri | Rise With Media",
    description: "Explore verified client results, 10x ROAS Meta ad campaigns, 2.5M+ viral reel views, and web design case studies from Rise With Media across Krishnagiri, Hosur, and Tamil Nadu.",
    keywords: "digital marketing case studies Krishnagiri, Meta ads results Hosur, Instagram reels marketing Tamil Nadu, client portfolio Rise With Media",
    canonical: "https://risewithmedia.com/works",
  },
  clients: {
    title: "Our Clients & Partner Reviews | Rise With Media Krishnagiri & Hosur",
    description: "See why 50+ businesses in Krishnagiri, Hosur, Salem, and Bengaluru trust Rise With Media for performance marketing, social media reels, and web development.",
    keywords: "digital marketing reviews Krishnagiri, client testimonials Hosur, trusted agency Tamil Nadu, Rise With Media clients",
    canonical: "https://risewithmedia.com/clients",
  },
  softwares: {
    title: "SaaS & WhatsApp CRM Automation Software | Rise With Media Krishnagiri",
    description: "Streamline business operations with custom SaaS tools, automated WhatsApp lead management, and agency CRM systems built by Rise With Media.",
    keywords: "WhatsApp marketing software Krishnagiri, CRM software Tamil Nadu, business automation tools Hosur, custom SaaS development",
    canonical: "https://risewithmedia.com/softwares",
  },
  contact: {
    title: "Contact Rise With Media | #1 Digital Marketing Agency in Krishnagiri & Hosur",
    description: "Ready to scale your business? Contact Rise With Media in Krishnagiri, Tamil Nadu. Reach us on WhatsApp at +91 9345254648 or book a free strategy call.",
    keywords: "contact digital marketing agency Krishnagiri, hire Meta ads expert Hosur, website designer near me, WhatsApp marketing consultation",
    canonical: "https://risewithmedia.com/contact",
  },
  "service-content-social": {
    title: "Social Media Marketing & Instagram Reels Agency Krishnagiri | Rise With Media",
    description: "Build a dominant social media brand in Krishnagiri & Hosur. Viral Instagram reel production, video editing, social media management, and content strategy.",
    keywords: "social media marketing Krishnagiri, Instagram reels agency Hosur, video editing company near me, short form content Tamil Nadu",
    canonical: "https://risewithmedia.com/services/content-social",
  },
  "service-websites-funnels": {
    title: "Website Design & Conversion Funnels Company in Krishnagiri | Rise With Media",
    description: "Fast, mobile-friendly business websites and high-converting lead funnels in Krishnagiri, Hosur, and Dharmapuri. SEO-optimized for Google search rankings.",
    keywords: "website design Krishnagiri, web development company Hosur, landing page designer Dharmapuri, business website developer Tamil Nadu",
    canonical: "https://risewithmedia.com/services/websites-funnels",
  },
  "service-performance-marketing": {
    title: "Meta Ads & Performance Marketing Agency Krishnagiri & Hosur | Rise With Media",
    description: "High-ROAS Facebook & Instagram advertising in Krishnagiri, Hosur, and Tamil Nadu. Proven lead generation funnels, precise audience targeting, and measurable ROI.",
    keywords: "Meta ads agency Krishnagiri, Facebook advertising Hosur, performance marketing agency Tamil Nadu, lead generation specialist Salem",
    canonical: "https://risewithmedia.com/services/performance-marketing",
  },
  "service-saas-technology": {
    title: "Custom SaaS & Business Automation Software Tamil Nadu | Rise With Media",
    description: "Custom CRM systems, WhatsApp Cloud API automation, and scalable cloud business software engineered in Krishnagiri, Tamil Nadu.",
    keywords: "custom software development Krishnagiri, WhatsApp automation Hosur, SaaS agency Tamil Nadu, business CRM solutions",
    canonical: "https://risewithmedia.com/services/saas-technology",
  },
};

export const getPageFromUrl = () => {
  if (typeof window === "undefined") return "home";

  // Check pathname first
  const pathname = window.location.pathname.replace(/^\/+|\/+$/g, "");
  if (!pathname || pathname === "home") return "home";
  if (["works", "clients", "contact", "softwares"].includes(pathname)) return pathname;
  if (pathname === "services/content-social" || pathname === "service-content-social") return "service-content-social";
  if (pathname === "services/websites-funnels" || pathname === "service-websites-funnels") return "service-websites-funnels";
  if (pathname === "services/performance-marketing" || pathname === "service-performance-marketing") return "service-performance-marketing";
  if (pathname === "services/saas-technology" || pathname === "service-saas-technology") return "service-saas-technology";

  // Check hash fallback for backward compatibility
  const hash = window.location.hash.replace("#", "").replace(/^\/+|\/+$/g, "");
  if (hash) {
    if (["home", "works", "clients", "contact", "softwares"].includes(hash) || servicesData[hash]) {
      return hash;
    }
  }

  return "home";
};

export const getUrlForPage = (page) => {
  if (!page || page === "home") return "/";
  if (["works", "clients", "contact", "softwares"].includes(page)) return `/${page}`;
  if (page.startsWith("service-")) {
    const slug = page.replace("service-", "");
    return `/services/${slug}`;
  }
  return `/${page}`;
};

export default function App() {
  const [page, setPage] = useState(getPageFromUrl);
  const [selectedContactService, setSelectedContactService] = useState("");

  const handleNavigate = (nextPage) => {
    setPage(nextPage);
    const targetUrl = getUrlForPage(nextPage);
    if (window.location.pathname !== targetUrl || window.location.hash) {
      window.history.pushState(null, "", targetUrl);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const targetUrl = getUrlForPage(page);
    // Canonicalize the URL if it differs or if it contains a legacy hash
    if (window.location.pathname !== targetUrl || window.location.hash) {
      window.history.replaceState(null, "", targetUrl);
    }

    // Dynamic metadata for search engines & browser tabs
    const meta = routeMeta[page] || routeMeta.home;
    if (typeof document !== "undefined") {
      document.title = meta.title;

      const descEl = document.querySelector('meta[name="description"]');
      if (descEl) descEl.setAttribute("content", meta.description);

      const kwEl = document.querySelector('meta[name="keywords"]');
      if (kwEl) kwEl.setAttribute("content", meta.keywords);

      const canonicalEl = document.querySelector('link[rel="canonical"]');
      if (canonicalEl) canonicalEl.setAttribute("href", meta.canonical);

      const ogTitleEl = document.querySelector('meta[property="og:title"]');
      if (ogTitleEl) ogTitleEl.setAttribute("content", meta.title);

      const ogDescEl = document.querySelector('meta[property="og:description"]');
      if (ogDescEl) ogDescEl.setAttribute("content", meta.description);

      const ogUrlEl = document.querySelector('meta[property="og:url"]');
      if (ogUrlEl) ogUrlEl.setAttribute("content", meta.canonical);
    }
  }, [page]);

  useEffect(() => {
    const handleLocationChange = () => {
      setPage(getPageFromUrl());
    };
    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  const renderPage = () => {
    if (servicesData[page]) {
      return (
        <ServiceDetail
          serviceId={page}
          setPage={setPage}
          setSelectedContactService={setSelectedContactService}
        />
      );
    }

    switch (page) {
      case "home":
        return <Home setPage={setPage} />;
      case "works":
        return <Works setPage={setPage} />;
      case "softwares":
        return <Softwares setPage={setPage} />;
      case "clients":
        return <Clients setPage={setPage} />;
      case "contact":
        return (
          <Contact
            initialService={selectedContactService}
            setPage={setPage}
          />
        );
      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0a0a0a] font-['Manrope'] selection:bg-[#12b7d4] selection:text-white">
      <Navbar page={page} setPage={setPage} />
      <div className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer setPage={setPage} />
      <WhatsAppButton />
    </div>
  );
}