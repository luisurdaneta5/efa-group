import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		isLoading: false,
		isAuthenticated: false,
		user: {
			uid: " ",
			type: "",
		},
		userData: {
			LoadingData: false,
			displayName: " ",
			avatar: "",
			email: "",
			phone: "",
			balance: "",
			favs: [],
		},
	},
	reducers: {
		startLoading: (state) => {
			state.isLoading = true;
		},
		startLoadingData: (state) => {
			state.userData.LoadingData = true;
		},
		setLogin: (state, action) => {
			state.isLoading = false;
			state.isAuthenticated = true;
			state.user.uid = action.payload.uid;
			state.user.type = action.payload.type;
		},
		setLogout: (state) => {
			state.isAuthenticated = false;
			state.isLoading = false;
			state.user = {};
			state.userData = {
				LoadingData: false,
				displayName: " ",
				avatar: "",
				email: "",
				phone: "",
				favs: [],
			};
		},
		setFavs: (state, action) => {
			state.userData.favs = action.payload;
		},
		setData: (state, action) => {
			state.userData.LoadingData = false;
			state.userData.displayName = action.payload.name;
			state.userData.email = action.payload.email;
			state.userData.phone = action.payload.phone;
			state.userData.avatar = action.payload.avatar;
			state.userData.balance = action.payload.balance;
		},
		changeAvatar: (state, action) => {
			state.userData.avatar = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { startLoading, setLogin, setLogout, setFavs, setData, startLoadingData, changeAvatar } = authSlice.actions;
