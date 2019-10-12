import React from "react";
import { Card } from "antd";
import { connect } from "react-redux";
import FeedbackInfo from "../FeedbackInfo/FeedbackInfo";
import switchColors from "./switchColors";

import "./FeedbackMain.css";

const bgColors = {
	red: "#730029",
	orange: "#866423",
	default: "#082567"
};

const helpArr = [
	{
		title: "FEEDBACK ONE",
		content:
			"	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi excepturi reiciendis, nostrum itaque autem hic dolor praesentium quibusdam esse, nisi facere odio blanditiis amet quos porro nam veniam, tenetur facilis.",
		rate: 0.5,
		tags: ["kon", "tag2", "tag3"]
	},
	{
		title: "FEEDBACK TWO",
		content:
			"	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi excepturi reiciendis, nostrum itaque autem hic dolor praesentium quibusdam esse, nisi facere odio blanditiis amet quos porro nam veniam, tenetur facilis.",
		rate: 1,
		tags: ["pies", "tag2", "tag3"]
	},
	{
		title: "FEEDBACK TRZY",
		content:
			"	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi excepturi reiciendis, nostrum itaque autem hic dolor praesentium quibusdam esse, nisi facere odio blanditiis amet quos porro nam veniam, tenetur facilis.",
		rate: 1.5,
		tags: ["kot", "tag2", "tag3"]
	},
	{
		title: "FEEDBACK FYNF",
		content:
			"	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi excepturi reiciendis, nostrum itaque autem hic dolor praesentium quibusdam esse, nisi facere odio blanditiis amet quos porro nam veniam, tenetur facilis.",
		rate: 2,
		tags: ["jaszczurka", "tag2", "tag3"]
	},
	{
		title: "FEEDBACK SYKS",
		content:
			"	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi excepturi reiciendis, nostrum itaque autem hic dolor praesentium quibusdam esse, nisi facere odio blanditiis amet quos porro nam veniam, tenetur facilis.",
		author: "DAMIAN",
		rate: 2.5,
		tags: ["react", "tag2", "tag3"]
	},
	{
		title: "FEEDBACK SYKS",
		content:
			"	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi excepturi reiciendis, nostrum itaque autem hic dolor praesentium quibusdam esse, nisi facere odio blanditiis amet quos porro nam veniam, tenetur facilis.",
		author: "DAMIAN",
		rate: 3,
		tags: ["react", "tag2", "tag3"]
	},
	{
		title: "FEEDBACK SYKS",
		content:
			"	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi excepturi reiciendis, nostrum itaque autem hic dolor praesentium quibusdam esse, nisi facere odio blanditiis amet quos porro nam veniam, tenetur facilis.",
		author: "DAMIAN",
		rate: 3.5,
		tags: ["react", "tag2", "tag3"]
	},
	{
		title: "FEEDBACK SYKS",
		content:
			"	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi excepturi reiciendis, nostrum itaque autem hic dolor praesentium quibusdam esse, nisi facere odio blanditiis amet quos porro nam veniam, tenetur facilis.",
		author: "DAMIAN",
		rate: 4,
		tags: ["react", "tag2", "tag3"]
	},
	{
		title: "FEEDBACK SYKS",
		content:
			"	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi excepturi reiciendis, nostrum itaque autem hic dolor praesentium quibusdam esse, nisi facere odio blanditiis amet quos porro nam veniam, tenetur facilis.",
		author: "DAMIAN",
		rate: 4.5,
		tags: ["react", "tag2", "tag3"]
	},
	{
		title: "FEEDBACK SYKS",
		content:
			"	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi excepturi reiciendis, nostrum itaque autem hic dolor praesentium quibusdam esse, nisi facere odio blanditiis amet quos porro nam veniam, tenetur facilis.",
		author: "DAMIAN",
		rate: 5,
		tags: ["react", "tag2", "tag3"]
	}
];
class FeedbackMain extends React.Component {
	state = {
		configStyle: {
			width: "400px",
			maxHeight: "150px",
			margin: "5px"
		}
	};
	componentDidMount() {
		if (window.innerWidth < 400) {
			this.setState({
				configStyle: {
					width: "285px",
					maxHeight: "150px",
					margin: "10px"
				}
			});
		}
	}
	helpMethod = () => {
		return helpArr.map((feedback, index) => {
			const description = feedback.content.substring(0, 60);
			const background = switchColors(feedback.rate, bgColors);
			return (
				<Card
					style={{ ...this.state.configStyle, backgroundColor: background }}
					key={index}
					title={feedback.title}
					bordered={false}
					extra={<FeedbackInfo item={feedback} />}
				>
					{description}...
				</Card>
			);
		});
	};

	renderCards = () => {
		const listOfCards = this.props.feedbacks.map(feedback => {
			const description = feedback.content.substring(0, 30);
			const background = switchColors(feedback.rate, bgColors);

			<Card
				style={{ ...this.state.configStyle, backgroundColor: background }}
				key={index}
				title={feedback.title}
				bordered={false}
				extra={<FeedbackInfo item={feedback} />}
			>
				{description}...
			</Card>;
		});
		if (!listOfCards) {
			return this.helpMethod();
		}
		return listOfCards;
	};

	renderListOfFeedback = () => {
		return <div className="cardsWrapper">{this.renderCards()}</div>;
	};
	render() {
		return <div>{this.renderListOfFeedback()}</div>;
	}
}
const mapStateToProps = state => {
	return { feedbacks: state.currentUser };
};
export default connect(mapStateToProps)(FeedbackMain);
