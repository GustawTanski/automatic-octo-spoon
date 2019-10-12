import requestApi from "../api/index";
import { POST_FEEDBACK } from "./types";

export const postFeedback = ({
	title,
	tags,
	content,
	isPublic = false,
	recipientID,
	rating = 0
}) => {
	return dispatch => {
		dispatch(postFeedbackStarted());

		requestApi
			.post(`/users/${recipientID}/feedbacks`, {
				title,
				tags,
				content,
				isPublic,
				recipientID,
				rating
			})
			.then(res => {
				dispatch(postFeedbackSuccess(res.data));
			})
			.catch(err => {
				dispatch(postFeedbackFailure(err.message));
			});
	};
};

const postFeedbackStarted = () => ({
	type: POST_FEEDBACK.STARTED
});

const postFeedbackFailure = () => ({
	type: POST_FEEDBACK.FAILURE
});

const postFeedbackSuccess = () => ({
	type: POST_FEEDBACK.SUCCESS
});
