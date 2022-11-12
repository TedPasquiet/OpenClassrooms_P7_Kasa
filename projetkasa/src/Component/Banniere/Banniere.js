import React from 'react'


export default function AccueilImage() {
  return (
    <div className='AcceuilImageDiv' alt="rivages rocheux avec forêt">
        <img src={require("../../assets/Images/IMGAccueil.png")} />
        <div className="banniere-sombre"></div>
        <h2>Chez vous, partout et ailleurs</h2>
    </div>
  )
}
