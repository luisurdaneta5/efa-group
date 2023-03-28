import { Route, Routes } from "react-router-dom";
import { CategoriesPage } from "../admin/categories/CategoriesPage";
import { ConfigPage } from "../admin/configuration/ConfigPage";
import { CustomersCreatePage } from "../admin/customers/CustomersCreatePage";
import { CustomersDetailsPage } from "../admin/customers/CustomersDetailsPage";
import { CustomersEditPage } from "../admin/customers/CustomersEditPage";
import { CustomersPage } from "../admin/customers/CustomersPage";
import { Index } from "../admin/Index";
import { OrderDetailsAdminPage } from "../admin/orders/OrderDetailsAdminPage";
import { OrderHistoryPage } from "../admin/orders/OrderHistoryPage";
import { OrdersListPage } from "../admin/orders/OrdersListPage";
import { ProductCreatePage } from "../admin/products/ProductCreatePage";
import { ProductEditPage } from "../admin/products/ProductEditPage";
import { ProductListPage } from "../admin/products/ProductListPage";
import { ReviewsPage } from "../admin/reviews/ReviewsPage";

export const AdminRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Index />} />
			<Route path='products' element={<ProductListPage />} />
			<Route path='products/create' element={<ProductCreatePage />} />
			<Route path='products/edit/:id' element={<ProductEditPage />} />

			<Route path='customers' element={<CustomersPage />} />
			<Route path='customers/create' element={<CustomersCreatePage />} />
			<Route path='customers/edit/:uid' element={<CustomersEditPage />} />
			<Route path='customers/view/details/:uid' element={<CustomersDetailsPage />} />

			<Route path='categories' element={<CategoriesPage />} />

			<Route path='orders' element={<OrdersListPage />} />
			<Route path='orders/history' element={<OrderHistoryPage />} />
			<Route path='order/details/:id' element={<OrderDetailsAdminPage />} />

			<Route path='reviews' element={<ReviewsPage />} />

			<Route path='configuration/:id' element={<ConfigPage />} />
		</Routes>
	);
};
