export const testLog = text => {
	return {
		type: "TEST_LOG",
		payload: text
	};
};
