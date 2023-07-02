import { Avatar, Box, Container, Divider, Grid, Paper, TextField, Typography, Button } from "@mui/material";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Fetch from "../../api/Fetch";
import { formatNumber } from "../../helpers/formatNumbers";
import { useForm } from "../../hooks/useForm";
import { LayoutComponent } from "../../layouts/LayoutComponent";
import { emptyShoppingCart } from "../../store/slices/cart";

export const CartDetailPage = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);
	const { items, coupon, total } = useSelector((state) => state.shoppingcart);
	const [formValues, handleInputChange] = useForm();
	const { name, dni, email, phone, address, note } = formValues;
	const amount = total.toFixed(2);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = {
			userId: user.uid,
			name,
			dni,
			email,
			phone,
			address,
			note,
			products: JSON.stringify(items),
			amount,
			coupon,
			paypal: false,
		};

		Fetch.post("/orders/create", data)
			.then((res) => {
				Swal.fire({
					icon: "success",
					title: "",
					text: res.data.msg,
				}).then((result) => {
					if (result.isConfirmed) {
						navigate(`/dashboard/order/detail/${res.data.id}`);
					}
				});
				dispatch(emptyShoppingCart());
			})
			.catch((err) => {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: err.response.data.msg,
				});
			});
	};

	const paypalPayment = () => {
		const data = {
			userId: user.uid,
			name,
			dni,
			email,
			phone,
			address,
			note,
			products: JSON.stringify(items),
			amount,
			coupon,
			paypal: true,
		};
		Fetch.post("/orders/create", data)
			.then((res) => {
				Swal.fire({
					icon: "success",
					title: "",
					text: res.data.msg,
				}).then((result) => {
					if (result.isConfirmed) {
						navigate(`/dashboard/order/detail/${res.data.id}`);
					}
				});
				dispatch(emptyShoppingCart());
			})
			.catch((err) => {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: err.response.data.msg,
				});
			});
	};

	return (
		<LayoutComponent>
			<Container maxWidth='lg' sx={{ mt: 25 }}>
				<form onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={8} lg={8}>
							<Paper className={"paper-add"}>
								<Box
									sx={{
										display: "flex",
										padding: "10px 10px",
										alignItems: "center",
									}}
								>
									<Avatar
										size='small'
										sx={{
											backgroundColor: "#D23F57",
											width: 30,
											height: 30,
										}}
									>
										1
									</Avatar>
									<Typography
										variant='body1'
										color='initial'
										sx={{
											fontSize: "20px",
											fontweight: 700,
											ml: 2,
										}}
									>
										Detalles de Facturacion
									</Typography>
								</Box>
								<Box sx={{ padding: "10px 10px" }}>
									<Grid container spacing={2}>
										<Grid item xs={12} sm={8} lg={8}>
											<TextField
												id='outlined-basic'
												label='Nombre'
												color='primary'
												size='small'
												fullWidth
												autoComplete='off'
												variant='filled'
												name='name'
												value={name}
												onChange={handleInputChange}
											/>
										</Grid>
										<Grid item xs={12} sm={4} lg={4}>
											<TextField
												id='outlined-basic'
												label='DNI'
												color='primary'
												size='small'
												fullWidth
												autoComplete='off'
												variant='filled'
												name='dni'
												value={dni}
												onChange={handleInputChange}
											/>
										</Grid>
										<Grid item xs={12} sm={6} lg={6}>
											<TextField
												id='outlined-basic'
												label='Correo Electronico'
												color='primary'
												fullWidth
												size='small'
												autoComplete='off'
												variant='filled'
												type={"email"}
												name='email'
												value={email}
												onChange={handleInputChange}
											/>
										</Grid>
										<Grid item xs={12} sm={6} lg={6}>
											<TextField
												id='outlined-basic'
												label='Telefono'
												color='primary'
												fullWidth
												size='small'
												autoComplete='off'
												variant='filled'
												name='phone'
												value={phone}
												onChange={handleInputChange}
											/>
										</Grid>
										<Grid item xs={12} lg={12}>
											<TextField
												id='outlined-basic'
												label='Direccion'
												color='primary'
												fullWidth
												size='small'
												autoComplete='off'
												variant='filled'
												multiline
												name='address'
												value={address}
												onChange={handleInputChange}
											/>
										</Grid>
									</Grid>
								</Box>
							</Paper>

							<Paper className={"paper-add"}>
								<Box
									sx={{
										display: "flex",
										padding: "20px 20px",
										alignItems: "center",
									}}
								>
									<Avatar
										sizes='small'
										sx={{
											backgroundColor: "#D23F57",
											width: 30,
											height: 30,
										}}
									>
										2
									</Avatar>
									<Typography
										variant='body1'
										color='initial'
										sx={{
											fontSize: "20px",
											fontweight: 700,
											ml: 2,
										}}
									>
										Nota
									</Typography>
								</Box>
								<Box sx={{ padding: "10px 10px" }}>
									<Grid container spacing={2}>
										<Grid item xs={12}>
											<TextField
												id='outlined-basic'
												label=''
												color='primary'
												fullWidth
												size='small'
												autoComplete='off'
												variant='filled'
												multiline
												name='note'
												value={note}
												onChange={handleInputChange}
											/>
										</Grid>
									</Grid>
								</Box>
							</Paper>
							<Grid container spacing={6}>
								<Grid item xs={12} sm={6} lg={6}>
									<Link
										to={"/cart"}
										style={{
											textDecoration: "none",
										}}
									>
										<button
											className={"btn-outline"}
											style={{
												width: "100%",
											}}
										>
											Regresar al Carrito
										</button>
									</Link>
								</Grid>
								{/* <Grid item xs={6}>
								<Link
									to={"/cart"}
									style={{
										textDecoration: "none",
									}}
								>
									<button
										className={"btn"}
										style={{
											width: "100%",
										}}
									>
										Proceder al Pago
									</button>
								</Link>
							</Grid> */}
							</Grid>
						</Grid>
						<Grid item xs={12} sm={4} lg={4}>
							<Typography variant='body1' sx={{ fontWeight: 600, marginBottom: "24px" }}>
								Tu orden
							</Typography>
							{items.map((item) => (
								<Box
									sx={{
										display: "flex",
										justifyContent: "space-between",
									}}
									key={item.id}
								>
									<Typography variant='body1' color='initial' className={"items-list"}>
										<span className='items-count-list'>{item.count}</span> x {item.name}
									</Typography>
									<Typography variant='body1' color='initial' className={"items-list"}>
										{formatNumber(item.price * item.count, "EN-US", "USD")}
									</Typography>
								</Box>
							))}

							<Divider sx={{ marginBottom: "24px" }} />
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									marginBottom: "8px",
								}}
							>
								<Typography variant='body1' color='initial' className={"fact-list"}>
									Subtotal:
								</Typography>
								<Typography variant='body1' color='initial' className={"fact-price"}>
									{formatNumber(total, "EN-US", "USD")}
								</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									marginBottom: "8px",
								}}
							>
								<Typography variant='body1' color='initial' className={"fact-list"}>
									Delivery:
								</Typography>
								<Typography variant='body1' color='initial' className={"fact-price"}>
									-
								</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									marginBottom: "8px",
								}}
							>
								<Typography variant='body1' color='initial' className={"fact-list"}>
									Descuento:
								</Typography>
								<Typography variant='body1' color='initial' className={"fact-price"}>
									{coupon ? `-${coupon}%` : "-"}
								</Typography>
							</Box>
							<Divider sx={{ marginTop: "24px", marginBottom: "0.5rem" }} />
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
								}}
							>
								<Typography variant='body1' color='inherint' sx={{ fontSize: "14px" }}>
									Total:
								</Typography>
								<Typography variant='body1' color='inherint' className={"fact-price"}>
									{coupon ? formatNumber(total - (total * coupon) / 100, "EN-US", "USD") : formatNumber(total, "EN-US", "USD")}
								</Typography>
							</Box>
							<Box sx={{ mt: 3 }}>
								<Button variant='contained' color='primary' fullWidth size='large' disabled={items.length == 0 && true} type='submit'>
									Pagar con mi Balance
								</Button>
							</Box>
							<Box
								sx={{
									mt: 2,
								}}
							>
								<PayPalButtons
									disabled={items.length == 0 && true}
									fundingSource='paypal'
									forceReRender={[amount, name, dni, email, phone, address, note]}
									createOrder={async (data, actions) => {
										return actions.order
											.create({
												purchase_units: [
													{
														amount: {
															currency_code: "USD",
															value: amount,
														},
													},
												],
											})
											.then((orderId) => {
												// console.log(data);
												// console.log(orderId);
												return orderId;
											});
									}}
									onApprove={function (data, actions) {
										// console.log(data);
										// console.log(data.orderID);

										return actions.order.capture().then(function (details) {
											console.log(details);

											// Your code here after capture the order
											dispatch(paypalPayment());
										});
									}}
									onCancel={function (data) {
										console.log(data);
									}}
									onError={function (err) {
										console.log(err);
									}}
								/>
							</Box>
						</Grid>
					</Grid>
				</form>
			</Container>
		</LayoutComponent>
	);
};
