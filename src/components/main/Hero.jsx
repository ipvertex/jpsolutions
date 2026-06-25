import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight, ShieldCheck, HardHat } from "lucide-react";

export default function Hero() {
  const heroRef = useRef(null);
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);

  const handleInteraction = (e) => {
    if (!heroRef.current) return;
    const { left, top } = heroRef.current.getBoundingClientRect();
    spotlightX.set(e.clientX - left);
    spotlightY.set(e.clientY - top);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 24 },
    },
  };

  const marqueeKeywords = [
    "Electrical Contractor Ghaziabad",
    "MEP Services Delhi NCR",
    "Industrial HVAC Engineering",
    "Fire Safety Compliance",
    "Rooftop Solar Installation",
    "EV Charger Infrastructure"
  ];

  return (
    <section
      ref={heroRef}
      onMouseMove={handleInteraction}
      id="home"
      className="mainContainer flex flex-col justify-between bg-slate-50 relative lg:h-screen lg:min-h-0 lg:pt-24 lg:pb-0 pb-12 select-none"
    >
      {/* Structural Tech Grid Layer overlaying the clean background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,60,93,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,60,93,0.015)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-10" />

      {/* CENTERPIECE: ARCHITECTURAL CONTENT GRID */}
      <div className="insideContainer my-auto z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT CONTENT COLUMN: CRISP, RE-SCALED TYPOGRAPHY */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 lg:space-y-8"
          >
            {/* Elegant Operational State Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 bg-white border border-slate-200 shadow-sm px-3.5 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                A Govt. Approved Electrical Contractor
              </span>
            </motion.div>

            {/* Down-scaled Title Hierarchy to Fit Screen Heights */}
            <div className="space-y-4">
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] uppercase"
              >
                MEP & Infrastructure <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">
                  Contractor
                </span> <br />
                <span className="text-slate-800 text-2xl sm:text-3xl lg:text-4xl font-extrabold normal-case tracking-normal block mt-1">
                  in Ghaziabad & Delhi NCR.
                </span>
              </motion.h1>

              {/* Relaxed line-height description block */}
              <motion.p
                variants={itemVariants}
                className="text-slate-500 text-sm sm:text-base font-medium max-w-lg leading-relaxed text-balance pt-1"
              >
                We deliver end-to-end electrical engineering, industrial HVAC, fire safety systems, and renewable solar grids. From certified engineering layout designs to complete statutory regulatory approvals and ongoing maintenance, we ensure seamless execution under a single point of accountability.
              </motion.p>
            </div>

            {/* PROFESSIONAL ARCHITECTURAL BUTTON SET */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center px-7 h-12 bg-slate-900 text-white font-mono text-[11px] font-bold uppercase tracking-[0.15em] rounded-xl transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(15,23,42,0.2)] hover:bg-primary group overflow-hidden border border-slate-800"
              >
                {/* Tech Outlines that activate on hover */}
                <span className="absolute top-0 left-0 w-2 h-[2px] bg-amber-500 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full" />
                <span className="absolute bottom-0 right-0 w-2 h-[2px] bg-amber-500 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full" />
                
                <span className="relative z-10 flex items-center gap-2.5">
                  Request Site Assessment
                  <ArrowUpRight size={14} className="text-amber-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-7 h-12 text-slate-800 font-mono text-[11px] font-bold uppercase tracking-[0.15em] rounded-xl border-2 border-slate-200 bg-white/40 backdrop-blur-sm transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
              >
                Our Capabilities
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: PREMIUM MEP PRODUCTION INFRASTRUCTURE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.25 }}
            className="lg:col-span-5 relative w-full flex justify-center"
          >
            {/* Outer Architectural Framing Ticks */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-primary/20 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-right-2 border-primary/20 pointer-events-none" />

            {/* Industrial Image Frame */}
            <div className="relative w-full aspect-[4/5] max-w-[380px] lg:max-w-[360px] rounded-2xl overflow-hidden bg-slate-900 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.1)] group/img border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&q=80&w=800"
                alt="Turnkey MEP Engineering Industrial Site Execution"
                className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-103"
              />

              {/* Floating Blueprint Glass Decal Card */}
              <div className="absolute bottom-5 inset-x-5 bg-slate-950/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl flex items-center justify-between shadow-2xl">
                <div className="space-y-0.5">
                  <span className="font-mono text-[8px] font-black text-amber-500 uppercase tracking-widest block">
                    // Site Engineering
                  </span>
                  <span className="text-white font-bold text-xs tracking-tight block">
                    Turnkey Plant Distribution
                  </span>
                </div>
                <div className="flex gap-2 text-white/40">
                  <HardHat size={14} className="text-white animate-pulse" />
                  <ShieldCheck size={14} className="text-white" />
                </div>
              </div>

              {/* Ambient Interaction Mirror Track */}
              <motion.div
                className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"
                style={{
                  background: useMotionTemplate`
                    radial-gradient(
                      200px circle at ${spotlightX}px ${spotlightY}px,
                      rgba(255, 255, 255, 0.12),
                      transparent 80%
                    )
                  `,
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* BASE STRIP: HIGH-PERFORMANCE HORIZONTAL TECH-TICKER MARQUEE */}
      <div className="w-full border-y border-slate-200/80 bg-white py-3.5 pointer-events-none overflow-hidden z-20 shadow-[0_-1px_3px_rgba(0,0,0,0.01)] shrink-0">
        <div className="flex w-[200%] animate-marquee whitespace-nowrap">
          {[...marqueeKeywords, ...marqueeKeywords].map((term, index) => (
            <div key={index} className="flex items-center font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400 mx-8">
              <span>{term}</span>
              <span className="text-amber-500 font-black ml-16 font-feature-tnum">//</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}