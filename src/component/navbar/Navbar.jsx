import React, { useRef, useState } from "react";
import "./navbar.css";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import logo from "../../assets/freelogo.avif"; 
import mountainsVideo from "../../assets/mountains.mp4";

const Navbars = () => {
  const videoRef = useRef(null);
  const [showControls, setShowControls] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleFullscreen = () => {
    const videoElement = videoRef.current;

    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) {
      videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) {
      videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) {
      videoElement.msRequestFullscreen();
    }

    setShowControls(!showControls);

    if (showControls) {
      document.exitFullscreen();
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="hero-section">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <img src={logo} className="navbar-logo" alt="" />
            <div
              className={`overlay ${menuOpen ? "show" : ""}`}
              onClick={toggleMenu}
            >
              <div className="centered-navbar">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="#solution" className="nav-link">
                      Our Solution
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#about" className="nav-link">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#leadership" className="nav-link">
                      Our Leadership
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#touch" className="nav-link">
                      Get In Touch
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-icons">
              <div className="twitter-icons">
                <RiTwitterXLine />
              </div>
              <div className="linkedin-icons">
                <FaLinkedinIn />
              </div>
              <div
              className="navbar-toggler"
              onClick={toggleMenu}
            >
              <LuMenu />
            </div>
            </div>
          </div>
        </nav>
        <div className="video-container">
          <video
            autoPlay
            muted
            ref={videoRef}
            controls={showControls}
            onClick={toggleFullscreen}
          >
            <source src={mountainsVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default Navbars;


