import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services, servicesIntro } from "../../assets/data";

// Curated high-resolution Unsplash assets specific to your MEP & Infrastructure niches
const serviceImages = [
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600", // Solar
  "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=600", // EV Charger
  "https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&q=80&w=600", // Electrical Works
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600", // Panels
  "https://images.unsplash.com/photo-1599740831289-4451baba00f7?auto=format&fit=crop&q=80&w=600", // Fire Fighting
  "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=600", // Plumbing
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600", // HVAC
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600", // Civil Works
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600", // Waterproofing
  "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600", // Compliance
];

const ServiceCard = memo(function ServiceCard({ icon: Icon, title, description, items, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ type: "spring", stiffness: 80, damping: 22, delay: (index % 3) * 0.08 }}
      className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-[0_4px_20px_-6px_rgba(15,23,42,0.02)] hover:shadow-[0_25px_50px_-15px_rgba(11,60,93,0.1)] hover:border-slate-300 transition-all duration-400 flex flex-col h-full"
    >
      {/* Media Window Container */}
      <div className="relative w-full aspect-[16/10] bg-slate-900 overflow-hidden shrink-0">
        <img
          src={serviceImages[index] || serviceImages[0]}
          alt={`${title} Engineering Execution`}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />

        {/* Floating Mid-Axis Icon Badge */}
        <div className="absolute -bottom-6 left-6 z-20 w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary shadow-md group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-300">
          <Icon size={18} strokeWidth={2.25} />
        </div>
      </div>

      {/* Structured Content Panel */}
      <div className="p-6 sm:p-7 pt-9 flex flex-col justify-between flex-1 space-y-5">
        <div className="space-y-3">
          <h3 className="font-sans font-black text-slate-900 text-base sm:text-lg tracking-tight leading-snug uppercase group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            {description}
          </p>

          {/* Sub-Service Scope Checkpoints */}
          <ul className="space-y-2 pt-2 border-t border-slate-100">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-slate-600 font-bold">
                <span className="mt-1.5 h-1.5 w-1.5 bg-amber-500 rounded-full shrink-0" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Trigger Link */}
        <div className="pt-2">
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-xs font-mono font-black uppercase tracking-wider text-primary group-hover:text-amber-500 transition-colors"
          >
            Request Details
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
});

export default function Services() {
  return (
    <section id="services" className="mainContainer bg-slate-50 relative py-24 lg:py-32 overflow-hidden select-none">
      {/* Engineering Blueprint Underlay Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,60,93,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,60,93,0.015)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="insideContainer z-20 space-y-12 lg:space-y-16">
        
        {/* Symmetric Spacious Section Headers */}
        <div className="flex flex-col items-start space-y-3 max-w-3xl border-b border-slate-200 pb-8">
          {/* Section Category Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-sm px-3.5 py-1.5 rounded-full mb-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            <span className="font-mono text-[9px] font-black uppercase tracking-[0.25em] text-slate-500">
              {servicesIntro.eyebrow}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight leading-none">
            {servicesIntro.heading}
          </h2>
          
          <p className="text-slate-500 text-sm sm:text-base font-medium max-w-2xl leading-relaxed text-balance pt-1">
            {servicesIntro.body}
          </p>
        </div>

        {/* 3-COLUMN STRUCTURED SERVICE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {services.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
}