import { motion } from "framer-motion";
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
    <SiReact />,
    <SiRedux />,
    <SiReactquery />,
    <SiReactrouter />,
    <SiNestjs />,
    <SiMongodb />,
    <SiRedis />,
    <SiSocketdotio />,
    <SiJavascript />,
    <SiTypescript />,
    <SiNodedotjs />,
    <SiGit />,
    <SiGithub />,
  ];

  return (
    <div className="relative flex h-[200px] w-[200px] items-center justify-center overflow-hidden">
      {/* Animated Circle */}
      <motion.div
        className="absolute flex h-full w-full items-center justify-center rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {icons.map((icon, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              transform: `rotate(${(index / icons.length) * 360}deg) translate(80px) rotate(-${(index / icons.length) * 360}deg)`,
            }}
          >
            {icon}
          </div>
        ))}
      </motion.div>

      {/* Mask to hide the bottom half */}
      <div className="absolute left-0 top-1/2 h-1/2 w-full bg-white" />
    </div>
  );
};

export default Slider;
