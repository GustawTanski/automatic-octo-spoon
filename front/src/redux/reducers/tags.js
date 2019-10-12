import { POST_TAG } from "../actions/types";

const initialState = {
	statusCode: 0,
	error: null
};

export function tagReducer(state = initialState, action) {
	switch (action.type) {
		case POST_TAG.SUCCESS:
			return {
				...state,
				statusCode: 200
			};
		case POST_TAG.FAILURE:
			return {
				...state,
				statusCode: action.payload.error.status,
				error: action.payload.error.message
			};
		default:
			return state;
	}
}
