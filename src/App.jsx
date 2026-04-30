import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Catalogue from "./components/Catalogue";
import Contact from "./components/Contact";
import Projets from "./components/Projets";
import Header from "./components/Header";
import Render from "./components/Render";
import Footer from "./components/Footer";
import Preuve from "./components/Preuve";

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  function ExternalRedirect({ to }) {
    useEffect(() => {
      window.location.href = to;
    }, [to]);
    return null;
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/Render" element={<Render />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/preuve" element={<Preuve />} />
          <Route path="/ppe1" element={<ExternalRedirect to="https://gest-one.netlify.app" />} />
        </Routes>

        {visible && (
          <button onClick={scrollToTop} className="scroll-top-btn">
            ↑
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;