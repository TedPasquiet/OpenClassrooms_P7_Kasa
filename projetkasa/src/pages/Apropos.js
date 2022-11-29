import React from "react";
import Header from "../Layouts/Header/Header";
import Banniere from "../Component/Banniere/Banniere";
import Dropdown from "../Component/Dropdown/Dropdown";
import Footer from "../Layouts/Footer/Footer"

export default function Apropos(Texte,principes) {
  return (
    <>
      <Header />
      <Banniere />
      <div className="pageContainer">
      <Dropdown Texte={"Fiabilité"} principes={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."} />
      <Dropdown Texte={"Respect"} principes={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>
      <Dropdown Texte={"Service"} principes={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}/>
      <Dropdown Texte={"Responsabilité"} principes={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}/>
      </div>
      <Footer/>
    </>
  );
}
