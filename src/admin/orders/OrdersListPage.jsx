import { LayoutAdminComponent } from "../../layouts/LayoutAdminComponent";
import { Box, Container, Divider, FormControl, InputAdornment, OutlinedInput, Pagination, Paper, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import { TabletOrders } from "./components/TabletOrders";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingOrdersPending } from "../../store/slices/ui/thunks";
import { SearchComponent } from "../components/SearchComponent";

export const OrdersListPage = () => {
	const dispatch = useDispatch();
	const { orders, totalPages, page } = useSelector((state) => state.ui);

	useEffect(() => {
		dispatch(startLoadingOrdersPending());
	}, [dispatch]);

	const handlePagination = (page) => {
		const pageNumber = page - 1;
		dispatch(startLoadingOrdersPending(search, pageNumber));
	};

	const [search, setSearch] = useState("");

	const handleChange = (e) => {
		setSearch(e.target.value);
	};
	return (
		<LayoutAdminComponent>
			<Container maxWidth='xl'>
				<Box
					sx={{
						mt: 2,
					}}
				>
					<Typography
						sx={{
							fontSize: "20px",
							fontWeight: 700,
						}}
					>
						Ordenes nuevas
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						mt: 2,
					}}
				>
					<SearchComponent placeholder={"Buscar orden..."} search={search} handleChange={handleChange} module={"orders"} />
				</Box>

				<Box sx={{ mt: 2 }}>
					<Paper>
						<TabletOrders orders={orders} search={search} />
						<Divider />
						<Box
							sx={{
								mt: 2,
								display: "flex",
								justifyContent: "center",
								padding: "30px 0px",
							}}
						>
							<Pagination
								onChange={(e, value) => {
									handlePagination(value);
								}}
								count={totalPages}
								variant='outlined'
								color='primary'
								hideNextButton={false}
								hidePrevButton={false}
							/>
						</Box>
					</Paper>
				</Box>
			</Container>
		</LayoutAdminComponent>
	);
};
