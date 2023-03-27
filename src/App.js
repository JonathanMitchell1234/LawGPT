import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import ChatGPT from "./Components/Form";
import Contact from "./Components/Contact";
import ButtonAppBar from "./Components/Navbar";

function App() {
	return (
		<>
			<Router>
				<ButtonAppBar />
				<Routes>
					<Route path="/" element={<Hero />} />
					<Route path="/Form" element={<ChatGPT />} />
					<Route path="/Contact" element={<Contact />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
