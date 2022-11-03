import React from 'react'
import Style from "./Accueil.css"
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import AccueilImage from '../../Component/AccueilImage/AccueilImage'
import { Route } from 'react-router-dom'


export default function Accueil() {
  return (
    <>
    <Header/>
    <AccueilImage/>
    <Footer/>
    </>
  )
}
