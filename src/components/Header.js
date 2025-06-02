import React from "react";
import Navbar from "./Navbar"; 

export default function Header() {
  return (
    <header className="header-container">
      <div>
          <h1>CATE SONG WOOLSEY</h1>
          <p>Web Developer | Creative Coder</p>
      </div>
      <div className="navbar-container">
        <Navbar />
      </div>
    </header>
  );
}