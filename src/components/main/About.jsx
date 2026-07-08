import { motion } from "framer-motion";
import { Target, CheckCircle2, Building2, Quote, ArrowRight } from "lucide-react";
import { about } from "../../data/content";
import video from "../../assets/aboutus.mp4";
import AboutUS from "../../assets/images/aboutus.jpg";
const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 20 } },
  };

  return (
    <section id="about" className="mainContainer">
      

      <div className="insideContainer grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        
        {/* LEFT COLUMN - TEXT CONTENT */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-6 flex flex-col items-center md:items-start"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-background/60 backdrop-blur-sm shadow-sm border border-slate-200/60 mb-8 w-max">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-highlight opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-secondary uppercase">{about.eyebrow}</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-[2.25rem] sm:text-4xl lg:text-[2.75rem] font-black tracking-tighter text-foreground text-center md:text-left leading-[1.1] mb-8">
            Leading <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-700">Electrical Infrastructure & MEP</span> <br />
            Contractor in <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-amber-500">Delhi NCR</span>
          </motion.h2>
          
          <motion.div variants={itemVariants} className="relative pl-6 border-l-4 border-highlight space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed font-medium mb-12 ">
            <p className="text-foreground font-semibold text-justify">{about.paragraphs[0]}</p>
            
          </motion.div>

          <motion.div variants={itemVariants} className="relative group rounded-3xl bg-background p-8 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <div className="absolute -right-8 -top-8 text-[var(--color-background)] opacity-50 group-hover:scale-110 transition-transform duration-700">
              <Quote size={120} strokeWidth={1} fill="currentColor" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-foreground tracking-wide uppercase text-sm">Our Mission</h4>
              </div>
              <p className="text-[1.05rem] text-slate-700 font-medium italic leading-relaxed">
                "{about.mission}"
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN - VISUAL COMPOSITION */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="lg:col-span-6 relative w-full flex items-center justify-center "
        >
          {/* Video Frame */}
          <motion.div 
            initial={{ rotate: -3 }}
            whileInView={{ rotate: -3 }}
            className="relative w-[90%] md:w-[75%] md:h-[80%]  rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:-rotate-2"
          >
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Floating Badges */}
          <motion.div variants={itemVariants} className="absolute top-16 -left-2 md:top-25 md:left-0 -translate-y-1/2 bg-background/30 backdrop-blur-xl p-2 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] flex items-center gap-4 z-30 border border-foreground/40">
            <div className="p-2.5 rounded-full bg-background text-green-600">
              <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <div className="pr-2">
              <div className="text-xs lg:text-sm font-black text-foreground tracking-tight">GST Verified</div>
              <div className="text-[10px] lg:text-xs font-semibold text-primary">100% Compliant</div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="absolute -right-2 bottom-0 md:right-6 md:bottom-10 -translate-y-1/2 bg-foreground backdrop-blur-xl text-background p-4 rounded-2xl shadow-xl flex items-center gap-2 z-30">
            <Building2 className="w-6 h-6 lg:w-8 lg:h-8 text-accent" />
            <div className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-center w-20 lg:w-24">End-to-End Solutions</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;