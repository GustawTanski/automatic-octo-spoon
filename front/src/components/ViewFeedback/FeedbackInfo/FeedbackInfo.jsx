import React from "react";
import { Modal, Button, Rate, Tag, Avatar } from "antd";
import "./FeedbackInfo.css";


class FeedbackInfo extends React.Component {
	state = {
		visible: false
	};
	showModal = () => {
		this.setState({
			visible: true
		});
	};
	handleCancel = () => {
		this.setState({ visible: false });
	};
	connectTags = (title, tags) => {
		const connectedTags = tags.map((tag, i) => <Tag key={i}>{tag}</Tag>);
		return (
			<React.Fragment>
				<h3>{title}</h3>
				<div>{connectedTags}</div>
			</React.Fragment>
		);
	};
	render() {
		const { title, content, rate, tags, author } = this.props.item;
		const { visible } = this.state;
		const fullTitle = this.connectTags(title, tags);
		return (
			<div>
				<Button type="primary" onClick={this.showModal}>
					Show more
				</Button>
				<Modal
					visible={visible}
					title={fullTitle}
					onCancel={this.handleCancel}
					footer={[
						<Button key="back" onClick={this.handleCancel}>
							Return
						</Button>
					]}
				>
					{author && (
						<div>
							<Avatar icon="user" />
							<span className="authorWrapper__item">{author}</span>
						</div>
					)}
					<p>{content}</p>
					<Rate className="modal__rating" allowHalf defaultValue={rate} disabled />
				</Modal>
			</div>
		);
	}
}
export default FeedbackInfo;
