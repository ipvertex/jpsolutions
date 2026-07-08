import { useEffect, useState, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { navLinks, company } from "../../assets/data";
import PrimaryButton from "../ui/PrimaryButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  // NEW: Ref to ignore observer during manual smooth scroll
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // FIX: Ignore observer updates if we are currently manually scrolling
        if (isScrollingRef.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-80px 0px -70% 0px" },
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.href.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();

    // 1. Mark as manual scroll
    isScrollingRef.current = true;
    setActiveLink(href);
    setMobileOpen(false);

    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }

    // 2. Re-enable observer after animation finishes
    // 1000ms is usually enough for smooth scroll to finish
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  }, []);

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
        {/* Logo */}
        <a
          href="/"
          className="flex items-center relative z-50 gap-3 cursor-pointer"
        >
          <img
            src="/logo.png"
            alt={`${company.name} Logo`}
            className={`w-auto object-contain transition-all duration-500 ${
              scrolled ? "h-9 max-lg:h-10" : "h-10 sm:h-12 lg:h-14 max-lg:h-10"
            }`}
          />
        </a>

        {/* ── Desktop Nav ── */}
        <div className="hidden lg:flex items-center bg-primary/5 border border-primary/5 rounded-full p-1.5 relative">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative font-sans text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors duration-300 z-10 ${
                activeLink === link.href
                  ? "text-white"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {activeLink === link.href && (
                <motion.span
                  layoutId="desktopActiveTab"
                  className="absolute inset-0 bg-primary rounded-full -z-10 shadow-md shadow-primary/20"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              {link.label}
            </a>
          ))}
        </div>

        {/* ── Desktop CTAs ── */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={company.phoneHref}
            className="w-10 h-10 rounded-full bg-white border border-secondary/20 flex items-center justify-center shadow-sm hover:border-primary/40 text-primary transition-all duration-300"
          >
            <Phone size={14} />
          </a>
          
          <PrimaryButton href="#contact" text="Get Started" />
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="lg:hidden relative z-50 text-primary p-2 bg-slate-100 rounded-full border border-secondary/10 shadow-sm"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* ── Mobile Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-0 z-40 bg-white h-screen w-screen flex flex-col justify-between px-6 pt-28 pb-10 overflow-y-auto"
          >
            <div className="flex flex-col gap-1 relative z-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-2xl font-black py-4 border-b transition-colors ${
                    activeLink === link.href
                      ? "text-primary border-primary/20"
                      : "text-secondary border-secondary/10"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile CTA inside drawer */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-3"
            >
              <a
                href={company.phoneHref}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-primary text-white font-bold text-sm"
              >
                <Phone size={16} />
                Call Now
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl border border-primary/20 text-primary font-bold text-sm"
              >
                Get Started <ArrowRight size={14} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
