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

                dispatch(AddShoppingCart(item));
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

                dispatch(UpdateShoppingCart(data));
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

export const deleteItem = (uid, item) => {
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
