import { motion } from "framer-motion";
import TypingAnimation from "./TypingAnimation";

function Profile() {
  return (
    <motion.div
      className="backgrounddd mb-14 flex flex-col items-center justify-center gap-4"
      initial={{ opacity: 0, y: 100 }} // Start fully transparent and 100px down
      whileInView={{
        opacity: 1,
        y: 0, // Move to its regular position
        transition: { duration: 0.8 }, // Smooth transition
      }}
      viewport={{ amount: 0.5, once: true }} // Adjust trigger point
    >
      <img
        src="./WhatsApp Image 20ss24-07-26 at 21.21.30_03354213.jpg"
        alt="myImage"
        className="h-[105px] w-[105px] rounded-full"
      />
      <TypingAnimation />
    </motion.div>
  );
}

export default Profile;
