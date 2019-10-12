import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./global.css";

import App from "./components/App";
import Feed from "./components/ViewFeedback/FeedbackProfile/FeedbackProfile";

import store from "./redux";

const root = document.querySelector("#root");

const displayFeedback = [
	{
		title: "blabalbla",
		content:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam a tempore modi labore quibusdam at nesciunt qui ab. Ipsa et ut quos sed enim ea placeat rem quasi, corporis sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nulla voluptatum quaerat dignissimos non. Est, culpa fuga corporis aut temporibus animi, nulla accusamus sunt facilis molestias maxime. Corporis, deserunt autem!",
		tags: ["javascript", "front"],
		isPrivate: false,
		stars: 2
	},
	{
		title: "blabalbla",
		content:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, a tenetur hic ab eos nam, recusandae quas dignissimos possimus ut voluptate quae. Dicta expedita eum esse architecto, consectetur facilis reprehenderit?",
		tags: ["javascript", "front"],
		isPrivate: false,
		stars: 3.5
	},
	{
		title: "blabalbla",
		content:
			"ansodbasodbaosdoiasmdioamdiaidndasoidasoi dias dmoaismdoiasmd oiasd mioa smiod moiam sodiamsoidaiso dmiao smodia smoi",
		tags: ["javascript", "front"],
		isPrivate: false,
		stars: 3.5
	},
	{
		title: "blabalbla",
		content:
			"ansodbasodbaosdoiasmdioamdiaidndasoidasoi dias dmoaismdoiasmd oiasd mioa smiod moiam sodiamsoidaiso dmiao smodia smoi",
		tags: ["javascript", "front"],
		isPrivate: false,
		stars: 3.5
	}
];

render(
	<Provider store={store}>
		<Feed displayFeedback={displayFeedback} />
	</Provider>,
	root
);
