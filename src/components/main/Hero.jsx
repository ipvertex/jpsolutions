import { motion } from "framer-motion";
import { ArrowRight, HardHat, Building2, CheckCircle } from "lucide-react";

const Hero = () => {
  // Staggered classic typography animation variants
  const slideUpContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const slideUpItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 18 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[var(--color-surface)] flex items-center justify-center pt-24 pb-16 lg:pt-28 lg:pb-20 px-6 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Subtle traditional light blueprint line mesh pattern for background texture */}
      <div className="absolute inset-0 bg-blueprint-light pointer-events-none opacity-40" />

      {/* =========================================================
          MAIN BUSINESS PRESENTATION GRID
          ========================================================= */}
      <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Classic Business Introduction & Details */}
        <motion.div
          className="lg:col-span-6 space-y-8 text-center lg:text-left"
          variants={slideUpContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Authentic Construction Business Tag */}
          <motion.div 
            variants={slideUpItem}
            className="inline-flex items-center gap-2 border-l-4 border-[var(--color-primary)] bg-[var(--color-surface-alt)] px-4 py-2 shadow-sm"
          >
            <HardHat size={16} className="text-[var(--color-gold)]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-navy)] font-['Archivo']">
              Complete MEP & Infrastructure Services
            </span>
          </motion.div>

          {/* Master Structural Headline */}
          <motion.h1
            variants={slideUpItem}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-navy)] leading-[1.1] font-['Archivo']"
          >
            All-In-One <br />
            <span className="text-[var(--color-primary)]">Infra Solutions</span> <br />
            Under One Roof
          </motion.h1>

          {/* Clean Commercial Description */}
          <motion.p
            variants={slideUpItem}
            className="text-base sm:text-lg text-[var(--color-charcoal)] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
          >
            JPS Solutions is your trusted corporate partner for high-quality engineering and physical contracting work. We design, install, and systematically maintain modern mechanical, electrical, and plumbing infrastructure for commercial complexes and offices.
          </motion.p>

          {/* Core Construction Segments (Traditional Checked List Structure) */}
          <motion.div
            variants={slideUpItem}
            className="space-y-3 max-w-md mx-auto lg:mx-0 text-left border-t border-slate-200 pt-6"
          >
            <div className="flex items-center gap-3">
              <CheckCircle size={18} className="text-[var(--color-primary)] shrink-0" />
              <p className="text-sm font-semibold text-[var(--color-navy)]">
                <span className="font-bold text-[var(--color-primary)]">Electrical Systems:</span> HT/LT distribution networks & power infrastructures.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle size={18} className="text-[var(--color-primary)] shrink-0" />
              <p className="text-sm font-semibold text-[var(--color-navy)]">
                <span className="font-bold text-[var(--color-primary)]">Mechanical & HVAC:</span> Heavy ventilation and industrial pipeline systems.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle size={18} className="text-[var(--color-primary)] shrink-0" />
              <p className="text-sm font-semibold text-[var(--color-navy)]">
                <span className="font-bold text-[var(--color-primary)]">Plumbing & Civil:</span> Professional commercial drainage and site maintenance.
              </p>
            </div>
          </motion.div>

          {/* Standard Corporate Action Buttons */}
          <motion.div
            variants={slideUpItem}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto text-center bg-[var(--color-navy)] hover:bg-[var(--color-primary)] text-white px-8 py-4 rounded-lg font-['Archivo'] font-bold text-sm uppercase tracking-[0.12em] transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
            >
              Get Corporate Quote
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto text-center border-2 border-[var(--color-navy)] text-[var(--color-navy)] hover:bg-[var(--color-surface-alt)] px-8 py-3.5 rounded-lg font-['Archivo'] font-bold text-sm uppercase tracking-[0.12em] transition-all duration-300"
            >
              Our Project Scope
            </a>
          </motion.div>
        </motion.div>

        {/* =========================================================
            RIGHT COLUMN: PREMIUM BACKGROUND VIDEO / IMAGE THEATER
            ========================================================= */}
        <motion.div
          className="lg:col-span-6 w-full h-[400px] sm:h-[500px] lg:h-[600px] relative flex items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          {/* Framed Architecture Panel with Classic Industrial Corner Outlines */}
          <div className="w-full h-full bg-slate-200 overflow-hidden shadow-2xl relative border-2 border-slate-200/80 rounded-2xl group">
            
            {/* Cinematic background showcase image or video placeholder */}
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
              className="w-full h-full object-cover select-none pointer-events-none scale-105 transition-transform duration-1000 group-hover:scale-100"
            >
              {/* <source src="your-construction-clip.mp4" type="video/mp4" /> */}
            </video>

            {/* Industrial Overlay Mask Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/40 via-transparent to-transparent pointer-events-none" />

            {/* Floating Office Project Counter Overlay Tag */}
            <div className="absolute bottom-6 left-6 bg-white border-l-4 border-[var(--color-gold)] py-3 px-5 shadow-xl rounded-r-md flex items-center gap-3">
              <Building2 className="text-[var(--color-navy)]" size={24} />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">Target Arenas</p>
                <p className="text-sm font-black text-[var(--color-navy)] font-['Archivo']">Malls, High-Rises & Plants</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;