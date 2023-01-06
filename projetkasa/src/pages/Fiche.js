import React from "react";
import Header from "../Layouts/Header/Header";
import PinkBtn from "../Component/PinkBtn/_pinkBtn";
import Dropdown from "../Component/Dropdown/Dropdown";
import { useParams } from "react-router-dom";
import ListeLogement from "../assets/Back.json";
import Carousel from "../Component/Carousel/Carousel";
import Star from "../Component/Star/Star";
import Footer from "../Layouts/Footer/Footer";
import ErrorPage from "./Error404";

export default function Fiche() {
  // Récuparation ID du logement
  const { id } = useParams();
  const logementFiltre = ListeLogement.find((logement) => logement.id === id);
  if (logementFiltre === undefined) {
    return <ErrorPage />;
  }
  // Définition de l'élément pinkBtn avec caractéristiques logement
  const logementFiltreEquipement = logementFiltre.equipments.map(
    (Element, index) => {
      return (
        <>
          <p className={"dropdownDiv-Text"} key={index}>
            {Element}
          </p>
        </>
      );
    }
  );
  // Définition du nom + hachage nom prénom
  const logementFiltreName = logementFiltre.host.name;
  const slice = logementFiltreName.split(/(\s+)/);
  const first = slice[0];
  const last = slice[2];

  return (
    <>
      <main>
        <Header />
        <Carousel slides={logementFiltre.pictures} />
        <div className="intelContainer">
          <div className="intelContainerLogement">
            <h2>{logementFiltre.title}</h2>
            <h3>{logementFiltre.location}</h3>
            <span className="pinkBtnContainer">
              {logementFiltre.tags.map((Element, index) => (
                <PinkBtn Caracteristiques={Element} key={index} />
              ))}
            </span>
          </div>
          <div className="intelContainerOwner">
            <span className="IntelContainerLandlord">
              <em className="Name">
                {first} <br /> {last}
              </em>
              <img
                className="Picture"
                src={logementFiltre.host.picture}
                alt={logementFiltreName}
              />
            </span>
            <Star ratings={logementFiltre.rating} />
          </div>
        </div>
        <div className="ButtonContainer">
          <div className="Dropdown-div">
            <Dropdown
              Texte={"Description"}
              principes={
                <p className={"dropdownDiv-Text"}>
                  {logementFiltre.description}
                </p>
              }
            />
          </div>
          <div className="Dropdown-div">
            <Dropdown
              Texte={"Equipements"}
              principes={logementFiltreEquipement}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
