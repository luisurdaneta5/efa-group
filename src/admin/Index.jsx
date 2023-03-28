import { LayoutAdminComponent } from "../layouts/LayoutAdminComponent";
import { Paper, Container, Grid, Typography, Box, Button } from "@mui/material";
import { ReactComponent as Welcome } from "../assets/images/dashboard/welcome.svg";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Chart from "react-apexcharts";
import { TabletRecentPurchases } from "./components/TabletRecentPurchases";
import { TabletStockOutProducts } from "./components/TabletStockOutProducts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { startLoadingDataDashboard } from "../store/slices/dashboard/thunks";
import { formatNumber } from "../helpers/formatNumbers";
import { getDataUser } from "../store/slices/auth";
import { Link } from "react-router-dom";

export const Index = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);
	const { displayName } = useSelector((state) => state.auth.userData);
	const { salesToday, visits, orders, productsSales, salesMonth, userRegister, salesWeek, chart, lastOrders, productWithOutStock } = useSelector((state) => state.dashboard);

	useEffect(() => {
		dispatch(startLoadingDataDashboard());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getDataUser(user.uid));
	}, [dispatch]);

	const state = {
		options: {
			chart: {
				id: "basic-bar",
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: "30%",
					borderRadius: 5,
					endingShape: "rounded",
				},
			},
			dataLabels: {
				enabled: false,
			},
			xaxis: {
				categories: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
			},
		},
		series: [
			{
				name: `Año ${chart.thisYear}`,
				data: chart.dataThisYear,
			},
			{
				name: `Año ${chart.lastYear}`,
				data: chart.dataLastYear,
			},
		],
	};

	return (
		<LayoutAdminComponent>
			<Container maxWidth='xl'>
				<Grid container spacing={3}>
					<Grid item lg={6}>
						<Paper
							className='paper'
							sx={{
								display: "flex",
								flexDirection: "column",
								position: "relative",
								justifyContent: "center",
								p: "18px 30px 24px 24px !important",
								height: "94%",
							}}
						>
							<Typography
								sx={{
									fontSize: "16px",
									color: "rgb(78, 151, 253)",
									fontWeight: 500,
									textTransform: "none",
									mb: "4px",
								}}
							>
								Buen dia, {displayName}!
							</Typography>
							<Typography
								sx={{
									fontSize: "14px",
									color: "rgb(125,125,156)",
								}}
							>
								Esto es lo que ocurre con su tienda hoy.
							</Typography>

							<Box
								sx={{
									mt: 3,
								}}
							>
								<Typography sx={{ fontSize: "20px", fontWeight: 700 }}>{visits}</Typography>
								<Typography
									sx={{
										fontSize: "14px",
										color: "rgb(125,125,156)",
									}}
								>
									Visitas de hoy
								</Typography>
							</Box>
							<Box
								sx={{
									mt: "12px",
								}}
							>
								<Typography sx={{ fontSize: "20px", fontWeight: 700 }}>{formatNumber(salesToday, "EN-US", "USD")}</Typography>
								<Typography
									sx={{
										fontSize: "14px",
										color: "rgb(125,125,156)",
									}}
								>
									Ventas totales de hoy
								</Typography>
							</Box>

							<Box
								sx={{
									right: "24px !important",
									bottom: "0px",
									position: "absolute",
								}}
							>
								<Box
									sx={{
										position: "relative",
										display: "inline-block",
									}}
								>
									<Welcome
										style={{
											inset: "0px",
										}}
									/>
								</Box>
							</Box>
						</Paper>
					</Grid>
					<Grid item lg={6}>
						<Grid container columnSpacing={2} rowSpacing={1}>
							<Grid item lg={6}>
								<Paper
									className='paper'
									sx={{
										p: "16px !important",
									}}
								>
									<Typography
										sx={{
											fontSize: "14px",
											color: "#7D879C",
											fontWeight: 600,
											mb: "8px",
										}}
									>
										Ordenes
									</Typography>

									<Typography
										sx={{
											fontSize: "20px",

											fontWeight: 700,
											mb: "2.4px",
										}}
									>
										{orders.cant}
									</Typography>
									<Box
										sx={{
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center",
										}}
									>
										<Typography
											sx={{
												fontSize: "14px",
												color: "#AEB4BE",
												fontWeight: 500,
											}}
										>
											{formatNumber(orders.amount, "EN-US", "USD")}
										</Typography>
										{/* <Box
											sx={{
												display: "flex",
												alignItems: "center",
												color: "#4E97FD",
											}}
										>
											<ArrowLeftIcon
												style={{
													fontSize: "1.5rem",
												}}
											/>

											<Typography
												sx={{
													fontSize: "12px",
												}}
											>
												25.25%
											</Typography>
										</Box> */}
									</Box>
								</Paper>
							</Grid>
							<Grid item lg={6}>
								<Paper
									className='paper'
									sx={{
										p: "16px !important",
									}}
								>
									<Typography
										sx={{
											fontSize: "14px",
											color: "#7D879C",
											fontWeight: 600,
											mb: "8px",
										}}
									>
										Artículos vendidos
									</Typography>

									<Typography
										sx={{
											fontSize: "20px",

											fontWeight: 700,
											mb: "2.4px",
										}}
									>
										{productsSales.cant}
									</Typography>
									<Box
										sx={{
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center",
										}}
									>
										<Typography
											sx={{
												fontSize: "14px",
												color: "#AEB4BE",
												fontWeight: 500,
											}}
										>
											{formatNumber(productsSales.amount, "EN-US", "USD")}
										</Typography>
										{/* <Box
											sx={{
												display: "flex",
												alignItems: "center",
												color: "#E94560",
											}}
										>
											<ArrowDropDownIcon
												style={{
													fontSize: "1.5rem",
												}}
											/>

											<Typography
												sx={{
													fontSize: "12px",
												}}
											>
												25.25%
											</Typography>
										</Box> */}
									</Box>
								</Paper>
							</Grid>
							<Grid item lg={12}>
								<Paper
									className='paper'
									sx={{
										p: "16px !important",
									}}
								>
									<Typography
										sx={{
											fontSize: "14px",
											color: "#7D879C",
											fontWeight: 600,
											mb: "8px",
										}}
									>
										Venta Bruta
									</Typography>

									<Typography
										sx={{
											fontSize: "20px",
											fontWeight: 700,
											mb: "2.4px",
										}}
									>
										2,000
									</Typography>
									<Box
										sx={{
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center",
										}}
									>
										<Typography
											sx={{
												fontSize: "14px",
												color: "#AEB4BE",
												fontWeight: 500,
											}}
										>
											$1,500
										</Typography>
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												color: "rgb(51, 208, 103)",
											}}
										>
											<ArrowDropUpIcon
												style={{
													fontSize: "1.5rem",
												}}
											/>

											<Typography
												sx={{
													fontSize: "12px",
												}}
											>
												25.25%
											</Typography>
										</Box>
									</Box>
								</Paper>
							</Grid>
						</Grid>
					</Grid>
				</Grid>

				<Grid container spacing={2}>
					{/* <Grid item lg={3}>
						<Paper
							className='paper'
							sx={{
								p: "16px !important",
							}}
						>
							<Typography
								sx={{
									fontSize: "14px",
									color: "#7D879C",
									fontWeight: 600,
									mb: "8px",
								}}
								s
							>
								Venta Semanal
							</Typography>

							<Typography
								sx={{
									fontSize: "20px",

									fontWeight: 700,
									mb: "2.4px",
								}}
							>
								32,800
							</Typography>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								<Typography
									sx={{
										fontSize: "14px",
										color: "#AEB4BE",
										fontWeight: 500,
									}}
								>
									$9,350
								</Typography>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										color: "#4E97FD",
									}}
								>
									<ArrowLeftIcon
										style={{
											fontSize: "1.5rem",
										}}
									/>

									<Typography
										sx={{
											fontSize: "12px",
										}}
									>
										25.25%
									</Typography>
								</Box>
							</Box>
						</Paper>
					</Grid> */}
					<Grid item lg={4}>
						<Paper
							className='paper'
							sx={{
								p: "16px !important",
							}}
						>
							<Typography
								sx={{
									fontSize: "14px",
									color: "#7D879C",
									fontWeight: 600,
									mb: "8px",
								}}
								s
							>
								Venta Semanal
							</Typography>

							<Typography
								sx={{
									fontSize: "20px",

									fontWeight: 700,
									mb: "2.4px",
								}}
							>
								{formatNumber(salesWeek, "EN-US", "USD")}
							</Typography>
							{/* <Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								<Typography
									sx={{
										fontSize: "14px",
										color: "#AEB4BE",
										fontWeight: 500,
									}}
								>
									$9,350
								</Typography>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										color: "#4E97FD",
									}}
								>
									<ArrowLeftIcon
										style={{
											fontSize: "1.5rem",
										}}
									/>

									<Typography
										sx={{
											fontSize: "12px",
										}}
									>
										25.25%
									</Typography>
								</Box>
							</Box> */}
						</Paper>
					</Grid>
					<Grid item lg={4}>
						<Paper
							className='paper'
							sx={{
								p: "16px !important",
							}}
						>
							<Typography
								sx={{
									fontSize: "14px",
									color: "#7D879C",
									fontWeight: 600,
									mb: "8px",
								}}
								s
							>
								Venta Mensual
							</Typography>

							<Typography
								sx={{
									fontSize: "20px",

									fontWeight: 700,
									mb: "2.4px",
								}}
							>
								{formatNumber(salesMonth, "EN-US", "USD")}
							</Typography>
							{/* <Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								<Typography
									sx={{
										fontSize: "14px",
										color: "#AEB4BE",
										fontWeight: 500,
									}}
								>
									$9,350
								</Typography>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										color: "#4E97FD",
									}}
								>
									<ArrowLeftIcon
										style={{
											fontSize: "1.5rem",
										}}
									/>

									<Typography
										sx={{
											fontSize: "12px",
										}}
									>
										25.25%
									</Typography>
								</Box>
							</Box> */}
						</Paper>
					</Grid>
					<Grid item lg={4}>
						<Paper
							className='paper'
							sx={{
								p: "16px !important",
							}}
						>
							<Typography
								sx={{
									fontSize: "14px",
									color: "#7D879C",
									fontWeight: 600,
									mb: "8px",
								}}
								s
							>
								Usuarios Registrados
							</Typography>

							<Typography
								sx={{
									fontSize: "20px",

									fontWeight: 700,
									mb: "2.4px",
								}}
							>
								{userRegister}
							</Typography>
							{/* <Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								<Typography
									sx={{
										fontSize: "14px",
										color: "#AEB4BE",
										fontWeight: 500,
									}}
								>
									50
								</Typography>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										color: "#E94560",
									}}
								>
									<ArrowDropDownIcon
										style={{
											fontSize: "1.5rem",
										}}
									/>

									<Typography
										sx={{
											fontSize: "12px",
										}}
									>
										94%
									</Typography>
								</Box>
							</Box> */}
						</Paper>
					</Grid>
				</Grid>

				<Box>
					<Paper className='paper'>
						<Box component='div' id='chart'>
							<Chart options={state.options} series={state.series} type='bar' height='300' />
						</Box>
					</Paper>
				</Box>

				<Box>
					<Grid container spacing={3}>
						<Grid item lg={7}>
							<Paper
								className='paper'
								sx={{
									padding: "0px !important",
								}}
							>
								<Box
									sx={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										padding: "20px 20px",
									}}
								>
									<Typography
										sx={{
											fontSize: "16px",
											fontWeight: 600,
											lineHeight: 1.5,
											whiteSpace: "normal",
										}}
									>
										Compras Recientes
									</Typography>
									<Link to='/admin/dashboard/orders'>
										<Button
											variant='outlined'
											color='primary'
											size='small'
											sx={{
												textTransform: "capitalize",
											}}
										>
											Ordenes
										</Button>
									</Link>
								</Box>
								<Box sx={{ mt: 0 }}>
									<TabletRecentPurchases orders={lastOrders} />
								</Box>
							</Paper>
						</Grid>
						<Grid item lg={5}>
							<Paper
								className='paper'
								sx={{
									padding: "0px !important",
								}}
							>
								<Box
									sx={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										padding: "20px 20px",
									}}
								>
									<Typography
										sx={{
											fontSize: "16px",
											fontWeight: 600,
											lineHeight: 1.5,
											whiteSpace: "normal",
										}}
									>
										Productos Agotados
									</Typography>

									<Link to='/admin/dashboard/products'>
										<Button
											variant='outlined'
											color='primary'
											size='small'
											sx={{
												textTransform: "capitalize",
											}}
										>
											Productos
										</Button>
									</Link>
								</Box>
								<Box sx={{ mt: 0 }}>
									<TabletStockOutProducts products={productWithOutStock} />
								</Box>
							</Paper>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</LayoutAdminComponent>
	);
};
