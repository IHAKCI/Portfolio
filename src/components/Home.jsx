import React from "react";
import "../App.css";
import "../styles/Home.css";
import Header from "./Header";
import Footer from "./Footer";
import Preuve from "./Preuve";

function Home() {
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
  return (
    <div>
      <Header />
      <main className="main">
        <div className="presentation">
          <h1>Portfolio</h1>
          <h2>Hamza Kilinc</h2>
          <p>
            Bonjour en préparation de mon BTS SIO à l'institution des Chartreux, je vous présente mon portfolio qui regroupe mes projets scolaires et personnels.<br />
  Vous y trouverez également mon CV et mes coordonnées via LinkedIn pour me contacter.<br />
  Bonne visite !
          </p>
          {visible && (
  <button onClick={scrollToTop} className="scroll-top-btn">
    ↑
  </button>
)}
        </div>

        <p className="responsive">Version téléphone en travaux ;</p>
      </main>
      <Preuve />
      <Footer />
    </div>
  );
}

export default Home;
