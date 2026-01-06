import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaHome,
  FaSun,
  FaMoon,
  FaUser,
  FaCode,
} from "react-icons/fa";
import type { DockItemData } from "../../blocks/Components/Dock/Dock";
import Dock from "../../blocks/Components/Dock/Dock";
import VerticalDock from "../../blocks/Components/Dock/VerticalDock";
import type { VerticalDockItemData } from "../../blocks/Components/Dock/VerticalDock";
import { useTheme } from "../ThemeProvider";

const Header = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [dockPosition, setDockPosition] = useState<"left" | "right">("left");

  // Check if the screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setDockPosition(window.innerWidth <= 768 ? "right" : "left");
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const items: DockItemData[] = [
    // Internal navigation
    {
      icon: <FaHome className="text-black dark:text-white" />,
      label: "Home",
      onClick: () => scrollToSection("home"),
      className: "bg-white/50 backdrop-blur-md border border-black/10 hover:bg-white/80 dark:bg-black/50 dark:border-white/10 dark:hover:bg-black/70",
    },
    {
      icon: <FaUser className="text-black dark:text-white" />,
      label: "About",
      onClick: () => scrollToSection("about"),
      className: "bg-white/50 backdrop-blur-md border border-black/10 hover:bg-white/80 dark:bg-black/50 dark:border-white/10 dark:hover:bg-black/70",
    },
    {
      icon: <FaCode className="text-black dark:text-white" />,
      label: "Projects",
      onClick: () => scrollToSection("projects"),
      className: "bg-white/50 backdrop-blur-md border border-black/10 hover:bg-white/80 dark:bg-black/50 dark:border-white/10 dark:hover:bg-black/70",
    },
    {
      icon: <FaEnvelope className="text-black dark:text-white" />,
      label: "Contact",
      onClick: () => scrollToSection("contact"),
      className: "bg-white/50 backdrop-blur-md border border-black/10 hover:bg-white/80 dark:bg-black/50 dark:border-white/10 dark:hover:bg-black/70",
    },

    // Theme Toggle
    {
      icon: theme === "dark" ? <FaSun className="text-white" /> : <FaMoon className="text-black" />,
      label: theme === "dark" ? "Light Mode" : "Dark Mode",
      onClick: toggleTheme,
      className: "bg-white/50 backdrop-blur-md border border-black/10 hover:bg-white/80 dark:bg-black/50 dark:border-white/10 dark:hover:bg-black/70",
    },
  ];

  return (
    <>
      {/* Regular Dock for desktop/tablet */}
      <div className="fixed bottom-4 left-1/2 z-50 hidden -translate-x-1/2 md:flex">
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
          className="backdrop-blur-md bg-white/50 border border-black/10 dark:bg-black/50 dark:border-white/10"
        />
      </div>

      {/* Vertical Dock for mobile */}
      <div className="block md:hidden">
        <VerticalDock
          items={items as VerticalDockItemData[]}
          baseItemSize={44}
          position={dockPosition}
          className="backdrop-blur-md bg-white/50 border border-black/10 dark:bg-black/50 dark:border-white/10"
        />
      </div>
    </>
  );
};

export default Header;
