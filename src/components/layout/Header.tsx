import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaHome,
  FaBriefcase,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import type { DockItemData } from "../../blocks/Components/Dock/Dock";
import Dock from "../../blocks/Components/Dock/Dock";

const Header = () => {
  const navigate = useNavigate();

  const items: DockItemData[] = [
    // Internal navigation
    {
      icon: <FaHome />,
      label: "Home",
      onClick: () => navigate("/"),
      className: "bg-white",
    },
    {
      icon: <FaBriefcase />,
      label: "Works",
      onClick: () => navigate("/works"),
      className: "bg-white",
    },
    {
      icon: <FaEnvelope />,
      label: "Contact",
      onClick: () => navigate("/contact"),
      className: "bg-white",
    },

    // Social links (open in new tab)
    {
      icon: <FaFacebook />,
      label: "Facebook",
      onClick: () => window.open("https://www.facebook.com/odayterk", "_blank"),
      className: "bg-white",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      onClick: () =>
        window.open("https://www.instagram.com/akira0169/", "_blank"),
      className: "bg-white",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      onClick: () => window.open("https://github.com/AKira0169", "_blank"),
      className: "bg-white",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      onClick: () =>
        window.open("https://www.linkedin.com/in/odaytarek/", "_blank"),
      className: "bg-white",
    },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
};

export default Header;
