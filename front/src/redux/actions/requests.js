import { bool } from "prop-types";

export const REQUEST_ADD_FEEDBACK_TYPE = "REQUEST_ADD_FEEDBACK_TYPE";
export const REQUEST_GET_RECIPIENT_FEEDBACKS_TYPE = "REQUEST_GET_RECIPIENT_FEEDBACKS_TYPE";

export const sendFeedback = ({ title, tags = [], content, isPublic = false, receiverId }) => {
	return {
		type: REQUEST_ADD_FEEDBACK_TYPE,
		payload: {
			title,
			tags,
			content,
			isPrivate,
			receiverId
		}
	};
};
