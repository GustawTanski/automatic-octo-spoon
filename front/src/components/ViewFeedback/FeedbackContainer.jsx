import React from 'react';
import FeedbackSider from './FeedbackSider';
import FeedbackMain from './FeedbackMain/FeedbackMain';
import './feedbackContainer.css';
const FeedbackContainer = () => {
    return (
        <div className='feedbackContainer'>
            <FeedbackSider />
            <FeedbackMain />
        </div>
    )
};
export default FeedbackContainer;