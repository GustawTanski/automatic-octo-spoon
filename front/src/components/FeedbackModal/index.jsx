import React from "react";
import { Modal } from "antd";
import FeedbackModal from "./FeedbackModal";
import { Provider } from "react-redux";
import store from "../../redux/index";
import "./style.css";

const { confirm } = Modal;

export default function showFeedbackModal() {
	confirm({
		// TODO:: Display user's login in title
		title: "Submit a feedback to...",
		content: (
			<Provider store={store}>
				<FeedbackModal />
			</Provider>
		),
		icon: null,
		okText: "Submit",
		onOk
	});
}

function onOk() {
	// TODO:: Implement
	console.log("ok");
}
