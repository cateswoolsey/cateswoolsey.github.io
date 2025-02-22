import React from "react";
import "../styles/SplashStyle.css";

function SplashScreen({ fadeOut }) {
  return (
    <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>
      <h1 className="splash-text">Hello, World!</h1>
    </div>
  );
}

export default SplashScreen;
