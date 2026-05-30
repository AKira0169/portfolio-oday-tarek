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
      <div id="home" className="scroll-mt-24">
        <Hero />
      </div>
      <ScrollReveal>
        <div id="skills" className="scroll-mt-24">
          <Skills />
        </div>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <div id="experience" className="scroll-mt-24">
          <WorkExperience />
        </div>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <div id="about" className="scroll-mt-24">
          <Qualifications />
        </div>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <div id="projects" className="scroll-mt-24">
          <FeaturedWorks />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div id="contact" className="scroll-mt-24">
          <Contact />
        </div>
      </ScrollReveal>
    </>
  );
};

export default Home;
