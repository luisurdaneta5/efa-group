import Fetch from "../api/Fetch";
import { getDataUser, setFavs, setLogin, setLogout, startLoading } from "../store/slices/auth";
import { emptyShoppingCart, getShoppingCart } from "../store/slices/cart";

export const checkToken = (eventSuccessLogin = () => {}) => {
	return async (dispatch) => {
		const token = localStorage.getItem("token");

		if (!token) {
			return () => {
				dispatch(setLogout());
				dispatch(emptyShoppingCart());
			};
		}

		await dispatch(startLoading());

		try {
			const { data } = await Fetch.get("/auth/renew");

			localStorage.setItem("token", data.token);
			localStorage.setItem("token-init-date", new Date().getTime());
			// localStorage.setItem("codeType", data.type);

			Fetch.get("/favorites/getSingle", {
				params: {
					uid: data.uid,
				},
			}).then((res) => dispatch(setFavs(res.data.favorite)));

			dispatch(getShoppingCart(data.uid));

			dispatch(
				setLogin({
					uid: data.uid,
					displayName: data.name,
					avatar: data.avatar,
					type: data.type,
					email: data.email,
					phone: data.phone,
				})
			);

			dispatch(getDataUser(data.uid));

			if (data.token) {
				eventSuccessLogin(data.type);
			}
		} catch (error) {
			localStorage.clear();
			dispatch(setLogout());
			dispatch(emptyShoppingCart());
		}
	};
};
