import { toast } from "react-toastify";
import Fetch from "../../../api/Fetch";
import { setProduct, startLoading } from "./productSlices";

export const getProduct = (id) => {
	return async (dispatch) => {
		await dispatch(startLoading());

		await Fetch.get("/products/get", {
			params: {
				id,
			},
		})
			.then((res) => {
				dispatch(setProduct(res.data.product));
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

export const setRecordProduct = (uid, productId) => {
	return async (dispatch) => {
		await Fetch.put("/records/set", { uid, productId })
			.then((res) => {})
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
