import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: "ui",
    initialState: {
        isLoadingUi: false,
        page: 0,
        totalPages: 0,
        users: [],
        categories: [],
        products: [],
        productsDiscount: [],
        productsHome: [],
        favs: [],
        orders: [],
        records: [],
        reviews: [],
        exchanges: [],
    },
    reducers: {
        startLoading: (state) => {
            state.isLoadingUi = true;
        },
        setUsers: (state, action) => {
            state.isLoadingUi = false;
            state.users = action.payload.users;
            state.page = action.payload.page;
            state.totalPages = action.payload.totalPages;
        },
        setCategories: (state, action) => {
            state.isLoadingUi = false;
            state.categories = action.payload.categories;
            state.page = action.payload.page;
            state.totalPages = action.payload.totalPages;
        },
        setProducts: (state, action) => {
            state.isLoadingUi = false;
            state.products = action.payload.products;
            state.page = action.payload.page;
            state.totalPages = action.payload.totalPages;
        },
        setProductsDiscount: (state, action) => {
            state.isLoadingUi = false;
            state.productsDiscount = action.payload;
        },
        setProductsHome: (state, action) => {
            state.isLoadingUi = false;
            state.productsHome = action.payload;
        },
        setFavs: (state, action) => {
            state.isLoadingUi = false;
            state.favs = action.payload.favs;
            state.page = action.payload.page;
            state.totalPages = action.payload.totalPages;
        },
        setOrders: (state, action) => {
            state.isLoadingUi = false;
            state.orders = action.payload.orders;
            state.page = action.payload.page;
            state.totalPages = action.payload.totalPages;
        },
        setRecords: (state, action) => {
            state.isLoadingUi = false;
            state.records = action.payload;
        },
        setReviews: (state, action) => {
            state.reviews = action.payload.reviews;
            state.page = action.payload.page;
            state.totalPages = action.payload.totalPages;
            state.isLoadingUi = false;
        },
        setExchanges: (state, action) => {
            state.exchanges = action.payload.exchanges;
            state.page = action.payload.page;
            state.totalPages = action.payload.totalPages;
            state.isLoadingUi = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { startLoading, setUsers, setCategories, setProducts, setProductsDiscount, setProductsHome, setFavs, setOrders, setRecords, setReviews, setExchanges } =
    uiSlice.actions;
