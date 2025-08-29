import React from "react";

interface Project {
  title: string;
  description: string;
  link: string;
  mainImage: string;
  images?: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="content flex flex-col gap-4 px-10 w-full md:w-1/2">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-lg text-gray-500">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="me-2 mt-5 w-full max-w-[300px] rounded-3xl bg-black px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-linear-to-br focus:outline-hidden focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-800"
        >
          View Project
        </a>
      </div>
      <div className="photos flex h-1/2 w-full md:w-1/2 flex-col items-center px-10 mt-4 md:mt-0">
        <img
          className="w-full rounded-3xl"
          src={project.mainImage}
          alt="dashboard"
        />
        {project.images && (
          <div className="mt-4 flex justify-center gap-4">
            {project.images.map((image, index) => (
              <img
                key={index}
                className="w-1/2 rounded-3xl"
                src={image}
                alt={`project-image-${index}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;