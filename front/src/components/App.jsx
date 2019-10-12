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

const mapDispatchToProps = dispatch => {
	return {
		onPost: (title, body) => {
			dispatch(postFeedback(title, body));
		}
	};
};

const mapStateToProps = state => {
	return {
		isPending: state.feedbackReducer.isPending
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
