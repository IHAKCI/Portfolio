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
           Bonjour, je m'appelle Hamza Kilinc et je suis en BTS SIO option SISR,
          une formation en deux ans orientée vers l’administration des systèmes et des réseaux.
          J’y apprends à installer, configurer et sécuriser des infrastructures informatiques,
          gérer des serveurs, administrer des réseaux et utiliser des commandes sur terminaux
          pour paramétrer des équipements comme les switchs ou les routeurs.
          J’ai également eu l’occasion de toucher au développement web, ce qui complète mes compétences.
          Ce BTS forme des techniciens capables de maintenir et d’optimiser des environnements informatiques
          tout en tenant compte des enjeux de cybersécurité et de gestion de projet.
          À l’avenir, je souhaite poursuivre mes études, au moins jusqu’au bachelor ou au master,
          afin de me spécialiser dans l’administration systèmes et réseaux pour viser une augmentations 
          de mes comptétences pour avoir une expertise dans le domaine .
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
