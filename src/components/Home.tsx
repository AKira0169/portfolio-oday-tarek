import { motion } from "framer-motion";
import Slider from "./Slider";
import TypingAnimation from "./TypingAnimation";

const Home = () => {
  return (
    <div
      className="backgrounddd flex flex-col items-center justify-center"
      id="home"
    >
      <motion.section
        className="mb-14 flex flex-col items-center justify-center gap-4"
        initial={{ opacity: 0, y: 100 }} // Start fully transparent and 100px down
        whileInView={{
          opacity: 1,
          y: 0, // Move to its regular position
          transition: { duration: 0.8 }, // Smooth transition
        }}
        viewport={{ amount: 0.5 }} // Adjust trigger point
      >
        <img
          src="./src/assets/WhatsApp Image 20ss24-07-26 at 21.21.30_03354213.jpg"
          alt="myImage"
          className="h-[105px] w-[105px] rounded-full"
        />
        <TypingAnimation />
      </motion.section>
      <Slider />
    </div>
  );
};

export default Home;
