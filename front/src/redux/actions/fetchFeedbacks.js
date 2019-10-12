import axios from "axios";
const baseURL = "";
export const fetchFeedbacks = () => async dispatch => {
	const response = await axios.get(baseURL);
	dispatch({
		type: "FETCH_FEEDBACKS",
		payload: response.data
	});
};
