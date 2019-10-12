import { GET_USERS_TEAM, generateAsyncAction } from "./actionGenerator";
import requestApi from "../api/index";

export function getUsersTeam() {
	return (dispatch, getStore) => {
		const { team } = getStore();
		// console.log(team);
		dispatch(generateAsyncAction(requestApi.get("/users", { headers: { team } }), GET_USERS_TEAM));
	};
}
