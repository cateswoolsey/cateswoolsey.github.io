
import '../pagestyles/digitalArtPage.css';
import { useEffect } from "react";

export default function DigitalArt() {
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
      <iframe
        src="https://cateswoolsey.github.io/metaballs/"
        title="Metaballs"
        allowFullScreen
      ></iframe>
    </div>

    <div className="project-frame fade-in-section">  
      <iframe
        src="https://cateswoolsey.github.io/circleTime/"
        title="Circles"
        allowFullScreen
      ></iframe>
    </div>

    <div className="project-frame fade-in-section">  
      <iframe
        src="https://cateswoolsey.github.io/starDance/"
        title="Circles"
        allowFullScreen
      ></iframe>
    </div>
</div>
  );
}