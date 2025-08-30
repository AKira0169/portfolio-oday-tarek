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
    <div className="mb-8 flex flex-col gap-4 border-b border-[#E0E0E0] pb-8 md:flex-row md:gap-8">
      <img
        src={image}
        alt={title}
        className="h-auto w-full rounded-md object-cover md:h-44 md:w-60"
      />
      <div>
        <h3 className="text-2xl font-bold text-[#21243D] md:text-3xl">
          {title}
        </h3>
        <div className="mt-2 flex flex-wrap items-center md:mt-4">
          <span className="rounded-full bg-[#142850] px-3 py-1 text-sm font-black text-white md:px-4 md:text-lg">
            {year}
          </span>
          <span className="ml-4 text-lg text-[#8695A4] md:ml-6 md:text-xl">
            {tags}
          </span>
        </div>
        <p className="mt-2 text-sm text-[#21243D] md:mt-4 md:text-base">
          {description}
        </p>

        {demoLinks && demoLinks.length > 0 && (
          <div className="mt-3">
            {demoLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 inline-block text-sm font-medium text-blue-600 hover:underline md:text-base"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {technologies && technologies.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const FeaturedWorks = () => {
  return (
    <section className="py-20">
      <h2 className="mb-8 text-center text-2xl text-[#21243D] md:text-left">
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
            { label: "Website  Live", url: "https://signaturestays.io/" },
            {
              label: "Website Demo ",
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
