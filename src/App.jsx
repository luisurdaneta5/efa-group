import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";

export const App = () => {
	return (
		<AppTheme>
			<AppRouter />
			<ToastContainer />
		</AppTheme>
	);
};
