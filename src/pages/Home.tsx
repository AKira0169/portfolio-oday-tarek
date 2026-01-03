import Hero from "../components/Hero";
import FeaturedWorks from "../components/FeaturedWorks";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import Qualifications from "../components/Qualifications";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <WorkExperience />
      </div>
      <div id="about">
        <Qualifications />
      </div>
      <div id="projects">
        <FeaturedWorks />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default Home;
