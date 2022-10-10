import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { CartPage } from "../pages/shopping/CartPage";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/cart' element={<CartPage />} />
		</Routes>
	);
};
