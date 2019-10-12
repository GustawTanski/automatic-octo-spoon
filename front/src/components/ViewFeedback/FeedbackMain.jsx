import React from "react";
import { connect } from 'react-redux';
import { Card } from "antd";
import FeedbackInfo from './FeedbackInfo';
import './FeedbackMain.css';

import { selectFeedback } from '../../actions/selectFeedback'
const configStyle = {
    width: '300px',
    maxHeight: '150px',
    margin: '5px',

}
class FeedbackMain extends React.Component {

    clickHandler = () => {
        this.props.selectFeedback("DZIAŁĄ");
    }
    renderCards = () => {
        // const listOfCards = this.props.feedbacks.map(feedback => {
        //     <Card style={configStyle} title="Card title" bordered={false} extra={<a href="#">More info</a>}>
        //         feedback
        //     </Card>
        // });

        const helpArr = [
            { title: "FEEDBACK ONE", content: "Content 1 lorem ipsum blablablablablablabla", rate: 1, tags: ["tag", "tag2", "tag3"] },
            { title: "FEEDBACK ONE", content: "Content 2 lorem ipsum blablablablablablabla", rate: 2, tags: ["tag", "tag2", "tag3"] },
            { title: "FEEDBACK ONE", content: "Content 3 lorem ipsum blablablablablablabla", rate: 3, tags: ["tag", "tag2", "tag3"] },
            { title: "FEEDBACK ONE", content: "Content 4 lorem ipsum blablablablablablabla", rate: 0.5, tags: ["tag", "tag2", "tag3"] },
            { title: "FEEDBACK ONE", content: "Content 5 lorem ipsum blablablablablablabla", rate: 1.5, tags: ["tag", "tag2", "tag3"] }
        ];
        return helpArr.map((feedback, index) => {
            const description = feedback.content.substring(0, 30);
            return <Card style={configStyle} key={index} title={feedback.title} bordered={false} extra={<FeedbackInfo onclick={this.clickHandler} />}>
                {description}...
            </Card>
        });
    }
    renderListOfFeedback = () => {
        return (
            <div className="cardsWrapper">
                {this.renderCards()}
            </div>
        );
    };
    render() {
        return (
            <div>
                {this.renderListOfFeedback()}
            </div>
        );
    }
}
// const mapStateToProps = state => {
//     return { feedbacks: state.feedbacks };
// };
// export default FeedbackMain;
// export default connect(mapStateToProps)(FeedbackMain);
export default connect(null, { selectFeedback })(FeedbackMain);
