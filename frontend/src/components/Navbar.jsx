import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", key: "home" },
  { label: "Case Studies", key: "works" },
  { label: "Clients", key: "clients" },
  { label: "Contact", key: "contact" },
];

export default function Navbar({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (key) => {
    setPage(key);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#eaeaea]">
      <div className="rush-container">
        <div className="flex h-20 sm:h-[88px] items-center justify-between">
          
          {/* Brand Logo */}
          <button
            onClick={() => handleNav("home")}
            className="flex items-center gap-3.5 text-left group cursor-pointer"
            aria-label="Go to home"
          >
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center overflow-hidden rounded-2xl bg-white border border-[#eaeaea] shadow-xs group-hover:border-[#12b7d4] transition-all duration-300 p-2 sm:p-2.5">
              <img
                src="/logo.png"
                alt="Rise With Media"
                className="h-full w-full object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="leading-tight">
              <span className="block text-xl sm:text-2xl font-black tracking-tight text-[#000000] uppercase font-['Manrope']">
                Rise With <span className="text-[#12b7d4]">Media</span>
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = page === link.key;
              return (
                <button
                  key={link.key}
                  onClick={() => handleNav(link.key)}
                  className={`text-sm transition-colors cursor-pointer relative py-2 ${
                    isActive ? "text-[#12b7d4] font-black" : "text-[#555555] hover:text-[#12b7d4] font-bold"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#12b7d4]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNav("contact")}
              className="btn-rush-black cursor-pointer text-xs uppercase tracking-wider px-7 py-3 hover:bg-[#12b7d4] hover:text-white transition-all shadow-xs"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex h-11 w-11 sm:h-12 sm:w-12 flex-col items-center justify-center gap-1.5 rounded-xl border border-[#eaeaea] bg-white text-[#000000] cursor-pointer hover:border-[#12b7d4] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="border-b border-[#eaeaea] bg-white px-6 py-6 md:hidden shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => handleNav(link.key)}
                  className={`text-left py-3 text-base font-bold uppercase tracking-wide border-b border-[#f5f5f5] transition-colors ${
                    page === link.key ? "text-[#12b7d4] pl-3 border-l-2 border-l-[#12b7d4] bg-[#e6f9fc]/50" : "text-[#555555] hover:text-[#12b7d4]"
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-4 flex flex-col gap-2.5">
                <button
                  onClick={() => handleNav("contact")}
                  className="btn-rush-black w-full text-center py-3.5 text-xs uppercase tracking-wider hover:bg-[#12b7d4]"
                >
                  Contact Us
                </button>
                <a
                  href="https://wa.me/919345254648"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-rush-cyan w-full text-center py-3.5 text-xs uppercase tracking-wider"
                >
                  WhatsApp Quick Chat
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}