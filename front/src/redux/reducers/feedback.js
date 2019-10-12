import { POST_FEEDBACK } from "../actions/actionGenerator";

const initialState = {
	isPending: false,
	statusCode: 0,
	error: null
};

export function feedbackPostReducer(state = initialState, action) {
	switch (action.type) {
		case POST_FEEDBACK.STARTED:
			return {
				...state,
				isPending: true
			};
		case POST_FEEDBACK.SUCCESS:
			return {
				...state,
				isPending: false,
				statusCode: 200
			};
		case POST_FEEDBACK.FAILURE:
			return {
				...state,
				isPending: false,
				error: action.payload,
				statusCode: action.payload
			};
		default:
			return state;
	}
}
