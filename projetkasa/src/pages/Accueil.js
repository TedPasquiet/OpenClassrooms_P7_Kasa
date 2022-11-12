import React from "react";
import Style from "../assets/SCSS/main.scss";
import Header from "../Layouts/Header/Header";
import Footer from "../Layouts/Footer/Footer";
import Banniere from "../Component/Banniere/Banniere";
import { Route } from "react-router-dom";
import Tuile from "../Component/Tuile/Tuile";
import ListeLogement from "../assets/Back.json";

export default function Accueil() {
  return (
    <>
      <Header />
      <Banniere />
      <section className="Tuile-div-container">
        {ListeLogement.map((logement) => (
          <Tuile
            key={logement.id}
            id={logement.id}
            image={logement.cover}
            titre={logement.title}
            description={logement.description}
          />
        ))}
      </section>
      <Footer />
    </>
  );
}
