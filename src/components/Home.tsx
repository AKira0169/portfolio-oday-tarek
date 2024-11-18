import Profile from "./Profile";
import Skills from "./Skills";

const Home = () => {
  return (
    <section
      className="flex max-w-[600px] flex-col items-center justify-center"
      id="home"
    >
      <Profile />
      <Skills />
    </section>
  );
};

export default Home;
