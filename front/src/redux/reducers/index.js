import { combineReducers } from "redux";
import { feedbackPostReducer } from "./feedback";
import { tagReducer } from "./tags";

export default combineReducers({ feedbackPostReducer, tagReducer });
