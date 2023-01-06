import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "../pages/Accueil";
import Fiche from "../pages/Fiche";
import APropos from "../pages/Apropos";
import Erreur404 from "../pages/Error404";

export default function RoutesApp() {
  return (
    <Routes>
      <Route exact path="/" element={<Accueil />} />
      <Route path={`/logement/:id`} element={<Fiche />} />
      <Route path="/apropos" element={<APropos />} />
      <Route path="*" element={<Erreur404 />} />
    </Routes>
  );
}
