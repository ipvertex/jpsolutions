import { motion } from "framer-motion";
import { PhoneCall, Mail, ArrowUpRight, Send, ShieldCheck, MapPin } from "lucide-react";
import { contactIntro, company, serviceOptions } from "../../data/content";

const Contact = () => {
  // Ultra-smooth, elegant physics (less bounce, more glide)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 40, damping: 20 } 
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    // Locked to viewport height on desktop (lg:h-screen)
    <section id="contact" className="mainContainer bg-foreground/10">     
      
      <div className="insideContainer">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN - Editorial Information Hub */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Elite Eyebrow */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white backdrop-blur-md shadow-sm border border-slate-200/80 mb-6 w-max">
              <div className="relative flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-accent opacity-60"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase">
                {contactIntro.eyebrow}
              </span>
            </motion.div>

            {/* Massive Editorial Heading - Tight Leading */}
            <motion.h2 variants={itemVariants} className="text-4xl lg:text-[3.25rem] font-black tracking-tighter text-foreground leading-[1.05] mb-6">
              Let's build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">something</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-500">exceptional.</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-sm lg:text-base text-slate-500 leading-relaxed font-medium mb-8 max-w-sm">
              {contactIntro.body}
            </motion.p>

            {/* Compressed Contact Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 border-l-2 border-primary/10 pl-5">
              
              <a href={company.phoneHref} className="group block">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                  <PhoneCall className="w-3.5 h-3.5 text-accent" /> Direct Line
                </div>
                <div className="text-lg lg:text-xl font-black text-foreground group-hover:text-primary transition-colors duration-300">
                  {company.phoneDisplay}
                </div>
              </a>
              
              <a href={company.emailHref} className="group block">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" /> Email
                </div>
                <div className="text-sm lg:text-base font-bold text-foreground group-hover:text-accent transition-colors duration-300 flex items-center gap-1">
                  {company.email} <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </div>
              </a>

              <div className="sm:col-span-2 group block">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" /> Headquarters
                </div>
                <div className="text-sm font-medium text-slate-600 leading-relaxed max-w-xs group-hover:text-foreground transition-colors duration-300">
                  {company.address}
                </div>
              </div>
              
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Hyper-Polished Agency Form */}
          <motion.div 
            variants={{ hidden: { opacity: 0, scale: 0.97, x: 20 }, visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative bg-white rounded-[2rem] p-6 sm:p-10 shadow-[0_30px_80px_-20px_rgba(11,60,93,0.12)] border border-slate-100/80">
              
              {/* Form Status Header */}
              <div className="flex items-center justify-between gap-2 mb-4 pb-6 border-b border-highlight">
                <div>
                  <h3 className="text-xl lg:text-2xl font-black text-foreground tracking-tight">Project Inquiry</h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">We respond within 24 hours.</p>
                </div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-green-50 border border-green-100">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[9px] font-bold tracking-widest text-green-700 uppercase">Available</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-3">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                  {/* Name Input */}
                  <div className="space-y-1.5 group">
                    <label htmlFor="name" className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-primary transition-colors">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-slate-50/50 hover:bg-slate-50 border border-slate-200/60 rounded-xl px-4 py-3 text-sm font-medium text-foreground placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1.5 group">
                    <label htmlFor="phone" className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-primary transition-colors">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      className="w-full bg-slate-50/50 hover:bg-slate-50 border border-slate-200/60 rounded-xl px-4 py-3 text-sm font-medium text-foreground placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-1.5 group">
                  <label htmlFor="email" className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-primary transition-colors">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-slate-50/50 hover:bg-slate-50 border border-slate-200/60 rounded-xl px-4 py-3 text-sm font-medium text-foreground placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all duration-300"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Service Dropdown */}
                <div className="space-y-1.5 group">
                  <label htmlFor="service" className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-primary transition-colors">Area of Interest</label>
                  <div className="relative">
                    <select 
                      id="service" 
                      required
                      className="w-full bg-slate-50/50 hover:bg-slate-50 border border-slate-200/60 rounded-xl px-4 py-3 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" disabled selected>Select a primary service...</option>
                      {serviceOptions.map((service, idx) => (
                        <option key={idx} value={service}>{service}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary">
                      <svg width="10" height="6" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1.5L6 6L10.5 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message Textarea - Kept to 3 rows to save vertical space */}
                <div className="space-y-1.5 group">
                  <label htmlFor="message" className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1 group-focus-within:text-primary transition-colors">Project Details</label>
                  <textarea 
                    id="message" 
                    rows="3" 
                    required
                    className="w-full bg-slate-50/50 hover:bg-slate-50 border border-slate-200/60 rounded-xl px-4 py-3 text-sm font-medium text-foreground placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all duration-300 resize-none"
                    placeholder="Tell us about your scope, requirements, or timeline..."
                  ></textarea>
                </div>

                {/* Elite Submit Button */}
                <button 
                  type="submit" 
                  className="w-full group relative overflow-hidden rounded-xl bg-foreground text-white px-6 py-4 font-bold shadow-xl shadow-foreground/20 hover:shadow-foreground/40 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-2"
                >
                  <span className="relative z-10 text-sm tracking-wide">Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5 relative z-10 text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[marquee_2s_linear_infinite]"></div>
                </button>
                
                {/* Micro Trust Indicator */}
                <div className="flex justify-center items-center gap-1.5 mt-2 opacity-70">
                  <ShieldCheck className="w-3 h-3 text-green-600" />
                  <span className="text-[10px] font-semibold text-primary">100% secure and confidential.</span>
                </div>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;