import React from "react";
import "../styles/SplashStyle.css";

function SplashScreen({ fadeOut }) {
  return (
    <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>
      <h1 className="splash-text welcome-glow-text">WELCOME</h1>
    </div>
  );
}

export default SplashScreen;


