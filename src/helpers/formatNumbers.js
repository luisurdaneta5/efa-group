export const formatNumber = (number) => {
	return new Intl.NumberFormat("EN-US", {
		style: "currency",
		currency: "USD",
	}).format(number);
};
