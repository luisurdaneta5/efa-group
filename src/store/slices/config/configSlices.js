import { createSlice } from "@reduxjs/toolkit";

export const configSlice = createSlice({
    name: "config",
    initialState: {
        isLoadingConfig: false,
        general: {
            address: "",
            email: "",
            description: "",
        },
        rss: {
            facebook: "",
            twitter: "",
            instagram: "",
            whatsapp: "",
        },
        money: {
            iva: "",
            exchangeRate: "",
        },
        banners: [],
        slider: {
            text1: "",
            text2: "",
            visible: "",
        },
        notifications_email: [],
        banks_accounts: [],
    },
    reducers: {
        startLoading: (state) => {
            state.isLoadingConfig = true;
        },
        setSettings: (state, action) => {
            state.general.address = action.payload.address;
            state.general.email = action.payload.email;
            state.general.description = action.payload.description;
            state.rss.facebook = action.payload.facebook;
            state.rss.twitter = action.payload.twitter;
            state.rss.instagram = action.payload.instagram;
            state.rss.whatsapp = action.payload.whatsapp;
            state.money.iva = action.payload.iva;
            state.money.exchangeRate = action.payload.exchangeRate;
            state.slider.text1 = action.payload.text1;
            state.slider.text2 = action.payload.text2;
            state.slider.visible = action.payload.statusText == 1 ? true : false;
            state.isLoadingConfig = false;
        },
        setBanner: (state, action) => {
            state.banners = action.payload;
            state.isLoadingConfig = false;
        },
        setNotificationsEmails: (state, action) => {
            state.notifications_email = action.payload;
            state.isLoadingConfig = false;
        },
        setBanksAccounts: (state, action) => {
            state.banks_accounts = action.payload;
            state.isLoadingConfig = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { startLoading, setSettings, setBanner, setNotificationsEmails, setBanksAccounts } = configSlice.actions;
