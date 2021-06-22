import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import News from "./pages/News";
import NotFount from "./pages/NotFount";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home}></Route>
				<Route path="/news" component={News}></Route>
				<Route path="/about" component={About}></Route>
				<Route component={NotFount} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
