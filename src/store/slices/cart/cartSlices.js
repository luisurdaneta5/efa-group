import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: "shoppingcart",
	initialState: {
		items: [],
		coupon: null,
		total: 0,
	},
	reducers: {
		setShoppingCart: (state, action) => {
			state.items = action.payload.items;
			state.total = action.payload.total;
		},
		AddShoppingCart: (state, action) => {
			state.items = [...state.items, action.payload];
			state.total = state.total + action.payload.price;
		},
		UpdateShoppingCart: (state, action) => {
			state.items = [...state.items.map((item) => (item.id === action.payload.id ? action.payload : item))];
			state.total = state.total + action.payload.price;
		},
		RemoveShoppingCart: (state, action) => {
			state.items = [...state.items.map((item) => (item.id === action.payload.id ? action.payload : item))];

			state.total = state.total - action.payload.price;
		},
		ClearShoppingCart: (state, action) => {
			state.items = state.items.filter((item) => item.id !== action.payload.id);
			state.total = state.total - action.payload.price;
		},
		SetCoupon: (state, action) => {
			state.coupon = action.payload;
		},
		emptyShoppingCart: (state) => {
			state.items = [];
			state.coupon = null;
			state.total = 0;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	AddShoppingCart,
	UpdateShoppingCart,
	RemoveShoppingCart,
	ClearShoppingCart,
	SetCoupon,
	setShoppingCart,
	emptyShoppingCart,
} = cartSlice.actions;
