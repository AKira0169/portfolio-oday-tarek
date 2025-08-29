import ScrollStack, {
  ScrollStackItem,
} from "../blocks/Components/ScrollStack/ScrollStack";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  link: string;
  mainImage: string;
  images?: string[];
}

const projects: Project[] = [
  {
    title: "Doctech",
    description:
      "Developed a scalable clinical management system for healthcare facilities, including patient management, appointment scheduling, real-time notifications, billing, and secure user access.",
    link: "https://doctech.nl",
    mainImage: "./Screenshot 2024-11-17 132029.png",
    images: [
      "./Screenshot 2024-11-17 132045.png",
      "./Screenshot 2024-11-17 132127.png",
    ],
  },
  {
    title: "Online Learning Platform",
    description:
      "Created a dynamic online learning platform with robust course management, secure authentication, and integrated payment system. Utilized cutting-edge technologies to ensure a seamless and interactive user experience.",
    link: "https://github.com/AKira0169/onlineLearningPlatFrom",
    mainImage:
      "./Online Learning Platform with course management, secure authentication, and payment integration (1).png",
  },
  {
    title: "Natours",
    description:
      "Natours - You're going to fall in love with nature Natours is an immersive platform that offers stunning virtual tours of natural landscapes, inspiring a deeper appreciation for the environment.",
    link: "https://github.com/AKira0169/TOURS",
    mainImage: "./Screenshot 2024-11-17 230759.png",
  },
  {
    title: "The Wild Oasis",
    description:
      "Developed and created a comprehensive booking platform that features dynamic front-end interactivity and robust back-end integration. This project leverages modern technologies to ensure a seamless user experience and efficient booking processes, making it easier for users to navigate and book their desired services effortlessly.",
    link: "https://github.com/AKira0169/the-wild-oasis",
    mainImage: "./VqTxhJXVio3kjREdQWycvgH8bE8.png",
  },
  {
    title: "Portfolio",
    description:
      "My personal portfolio website to showcase my skills and projects.",
    link: "https://github.com/AKira0169/portfolio-oday-tarek",
    mainImage: "./Screenshot 2024-11-17 132029.png",
  },
];

function Projects() {
  return (
    <div className="flex w-full flex-col justify-center">
      <ScrollStack>
        {projects.map((project, index) => (
          <ScrollStackItem key={index}>
            <ProjectCard project={project} />
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  );
}

export default Projects;
