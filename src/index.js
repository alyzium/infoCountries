import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { transitions, positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import "./styles/index.scss";

const options = {
	// you can also just use 'bottom center'
	position: positions.BOTTOM_CENTER,
	timeout: 5000,
	offset: "30px",
	type: "error",
	// you can also just use 'scale'
	transition: transitions.SCALE,
};

ReactDOM.render(
	<React.StrictMode>
		<Provider template={AlertTemplate} {...options}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
