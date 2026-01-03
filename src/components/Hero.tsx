import Magnet from "../blocks/Animations/Magnet/Magnet";
import ShinyText from "../blocks/TextAnimations/ShinyText/ShinyText";
import profile from "/profile.png";
import cv from "/OdayTarek.pdf";

const Hero = () => {
  return (
    <section className="relative py-12 md:py-24">
      <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:justify-between">
        <div className="basis-2/3 text-center md:basis-3/5 md:text-left">
          <h1 className="text-4xl font-bold text-foreground md:text-6xl leading-tight">
            Hi, I’m Oday, <br />
            <ShinyText text="Full Stack Developer" speed={3} className="text-primary" />
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl leading-relaxed">
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
        <div className="flex-shrink-0 relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-20 animate-pulse"></div>
          <img
            src={profile}
            alt="Oday Tarek"
            className="relative h-48 w-48 rounded-full object-cover border-2 border-white/10 shadow-2xl md:h-64 md:w-64"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
