import React from "react";
import { Card } from "antd";
import FeedbackInfo from "../FeedbackInfo/FeedbackInfo";
import "./FeedbackMain.css";

const configStyle = {
    width: "300px",
    maxHeight: "150px",
    margin: "5px"
};
class FeedbackMain extends React.Component {
    renderCards = () => {
        // const listOfCards = this.props.feedbacks.map(feedback => {
        //     <Card style={configStyle} title="Card title" bordered={false} extra={<a href="#">More info</a>}>
        //         feedback
        //     </Card>
        // });

        const helpArr = [
            {
                title: "FEEDBACK ONE",
                content: "Content 1 lorem ipsum blablablablablablabla",
                rate: 1,
                tags: ["kon", "tag2", "tag3"]
            },
            {
                title: "FEEDBACK TWO",
                content: "Content 2 lorem ipsum blablablablablablabla",
                rate: 2,
                tags: ["pies", "tag2", "tag3"]
            },
            {
                title: "FEEDBACK TRZY",
                content: "Content 3 lorem ipsum blablablablablablabla",
                rate: 3,
                tags: ["kot", "tag2", "tag3"]
            },
            {
                title: "FEEDBACK FYNF",
                content: "Content 4 lorem ipsum blablablablablablabla",
                rate: 0.5,
                tags: ["jaszczurka", "tag2", "tag3"]
            },
            {
                title: "FEEDBACK SYKS",
                content: "Content 5 lorem ipsum blablabl ab labla5 lorem ipsum blabla blablabla5 lorem ipsum blablabl ablabla5 lorem ipsum blabl abla blabla5 lorem ipsum blablab lablabla5 lorem ipsum blablablab labla5 lorem ipsum blabl ablablabla5 lorem ipsum blablab lablabla5 lorem ipsum blablab lablabla5 lorem ipsum blablabl ablabla5 lorem ipsum blabla blablab lablabla",
                author: "DAMIAN",
                rate: 1.5,
                tags: ["react", "tag2", "tag3"]
            }
        ];
        return helpArr.map((feedback, index) => {
            const description = feedback.content.substring(0, 30);
            return (
                <Card
                    style={configStyle}
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
    renderListOfFeedback = () => {
        return <div className="cardsWrapper">{this.renderCards()}</div>;
    };
    render() {
        return <div>{this.renderListOfFeedback()}</div>;
    }
}
export default FeedbackMain;
