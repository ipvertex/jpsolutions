import { memo, useRef } from "react";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { company, services } from "../../assets/data";

const Footer = () => {
  const year = 2026; // Hardcoded to track current production deployment year constraints
  
  // High-performance hover tracker for ambient blueprint glow
  const footerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <footer 
      ref={footerRef}
      onMouseMove={handleMouseMove}
      className="relative bg-slate-950 text-slate-300 border-t border-slate-800/80 overflow-hidden group/footer"
    >
      {/* 1. Structural Backdrop Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:3rem] opacity-40 pointer-events-none" />

      {/* 2. Cyber Scanning Beam Line Accent */}
      <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent top-0 animate-scanline pointer-events-none" />

      {/* 3. Ambient Interactive Torch Light Layer (Framer Motion Performance Gradient) */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover/footer:opacity-100 transition-opacity duration-700 z-0 hidden md:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(11, 60, 93, 0.15),
              transparent 80%
            )
          `
        }}
      />

      {/* 4. Constant Floating Energy Node Rings (Simulating Smart Electrical Systems) */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none animate-float-slow -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/[0.02] rounded-full blur-[80px] pointer-events-none animate-float-slower -z-10" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 pt-16 sm:pt-20 pb-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-10 md:gap-8 lg:gap-12">
          
          {/* --- COLUMN 1: JPS SOLUTIONS PROFILE & LOCAL SERVICE AREA --- */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <motion.img 
                src="/logo.png" 
                alt={`${company.name} — MEP & Infrastructure Contractor Logo`}
                className="h-10 w-auto object-contain brightness-0 invert"
                whileHover={{ rotate: [0, -1, 1, 0], scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
              <div className="border-l-2 border-white/10 pl-3">
                <span className="text-sm font-black text-white tracking-wider block uppercase leading-none">
                  {company.name}
                </span>
                <span className="text-[9px] text-amber-500 font-bold uppercase tracking-widest block mt-1 leading-none">
                  All in One Infra Solutions
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-sm text-balance">
              {company.shortPitch || "JPS Solutions is a trusted MEP and infrastructure contractor based in Hapur, serving Ghaziabad, Noida, Greater Noida and Delhi NCR."}
            </p>
            
            {/* Clear Lifecycle Steps for Regular Customers */}
            <div className="flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-amber-500 font-bold">
              <span className="hover:text-white transition-colors cursor-default">Engineering Design</span>
              <span className="text-white/10">//</span>
              <span className="hover:text-white transition-colors cursor-default">Installation</span>
              <span className="text-white/10">//</span>
              <span className="hover:text-white transition-colors cursor-default">Safety Compliance</span>
              <span className="text-white/10">//</span>
              <span className="hover:text-white transition-colors cursor-default">Maintenance</span>
            </div>
          </div>

          {/* --- COLUMN 2: COMPLETE SERVICES CORE INDEX --- */}
          <div className="lg:col-span-5">
            <h4 className="font-mono font-bold uppercase text-xs tracking-[0.2em] text-white mb-5 border-l-2 border-primary pl-3">
              Our Services
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
              {services.map((s, idx) => (
                <motion.li 
                  key={s.title}
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.03 }}
                >
                  <a 
                    href="#services" 
                    className="text-sm text-slate-400 hover:text-amber-500 hover:translate-x-1 transition-all duration-300 font-medium flex items-center gap-1.5 group/link"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-800 group-hover/link:bg-amber-500 transition-colors shrink-0" />
                    <span className="truncate">{s.title}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* --- COLUMN 3: EXACT LOCAL ADDRESS & COORDINATES (NAP) --- */}
          <div className="lg:col-span-3">
            <h4 className="font-mono font-bold uppercase text-xs tracking-[0.2em] text-white mb-5 border-l-2 border-primary pl-3">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li className="flex items-start gap-2.5 group/icon">
                <Phone size={15} className="text-primary mt-0.5 shrink-0 group-hover/icon:text-amber-500 group-hover/icon:scale-110 transition-all" aria-hidden="true" />
                <a href={company.phoneHref} className="hover:text-amber-500 transition-colors font-mono font-feature-tnum">
                  +91 {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 group/icon">
                <Mail size={15} className="text-primary mt-0.5 shrink-0 group-hover/icon:text-amber-500 group-hover/icon:scale-110 transition-all" aria-hidden="true" />
                <a href={`mailto:${company.email}`} className="hover:text-amber-500 transition-colors break-all font-mono">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-primary mt-0.5 shrink-0 animate-pulse" style={{ animationDuration: '3s' }} aria-hidden="true" />
                <span className="text-xs leading-relaxed">{company.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={15} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-xs leading-snug">{company.hours || "Mon–Sat: 9:00 AM – 7:00 PM"}</span>
              </li>
              
              {/* Visible Business Credentials & Verification */}
              <li className="flex items-start gap-2.5 border-t border-slate-900 pt-3 mt-1 relative overflow-hidden group/gst">
                <Shield size={15} className="text-amber-500 shrink-0 mt-0.5 relative z-10 group-hover/gst:rotate-12 transition-transform" aria-hidden="true" />
                <div className="text-xs font-mono tracking-wide relative z-10">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider leading-none mb-1">Tax Registration</span>
                  <span className="text-slate-300 font-feature-tnum block group-hover:text-white transition-colors">GSTIN: {company.gstin}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* --- LOWER FOOTER BAND: COPYRIGHT & ATTRIBUTION --- */}
        <div className="mt-16 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-500 text-center sm:text-left">
            <span>© {year} {company.name}. All rights reserved.</span>
          </div>
          
          {/* IPVERTEX Signature Attribution */}
          <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-500 flex items-center gap-1">
            <span>Crafted By</span>
            <motion.a 
              href="https://ipvertex.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-amber-500 font-bold transition-colors duration-200 relative block px-1"
              whileHover={{ scale: 1.05 }}
            >
              IPVERTEX
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-amber-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);