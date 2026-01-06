import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  {
    name: "Email",
    icon: <MdEmail className="h-5 w-5" />,
    href: "mailto:odaytarek62@gmail.com",
    label: "odaytarek62@gmail.com",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp className="h-5 w-5" />,
    href: "https://wa.me/201143776030",
    label: "Chat on WhatsApp",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="h-5 w-5" />,
    href: "https://github.com/AKira0169",
    label: "AKira0169",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn className="h-5 w-5" />,
    href: "https://linkedin.com/in/oday-tarek",
    label: "oday-tarek",
  },
];

function Contact() {
  return (
    <footer id="contact" className="py-16 mt-12">
      {/* Divider line */}
      <div className="mb-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-4xl text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Let's Connect
        </h2>
        <p className="mt-3 text-muted-foreground">
          Open for opportunities and collaborations
        </p>

        {/* Social Links */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group flex items-center gap-3 rounded-full border border-black/5 bg-black/5 px-5 py-3 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/10 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-primary/30 dark:hover:bg-primary/10"
            >
              <span className="text-muted-foreground transition-colors group-hover:text-primary">
                {link.icon}
              </span>
              <span className="text-sm font-medium text-foreground">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-16 text-sm text-muted-foreground/60">
          <p>© {new Date().getFullYear()} Oday Tarek. Crafted with passion.</p>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
