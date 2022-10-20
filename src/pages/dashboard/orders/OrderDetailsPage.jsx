import {
	Alert,
	Avatar,
	Box,
	Paper,
	Typography,
	Grid,
	Button,
	Divider,
} from "@mui/material";
import { DashboardLayout } from "../DashboardLayout";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { ReactComponent as BoxClose } from "../../../assets/icons/box.svg";
import { ReactComponent as Check } from "../../../assets/icons/check.svg";
import { ReactComponent as Truck } from "../../../assets/icons/truck.svg";
import { ReactComponent as Delivered } from "../../../assets/icons/delivered.svg";
import { height } from "@mui/system";

export const OrderDetailsPage = () => {
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
						Detalles del Pedido
					</Typography>
				</Box>
			</Box>

			<Box
				sx={{
					mt: 3,
				}}
			>
				<Paper
					className='paper'
					sx={{
						borderRadius: "8px",
						padding: " 2rem 1.5rem !important",
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							boxAlign: "center",
							alignItems: "center",
							flexWrap: "wrap",
							marginTop: "2rem",
							marginBottom: "2rem",
						}}
					>
						{/* Empaquetado */}
						<Box
							sx={{
								position: "relative",
							}}
						>
							<Avatar
								sx={{
									width: "64px",
									height: "64px",
									backgroundColor: "#D23F57",
								}}
							>
								<BoxClose
									style={{
										width: "35px",
									}}
								/>
							</Avatar>

							<Box
								sx={{
									position: "absolute",
									right: 0,
									top: 0,
								}}
							>
								<Avatar
									sx={{
										display: "flex",
										alignItems: "center",

										justifyContent: "center",
										width: "22px",
										height: "22px",
										backgroundColor: "#F3F5F9",
										color: "red !important",
									}}
								>
									<Check
										style={{
											color: "rgb(51, 208, 103) !important",
										}}
									/>
								</Avatar>
							</Box>
						</Box>

						{/* Linea 1 */}
						<Box
							sx={{
								height: "4px",
								minWidth: "50px",
								flex: "1 1 0px",
								backgroundColor: "rgb(210, 63, 87)",
							}}
						></Box>

						{/* Camion */}
						{/* <Box
							sx={{
								position: "relative",
							}}
						>
							<Avatar
								sx={{
									width: "64px",
									height: "64px",
									backgroundColor: "#D23F57",
								}}
							>
								<Truck
									style={{
										width: "35px",
									}}
								/>
							</Avatar>

							<Box
								sx={{
									position: "absolute",
									right: 0,
									top: 0,
								}}
							>
								<Avatar
									sx={{
										display: "flex",
										alignItems: "center",

										justifyContent: "center",
										width: "22px",
										height: "22px",
										backgroundColor: "#F3F5F9",
										color: "red !important",
									}}
								>
									<Check
										style={{
											color: "rgb(51, 208, 103) !important",
										}}
									/>
								</Avatar>
							</Box>
						</Box> */}

						{/* Linea 2	*/}
						<Box
							sx={{
								height: "4px",
								minWidth: "50px",
								flex: "1 1 0px",
								backgroundColor: "rgb(210, 63, 87)",
							}}
						></Box>

						{/* Entregado */}
						<Box
							sx={{
								position: "relative",
							}}
						>
							<Avatar
								sx={{
									width: "64px",
									height: "64px",
									backgroundColor: "#D23F57",
								}}
							>
								<Delivered
									style={{
										width: "35px",
									}}
								/>
							</Avatar>

							<Box
								sx={{
									position: "absolute",
									right: 0,
									top: 0,
								}}
							>
								<Avatar
									sx={{
										display: "flex",
										alignItems: "center",

										justifyContent: "center",
										width: "22px",
										height: "22px",
										backgroundColor: "#F3F5F9",
										color: "red !important",
									}}
								>
									<Check
										style={{
											color: "rgb(51, 208, 103) !important",
										}}
									/>
								</Avatar>
							</Box>
						</Box>

						{/* Empaquetado */}
						<Box
							sx={{
								position: "relative",
							}}
						>
							<Avatar
								sx={{
									width: "64px",
									height: "64px",
									backgroundColor: "rgb(227, 233, 239);",
								}}
							>
								<BoxClose
									style={{
										width: "35px",
									}}
								/>
							</Avatar>
						</Box>

						{/* Linea 1 */}
						<Box
							sx={{
								height: "4px",
								minWidth: "50px",
								flex: "1 1 0px",
								backgroundColor: "rgb(227, 233, 239);",
							}}
						></Box>

						{/* Entregado */}
						<Box
							sx={{
								position: "relative",
							}}
						>
							<Avatar
								sx={{
									width: "64px",
									height: "64px",
									backgroundColor: "rgb(227, 233, 239);",
								}}
							>
								<Delivered
									style={{
										width: "35px",
									}}
								/>
							</Avatar>
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "flex-end",
						}}
					>
						<Alert
							severity='info'
							sx={{
								borderRadius: "300px",
							}}
						>
							Producto Empacado, en espera de retiro o envio
						</Alert>
						<Alert
							severity='success'
							sx={{
								borderRadius: "300px",
							}}
						>
							Producto entregado
						</Alert>
					</Box>
				</Paper>
			</Box>

			<Box>
				<Paper
					sx={{
						boxShadow: "0px 4px 4px rgb(43 52 69 / 10%)",
					}}
				>
					<Paper
						sx={{
							display: "flex",
							alignItems: "center",
							padding: "15px",
							backgroundColor: "rgb(243, 245, 249)",
							boxShadow: "none !important",
						}}
					>
						<Grid container spacing={2}>
							<Grid item lg={4} sx={{ display: "flex" }}>
								<Typography
									sx={{
										fontSize: "14px",
										color: "rgb(125, 135, 156)",
										fontWeight: "400",
										lineHeight: "1.5",
									}}
								>
									N° Orden:
								</Typography>
								<Typography
									sx={{
										fontSize: "14px",
										ml: 1,
										fontWeight: "400",
										lineHeight: "1.5",
									}}
								>
									9001997718074513
								</Typography>
							</Grid>

							<Grid item lg={4} sx={{ display: "flex" }}>
								<Typography
									sx={{
										fontSize: "14px",
										color: "rgb(125, 135, 156)",
										fontWeight: "400",
										lineHeight: "1.5",
									}}
								>
									Comprado el:
								</Typography>
								<Typography
									sx={{
										fontSize: "14px",
										ml: 1,
										fontWeight: "400",
										lineHeight: "1.5",
									}}
								>
									18 Oct, 2022
								</Typography>
							</Grid>

							<Grid item lg={4} sx={{ display: "flex" }}>
								<Typography
									sx={{
										fontSize: "14px",
										color: "rgb(125, 135, 156)",
										fontWeight: "400",
										lineHeight: "1.5",
									}}
								>
									Entregado el:
								</Typography>
								<Typography
									sx={{
										fontSize: "14px",
										ml: 1,
										fontWeight: "400",
										lineHeight: "1.5",
									}}
								>
									22 Oct, 2022
								</Typography>
							</Grid>
						</Grid>
					</Paper>
					{/* Producto */}
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							padding: "8px 16px",
						}}
					>
						<Box
							sx={{
								display: "flex",
								flex: "2 2 260px",
								margin: "6px",
								alignItems: "center",
							}}
						>
							<Avatar
								src='https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=1920&q=75'
								sx={{
									width: "64px",
									height: "64px",
								}}
							/>
							<Box sx={{ marginLeft: "20px" }}>
								<Typography
									sx={{
										fontSize: "14px",
										fontWeight: 400,
									}}
								>
									Zapatos Nike Air Jordan
								</Typography>
								<Typography
									sx={{
										fontSize: "14px",
										fontWeight: 400,
										color: "rgb(125, 135, 156)",
									}}
								>
									$ 250.00 x 1
								</Typography>
							</Box>
						</Box>
						<Box sx={{ marginRight: "20px" }}>
							<Button variant='text' color='primary' size='small'>
								Calificar Producto
							</Button>
						</Box>
					</Box>
				</Paper>
			</Box>

			<Box
				sx={{
					mt: 3,
				}}
			>
				<Grid container spacing={2}>
					<Grid item lg={6}>
						<Paper
							className='paper'
							sx={{ padding: "20px 30px !important" }}
						>
							<Typography
								sx={{
									fontSize: "16px",
									fontWeight: 600,
								}}
							>
								Historial
							</Typography>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									mt: 2,
								}}
							>
								<Typography sx={{ fontSize: "14px" }}>
									Producto Empacado
								</Typography>
								<Typography sx={{ fontSize: "14px" }}>
									17 Oct , 2022 12:20
								</Typography>
							</Box>

							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									mt: 2,
								}}
							>
								<Typography sx={{ fontSize: "14px" }}>
									Producto En espera de retiro
								</Typography>
								<Typography sx={{ fontSize: "14px" }}>
									17 Oct , 2022 12:20
								</Typography>
							</Box>

							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									mt: 2,
								}}
							>
								<Typography sx={{ fontSize: "14px" }}>
									Producto Retirado Cliente
								</Typography>
								<Typography sx={{ fontSize: "14px" }}>
									17 Oct , 2022 12:20
								</Typography>
							</Box>
						</Paper>
					</Grid>
					<Grid item lg={6}>
						<Paper
							className='paper'
							sx={{ padding: "20px 30px !important" }}
						>
							<Typography
								sx={{
									fontSize: "16px",
									fontWeight: 600,
								}}
							>
								Resumen Total
							</Typography>

							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									mt: 3,
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
									sx={{ fontSize: "14px", fontWeight: 600 }}
								>
									$350.00
								</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									mt: 1,
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
									sx={{ fontSize: "14px", fontWeight: 600 }}
								>
									-$30.00
								</Typography>
							</Box>
							<Divider
								sx={{
									mt: 1,
								}}
							/>

							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									mt: 2,
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
									sx={{ fontSize: "14px", fontWeight: 600 }}
								>
									$320.00
								</Typography>
							</Box>
						</Paper>
					</Grid>
				</Grid>
			</Box>
		</DashboardLayout>
	);
};
