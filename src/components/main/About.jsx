import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, ShieldCheck, Activity, Award, Briefcase, Crosshair } from "lucide-react";
import { company } from "../../assets/data";

export default function About() {
  const containerRef = useRef(null);
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);

  // High-frequency tracker for the premium technical reflection effect
  const handleInteraction = (e) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    spotlightX.set(e.clientX - left);
    spotlightY.set(e.clientY - top);
  };

  // Kinetic spring setup for incredibly smooth scrolling entrance and exit transitions
  const kineticSpring = {
    type: "spring",
    stiffness: 60,
    damping: 26,
    mass: 0.9
  };

  const layoutVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const slideLeftVariants = {
    hidden: { opacity: 0, x: -60, filter: "blur(8px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: kineticSpring
    }
  };

  const slideRightVariants = {
    hidden: { opacity: 0, x: 60, filter: "blur(8px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: kineticSpring
    }
  };

  const opacityVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const businessMetrics = [
    { label: "Engineering Excellence", value: "15+ Years", icon: Award },
    { label: "Turnkey Projects Executed", value: "250+", icon: Briefcase },
    { label: "Operational Safety Standard", value: "100% Compliant", icon: ShieldCheck },
    { label: "Client Satisfaction Rating", value: "4.9/5 Avg", icon: Activity }
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleInteraction}
      id="about"
      className="mainContainer bg-white relative flex flex-col justify-center overflow-hidden py-24 lg:py-32 select-none"
    >
      {/* 1. Structural Blueprint Matrix Background Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,60,93,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,60,93,0.012)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      
      {/* 2. Interactive Spotlight Background Aura */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 hidden md:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${spotlightX}px ${spotlightY}px,
              rgba(11, 60, 93, 0.03),
              transparent 80%
            )
          `
        }}
      />

      <motion.div 
        className="insideContainer z-20 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center"
        variants={layoutVariants}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* --- LEFT HAND: INDUSTRIAL VISUAL CONTAINER BLOCK --- */}
        <motion.div 
          className="lg:col-span-5 relative w-full flex justify-center"
          variants={slideLeftVariants}
        >
          {/* Framer Decorative Grid Corner Markers */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-slate-200 pointer-events-none" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-slate-200 pointer-events-none" />

          <div className="relative w-full aspect-[4/5] max-w-[400px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-[0_30px_60px_-20px_rgba(11,60,93,0.1)] group/img">
            {/* Real Industrial MEP Field Production Photo */}
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" 
              alt="JPS Solutions Infrastructure Operations" 
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover/img:scale-105"
            />
            
            {/* Integrated Dynamic Technical Overlay Overlay Block */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
            
            {/* Floating Live Data Badge inside Image */}
            <div className="absolute bottom-6 inset-x-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="font-mono text-[8px] font-bold text-amber-400 uppercase tracking-widest block">// Capability Node</span>
                <span className="text-white font-extrabold text-xs tracking-wider uppercase block">Safety First Execution</span>
              </div>
              <Crosshair size={14} className="text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
          </div>
        </motion.div>

        {/* --- RIGHT HAND: PREMIUM TYPOGRAPHY MATRIX & HOVER ROWS --- */}
        <motion.div 
          className="lg:col-span-7 space-y-10 text-left"
          variants={slideRightVariants}
        >
          {/* Premium Tech Category Tag */}
          <div className="inline-flex items-center gap-2.5 bg-slate-100/80 border border-slate-200 px-4 py-2 rounded-md">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            <span className="font-mono text-[9px] font-black uppercase tracking-[0.25em] text-slate-500">
              01 // Corporate Charter
            </span>
          </div>

          {/* Spacious, Breathing Copy Architecture */}
          <div className="space-y-5">
            <motion.h2 
              className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] uppercase"
              variants={opacityVariants}
            >
              Built for precision. <br />
              Trusted for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">Performance.</span>
            </motion.h2>
            
            <motion.p 
              className="text-slate-500 text-sm sm:text-base font-medium max-w-xl leading-relaxed text-balance"
              variants={opacityVariants}
            >
              {company.aboutPitch || "JPS Solutions delivers elite turnkey MEP and industrial engineering structures across Ghaziabad and Delhi NCR. We bridge the gap between engineering blueprints and field maintenance with absolute statutory compliance and rigorous technical oversight."}
            </motion.p>
          </div>

          {/* HIGH-END HOVER ROWS WITH CORNER GLOW EFFECT */}
          <div className="border-t border-slate-100 pt-6 space-y-2">
            {businessMetrics.map((metric, index) => {
              const MetricIcon = metric.icon;
              return (
                <motion.div 
                  key={metric.label}
                  className="group/metric relative flex items-center justify-between p-4 bg-slate-50/40 hover:bg-slate-50 rounded-xl border border-transparent hover:border-slate-200/60 transition-all duration-300 overflow-hidden cursor-default"
                  variants={opacityVariants}
                  custom={index}
                >
                  {/* Clean Technical Highlight Line that expands on row hover */}
                  <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary scale-y-0 group-hover/metric:scale-y-100 transition-transform duration-300 origin-center" />
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 transition-all duration-300 group-hover/metric:bg-primary group-hover/metric:text-white group-hover/metric:scale-105 shrink-0 shadow-sm">
                      <MetricIcon size={16} />
                    </div>
                    <span className="text-slate-800 font-bold text-sm sm:text-base tracking-tight transition-colors group-hover/metric:text-primary">
                      {metric.label}
                    </span>
                  </div>

                  <span className="font-mono font-black text-slate-900 text-sm sm:text-base font-feature-tnum relative z-10 pl-4 transition-colors group-hover/metric:text-primary">
                    {metric.value}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* PREMIUM OUTLINE CTA BUTTON */}
          <motion.div className="pt-2" variants={opacityVariants}>
            <a 
              href="#contact"
              className="relative inline-flex items-center justify-center px-8 h-12 bg-slate-900 text-white font-mono text-[11px] font-bold uppercase tracking-[0.15em] rounded-xl transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(15,23,42,0.2)] hover:bg-primary group overflow-hidden border border-slate-800"
            >
              <span className="absolute top-0 left-0 w-2 h-[2px] bg-amber-500 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full" />
              <span className="absolute bottom-0 right-0 w-2 h-[2px] bg-amber-500 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full" />
              
              <span className="relative z-10 flex items-center gap-2.5">
                Learn More About Us
                <ArrowRight size={13} className="text-amber-500 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </a>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}