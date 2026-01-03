import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaHome,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaSun,
  FaMoon,
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

  const items: DockItemData[] = [
    // Internal navigation
    {
      icon: <FaHome className="text-black dark:text-white" />,
      label: "Home",
      onClick: () => navigate("/"),
      className: "bg-white/50 backdrop-blur-md border border-black/10 hover:bg-white/80 dark:bg-black/50 dark:border-white/10 dark:hover:bg-black/70",
    },
    {
      icon: <FaEnvelope className="text-black dark:text-white" />,
      label: "Contact",
      onClick: () => navigate("/contact"),
      className: "bg-white/50 backdrop-blur-md border border-black/10 hover:bg-white/80 dark:bg-black/50 dark:border-white/10 dark:hover:bg-black/70",
    },

    // Theme Toggle
    {
      icon: theme === "dark" ? <FaSun className="text-white" /> : <FaMoon className="text-black" />,
      label: theme === "dark" ? "Light Mode" : "Dark Mode",
      onClick: toggleTheme,
      className: "bg-white/50 backdrop-blur-md border border-black/10 hover:bg-white/80 dark:bg-black/50 dark:border-white/10 dark:hover:bg-black/70",
    },

    // Social links (open in new tab)
    {
      icon: <FaFacebook className="text-black dark:text-white" />,
      label: "Facebook",
      onClick: () => window.open("https://www.facebook.com/odayterk", "_blank"),
      className: "bg-white/50 backdrop-blur-md border border-black/10 hover:bg-white/80 dark:bg-black/50 dark:border-white/10 dark:hover:bg-black/70",
    },
    {
      icon: <FaInstagram className="text-black dark:text-white" />,
      label: "Instagram",
      onClick: () =>
        window.open("https://www.instagram.com/akira0169/", "_blank"),
      className: "bg-white/50 backdrop-blur-md border border-black/10 hover:bg-white/80 dark:bg-black/50 dark:border-white/10 dark:hover:bg-black/70",
    },
    {
      icon: <FaGithub className="text-black dark:text-white" />,
      label: "GitHub",
      onClick: () => window.open("https://github.com/AKira0169", "_blank"),
      className: "bg-white/50 backdrop-blur-md border border-black/10 hover:bg-white/80 dark:bg-black/50 dark:border-white/10 dark:hover:bg-black/70",
    },
    {
      icon: <FaLinkedin className="text-black dark:text-white" />,
      label: "LinkedIn",
      onClick: () =>
        window.open("https://www.linkedin.com/in/odaytarek/", "_blank"),
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
