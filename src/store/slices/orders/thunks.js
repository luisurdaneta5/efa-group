import { toast } from "react-toastify";
import Fetch from "../../../api/Fetch";
import { setOrder, startLoadingOrder } from "./orderSlices";

export const startLoadingOrderById = (id, uid) => {
	return async (dispatch) => {
		await dispatch(startLoadingOrder());

		if (!uid) {
			await Fetch.get("/orders/get", {
				params: {
					id,
				},
			})
				.then((res) => {
					const { order } = res.data;

					const payload = {
						products: JSON.parse(order.products),
						status: order.status,
						delivery: order.delivery_date,
						total: order.total,
						date: order.createdAt,
						discount: order.discount,
						address: order.address,
						nameFact: order.name,
						dni: order.dni,
						note: order.note,
						user: order.user.name,
						emailUser: order.user.email,
						phone: order.user.phone,
					};

					dispatch(setOrder(payload));
				})
				.catch((err) => {
					toast.error(err.response.data.msg, {
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
		} else {
			await Fetch.get("/orders/get", {
				params: {
					uid,
					id,
				},
			})
				.then((res) => {
					const { order, reviews } = res.data;
					const payload = {
						products: JSON.parse(order.products),
						status: order.status,
						delivery: order.delivery_date,
						total: order.total,
						date: order.createdAt,
						discount: order.discount,
						reviews: reviews,
					};

					dispatch(setOrder(payload));
				})
				.catch((err) => {
					toast.error(err.response.data.msg, {
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
		}
	};
};

export const changeStatus = (id, status) => {
	return async (dispatch) => {
		await Fetch.put("/orders/change-status", {
			id,
			status,
		})
			.then((res) => {
				dispatch(startLoadingOrderById(id));
				toast.success(res.data.msg, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			})
			.catch((err) => {
				toast.error(err.response.data.msg, {
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
