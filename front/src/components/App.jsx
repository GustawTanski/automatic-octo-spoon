import React from "react";
import { HashRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "antd";
import showFeedbackModal from "./FeedbackModal";

function App() {
	return (
		<HashRouter>
			<Switch>
				<Button onClick={() => showFeedbackModal()}>Show a modal</Button>
			</Switch>
		</HashRouter>
	);
}
const map = state => {
	console.log(state);
	return state;
};
export default connect(map)(App);
