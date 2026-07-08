import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { servicesIntro, services } from "../../data/content";
import PrimaryButton from "../ui/PrimaryButton";

const Services = () => {
  // Premium staggered animation physics
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 50, damping: 20 } 
    },
  };

  return (
    <section id="services" className="mainContainer">

      <div className="insideContainer">
        
        {/* SECTION HEADER - Editorial High-Impact */}
        <div className="text-center mb-12 flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-background backdrop-blur-md shadow-sm border border-slate-200 mb-8 transition-all hover:shadow-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-highlight opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-[0.15em] text-primary uppercase">{servicesIntro.eyebrow}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[2.5rem] sm:text-4xl lg:text-5xl font-black tracking-tighter text-foreground leading-[1.05] mb-6"
          >
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">Infrastructure</span> <br className="hidden sm:block" />
            & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-500">MEP Solutions</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed font-medium max-w-4xl"
          >
            {servicesIntro.body}
          </motion.p>
        </div>

        {/* ELITE IMAGE-DRIVEN SERVICES GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                className="group relative bg-background rounded-[2rem] flex flex-col shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden hover:shadow-[0_20px_50px_-15px_rgba(11,60,93,0.2)] transition-all duration-700 hover:-translate-y-2 cursor-pointer"
              >
                {/* Image Header with Parallax & Gradient Overlay */}
                {/* Note: Removed the icon from here because 'overflow-hidden' clips it */}
                <div className="relative h-60 w-full overflow-hidden shrink-0 bg-slate-900">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                  
                  {/* Deep Vignette overlay for premium depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="p-8 pt-10 flex flex-col flex-grow relative z-10 bg-background">
                  
                  {/* Floating Icon (MOVED HERE to avoid overflow clipping) */}
                  <div className="absolute -top-8 right-8 w-16 h-16 rounded-2xl bg-background backdrop-blur-xl border border-background/30 text-primary flex items-center justify-center shadow-xl group-hover:bg-highlight group-hover:border-highlight group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-50">
                    <Icon className="w-7 h-7 drop-shadow-md" strokeWidth={2} />
                  </div>
                  
                  <h3 className="text-[1.35rem] font-black text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed font-medium mb-8 flex-grow">
                    {service.description}
                  </p>

                  {/* Animated Divider */}
                  <div className="h-px w-full bg-slate-100 mb-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-highlight w-0 group-hover:w-full transition-all duration-700 ease-in-out"></div>
                  </div>

                  {/* Refined Minimalist Bullet Points */}
                  <ul className="space-y-3">
                    {service.items.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start text-[13px] font-semibold text-slate-600 group-hover:text-slate-900 transition-colors duration-300">
                        <div className="mt-[2px] mr-3 rounded-full bg-background text-primary p-0.5 group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Global CTA for Services */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center flex justify-center"
        >
          <PrimaryButton href="#contact" text="Discuss Your Project Requirements"  className="p-8 shadow-sm shadow-foreground/30"/>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;