export const selectFeedback = feedback => {
	//Return an action
	return {
		type: "FEEDBACK_SELECTED",
		payload: feedback
	};
};
