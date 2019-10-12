import React from "react";
import { Form, Icon, Input, Button, Checkbox, Switch } from "antd";

class RegisterView extends React.Component {
	state = { isBoss: false };

	onRegistrationSubmit() {}

	render() {
		const { getFieldDecorator } = this.props.form;

		return (
			<Form onSubmit={this.onRegistrationSubmit}>
				<Form.Item>
					{getFieldDecorator("username", {
						rules: [{ required: true, message: "Please input your username!" }]
					})(<Input placeholder="Username" />)}
				</Form.Item>
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
                    {getFieldDecorator("isBoss")(<Switch onChange={(e) => this.setState({})} defaultChecked="false" unCheckedChildren="I'm not the team leader" checkedChildren="I'm the team leader" />)}
                </Form.Item>
                {}
				<Form.Item>
					<Button type="primary">Log in</Button>
					<a href="/#/register">Or register if you don't yet have an account</a>
				</Form.Item>
			</Form>
		);
	}
}

export default Form.create()(RegisterView);
