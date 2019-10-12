import React from "react";
import { connect } from "react-redux";
import { postFeedback } from "../redux/actions/feedback";
import { Spin, Button, Card } from "antd";

class App extends React.Component {
	buttonHandle() {
		this.props.onPost("What", "HENLO");
	}

	render() {
		console.log(this.props);

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

const mapDispatchToProps = dispatch => {
	return {
		onPost: (title, body) => {
			dispatch(postFeedback(title, body));
		}
	};
};

const mapStateToProps = state => {
	return {
		isPending: state.feedbackPostReducer.isPending
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
