import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { faqIntro, faqs, company } from "../../data/content";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Elite, ultra-slow easing for an expensive, buttery feel
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section id="faq" className="mainContainer bg-background">      
     
      <div className="insideContainer">       

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* LEFT COLUMN - Sticky Editorial Intro */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 lg:sticky lg:top-40 pr-0 lg:pr-8"
          >
            {/* Standardized Elite Eyebrow (Matched to Hero/About) */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm shadow-sm border border-slate-200/60 mb-8 w-max transition-all hover:bg-white/80">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-highlight)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-accent)]"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-[var(--color-secondary)] uppercase">
                {faqIntro.eyebrow}
              </span>
            </motion.div>

            {/* Massive Editorial Heading */}
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-[4rem] font-black tracking-tighter text-[var(--color-foreground)] leading-[1.05] mb-8">
              Radical <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">Clarity.</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-base lg:text-lg text-slate-500 leading-relaxed font-medium mb-12 max-w-sm">
              {faqIntro.body}
            </motion.p>

            {/* Premium WhatsApp Capsule Button */}
            <motion.div variants={itemVariants}>
              <a 
                href={company.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 p-2 pr-6 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-[#25D366]/20 hover:border-[#25D366]/30 transition-all duration-500 ease-[0.16,1,0.3,1] hover:-translate-y-1"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#25D366] transition-all duration-500">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] group-hover:text-[#25D366] transition-colors duration-500">
                    Live Chat
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[var(--color-foreground)]">
                    Still have questions?
                  </span>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - The Focus Accordion */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-7 relative"
          >
            {/* The Accordion Container */}
            <div className="border-t border-slate-200/80">
              {faqs.map((faq, index) => {
                const isActive = activeIndex === index;
                const formattedNumber = (index + 1).toString().padStart(2, '0');

                return (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="group relative border-b border-slate-200/80"
                  >
                    {/* Active State Vertical Indicator Line */}
                    <div className={`absolute top-0 -left-4 lg:-left-8 w-1 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)] transition-all duration-700 ease-[0.16,1,0.3,1] ${isActive ? 'h-full opacity-100' : 'h-0 opacity-0'}`}></div>

                    <button
                      onClick={() => setActiveIndex(isActive ? null : index)}
                      className="w-full flex items-start gap-5 sm:gap-8 py-8 lg:py-10 text-left focus:outline-none"
                    >
                      {/* Editorial Index Number */}
                      <span className={`text-xs font-bold tracking-[0.2em] mt-1.5 transition-colors duration-500 shrink-0 ${isActive ? 'text-[var(--color-accent)]' : 'text-slate-300 group-hover:text-[var(--color-secondary)]'}`}>
                        {formattedNumber}
                      </span>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-6">
                          
                          {/* Hover X-Axis Glide Effect */}
                          <h3 className={`text-lg sm:text-xl lg:text-[1.45rem] font-bold tracking-tight leading-[1.3] transition-all duration-700 ease-[0.16,1,0.3,1] pr-4 ${isActive ? 'text-[var(--color-primary)] translate-x-2' : 'text-[var(--color-foreground)] group-hover:translate-x-2'}`}>
                            {faq.question}
                          </h3>
                          
                          {/* Engineered Circular Toggle Icon */}
                          <div className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-700 ease-[0.16,1,0.3,1] ${isActive ? 'bg-[var(--color-primary)] border-[var(--color-primary)] rotate-45' : 'bg-transparent border-slate-200 group-hover:border-[var(--color-primary)] rotate-0'}`}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                              <path d="M12 5V19M5 12H19" className={`transition-colors duration-500 ${isActive ? 'text-white' : 'text-[var(--color-secondary)] group-hover:text-[var(--color-primary)]'}`} />
                            </svg>
                          </div>
                          
                        </div>
                        
                        {/* Smooth Expandable Answer Canvas */}
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
                              className="overflow-hidden"
                            >
                              <div className="pt-6 pb-2">
                                <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-2xl pl-0 sm:pl-2 border-l-2 border-slate-100">
                                  {faq.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;