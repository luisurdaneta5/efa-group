import { LayoutComponent } from "../../layouts/LayoutComponent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {
	Box,
	Rating,
	Typography,
	Button,
	Tooltip,
	Avatar,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import {
	AddShoppingCart,
	ClearShoppingCart,
	RemoveShoppingCart,
	UpdateShoppingCart,
} from "../../store/slices/cart/cartSlices";
import { TabComponet } from "../../layouts/components/Tabs/TabComponet";
import img_user from "../../assets/images/users/yo.jpg";

export const ProductPage = () => {
	const dispatch = useDispatch();
	const { items } = useSelector((state) => state.shoppingcart);

	const handleAddCart = ({ id, name, price, images }) => {
		const found = items.find((item) => item.id === id);

		if (found) {
			dispatch(UpdateShoppingCart({ ...found, count: found.count + 1 }));
		} else {
			const itemNew = {
				id: id,
				name: name,
				price: price,
				images: images,
				count: 1,
			};
			dispatch(AddShoppingCart(itemNew));
		}
	};

	const handleRemoveCart = ({ id }) => {
		items.find((item) => {
			if (item.id === id) {
				if (item.count === 1) {
					dispatch(ClearShoppingCart(item));
				} else {
					dispatch(
						RemoveShoppingCart({ ...item, count: item.count - 1 })
					);
				}
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

	function description() {
		return (
			<Box>
				<Typography
					sx={{
						fontSize: "20px",
						fontWeight: 700,
					}}
				>
					Especificaciones:
				</Typography>
				<Typography
					sx={{
						fontSize: "14px",
					}}
				>
					Marca: Nike
				</Typography>
				<Typography
					sx={{
						fontSize: "14px",
					}}
				>
					Modelo: Jordan
				</Typography>
				<Typography
					sx={{
						fontSize: "14px",
					}}
				>
					Zapatos Jordan fabricado con cuero de cocodrillo y veneno de
					escorpion
				</Typography>
			</Box>
		);
	}

	function reviews() {
		return (
			<Box>
				<Box
					sx={{
						display: "flex",
					}}
				>
					<Avatar
						src={img_user}
						sx={{
							width: "48px",
							height: "48px",
						}}
					/>
					<Box
						sx={{
							ml: "16px",
							display: "flex",
							flexDirection: "column",
						}}
					>
						<Typography
							sx={{
								mb: "4px",
								fontSize: "16px",
								fontWeight: 500,
							}}
						>
							Luis Urdaneta
						</Typography>
						<Box sx={{ display: "flex" }}>
							<Rating
								value={5}
								size='medium'
								sx={{
									fontSize: "1.25rem",
								}}
								readOnly
							/>

							<Typography
								sx={{
									fontSize: "14px",
									fontWeight: 600,
									ml: 2,
								}}
							>
								4.5
							</Typography>

							<Typography
								sx={{
									fontSize: "14px",
									ml: 2,
								}}
							>
								Hace 3 años
							</Typography>
						</Box>
					</Box>
					<Box></Box>
				</Box>
			</Box>
		);
	}

	return (
		<LayoutComponent>
			<Container
				maxWidth='lg'
				sx={{ mt: 22 }}
				className='animate__animated animate__fadeIn'
			>
				<Grid container spacing={2}>
					<Grid item lg={6}>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							<img
								src={
									"https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=1920&q=75"
								}
								alt=''
								width={"70%"}
								style={{
									borderRadius: "10px",
								}}
							/>
						</Box>
					</Grid>
					<Grid item lg={6}>
						<Box
							sx={{
								mb: "16px",
							}}
						>
							<Typography
								sx={{
									fontSize: "30px",
									fontWeight: 700,
								}}
							>
								Zapatos Nike Air Jordan
							</Typography>
						</Box>
						<Box
							sx={{
								mb: "16px",
								display: "flex",
							}}
						>
							<Typography
								sx={{
									fontSize: "14px",
								}}
							>
								Marca:
							</Typography>
							<Typography
								sx={{
									fontSize: "14px",
									fontWeight: 500,
									ml: 1,
								}}
							>
								Nike
							</Typography>
						</Box>

						<Box
							sx={{
								mb: "16px",
								display: "flex",
								alignItems: "center",
							}}
						>
							<Typography
								sx={{
									fontSize: "14px",
								}}
							>
								Calificacion:
							</Typography>

							<Box
								sx={{
									ml: 1,
									display: "flex",
								}}
							>
								<Rating value={5} readOnly size='small' />
								<Typography sx={{ ml: 1, fontSize: "14px" }}>
									(50)
								</Typography>
							</Box>
						</Box>
						<Box
							sx={{
								display: "flex",
							}}
						>
							<Typography
								sx={{
									fontSize: "25px",
									fontWeight: 700,
									color: "rgb(210, 63, 87)",
								}}
							>
								$350.00
							</Typography>
						</Box>

						<Box
							sx={{
								display: "flex",
								mt: 2,
							}}
						>
							<Button variant='contained' color='primary'>
								Agregar al Carrito
							</Button>
						</Box>

						{cantProduct() === 0 ? (
							<Box
								sx={{
									display: "flex",
									mt: 2,
								}}
							>
								<Button variant='contained' color='primary'>
									Agregar al Carrito
								</Button>
							</Box>
						) : (
							<Box
								sx={{
									width: "185px",
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								<Box>
									<Button
										onClick={() => handleRemoveCart()}
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
										{cantProduct("22202")}
									</Typography>
								</Box>

								<Box>
									<Button
										onClick={() => handleAddCart()}
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
										<AddIcon />
										{/* <AddIcon /> */}
									</Button>
								</Box>
							</Box>
						)}

						<Box
							sx={{
								width: "185px",
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<Box>
								<Button
									onClick={() => handleRemoveCart()}
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
									{cantProduct("22202")}
								</Typography>
							</Box>

							<Box>
								<Button
									onClick={() => handleAddCart()}
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
									<AddIcon />
									{/* <AddIcon /> */}
								</Button>
							</Box>
						</Box>
					</Grid>
				</Grid>

				<Box
					sx={{
						mt: 8,
					}}
				>
					<TabComponet description={description} reviews={reviews} />
				</Box>
			</Container>
		</LayoutComponent>
	);
};
