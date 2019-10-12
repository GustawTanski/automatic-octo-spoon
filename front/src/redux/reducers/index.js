import { combineReducers } from "redux";
import { feedbackPostReducer } from "./feedback";
import { tagReducer } from "./tags";
import { history } from "./history";
import { routerContext } from "./routerContext";
import { users } from "./users";

export default combineReducers({ feedbackPostReducer, tagReducer, history, routerContext, users });
