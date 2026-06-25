import { memo } from "react";

/**
 * The small numbered label above every section heading, e.g. "01 — About Us".
 * `tone` controls the line/text color so it reads correctly on light or dark
 * section backgrounds.
 */
const TONE = {
  gold: "text-gold bg-gold",
  brand: "text-brand bg-brand",
};

const Eyebrow = ({ children, tone = "gold", className = "" }) => {
  const toneClasses = TONE[tone] ?? TONE.gold;
  const [textTone, lineTone] = toneClasses.split(" ");

  return (
    <div className={`flex items-center gap-3 mb-5 ${className}`}>
      <span className={`h-px w-10 ${lineTone}`} />
      <span className={`font-mono text-xs uppercase tracking-[0.3em] ${textTone}`}>
        {children}
      </span>
    </div>
  );
};

export default memo(Eyebrow);
