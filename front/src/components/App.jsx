import React from "react";
import { Switch, Route } from "react-router-dom";
import HashRouter from "./ReduxedHashRouter";

import TeamView from "./views/TeamView";
import LoginView from "./views/LoginView";

export default function App() {
	return (
		<HashRouter>
			<Switch>
				<Route path="/" component={LoginView} />
			</Switch>
		</HashRouter>
	);
}
