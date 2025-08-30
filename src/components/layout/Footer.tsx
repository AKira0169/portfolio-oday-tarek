import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-12">
      <div className="mb-6 flex gap-8">
        <a href="https://www.facebook.com/odayterk">
          <FaFacebook className="h-8 w-8" />
        </a>
        <a href="https://www.instagram.com/akira0169/" target="_blank">
          <FaInstagram className="h-8 w-8" />
        </a>
        <a href="https://github.com/AKira0169" target="_blank">
          <FaGithub className="h-8 w-8" />
        </a>
        <a href="https://www.linkedin.com/in/odaytarek/" target="_blank">
          <FaLinkedin className="h-8 w-8" />
        </a>
      </div>
      <p className="text-sm text-[#21243D]">
        Copyright ©{new Date().getFullYear()} All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
