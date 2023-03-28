import Fetch from "../../../api/Fetch";
import {
	setChartData,
	setLastOrders,
	setOrders,
	setPoductSales,
	setSalesMonth,
	setSalesToday,
	setSalesWeek,
	setUsersRegister,
	setVisits,
	setProductWithStock,
} from "./dashboardSlices";

export const startLoadingDataDashboard = () => {
	return async (dispatch) => {
		await Fetch.get("/sales/today")
			.then((res) => dispatch(setSalesToday(res.data.amount)))
			.catch((err) => console.log(err));

		await Fetch.get("/sales/week")
			.then((res) => dispatch(setSalesWeek(res.data.amount)))
			.catch((err) => console.log(err));

		await Fetch.get("/sales/month")
			.then((res) => dispatch(setSalesMonth(res.data.amount)))
			.catch((err) => console.log(err));

		await Fetch.get("/visits/get")
			.then((res) => dispatch(setVisits(res.data.visits)))
			.catch((err) => console.log(err));

		await Fetch.get("/orders/get/all")
			.then((res) =>
				dispatch(
					setOrders({
						cant: res.data.cant,
						amount: res.data.amount,
					})
				)
			)
			.catch((err) => console.log(err));

		await Fetch.get("/sales/items")
			.then((res) => {
				dispatch(
					setPoductSales({
						cant: res.data.cant,
						amount: res.data.amount,
					})
				);
			})
			.catch((err) => console.log(err));

		await Fetch.get("/users/count")
			.then((res) => dispatch(setUsersRegister(res.data.users)))
			.catch((err) => console.log(err));

		await Fetch.get("/sales/data-chart")
			.then((res) => {
				const data = {
					thisYear: res.data.ThisYear,
					dataThisYear: res.data.salesNowYear,
					lastYear: res.data.lastYear,
					dataLastYear: res.data.salesPastYear,
				};
				dispatch(setChartData(data));
			})
			.catch((err) => console.log(err));

		await Fetch.get("/orders/get/dashboard")
			.then((res) => {
				dispatch(setLastOrders(res.data.orders));
			})
			.catch((err) => console.log(err));

		await Fetch.get("/products/outstock")
			.then((res) => {
				dispatch(setProductWithStock(res.data.products));
			})
			.catch((err) => console.log(err));
	};
};
