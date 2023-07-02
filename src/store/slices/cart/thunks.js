import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Fetch from "../../../api/Fetch";
import { AddShoppingCart, ClearShoppingCart, RemoveShoppingCart, setShoppingCart, UpdateShoppingCart } from "./cartSlices";

export const getShoppingCart = (uid) => {
	return async (dispatch) => {
		await Fetch.get("/shoppingcarts/get", {
			params: {
				uid: uid,
			},
		}).then((res) => {
			if (res.data.items.length !== 0) {
				let total = 0;

				for (let item of res.data.items) {
					total += item.price * item.count;
				}

				dispatch(
					setShoppingCart({
						total: total,
						items: res.data.items,
					})
				);
			}
		});
	};
};

export const addItem = (uid, item) => {
	return async (dispatch) => {
		await Fetch.post("/shoppingcarts/add", { uid, product: item.id })
			.then((res) => {
				toast.success(res.data.msg, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				console.log("ADD", item);
				dispatch(AddShoppingCart(item));
			})
			.catch((err) => console.log(err));
	};
};

export const updateItem = (uid, data) => {
	return async (dispatch) => {
		await Fetch.put("/shoppingcarts/update", {
			uid,
			productId: data.id,
			count: data.count,
		})
			.then((res) => {
				toast.success(res.data.msg, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				console.log(data);
				dispatch(UpdateShoppingCart(data));
			})
			.catch((err) => console.log(err));
	};
};

export const removeItem = (uid, data) => {
	return async (dispatch) => {
		await Fetch.put("/shoppingcarts/remove", {
			uid,
			productId: data.id,
			count: data.count,
		})
			.then((res) => {
				toast.warning(res.data.msg, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				dispatch(RemoveShoppingCart(data));
			})
			.catch((err) => console.log(err));
	};
};

export const deleteItem = (uid, item) => {
	console.log(uid);
	return async (dispatch) => {
		await Fetch.delete("/shoppingcarts/delete", {
			params: {
				userId: uid,
				productId: item.id,
			},
		})
			.then((res) => {
				toast.warning(res.data.msg, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				dispatch(ClearShoppingCart(item));
			})
			.catch((err) => console.log(err));
	};
};
