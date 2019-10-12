import { POST_TAG, GET_ALL_TAGS } from "./actionGenerator";
import requestApi from "../api/index";

export function postTag(tagName) {
	return dispatch => {
		requestApi
			.post(
				"/tags",
				{
					tagName
				}.then(res => {
					dispatch(postTagSuccess());
				})
			)
			.catch(err => {
				dispatch(postTagFailure());
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

export function getAllTags() {
	return dispatch => {
		dispatch(getAllTagsStarted());

		requestApi
			.get("/tags")
			.then(res => {
				dispatch(getAllTagsSuccess(res));
			})
			.catch(err => {
				dispatch(getAllTagsFailure(err.message));
			});
	};
}

const getAllTagsSuccess = () => {
	return {
		type: GET_ALL_TAGS.SUCCESS
	};
};

const getAllTagsFailure = () => {
	return {
		type: GET_ALL_TAGS.FAILURE
	};
};
const getAllTagsStarted = () => {
	return {
		type: GET_ALL_TAGS.STARTED
	};
};
