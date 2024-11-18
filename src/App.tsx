import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./ui/PageNotFound";
import About from "./components/About";
import AllPages from "./ui/AllPages";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <BrowserRouter basename="/portfolio-oday-tarek/">
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<AllPages />} />
          <Route path="About" element={<About />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
