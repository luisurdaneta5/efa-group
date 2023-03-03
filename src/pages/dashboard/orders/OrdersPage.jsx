import {
	Box,
	Paper,
	Typography,
	Grid,
	Chip,
	IconButton,
	Pagination,
	FormControl,
	InputAdornment,
	Input,
	OutlinedInput,
	Skeleton,
	Alert,
} from "@mui/material";
import { DashboardLayout } from "../DashboardLayout";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./styles.css";
import { AccountCircle, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { startLoadingOrders } from "../../../store/slices/ui";
import { useState } from "react";
import { formatNumber } from "../../../helpers/formatNumbers";
import moment from "moment/moment";
import "moment/locale/es-mx";

export const OrdersPage = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);
	const { isLoadingUi, orders, page, totalPages } = useSelector((state) => state.ui);

	const [search, setSearch] = useState("");

	useEffect(() => {
		dispatch(startLoadingOrders(user.uid));
	}, [dispatch]);

	const handlePagination = (page) => {
		const pageNumber = page - 1;
		dispatch(startLoadingOrders(user.uid, pageNumber));
	};

	const handleChange = (e) => {
		console.log(e.target.value);
		setSearch(e.target.value);
	};

	const handleSubmit = (e) => {
		if (e.charCode == 13) {
			console.log("entre");
			dispatch(startLoadingOrders(user.uid, 0, search));
		}
	};
	return (
		<DashboardLayout order={true}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<ShoppingBagIcon
						sx={{
							color: "#D23F57",
						}}
					/>
					<Typography
						color='initial'
						sx={{
							ml: 1,
							fontSize: "25px",
							fontWeight: "bold",
						}}
					>
						Mis Ordenes
					</Typography>
				</Box>
				<Box>
					<FormControl variant='standard'>
						<OutlinedInput
							size='small'
							id='input-with-icon-adornment'
							startAdornment={
								<InputAdornment position='start'>
									<Search />
								</InputAdornment>
							}
							value={search}
							onChange={handleChange}
							name='search'
							onKeyPress={handleSubmit}
						/>
					</FormControl>
				</Box>
			</Box>

			<Grid
				container
				spacing={2}
				sx={{
					mt: 1,
					padding: "0px 18px",
				}}
			>
				<Grid item lg={3}>
					<Typography
						color='initial'
						sx={{
							fontSize: "16px",
							color: "rgb(125, 135, 156)",
							textAlign: "left",
							fontWeight: 500,
							margin: "0px 0px",
						}}
					>
						Orden #
					</Typography>
				</Grid>
				<Grid item lg={2}>
					<Typography
						color='initial'
						sx={{
							fontSize: "16px",
							color: "rgb(125, 135, 156)",
							textAlign: "left",
							fontWeight: 500,
							margin: "0px 0px",
						}}
					>
						Status
					</Typography>
				</Grid>
				<Grid item lg={3}>
					<Typography
						color='initial'
						sx={{
							fontSize: "16px",
							color: "rgb(125, 135, 156)",
							textAlign: "left",
							fontWeight: 500,
						}}
					>
						Fecha Compra
					</Typography>
				</Grid>
				<Grid item lg={3}>
					<Typography
						color='initial'
						sx={{
							fontSize: "16px",
							color: "rgb(125, 135, 156)",
							alignItems: "left",
							fontWeight: 500,
							margin: "0px 16px",
						}}
					>
						Total
					</Typography>
				</Grid>
				<Grid item lg={1}></Grid>
			</Grid>
			{orders.length == 0 && (
				<Grid item lg={12} sx={{ mt: 3 }}>
					<Alert severity='info'>Usted no posee Ordenes {search && <span> con {search}</span>} </Alert>
				</Grid>
			)}
			{orders.map((order) =>
				isLoadingUi ? (
					<Skeleton animation='wave' width={"100%"} height={75} className='order-list-paper' />
				) : (
					<Link key={order.id} to={`/dashboard/order/detail/${order.id}`}>
						<Paper className='paper order-list-paper'>
							<Grid
								container
								spacing={2}
								sx={{
									display: "flex",
									alignItems: "center",
								}}
							>
								<Grid item lg={3}>
									<Typography variant='body1' color='initial' className='order-id'>
										{order.id.substr(0, 8).toUpperCase()}
									</Typography>
								</Grid>
								<Grid item lg={2} sx={{}}>
									{order.status == 0 && (
										<Chip label='Pendiente' size='small' color='warning' className='chip-warning' />
									)}

									{order.status == 1 && (
										<Chip label='Entregado' size='small' color='warning' className='chip-success' />
									)}

									{order.status == 2 && (
										<Chip label='Cancelado' size='small' color='warning' className='chip-cancel' />
									)}

									{order.status == 3 && (
										<Chip
											label='Procesando'
											size='small'
											color='warning'
											className='chip-process'
										/>
									)}
								</Grid>

								<Grid item lg={3}>
									<Typography
										variant='body1'
										color='initial'
										sx={{
											fontSize: "14px",
										}}
									>
										{moment(order.createdAt).format("LL")}
									</Typography>
								</Grid>
								<Grid
									item
									lg={3}
									sx={{
										fontSize: "14px",
									}}
								>
									{formatNumber(order.total, "EN-US", "USD")}
								</Grid>
								<Grid item lg={1}>
									<IconButton>
										<ArrowForwardIcon />
									</IconButton>
								</Grid>
							</Grid>
						</Paper>
					</Link>
				)
			)}

			<Box
				sx={{
					mt: 5,
					display: "flex",
					justifyContent: "center",
				}}
			>
				{totalPages == 2 && (
					<Box
						sx={{
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
				)}
			</Box>
		</DashboardLayout>
	);
};
