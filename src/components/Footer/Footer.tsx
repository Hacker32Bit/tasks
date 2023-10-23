import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="logo">
          <h1>Logotype</h1>
        </div>
        <div className="links">
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
          <ul>
            <li>example@site.com</li>
            <li>EN</li>
          </ul>
        </div>
      </div>
      <div className="copy">
        <span>Copyright 2023 by Gektor Gevorgyan. All Rights Reserved.</span>
      </div>
    </div>
  );
}
