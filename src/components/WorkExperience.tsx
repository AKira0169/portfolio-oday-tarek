import { ExternalLink, Zap, Server, Users, Code } from "lucide-react";
import Mantaray from "/mantaray.svg";

const highlights = [
  {
    icon: <Code size={18} />,
    text: "Built production-grade web applications with React, Next.js & NestJS",
  },
  {
    icon: <Server size={18} />,
    text: "Designed scalable microservices with RabbitMQ & Kubernetes",
  },
  {
    icon: <Zap size={18} />,
    text: "Optimized API performance with Redis caching & query optimization",
  },
  {
    icon: <Users size={18} />,
    text: "Established CI/CD pipelines & Git conventional commits standards",
  },
];

export default function WorkExperience() {
  return (
    <section className="py-20">
      <h2 className="mb-12 text-center text-4xl font-bold text-foreground md:text-left">
        Work Experience
      </h2>

      {/* Featured Experience Card */}
      <div className="group relative overflow-hidden rounded-2xl border border-black/5 bg-black/5 p-6 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 md:p-8">
        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-4">
            {/* Company Logo */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm dark:border-white/10 dark:bg-white/10 md:h-20 md:w-20">
              <img
                src={Mantaray}
                alt="Mantaray Digital logo"
                className="h-full w-full object-cover p-2"
              />
            </div>

            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                  Mantaray Digital
                </h3>
                <a
                  href="https://www.mantaray.digital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="Visit Mantaray Digital website"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="mt-1 text-lg text-primary font-medium">
                Full-Stack Developer
              </p>
            </div>
          </div>

          {/* Period Badge */}
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            June 2024 - Present
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-xl border border-black/5 bg-black/5 p-4 transition-colors hover:bg-black/10 dark:border-white/5 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <span className="mt-0.5 text-primary">{highlight.icon}</span>
              <span className="text-sm text-muted-foreground leading-relaxed">
                {highlight.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
