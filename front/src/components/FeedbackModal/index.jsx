import React from "react";
import { Modal, Input, Select, Rate, Radio, Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import "./style.css";

const { confirm } = Modal;
const { Group, Button } = Radio;
const { Item } = Form;

const formRef = React.createRef();

export default function showFeedbackModal(username) {
	confirm({
		title: `Submit a feedback ${username ? "to " + username : ""}`,
		content: <FormFeedback ref={formRef} />,
		okText: "Submit",
		centered: true,
		icon: null,
		onOk
	});
}

function onOk(close) {
	// TODO:: Implement
	formRef.current.validateFields((err, values) => {
		if (!err) {
            console.log(values);
            close();
		}
	});
}

class FeedbackModal extends React.Component {
	state = { selectedRadio: "anonymous" };
	tagsList = [1, 2, 3, "dupa"].map(elem => <Select.Option key={elem}>{elem}</Select.Option>);

	selectRadio = event => {
		this.setState({
			selectedRadio: event.target.value
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
									message: "Message is required"
								}
							]
						})(<TextArea placeholder="Content" autosize={{ minRows: 2, maxRows: 8 }} />)}
					</Item>
				)}
				<Item>
					{getFieldDecorator("privacy", { initialValue: "anonymous" })(
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
			</Form>
		);
	}
}

const FormFeedback = Form.create()(FeedbackModal);
