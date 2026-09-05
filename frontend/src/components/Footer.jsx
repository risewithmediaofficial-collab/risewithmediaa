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

  return (
    <footer className="bg-white border-t border-[#eaeaea] pt-16 pb-10 text-[#000000]">
      <div className="rush-container">
        
        {/* Main 3-column Rush Republic Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-12 border-b border-[#eaeaea]">
          
          {/* Left: Navigation links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
            {links.map((link) => (
              <button
                key={link.key}
                onClick={() => setPage(link.key)}
                className="text-sm font-semibold text-[#555555] hover:text-[#12b7d4] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Center: Brand logo / identity */}
          <div className="flex justify-center">
            <button
              onClick={() => setPage("home")}
              className="flex items-center gap-3 cursor-pointer group"
              aria-label="Rise With Media Home"
            >
              <img
                src="/logo.png"
                alt="Rise With Media"
                className="h-10 w-10 object-contain group-hover:scale-105 transition-transform"
              />
              <span className="text-xl font-black tracking-tight uppercase font-['Varela_Round']">
                Rise With <span className="text-[#12b7d4]">Media</span>
              </span>
            </button>
          </div>

          {/* Right: Social icons */}
          <div className="flex items-center justify-center md:justify-end gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="w-10 h-10 rounded-full border border-[#eaeaea] bg-white text-[#000000] hover:bg-[#12b7d4] hover:border-[#12b7d4] hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom copyright and legal disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setPage("contact")}
              className="hover:text-[#12b7d4] transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => setPage("contact")}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
          <div>
            © {new Date().getFullYear()} By Rise With Media. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}