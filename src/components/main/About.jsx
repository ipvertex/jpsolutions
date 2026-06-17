import { motion } from "framer-motion";
import { HardHat, ShieldCheck, Award, Clock, Target, Eye } from "lucide-react";

const About = () => {
  // Stagger animations for a high-end corporate presentation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 18 }
    }
  };

  // Strategic corporate core highlights
  const values = [
    {
      icon: <ShieldCheck className="text-[var(--color-primary)]" size={24} />,
      title: "High Quality & Safety Standards",
      desc: "Absolute compliance with statutory engineering norms to protect your building asset and its occupants."
    },
    {
      icon: <Clock className="text-[var(--color-gold)]" size={24} />,
      title: "Timely Project Execution",
      desc: "Delivering turnkey setups efficiently within agreed timelines to avoid commercial operations delay."
    },
    {
      icon: <Award className="text-[var(--color-primary)]" size={24} />,
      title: "Strong After-Sales Support",
      desc: "Continuous preventive maintenance and AMC solutions long after the initial handover."
    }
  ];

  return (
    <section 
      id="about" 
      className="relative min-h-screen bg-[var(--color-surface)] py-24 lg:py-32 px-6 sm:px-8 lg:px-12 flex items-center justify-center overflow-hidden"
    >
      {/* Light blueprint grid accent for classic construction layout context */}
      <div className="absolute inset-0 bg-blueprint-light pointer-events-none opacity-30" />

      <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-12 gap-16 items-start relative z-10">
        
        {/* =========================================================
            LEFT PANEL: EXPERTISE, STATS, AND VISION/MISSION CARDS
            ========================================================= */}
        <motion.div 
          className="lg:col-span-5 space-y-6 order-2 lg:order-1 w-full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Main Statement Box with Classic Industrial Frame Accent */}
          <div className="corner-frame bg-white border border-[var(--color-line)] p-8 rounded-2xl shadow-card space-y-6">
            <h4 className="font-['Archivo'] text-lg font-bold text-[var(--color-navy)] uppercase tracking-wider border-b border-slate-100 pb-3">
              Corporate Overview
            </h4>
            <p className="text-sm text-[var(--color-charcoal)] leading-relaxed font-medium">
              We provide integrated infrastructure systems across commercial malls, high-rise buildings, and industrial complexes. Our team is strictly committed to engineering solutions with structural reliability.
            </p>
            
            {/* Slogan callout block */}
            <div className="bg-[var(--color-surface-alt)] border-l-4 border-[var(--color-gold)] p-4 rounded-r-lg">
              <span className="font-['Archivo'] font-bold text-xs uppercase tracking-widest text-[var(--color-navy)] block">
                Corporate Promise
              </span>
              <span className="text-sm italic font-semibold text-[var(--color-primary)] mt-1 block">
                "Quality Work, Reliable Service"
              </span>
            </div>
          </div>

          {/* Simple, Professional Stat Callout */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-[var(--color-line)] p-6 rounded-xl shadow-sm text-center">
              <span className="block font-['Archivo'] text-3xl font-black text-[var(--color-navy)] font-feature-tnum">
                100%
              </span>
              <span className="block text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider mt-1">
                Compliance Verified
              </span>
            </div>
            <div className="bg-white border border-[var(--color-line)] p-6 rounded-xl shadow-sm text-center">
              <span className="block font-['Archivo'] text-3xl font-black text-[var(--color-primary)] font-feature-tnum">
                End-to-End
              </span>
              <span className="block text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider mt-1">
                Turnkey Execution
              </span>
            </div>
          </div>

          {/* Vision & Mission Cards Grid Block */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Our Mission Card */}
            <div className="bg-white border border-[var(--color-line)] p-5 rounded-xl shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-[var(--color-primary)]">
                <Target size={18} />
                <h5 className="font-['Archivo'] text-sm font-bold text-[var(--color-navy)] uppercase tracking-wider">
                  Our Mission
                </h5>
              </div>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                To deliver high-quality, reliable, and sustainable infrastructure solutions that exceed client expectations through innovation and excellence.
              </p>
            </div>

            {/* Our Vision Card */}
            <div className="bg-white border border-[var(--color-line)] p-5 rounded-xl shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-[var(--color-gold)]">
                <Eye size={18} />
                <h5 className="font-['Archivo'] text-sm font-bold text-[var(--color-navy)] uppercase tracking-wider">
                  Our Vision
                </h5>
              </div>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                To be a leading infrastructure solutions provider recognized for our integrity, quality, and commitment to building a better tomorrow.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            RIGHT PANEL: HIGH-ENGAGEMENT PROFILE TEXT CONTENT
            ========================================================= */}
        <motion.div 
          className="lg:col-span-7 space-y-8 order-1 lg:order-2 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Label */}
          <motion.div variants={fadeUpVariants} className="inline-flex items-center gap-2 bg-[var(--color-surface-alt)] px-3 py-1.5 rounded text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] border border-[var(--color-line)]">
            <HardHat size={14} />
            Who We Are
          </motion.div>

          {/* Section Heading */}
          <motion.h2 
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-navy)] font-['Archivo'] leading-tight"
          >
            A Trusted Name in MEP & <br />
            <span className="text-[var(--color-primary)]">Infrastructure Services</span>
          </motion.h2>

          {/* Detailed Informative Copywriting Block */}
          <motion.div variants={fadeUpVariants} className="space-y-4 text-base text-[var(--color-charcoal)] leading-relaxed font-normal">
            <p>
              JPS Solutions is an established firm specializing in complete engineering and mechanical contracting fields. We provide comprehensive end-to-end solutions built on the pillars of safety, long-term efficiency, and predictable project control.
            </p>
            <p>
              With a veteran team of construction professionals and a deeply client-focused management structure, we engineer cost-effective plant, building, and utility networks engineered to safely support modern enterprise work.
            </p>
          </motion.div>

          {/* Key Value Matrices Lists */}
          <motion.div variants={fadeUpVariants} className="pt-4 grid sm:grid-cols-1 gap-4 text-left">
            {values.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-5 bg-white border border-[var(--color-line)] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-3 bg-[var(--color-surface-alt)] rounded-lg shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-['Archivo'] font-bold text-base text-[var(--color-navy)]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;