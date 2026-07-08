import { motion } from "framer-motion";
import { PhoneCall, MessageSquare, Mail, ArrowRight, Zap } from "lucide-react";
import { cta, company } from "../../data/content";
import PrimaryButton from "../ui/PrimaryButton";

const CTA = () => {
  // Premium spring physics for the pop-in effect
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 60, 
        damping: 20,
        staggerChildren: 0.15, 
        delayChildren: 0.1 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 20 } },
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden z-20 bg-background">
      <div className="insideContainer relative z-20">
        
        {/* The Premium Floating CTA Banner */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative rounded-[2.5rem] bg-primary overflow-hidden shadow-[0_30px_60px_-15px_rgba(11,60,93,0.4)] border border-background/10 p-8 sm:p-12 md:p-16 lg:p-20 text-center flex flex-col items-center"
        >
          {/* Abstract Background Elements inside the Banner */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(background 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
          
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent rounded-full blur-[120px] opacity-40 mix-blend-screen pointer-events-none"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-highlight rounded-full blur-[120px] opacity-30 mix-blend-screen pointer-events-none animate-pulse-soft"></div>

          {/* Dynamic Top Badge */}
          <motion.div variants={itemVariants} className="relative z-10 mb-8">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-background/10 backdrop-blur-md border border-background/20 shadow-xl">
              <Zap className="w-4 h-4 text-highlight" fill="currentColor" />
              <span className="text-sm font-bold tracking-widest text-background uppercase">{cta.eyebrow}</span>
            </div>
          </motion.div>

          {/* High-Impact SEO Heading */}
          <motion.h2 
            variants={itemVariants} 
            className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-background leading-[1.1] mb-6 max-w-3xl mx-auto"
          >
            Need an <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-300">MEP Contractor</span> in <br className="hidden md:block" />
            Ghaziabad or Delhi NCR?
          </motion.h2>

          {/* Persuasive Body Copy */}
          <motion.p 
            variants={itemVariants} 
            className="relative z-10 text-base sm:text-lg lg:text-xl text-blue-100/90 font-medium leading-relaxed max-w-2xl mx-auto mb-12"
          >
            {cta.body}
          </motion.p>

          {/* Highly Converting Action Buttons */}
          <motion.div 
            variants={itemVariants} 
            className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-2xl mx-auto"
          >
            {/* Primary Action: Phone Call (High Urgency) */}
            
            <PrimaryButton href={company.phoneHref} text={`Call ${company.phoneDisplay}`} className="p-8 shadow-sm shadow-background/30"/>
            {/* Secondary Action: WhatsApp (Low Friction) */}
            <a 
              href={company.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group overflow-hidden rounded-2xl bg-background/10 backdrop-blur-md border border-background/20 text-background px-8 py-4.5 font-bold hover:bg-background hover:text-[#25D366] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 shadow-lg"
            >
              <MessageSquare className="w-6 h-6" />
              <span className="tracking-wide">WhatsApp Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Tertiary Action: Email (For Formal RFQs) */}
          <motion.div variants={itemVariants} className="relative z-10 mt-8">
            <a 
              href={company.emailHref}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-blue-200 hover:text-background transition-colors duration-300 group"
            >
              <Mail className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" />
              Or email your requirements to {company.email}
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default CTA;