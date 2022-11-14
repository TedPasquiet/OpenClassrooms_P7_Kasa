import React from "react";
import Header from "../Layouts/Header/Header";
import PinkBtn from "../Component/PinkBtn/_pinkBtn";
import Dropdown from "../Component/Dropdown/Dropdown";
import { useParams } from "react-router-dom";
import ListeLogement from "../assets/Back.json";
import Carousel from "../Component/Carousel";

export default function Fiche() {
  // Récuparation ID du logement
  const { id } = useParams();
  const logementFiltre = ListeLogement.find(logement => logement.id === id)
  console.log(logementFiltre)
  // Définition de l'élément pinkBtn avec caractéristiques logement
  const logementFiltreEquipement = logementFiltre.equipments.map((Element,index) => {
    return <>{Element}<br/></>
  })
  const logementFiltreTags = logementFiltre.tags.map((Element,index) => {
    return Element
  })
const logementFiltreDescription = logementFiltre.description
const logementFiltreLocation = logementFiltre.location
const logementFiltreTitle = logementFiltre.title
const logementFiltreName = logementFiltre.host
const Test = Object.keys().map((Element) =>{
  return Element
})

  // Définition de l'élément Dropdown avec équipement

  // Image Carousel
  return (

    <>
      <>
        <Header />
        <Carousel/>
        <div className="intelContainer">
          <span className="intelContainerLogement">
          <h2>{logementFiltreTitle}</h2>
          <h3>{logementFiltreLocation}</h3>
          </span>
          <span className="intelContainerOwner">
            <span className="IntelContainerLandlord">
              <em className="Name">{Test}</em>
              <em className="Picture"></em>
            </span>
            <span className="IntelContainerRating">
              <p>S</p>
              <p>S</p>
              <p>S</p>
              <p>S</p>
            </span>
          </span>
        </div>
        <div className="pinkBtnContainer">
          {logementFiltreTags.map((Element) => (
            <PinkBtn Caracteristiques={Element}/>
          ))}
        </div>
        <div className="ButtonContainer">
          <div className="Dropdown-div">
            <Dropdown Texte={"Description"} principes={logementFiltreDescription}/>
            <Dropdown Texte={"Equipements"} principes={logementFiltreEquipement}/>
          </div>
        </div>
      </>
    </>
  );
}
