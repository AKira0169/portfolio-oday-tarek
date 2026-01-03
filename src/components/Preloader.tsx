import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const languages = [
  "Hello",
  "Bonjour",
  "Hola",
  "Ciao",
  "Hallo",
  "こんにちは", // Japanese
  "안녕하세요", // Korean
  "你好", // Chinese
  "Olá",
  "مرحبا", // Arabic
  "नमस्ते", // Hindi
  "Привет", // Russian
  "السلام عليكم",
];

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === languages.length - 1) {
      setTimeout(() => {
        setIsVisible(false);
      }, 1000);
      return;
    }

    const timeout = setTimeout(
      () => {
        setIndex((prev) => prev + 1);
      },
      index === 0 ? 1000 : 250
    );

    return () => clearTimeout(timeout);
  }, [index]);

  const slideUp = {
    initial: {
      top: 0,
    },
    exit: {
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const, delay: 0.2 },
    },
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: { duration: 0.1 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.1 },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          variants={slideUp}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          {dimension.height > 0 && (
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                variants={opacity}
                initial="initial"
                animate="enter"
                exit="exit"
                className="flex items-center text-4xl font-bold text-white md:text-5xl lg:text-6xl"
              >
                <span className="mr-3 block h-3 w-3 rounded-full bg-white"></span>
                {languages[index]}
              </motion.p>
            </AnimatePresence>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
