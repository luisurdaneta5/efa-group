import React from "react";
import { Route, Routes } from "react-router-dom";
import { ChargeBalancePage } from "../pages/dashboard/balance/ChargeBalancePage";
import { OrderDetailsPage } from "../pages/dashboard/orders/OrderDetailsPage";
import { OrdersPage } from "../pages/dashboard/orders/OrdersPage";
import { ProfileEditPage } from "../pages/dashboard/profile/ProfileEditPage";
import { ProfilePage } from "../pages/dashboard/profile/ProfilePage";
import { TicketDetailPage } from "../pages/dashboard/support/TicketDetailPage";
import { TicketsPage } from "../pages/dashboard/support/TicketsPage";
import { WishesPage } from "../pages/dashboard/wishes/WishesPage";

export const ClientRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<ProfilePage />} />
			<Route path='/change-balance' element={<ChargeBalancePage />} />
			<Route path='/profile/edit' element={<ProfileEditPage />} />
			<Route path='orders' element={<OrdersPage />} />
			<Route path='order/detail/:id' element={<OrderDetailsPage />} />
			<Route path='wishes' element={<WishesPage />} />
			<Route path='support/tickets' element={<TicketsPage />} />
			<Route path='support/tickets/details' element={<TicketDetailPage />} />
		</Routes>
	);
};
