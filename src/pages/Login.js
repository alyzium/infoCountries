import React, { useRef } from "react";
import app from "../firebase/auth";
import "firebase/firestore";
import { useAlert } from "react-alert";

const Login = () => {
	const alert = useAlert();
	const auth = app.auth();
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const signUp = (e) => {
		e.preventDefault();
		auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value).catch(
			(err) => {
				alert.show(err.message);
			}
		);
	};

	const signIn = (e) => {
		e.preventDefault();
		auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value).catch((err) => {
			alert.show("Email ou mot de passe incorrect");
		});
	};

	return (
		<div className="login-form">
			<img id="wave" src="../img/wave.png" alt="wave" />
			<div className="container">
				<div className="img">
					<img src="../img/img1.svg" id="imgG" alt="img" />
				</div>
				<div className="login-container">
					<form>
						<img src="../img/img-avatar.svg" id="avatar" alt="img-avatar" />
						<h2>Welcome</h2>
						<h3>
							If you dont have an account, enter your email and password and click on SignUp
						</h3>
						<div className="input-div one">
							<i className="fas fa-user"></i>
							<div>
								<input type="text" placeholder="Email" ref={emailRef} required />
							</div>
						</div>
						<div className="input-div two">
							<i className="fas fa-lock"></i>
							<div>
								<input type="password" placeholder="Password" ref={passwordRef} required />
							</div>
						</div>
						<button type="submit" onClick={signIn}>
							Login
						</button>
						<button onClick={signUp}>signUp</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
