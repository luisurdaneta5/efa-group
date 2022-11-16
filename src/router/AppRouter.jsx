import React from "react";
import { Route, Routes } from "react-router-dom";
import { ConfigPage } from "../admin/configuration/ConfigPage";
import { CustomersPage } from "../admin/customers/CustomersPage";
import { Index } from "../admin/Index";
import { OrderDetailsAdminPage } from "../admin/orders/OrderDetailsAdminPage";
import { OrderHistoryPage } from "../admin/orders/OrderHistoryPage";
import { OrdersListPage } from "../admin/orders/OrdersListPage";
import { ProductCreatePage } from "../admin/products/ProductCreatePage";
import { ProductEditPage } from "../admin/products/ProductEditPage";
import { ProductListPage } from "../admin/products/ProductListPage";
import { ReviewsPage } from "../admin/reviews/ReviewsPage";
import { NoFoundPage } from "../pages/404/NoFoundPage";
import { AboutPage } from "../pages/aboutUs/AboutPage";
import { ContactPage } from "../pages/contactus/ContactPage";
import { OrderDetailsPage } from "../pages/dashboard/orders/OrderDetailsPage";
import { OrdersPage } from "../pages/dashboard/orders/OrdersPage";
import { ProfilePage } from "../pages/dashboard/profile/ProfilePage";
import { TicketDetailPage } from "../pages/dashboard/support/TicketDetailPage";
import { TicketsPage } from "../pages/dashboard/support/TicketsPage";
import { WishesPage } from "../pages/dashboard/wishes/WishesPage";
import { HomePage } from "../pages/home/HomePage";
import { ProductPage } from "../pages/products/ProductPage";
import { SearchPage } from "../pages/search/SearchPage";
import { CartDetailPage } from "../pages/shopping/CartDetailPage";
import { CartPage } from "../pages/shopping/CartPage";
import { SignupPage } from "../pages/signup/SignupPage";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/cart' element={<CartPage />} />
			<Route path='/cart/details' element={<CartDetailPage />} />
			<Route path='/about-us' element={<AboutPage />} />
			<Route path='/contact-us' element={<ContactPage />} />
			<Route path='/search' element={<SearchPage />} />
			<Route path='/product/iditem' element={<ProductPage />} />
			<Route path='/sign-up' element={<SignupPage />} />

			{/* Private Client*/}
			<Route path='/dashboard' element={<ProfilePage />} />
			<Route path='/dashboard/orders' element={<OrdersPage />} />
			<Route
				path='/dashboard/order/detail'
				element={<OrderDetailsPage />}
			/>
			<Route path='/dashboard/wishes' element={<WishesPage />} />
			<Route
				path='/dashboard/support/tickets'
				element={<TicketsPage />}
			/>
			<Route
				path='/dashboard/support/tickets/details'
				element={<TicketDetailPage />}
			/>

			{/* Private Admin*/}
			<Route path='/admin/dashboard' element={<Index />} />
			<Route
				path='/admin/dashboard/products'
				element={<ProductListPage />}
			/>
			<Route
				path='/admin/dashboard/products/create'
				element={<ProductCreatePage />}
			/>
			<Route
				path='/admin/dashboard/products/edit'
				element={<ProductEditPage />}
			/>
			<Route
				path='/admin/dashboard/customers'
				element={<CustomersPage />}
			/>

			<Route
				path='/admin/dashboard/orders'
				element={<OrdersListPage />}
			/>

			<Route
				path='/admin/dashboard/orders/history'
				element={<OrderHistoryPage />}
			/>

			<Route
				path='/admin/dashboard/order/details'
				element={<OrderDetailsAdminPage />}
			/>

			<Route path='/admin/dashboard/reviews' element={<ReviewsPage />} />

			<Route
				path='/admin/dashboard/configuration'
				element={<ConfigPage />}
			/>

			<Route path='*' element={<NoFoundPage />} />
		</Routes>
	);
};
