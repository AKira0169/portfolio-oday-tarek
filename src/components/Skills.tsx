import LogoLoop from "../blocks/Animations/LogoLoop/LogoLoop";

export default function Skills() {
  const imageLogos = [
    {
      src: "/logos/aws_dark.svg",
      alt: "AWS",
    },
    {
      src: "/logos/docker.svg",
      alt: "Docker",
    },
    {
      src: "/logos/git.svg",
      alt: "Git",
    },
    {
      src: "/logos/github_light.svg",
      alt: "GitHub",
    },
    {
      src: "/logos/google-cloud.svg",
      alt: "Google Cloud",
    },
    {
      src: "/logos/graphql.svg",
      alt: "GraphQL",
    },
    {
      src: "/logos/linear.svg",
      alt: "Linear",
    },
    {
      src: "/logos/mongodb.svg",
      alt: "MongoDB",
    },
    {
      src: "/logos/motion_dark.svg",
      alt: "Motion",
    },
    {
      src: "/logos/nestjs.svg",
      alt: "NestJS",
    },
    {
      src: "/logos/nextjs_icon_dark.svg",
      alt: "Next.js",
    },
    {
      src: "/logos/ngrok-light.svg",
      alt: "Ngrok",
    },
    {
      src: "/logos/nodejs.svg",
      alt: "Node.js",
    },
    {
      src: "/logos/postgresql.svg",
      alt: "PostgreSQL",
    },
    {
      src: "/logos/socketio-light.svg",
      alt: "Socket.IO",
    },
    {
      src: "/logos/stripe.svg",
      alt: "Stripe",
    },
    {
      src: "/logos/tailwindcss.svg",
      alt: "Tailwind CSS",
    },
    {
      src: "/logos/tanstack.svg",
      alt: "TanStack",
    },
    {
      src: "/logos/typescript.svg",
      alt: "TypeScript",
    },
    {
      src: "/logos/vitejs.svg",
      alt: "Vite",
    },
  ];
  return (
    <section className="relative my-12 md:my-24">
      <LogoLoop
        logos={imageLogos}
        speed={80}
        direction="left"
        logoHeight={30}
        gap={30}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology skills"
      />
    </section>
  );
}
