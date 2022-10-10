import {
	Avatar,
	Box,
	Container,
	Divider,
	Grid,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatNumber } from "../../helpers/formatNumbers";
import { LayoutComponent } from "../../layouts/LayoutComponent";

export const CartDetailPage = () => {
	const { items, coupon, total } = useSelector((state) => state.shoppingcart);
	return (
		<LayoutComponent>
			<Container maxWidth='lg' sx={{ mt: 25 }}>
				<Grid container spacing={2}>
					<Grid item xs={8}>
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
									<Grid item xs={4}>
										<TextField
											id='outlined-basic'
											label='Nombre'
											color='secondary'
											size='small'
											fullWidth
											autoComplete='off'
											variant='filled'
											//   value={}
											//   onChange={}
										/>
									</Grid>
									<Grid item xs={4}>
										<TextField
											id='outlined-basic'
											label='Apellido'
											color='secondary'
											fullWidth
											size='small'
											autoComplete='off'
											variant='filled'
											//   value={}
											//   onChange={}
										/>
									</Grid>
									<Grid item xs={4}>
										<TextField
											id='outlined-basic'
											label='DNI'
											color='secondary'
											size='small'
											fullWidth
											autoComplete='off'
											variant='filled'
											//   value={}
											//   onChange={}
										/>
									</Grid>
									<Grid item xs={6}>
										<TextField
											id='outlined-basic'
											label='Correo Electronico'
											color='secondary'
											fullWidth
											size='small'
											autoComplete='off'
											variant='filled'
											type={"email"}
											//   value={}
											//   onChange={}
										/>
									</Grid>
									<Grid item xs={6}>
										<TextField
											id='outlined-basic'
											label='Telefono'
											color='secondary'
											fullWidth
											size='small'
											autoComplete='off'
											variant='filled'

											//   value={}
											//   onChange={}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											id='outlined-basic'
											label='Direccion'
											color='secondary'
											fullWidth
											size='small'
											autoComplete='off'
											variant='filled'
											multiline

											//   value={}
											//   onChange={}
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
									Notas
								</Typography>
							</Box>
							<Box sx={{ padding: "10px 10px" }}>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<TextField
											id='outlined-basic'
											label=''
											color='secondary'
											fullWidth
											size='small'
											autoComplete='off'
											variant='filled'
											multiline

											//   value={}
											//   onChange={}
										/>
									</Grid>
								</Grid>
							</Box>
						</Paper>
						<Grid container spacing={6}>
							<Grid item xs={6}>
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
					<Grid item xs={4}>
						<Typography
							variant='body1'
							sx={{ fontWeight: 600, marginBottom: "24px" }}
						>
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
								<Typography
									variant='body1'
									color='initial'
									className={"items-list"}
								>
									<span className='items-count-list'>
										{item.count}
									</span>{" "}
									x {item.name}
								</Typography>
								<Typography
									variant='body1'
									color='initial'
									className={"items-list"}
								>
									{formatNumber(item.price * item.count)}
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
							<Typography
								variant='body1'
								color='initial'
								className={"fact-list"}
							>
								Subtotal:
							</Typography>
							<Typography
								variant='body1'
								color='initial'
								className={"fact-price"}
							>
								{formatNumber(total)}
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								marginBottom: "8px",
							}}
						>
							<Typography
								variant='body1'
								color='initial'
								className={"fact-list"}
							>
								Delivery:
							</Typography>
							<Typography
								variant='body1'
								color='initial'
								className={"fact-price"}
							>
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
							<Typography
								variant='body1'
								color='initial'
								className={"fact-list"}
							>
								Descuento:
							</Typography>
							<Typography
								variant='body1'
								color='initial'
								className={"fact-price"}
							>
								{coupon ? `-${coupon}%` : "-"}
							</Typography>
						</Box>
						<Divider
							sx={{ marginTop: "24px", marginBottom: "0.5rem" }}
						/>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							<Typography
								variant='body1'
								color='inherint'
								sx={{ fontSize: "14px" }}
							>
								Total:
							</Typography>
							<Typography
								variant='body1'
								color='inherint'
								className={"fact-price"}
							>
								{coupon
									? formatNumber(
											total - (total * coupon) / 100
									  )
									: formatNumber(total)}
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</LayoutComponent>
	);
};
