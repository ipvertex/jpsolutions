import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp, MapPin, PhoneCall, Mail } from "lucide-react";
import { company, navLinks, footerCopy } from "../../data/content";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Luxurious, slow reveal physics
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <footer className="relative py-12 md:py-16 overflow-hidden z-20 bg-foreground">
      
      {/* Ultra-faint grid background for premium texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-linear(background 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-linear(to_right,#ffffff05_1px,transparent_1px),linear-linear(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:160px_160px] pointer-events-none"></div>
      
      {/* Dramatic Ambient Glows */}
      <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none"></div>
      {/* Decorative Background Text */}
      <motion.div 
      initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} className="absolute left-[6%] md:left-[14%] bottom-34 md:bottom-10 text-[3rem] md:text-[10rem] font-black text-background/10 select-none pointer-events-none tracking-tighter">
        JPS SOLUTIONS
      </motion.div>
      <div className="insideContainer">  

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 mb-12 lg:mb-40"
        >
          
          {/* COLUMN 1: Brand & Description (5 Columns) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 pr-0 lg:pr-12">
            
            {/* Elegant Brand Logo Area */}
            <a href="#home" className="inline-block group mb-8">
              <h2 className="text-3xl lg:text-4xl font-black text-background tracking-tighter flex items-center gap-1.5">
                JPS
                <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-highlight">
                  Solutions
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-accent mb-1 group-hover:scale-150 transition-transform duration-500"></span>
              </h2>
            </a>

            <p className="text-base lg:text-lg text-background font-medium leading-relaxed max-w-md mb-8">
              {footerCopy.description}
            </p>

            {/* Premium Frosted Pill Tags */}
            <div className="flex flex-wrap gap-3">
              {footerCopy.tags.map((tag, idx) => (
                <span key={idx} className="px-4 py-1.5 rounded-full border border-background/10 text-[11px] font-bold tracking-[0.15em] uppercase text-background bg-background/5 backdrop-blur-md shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* COLUMN 2: Quick Links (3 Columns) */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-background uppercase mb-8 flex items-center gap-4">
              Navigation
              <div className="h-px flex-1 bg-highlight"></div>
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="group inline-flex items-center text-background/70 font-medium hover:text-background transition-colors duration-300">
                    <span className="transform transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-x-2">
                      {link.label}
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-4 translate-y-2 group-hover:opacity-100 group-hover:translate-x-2 group-hover:translate-y-0 transition-all duration-500 ease-[0.16,1,0.3,1] text-accent" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 3: Contact Headquarters (4 Columns) */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-background uppercase mb-8 flex items-center gap-4">
              Headquarters
              <div className="h-px flex-1 bg-highlight"></div>
            </h4>
            
            <div className="space-y-6 lg:space-y-8">
              <a href={company.phoneHref} className="group flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-background/5 border border-background/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <PhoneCall className="w-4 h-4 text-slate-400 group-hover:text-background transition-colors duration-500" />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-[0.15em] text-slate-500 uppercase mb-1">Direct Line</div>
                  <div className="text-base lg:text-lg font-bold text-slate-200 group-hover:text-accent transition-colors duration-300">
                    {company.phoneDisplay}
                  </div>
                </div>
              </a>

              <a href={company.emailHref} className="group flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-background/5 border border-background/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                  <Mail className="w-4 h-4 text-slate-400 group-hover:text-background transition-colors duration-500" />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-[0.15em] text-slate-500 uppercase mb-1">Email</div>
                  <div className="text-base lg:text-lg font-bold text-slate-200 group-hover:text-accent transition-colors duration-300">
                    {company.email}
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-background/5 border border-background/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-[0.15em] text-slate-500 uppercase mb-1">Location</div>
                  <div className="text-sm font-medium text-slate-400 leading-relaxed max-w-[200px]">
                    {company.address}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>

        

        {/* BOTTOM UTILITY BAR */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 ">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-[11px] font-bold tracking-wider text-slate-500 uppercase">
            <span>&copy; {new Date().getFullYear()} {company.legalName}.</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-700"></span>
            <span>All rights reserved.</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-700"></span>
            <span className="text-slate-400">GSTIN: {company.gstin}</span>
          </div>

          <div className="text-[0.7rem] uppercase tracking-[0.3em] text-background">
              Crafted By  <a href="https://ipvertex.in/" target="_blank" rel="noopener noreferrer"  className="text-accent hover:underline transition-all">
                IP VERTEX
              </a>
          </div>

          

        </div>

      </div>
    </footer>
  );
};

export default Footer;