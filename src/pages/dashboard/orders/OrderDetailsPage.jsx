import { Alert, Avatar, Box, Paper, Typography, Grid, Button, Divider, Stepper, Step, StepLabel, Skeleton, Rating } from "@mui/material";
import { DashboardLayout } from "../DashboardLayout";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { ReactComponent as BoxClose } from "../../../assets/icons/box.svg";
import { ReactComponent as Check } from "../../../assets/icons/check.svg";
import { ReactComponent as Truck } from "../../../assets/icons/truck.svg";
import { ReactComponent as Delivered } from "../../../assets/icons/delivered.svg";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingOrderById } from "../../../store/slices/orders";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { formatNumber } from "../../../helpers/formatNumbers";
import moment from "moment";
import { applyDiscount } from "../../../helpers/applyDiscount";
import { useState } from "react";
import { ModalRanked } from "./components/ModalRanked";

export const OrderDetailsPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const { user } = useSelector((state) => state.auth);
	const { isLoadingOrder, products, status, date, delivery, total, discount, reviews } = useSelector((state) => state.order);

	const [info, setInfo] = useState([]);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		dispatch(startLoadingOrderById(user.uid, id));
	}, [dispatch]);

	const handleOpen = (product) => {
		setInfo(product);
		setOpen(true);
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
						{status == 4 && (
							<Box
								sx={{
									position: "relative",
								}}
							>
								{isLoadingOrder ? (
									<Skeleton variant='circular' width={64} height={64} />
								) : (
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
								)}

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
						)}

						{status == 0 && (
							<Box
								sx={{
									position: "relative",
								}}
							>
								{isLoadingOrder ? (
									<Skeleton variant='circular' width={64} height={64} />
								) : (
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
								)}
							</Box>
						)}

						{/* Linea 1 */}
						{status != 0 && (
							<Box
								sx={{
									flex: "1 1 0px",
								}}
							>
								{isLoadingOrder ? (
									<Skeleton variant='rectangular' height={4} />
								) : (
									<Box
										sx={{
											height: "4px",
											minWidth: "50px",
											flex: "1 1 0px",
											backgroundColor: "rgb(210, 63, 87)",
										}}
									></Box>
								)}
							</Box>
						)}

						{status == 0 && (
							<Box
								sx={{
									flex: "1 1 0px",
								}}
							>
								{isLoadingOrder ? (
									<Skeleton variant='rectangular' height={4} />
								) : (
									<Box
										sx={{
											height: "4px",
											minWidth: "50px",
											flex: "1 1 0px",
											backgroundColor: "rgb(227, 233, 239);",
										}}
									></Box>
								)}
							</Box>
						)}

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

						{/* Entregado */}
						{status == 1 && (
							<Box
								sx={{
									position: "relative",
								}}
							>
								{isLoadingOrder ? (
									<Skeleton variant='circular' width={64} height={64} />
								) : (
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
								)}

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
						)}

						{status != 1 && (
							<Box
								sx={{
									position: "relative",
								}}
							>
								{isLoadingOrder ? (
									<Skeleton variant='circular' width={64} height={64} />
								) : (
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
								)}
							</Box>
						)}
					</Box>
					{isLoadingOrder ? (
						<Box
							sx={{
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							<Skeleton variant='rounded' width={150} height={30} />
						</Box>
					) : (
						<Box
							sx={{
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							{status == 0 && (
								<Alert
									severity='warning'
									sx={{
										borderRadius: "300px",
									}}
								>
									Pendiente
								</Alert>
							)}

							{status == 1 && (
								<Alert
									severity='success'
									sx={{
										borderRadius: "300px",
									}}
								>
									Producto entregado
								</Alert>
							)}

							{status == 2 && (
								<Alert
									severity='error'
									sx={{
										borderRadius: "300px",
									}}
								>
									Orden cancelada, porfavor comunicarse con soporte
								</Alert>
							)}

							{status == 3 && (
								<Alert
									severity='info'
									sx={{
										borderRadius: "300px",
									}}
								>
									Producto Empacado, en espera de retiro o envio
								</Alert>
							)}
						</Box>
					)}
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
								{isLoadingOrder ? (
									<Skeleton variant='rounded' width={100} sx={{ ml: 1 }} />
								) : (
									<Typography
										sx={{
											fontSize: "14px",
											ml: 1,
											fontWeight: "400",
											lineHeight: "1.5",
										}}
									>
										{id.substr(0, 8).toUpperCase()}
									</Typography>
								)}
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
								{isLoadingOrder ? (
									<Skeleton variant='rounded' width={150} sx={{ ml: 1 }} />
								) : (
									<Typography
										sx={{
											fontSize: "14px",
											ml: 1,
											fontWeight: "400",
											lineHeight: "1.5",
										}}
									>
										{moment(date).format("LL")}
									</Typography>
								)}
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
								{isLoadingOrder ? (
									<Skeleton variant='rounded' width={150} sx={{ ml: 1 }} />
								) : (
									<Typography
										sx={{
											fontSize: "14px",
											ml: 1,
											fontWeight: "400",
											lineHeight: "1.5",
										}}
									>
										{delivery ? moment(delivery).format("LL") : "En espera de entrega"}
									</Typography>
								)}
							</Grid>
						</Grid>
					</Paper>
					{/* Producto */}
					{products.map((product) => (
						<Box
							key={product.id}
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
								{isLoadingOrder ? (
									<Skeleton variant='circular' width={64} height={64} />
								) : (
									<Avatar
										src={product.images}
										sx={{
											width: "64px",
											height: "64px",
										}}
									/>
								)}

								<Box sx={{ marginLeft: "20px" }}>
									{isLoadingOrder ? (
										<Skeleton variant='rounded' width={"200px"} />
									) : (
										<Typography
											sx={{
												fontSize: "14px",
												fontWeight: 400,
											}}
										>
											{product.name}
										</Typography>
									)}

									{isLoadingOrder ? (
										<Skeleton variant='rounded' width={"90px"} sx={{ mt: 1 }} />
									) : (
										<Typography
											sx={{
												fontSize: "14px",
												fontWeight: 400,
												color: "rgb(125, 135, 156)",
											}}
										>
											{formatNumber(product.price, "EN-US", "USD")} x {product.count}
										</Typography>
									)}
								</Box>
							</Box>
							{reviews.map((review) =>
								review.productId == product.id ? (
									<Box sx={{ marginRight: "20px" }}>
										<Rating name='simple-controlled' value={review.rating} readOnly />
									</Box>
								) : (
									<Box sx={{ marginRight: "20px" }}>
										<Button variant='text' color='primary' size='small' onClick={() => handleOpen(product)}>
											Calificar Producto
										</Button>
									</Box>
								)
							)}

							<ModalRanked open={open} setOpen={setOpen} product={info} order={id} />
						</Box>
					))}
				</Paper>
			</Box>
			<Box
				sx={{
					mt: 3,
				}}
			>
				<Grid container spacing={2}>
					<Grid item lg={6}>
						<Paper className='paper' sx={{ padding: "20px 30px !important" }}>
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
								<Typography sx={{ fontSize: "14px" }}>Producto Empacado</Typography>
								<Typography sx={{ fontSize: "14px" }}>17 Oct , 2022 12:20</Typography>
							</Box>

							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									mt: 2,
								}}
							>
								<Typography sx={{ fontSize: "14px" }}>Producto En espera de retiro</Typography>
								<Typography sx={{ fontSize: "14px" }}>17 Oct , 2022 12:20</Typography>
							</Box>

							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									mt: 2,
								}}
							>
								<Typography sx={{ fontSize: "14px" }}>Producto Retirado Cliente</Typography>
								<Typography sx={{ fontSize: "14px" }}>17 Oct , 2022 12:20</Typography>
							</Box>
						</Paper>
					</Grid>
					<Grid item lg={6}>
						<Paper className='paper' sx={{ padding: "20px 30px !important" }}>
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
								<Typography sx={{ fontSize: "14px", fontWeight: 600 }}>{formatNumber(total, "EN-US", "USD")}</Typography>
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
								<Typography sx={{ fontSize: "14px", fontWeight: 600 }}>- {formatNumber(applyDiscount(total, discount), "EN-US", "USD")}</Typography>
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
								<Typography sx={{ fontSize: "14px", fontWeight: 600 }}>{formatNumber(total - applyDiscount(total, discount), "EN-US", "USD")}</Typography>
							</Box>
						</Paper>
					</Grid>
				</Grid>
			</Box>
		</DashboardLayout>
	);
};
