import { combineReducers } from "redux";
import { feedbackPostReducer } from "./feedback";
import { tagReducer } from "./tags";
import { history } from "./history";
import { routerContext } from "./routerContext";
import { users } from "./users";
import { team } from "./team";
import { token } from "./token";
import { currentUser } from "./setUser";

export default combineReducers({
	feedbackPostReducer,
	tagReducer,
	history,
	routerContext,
	users,
	team,
	token,
	currentUser
});
