import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import Preloader from "./components/Preloader";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Oday Tarek - Portfolio</title>
        <meta name="description" content="Personal portfolio of Oday Tarek, showcasing projects, skills, and experience in web development." />
        <meta property="og:title" content="Oday Tarek - Portfolio" />
        <meta property="og:description" content="Personal portfolio of Oday Tarek, showcasing projects, skills, and experience in web development." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Preloader />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
