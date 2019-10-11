import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Button } from "antd";
import showFeedbackModal from "./FeedbackModal/";

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
