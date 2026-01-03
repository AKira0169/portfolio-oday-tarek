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

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "Next.js", logo: NextJS },
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
    <section className="relative py-20">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-foreground md:text-5xl text-center md:text-left">
          Skills
        </h2>
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
        {skills.map((category, index) => (
          <div key={index} className="space-y-6">
            <h3 className="text-2xl font-bold text-muted-foreground/80">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-4">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex items-center gap-3 rounded-xl border border-black/5 bg-black/5 px-5 py-3 shadow-sm backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10 hover:border-black/10 hover:bg-black/10"
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-6 w-6 object-contain"
                  />
                  <span className="text-sm font-medium text-foreground">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
