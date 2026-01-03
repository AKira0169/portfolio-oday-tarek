import Magnet from "../blocks/Animations/Magnet/Magnet";
import ShinyText from "../blocks/TextAnimations/ShinyText/ShinyText";
import Stack from "./Stack";
import profile from "/profile-images/profile.png";
import profile2 from "/profile-images/profile-2.png";
import cv from "/OdayTarek.pdf";

const Hero = () => {
  const images = [
    <img src={profile2} alt="Profile" className="h-full w-full object-cover" />,
    <img src={profile} alt="Profile" className="h-full w-full object-cover" />,
  ];

  return (
    <section className="relative py-12 md:py-24">
      <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:justify-between">
        <div className="basis-2/3 text-center md:basis-3/5 md:text-left">
          <h1 className="text-foreground text-4xl leading-tight font-bold md:text-6xl">
            Hi, I’m Oday, <br />
            <ShinyText
              text="Full Stack Developer"
              speed={3}
              className="text-primary"
            />
          </h1>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed md:text-xl">
            I’m a developer with over 3 years of hands-on experience building
            scalable web applications. I specialize in modern JavaScript
            frameworks, with strong expertise in backend development using
            Node.js and NestJS, and in creating intuitive frontend with React
            and Vue.js. I enjoy designing microservices and cloud-native
            architectures that deliver high-performance, reliable products.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <Magnet>
              <a
                href={cv}
                download
                className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 dark:bg-white dark:text-black dark:shadow-[0_0_20px_rgba(255,255,255,0.3)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
              >
                Download Resume
              </a>
            </Magnet>
          </div>
        </div>
        <div className="relative h-60 w-60 md:h-80 md:w-80">
          <Stack
            cards={images}
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
            animationConfig={{ stiffness: 200, damping: 20 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
