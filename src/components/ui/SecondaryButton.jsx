import { motion } from "framer-motion";

const SecondaryButton = ({href,name}) => {
  return (
    <motion.a
      // The button will "pulse" slightly when clicked
      whileTap={{ scale: 0.95 }}
      // Smooth hover transition
      whileHover={{ scale: 1.02 }}
      className="relative px-8 py-4 rounded-lg font-bold text-white text-lg overflow-hidden transition-colors duration-300"
      initial={{ backgroundColor: "#1f2937" }} // Neutral Dark Gray
      whileHover={{ backgroundColor: "#22c55e" }} // Vibrant Success Green
    >
      <span className="relative z-10">{name}</span>
      
      {/* Optional: Subtle Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity"
      />
    </motion.a>
  );
};

export default SecondaryButton;