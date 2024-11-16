import { motion } from "framer-motion";
import { useState } from "react";
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";

function Header() {
  const [activeLink, setActiveLink] = useState<string>();

  const handleClick = (linkId: string) => {
    setActiveLink(linkId);
  };

  return (
    <div className="h-[60px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        className="fixed left-0 top-0 z-50 flex h-[60px] w-full items-center justify-center bg-white shadow-md"
      >
        <ul className="mt-2 flex w-full justify-center gap-4">
          <li>
            <a
              className={`${activeLink === "home" ? "active" : ""}`}
              onClick={() => handleClick("home")}
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => handleClick("projects")}
              className={`${activeLink === "projects" ? "active" : ""}`}
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => handleClick("about")}
              className={`${activeLink === "about" ? "active" : ""}`}
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => handleClick("contact")}
              className={`${activeLink === "contact" ? "active" : ""}`}
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
        <ul className="flex justify-end gap-4">
          <li>
            <a href="https://www.facebook.com/odayterk" target="_blank">
              <SiFacebook className="text-xl" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/odaytarek/" target="_blank">
              <SiLinkedin className="text-xl" />
            </a>
          </li>
          <li>
            <a href="https://github.com/AKira0169" target="_blank">
              <SiGithub className="text-xl" />
            </a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}

export default Header;
