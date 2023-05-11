import { useState } from "react";
import { toast } from "react-toastify";
import Fetch from "../../../api/Fetch";
import { getShoppingCart, setShoppingCart } from "../cart";
import { setData, setFavs, setLogin, setLogout, startLoading, startLoadingData } from "./authSlices";

export const startLoginWithEmailAndPassword = (email, password, eventSuccessLogin = () => {}) => {
	return async (dispatch) => {
		await dispatch(startLoading());

		Fetch.post("/auth/login", { email, password })
			.then((res) => {
				localStorage.setItem("token", res.data.token);
				localStorage.setItem("token-init-date", new Date().getTime());
				localStorage.setItem("codeType", res.data.type);

				Fetch.get("/favorites/getSingle", {
					params: {
						uid: res.data.uid,
					},
				}).then((res) => dispatch(setFavs(res.data.favorite)));

				dispatch(getShoppingCart(res.data.uid));

				dispatch(
					setLogin({
						uid: res.data.uid,
						displayName: res.data.name,
						avatar: res.data.avatar,
						type: res.data.type,
						email: res.data.email,
						phone: res.data.phone,
					})
				);

				if (res.data.token) {
					eventSuccessLogin(res.data.type);
				}
			})
			.catch((err) => {
				toast.error("Ha ocurrido un error inesperado porfavor intente mas tarde", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
				dispatch(setLogout());
			});
	};
};

export const getDataUser = (uid) => {
	return async (dispatch) => {
		await dispatch(startLoadingData());
		Fetch.get("/users/get/single", {
			params: {
				uid,
			},
		})
			.then((res) => {
				dispatch(
					setData({
						name: res.data.name,
						email: res.data.email,
						phone: res.data.phone,
						avatar: res.data.avatar,
						balance: res.data.balance,
					})
				);
			})
			.catch((err) => {
				toast.error("Ha ocurrido un error inesperado porfavor intente mas tarde", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			});
	};
};
