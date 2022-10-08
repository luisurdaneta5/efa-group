import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		uid: "",
		displayName: "",
		isLoading: true,
	},
	reducers: {
		startLoading: (state) => {
			state.isLoading = true;
		},
		setLogin: (state, action) => {
			state.uid = action.payload.uid;
			state.displayName = action.payload.displayName;
			state.isLoading = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { startLoading, setLogin } = authSlice.actions;
