import React from "react";
import { Modal, Input, Select, Rate, Radio } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { connect } from "react-redux";
import { postFeedback } from "../../"
import "./style.css";

const { confirm } = Modal;
const { Group, Button } = Radio;

export default function showFeedbackModal(username) {
	confirm({
		title: `Submit a feedback ${username ? "to " + username : ""}`,
		content: <Feedback />,
		icon: null,
		okText: "Submit",
		onOk
	});
}

function onOk() {
	// TODO:: Implement
    setTimeout(() => {
        
    }, 2000);
}

class FeedbackModal extends React.Component {
	state = { selectedRadio: "anonymous" };
	tagsList = [1, 2, 3, "dupa", true].map(elem => <Select.Option key={elem}>{elem}</Select.Option>);

	selectRadio = event => {
		this.setState({
			selectedRadio: event.target.value
		});
	};

	render() {
		return (
			<div className="modal">
				<Input placeholder="Title" />
				<Select
					ref={this.selectRef}
					mode="tags"
					className="modal__select"
					placeholder="Tags"
					showArrow
				>
					{this.tagsList}
				</Select>
				{this.state.selectedRadio !== "rating" && (
					<TextArea placeholder="Content" autosize={{ minRows: 2, maxRows: 8 }} />
				)}
				<Group
					defaultValue="anonymous"
					buttonStyle="solid"
					className="modal__radio-group"
					onChange={e => this.selectRadio(e)}
				>
					<Button value="public">Public</Button>
					<Button value="anonymous">Anonymous</Button>
					<Button value="rating">Only rating</Button>
				</Group>
				<Rate className="modal__rating" allowHalf />
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

const Feedback = connect(
	mapStateToProps,
	mapDispatchToProps
)(FeedbackModal);

// const Feedback = FeedbackModal;
