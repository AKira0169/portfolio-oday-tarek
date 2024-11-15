import Header from "./Header";
import Home from "../components/Home";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

function AppLayout() {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr] gap-32">
      <Header />
      <main>
        <Home />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default AppLayout;
