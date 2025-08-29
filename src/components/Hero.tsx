import profile from "/profile.png";

const Hero = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:justify-between">
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
            Hi, I am John, <br />
            Creative Technologist
          </h1>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="rounded-md bg-red-500 px-6 py-3 font-medium text-white"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img
            src={profile}
            alt="John"
            className="h-48 w-48 rounded-full object-cover md:h-64 md:w-64"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
