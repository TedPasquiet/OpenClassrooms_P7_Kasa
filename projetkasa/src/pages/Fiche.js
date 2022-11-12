import React from "react";
import Style from "../assets/SCSS/main.scss";
import Header from "../Layouts/Header/Header";
import PinkBtn from "../Component/PinkBtn/_pinkBtn";
import Dropdown from "../Component/Dropdown/Dropdown";
import LogementListe from "../assets/Back.json";
export default function Fiche() {
  return (
    <>
      <Header />
      <div className="FicheContainer">
        <img src={require("../assets/Images/IMGAccueil.png")} />
      </div>
      <div className="ButtonContainer">
        <PinkBtn Caracteristiques={"Logement"} />
        <PinkBtn Caracteristiques={"Canal"} />
        <PinkBtn Caracteristiques={"Paris 10"} />
      </div>
      <div className="Dropdown-div">
        <Dropdown description={"Description"} equipement={"Equipements"} />
      </div>
    </>
  );
}
