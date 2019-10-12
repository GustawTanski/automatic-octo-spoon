import React from "react";
import { Switch, Route } from "react-router-dom";
import HashRouter from "./ReduxedHashRouter";

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
