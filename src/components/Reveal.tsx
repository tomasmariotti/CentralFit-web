import { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "up" | "left" | "scale" | "fade";
}

export const Reveal = ({ children, delay = 0, className, variant = "up" }: RevealProps) => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const variants: Record<string, string> = {
    up: "translate-y-10",
    left: "-translate-x-10",
    scale: "scale-95",
    fade: "",
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        visible ? "opacity-100 translate-y-0 translate-x-0 scale-100" : `opacity-0 ${variants[variant]}`,
        className
      )}
    >
      {children}
    </div>
  );
};