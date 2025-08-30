import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

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
      logo: "/mantaray.svg", // Placeholder logo - replace with actual company logo
      website: "https://www.mantaray.digital/", // Replace with actual website
    },
  ];

  return (
    <section className="py-20">
      <h2 className="mb-8 text-center text-2xl text-[#21243D] md:text-left">
        Work Experience
      </h2>

      <div className="grid gap-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm transition-all hover:shadow-md md:p-6"
          >
            {/* Company Logo */}
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-white p-2">
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Company Details */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-medium text-[#21243D]">
                  {experience.company}
                </h3>
                {experience.website && (
                  <a
                    href={experience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 opacity-0 transition-opacity group-hover:opacity-100"
                    aria-label={`Visit ${experience.company} website`}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
              <p className="text-neutral-600">{experience.role}</p>
            </div>

            {/* Period */}
            <div className="text-right text-sm text-neutral-500">
              {experience.period}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
