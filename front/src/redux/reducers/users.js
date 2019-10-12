import { GET_USERS_TEAM } from "../actions/actionGenerator";

export function users(state = [], action) {
	switch (action.type) {
		case GET_USERS_TEAM.SUCCESS:
			return action.payload.data;
		default:
			return state;
	}
}
