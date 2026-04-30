import React from "react";
import "../App.css";
import "../styles/Home.css";
import Header from "./Header";
import Footer from "./Footer";
import Preuve from "./Preuve";

function Home() {
  return (
    <div>
      <Header />
      <main className="main">
        <div className="presentation">
          <h1>Portfolio</h1>
          <h2>Hamza</h2>
          <p>
            Bonjour en préparation de mon BTS SIO à l'institution des Chartreux, je vous présente mon portfolio qui regroupe mes projets scolaires et personnels.<br />
  Vous y trouverez également mon CV et mes coordonnées pour me contacter.<br />
  Bonne visite !
          </p>
        </div>

        <p className="responsive">Version téléphone en travaux ;</p>
      </main>
      <Preuve />
      <Footer />
    </div>
  );
}

export default Home;
