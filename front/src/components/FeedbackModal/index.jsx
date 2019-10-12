import React from "react";
import { Modal, Input, Select, Rate, Radio, Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import "./style.css";

const { confirm } = Modal;
const { Group, Button } = Radio;
const { Item } = Form;

export default function showFeedbackModal(username) {
	confirm({
		title: `Submit a feedback ${username ? "to " + username : ""}`,
		content: <FormFeedback />,
		okText: "Submit",
		centered: true,
		icon: null,
		onOk
	});
}

function onOk() {
	// TODO:: Implement
}

class FeedbackModal extends React.Component {
	state = { selectedRadio: "anonymous" };
	tagsList = [1, 2, 3, "dupa"].map(elem => <Select.Option key={elem}>{elem}</Select.Option>);

	selectRadio = event => {
		this.setState({
			selectedRadio: event.target.value
		});
	};

	check = event => {
		event.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log("Received values of form: ", values);
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;

		return (
			<Form className="modal">
				<Item>
					{getFieldDecorator("title", {
						rules: [
							{
                                required: true,
                                max: 64,
								message: "The title is required"
							}
						]
					})(<Input placeholder="Title" />)}
				</Item>
				<Item>
					{getFieldDecorator("select")(
						<Select
							ref={this.selectRef}
							mode="tags"
							className="modal__select"
							placeholder="Tags"
							showArrow
						>
							{this.tagsList}
						</Select>
					)}
				</Item>
				{this.state.selectedRadio !== "rating" && (
					<Item>
						{getFieldDecorator("content", {
							rules: [
								{
                                    required: true,
                                    max: 2048,
									message: "Feedback's message is required"
								}
							]
						})(<TextArea placeholder="Content" autosize={{ minRows: 2, maxRows: 8 }} />)}
					</Item>
				)}
				<Item>
					{getFieldDecorator("privacy", {initialValue: "anonymous"})(
                        <Group
							// defaultValue="anonymous"
							buttonStyle="solid"
							className="modal__radio-group"
							onChange={e => this.selectRadio(e)}
						>
							<Button value="public">Public</Button>
							<Button value="anonymous">Anonymous</Button>
							<Button value="rating">Only rating</Button>
						</Group>
					)}
				</Item>
				<Item>{getFieldDecorator("rate")(<Rate className="modal__rating" allowHalf />)}</Item>
				<Item>
					<Button onClick={e => this.check(e)}>Dupa</Button>
				</Item>
			</Form>
		);
	}
}

const FormFeedback = Form.create({})(FeedbackModal);
