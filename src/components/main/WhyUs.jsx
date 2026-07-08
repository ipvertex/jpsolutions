import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { whyUsIntro, whyUs } from "../../data/content";
import PrimaryButton from "../ui/PrimaryButton";

const WhyUs = () => {
  // Premium, heavy spring physics for ultra-smooth reveals
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 55, damping: 22 } 
    },
  };

  return (
    <section id="why-us" className="relative bg-[#0B1120] py-16 md:py-24 z-20">
      
      {/* 
        FIX: Background elements are wrapped in their own overflow-hidden container.
        This ensures the sticky left column works perfectly without being clipped! 
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dark Theme Engineering Grid Background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(white 1.5px, transparent 1.5px)', backgroundSize: '48px 48px' }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:120px_120px]"></div>

        {/* Abstract Ambient Glows for Depth */}
        <div className="absolute top-0 left-0 -translate-y-1/3 -ml-32 w-[700px] h-[700px] bg-[var(--color-primary)]/20 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 right-0 translate-y-1/3 -mr-32 w-[700px] h-[700px] bg-accent/15 rounded-full blur-[140px]"></div>
      </div>

      <div className="insideContainer">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* LEFT COLUMN - Sticky Editorial Header */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col items-center md:items-start"
          >
            {/* Eyebrow - Dark Mode Variant */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md shadow-sm border border-white/10 mb-8 w-max">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-highlight)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-[0.15em] text-slate-300 uppercase">{whyUsIntro.eyebrow}</span>
            </motion.div>

            {/* Heading with Inverse Gradients */}
            <motion.h2 variants={itemVariants} className="text-[2.25rem] sm:text-4xl lg:text-[3rem] font-black tracking-tighter text-white leading-[1.1] mb-8 text-center md:text-left">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-400">Delhi NCR</span> <br />
              Businesses Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[var(--color-primary)]">JPS Solutions</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-400 leading-relaxed font-medium mb-10 pl-6 border-l-2 border-accent/50 relative">
              <div className="absolute -left-[2px] top-0 h-1/3 w-[2px] bg-accent shadow-[0_0_10px_var(--color-accent)]"></div>
              {whyUsIntro.body}
            </motion.p>

            {/* Dark Mode CTA Button */}
            <motion.div variants={itemVariants}>
              
              <PrimaryButton href="#contact" text="Start Your Project Today" className="p-8 shadow-sm shadow-foreground/30"/>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="mt-12 flex flex-wrap items-center gap-6 text-sm font-bold text-slate-500">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-full bg-white/5 border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                </div>
                100% Quality Guaranteed
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Glassmorphism Bento Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6"
          >
            {whyUs.map((item, index) => {
              const Icon = item.icon;
              // 7th item (index 6) spans full width for grid symmetry
              const isLastItem = index === 6;

              return (
                <motion.div 
                  key={index}
                  variants={containerVariants}
                  className={`group relative bg-white/[0.02] backdrop-blur-xl border border-white/5 border-t-white/10 rounded-[2rem] p-8 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden cursor-pointer ${isLastItem ? 'sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-8 sm:p-10 bg-gradient-to-br from-white/[0.04] to-transparent border-t-accent/30' : 'flex flex-col'}`}
                >
                  {/* Subtle Hover Gradient Reveal */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  
                  {/* Dynamic Glow Behind Icon */}
                  <div className={`absolute ${isLastItem ? 'left-10 top-1/2 -translate-y-1/2' : 'left-8 top-8'} bg-accent rounded-full blur-[40px] opacity-10 group-hover:opacity-30 transition-opacity duration-500 w-20 h-20 pointer-events-none`}></div>

                  {/* Icon Container */}
                  <div className={`relative shrink-0 ${isLastItem ? 'mb-0' : 'mb-8'}`}>
                    <div className="relative w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 shadow-xl shadow-black/20">
                      <Icon className={`w-7 h-7 drop-shadow-md transition-colors duration-500 ${isLastItem ? 'text-accent' : 'text-white group-hover:text-[var(--color-highlight)]'}`} strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className={isLastItem ? 'flex-1' : ''}>
                    <h3 className={`font-bold text-white mb-3 tracking-wide group-hover:text-accent transition-colors duration-300 ${isLastItem ? 'text-2xl' : 'text-xl'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-slate-400 leading-relaxed font-medium group-hover:text-slate-300 transition-colors duration-300 ${isLastItem ? 'text-base max-w-xl' : 'text-sm'}`}>
                      {item.text}
                    </p>
                  </div>

                  {/* Giant Decorative Icon (Only for the full-width item) */}
                  {isLastItem && (
                    <div className="absolute -right-8 -bottom-12 opacity-[0.02] group-hover:opacity-[0.05] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none hidden sm:block">
                      <Icon size={200} strokeWidth={1} />
                    </div>
                  )}

                  {/* Animated Accent Line at Bottom (For normal items) */}
                  {!isLastItem && (
                    <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent to-transparent w-0 group-hover:w-full transition-all duration-700 ease-in-out"></div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;