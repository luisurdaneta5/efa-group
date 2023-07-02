import { LayoutComponent } from "../../layouts/LayoutComponent";
import { Box, Button, Container, Grid, IconButton, Paper, Typography, TextField } from "@mui/material";
import { ReactComponent as ShoppingBag } from "../../layouts/components/Drawer/assets/shoppingbag.svg";
import RemoveIcon from "@mui/icons-material/Remove";
import { Add, Clear } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { SetCoupon } from "../../store/slices/cart/cartSlices";
import { formatNumber } from "../../helpers/formatNumbers";
import "./styles.css";
import { deleteItem, removeItem, updateItem } from "../../store/slices/cart";
import { toast } from "react-toastify";

export const CartPage = () => {
	const { items, total, coupon } = useSelector((state) => state.shoppingcart);
	const { user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const [formValues, handleInputChange] = useForm({ coupon_value: "" });
	const { coupon_value } = formValues;

	const handleAddCart = (id) => {
		const found = items.find((item) => item.id === id);

		if (found) {
			dispatch(updateItem(user.uid, { ...found, count: found.count + 1 }));
		}
	};

	const handleRemoveCart = (id) => {
		items.find((item) => {
			if (item.id === id) {
				dispatch(removeItem(user.uid, { ...item, count: item.count - 1 }));
			}
		});
	};

	const handleClear = (id) => {
		items.find((item) => {
			if (item.id === id) {
				dispatch(deleteItem(user.uid, item));
			}
		});
	};

	const cantProduct = (id) => {
		let current = 0;
		const found = items.find((item) => item.id === id);
		if (found) {
			current = found.count;
		}
		return current;
	};

	const setVisible = () => {
		const sectionCoupon = document.querySelector(".hidden");

		sectionCoupon.classList.remove("hidden");
	};

	const handleSetCoupon = (e) => {
		e.preventDefault();

		if (coupon_value.length === 0) {
			return toast.error("Campo vacio, ingrese un Cupon", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}

		if (coupon !== null) {
			return toast.error("Ya usted ha aplicado un Cupon", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}

		dispatch(SetCoupon(Number(coupon_value)));

		toast.success("Cupon aplicado", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	return (
		<LayoutComponent>
			<Container maxWidth='lg' sx={{ mt: 25 }}>
				<Grid container spacing={2} columnSpacing={2}>
					<Grid item sm={12} md={12} lg={12} xl={12}>
						{items.length === 0 ? (
							<Box className='icon-bag-emty-cartscreen'>
								<ShoppingBag />
								<Typography variant='' color='initial' sx={{ mt: 2 }}>
									Tu carrito de compras esta vacio.
								</Typography>
								<Typography variant='' color='initial'>
									Comienza tu Compra!!
								</Typography>
							</Box>
						) : (
							items.map((item) => (
								<Paper
									key={item.id}
									sx={{
										position: "relative",
										display: "flex",
									}}
									className='paper-add'
								>
									<img src={item.images} alt='' width='140' height='140' />

									<Box
										sx={{
											padding: "20px",
											display: "flex",
											flexDirection: "column",
											justifyContent: "space-between",
											width: "100%",
										}}
									>
										<Typography
											variant=''
											color='initial'
											sx={{
												fontSize: {
													xs: "12px",
													sm: "15px",
													md: "15px",
													lg: "15px",
												},
											}}
										>
											{item.name}
										</Typography>

										<Box
											sx={{
												position: "absolute",
												top: "1rem",
												right: "1rem",
											}}
										>
											<IconButton onClick={() => handleClear(item.id)}>
												<Clear />
											</IconButton>
										</Box>

										<Grid
											container
											sx={{
												display: "flex",
												justifyContent: "space-between",
												alignItems: "flex-end",
											}}
										>
											<Box
												sx={{
													display: "flex",
													fontSize: {
														xs: "12px",
														sm: "15px",
														md: "15px",
														lg: "15px",
													},
												}}
											>
												<span style={{ color: "#7D879C" }}>
													{formatNumber(item.price, "EN-US", "USD")} x {item.count}
												</span>
												<span
													style={{
														color: "#D23F57",
														marginLeft: 10,
														fontWeight: 600,
													}}
												>
													{formatNumber(item.price * item.count, "EN-US", "USD")}
												</span>
											</Box>

											<Grid
												item
												xs={12}
												sm={2}
												md={2}
												xl={2}
												sx={{
													display: "flex",
													justifyContent: "space-between",
													alignItems: "center",
													mt: {
														xs: 2,
														sm: 2,
													},
												}}
											>
												<Box>
													<Button
														disabled={item.count === 1 && true}
														onClick={() => handleRemoveCart(item.id)}
														variant='outlined'
														size='small'
														sx={{
															color: "#0f3460",
															borderColor: "#0f3460",
															":hover": {
																borderColor: "#0f3460",
																backgroundColor: "#f0f0f0",
															},
															minWidth: "10px",
															padding: "4px",
														}}
													>
														<RemoveIcon />
													</Button>
												</Box>

												<Box>
													<Typography variant='' color='inherit'>
														{cantProduct(item.id)}
													</Typography>
												</Box>

												<Box>
													<Button
														disabled={item.stock == cantProduct(item.id) ? true : false}
														onClick={() => handleAddCart(item.id)}
														variant='outlined'
														color='inherit'
														size='small'
														sx={{
															color: "#0f3460",
															borderColor: "#0f3460",
															":hover": {
																borderColor: "#0f3460",
																backgroundColor: "#f0f0f0",
															},
															minWidth: "10px",
															padding: "4px",
														}}
													>
														<Add />
													</Button>
												</Box>
											</Grid>
										</Grid>
									</Box>
								</Paper>
							))
						)}
					</Grid>

					<Grid item xs={12} sm={12} md={12}>
						<Box
							sx={{
								display: "flex",
								flexDirection: {
									xs: "column",
									sm: "row",
									md: "row",
									lg: "row",
								},
								justifyContent: {
									xs: "space-between",
									sm: "space-between",
									md: "space-between",
									lg: "space-between",
								},
							}}
						>
							<Box>
								<form onSubmit={handleSetCoupon}>
									<TextField
										id='outlined-basic'
										label='Codigo de promocion'
										variant='outlined'
										size='small'
										fullWidth
										autoComplete='off'
										name='coupon_value'
										value={coupon === null ? coupon_value : coupon}
										onChange={handleInputChange}
									/>
									<button type='submit' className='btn-outline' style={{ marginTop: "10px" }}>
										Aplicar
									</button>
								</form>
							</Box>
							<Box
								sx={{
									mt: {
										xs: 3,
										sm: 0,
										md: 0,
									},
								}}
							>
								<Box
									sx={{
										display: "flex",
									}}
								>
									<Typography
										sx={{
											fontSize: "15px",
											fontweight: "bold",
											mr: 8,
										}}
									>
										Total:
									</Typography>
									<Typography
										sx={{
											fontSize: "25px",
											fontweight: "bold",
										}}
									>
										{coupon ? formatNumber(total - (total * coupon) / 100, "EN-US", "USD") : formatNumber(total, "EN-US", "USD")}
									</Typography>
								</Box>

								{items.length != 0 ? (
									<Link
										to={"/cart/details"}
										style={{
											textDecoration: "none",
											color: "white",
										}}
									>
										<Button variant='contained' color='custom' sx={{ mt: "10px", width: "100%" }}>
											Proceder a pagar
										</Button>
									</Link>
								) : (
									<Link
										to={"/"}
										style={{
											textDecoration: "none",
											color: "white",
										}}
									>
										<Button variant='contained' color='custom' sx={{ mt: "10px", width: "100%" }}>
											Comienza a Comprar
										</Button>
									</Link>
								)}
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</LayoutComponent>
	);
};
