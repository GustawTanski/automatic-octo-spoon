import React from "react";
import { HashRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Route } from "react";
import { Button } from "antd";
import showFeedbackModal from "./FeedbackModal";

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

const mapStateToProps = state => {
	return {
		isPending: state.feedbackPostReducer.isPending
	};
};

export default connect(mapStateToProps)(App);
