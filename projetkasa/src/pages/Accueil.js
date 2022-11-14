import React from "react";
import Header from "../Layouts/Header/Header";
import Footer from "../Layouts/Footer/Footer";
import Banniere from "../Component/Banniere/Banniere";
import { Link } from "react-router-dom";
import Tuile from "../Component/Tuile/Tuile";
import ListeLogement from "../assets/Back.json";

export default function Accueil() {
  return (
    <>
      <Header />
      <Banniere />
      <section className="Tuile-div-container">
        {ListeLogement.map((logement) => (
          <Link key={logement.id} to={`/logement/${logement.id}`}>
          <Tuile
            key={logement.id}
            id={logement.id}
            image={logement.cover}
            titre={logement.title}
            description={logement.description}
          />
          </Link>
        ))}
      </section>
      <Footer />
    </>
  );
}
