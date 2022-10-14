import React from "react";
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "../pages/aboutUs/AboutPage";
import { ContactPage } from "../pages/contactus/ContactPage";
import { DashboardPage } from "../pages/dashboard/DashboardPage";
import { HomePage } from "../pages/home/HomePage";
import { CartDetailPage } from "../pages/shopping/CartDetailPage";
import { CartPage } from "../pages/shopping/CartPage";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/cart' element={<CartPage />} />
			<Route path='/cart/details' element={<CartDetailPage />} />
			<Route path='/about-us' element={<AboutPage />} />
			<Route path='/contact-us' element={<ContactPage />} />

			{/* Private */}
			<Route path='/dashboard' element={<DashboardPage />} />
		</Routes>
	);
};
