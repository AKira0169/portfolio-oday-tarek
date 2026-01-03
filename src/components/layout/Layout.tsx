import { Outlet } from "react-router-dom";
import Header from "./Header";
import Particles from "../../blocks/Backgrounds/Particles/Particles";
import { useTheme } from "../ThemeProvider";
import { useEffect, useState } from "react";

const Layout = () => {
  const { theme } = useTheme();
  const [particleColor, setParticleColor] = useState("#ffffff");

  useEffect(() => {
    const updateColor = () => {
      const isDark =
        theme === "dark" ||
        (theme === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      setParticleColor(isDark ? "#ffffff" : "#000000");
    };

    updateColor();
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => updateColor();
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [theme]);

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={[particleColor, "#aa99ff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      {/* Page container */}
      <div className="container relative z-10 mx-auto flex min-h-screen flex-col">
        <main className="flex-1 p-10">
          <Outlet />
        </main>
      </div>
      {/* Floating Dock */}
      <Header />
    </div>
  );
};

export default Layout;
