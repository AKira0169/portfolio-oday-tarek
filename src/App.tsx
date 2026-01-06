import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import Preloader from "./components/Preloader";

const SITE_URL = "https://AKira0169.github.io/portfolio-oday-tarek";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Oday Tarek",
  url: SITE_URL,
  jobTitle: "Full-Stack Developer",
  sameAs: [
    "https://github.com/AKira0169",
    "https://linkedin.com/in/odaytarek",
  ],
  knowsAbout: [
    "React",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Web Development",
  ],
};

const App = () => {
  return (
    <>
      <Helmet>
        <title>Oday Tarek | Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Full-stack developer specializing in React, Node.js, and modern web technologies. View my projects, skills, and professional experience."
        />
        <link rel="canonical" href={`${SITE_URL}/`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta
          property="og:title"
          content="Oday Tarek | Full-Stack Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Full-stack developer specializing in React, Node.js, and modern web technologies. View my projects, skills, and professional experience."
        />
        <meta property="og:image" content={`${SITE_URL}/logo.png`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${SITE_URL}/`} />
        <meta
          name="twitter:title"
          content="Oday Tarek | Full-Stack Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Full-stack developer specializing in React, Node.js, and modern web technologies. View my projects, skills, and professional experience."
        />
        <meta name="twitter:image" content={`${SITE_URL}/logo.png`} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
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
