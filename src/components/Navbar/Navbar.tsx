import React from "react";
import "./navbar.css"

export default function Navbar() {
  return (
    <div className="nav">
      <h1 className="logo">Logotype</h1>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>example@site.com</li>
        <li>EN</li>
      </ul>
    </div>
  );
}
