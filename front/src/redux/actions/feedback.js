import requestApi from "../api/index";
import { POST_FEEDBACK, GET_FEEDBACK, generateAsyncAction } from "./actionGenerator";

export const postFeedback = ({
	title,
	tags,
	content,
	privacy,
	recipientID,
	isPublic = false,
	rating = undefined
}) => {
	return generateAsyncAction(
		requestApi.post(`/users/${recipientID}/feedbacks`, {
			title,
			tags,
			content,
			isPublic,
			privacy,
			recipientID,
			rating
		}),
		POST_FEEDBACK
	);
};

export const getFeedback = ({ recipientID }) => {
	return generateAsyncAction(requestApi.get(`/users/${recipientID}/feedbacks`), GET_FEEDBACK);
};
