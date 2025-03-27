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
        <div className="project-content">
          <iframe
            src="https://cateswoolsey.github.io/metaballs/"
            title="Metaballs"
            width="800"
            height="400"
            allowFullScreen
          ></iframe>
          <div className="project-caption">
            <h3>Metaballs</h3>
            <p>
              An experiment in organic motion using marching squares 
              to simulate fluid-like blobs.
            </p>
          </div>
        </div>
      </div>

      <div className="project-frame fade-in-section">
        <div className="project-content">
          <iframe
            src="https://cateswoolsey.github.io/circleTime/"
            title="Circles"
            width="800"
            height="400"
            allowFullScreen
          ></iframe>
          <div className="project-caption">
            <h3>Circle Time</h3>
            <p>
              A dynamic time visualization that uses ripples and pulsing 
              colors to represent time. Every second, a new circle appears 
              and shifts its color every 10 seconds through a rainbow spectrum. 
              Completing all six colors marks one minute. Ripple size increases 
              with the hour, and fading ripples capture time’s fleeting nature.
            </p>
          </div>
        </div>
      </div>

      <div className="project-frame fade-in-section">
        <div className="project-content">
          <iframe
            src="https://cateswoolsey.github.io/starDance/"
            title="Star Dance"
            width="800"
            height="400"
            allowFullScreen
          ></iframe>
          <div className="project-caption">
            <h3>A BOX OF STARS</h3>
            <p>
              A generative, audio-reactive experience where stars pulsate 
              and shift in response to space-themed music. <br />
              <br />
              Click the image 
              and press "p" to play or pause. Drag to pan around, while zooming 
              in and out to explore the galaxy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
