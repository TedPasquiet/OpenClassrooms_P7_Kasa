import React from "react";
import Style from "./Header.css";
import Logo from "../../assets/.LOGO.png"
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <header>
      <img src={Logo} alt="logo Kasa rouge"></img>
      <div className="Header-div">
      <Link to='/'>Accueil</Link>
      <Link to="/apropos">A Propos</Link>
      </div>
    </header>
  );
}
