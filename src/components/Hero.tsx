import Threads from "../blocks/Backgrounds/Threads/Threads";
import profile from "/profile.png";

const Hero = () => {
  return (
    <section className="relative py-12 md:py-24">
      <div className="inset-0 -z-10 hidden md:absolute md:block">
        <Threads
          amplitude={10}
          color={[0.8, 0.6, 0.4]}
          distance={1}
          enableMouseInteraction={false}
        />
      </div>

      <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:justify-between">
        <div className="basis-2/3 text-center md:basis-3/5 md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
            Hi, I’m Oday, <br />
            Full Stack Developer
          </h1>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            I’m a developer with over 3 years of hands-on experience building
            scalable web applications. I specialize in the MERN stack and have
            strong expertise in backend development with Node.js and NestJS, as
            well as creating intuitive frontends with React. I enjoy working
            with microservices and cloud-native solutions to deliver
            high-performance, reliable products.
          </p>

          <div className="mt-8">
            <a
              href="/OdayTarek.pdf"
              download
              className="rounded-md bg-red-500 px-6 py-3 font-medium text-white"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img
            src={profile}
            alt="Oday Tarek"
            className="h-48 w-48 rounded-full object-cover md:h-64 md:w-64"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
