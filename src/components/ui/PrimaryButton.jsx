import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const PrimaryButton = ({ href, text, size = "md", className }) => {
  const sizes = {
    sm: "px-4 h-8 text-[10px]",
    md: "px-6 h-10 text-xs",
    lg: "px-8 h-12 text-sm",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const arrowSizes = {
    sm: 10,
    md: 12,
    lg: 14,
  };

  return (
    <a
      href={href}
      // twMerge merges classes and handles tailwind conflicts automatically
      className={twMerge(
        "relative group inline-flex items-center gap-2 rounded-full font-bold uppercase tracking-[0.15em] transition-all duration-500 overflow-hidden",
        sizes[size],
        className // Your custom classes are applied last
      )}
    >
      <div className="absolute inset-0 rounded-full bg-linear-to-r from-accent to-highlight p-[1.5px] opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_6s_linear_infinite]"></div>
      <div className="absolute inset-[1.5px] rounded-full bg-white group-hover:bg-primary transition-colors duration-500"></div>

      <span className="relative z-10 text-primary group-hover:text-white transition-colors duration-500 flex items-center gap-2">
        {text}
        <span className={clsx(
          "rounded-full bg-primary group-hover:bg-white flex items-center justify-center transition-all duration-500",
          iconSizes[size]
        )}>
          <ArrowRight size={arrowSizes[size]} className="text-white group-hover:text-primary" />
        </span>
      </span>
    </a>
  );
};

export default PrimaryButton;