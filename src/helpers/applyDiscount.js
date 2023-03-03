export const applyDiscount = (price, discount = 0) => {
	const amount = (price * discount) / 100;
	return amount;
};
