import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "../../assets/images/logo.png";
import {navLinks, company} from "../../assets/data";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-line-dark shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 flex items-center justify-between h-[72px] lg:h-20">
        <a href="#home" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={logo} alt="JPS Solutions" className="h-10 w-auto" />
        </a>

        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[12px] uppercase tracking-[0.18em] text-bone/70 hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.15em] text-bone/70 hover:text-gold transition-colors"
          >
            <Phone size={14} />
            +91 {company.phone}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-sm bg-gold px-5 py-2.5 font-display font-bold text-[13px] uppercase tracking-[0.1em] text-ink hover:bg-gold-light transition-colors"
          >
            Get a Quote
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-bone p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-ink border-t border-line-dark overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-display text-2xl font-semibold text-bone py-3 border-b border-line-dark/60 flex items-center justify-between group"
                >
                  {link.label}
                  <span className="font-mono text-xs text-gold opacity-60 group-hover:opacity-100">
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-5 inline-flex items-center justify-center rounded-sm bg-gold px-5 py-3.5 font-display font-bold text-sm uppercase tracking-[0.1em] text-ink"
              >
                Get a Quote
              </a>
              <a
                href={company.phoneHref}
                className="mt-4 flex items-center justify-center gap-2 font-mono text-sm text-bone/70"
              >
                <Phone size={14} /> +91 {company.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
