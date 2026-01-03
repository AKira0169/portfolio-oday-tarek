import SignatureStays from "/sig.png";
import MoneyManager from "/moneymanger.png";
import Yallapass from "/yallapass.png";

const WorkCard = ({
  title,
  year,
  tags,
  description,
  image,
  demoLinks,
  technologies,
}: {
  title: string;
  year: string;
  tags: string;
  description: string;
  image: string;
  demoLinks?: { label: string; url: string }[];
  technologies?: string[];
}) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-black/5 bg-black/5 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10">
      <div className="flex flex-col gap-6 md:flex-row md:gap-8">
        <div className="shrink-0 overflow-hidden rounded-lg md:w-60">
          <img
            src={image}
            alt={title}
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110 md:h-44 md:w-60"
          />
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="text-2xl font-bold text-foreground md:text-3xl">
            {title}
          </h3>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            <span className="rounded-full bg-primary/20 px-3 py-1 text-sm font-bold text-primary border border-primary/20">
              {year}
            </span>
            <span className="text-lg text-muted-foreground">
              {tags}
            </span>
          </div>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            {description}
          </p>

          {technologies && technologies.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full border border-black/5 bg-black/5 px-3 py-1 text-xs font-medium text-muted-foreground dark:border-white/10 dark:bg-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {demoLinks && demoLinks.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {demoLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-black/5 bg-black/5 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-black/10 hover:text-primary dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/20"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const FeaturedWorks = () => {
  return (
    <section className="py-20">
      <h2 className="mb-12 text-center text-4xl font-bold text-foreground md:text-left">
        Featured works
      </h2>
      <div className="grid grid-cols-1 gap-8">
        <WorkCard
          title="Signature Stays"
          year="2025"
          tags="Full-Stack Developer"
          description="Signature Stays transforms private homes into five-star hospitality experiences. More than just property management, it's a luxury lifestyle service—backed by a smart digital dashboard that gives owners full control while delivering guests a seamless, indulgent stay."
          image={SignatureStays}
          demoLinks={[
            { label: "Website Live", url: "https://signaturestays.io/" },
            {
              label: "Website Demo",
              url: "https://staging.signaturestays.io/",
            },
            {
              label: "Dashboard Demo",
              url: "https://staging.dashboard.signaturestays.io/",
            },
            {
              label: "API Demo",
              url: "https://staging.api.signaturestays.io/",
            },
            {
              label: "API Live",
              url: "https://api.signaturestays.io/",
            },
          ]}
          technologies={[
            "React",
            "Next.js",
            "Socket.io",
            "TypeScript",
            "Tailwind CSS",
          ]}
        />
        <WorkCard
          title="Yallapass – Studio Management Platform"
          year="2025"
          tags="Full-Stack Developer"
          description="Engineered a credit/subscription system using Nest.js for modular architecture. Integrated RabbitMQ for real-time email notifications and billing workflows. Deployed on GCP with Kubernetes for auto-scaling during peak loads."
          image={Yallapass}
          demoLinks={[
            { label: "API Demo", url: "https://staging.api.yallapass.app/" },
            {
              label: "Dashboard Demo",
              url: "https://staging.dashboard.yallapass.app",
            },
          ]}
          technologies={[
            "Nextjs",
            "Tailwind CSS",
            "Nest.js",
            "Socket.io",
            "RabbitMQ",
            "GCP",
            "MongoDB",
            "Docker",
          ]}
        />
        <WorkCard
          title="Money Manager"
          year="2025"
          tags="Backend Developer"
          description="Created a personal finance tracking application that helps users manage expenses, set budgets, and visualize spending patterns through intuitive charts and reports."
          image={MoneyManager}
          demoLinks={[
            {
              label: "API Demo",
              url: "https://staging.money.manger.mantaray.digital/",
            },
          ]}
          technologies={[
            "Nest.js",
            "Socket.io",
            "Postgres",
            "Docker",
            "TypeOrm",
            "GCP",
            "RabbitMQ",
          ]}
        />
      </div>
    </section>
  );
};

export default FeaturedWorks;
