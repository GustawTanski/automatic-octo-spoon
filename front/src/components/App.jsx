import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import HashRouter from "./ReduxedHashRouter";

import TeamView from "./views/TeamView";

function App() {
	return (
		<HashRouter>
			<Switch>
				<Route path="/" component={TeamView} />
			</Switch>
		</HashRouter>
	);
}

export default connect()(App);
