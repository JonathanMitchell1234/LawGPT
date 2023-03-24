import React from "react";
import "../Styles/Hero.css";
import columns from "../Media/columns.mp4";
import GavelIcon from '@mui/icons-material/Gavel';

const Hero = () => {
  return (
    <div className="hero-container">
      <video className="hero-video" src={columns} autoPlay loop muted />
      <div className="hero-content">
        <p className="hero-text">Welcome to LawGPT <GavelIcon style={{fontSize: "60px"}}/></p>
        <p className="hero-subtext">A GPT-3.5 Turbo Powered Legal Assistant</p>
        <button className="hero-button">Get Started</button>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Hero;
