import { motion } from "framer-motion";

const stripItems = [
  "Solar System Solutions",
  "★",
  "EV Charger Solution",
  "★",
  "Electrical Works & Systems",
  "★",
  "Electrical Material Supply",
  "★",
  "Civil Works",
  "★",
  "Building Compliance Services",
  "★",
];

const Marquee = () => {
  return (
    <div className="relative w-full bg-foreground overflow-hidden py-6 border-y border-primary/20">
      {/* The Moving Track */}
      <motion.div 
        className="flex whitespace-nowrap items-center"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          duration: 20, // Adjust speed here
          ease: "linear",
        }}
        whileHover={{ animationPlayState: "paused" }} // Slows down or pauses on hover
      >
        {/* We duplicate the content to ensure the loop is seamless */}
        {[...Array(4)].map((_, outerIndex) => (
          <div key={outerIndex} className="flex items-center">
            {stripItems.map((item, index) => (
              <span
                key={index}
                className={`inline-block px-4 text-[0.5rem] md:text-[0.7rem] tracking-[0.4em] uppercase font-bold ${
                  item === "★" ? "text-highlight" : "text-background"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
      
      {/* Decorative linear Overlays for a "Fade" effect at the edges */}
      <div className="absolute inset-y-0 left-0 w-16 bg-linear-to-r from-secondary to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-linear-to-l from-secondary to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default Marquee;