import React, { useEffect, useState } from "react";
import ListeLogement from "../../assets/Back.json";
import _pinkBtn from "../../assets/SCSS/Components/_pinkBtn";

export default function tags() {
  const logementID = ListeLogement.id;

  return (
    <div>
      {ListeLogement.map((logement) => {
          <div className="logement" key={logement.id}>
            <em>{logement.tags}</em>
          </div>;
        })
      }
    </div>
  );
}
