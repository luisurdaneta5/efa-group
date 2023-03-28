import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
	name: "dashboard",
	initialState: {
		isLoadingDashboardData: false,
		salesToday: "",
		orders: "",
		productsSales: "",
		grossSale: "",
		salesWeek: "",
		salesMonth: "",
		userRegister: "",
		visits: "",
		chart: {
			thisYear: "",
			dataThisYear: [],
			lastYear: "",
			dataLastYear: [],
		},
		lastOrders: [],
		productWithOutStock: [],
	},
	reducers: {
		startLoading: (state) => {
			state.isLoadingDashboardData = true;
		},
		setSalesToday: (state, action) => {
			state.salesToday = action.payload;
			state.isLoadingDashboardData = false;
		},
		setSalesWeek: (state, action) => {
			state.salesWeek = action.payload;
			state.isLoadingDashboardData = false;
		},
		setSalesMonth: (state, action) => {
			state.salesMonth = action.payload;
			state.isLoadingDashboardData = false;
		},
		setVisits: (state, action) => {
			state.visits = action.payload;
			state.isLoadingDashboardData = false;
		},
		setOrders: (state, action) => {
			state.orders = action.payload;
			state.isLoadingDashboardData = false;
		},
		setPoductSales: (state, action) => {
			state.productsSales = action.payload;
			state.isLoadingDashboardData = false;
		},
		setUsersRegister: (state, action) => {
			state.userRegister = action.payload;
			state.isLoadingDashboardData = false;
		},
		setChartData: (state, action) => {
			state.chart = action.payload;
			state.isLoadingDashboardData = false;
		},
		setLastOrders: (state, action) => {
			state.lastOrders = action.payload;
			state.isLoadingDashboardData = false;
		},
		setProductWithStock: (state, action) => {
			state.productWithOutStock = action.payload;
			state.isLoadingDashboardData = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	startLoading,
	setSalesToday,
	setVisits,
	setOrders,
	setPoductSales,
	setSalesMonth,
	setUsersRegister,
	setSalesWeek,
	setChartData,
	setLastOrders,
	setProductWithStock,
} = dashboardSlice.actions;
