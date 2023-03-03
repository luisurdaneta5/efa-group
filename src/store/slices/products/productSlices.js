import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
	name: "product",
	initialState: {
		isLoading: false,
		img: "",
		name: "",
		brand: "",
		category: "",
		description: "",
		stock: "",
		cost: "",
		profit: "",
		discount: "",
		price: "",
		reviews: [],
	},
	reducers: {
		startLoading: (state) => {
			state.isLoading = true;
			state.img = "";
			state.name = "";
			state.brand = "";
			state.category = "";
			state.description = "";
			state.stock = "";
			state.cost = "";
			state.profit = "";
			state.discount = "";
			state.price = "";
			state.reviews = [];
		},
		setProduct: (state, action) => {
			state.img = action.payload.img;
			state.name = action.payload.name;
			state.brand = action.payload.brand;
			state.category = action.payload.category;
			state.description = action.payload.description;
			state.stock = action.payload.stock;
			state.cost = action.payload.cost;
			state.profit = action.payload.profit;
			state.discount = action.payload.discount;
			state.price = action.payload.price;
			state.reviews = action.payload.reviews;
			state.isLoading = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { startLoading, setProduct } = productSlice.actions;
