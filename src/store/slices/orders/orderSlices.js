import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
	name: "order",
	initialState: {
		isLoadingOrder: false,
		products: [],
	},
	reducers: {
		startLoadingOrder: (state) => {
			state.isLoadingOrder = true;
		},
		setOrder: (state, action) => {
			state.isLoadingOrder = false;
			state.products = action.payload.products;
			state.status = action.payload.status;
			state.date = action.payload.date;
			state.delivery = action.payload.delivary;
			state.total = action.payload.total;
			state.discount = action.payload.discount;
			state.reviews = action.payload.reviews;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setOrder, startLoadingOrder } = orderSlice.actions;
