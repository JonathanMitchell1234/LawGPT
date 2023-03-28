import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import FAQ from "./FormLeft";
import "../Styles/Form.css";
import ContactLeft from "./ContactLeft";


function ChatGPT() {
    const [status, setStatus] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		// get the input fields
		const form = e.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				setStatus("SUCCESS");
			} else {
				setStatus("ERROR");
			}
		};
		xhr.send(data);
	};


	return (
		<>
			<div>
				<ContactLeft />
			</div>
			<Fade left>
				<div className="formContainer">
					<form onSubmit={handleSubmit} className="formSubmit" action="https://formspree.io/mknaneyv" method="POST">
						<div className="formGroup">
							<input type="text" required="true" placeholder="Name" id="state" name="state" />
						</div>
						<div className="formGroup">
							<input type="text" required="true" placeholder="E-mail" id="charge" name="charge" />
						</div>
						<div className="formGroup">
							<textarea placeholder="Message" id="otherInfo" name="otherInfo" style={{height: "500px"}} />
						</div>
						<button type="submit">Send</button>
						{status === "SUCCESS" && <p style={{ color: "white" }}>Thanks! Your message has been sent.</p>}
						{status === "ERROR" && <p style={{ color: "white" }}>Ooops! There was an error, please try again.</p>}
					</form>
				</div>
			</Fade>
		</>
	);
}

export default ChatGPT;
