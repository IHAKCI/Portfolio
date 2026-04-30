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
          Hamza Kilinc
Étudiant en Systèmes et Réseaux (BTS SIO SISR)
Passionné par les infrastructures informatiques, je me spécialise dans l'installation, la configuration et la sécurisation des réseaux. 
De l'administration de serveurs au paramétrage d'équipements Cisco, je construis des environnements fiables et performants, avec une vision orientée cybersécurité.
          </p>
        </div>

        <p className="responsive">Version téléphone en travaux ;)</p>
      </main>
      <Preuve />
      <Footer />
    </div>
  );
}

export default Home;
