import requestApi from "../api/index";
import { POST_FEEDBACK, generateAsyncAction } from "./actionGenerator";

export const postFeedback = ({
	title,
	tags,
	content,
	isPublic = false,
	recipientID,
	rating = undefined
}) => {
	return generateAsyncAction(
		requestApi.post(`/users/${recipientID}/feedbacks`, {
			title,
			tags,
			content,
			isPublic,
			recipientID,
			rating
		}),
		POST_FEEDBACK
	);
};
