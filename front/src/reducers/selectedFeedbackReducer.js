export const selectedFeedbackReducer = (selectedFeedback = null, action) => {
	if (action.type === "FEEDBACK_SELECTED") {
		return action.payload;
	}
	return selectedSong;
};
