import { LayoutComponent } from "../../layouts/LayoutComponent";
import {
	Box,
	Button,
	Container,
	Grid,
	IconButton,
	Paper,
	Typography,
	TextField,
} from "@mui/material";
import { ReactComponent as ShoppingBag } from "../../layouts/components/Drawer/assets/shoppingbag.svg";
import RemoveIcon from "@mui/icons-material/Remove";
import { Add, Clear } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import {
	ClearShoppingCart,
	RemoveShoppingCart,
	SetCoupon,
	UpdateShoppingCart,
} from "../../store/slices/cart/cartSlices";
import { formatNumber } from "../../helpers/formatNumbers";
import "./styles.css";

export const CartPage = () => {
	const { items, total, coupon } = useSelector((state) => state.shoppingcart);
	const dispatch = useDispatch();

	const [formValues, handleInputChange] = useForm({ coupon_value: "" });
	const { coupon_value } = formValues;

	const handleAddCart = (id) => {
		const found = items.find((item) => item.id === id);

		if (found) {
			dispatch(UpdateShoppingCart({ ...found, count: found.count + 1 }));
		}
	};

	const handleRemoveCart = (id) => {
		items.find((item) => {
			if (item.id === id) {
				dispatch(
					RemoveShoppingCart({ ...item, count: item.count - 1 })
				);
			}
		});
	};

	const handleClear = (id) => {
		items.find((item) => {
			if (item.id === id) {
				dispatch(ClearShoppingCart(item));
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
					<Grid item={true} sm={12} md={12} lg={12} xl={12}>
						{items.length === 0 ? (
							<Box className='icon-bag-emty-cartscreen'>
								<ShoppingBag />
								<Typography
									variant=''
									color='initial'
									sx={{ mt: 2 }}
								>
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
									<img
										src={item.images}
										alt=''
										width='140'
										height='140'
									/>

									<Box
										sx={{
											padding: "20px",
											display: "flex",
											flexDirection: "column",
											justifyContent: "space-between",
											width: "100%",
										}}
									>
										<Typography variant='' color='initial'>
											{item.name}
										</Typography>

										<Box
											sx={{
												position: "absolute",
												top: "1rem",
												right: "1rem",
											}}
										>
											<IconButton
												onClick={() =>
													handleClear(item.id)
												}
											>
												<Clear />
											</IconButton>
										</Box>

										<Box
											sx={{
												display: "flex",
												justifyContent: "space-between",
												alignItems: "flex-end",
											}}
										>
											<Box sx={{ display: "flex" }}>
												<span
													style={{ color: "#7D879C" }}
												>
													{formatNumber(item.price)} x{" "}
													{item.count}
												</span>
												<span
													style={{
														color: "#D23F57",
														marginLeft: 10,
														fontWeight: 600,
													}}
												>
													{formatNumber(
														item.price * item.count
													)}
												</span>
											</Box>

											<Grid
												item
												md={2}
												xl={2}
												sx={{
													display: "flex",
													justifyContent:
														"space-between",
													alignItems: "center",
												}}
											>
												<Box>
													<Button
														disabled={
															item.count === 1 &&
															true
														}
														onClick={() =>
															handleRemoveCart(
																item.id
															)
														}
														variant='outlined'
														size='small'
														sx={{
															color: "#0f3460",
															borderColor:
																"#0f3460",
															":hover": {
																borderColor:
																	"#0f3460",
																backgroundColor:
																	"#f0f0f0",
															},
															minWidth: "10px",
															padding: "4px",
														}}
													>
														<RemoveIcon />
													</Button>
												</Box>

												<Box>
													<Typography
														variant=''
														color='inherit'
													>
														{cantProduct(item.id)}
													</Typography>
												</Box>

												<Box>
													<Button
														onClick={() =>
															handleAddCart(
																item.id
															)
														}
														variant='outlined'
														color='inherit'
														size='small'
														sx={{
															color: "#0f3460",
															borderColor:
																"#0f3460",
															":hover": {
																borderColor:
																	"#0f3460",
																backgroundColor:
																	"#f0f0f0",
															},
															minWidth: "10px",
															padding: "4px",
														}}
													>
														<Add />
													</Button>
												</Box>
											</Grid>
										</Box>
									</Box>
								</Paper>
							))
						)}
					</Grid>
					<Grid item xs={12}>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							<Box sx={{ width: "25%" }}>
								<form onSubmit={handleSetCoupon}>
									<TextField
										id='outlined-basic'
										label='Codigo de promocion'
										variant='outlined'
										size='small'
										fullWidth
										autoComplete='off'
										name='coupon_value'
										color='secondary'
										value={
											coupon === null
												? coupon_value
												: coupon
										}
										onChange={handleInputChange}
									/>
									<button
										type='submit'
										className='btn-outline'
										style={{ marginTop: "10px" }}
									>
										Aplicar
									</button>
								</form>
							</Box>
							<Box>
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
										{coupon
											? formatNumber(
													total -
														(total * coupon) / 100
											  )
											: formatNumber(total)}
									</Typography>
								</Box>
								<Button
									variant='contained'
									color='custom'
									sx={{ mt: "10px", width: "100%" }}
								>
									{items.length != 0 ? (
										<Link
											to={"/cart/details"}
											style={{
												textDecoration: "none",
												color: "white",
											}}
										>
											Proceder a pagar
										</Link>
									) : (
										<Link
											to={"/"}
											style={{
												textDecoration: "none",
												color: "white",
											}}
										>
											Comienza a Comprar
										</Link>
									)}
								</Button>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</LayoutComponent>
	);
};
