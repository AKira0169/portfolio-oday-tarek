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
      viewport={{ amount: 0.5 }} // Adjust trigger point
      className="flex h-screen items-center justify-center"
      id="about"
    >
      <img
        src="./src/assets/WhatsApp Image 20ss24-07-26 at 21.21.30_03354213.jpg"
        alt="myImage"
        className="w-13 h-[50px] rounded-full"
      />
    </motion.section>
  );
}

export default About;
