import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

const MeshGradient = () => {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const updateTheme = () => {
      const dark =
        theme === "dark" ||
        (theme === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      setIsDark(dark);
    };

    updateTheme();
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => updateTheme();
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [theme]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div
        className={`absolute inset-0 transition-colors duration-700 ${
          isDark
            ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
            : "bg-gradient-to-br from-slate-50 via-white to-slate-100"
        }`}
      />

      {/* Animated blobs */}
      <div
        className={`absolute -top-1/2 -left-1/4 h-[800px] w-[800px] rounded-full blur-[120px] animate-blob ${
          isDark
            ? "bg-purple-900/30"
            : "bg-purple-300/40"
        }`}
      />
      <div
        className={`absolute -top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full blur-[120px] animate-blob animation-delay-2000 ${
          isDark
            ? "bg-blue-900/25"
            : "bg-blue-300/35"
        }`}
      />
      <div
        className={`absolute top-1/2 left-1/3 h-[700px] w-[700px] rounded-full blur-[120px] animate-blob animation-delay-4000 ${
          isDark
            ? "bg-indigo-900/20"
            : "bg-indigo-300/30"
        }`}
      />
      <div
        className={`absolute -bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full blur-[120px] animate-blob animation-delay-3000 ${
          isDark
            ? "bg-violet-900/25"
            : "bg-violet-300/35"
        }`}
      />
      <div
        className={`absolute bottom-0 -left-1/4 h-[600px] w-[600px] rounded-full blur-[120px] animate-blob animation-delay-5000 ${
          isDark
            ? "bg-fuchsia-900/15"
            : "bg-fuchsia-300/25"
        }`}
      />

      {/* Subtle grid overlay */}
      <div
        className={`absolute inset-0 ${
          isDark ? "opacity-[0.03]" : "opacity-[0.04]"
        }`}
        style={{
          backgroundImage: `linear-gradient(${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} 1px, transparent 1px),
                           linear-gradient(90deg, ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Noise texture for depth */}
      <div
        className={`absolute inset-0 ${isDark ? "opacity-[0.015]" : "opacity-[0.02]"}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default MeshGradient;
