import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { company } from "../../data/content";

const FloatingActions = () => {
  const [show, setShow] = useState(false);
  const { scrollYProgress } = useScroll();

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `${company.whatsappHref}?text=${encodeURIComponent("Hi JPS Solutions, I'd like to inquire about your services.")}`;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      
      {/* 1. WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.5 }}
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(37,211,102,0.5)] border-2 border-white/10 relative group"
      >
        <FaWhatsapp className="w-7 h-7 text-white" />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-[var(--color-foreground)] text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          Chat With Us
        </span>
      </motion.a>

      {/* 2. Scroll to Top Button (with Progress Ring) */}
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-14 h-14 rounded-full bg-[var(--color-foreground)] text-white shadow-2xl border border-white/10 flex items-center justify-center group"
          >
            {/* Progress Ring */}
            <svg className="absolute w-14 h-14 -rotate-90">
              <circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/10" />
              <motion.circle
                cx="28" cy="28" r="26" fill="none"
                stroke="var(--color-accent)"
                strokeWidth="3"
                strokeDasharray="163.36"
                style={{ pathLength }}
              />
            </svg>
            <ArrowUp className="w-6 h-6 relative z-10 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingActions;