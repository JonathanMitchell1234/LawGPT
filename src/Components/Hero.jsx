import React from "react";
import "../Styles/Hero.css";
import columns from "../Media/columns.mp4";
import GavelIcon from '@mui/icons-material/Gavel';
import { RoughNotation} from "react-rough-notation";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
		<div className="hero-container">
			<video className="hero-video" src={columns} autoPlay loop muted />
			<div className="hero-content">
				<p className="hero-text">
					<RoughNotation
						type="highlight"
						show={true}
						color={"yellow"}
						animationDelay={200}
						animationDuration={3000}
						strokeWidth={0}
						interations={10}
					>
						Welcome to LawGPT <GavelIcon style={{ fontSize: "60px" }} />
					</RoughNotation>
				</p>
				<p className="hero-subtext">
					<RoughNotation type="box" show={true} color={"red"} animationDelay={3000} animationDuration={3000} strokeWidth={5}>
						A GPT-3.5 Turbo Powered Legal Assistant
					</RoughNotation>
				</p>
				<Fade bottom>
					<Link to="/Form">
						<button className="hero-button"> Get Started</button>
					</Link>
				</Fade>
			</div>
			<div className="overlay"></div>
		</div>
  );
};

export default Hero;
