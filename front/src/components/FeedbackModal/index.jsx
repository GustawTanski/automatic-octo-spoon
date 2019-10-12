import React from "react";
import { Modal, Input, Select, Rate, Radio } from "antd";
import TextArea from "antd/lib/input/TextArea";
import "./style.css";

const { confirm } = Modal;

export default function showFeedbackModal() {
	confirm({
		// TODO:: Display user's login in title
		title: "Submit a feedback to...",
		content: <FeedbackModal />,
		icon: null,
		okText: "Submit",
		onOk
	});
}

function onOk() {
	// TODO:: Implement
	console.log("ok");
}

class FeedbackModal extends React.Component {
	render() {
		return (
			<div className="modal">
				<Input placeholder="Title" />
				<Select mode="tags" style={{ width: "100%" }} placeholder="Tags">
					{[1, 2, 3, 4, 10, 15].map(num => (
						<Select.Option key={num}>{num}</Select.Option>
					))}
				</Select>
				<TextArea placeholder="Content" autosize={{ minRows: 2, maxRows: 6 }} />
				<Radio.Group defaultValue="private" buttonStyle="solid" className="modal__radio-group">
					<Radio.Button value="private">Private</Radio.Button>
					<Radio.Button value="public">Public</Radio.Button>
				</Radio.Group>
				<Rate className="modal__rating" allowHalf className="modal__rating" />
			</div>
		);
	}
}
