import React from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";

function Projets() {
  return (
    <div>
      <Header />
      <main>
        <h1>Portfolio</h1>
        <h2>Hamza</h2>
        <p>Je suis actuellement en BTS SIO option SISR (Solutions d'Infrastructure, Systèmes et Réseaux). 
J'ai obtenu en 2024 un Bac Général avec les spécialités Mathématiques et NSI (Numérique et 
Sciences Informatiques). Ces spécialités m'ont permis de développer une solide base en 
algorithmique, réseaux et programmation, et d'orienter naturellement mon parcours vers 
l'infrastructure et la cybersécurité.<br />
            Je souhaite poursuivre mes études après mon BTS. Mon objectif est d'intégrer l'école d'ingénieurs 
CPE Lyon dans la filière ICS (Informatique, Réseaux et Cybersécurité) afin de me spécialiser 
et d'évoluer vers des postes d'administrateur systèmes & réseaux, puis à terme vers la cybersécurité.<br />
            </p>
        <p className="responsive">Version téléphone en travaux ;)</p>
      </main>
      <Footer />
    </div>
  );
}

export default Projets;
