import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Doacoes from "./pages/doacoes";
import Empresa from "./pages/empresa";
import Contato from "./pages/contato";

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/doacoes" exact component={Doacoes} />
				<Route path="/empresa" exact component={Empresa} />
				<Route path="/contato" exact component={Contato} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
