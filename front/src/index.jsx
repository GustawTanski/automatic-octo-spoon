import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./global.css";

import App from "./components/App";
import Feed from "./components/ViewFeedback/FeedbackMain/FeedbackMain";

import store from "./redux";

const root = document.querySelector("#root");

render(
	<Provider store={store}>
		<Feed />
	</Provider>,
	root
);
