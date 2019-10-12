import { Form, Icon, Input, Button, Checkbox } from "antd";
import { connect } from "react-redux";
import React from "react";
import requestApi from "../../redux/api/index.js";
import { setToken } from "../../redux/actions/setToken";

class LoginView extends React.Component {
	handleSubmit = async e => {
		e.preventDefault();

		this.props.form.validateFields(async (err, values) => {
			if (!err) {
				// const x = await requestApi.post("/login", {
				// 	email: values.email,
				// 	password: values.password,
				// 	team: values.team
				// });

				// this.props.setToken();
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;

		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Item>
					{getFieldDecorator("email", {
						rules: [{ required: true, message: "Please input your e-mail!" }]
					})(<Input type="email" placeholder="E-Mail" />)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator("password", {
						rules: [{ required: true, message: "Please input your password!" }]
					})(<Input type="password" placeholder="Password" />)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator("team", {
						rules: [{ required: true, message: "Please input your team!" }]
					})(<Input placeholder="Team" />)}
				</Form.Item>
				<Form.Item>
					<Button htmlType="submit" type="primary">
						Log in
					</Button>
				</Form.Item>
			</Form>
		);
	}
}

const Temp = Form.create()(LoginView);
export default connect(
	null,
	{
		setToken
	}
)(Temp);
