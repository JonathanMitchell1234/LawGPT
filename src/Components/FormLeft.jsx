import React from "react";
import "../Styles/FormLeft.css";
import Fade from "react-reveal/Fade";

const FormLeft = () => {
    return (
		<Fade up big>
			<div className="form-left">
				<div className="form-left-content">
					<h1 className="form-left-heading">
						Equality
						<br />
						through
						<br />
						Technology.
					</h1>
					<p className="form-left-text"></p>
				</div>
			</div>
		</Fade>
	);
    }

export default FormLeft;