import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeading from "./ui/SectionHeading";

type Role = {
  company: string;
  url: string;
  title: string;
  period: string;
  /** Marks the role he's in right now — drives the filled, haloed marker. */
  current?: boolean;
  /** Plain-prose context about the company, kept distinct from his own results. */
  note?: string;
  /** His results in the role. Bulleted, so they never read as company blurb. */
  highlights?: string[];
};

const roles: Role[] = [
  {
    company: "Circle360",
    url: "https://circle360.net/",
    title: "Full-Stack Developer",
    period: "May 2026 — Present",
    current: true,
    note: "Digital transformation studio in Cairo — custom software, secure system integration, and platforms for regulated industries.",
  },
  {
    company: "Mantaray Digital",
    url: "https://www.mantaray.digital/",
    title: "Full-Stack Developer",
    period: "June 2024 — May 2026",
    highlights: [
      "Shipped end-to-end product ecosystems — React Native apps, Next.js dashboards & NestJS backends",
      "Architected NestJS microservices with CQRS & RabbitMQ, processing 10K+ async events daily",
      "Reduced API response times by 40% via Redis caching, query optimization & pagination",
      "Cut code duplication 60% by designing a Turborepo monorepo with shared packages",
      "Hit 99.9% uptime with auto-scaling & zero-downtime deploys on GCP + Kubernetes",
      "Automated releases with Semantic Release & Conventional Commits",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <SectionHeading eyebrow="02 — Where I've worked" title="Experience" />

      <ol className="mt-12 border-t border-border pt-10">
        {roles.map((role, index) => (
          <li
            key={role.company}
            className="grid gap-3 md:grid-cols-[200px_1fr] md:gap-12"
          >
            {/* Period */}
            <p className="text-sm text-muted-foreground md:pt-1">
              {role.period}
            </p>

            {/* Role, hung off a timeline spine that starts at the first marker
                and runs unbroken to the end of the last role. */}
            <div
              className={cn(
                "relative pl-6 md:pl-8",
                index === roles.length - 1 ? "pb-0" : "pb-14",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute left-0 w-px bg-border",
                  index === 0 ? "top-[0.7rem] bottom-0" : "inset-y-0",
                )}
              />
              <span
                aria-hidden="true"
                className="absolute left-0 top-[0.6rem] block h-2.5 w-2.5 -translate-x-1/2"
              >
                {role.current && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-brand/40 [animation-duration:2.8s] motion-reduce:hidden" />
                )}
                <span
                  className={cn(
                    "relative block h-2.5 w-2.5 rounded-full",
                    role.current
                      ? "bg-brand"
                      : "border border-border bg-background",
                  )}
                />
              </span>

              <div className="flex items-center gap-2">
                <h3 className="font-serif text-xl font-semibold text-foreground md:text-2xl">
                  {role.company}
                </h3>
                <a
                  href={role.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label={`Visit ${role.company} website`}
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className="mt-1 text-sm font-medium text-brand">
                {role.title}
              </p>

              {role.note && (
                <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted-foreground">
                  {role.note}
                </p>
              )}

              {role.highlights && (
                <ul className="mt-6 space-y-3">
                  {role.highlights.map((text) => (
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
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
