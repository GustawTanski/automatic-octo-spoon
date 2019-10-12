import { GET_USERS_TEAM, generateAsyncAction } from "./actionGenerator";
import requestApi from "../api/index";

export function getUsersTeam() {
	return generateAsyncAction(requestApi.get("/user/team"), GET_USERS_TEAM);
}
