export default (rate, bcgColor) => {
	let backgroundColor = null;
	let value = rate < 2 ? 1 : 2;
	if (rate <= 2) {
		backgroundColor = bcgColor.red;
		return backgroundColor;
	} else if (rate == 2.5) {
		backgroundColor = bcgColor.orange;
		return backgroundColor;
	} else {
		backgroundColor = bcgColor.default;
		return backgroundColor;
	}
};
