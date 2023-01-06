import { React, useState } from "react";

export default function Dropdown({ Texte, principes, index }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  let toggleClassCheck = open ? "active" : null;
  return (
    <>
      <div className="Dropdown-container" key={{ index }}>
        <p className="Dropdown-p">{Texte}</p>
        <img
          alt="Flèche"
          src={require("../../assets/Images/arrow_back_ios-24px 2.png")}
          onClick={handleOpen}
          className={toggleClassCheck}
        />
      </div>
      {open ? (
        <div className="dropdownDiv" key={index}>
          {principes}
        </div>
      ) : null}
    </>
  );
}
