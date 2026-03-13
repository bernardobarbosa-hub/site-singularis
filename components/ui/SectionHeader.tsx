import React from "react";

interface SectionHeaderProps {
  eyebrow: string;
  headline: string;
  subtext?: string;
  align?: "left" | "center";
  className?: string;
  /** Light variant for dark backgrounds */
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  headline,
  subtext,
  align = "center",
  className = "",
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const eyebrowColor = light ? "text-white/50" : "text-brand-earth";
  const headlineColor = light ? "text-white" : "text-brand-black";
  const subtextColor = light ? "text-white/60" : "text-brand-earth";

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      <p className={`text-[11px] font-medium tracking-[0.3em] uppercase ${eyebrowColor} mb-4`}>
        {eyebrow}
      </p>
      <h2
        className={`text-4xl md:text-5xl font-light leading-tight tracking-tight ${headlineColor}`}
        style={{ maxWidth: align === "center" ? "700px" : undefined }}
      >
        {headline}
      </h2>
      {subtext && (
        <p className={`mt-5 text-base md:text-lg font-light leading-relaxed ${subtextColor} max-w-xl`}>
          {subtext}
        </p>
      )}
    </div>
  );
}
