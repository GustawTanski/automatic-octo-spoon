import React from "react";
import { Modal, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";

const { confirm } = Modal;

export default function showFeedbackModal() {
	confirm({
		title: "Example",
		content: <FeedbackModal />,
		icon: null,
		onOk() {
			console.log("ok");
		},
		onCancel() {
			console.log("canceled");
		}
	});
}

export class FeedbackModal extends React.Component {
	render() {
		return (
            <>
                <Input placeholder="Feedback's title" />
				<TextArea placeholder="Feedback's content" autosize={{ minRows: 2, maxRows: 6 }} />
			</>
		);
	}
}
