import React from "react";
import "../Styles/FormLeft.css";
import Fade from "react-reveal/Fade";

const ContactLeft = () => {
	return (
		<Fade up big>
			<div className="form-left">
				<div className="form-left-content">
					<h1 className="form-left-heading">
						Questions
						<br />
						Concerns
						<br />
						Opinions
					</h1>
					<p className="form-left-text"></p>
				</div>
			</div>
		</Fade>
	);
};

export default ContactLeft;
