import { useState } from "react";
import { motion } from "framer-motion";
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = ["Home", "About", "Projects", "Contact"];

  return (
    <div className="h-[60px]">
      <nav className="fixed left-0 top-0 z-50 h-[60px] w-full bg-gray-50 shadow-md">
        <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between px-4">
          {/* Logo */}
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            className="h-24 w-auto"
            src="./logo_for_Oday_Tarek__1_-removebg-preview.png"
            alt="Logo"
          />

          {/* Desktop Menu */}
          <ul className="hidden space-x-8 md:flex">
            {navLinks.map((link, index) => (
              <motion.li
                key={link}
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1, duration: 0.4 },
                }}
                whileHover={{ scale: 1.1, color: "#3b82f6" }}
                className="cursor-pointer text-gray-700 hover:text-blue-600"
              >
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="block rounded p-2 focus:outline-none md:hidden"
          >
            <span className="sr-only">Toggle Menu</span>
            <svg
              className="h-6 w-6 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                initial={false}
                animate={{
                  d: isMenuOpen
                    ? "M6 6L18 18M6 18L18 6" // "X" shape
                    : "M4 6h16M4 12h16M4 18h16", // Hamburger shape
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: { duration: 0.5 },
            }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gray-50 shadow-lg md:hidden"
          >
            <ul className="flex h-[100vh] flex-col items-center space-y-4 py-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1, duration: 0.4 },
                  }}
                  whileHover={{ scale: 1.1, color: "#3b82f6" }}
                  className="cursor-pointer text-gray-700 hover:text-blue-600"
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)} // Close menu when a link is clicked
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
      <ul className="fixed bottom-2 right-4 z-[999] flex flex-col justify-end gap-4">
        <li>
          <a href="https://www.facebook.com/odayterk" target="_blank">
            <SiFacebook className="text-2xl text-blue-600" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/odaytarek/" target="_blank">
            <SiLinkedin className="text-2xl text-blue-800" />
          </a>
        </li>
        <li>
          <a href="https://github.com/AKira0169" target="_blank">
            <SiGithub className="text-2xl" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
