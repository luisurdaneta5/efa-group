import { toast } from "react-toastify";
import Fetch from "../../../api/Fetch";
import { setBanner, setNotificationsEmails, setSettings, startLoading } from "./configSlices";

export const startLoadingConfig = (id) => {
    return async (dispatch) => {
        await dispatch(startLoading());

        await Fetch.get("/settings/get", {
            params: {
                id,
            },
        })
            .then((res) => {
                dispatch(setSettings(res.data.settings));
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
        await dispatch(startLoading());

        await Fetch.get("/settings/banner/get")
            .then((res) => {
                dispatch(setBanner(res.data.banners));
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

        await Fetch.get("/notifications/emails")
            .then((res) => {
                dispatch(setNotificationsEmails(res.data.emails));
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
