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
      <h2>ABOUT ME:</h2>
      <p>
        I am a graduating senior at Middlebury College, majoring in Computer Science and minoring in the History of Art and Architecture. My interests lie at the intersection of art, technology, and growth — exploring how creativity and innovation can drive meaningful experiences. With a background in both technical problem-solving and artistic analysis, I am passionate about designing and building solutions that blend functionality with aesthetics. I am eager to continue learning, collaborating, and contributing to projects that push the boundaries of both fields.
      </p>
    </div>
  </div>
    </>
  );
}


export default Home;
