import React from 'react'
import Style from "./Error404.css"
import Header from "../../Component/Header/Header"
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <>
    <Header />
    <div className="page-404">
        <h1 className="titre-404">404</h1>
        <span className="description-404">Oups! La page que vous demandez n'existe pas.</span>
        <Link to='/' className='retour'>Retourner sur la page d'accueil</Link>
    </div>
    </>
  )
}
