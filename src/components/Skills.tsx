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
import Vue from "/logos/vue.svg";
import Nuxt from "/logos/nuxt.svg";
import React from "/logos/react.svg";
import Kafka from "/logos/apache-kafka.svg";
import SectionHeading from "./ui/SectionHeading";

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "Next.js", logo: NextJS },
        { name: "React", logo: React },
        { name: "Vue", logo: Vue },
        { name: "Nuxt", logo: Nuxt },
        { name: "TypeScript", logo: TypeScript },
        { name: "Tailwind CSS", logo: TailwindCSS },
        { name: "Motion", logo: Motion },
        { name: "TanStack", logo: TanStack },
        { name: "Vite", logo: Vite },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", logo: NodeJS },
        { name: "NestJS", logo: NestJS },
        { name: "GraphQL", logo: GraphQL },
        { name: "Socket.IO", logo: SocketIO },
        { name: "Kafka", logo: Kafka },
      ],
    },
    {
      category: "Database & DevOps",
      items: [
        { name: "PostgreSQL", logo: PostgreSQL },
        { name: "MongoDB", logo: MongoDB },
        { name: "Docker", logo: Docker },
        { name: "AWS", logo: AWS },
        { name: "Google Cloud", logo: GoogleCloud },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", logo: Git },
        { name: "GitHub", logo: GitHub },
        { name: "Linear", logo: Linear },
        { name: "Stripe", logo: Stripe },
        { name: "Ngrok", logo: Ngrok },
      ],
    },
  ];

  return (
    <section className="border-t border-border py-20 md:py-28">
      <SectionHeading eyebrow="01 — Toolbox" title="Skills" />

      <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
        {skills.map((category) => (
          <div key={category.category}>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {category.category}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {category.items.map((item) => (
                <span
                  key={item.name}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
                >
                  <img
                    src={item.logo}
                    alt=""
                    aria-hidden="true"
                    className="h-4 w-4 object-contain"
                  />
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
