import {
	REQUEST_ADD_FEEDBACK_TYPE,
	REQUEST_GET_RECIPIENT_FEEDBACKS_TYPE
} from "../actions/requests";
import axios from "axios";
const server = axios.create();

export const requestsReducer = (requests = [], request) => {
	if (request.type === REQUEST_ADD_FEEDBACK_TYPE) {
	} else if (request.type === REQUEST_GET_RECIPIENT_FEEDBACKS_TYPE) {
	}
};
