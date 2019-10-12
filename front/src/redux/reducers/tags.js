import { POST_TAG, GET_ALL_TAGS } from "../actions/actionGenerator";

const initialState = {
	statusCode: 0,
	error: null,
	isPending: false
};

export function tagReducer(state = initialState, action) {
	switch (action.type) {
		case POST_TAG.SUCCESS:
			return {
				...state,
				statusCode: 200,
				isPending: false
			};
		case POST_TAG.FAILURE:
			return {
				...state,
				statusCode: action.payload.error.status,
				error: action.payload.error.message,
				isPending: false
			};
		case GET_ALL_TAGS.SUCCESS:
			return {
				...state,
				statusCode: action.payload.status,
				data: action.payload.data,
				isPending: false
			};
		case GET_ALL_TAGS.FAILURE:
			return {
				...state,
				statusCode: action.payload.status,
				error: action.payload.error.message,
				isPending: false
			};
		case GET_ALL_TAGS.STARTED:
			return {
				...state,
				statusCode: 0,
				isPending: true
			};
		default:
			return state;
	}
}
