import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
function Projects() {
  const sectionRef = useRef(null);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle scale transformations for each project
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const scale2 = useTransform(scrollYProgress, [0.1, 1], [1, 0.87]);
  const scale3 = useTransform(scrollYProgress, [0.2, 1], [1, 0.95]);
  const scale4 = useTransform(scrollYProgress, [0.3, 0.8], [1, 1]);

  // Dynamic top positions to decrease gaps as you scroll
  const top1 = useTransform(scrollYProgress, [0], ["8%"]);
  const top2 = useTransform(scrollYProgress, [0], ["10%"]);
  const top3 = useTransform(scrollYProgress, [0], ["13%"]);
  const top4 = useTransform(scrollYProgress, [0], ["20%"]);
  return (
    <div
      ref={sectionRef}
      className="relative flex h-[1700px] w-full max-w-[1000px] flex-col items-center bg-white md:h-[2100px]"
      id="projects"
    >
      <motion.div
        style={{ scale: scale1, top: top1 }}
        className="sticky flex h-[400px] w-full items-center rounded-[25px] bg-[#dfefd7] md:h-[500px]"
      >
        <div className="flex justify-between">
          <div className="content flex flex-col gap-4 px-10 md:w-1/2">
            <h1 className="text-4xl font-bold">Doctech</h1>
            <p className="text-lg text-gray-500">
              Developed a scalable clinical management system for healthcare
              facilities, including patient management, appointment scheduling,
              real-time notifications, billing, and secure user access.
            </p>
            <a
              href="https://doctech.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="me-2 mt-5 w-[100%] max-w-[300px] rounded-3xl bg-black px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-800"
            >
              View Project
            </a>
          </div>
          <div className="photos hidden h-1/2 w-1/2 flex-col items-center px-10 md:flex">
            <img
              className="w-full rounded-3xl"
              src="./Screenshot 2024-11-17 132029.png"
              alt="dashboard"
            />
            <div className="mt-4 flex justify-center gap-4">
              <img
                className="w-1/2 rounded-3xl"
                src="./Screenshot 2024-11-17 132045.png"
                alt="home"
              />
              <img
                className="w-1/2 rounded-3xl"
                src="./Screenshot 2024-11-17 132127.png"
                alt="profile"
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ scale: scale2, top: top2 }}
        className="sticky flex h-[500px] w-full items-center rounded-[25px] bg-[#f3d3b5] md:h-[500px]"
      >
        <div className="flex justify-between">
          <div className="content flex flex-col gap-4 px-10 md:w-1/2">
            <h1 className="text-4xl font-bold">Online Learning Platform</h1>
            <p className="text-lg text-gray-500">
              Created a dynamic online learning platform with robust course
              management, secure authentication, and integrated payment system.
              Utilized cutting-edge technologies to ensure a seamless and
              interactive user experience.
            </p>
            <a
              href="https://github.com/AKira0169/onlineLearningPlatFrom"
              target="_blank"
              rel="noopener noreferrer"
              className="me-2 mt-5 w-[100%] max-w-[300px] rounded-3xl bg-black px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-800"
            >
              View Project
            </a>
          </div>
          <div className="photos hidden h-1/2 w-1/2 flex-col items-center px-10 md:flex">
            <img
              className="w-full rounded-3xl"
              src="./Online Learning Platform with course management, secure authentication, and payment integration (1).png"
              alt="dashboard"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        style={{ scale: scale3, top: top3 }}
        className="sticky flex h-[400px] w-full items-center rounded-[25px] bg-[#decfe7] md:h-[500px]"
      >
        <div className="flex justify-between">
          <div className="content flex flex-col gap-4 px-10 md:w-1/2">
            <h1 className="text-4xl font-bold">Natours</h1>
            <p className="text-lg text-gray-500">
              Natours - You're going to fall in love with nature Natours is an
              immersive platform that offers stunning virtual tours of natural
              landscapes, inspiring a deeper appreciation for the environment.
            </p>
            <a
              href="https://github.com/AKira0169/TOURS"
              target="_blank"
              rel="noopener noreferrer"
              className="me-2 mt-5 w-[100%] max-w-[300px] rounded-3xl bg-black px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-800"
            >
              View Project
            </a>
          </div>
          <div className="photos hidden h-1/2 w-1/2 flex-col items-center px-10 md:flex">
            <img
              className="h-[400px] w-full rounded-3xl"
              src="./Screenshot 2024-11-17 230759.png"
              alt="dashboard"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        style={{ scale: scale4, top: top4 }}
        className="sticky flex h-[500px] w-full items-center rounded-[25px] bg-[#acd0e7] md:h-[500px]"
      >
        <div className="flex justify-between">
          <div className="content flex flex-col gap-4 px-10 md:w-1/2">
            <h1 className="text-4xl font-bold">The Wild Oasis</h1>
            <p className="text-lg text-gray-500">
              Developed and created a comprehensive booking platform that
              features dynamic front-end interactivity and robust back-end
              integration. This project leverages modern technologies to ensure
              a seamless user experience and efficient booking processes, making
              it easier for users to navigate and book their desired services
              effortlessly.
            </p>
            <a
              href="https://github.com/AKira0169/the-wild-oasis"
              target="_blank"
              rel="noopener noreferrer"
              className="me-2 mt-5 w-[100%] max-w-[300px] rounded-3xl bg-black px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-800"
            >
              View Project
            </a>
          </div>
          <div className="photos hidden h-1/2 w-1/2 flex-col items-center px-10 md:flex">
            <img
              className="h-[400px] w-full rounded-3xl"
              src="./VqTxhJXVio3kjREdQWycvgH8bE8.png"
              alt="dashboard"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
