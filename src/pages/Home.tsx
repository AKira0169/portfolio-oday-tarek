import Hero from "../components/Hero";
import FeaturedWorks from "../components/FeaturedWorks";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import Qualifications from "../components/Qualifications";
import Contact from "../components/Contact";
import ScrollReveal from "../components/ScrollReveal";

const Home = () => {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <ScrollReveal>
        <div id="skills">
          <Skills />
        </div>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <div id="experience">
          <WorkExperience />
        </div>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <div id="about">
          <Qualifications />
        </div>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <div id="projects">
          <FeaturedWorks />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div id="contact">
          <Contact />
        </div>
      </ScrollReveal>
    </>
  );
};

export default Home;
