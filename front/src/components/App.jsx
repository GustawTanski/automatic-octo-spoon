import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import TeamView from "./views/TeamView";

export default function App() {
	return (
		<HashRouter>
			<Switch>
				<Route path="/" component={TeamView} />
			</Switch>
		</HashRouter>
	);
}
