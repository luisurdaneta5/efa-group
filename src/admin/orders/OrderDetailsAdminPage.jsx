import {
	Box,
	Container,
	Paper,
	Typography,
	Grid,
	Avatar,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	TextField,
	Divider,
} from "@mui/material";
import { useState } from "react";
import { LayoutAdminComponent } from "../../layouts/LayoutAdminComponent";

export const OrderDetailsAdminPage = () => {
	const [age, setAge] = useState("");

	const handleChange = (event) => {
		setAge(event.target.value);
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
						Detalles Ordenes
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
											95865228526
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
											01 Dic, 2022
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
									<Box
										sx={{
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center",
											mb: 3,
										}}
									>
										<Box sx={{ display: "flex" }}>
											<Avatar
												src='https://http2.mlstatic.com/D_NQ_NP_625184-MLV49636727595_042022-O.jpg'
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
													Router Tp-Link
												</Typography>
												<Typography
													sx={{
														mt: 2,
														fontSize: "14px",
														color: "rgb(125, 135, 156)",
													}}
												>
													$250.00 x 3
												</Typography>
											</Box>
										</Box>
										<Box>
											<Typography
												sx={{
													fontWeight: 600,
												}}
											>
												$750.00
											</Typography>
										</Box>
									</Box>
									<Box
										sx={{
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center",
											mb: 3,
										}}
									>
										<Box sx={{ display: "flex" }}>
											<Avatar
												src='https://http2.mlstatic.com/D_NQ_NP_625184-MLV49636727595_042022-O.jpg'
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
													Router Tp-Link
												</Typography>
												<Typography
													sx={{
														mt: 2,
														fontSize: "14px",
														color: "rgb(125, 135, 156)",
													}}
												>
													$250.00 x 3
												</Typography>
											</Box>
										</Box>
										<Box>
											<Typography
												sx={{
													fontWeight: 600,
												}}
											>
												$750.00
											</Typography>
										</Box>
									</Box>
								</Box>
							</Paper>
						</Grid>

						<Grid item lg={6}>
							<Paper className='paper'>
								<Box>
									<TextField
										id=''
										label='Direccion'
										//   value={}
										//   onChange={}
										multiline
										rows={3}
										fullWidth
									/>
								</Box>

								<Box
									sx={{
										mt: 4,
									}}
								>
									<TextField
										id=''
										label='Nota del Cliente'
										//   value={}
										//   onChange={}
										multiline
										rows={3}
										fullWidth
									/>
								</Box>
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
								</Box>
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
										10%
									</Typography>
								</Box>
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
										$315.00
									</Typography>
								</Box>
								<Box
									sx={{
										mt: 3,
									}}
								>
									<FormControl fullWidth>
										<InputLabel id='demo-simple-select-label'>
											Status
										</InputLabel>
										<Select
											labelId='demo-simple-select-label'
											id='demo-simple-select'
											value={age}
											label='Status'
											onChange={handleChange}
										>
											<MenuItem value={10}>
												Procesando
											</MenuItem>
											<MenuItem value={20}>
												Empacado
											</MenuItem>
											<MenuItem value={30}>
												Entregado
											</MenuItem>
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
