import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useTransform,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 1 }: ParallaxProps) {
  const baseX = useMotionValue(0);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    const moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  return (
    <div className="flex w-[300px] overflow-hidden whitespace-nowrap md:w-[400px] lg:w-[600px]">
      <motion.div
        className="flex space-x-6 text-4xl font-bold uppercase"
        style={{ x }}
      >
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default ParallaxText;
