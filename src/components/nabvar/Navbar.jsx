import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { navLinks, company } from "../../assets/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  // Hardware-accelerated passive scroll observer
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent screen jank
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2.5 max-lg:py-0" : "py-5 sm:py-7 max-lg:py-0"
      }`}
    >
      <nav
        className={`insideContainer flex items-center justify-between transition-all duration-500 ease-out max-lg:bg-white max-lg:h-16 max-lg:border-b max-lg:border-secondary/15 max-lg:shadow-sm ${
          scrolled
            ? "lg:h-14 lg:bg-white/90 lg:backdrop-blur-xl lg:border lg:border-secondary/10 lg:rounded-full lg:px-6 lg:shadow-[0_20px_40px_-15px_rgba(11,60,93,0.08)]"
            : "lg:h-20 lg:bg-transparent lg:border-transparent lg:px-0 lg:shadow-none"
        }`}
      >
        {/* --- BRAND IDENTITY LOGO NODE --- */}
        <motion.a
          href="#home"
          onClick={() => handleNavClick("#home")}
          className="flex items-center relative z-50 gap-3 cursor-pointer"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <img
            src="/logo.png"
            alt={`${company.name} Logo`}
            className={`w-auto object-contain transition-all duration-500 ease-in-out ${
              scrolled 
                ? "h-9 max-lg:h-10" 
                : "h-10 sm:h-12 lg:h-14 drop-shadow-[0_2px_8px_rgba(11,60,93,0.08)] max-lg:h-10"
            }`}
          />
          <div className="hidden sm:block border-l-2 border-primary/15 pl-3">
            <span className={`font-black text-primary tracking-wider block uppercase transition-all duration-500 ${
              scrolled ? "text-xs" : "text-sm lg:text-base"
            }`}>
              {company.name}
            </span>
            <span className={`text-accent font-bold uppercase tracking-widest block transition-all duration-500 ${
              scrolled ? "text-[8px] mt-0.5" : "text-[10px] mt-0.5 lg:mt-1"
            }`}>
              Infra Matrix
            </span>
          </div>
        </motion.a>

        {/* --- DESKTOP FLOATING CAPSULE NAVIGATION TRACK --- */}
        <div className="hidden lg:flex items-center bg-primary/5 border border-primary/5 rounded-full p-1.5 relative">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative font-sans text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors duration-300 z-10 ${
                  isActive ? "text-white" : "text-secondary hover:text-primary"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="desktopActiveTab"
                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-md shadow-primary/20"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </div>

        {/* --- DESKTOP CALL TO ACTIONS (CTAs) --- */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.a
            href={company.phoneHref}
            className="w-10 h-10 rounded-full bg-white border border-secondary/20 flex items-center justify-center shadow-sm hover:border-primary/40 text-primary transition-all duration-300 font-feature-tnum"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={`Call ${company.name}`}
          >
            <Phone size={14} />
          </motion.a>

          <a
            href="#contact"
            onClick={() => handleNavClick("#contact")}
            className="btn-primary text-xs uppercase tracking-[0.12em] px-6 h-10 rounded-full flex items-center gap-2 shadow-sm font-bold"
          >
            Get Started
            <ArrowRight size={13} />
          </a>
        </div>

        {/* --- MOBILE ACCESSIBLE HAMBURGER TRIGGER --- */}
        <motion.button
          aria-label="Toggle Navigation Terminal"
          className="lg:hidden relative z-50 text-primary p-2 focus:outline-none cursor-pointer bg-slate-100 hover:bg-slate-200/80 rounded-full border border-secondary/10 shadow-sm"
          onClick={() => setMobileOpen((v) => !v)}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-5 h-5 flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="closeIcon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={18} strokeWidth={2.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="menuIcon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={18} strokeWidth={2.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.button>
      </nav>

      {/* --- FULL SCREEN HEIGHT MOBILE OVERLAY BLOCK --- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="lg:hidden fixed inset-0 z-40 bg-white h-screen w-screen flex flex-col justify-between px-6 sm:px-10 pt-28 pb-10 overflow-y-auto"
          >
            {/* Grid Detail Backdrop Decorator */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,60,93,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,60,93,0.015)_1px,transparent_1px)] bg-[size:2.5rem] pointer-events-none" />

            {/* Navigation Track Stack with Active Node Tracking Lines */}
            <div className="flex flex-col gap-1 relative z-10 mt-4">
              {navLinks.map((link, i) => {
                const isMobileActive = activeLink === link.href;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ delay: i * 0.05, type: "spring" }}
                    className={`text-2xl font-black py-4 border-b border-slate-100 flex items-center justify-between group cursor-pointer relative ${
                      isMobileActive ? "text-primary" : "text-secondary hover:text-primary"
                    }`}
                  >
                    <span className="tracking-tight uppercase relative flex items-center">
                      {/* Active Indicator Node Slider */}
                      {isMobileActive && (
                        <motion.span 
                          layoutId="mobileActiveIndicator"
                          className="absolute -left-4 w-1.5 h-7 bg-accent rounded-full" 
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        />
                      )}
                      <span className={isMobileActive ? "pl-2 transition-all duration-300" : ""}>
                        {link.label}
                      </span>
                    </span>
                    <span className="font-mono text-xs text-accent font-bold opacity-40 group-active:opacity-100">
                      // 0{i + 1}
                    </span>
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Actions Platform Block */}
            <div className="flex flex-col gap-4 relative z-10 mt-8">
              <a
                href="#contact"
                onClick={() => handleNavClick("#contact")}
                className="w-full text-center btn-primary py-4 rounded-xl text-sm font-bold uppercase tracking-[0.12em] shadow-lg shadow-primary/10"
              >
                Request Consultation
              </a>

              <a
                href={company.phoneHref}
                className="flex items-center justify-center gap-2.5 font-mono text-sm font-black text-primary py-2 font-feature-tnum"
              >
                <Phone size={14} className="text-accent" />
                +91 {company.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}