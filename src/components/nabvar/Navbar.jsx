import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import logo from "../../assets/images/logo.png";
import { navLinks, company } from "../../assets/data";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-blueprint backdrop-blur-xl border-b border-[var(--color-line-dark)] py-3 shadow-[0_20px_50px_-20px_rgba(0,74,173,0.3)]"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 flex items-center justify-between h-14 relative">
        {/* Brand Identity */}
        <a 
          href="#home" 
          className="flex items-center relative z-50 transition-transform duration-300 hover:scale-[1.02]" 
          onClick={() => setOpen(false)}
        >
          {/* Logo remains perfectly visible over the clean light background panel */}
          <img src={logo} alt="JPS Solutions" className="h-9 sm:h-11 w-auto object-contain" />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-['Archivo'] text-[14px] font-bold uppercase tracking-wider text-[var(--color-navy)] hover:text-[var(--color-primary)] transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop Call to Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 font-mono text-[13px] font-bold tracking-wide text-[var(--color-navy)] hover:text-[var(--color-primary)] transition-colors duration-300 font-feature-tnum"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--color-surface-alt)] flex items-center justify-center border border-[var(--color-line)] shadow-sm">
              <Phone size={13} className="text-[var(--color-primary)]" />
            </div>
            +91 {company.phone}
          </a>
          
          <a
            href="#contact"
            className="bg-[var(--color-navy)] hover:bg-[var(--color-primary)] text-white text-xs font-['Archivo'] font-bold uppercase tracking-[0.12em] px-6 py-3 rounded-lg flex items-center gap-2 group transition-all duration-300 shadow-md"
          >
            Get a Quote
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Custom Mobile Menu Button Trigger */}
        <button
          aria-label="Toggle menu"
          className="lg:hidden relative z-50 text-[var(--color-navy)] p-2 focus:outline-none transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className="text-[var(--color-primary)]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </button>
      </nav>

      {/* Premium Mobile Overlay Drawer (Light Construction Styling) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 150 }}
            className="lg:hidden fixed inset-0 z-40 bg-blueprint-light h-screen flex flex-col justify-between px-8 pt-32 pb-12 overflow-y-auto"
          >
            {/* Nav List with progressive staggering */}
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.06, type: "spring" }}
                  className="font-['Archivo'] text-2xl font-extrabold text-[var(--color-navy)] py-4 border-b border-slate-200 flex items-center justify-between group active:text-[var(--color-primary)]"
                >
                  <span className="tracking-tight">{link.label}</span>
                  <span className="font-mono text-xs text-[var(--color-primary)] font-bold tracking-normal opacity-50">
                    // 0{i + 1}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Bottom Panel Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.25 }}
              className="flex flex-col gap-4 mt-12"
            >
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="w-full text-center bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white px-5 py-4 rounded-lg font-['Archivo'] font-bold text-sm uppercase tracking-[0.12em] transition-colors duration-300 shadow-md"
              >
                Get a Quote
              </a>
              
              <a
                href={company.phoneHref}
                className="flex items-center justify-center gap-3 font-mono text-sm font-bold uppercase tracking-wider text-[var(--color-navy)] py-2 font-feature-tnum"
              >
                <Phone size={14} className="text-[var(--color-primary)]" />
                +91 {company.phone}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;