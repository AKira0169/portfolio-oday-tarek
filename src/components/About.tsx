import { motion } from "framer-motion";
function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }} // Start fully transparent and 100px down
      whileInView={{
        opacity: 1,
        y: 0, // Move to its regular position
        transition: { duration: 0.8 }, // Smooth transition
      }}
      viewport={{ amount: 0.3, once: true }} // Adjust trigger point
      className="flex flex-col items-center justify-start"
      id="about"
    >
      <h1 className="mb-10 text-3xl font-bold">About Me</h1>
      <div className="flex flex-col items-center justify-between gap-4 lg:w-[1200px] lg:flex-row">
        <div className="flex w-full flex-col items-start justify-center gap-10 px-10 md:w-1/2 md:px-0">
          <h3 className="bg-linear-to-r from-green-500 to-green-700 bg-clip-text text-2xl font-bold text-transparent md:text-4xl">
            Who I am
          </h3>
          <p className="text-base font-semibold md:text-2xl">
            My name is Oday Tarek. I am a professional and enthusiastic
            programmer in my daily life. I am a quick learner with a
            self-learning attitude. I love to learn and explore new technologies
            and am passionate about problem-solving. I love almost all the
            stacks of web application development and love to make the web more
            open to the world. My core skill is based on JavaScript and I love
            to do most of the things using JavaScript. I am available for any
            kind of job opportunity that suits my skills and interests.
          </p>
        </div>
        <div className="flex h-[400px] items-center justify-center md:flex md:w-1/2">
          <motion.div
            animate={{
              y: [0, 5, -5, 0],
            }}
            transition={{
              duration: 1, // 2 seconds for a full cycle
              repeat: Infinity, // Infinite loop
              repeatType: "loop", // Restarts after completion
            }}
            className="relative h-[200px] w-[300px]"
          >
            {/* PC Image */}
            <img
              className="absolute inset-0 z-0 h-full w-full object-contain"
              src="./pc.png"
              alt="pc"
            />
            {/* Pop Image */}
            <motion.img
              className="absolute z-10"
              src="./pop.png"
              alt="pop"
              style={{
                left: "50%", // Center horizontally
                top: "15%", // Position it dynamically relative to the container
                transform: "translate(-50%, -30%)", // Adjust to keep it centered
              }}
              animate={{
                scale: [0, 1.2, 1, 1, 1.2, 0], // Add an extra 1 to hold at scale 1
              }}
              transition={{
                duration: 3, // Increase the total duration
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
