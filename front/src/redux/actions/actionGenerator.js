export const POST_FEEDBACK = generateTypes("POST_FEEDBACK");
export const GET_FEEDBACK = generateTypes("GET_FEEDBACK");

export const POST_TAG = generateTypes("POST_TAG");
export const GET_USER_TEAMMATE = generateTypes("GET_USER_TEAMMATE");
export const GET_ALL_TAGS = generateTypes("GET_ALL_TAGS");
export const GET_USERS_TEAM = generateTypes("GET_USERS_TEAM");

function generateTypes(prependString) {
	return {
		SUCCESS: prependString + "_SUCCESS",
		FAILURE: prependString + "_FAILURE",
		STARTED: prependString + "_STARTED"
	};
}

const generateAction = type => {
	return {
		type
	};
};

export const generateAsyncAction = (requestPromise, actionType) => {
	return dispatch => {
		dispatch(generateAction(actionType.STARTED));
		requestPromise
			.then(res => {
				dispatch(generateAction(actionType.SUCCESS, res));
			})
			.catch(err => {
				dispatch(generateAction(actionType.FAILURE, err));
			});
	};
};
