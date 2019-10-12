import React from "react";
import { Card, Divider, Tag, Rate } from "antd";
import { getFeedback } from "../../../redux/actions/feedback";
import { connect } from "react-redux";
import faker from "faker";
import "./FeedbackProfile.css";
import MemberAvatar from "../../TeamViewComponents/Member/Avatar";
import useColor from "../../../hooks/useColor";

const { Meta } = Card;
const flexDisplayProfile = {
	width: "75%",
	margin: "5% auto",
	wordWrap: "break-word"
};
const tagColors = ["#f50f50", "#2db7f5", "#108ee9", "#389e0d", "#0050b3", "#c41d7f", "#1d39c4"];

function Profile(props) {
	return (
		<Card className="profile__wrapper" style={flexDisplayProfile}>
			<div className="profile__wrapper__flex">
				<div className="profile__wrapper__avatar">
					<MemberAvatar size={64} name={props.name} color={useColor(props.name)} />
				</div>
				<div className="profile__wrapper__info" span={12}>
					<Meta title={`${props.name} ${props.lastname}`} description={props.position} />
				</div>
			</div>
		</Card>
	);
}

class FeedbackProfile extends React.Component {
	renderFeedbacks() {
		return this.props.displayFeedback.map(feed => {
			return (
				<Card title={feed.title} style={{ width: "80%", margin: "5%", wordWrap: "break-word" }}>
					<Rate className="modal__rating" disabled value={feed.stars} />
					<p>{feed.content}</p>
					<Divider />
					{feed.tags.map(tag => {
						let index = Math.floor(Math.random() * tagColors.length);
						return <Tag color={tagColors[index]}>{tag}</Tag>;
					})}
				</Card>
			);
		});
	}

	render() {
		return (
			<div>
				<Profile
					name={`${faker.name.firstName()}`}
					lastname={faker.name.lastName()}
					position="senior java developer"
				/>
				{this.renderFeedbacks()}
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getUserFeedback: idRecipient => {
			dispatch(getFeedback(idRecipient));
		}
	};
};

export default connect(
	null,
	mapDispatchToProps
)(FeedbackProfile);
