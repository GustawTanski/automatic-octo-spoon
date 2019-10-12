import React from "react";
import { Input, Select, Rate, Radio } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { connect } from "react-redux";
import "./style.css";

class FeedbackModal extends React.Component {
	constructor() {
		super();
		// this.contextRedux = ReactReduxContext;
	}
	// static contextType = ReactReduxContext;

	render() {
		console.log(this);
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
				<Rate className="modal__rating" allowHalf />
			</div>
		);
	}
}

const map = state => {
	return state;
};

export default connect(map)(FeedbackModal);
