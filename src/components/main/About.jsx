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
    <section id="about" className="mainContainer bg-foreground/10">
      

      <div className="insideContainer grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        
        {/* LEFT COLUMN - TEXT CONTENT */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-5 flex flex-col justify-center relative z-30"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm shadow-sm border border-slate-200/60 mb-8 w-max">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-highlight opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-secondary uppercase">{about.eyebrow}</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-[2.25rem] sm:text-4xl lg:text-[2.75rem] font-black tracking-tighter text-foreground leading-[1.1] mb-8">
            A Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">MEP & Infra</span> <br />
            Contractor in <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-500">Delhi NCR</span>
          </motion.h2>
          
          <motion.div variants={itemVariants} className="relative pl-6 border-l-2 border-accent/30 space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed font-medium mb-12">
            <p className="text-foreground font-semibold">{about.paragraphs[0]}</p>
            <p>{about.paragraphs[1]}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative group rounded-3xl bg-white p-8 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
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
          className="lg:col-span-7 relative w-full h-[600px] lg:h-[750px] flex items-center justify-center mt-10 lg:mt-0"
        >
          {/* Video Frame */}
          <motion.div 
            initial={{ rotate: -3 }}
            whileInView={{ rotate: -3 }}
            className="absolute right-0 top-10 w-[70%] h-[80%] rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:-rotate-6"
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
          
          {/* Overlapping Front Image */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 40, x: -20 }, visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } } }}
            className="absolute bottom-8 left-0 lg:-left-6 w-[50%] h-[50%] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] border-[6px] lg:border-[10px] border-white z-20 group cursor-pointer"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-110 ease-out"
              style={{ backgroundImage: `url(${AboutUS})` }} 
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent"></div>
            <div className="absolute bottom-5 left-5 lg:bottom-7 lg:left-7 right-5">
              <div className="text-white font-bold text-lg lg:text-xl leading-tight mb-1.5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">Precision Engineered</div>
              <div className="h-0.5 w-10 bg-accent mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>

          {/* Floating Badges */}
          <motion.div variants={itemVariants} className="absolute top-[35%] left-[5%] lg:left-[10%] -translate-y-1/2 bg-white/80 backdrop-blur-xl p-4 lg:p-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] flex items-center gap-4 z-30 border border-white">
            <div className="p-2.5 rounded-full bg-green-50 text-green-600">
              <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <div className="pr-2">
              <div className="text-xs lg:text-sm font-black text-foreground tracking-tight">GST Verified</div>
              <div className="text-[10px] lg:text-xs font-semibold text-slate-500">100% Compliant</div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="absolute -right-2 lg:-right-6 bottom-1/4 bg-foreground text-white p-4 lg:p-5 rounded-2xl shadow-xl flex flex-col items-center gap-2 z-30">
            <Building2 className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
            <div className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-center w-20 lg:w-24">End-to-End Solutions</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;