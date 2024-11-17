import Profile from "./Profile";
import Skills from "./Skills";
import Slider from "./Slider";

const Home = () => {
  return (
    <section
      className="flex max-w-[600px] flex-col items-center justify-center"
      id="home"
    >
      <Profile />
      <Slider />
      <Skills />
    </section>
  );
};

export default Home;
