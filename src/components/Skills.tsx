import { motion } from "framer-motion";

import {
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Slider from "./Slider";

function Skills() {
  return (
    <>
      <Slider />

      <div className="flex w-full max-w-[600px] flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -100, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold"
        >
          Skills
        </motion.h1>
        <div className="mt-10 flex h-screen max-h-[244px] w-full justify-center gap-28">
          <motion.div
            initial={{ opacity: 0, y: -100, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center gap-2"
          >
            <h2 className="text-3xl font-semibold">Frontend</h2>
            <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2">
              <li>
                <span>
                  <SiReact className="text-lg text-blue-600 md:text-3xl" />
                </span>
                <span className="md:text-xl"> React</span>
              </li>
              <li>
                <SiRedux className="text-lg text-indigo-600 md:text-3xl" />
                <span className="md:text-xl">Redux</span>
              </li>
              <li>
                <SiReactquery className="text-lg text-pink-600 md:text-3xl" />
                <span className="md:text-xl">React Query</span>
              </li>
              <li>
                <SiTailwindcss className="text-lg text-sky-600 md:text-3xl" />
                <span className="md:text-xl">Tailwind</span>
              </li>
              <li>
                <SiTypescript className="text-lg text-blue-600 md:text-3xl" />
                <span className="md:text-xl">Typescript</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col items-center gap-2"
          >
            <h2 className="text-3xl font-semibold">Backend</h2>
            <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2">
              <li>
                <SiExpress className="text-lg text-blue-600 md:text-3xl" />
                <span className="md:text-xl">Express.js</span>
              </li>
              <li>
                <SiNodedotjs className="text-lg text-green-600 md:text-3xl" />
                <span className="md:text-xl">Node.js</span>
              </li>
              <li>
                <SiMongodb className="text-lg text-green-600 md:text-3xl" />
                <span className="md:text-xl">MongoDB</span>
              </li>
              <li>
                <SiRedis className="text-lg text-red-600 md:text-3xl" />
                <span className="md:text-xl">Redis</span>
              </li>
              <li>
                <SiSocketdotio className="text-lg text-blue-600 md:text-3xl" />
                <span className="md:text-xl">Socket.io</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Skills;
