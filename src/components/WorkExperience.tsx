import { ExternalLink } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const highlights = [
  "Shipped end-to-end product ecosystems — React Native apps, Next.js dashboards & NestJS backends",
  "Architected NestJS microservices with CQRS & RabbitMQ, processing 10K+ async events daily",
  "Reduced API response times by 40% via Redis caching, query optimization & pagination",
  "Cut code duplication 60% by designing a Turborepo monorepo with shared packages",
  "Hit 99.9% uptime with auto-scaling & zero-downtime deploys on GCP + Kubernetes",
  "Automated releases with Semantic Release & Conventional Commits",
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
