import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Button } from "antd";
import showFeedbackModal from "./FeedbackModal/";

export default function App() {
	return (
		<HashRouter>
			<Switch>
				<Button onClick={showFeedbackModal}>Show a modal</Button>
			</Switch>
		</HashRouter>
	);
}
