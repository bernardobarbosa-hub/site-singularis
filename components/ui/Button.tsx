import React from "react";

type ButtonVariant = "solid" | "outline-dark" | "outline-white";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

const variants: Record<ButtonVariant, string> = {
  solid:
    "bg-brand-golden text-brand-black border-2 border-brand-golden hover:bg-brand-yellow hover:border-brand-yellow",
  "outline-dark":
    "bg-transparent text-brand-black border-[1.5px] border-brand-black hover:bg-brand-black hover:text-white",
  "outline-white":
    "bg-transparent text-white border-[1.5px] border-white hover:bg-white hover:text-brand-black",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-[11px]",
  md: "px-7 py-3 text-[12px]",
  lg: "px-10 py-4 text-[13px]",
};

const base =
  "inline-flex items-center justify-center font-medium tracking-[0.1em] uppercase transition-all duration-200 cursor-pointer select-none";

export default function Button({
  variant = "solid",
  size = "md",
  children,
  href,
  className = "",
  onClick,
  type = "button",
  target,
  rel,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
