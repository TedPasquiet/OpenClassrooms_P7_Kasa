import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "../pages/Accueil/Accueil";
import Fiche from '../pages/Fichelogement/Fiche';
import APropos from "../pages/Apropos/Apropos";
import Erreur404 from "../pages/Error404/Error404";

export default function RoutesApp() {
  return (
    <Routes>
        <Route path="/" element={<Accueil />}/>
        <Route path="/logement/:id" element={<Fiche />}/>
        <Route path="/apropos" element={<APropos />}/>
        <Route path="/test" element={<Erreur404 />}/>
    </Routes>
  )
}
