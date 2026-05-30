import SectionHeading from "./ui/SectionHeading";

export default function Qualifications() {
  const whatIDo = [
    {
      title: "Backend Development",
      description:
        "High-performance, secure APIs with NestJS and Node.js — microservices and event-driven architectures.",
    },
    {
      title: "Frontend Engineering",
      description:
        "Responsive, intuitive interfaces with React, Vue.js, and Nuxt, with a focus on performance and user experience.",
    },
    {
      title: "DevOps & Cloud",
      description:
        "Automated deployment pipelines and cloud infrastructure on Google Cloud Platform, Docker, and Nginx.",
    },
  ];

  const education = {
    degree: "Bachelor's in Computer Science",
    school: "Ain Shams University",
    year: "2020 — 2024",
    description:
      "Grade: Good. Specialized in Software Engineering and Computer Science fundamentals.",
  };

  const languages = [
    { language: "Arabic", level: "Native" },
    { language: "English", level: "Professional Proficiency" },
  ];

  return (
    <section className="border-t border-border py-20 md:py-28">
      <SectionHeading eyebrow="03 — Background" title="About" />

      <p className="mt-8 max-w-prose text-lg leading-relaxed text-muted-foreground">
        I'm a full-stack developer based in Egypt with over three years of
        hands-on experience building scalable web applications. I enjoy designing
        microservices and cloud-native architectures that deliver
        high-performance, reliable products.
      </p>

      <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
        {/* What I Do */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            What I Do
          </h3>
          <dl className="mt-4 divide-y divide-border border-t border-border">
            {whatIDo.map((item) => (
              <div key={item.title} className="py-5">
                <dt className="font-medium text-foreground">{item.title}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Education & Languages */}
        <div className="space-y-12">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Education
            </h3>
            <div className="mt-4 border-t border-border py-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h4 className="font-medium text-foreground">
                  {education.degree}
                </h4>
                <span className="text-sm text-muted-foreground">
                  {education.year}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-brand">
                {education.school}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {education.description}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Languages
            </h3>
            <dl className="mt-4 divide-y divide-border border-t border-border">
              {languages.map((lang) => (
                <div
                  key={lang.language}
                  className="flex items-center justify-between py-4"
                >
                  <dt className="font-medium text-foreground">
                    {lang.language}
                  </dt>
                  <dd className="text-sm text-muted-foreground">{lang.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
