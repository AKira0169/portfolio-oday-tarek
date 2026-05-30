import { ExternalLink } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const highlights = [
  "Built production-grade web applications with React, Next.js & NestJS",
  "Designed scalable microservices with RabbitMQ & Kubernetes",
  "Optimized API performance with Redis caching & query optimization",
  "Established CI/CD pipelines & Git conventional-commit standards",
];

export default function WorkExperience() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <SectionHeading eyebrow="02 — Where I've worked" title="Experience" />

      <div className="mt-12 grid gap-4 border-t border-border pt-10 md:grid-cols-[200px_1fr] md:gap-12">
        {/* Period */}
        <p className="text-sm text-muted-foreground">June 2024 — Present</p>

        {/* Role */}
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-serif text-xl font-semibold text-foreground md:text-2xl">
              Mantaray Digital
            </h3>
            <a
              href="https://www.mantaray.digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-brand"
              aria-label="Visit Mantaray Digital website"
            >
              <ExternalLink size={16} />
            </a>
          </div>
          <p className="mt-1 text-sm font-medium text-brand">
            Full-Stack Developer
          </p>

          <ul className="mt-6 space-y-3">
            {highlights.map((text) => (
              <li
                key={text}
                className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand"
                />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
