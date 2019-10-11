import React from "react";
import { connect } from "react-redux";
import { testLog } from "../redux/actions/test";

class App extends React.Component {
	runReducer() {
		this.props.testLog("hello");
	}

	render() {
		console.log(this.props);

		return (
			<div>
				<h1>it works</h1>
				<button onClick={this.runReducer.bind(this)}>click</button>
				{this.props.tests.map(x => {
					return <h1>{x}</h1>;
				})}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		tests: state.testReducer
	};
};

export default connect(
	mapStateToProps,
	{ testLog }
)(App);
