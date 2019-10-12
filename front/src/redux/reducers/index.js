import { combineReducers } from "redux";
import { feedbackPostReducer } from "./feedback";
import { tagReducer } from "./tags";
import feedbacksReducer from './feedbacksReducer';
export default combineReducers({
	feedbackPostReducer,
	tagReducer,
	feedbacks: feedbacksReducer,
});
