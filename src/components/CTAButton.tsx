import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg" | "sm";
};

export function CTAButton({ children, className, size = "default" }: Props) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    default: "px-6 py-3.5 text-[15px]",
    lg: "px-8 py-5 text-base sm:text-lg",
  }[size];

  return (
    <a
      href="#book"
      className={cn(
        "cta-shine glow-cta group inline-flex items-center justify-center gap-2 rounded-full bg-accent font-semibold text-accent-foreground transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98]",
        sizeClasses,
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
      <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}
