import React from "react";
import { cn } from "@/lib/utils";

interface ShinyButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
}

const ShinyButton: React.FC<ShinyButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <a
      className={cn(
        "shiny-button group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105",
        "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-[0_0_20px_rgba(0,0,0,0.3)]",
        "dark:from-white dark:via-gray-100 dark:to-white dark:text-black dark:shadow-[0_0_30px_rgba(255,255,255,0.3)]",
        "hover:shadow-[0_0_40px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]",
        className
      )}
      {...props}
    >
      {/* Animated shine sweep */}
      <span
        className="absolute inset-0 overflow-hidden rounded-full"
        aria-hidden="true"
      >
        <span className="absolute inset-0 -translate-x-full animate-[shine-sweep_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 dark:via-white/60" />
      </span>

      {/* Top highlight for 3D effect */}
      <span
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-white/80"
        aria-hidden="true"
      />

      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  );
};

export default ShinyButton;
