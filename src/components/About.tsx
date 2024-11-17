import { motion } from "framer-motion";
function About() {
  return (
    <section className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Start fully transparent and 100px down
        whileInView={{
          opacity: 1,
          y: 0, // Move to its regular position
          transition: { duration: 0.8 }, // Smooth transition
        }}
        viewport={{ amount: 0.5 }} // Adjust trigger point
        className="flex flex-col items-center justify-center"
        id="about"
      >
        <h1 className="mb-10 text-3xl font-bold">About Me</h1>
        <div>
          <p className="max-w-[700px] text-xl font-semibold md:text-3xl">
            I'm Oday Tarek , 22 years old.I have 3 years of experience, And i'm
            a fast learner. I'm willing to gain more experience and learn new
            skills. I began learning web programming in 2021 through self-study
            and later completed my formal training at Route Center.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
