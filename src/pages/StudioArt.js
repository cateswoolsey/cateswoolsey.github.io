import React from "react";
import { useEffect } from "react";

import '../pagestyles/studioArtPage.css';
import foodImage from '../assets/food.png';
import abeImage from '../assets/abe.jpg';
import nighthawkImage from '../assets/nighthawk.jpg';
import orange from '../assets/orange.png';
import cat from '../assets/cat.png';
import dog1 from '../assets/dog1.jpg';
import dog2 from '../assets/dog2.jpg';
import otters from '../assets/otters.png';
import bike from '../assets/bike.png';
import mona from '../assets/mona.png';
import beach from '../assets/beach.jpg';

export default function StudioArt() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    sections.forEach(section => observer.observe(section));
  
    return () => observer.disconnect();
  }, []);

  return (
    <div className="digital-art-page">

      <div className="project-frame fade-in-section">
        <img src={abeImage} alt="Abraham Lincoln Sketch" className="project-thumbnail-abe" />
      </div>


      <div className="project-frame fade-in-section">
        <img src={cat} alt="Abe Lincoln" className="project-thumbnail-abe" />
      </div>

      <div className="project-frame fade-in-section">
        <img src={mona} alt="Abe Lincoln" className="project-thumbnail-abe" />
      </div>

      <div className="project-frame fade-in-section">
        <img src={dog1} alt="Abe Lincoln" className="project-thumbnail-abe" />
      </div>

      <div className="project-frame fade-in-section">
        <img src={nighthawkImage} alt="Nighthawk" className="project-thumbnail-abe" />
      </div>

      <div className="project-frame fade-in-section">
        <img src={orange} alt="Orange" className="project-thumbnail-abe" />
      </div>

      <div className="project-frame fade-in-section">
        <img src={foodImage} alt="Food" className="project-thumbnail-abe" />
      </div>

      <div className="project-frame fade-in-section">
        <img src={otters} alt="Abe Lincoln" className="project-thumbnail-abe" />
      </div>

      <div className="project-frame fade-in-section">
        <img src={dog2} alt="Abe Lincoln" className="project-thumbnail-abe" />
      </div>

      <div className="project-frame fade-in-section">
        <img src={beach} alt="Abe Lincoln" className="project-thumbnail-abe" />
      </div>

      <div className="project-frame fade-in-section">
        <img src={bike} alt="Abe Lincoln" className="project-thumbnail-abe" />
      </div>

    </div>
  );
}
