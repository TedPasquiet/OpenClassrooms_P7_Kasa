import React from "react";
import Logo from "../../assets/Images/.LOGO-1.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-container">
          <img src={Logo} alt="logo Kasa blanc"></img>
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
