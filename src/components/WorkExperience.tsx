import { ExternalLink } from "lucide-react";
import Mantaray from "/mantaray.svg";

type WorkExperienceItem = {
  company: string;
  role: string;
  period: string;
  logo: string;
  website?: string;
};

export default function WorkExperience() {
  const experiences: WorkExperienceItem[] = [
    {
      company: "Mantaray Digital",
      role: "Full-Stack-Developer",
      period: "June 2024 - Present",
      logo: Mantaray, // Placeholder logo - replace with actual company logo
      website: "https://www.mantaray.digital/", // Replace with actual website
    },
  ];

  return (
    <section className="py-20">
      <h2 className="mb-12 text-center text-4xl font-bold text-foreground md:text-left">
        Work Experience
      </h2>

      <div className="grid gap-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-xl border border-black/5 bg-black/5 p-4 shadow-lg backdrop-blur-sm transition-all hover:bg-black/10 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10 md:p-6"
          >
            {/* Company Logo */}
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-black/5 bg-white dark:border-white/10 dark:bg-white/10">
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Company Details */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-foreground">
                  {experience.company}
                </h3>
                {experience.website && (
                  <a
                    href={experience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-primary"
                    aria-label={`Visit ${experience.company} website`}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              <p className="text-muted-foreground">{experience.role}</p>
            </div>

            {/* Period */}
            <div className="text-right text-sm font-medium text-muted-foreground/80">
              {experience.period}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
