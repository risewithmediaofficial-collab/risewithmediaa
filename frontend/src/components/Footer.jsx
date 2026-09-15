export default function Footer({ setPage }) {
  const links = [
    { label: "Home", key: "home" },
    { label: "Case Studies", key: "works" },
    { label: "Softwares", key: "softwares" },
    { label: "Clients", key: "clients" },
    { label: "Contact", key: "contact" },
  ];

  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/risewithmedia/",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/risewithmedia/",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/919345254648",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.97.53 1.871.821 2.796.821 3.183 0 5.768-2.586 5.769-5.766.001-3.182-2.585-5.767-5.769-5.767zm7.545 5.767c-.002 4.163-3.387 7.548-7.55 7.548-1.282 0-2.476-.324-3.525-.889l-4.501 1.18 1.201-4.387c-.66-1.1-1.037-2.39-1.037-3.752 0-4.162 3.385-7.547 7.55-7.547 4.162 0 7.547 3.385 7.547 7.547z" />
        </svg>
      ),
    },
  ];

  const serviceLinks = [
    { label: "Content & Social", key: "service-content-social" },
    { label: "Websites & Funnels", key: "service-websites-funnels" },
    { label: "Performance Marketing", key: "service-performance-marketing" },
    { label: "SaaS & Technology", key: "service-saas-technology" },
  ];

  return (
    <footer className="bg-white border-t border-[#eaeaea] pt-10 sm:pt-14 pb-32 sm:pb-28 lg:pb-24 text-[#000000] relative z-10">
      <div className="rush-container">
        
        {/* Main 3-section Footer Layout:
            Desktop (lg): [Nav Links | Brand Identity | Social Icons]
            Mobile: [Brand Identity (top) -> Social Icons -> Nav Links] */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] gap-6 sm:gap-8 items-center pb-8 border-b border-[#eaeaea]">
          
          {/* Brand logo / identity - Top on mobile, Center on desktop */}
          <div className="order-1 lg:order-2 flex flex-col items-center justify-center text-center">
            <button
              onClick={() => setPage("home")}
              className="inline-flex items-center gap-3 cursor-pointer group mb-1.5"
              aria-label="Rise With Media Home"
            >
              <img
                src="/logo.png"
                alt="Rise With Media"
                className="h-10 w-10 sm:h-11 sm:w-11 object-contain group-hover:scale-105 transition-transform"
              />
              <span className="text-xl sm:text-2xl font-black tracking-tight font-['League_Spartan'] text-black leading-none">
                Rise With <span className="text-[#12b7d4]">Media</span>
              </span>
            </button>
            <span className="text-[11px] sm:text-xs font-semibold text-[#666666] font-['League_Spartan'] tracking-widest uppercase select-none">
              Plan · Create · Grow
            </span>
          </div>

          {/* Social icons - Second on mobile, Right on desktop */}
          <div className="order-2 lg:order-3 flex items-center justify-center lg:justify-end gap-3.5">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="w-10 h-10 rounded-full border border-[#eaeaea] bg-white text-[#000000] hover:bg-[#12b7d4] hover:border-[#12b7d4] hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-1 shadow-2xs"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Navigation links - Third on mobile, Left on desktop */}
          <nav
            className="order-3 lg:order-1 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2.5 pt-1 lg:pt-0"
            aria-label="Footer Primary Navigation"
          >
            {links.map((link) => (
              <button
                key={link.key}
                onClick={() => setPage(link.key)}
                className="text-xs sm:text-sm font-bold text-[#444444] hover:text-[#12b7d4] transition-colors cursor-pointer tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Services & Local Service Footprint */}
        <div className="py-7 border-b border-[#f0f0f0] flex flex-col items-center gap-5 text-center">
          
          {/* Services Section with Sleek Rounded Pills */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.18em] text-[#888888] shrink-0">
              SERVICES
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl">
              {serviceLinks.map((s) => (
                <button
                  key={s.key}
                  onClick={() => setPage(s.key)}
                  className="bg-[#f8fafc] hover:bg-[#12b7d4] text-[#444444] hover:text-white border border-[#eaeaea] hover:border-[#12b7d4] rounded-full py-1.5 px-3.5 text-xs font-semibold transition-all duration-200 cursor-pointer shadow-2xs"
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Local Authority Footprint Chip */}
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 text-xs text-[#555555] font-medium bg-[#fafafa] border border-[#eeeeee] rounded-full py-2 px-4.5 text-center max-w-full">
            <span className="text-sm">📍</span>
            <span className="font-semibold text-black">Krishnagiri, Tamil Nadu</span>
            <span className="text-[#999999] hidden sm:inline">•</span>
            <span className="text-[#666666]">Serving Hosur, Dharmapuri, Salem, Bengaluru &amp; Pan-India</span>
          </div>

        </div>

        {/* Bottom copyright and legal disclaimer (Centered on mobile, split on desktop) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777] pr-0 lg:pr-24">
          <div className="flex items-center justify-center gap-5 font-medium">
            <button
              onClick={() => setPage("contact")}
              className="hover:text-[#12b7d4] transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
            <span className="text-[#d1d5db]">·</span>
            <button
              onClick={() => setPage("contact")}
              className="hover:text-[#12b7d4] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
          <div className="text-center sm:text-right font-medium tracking-normal">
            © {new Date().getFullYear()} By Rise With Media. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}