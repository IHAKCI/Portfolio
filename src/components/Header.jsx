import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css"

const Header = () => {
  return (
    <header>
      <div className="link-left-container">
        <NavLink exact to="/" activeClassName="active">
          Accueil
        </NavLink>
        <NavLink to="/Catalogue" activeClassName="active">
          Projets Scolaire
        </NavLink>
      </div>
      {/* <NavLink to="/">
        {" "}
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQE585ZqeKylIQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713864554443?e=1752105600&v=beta&t=GqxF4mCK6MqBVQji9FRnoUHurQG8H1qiL9TLflv-pnE"
          alt="logo"
        />
      </NavLink> */}
      <div className="link-right-container">
        {/* <NavLink to="/Render" target="_blank" activeClassName="active">CV</NavLink> */}
        <a
          href="https://drive.google.com/file/d/1cBrY8gqkDC4jr4Pd8NVTupuYeDhJoCtx/view?usp=drive_link"
          rel="noreferrer"
          target="_blank"
        >
          CV
        </a>
        <a
          href="https://drive.google.com/file/d/12JRQcbuqH-qxLijB4acnJifAJGKx2GIa/view?usp=drive_link"
          rel="noreferrer"
          target="_blank"
        >
          Tableau de Synthèse
        </a>
        
      </div>
    </header>
  );
};

export default Header;
