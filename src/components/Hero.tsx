import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import profile from "/profile-images/profile-2.png";
import cv from "/OdayTarek.pdf";

const stats = [
  { value: "3+", label: "Years experience" },
  { value: "10+", label: "Projects delivered" },
  { value: "5+", label: "Core technologies" },
];

const socialLinks = [
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
];

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex flex-col-reverse items-center gap-12 pt-16 pb-20 md:flex-row md:items-center md:justify-between md:gap-16 md:pt-24 md:pb-28">
      {/* Text */}
      <div className="w-full text-left md:basis-3/5">
        <p className="text-sm font-medium tracking-wide text-brand">
          Full-Stack Developer · Egypt
        </p>
        <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
          Oday Tarek
        </h1>
        <p className="mt-6 max-w-prose text-xl font-medium leading-snug text-foreground md:text-2xl">
          I build web products that ship fast and scale far.
        </p>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground md:text-lg">
          From intuitive React &amp; Vue interfaces to resilient Node.js services
          and cloud-native infrastructure, I take ideas from first commit to
          production — and keep them fast when real traffic hits.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href={cv}
            download
            className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Download Resume
          </a>
          <button
            onClick={scrollToProjects}
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View work
            <span className="transition-transform group-hover:translate-y-0.5">
              ↓
            </span>
          </button>

          <div className="flex items-center gap-1.5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Stats */}
        <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-border pt-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="font-serif text-3xl font-semibold text-foreground">
                  {stat.value}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Portrait */}
      <div className="shrink-0">
        <div className="h-56 w-56 overflow-hidden rounded-xl border border-border bg-secondary md:h-72 md:w-72">
          <img
            src={profile}
            alt="Portrait of Oday Tarek"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
