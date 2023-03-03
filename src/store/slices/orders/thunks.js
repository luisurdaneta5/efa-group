import { toast } from "react-toastify";
import Fetch from "../../../api/Fetch";
import { setOrder, startLoadingOrder } from "./orderSlices";

export const startLoadingOrderById = (uid, id) => {
	return async (dispatch) => {
		await dispatch(startLoadingOrder());

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
	};
};
