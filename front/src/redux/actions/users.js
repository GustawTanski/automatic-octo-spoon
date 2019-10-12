import { GET_USERS_TEAM, generateAsyncAction } from "./actionGenerator";
import requestApi from "../api/index";

export function getUsersTeam() {
	return generateAsyncAction(requestApi.get("/users"), GET_USERS_TEAM);
}
