// 1. Change the import to this:
import ReactFastMarquee from "react-fast-marquee"; 

// 2. Destructure the component if necessary:
const Marquee = ReactFastMarquee.default || ReactFastMarquee;
import { brands } from "../../data/content";
import { motion } from "framer-motion";

const Brand = () => {
  return (
    <div className="py-20 bg-white overflow-hidden">
      <div className="insideContainer flex items-center justify-center ">
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
            <span className="text-xs sm:text-sm font-bold tracking-[0.15em] text-primary uppercase">TRUSTED BY AMBITIOUS BUSINESSES</span>
          </motion.div>
      </div>

      <div className="flex flex-col gap-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
        <Marquee 
          pauseOnHover={true} 
          speed={40} 
          gradient={false} 
          autoFill={true}
        >
          {brands.map((brand, i) => (
            <div key={`top-${i}`} className="mx-8 md:mx-12  transition-all duration-500 ease-in-out cursor-pointer">
              <img src={brand.logo} alt={brand.name} className="h-16 md:h-20 w-auto object-contain" />
            </div>
          ))}
        </Marquee>

        
      </div>
    </div>
  );
};

export default Brand;