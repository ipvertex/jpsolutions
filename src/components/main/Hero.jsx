import { motion } from "framer-motion";
import { Sun, Zap, Wrench, Pickaxe, ArrowRight, ShieldCheck } from "lucide-react";
import { hero } from "../../data/content"; 
import evstation from "../../assets/images/evstation.jpg";
import civilwork from "../../assets/images/civilwork.jpg";
import electricalwork from "../../assets/images/electricalwork.jpg";
import solarpanel from "../../assets/images/solarpanel.jpg";

const Hero = () => {
  // Premium, heavier spring physics for an "agency" feel
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 20 } },
  };

  const visualCards = [
    { title: "Solar Systems", icon: <Sun className="w-5 h-5" />, image: solarpanel },
    { title: "EV Stations", icon: <Zap className="w-5 h-5" />, image: evstation },
    { title: "Electrical Services", icon: <Wrench className="w-5 h-5" />, image: electricalwork },
    { title: "Civil Works", icon: <Pickaxe className="w-5 h-5" />, image: civilwork },
  ];

  return (
    <section id="home" className="mainContainer flex items-center">
      
      {/* Abstract Animated Background Glows */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] bg-[var(--color-accent)]/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-0 -ml-32 w-[400px] h-[400px] bg-[var(--color-highlight)]/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="insideContainer grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10">
        
        {/* TEXT CONTENT - Mobile: Bottom, Desktop: Left */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-2xl order-2 lg:order-1"
        >
          {/* Eyebrow Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-background/60 backdrop-blur-sm shadow-sm border border-slate-200/60 mb-8 w-max transition-all hover:bg-background/80">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-highlight)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-accent)]"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-secondary uppercase">{hero.eyebrow}</span>
          </motion.div>
          
          {/* Headline with Gradient Accents */}
          <motion.div variants={itemVariants}>
            <h1 className="text-[2.5rem] sm:text-5xl lg:text-[4rem] font-black tracking-tighter text-foreground leading-[1.05] mb-6">
              {hero.headlineLines[0]} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-blue-700 drop-shadow-sm">
                {hero.headlineLines[1]}
              </span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-amber-500 drop-shadow-sm">
                {hero.headlineLines[2]}
              </span>
            </h1>
          </motion.div>
          
          {/* Subheadline */}
          <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
            {hero.subhead}
          </motion.p>
          
          {/* Premium Interactive Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a href="#contact" className="w-full sm:w-auto relative group overflow-hidden rounded-xl bg-[var(--color-primary)] text-background px-8 py-4 font-semibold shadow-xl shadow-[var(--color-primary)]/20 transition-all duration-300 hover:shadow-[var(--color-primary)]/40 hover:-translate-y-1 flex items-center justify-center gap-2">
              <span className="relative z-10 flex items-center gap-2">
                {hero.ctaPrimary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-background/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </a>
            
            <a href="#services" className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-foreground border-2 border-slate-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] bg-transparent hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2 group">
              {hero.ctaSecondary}
            </a>
          </motion.div>

          {/* Quick Trust Indicators */}
          {/* <motion.div variants={itemVariants} className="mt-10 flex items-center gap-6 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[var(--color-highlight)]" /> Certified Experts
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[var(--color-highlight)]" /> 100% Compliance
            </div>
          </motion.div> */}
        </motion.div>

        {/* IMAGE GRID - Mobile: Top, Desktop: Right */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full aspect-square max-h-[500px] lg:max-h-[650px] mx-auto order-1 lg:order-2"
        >
          <div className="absolute inset-0 grid grid-cols-2 gap-3 sm:gap-4 lg:p-4">
            {visualCards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={itemVariants}
                whileHover={{ scale: 1.03, zIndex: 10 }}
                className="relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer border border-background/10"
              >
                {/* Background Image with Zoom */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 ease-out"
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>
                
                {/* Agency-style Dark Vignette/Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/30 to-transparent transition-opacity duration-500 group-hover:opacity-80"></div>
                
                {/* Inner Ring for depth */}
                <div className="absolute inset-0 ring-1 ring-inset ring-background/20 rounded-3xl"></div>

                {/* Card Content */}
                <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between z-10">
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-background/10 backdrop-blur-md border border-background/20 inline-flex w-fit text-background shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg lg:text-xl text-background tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {card.title}
                    </h3>
                    <div className="h-0.5 w-8 bg-[var(--color-accent)] mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Floating Premium Central Badge */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 60 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/75 backdrop-blur-md px-4 py-2 rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] flex items-center gap-4 animate-float-slow  z-20 w-max border border-background/50"
          >
            <div className="text-xl sm:text-2xl font-black text-accent drop-shadow-xs">
              24/7
            </div>
            <div className="w-px h-10 bg-highlight"></div>
            <div className="text-xs sm:text-sm font-bold leading-tight text-foreground">
              Emergency Support <br />
              <span className="text-secondary font-medium">& AMC Available</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;