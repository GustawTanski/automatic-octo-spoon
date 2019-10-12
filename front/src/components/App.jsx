import React from "react";
import { HashRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Card, Spin } from "antd";
import showFeedbackModal from "./FeedbackModal";

class App extends React.Component {
	buttonHandle() {
		this.props.onPost("What", "HENLO");
	}
	render() {
		return (
			<div>
				<h1>it works</h1>
				<Button onClick={this.buttonHandle.bind(this)}>click</Button>
				<Card>
					<Spin spinning={this.props.isPending}>
						<div>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, at tempore.
							Expedita adipisci odit harum soluta! In nam architecto saepe? Excepturi similique
							ipsam et neque totam quia adipisci ratione a.
						</div>
					</Spin>
				</Card>
			</div>
		);
	}
}
const map = state => {
	console.log(state);
	return state;
};

const mapStateToProps = state => {
	return {
		isPending: state.feedbackPostReducer.isPending
	};
};

export default connect(
	mapStateToProps
)(App);
