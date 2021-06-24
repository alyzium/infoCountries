import React from "react";
import { NavLink } from "react-router-dom";
import app from "../firebase/auth";

const auth = app.auth();

const Navigation = () => {
	return (
		<div className="navigation">
			<NavLink exact to="/" activeClassName="nav-active">
				Home
			</NavLink>
			<NavLink exact to="/news" activeClassName="nav-active">
				News
			</NavLink>
			<NavLink exact to="/about" activeClassName="nav-active">
				About
			</NavLink>
			<div className="logout-button">
				<button onClick={() => auth.signOut().then(window.location.replace("/"))}>Logout</button>
			</div>
		</div>
	);
};

export default Navigation;
