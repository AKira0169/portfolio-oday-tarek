import {
  GraduationCap,
  Award,
  Globe,
  Zap,
  Server,
  Cloud,
  Users,
  Code,
  Database,
  Layout,
} from "lucide-react";

export default function Qualifications() {
  const achievements = [
    {
      title: "Performance Optimization",
      description:
        "Reduced API latency by introducing Redis caching and advanced query optimization techniques.",
      icon: <Zap size={24} />,
    },
    {
      title: "Scalable Architectures",
      description:
        "Designed resilient microservices using RabbitMQ to handle asynchronous complex workflows at scale.",
      icon: <Server size={24} />,
    },
    {
      title: "Cloud Deployment",
      description:
        "Deployed and managed containerized applications on GCP with Kubernetes for auto-scaling and high availability.",
      icon: <Cloud size={24} />,
    },
    {
      title: "Team Standards",
      description:
        "Implemented Git Conventional Commits and CI/CD pipelines, improving collaboration and release management.",
      icon: <Users size={24} />,
    },
  ];

  const whatIDo = [
    {
      title: "Backend Development",
      description:
        "Building high-performance, secure APIs using NestJS and Node.js. Expertise in microservices and event-driven architectures.",
      icon: <Database size={20} />,
    },
    {
      title: "Frontend Engineering",
      description:
        "Crafting responsive, intuitive interfaces with React, Vue.js, and Nuxt. Focus on performance and user experience.",
      icon: <Layout size={20} />,
    },
    {
      title: "DevOps & Cloud",
      description:
        "Automating deployment pipelines and managing cloud infrastructure on Google Cloud Platform, Docker, and Nginx.",
      icon: <Cloud size={20} />,
    },
  ];

  const education = [
    {
      degree: "Bachelor’s in Computer Science",
      school: "Ain Shams University",
      year: "2020 - 2024",
      description:
        "Grade: Good. Specialized in Software Engineering and Computer Science fundamentals.",
    },
  ];

  const languages = [
    {
      language: "Arabic",
      level: "Native",
    },
    {
      language: "English",
      level: "Professional Proficiency",
    },
  ];

  return (
    <section className="py-20">
      <h2 className="mb-12 text-center text-4xl font-bold text-foreground md:text-left">
        Professional Highlights
      </h2>

      {/* Key Achievements */}
      <div className="mb-16">
        <h3 className="mb-8 flex items-center gap-2 text-2xl font-bold text-muted-foreground/80">
          <Award className="text-primary" /> Key Achievements
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-black/5 bg-black/5 p-6 backdrop-blur-sm transition-all hover:bg-black/10 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20">
                {item.icon}
              </div>
              <h4 className="mb-2 text-xl font-bold text-foreground">
                {item.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* What I Do */}
        <div>
          <h3 className="mb-8 flex items-center gap-2 text-2xl font-bold text-muted-foreground/80">
            <Code className="text-primary" /> What I Do
          </h3>
          <div className="space-y-4">
            {whatIDo.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-xl border border-black/5 bg-black/5 p-5 backdrop-blur-sm transition-all hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                <div className="mt-1 text-primary">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Languages */}
        <div className="space-y-8">
          {/* Education */}
          <div>
            <h3 className="mb-8 flex items-center gap-2 text-2xl font-bold text-muted-foreground/80">
              <GraduationCap className="text-primary" /> Education
            </h3>
            {education.map((edu, index) => (
              <div
                key={index}
                className="rounded-xl border border-black/5 bg-black/5 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
              >
                <h4 className="text-xl font-bold text-foreground">
                  {edu.degree}
                </h4>
                <p className="text-primary font-medium mt-1">{edu.school}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="inline-block rounded-md bg-primary/10 px-2 py-0.5 text-sm text-primary border border-primary/20">
                    {edu.year}
                  </span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold text-muted-foreground/80">
              <Globe className="text-primary" /> Languages
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-xl border border-black/5 bg-black/5 p-4 backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
                >
                  <span className="font-bold text-foreground">
                    {lang.language}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
