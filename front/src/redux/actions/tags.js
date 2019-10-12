import { POST_TAG } from "./types";
import requestApi from "../api/index";

export default function postTag(tagName) {
	return dispatch => {
		requestApi
			.post(
				"/tags",
				{
					tagName
				}.then(res => {
					dispatch(postTagSuccess);
				})
			)
			.catch(err => {
				dispatch(postTagFailure);
			});
	};
}

const postTagSuccess = () => {
	return {
		type: POST_TAG.SUCCESS
	};
};

const postTagFailure = () => {
	return {
		type: POST_TAG.FAILURE
	};
};
