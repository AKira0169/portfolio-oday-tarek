import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const EMAIL = "odaytarek62@gmail.com";

const socialLinks = [
  {
    name: "WhatsApp",
    icon: <FaWhatsapp className="h-4 w-4" />,
    href: "https://wa.me/201143776030",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="h-4 w-4" />,
    href: "https://github.com/AKira0169",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn className="h-4 w-4" />,
    href: "https://linkedin.com/in/oday-tarek",
  },
  {
    name: "Facebook",
    icon: <FaFacebook className="h-4 w-4" />,
    href: "https://www.facebook.com/odayterk",
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="h-4 w-4" />,
    href: "https://www.instagram.com/akira0169/",
  },
];

function Contact() {
  return (
    <footer className="border-t border-border py-20 md:py-28">
      <SectionHeading eyebrow="05 — Get in touch" title="Let's connect" />

      <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted-foreground">
        Open for opportunities and collaborations. The fastest way to reach me is
        email.
      </p>

      <a
        href={`mailto:${EMAIL}`}
        className="mt-6 inline-flex items-center gap-1.5 font-serif text-2xl font-semibold tracking-tight text-foreground transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:text-3xl"
      >
        {EMAIL}
        <ArrowUpRight className="h-5 w-5" />
      </a>

      <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span className="text-muted-foreground transition-colors group-hover:text-brand">
              {link.icon}
            </span>
            {link.name}
          </a>
        ))}
      </div>

      <p className="mt-16 text-sm text-muted-foreground/70">
        © {new Date().getFullYear()} Oday Tarek
      </p>
    </footer>
  );
}

export default Contact;
