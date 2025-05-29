import React from "react";
import me from '../assets/photo.png';

function Home() {
  return (
    <>
      <div>
      </div>
      <div className="main-content">
    <img src={me} alt="Cate Woolsey" className="about-image" />
    
    <div className="about-text">
      <h2>About Me:</h2>
      <p>
        I recently graduated summa cum laude and was inducted into the Phi Beta Kappa Society at Middlebury College, where I majored in Computer Science and minored in Art and Architectural Studies. My interests lie at the intersection of art, technology, and growth — exploring how creativity and innovation can drive meaningful experiences. With a background in both technical problem-solving and artistic analysis, I am passionate about designing and building solutions that blend functionality with aesthetics. I am eager to continue learning, collaborating, and contributing to projects that push the boundaries of both fields.
      </p>
    </div>
  </div>
    </>
  );
}
export default Home;
