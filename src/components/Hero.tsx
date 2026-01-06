import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ShinyText from "../blocks/TextAnimations/ShinyText/ShinyText";
import ShinyButton from "./ui/ShinyButton";
import Stack from "./Stack";
import profile2 from "/profile-images/profile-2.png";
import profile from "/profile-images/profile.png";
import cv from "/OdayTarek.pdf";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "5+", label: "Technologies" },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub className="h-5 w-5" />,
    href: "https://github.com/AKira0169",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn className="h-5 w-5" />,
    href: "https://linkedin.com/in/oday-tarek",
  },
];

const Hero = () => {
  const images = [
    <img src={profile} alt="Profile" className="h-full w-full object-cover" />,
    <img src={profile2} alt="Profile" className="h-full w-full object-cover" />,
  ];

  return (
    <section className="relative py-12 md:py-24">
      <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:justify-between">
        <div className="basis-2/3 text-center md:basis-3/5 md:text-left">
          <h1 className="text-foreground text-4xl leading-tight font-bold md:text-6xl">
            Hi, I'm Oday, <br />
            <ShinyText
              text="Full Stack Developer"
              speed={3}
              className="text-primary"
            />
          </h1>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed md:text-xl">
            I'm a developer based in Egypt with over 3 years of hands-on
            experience building scalable web applications. I specialize in
            modern JavaScript frameworks, with strong expertise in backend
            development using Node.js and NestJS, and in creating intuitive
            frontend with React and Vue.js. I enjoy designing microservices and
            cloud-native architectures that deliver high-performance, reliable
            products.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <ShinyButton href={cv} download>
              Download Resume
            </ShinyButton>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-black/5 text-foreground transition-all hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/10 hover:text-primary hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Stats Row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:justify-start">
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-3xl font-bold text-foreground md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
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
