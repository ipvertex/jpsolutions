import { motion } from "framer-motion";
import { ArrowLeft, Home, Network } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { company } from "../assets/data";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
    >
      {/* Decorative Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,60,93,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,60,93,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative z-10 max-w-lg">
        {/* --- BRANDED STATUS BADGE --- */}
        <motion.div 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary mb-8"
        >
          <Network size={14} />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{company.name} // System Status</span>
        </motion.div>

        <motion.h1 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="text-[120px] md:text-[180px] font-black text-primary/10 tracking-tighter select-none"
        >
          404
        </motion.h1>
        
        <h2 className="text-3xl md:text-4xl font-black text-secondary mt-[-40px] md:mt-[-60px] uppercase tracking-tight">
          Connection Lost
        </h2>
        
        <p className="text-secondary/60 mt-6 mb-10 leading-relaxed max-w-sm mx-auto font-medium">
          The requested path at <span className="text-primary font-bold">{company.name}</span> could not be established. 
          Let’s re-route you back to our primary interface.
        </p>

        {/* --- ACTIONS --- */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-secondary/10 hover:border-primary/50 transition-all text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary"
          >
            <ArrowLeft size={14} /> Go Back
          </button>
          
          <a 
            href="/" 
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white hover:opacity-90 transition-opacity text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/20"
          >
            <Home size={14} /> Return to Home
          </a>
        </div>
      </div>

      {/* --- FOOTER BRANDING --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-10 text-secondary/30 text-[10px] uppercase tracking-[0.3em] font-bold"
      >
        {company.name} // Digital Solutions
      </motion.div>
    </motion.div>
  );
}