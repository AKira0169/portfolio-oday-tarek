import { motion } from "framer-motion";
import ParallaxText from "./ParallaxText";
import {
  SiReact,
  SiRedux,
  SiReactquery,
  SiReactrouter,
  SiNestjs,
  SiMongodb,
  SiSocketdotio,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiRedis,
} from "react-icons/si";

const Slider = () => {
  const icons = [
    <SiReact className="text-blue-600" />,
    <SiRedux className="text-indigo-600" />,
    <SiReactquery className="text-pink-600" />,
    <SiReactrouter className="text-sky-600" />,
    <SiNestjs className="text-red-600" />,
    <SiMongodb className="text-green-600" />,
    <SiRedis className="text-red-600" />,
    <SiSocketdotio className="text-blue-600" />,
    <SiJavascript className="text-yellow-500" />,
    <SiTypescript className="text-blue-600" />,
    <SiNodedotjs className="text-green-600" />,
    <SiGit className="text-orange-600" />,
    <SiGithub className="text-black" />,
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="mb-10 max-w-[600px]"
    >
      <ParallaxText baseVelocity={1}>
        <ul className="flex gap-4">
          {icons.map((icon, index) => (
            <li key={index}>{icon}</li>
          ))}
        </ul>
      </ParallaxText>
    </motion.div>
  );

  // return (
  //   <div className="relative flex h-[200px] w-[200px] items-center justify-center overflow-hidden">
  //     {/* Animated Circle */}
  //     <motion.div
  //       className="absolute flex h-full w-full items-center justify-center rounded-full"
  //       animate={{ rotate: 360 }}
  //       transition={{
  //         repeat: Infinity,
  //         duration: 20,
  //         ease: "linear",
  //       }}
  //     >
  //       {icons.map((icon, index) => (
  //         <div
  //           key={index}
  //           className="absolute"
  //           style={{
  //             transform: `rotate(${(index / icons.length) * 360}deg) translate(80px) rotate(-${(index / icons.length) * 360}deg)`,
  //           }}
  //         >
  //           {icon}
  //         </div>
  //       ))}
  //     </motion.div>

  //     {/* Mask to hide the bottom half */}
  //     <div className="absolute left-0 top-1/2 h-1/2 w-full bg-white" />
  //   </div>
  // );
};

export default Slider;
