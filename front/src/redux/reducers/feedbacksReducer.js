export default (state = [], action) => {
	switch (action.type) {
		case "FETCH_FEEDBACKS":
			return action.payload;
		default:
			return state;
	}
};
