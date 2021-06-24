import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import News from "./pages/News";
import NotFount from "./pages/NotFount";
import app from "./firebase/auth";

const App = () => {
	const [user, setUser] = useState(null);
	const auth = app.auth();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			const user = {
				uid: userAuth?.uid,
				email: userAuth?.email,
			};
			if (userAuth) {
				console.log(userAuth);
				setUser(user);
				return;
			} else {
				setUser(null);
			}
		});
		return unsubscribe;
	}, [auth]);

	return (
		<BrowserRouter>
			{user ? (
				<Switch>
					<Route path="/" exact component={Home}></Route>
					<Route path="/news" component={News}></Route>
					<Route path="/about" component={About}></Route>
					<Route component={NotFount} />
				</Switch>
			) : (
				<Login />
			)}
		</BrowserRouter>
	);
};

export default App;
