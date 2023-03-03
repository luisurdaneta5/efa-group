export const formatNumber = (number, code, currency) => {
	return new Intl.NumberFormat(code, {
		style: "currency",
		currency: currency,
	}).format(number);
};
