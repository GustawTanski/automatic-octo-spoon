import React from "react";
import { HashRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "antd";
import showFeedbackModal from "./FeedbackModal";

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
const map = state => {
	console.log(state);
	return state;
};
export default connect(map)(App);

const mapStateToProps = state => {
	return {
		isPending: state.feedbackPostReducer.isPending
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
