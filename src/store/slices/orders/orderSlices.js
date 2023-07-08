import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    isLoadingOrder: false,
    products: [],
    status: 0,
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
      state.address = action.payload.address;
      state.nameFact = action.payload.nameFact;
      state.phoneFact = action.payload.phoneFact;
      state.dni = action.payload.dni;
      state.note = action.payload.note;
      state.email = action.payload.email;
      state.user = action.payload.user;
      state.emailUser = action.payload.emailUser;
      state.phone = action.payload.phone;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOrder, startLoadingOrder, setOrderAdmin } = orderSlice.actions;
