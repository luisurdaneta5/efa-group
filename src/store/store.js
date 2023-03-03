import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth";
import { cartSlice } from "./slices/cart/cartSlices";
import { configSlice } from "./slices/config/configSlices";
import { orderSlice } from "./slices/orders";
import { productSlice } from "./slices/products";
import { uiSlice } from "./slices/ui/uiSlices";

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		ui: uiSlice.reducer,
		shoppingcart: cartSlice.reducer,
		product: productSlice.reducer,
		config: configSlice.reducer,
		order: orderSlice.reducer,
	},
});
