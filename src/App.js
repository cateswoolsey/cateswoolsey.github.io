import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SplashScreen from "./transitions/SplashScreen";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import StudioArt from "./pages/StudioArt";
import DigitalArt from "./pages/DigitalArt";
import Resume from "./pages/Resume";
import "./styles/Index.css";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Trigger fade-out after 3 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Remove splash screen after fade-out animation (1 second)
      setTimeout(() => {
        setShowSplash(false);
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* Main content renders immediately */}
      <div className={`app-content ${showSplash ? "blurred" : "visible"}`}>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/studioart" element={<StudioArt />} />
          <Route path="/digitalart" element={<DigitalArt />} />
          <Route path="/resume" element={<Resume />}/>
        </Routes>
        <Footer />
      </div>

      {/* SplashScreen overlays content and fades out smoothly */}
      {showSplash && <SplashScreen fadeOut={fadeOut} />}
    </Router>
  );
}

export default App;
