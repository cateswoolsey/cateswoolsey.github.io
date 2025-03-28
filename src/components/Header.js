import React from "react";
import Navbar from "./Navbar"; 

export default function Header() {
  return (
    <header className="header-container bg-black">
      <div className="logo-container">
          <h1 className="glow-text-header">CATE SONG WOOLSEY</h1>
          <p className="glow-text-sub">Web Developer | Creative Coder</p>
      </div>
      <div className="navbar-container">
        <Navbar />
      </div>
    </header>
  );
}