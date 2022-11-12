import React from "react";
import Header from "../Layouts/Header/Header";
import PinkBtn from "../Component/PinkBtn/_pinkBtn";
import Dropdown from "../Component/Dropdown/Dropdown";


export default function Fiche() {
  return (
    <>
      <Header />
      <div className="FicheContainer">
        <img alt="Description" src={require("../assets/Images/IMGAccueil.png")} />
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
