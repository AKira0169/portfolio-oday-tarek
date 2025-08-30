import LogoLoop from "../blocks/Animations/LogoLoop/LogoLoop";
import AWS from "/logos/aws_dark.svg";
import Docker from "/logos/docker.svg";
import Git from "/logos/git.svg";
import GitHub from "/logos/github_light.svg";
import GoogleCloud from "/logos/google-cloud.svg";
import GraphQL from "/logos/graphql.svg";
import Linear from "/logos/linear.svg";
import MongoDB from "/logos/mongodb.svg";
import Motion from "/logos/motion_dark.svg";
import NestJS from "/logos/nestjs.svg";
import NextJS from "/logos/nextjs_icon_dark.svg";
import Ngrok from "/logos/ngrok-light.svg";
import NodeJS from "/logos/nodejs.svg";
import PostgreSQL from "/logos/postgresql.svg";
import SocketIO from "/logos/socketio-light.svg";
import Stripe from "/logos/stripe.svg";
import TailwindCSS from "/logos/tailwindcss.svg";
import TanStack from "/logos/tanstack.svg";
import TypeScript from "/logos/typescript.svg";
import Vite from "/logos/vitejs.svg";

export default function Skills() {
  const imageLogos = [
    {
      src: AWS,
      alt: "AWS",
    },
    {
      src: Docker,
      alt: "Docker",
    },
    {
      src: Git,
      alt: "Git",
    },
    {
      src: GitHub,
      alt: "GitHub",
    },
    {
      src: GoogleCloud,
      alt: "Google Cloud",
    },
    {
      src: GraphQL,
      alt: "GraphQL",
    },
    {
      src: Linear,
      alt: "Linear",
    },
    {
      src: MongoDB,
      alt: "MongoDB",
    },
    {
      src: Motion,
      alt: "Motion",
    },
    {
      src: NestJS,
      alt: "NestJS",
    },
    {
      src: NextJS,
      alt: "Next.js",
    },
    {
      src: Ngrok,
      alt: "Ngrok",
    },
    {
      src: NodeJS,
      alt: "Node.js",
    },
    {
      src: PostgreSQL,
      alt: "PostgreSQL",
    },
    {
      src: SocketIO,
      alt: "Socket.IO",
    },
    {
      src: Stripe,
      alt: "Stripe",
    },
    {
      src: TailwindCSS,
      alt: "Tailwind CSS",
    },
    {
      src: TanStack,
      alt: "TanStack",
    },
    {
      src: TypeScript,
      alt: "TypeScript",
    },
    {
      src: Vite,
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
