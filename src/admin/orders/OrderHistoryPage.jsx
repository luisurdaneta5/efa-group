import { LayoutAdminComponent } from "../../layouts/LayoutAdminComponent";
import { Box, Container, Divider, FormControl, InputAdornment, OutlinedInput, Pagination, Paper, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import { TabletOrders } from "./components/TabletOrders";
import { SearchComponent } from "../components/SearchComponent";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingOrdersComplete } from "../../store/slices/ui/thunks";

export const OrderHistoryPage = () => {
	const dispatch = useDispatch();
	const { orders, totalPages, page } = useSelector((state) => state.ui);

	useEffect(() => {
		dispatch(startLoadingOrdersComplete());
	}, [dispatch]);

	const handlePagination = (page) => {
		const pageNumber = page - 1;
		dispatch(startLoadingOrdersComplete(search, pageNumber));
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
						Historial de Ordenes
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						mt: 2,
					}}
				>
					<SearchComponent placeholder={"Buscar orden..."} search={search} handleChange={handleChange} module={"ordersComplete"} />
				</Box>

				<Box sx={{ mt: 2 }}>
					<Paper>
						<TabletOrders orders={orders} />
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
