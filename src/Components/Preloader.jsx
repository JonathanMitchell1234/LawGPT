import { Puff } from "react-loader-spinner";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import App from "../App.js";

const PreloaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	text-align: center;
`;

const LoaderBackground = styled.div`
	background: black;
	height: 100%;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
`;

function Preloader() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Fetch data or perform other async tasks here
		setTimeout(() => {
			setLoading(false);
		}, 700);
	}, []);

	return loading ? (
		<LoaderBackground>
			<PreloaderContainer>
				<Puff height="100" width="100" color="white" ariaLabel="triangle-loading" wrapperStyle={{}} wrapperClassName="" visible={true} />
			</PreloaderContainer>
		</LoaderBackground>
	) : (
		<App />
	);
}

export default Preloader;
