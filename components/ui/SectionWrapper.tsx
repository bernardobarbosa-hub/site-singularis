import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  /** Classes for the outer <section> (background, padding, etc.) */
  className?: string;
  /** Classes for the inner max-width container */
  innerClassName?: string;
  id?: string;
  as?: "section" | "div" | "article";
}

export default function SectionWrapper({
  children,
  className = "",
  innerClassName = "",
  id,
  as: Tag = "section",
}: SectionWrapperProps) {
  return (
    <Tag id={id} className={className}>
      <div
        className={`mx-auto max-w-7xl px-6 md:px-12 lg:px-20 ${innerClassName}`}
      >
        {children}
      </div>
    </Tag>
  );
}
