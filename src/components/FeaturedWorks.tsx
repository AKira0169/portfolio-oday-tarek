import { ArrowUpRight } from "lucide-react";
import SignatureStays from "/sig.png";
import MoneyManager from "/moneymanger.png";
import Yallapass from "/yallapass.png";
import SectionHeading from "./ui/SectionHeading";

type Project = {
  title: string;
  year: string;
  role: string;
  description: string;
  image: string;
  demoLinks?: { label: string; url: string }[];
  technologies?: string[];
};

const projects: Project[] = [
  {
    title: "Signature Stays",
    year: "2025",
    role: "Full-Stack Developer",
    description:
      "Transforms private homes into five-star hospitality experiences — a luxury lifestyle service backed by a smart digital dashboard that gives owners full control while delivering guests a seamless stay.",
    image: SignatureStays,
    demoLinks: [
      { label: "Website", url: "https://signaturestays.io/" },
      { label: "Staging", url: "https://staging.signaturestays.io/" },
      { label: "Dashboard", url: "https://staging.dashboard.signaturestays.io/" },
      { label: "API", url: "https://api.signaturestays.io/" },
    ],
    technologies: ["React", "Next.js", "Socket.io", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Yallapass",
    year: "2025",
    role: "Full-Stack Developer",
    description:
      "A studio-management platform with a credit/subscription system built on Nest.js. Integrated RabbitMQ for real-time email and billing workflows; deployed on GCP with Kubernetes for auto-scaling during peak loads.",
    image: Yallapass,
    demoLinks: [
      { label: "API", url: "https://staging.api.yallapass.app/" },
      { label: "Dashboard", url: "https://staging.dashboard.yallapass.app" },
    ],
    technologies: ["Next.js", "Nest.js", "Socket.io", "RabbitMQ", "GCP", "MongoDB", "Docker"],
  },
  {
    title: "Money Manager",
    year: "2025",
    role: "Backend Developer",
    description:
      "A personal-finance tracker that helps users manage expenses, set budgets, and visualize spending patterns through intuitive charts and reports.",
    image: MoneyManager,
    demoLinks: [
      { label: "API", url: "https://staging.money.manger.mantaray.digital/" },
    ],
    technologies: ["Nest.js", "Socket.io", "Postgres", "Docker", "TypeORM", "GCP", "RabbitMQ"],
  },
];

const ProjectCard = ({
  title,
  year,
  role,
  description,
  image,
  demoLinks,
  technologies,
}: Project) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-200 hover:-translate-y-1">
      <div className="aspect-16/10 overflow-hidden border-b border-border bg-secondary">
        <img
          src={image}
          alt={`${title} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground">
            {title}
          </h3>
          <span className="shrink-0 text-sm text-muted-foreground">{year}</span>
        </div>
        <p className="mt-1 text-sm font-medium text-brand">{role}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {technologies && technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {demoLinks && demoLinks.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-4">
            {demoLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 text-sm font-medium text-muted-foreground transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {link.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

const FeaturedWorks = () => {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <SectionHeading eyebrow="04 — Selected projects" title="Work" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedWorks;
