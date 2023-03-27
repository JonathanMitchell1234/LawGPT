import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

const ButtonAppBar = () => {
	function updateMenu() {
		if (document.getElementById("responsive-menu").checked === true) {
			document.getElementById("menu").style.borderBottomRightRadius = "0";
			document.getElementById("menu").style.borderBottomLeftRadius = "0";
		} else {
			document.getElementById("menu").style.borderRadius = "0px";
		}
	}

	return (
		<>
			<nav id="menu">
				<input type="checkbox" id="responsive-menu" onClick={updateMenu} />
				<label htmlFor="responsive-menu"></label>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/Form">LawGPT</Link>
					</li>
					<li>
						<Link to="/Contact">Contact Us</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default ButtonAppBar;
