import SET_TOKEN from "../actions/setToken";

export function token(state = "", action) {
	switch (action.type) {
		case SET_TOKEN:
			return action.payload;
		default:
			return "";
	}
}
