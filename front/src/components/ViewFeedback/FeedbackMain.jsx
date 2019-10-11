import React from 'react';
// import { connect } from 'react-thunk';

import SingleFeedback from './SingleFeedback';

class FeedbackMain extends React.Component {
    constructor(props) {
        super(props);
        this.container = React.createRef();
        this.containerWidth = null;
    }
    componentDidMount() {
        console.log(this.myInput.current.offsetWidth);
    }
    renderSingleFeedback = () => {
        this.props.feedbacks.map(feedback => <SingleFeedback />)
    }
    renderListOfFeedback = () => {
        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                {this.renderSingleFeedback()}
            </div>
        );
    };

    render() {
        return (
            <div style={{ width: '200px' }} ref={this.container}>
                {this.renderListOfFeedback()}
            </div>
        );
    };
};
const mapStateToProps = (state) => {
    return { feedbacks: state.feedbacks };
};
export default FeedbackMain;
// export default connect(mapStateToProps)(FeedbackMain);