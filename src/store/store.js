import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth";
import { cartSlice } from "./slices/cart/cartSlices";
import { uiSlice } from "./slices/ui/uiSlices";

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		shoppingcart: cartSlice.reducer,
		ui: uiSlice.reducer,
	},
});
