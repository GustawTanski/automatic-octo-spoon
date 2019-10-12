import { GET_USERS_TEAM } from "../actions/actionGenerator";

export function users(state = [], action) {
	switch (action.type) {
		case GET_USERS_TEAM.STARTED:
			return {
				isPending: true
			};
		case GET_USERS_TEAM.SUCCESS:
			return [...state, ...action];
		case GET_USERS_TEAM.FAILURE:
			return {
				isPending: false,
				error: action.payload
			};
		default:
			return state;
	}
}
