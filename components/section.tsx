import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  classNameBg?: string;
}

export default function Section({
  children,
  className,
  classNameBg,
  ...rest
}: SectionProps) {
  return (
    <section
      className={`w-full flex items-center justify-center px-6 ${classNameBg || ""}`}
    >
      <div {...rest} className={`w-full max-w-6xl mx-auto ${className || ""}`}>
        {children}
      </div>
    </section>
  );
}
