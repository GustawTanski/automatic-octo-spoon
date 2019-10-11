const TYPE = "TEST_LOG";

const testReducer = (tests = [], action) => {
	if (action.type === TYPE) {
		console.log(action.payload);
		tests = [...tests, action.payload];
		return tests;
	}

	return tests;
};

export { testReducer };
