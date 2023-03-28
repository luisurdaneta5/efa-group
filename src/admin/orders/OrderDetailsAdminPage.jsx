import { Box, Container, Paper, Typography, Grid, Avatar, FormControl, InputLabel, Select, MenuItem, TextField, Divider, Button } from "@mui/material";
import moment from "moment";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { formatNumber } from "../../helpers/formatNumbers";
import { useParams } from "react-router-dom";
import { LayoutAdminComponent } from "../../layouts/LayoutAdminComponent";
import { changeStatus, startLoadingOrderById } from "../../store/slices/orders/thunks";

export const OrderDetailsAdminPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { products, status, date, total, discount, address, note, user, emailUser, nameFact, phone, dni } = useSelector((state) => state.order);

	useEffect(() => {
		dispatch(startLoadingOrderById(id));
	}, [dispatch]);

	const handleChange = (event) => {
		dispatch(changeStatus(id, event.target.value));
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
						Detalles de la Orden
					</Typography>
				</Box>

				<Box sx={{ mt: 2 }}>
					<Grid container spacing={2}>
						<Grid item lg={12}>
							<Paper className='paper'>
								<Box
									sx={{
										display: "flex",
									}}
								>
									<Box sx={{ display: "flex" }}>
										<Typography
											sx={{
												fontSize: "14px",
												color: "rgb(125, 135, 156)",
											}}
										>
											N° Orden:
										</Typography>
										<Typography
											sx={{
												fontSize: "15px",
												ml: 1,
											}}
										>
											{id.slice(0, 8).toUpperCase()}
										</Typography>
									</Box>

									<Box sx={{ ml: 5, display: "flex" }}>
										<Typography
											sx={{
												fontSize: "14px",
												color: "rgb(125, 135, 156)",
											}}
										>
											Colocado en:
										</Typography>
										<Typography
											sx={{
												fontSize: "15px",
												ml: 1,
											}}
										>
											{moment(date).format("DD MMM, YYYY")}
										</Typography>
									</Box>

									<Box sx={{ ml: 5, display: "flex" }}>
										<Typography
											sx={{
												fontSize: "14px",
												color: "rgb(125, 135, 156)",
											}}
										>
											Usuario:
										</Typography>
										<Typography
											sx={{
												fontSize: "15px",
												ml: 1,
											}}
										>
											{user}
										</Typography>
									</Box>

									<Box sx={{ ml: 5, display: "flex" }}>
										<Typography
											sx={{
												fontSize: "14px",
												color: "rgb(125, 135, 156)",
											}}
										>
											Correo Electronico:
										</Typography>
										<Typography
											sx={{
												fontSize: "15px",
												ml: 1,
											}}
										>
											{emailUser}
										</Typography>
									</Box>

									<Box sx={{ ml: 5, display: "flex" }}>
										<Typography
											sx={{
												fontSize: "14px",
												color: "rgb(125, 135, 156)",
											}}
										>
											Telefono:
										</Typography>
										<Typography
											sx={{
												fontSize: "15px",
												ml: 1,
											}}
										>
											{phone}
										</Typography>
									</Box>
								</Box>
								<Box
									sx={{
										mt: 5,
										mb: 1,
										display: "flex",
										justifyContent: "space-between",
									}}
								>
									<Typography>Productos</Typography>
									<Typography>Total</Typography>
								</Box>
								<Divider />
								<Box
									sx={{
										mt: 2,
									}}
								>
									{products.map((product) => (
										<Box
											key={product.id}
											sx={{
												display: "flex",
												justifyContent: "space-between",
												alignItems: "center",
												mb: 3,
											}}
										>
											<Box sx={{ display: "flex" }}>
												<Avatar
													src={product.images}
													sx={{
														width: "64px",
														height: "64px",
														borderRadius: "8px",
														border: "2px solid #ebeff4",
													}}
													variant='square'
												/>
												<Box sx={{ ml: 2 }}>
													<Typography
														sx={{
															fontSize: "14px",
															fontWeight: 500,
														}}
													>
														{product.name}
													</Typography>
													<Typography
														sx={{
															mt: 2,
															fontSize: "14px",
															color: "rgb(125, 135, 156)",
														}}
													>
														{formatNumber(product.price, "EN-US", "USD") + " x " + product.count}
													</Typography>
												</Box>
											</Box>
											<Box>
												<Typography
													sx={{
														fontWeight: 600,
													}}
												>
													{formatNumber(product.price * product.count, "EN-US", "USD")}
												</Typography>
											</Box>
										</Box>
									))}
								</Box>
							</Paper>
						</Grid>

						<Grid item lg={6}>
							<Paper className='paper'>
								<Typography
									variant='h6'
									color='initial'
									sx={{
										mb: 3,
									}}
								>
									Detalles Facturacion
								</Typography>

								<Grid container spacing={3}>
									<Grid item lg={6}>
										<Box>
											<Typography variant='body1' color='initial'>
												Nombre
											</Typography>
											<TextField
												id=''
												value={nameFact}
												//   onChange={}
												size='small'
												fullWidth
												disabled
											/>
										</Box>
									</Grid>

									<Grid item lg={6}>
										<Box>
											<Typography variant='body1' color='initial'>
												DNI
											</Typography>
											<TextField
												id=''
												value={dni}
												//   onChange={}
												size='small'
												fullWidth
												disabled
											/>
										</Box>
									</Grid>

									<Grid item lg={12}>
										<Box>
											<Typography variant='body1' color='initial'>
												Direccion
											</Typography>
											<TextField
												id=''
												value={address}
												//   onChange={}
												multiline
												rows={3}
												fullWidth
												disabled
												size='small'
											/>
										</Box>
									</Grid>
									<Grid item lg={12}>
										<Box>
											<Typography variant='body1' color='initial'>
												Nota
											</Typography>
											<TextField
												id=''
												value={note}
												//   onChange={}
												multiline
												rows={3}
												fullWidth
												disabled
												size='small'
											/>
										</Box>
									</Grid>
								</Grid>
							</Paper>
						</Grid>
						<Grid item lg={6}>
							<Paper className='paper'>
								<Box>
									<Typography
										sx={{
											fontSize: "16px",
											fontWeight: 500,
											mb: 2,
										}}
									>
										Resumen Total
									</Typography>
								</Box>
								{/* <Box
									sx={{
										display: "flex",
										justifyContent: "space-between",
										mb: 2,
									}}
								>
									<Typography
										sx={{
											fontSize: "14px",
											color: "rgb(125, 135, 156)",
										}}
									>
										Subtotal
									</Typography>
									<Typography
										sx={{
											fontSize: "14px",
											fontWeight: 600,
										}}
									>
										$350.00
									</Typography>
								</Box> */}
								{discount != 0 && (
									<Box
										sx={{
											display: "flex",
											justifyContent: "space-between",
											mb: 2,
										}}
									>
										<Typography
											sx={{
												fontSize: "14px",
												color: "rgb(125, 135, 156)",
											}}
										>
											Descuento
										</Typography>
										<Typography
											sx={{
												fontSize: "14px",
												fontWeight: 600,
											}}
										>
											{discount}%
										</Typography>
									</Box>
								)}

								<Divider />

								<Box
									sx={{
										display: "flex",
										justifyContent: "space-between",
										mt: 3,
										mb: 2,
									}}
								>
									<Typography
										sx={{
											fontSize: "14px",
											fontWeight: 600,
										}}
									>
										Total
									</Typography>
									<Typography
										sx={{
											fontSize: "14px",
											fontWeight: 600,
										}}
									>
										{formatNumber(total, "EN-US", "USD")}
									</Typography>
								</Box>
								<Box
									sx={{
										mt: 3,
									}}
								>
									<FormControl fullWidth>
										<InputLabel id='demo-simple-select-label'>Status</InputLabel>
										<Select
											labelId='demo-simple-select-label'
											id='demo-simple-select'
											value={status}
											label='Status'
											onChange={handleChange}
											defaultValue={status}
										>
											<MenuItem value='0'>Pendiente</MenuItem>
											<MenuItem value='1'>Procesando</MenuItem>
											<MenuItem value='2'>Empacado</MenuItem>
											<MenuItem value='3'>Entregado</MenuItem>
										</Select>
									</FormControl>
								</Box>
							</Paper>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</LayoutAdminComponent>
	);
};
