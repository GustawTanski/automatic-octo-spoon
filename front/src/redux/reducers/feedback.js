import { POST_FEEDBACK, GET_FEEDBACK } from "../actions/actionGenerator";

const initialPostState = {
	isPending: false,
	statusCode: 0,
	error: null
};

const initialGetState = {
	isPending: false,
	statusCode: 0,
	data: null,
	error: null
};

export function feedbackPostReducer(state = initialPostState, action) {
	switch (action.type) {
		case POST_FEEDBACK.STARTED:
			return {
				...state,
				isPending: true,
				statusCode: 0
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
				isPending: false
			};
		default:
			return state;
	}
}
export function feedbackGetReducer(state = initialGetState, action) {
	switch (action.type) {
		case GET_FEEDBACK.STARTED:
			return {
				...state,
				isPending: true
			};
		case GET_FEEDBACK.SUCCESS:
			return {
				...state,
				isPending: false,
				data: action.payload,
				statusCode: 200
			};
		case GET_FEEDBACK.FAILURE:
			return {
				...state,
				statusCode: 400,
				error: action.payload
			};

		default:
			return state;
	}
}
