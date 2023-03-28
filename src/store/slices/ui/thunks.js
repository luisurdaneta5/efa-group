import { toast } from "react-toastify";
import Fetch from "../../../api/Fetch";
import { setCategories, setFavs, setOrders, setProducts, setProductsDiscount, setProductsHome, setRecords, setReviews, setUsers, startLoading } from "./uiSlices";

export const startLoadingUsers = (query = " ", page = 0) => {
	return async (dispatch) => {
		await dispatch(startLoading());

		const pageAsNumber = parseInt(page);

		await Fetch.get("/users/get", {
			params: {
				page: pageAsNumber,
				size: 10,
				query,
			},
		})
			.then((res) => {
				const { users } = res.data;

				dispatch(
					setUsers({
						users: users.rows,
						page: pageAsNumber + 1,
						totalPages: Math.ceil(users.count / 10),
					})
				);
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export const startLoadingCategories = (query = "", page = 0) => {
	return async (dispatch) => {
		await dispatch(startLoading());

		const pageAsNumber = parseInt(page);

		await Fetch.get("/categories/get", {
			params: {
				page: pageAsNumber,
				size: 12,
				query,
			},
		})
			.then((res) => {
				const { categories } = res.data;

				dispatch(
					setCategories({
						categories: categories.rows,
						page: pageAsNumber + 1,
						totalPages: Math.ceil(categories.count / 12),
					})
				);
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export const startLoadingProducts = (query = " ", page = 0) => {
	return async (dispatch) => {
		await dispatch(startLoading());

		const pageAsNumber = parseInt(page);

		await Fetch.get("/products/get", {
			params: {
				page: pageAsNumber,
				size: 10,
				query,
			},
		})
			.then((res) => {
				const { products } = res.data;

				dispatch(
					setProducts({
						products: products.rows,
						page: pageAsNumber + 1,
						totalPages: Math.ceil(products.count / 10),
					})
				);
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export const startLoadingProductsDiscount = () => {
	return async (dispatch) => {
		await dispatch(startLoading());

		await Fetch.get("/products/discount")
			.then((res) => {
				dispatch(setProductsDiscount(res.data.products));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const startLoadingProductsHome = (query = "") => {
	return async (dispatch) => {
		await dispatch(startLoading());

		await Fetch.get("/products/home", {
			params: {
				query,
			},
		})
			.then((res) => {
				dispatch(setProductsHome(res.data.products));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const startLoadingFavs = (uid, query, page = 0) => {
	return async (dispatch) => {
		await dispatch(startLoading());

		const pageAsNumber = parseInt(page);

		await Fetch.get("/favorites/getAll", {
			params: {
				uid,
				page: pageAsNumber,
				size: 10,
				query,
			},
		})
			.then((res) => {
				const { favorites } = res.data;
				dispatch(
					setFavs({
						favs: favorites.rows,
						page: pageAsNumber + 1,
						totalPages: Math.ceil(favorites.count / 10),
					})
				);
			})
			.catch((err) => {
				console.log(err);
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

export const startLoadingOrders = (uid, page = 0, query = " ") => {
	return async (dispatch) => {
		await dispatch(startLoading());

		const pageAsNumber = parseInt(page);

		await Fetch.get("/orders/my-orders", {
			params: {
				uid,
				page: pageAsNumber,
				size: 5,
				query,
			},
		})
			.then((res) => {
				const { orders } = res.data;

				dispatch(
					setOrders({
						orders: orders.rows,
						page: pageAsNumber + 1,
						totalPages: Math.ceil(orders.count / 5),
					})
				);
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const startLoadinRecords = (uid) => {
	return async (dispatch) => {
		await dispatch(startLoading());

		await Fetch.get("/records/get", {
			params: {
				uid,
			},
		})
			.then((res) => {
				dispatch(setRecords(res.data.products));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const startLoadingOrdersPending = (query = " ", page = 0) => {
	return async (dispatch) => {
		await dispatch(startLoading());

		const pageAsNumber = parseInt(page);

		await Fetch.get("/orders/pending", {
			params: {
				page: pageAsNumber,
				size: 10,
				query,
			},
		})
			.then((res) => {
				const { orders } = res.data;
				dispatch(
					setOrders({
						orders: orders.rows,
						page: pageAsNumber + 1,
						totalPages: Math.ceil(orders.count / 10),
					})
				);
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const startLoadingOrdersComplete = (query = " ", page = 0) => {
	return async (dispatch) => {
		await dispatch(startLoading());

		const pageAsNumber = parseInt(page);

		await Fetch.get("/orders/complete", {
			params: {
				page: pageAsNumber,
				size: 10,
				query,
			},
		})
			.then((res) => {
				const { orders } = res.data;
				dispatch(
					setOrders({
						orders: orders.rows,
						page: pageAsNumber + 1,
						totalPages: Math.ceil(orders.count / 10),
					})
				);
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const startLoadingReviews = (query = " ", page = 0) => {
	return async (dispatch) => {
		await dispatch(startLoading());

		const pageAsNumber = parseInt(page);

		await Fetch.get("/reviews/get", {
			params: {
				page: pageAsNumber,
				size: 10,
				query,
			},
		})
			.then((res) => {
				const { reviews } = res.data;

				dispatch(
					setReviews({
						reviews: reviews.rows,
						page: pageAsNumber + 1,
						totalPages: Math.ceil(reviews.count / 10),
					})
				);
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
