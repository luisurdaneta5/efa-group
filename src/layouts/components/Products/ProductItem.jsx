import React from "react";
import {
	Box,
	Button,
	Card,
	CardContent,
	Chip,
	Grid,
	IconButton,
	Rating,
	Tooltip,
	Typography,
} from "@mui/material";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/AddShoppingCart";

import { useDispatch, useSelector } from "react-redux";

import "./styles.css";
import {
	AddShoppingCart,
	ClearShoppingCart,
	RemoveShoppingCart,
	UpdateShoppingCart,
} from "../../../store/slices/cart/cartSlices";
import { FavoriteBorderOutlined } from "@mui/icons-material";

export const ProductItem = () => {
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

	return (
		<Box
			className='contained-principal'
			sx={{
				position: "relative",
			}}
		>
			<Card
				sx={{
					boxShadow: "1px 1px 3px rgb(3 0 71 / 9%);",
					cursor: "pointer",
				}}
			>
				<Box>
					<Chip
						label='30% off'
						size='small'
						sx={{
							backgroundColor: "#0f3460",
							color: "white",
							position: "absolute",
							zIndex: 11,
							mt: "10px",
							ml: "10px",
							padding: "9px",
						}}
					/>

					<Box className='fav-icon-contained'>
						<Box
							sx={{
								display: "flex",
								justifyContent: "flex-end",
								alignContent: "flex-end",
							}}
						>
							<IconButton
								sx={{
									position: "absolute",
								}}
							>
								<FavoriteBorderOutlined
									sx={{
										mt: 0.5,
										mr: 0.5,
										fontSize: "20px",
									}}
								/>
							</IconButton>
						</Box>
					</Box>

					<img
						src={
							"https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=1920&q=75"
						}
						alt=''
						width={"100%"}
					/>
				</Box>
				<CardContent>
					<Grid container spacing={2}>
						<Grid item md={10} xl={10} sx={{ lineHeight: 2 }}>
							<Typography
								variant=''
								color='initial'
								sx={{
									fontWeight: "",
								}}
							>
								Nombre producto
							</Typography>

							<Rating
								name='half-rating-read'
								defaultValue={2.5}
								precision={0.5}
								readOnly
								size='small'
							/>

							<Box sx={{ display: "flex" }}>
								<Typography
									variant='body1'
									sx={{
										color: "#0f3460",
									}}
								>
									$180.0
								</Typography>
								<Typography
									variant='body1'
									color='initial'
									sx={{
										ml: 2,
										textDecoration: "line-through",
									}}
								>
									180.0
								</Typography>
							</Box>
						</Grid>

						{cantProduct() === 0 ? (
							<Grid
								item
								md={2}
								xl={2}
								sx={{
									display: "flex",
									flexDirection: "column-reverse",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								<Box>
									<Button
										onClick={() => handleAddCart()}
										variant='outlined'
										color='inherit'
										size='small'
										sx={{
											mt: 7.2,
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
										<Tooltip title='Agregar Producto'>
											<AddIcon />
										</Tooltip>
										{/* <AddIcon /> */}
									</Button>
								</Box>
							</Grid>
						) : (
							<Grid
								item
								md={2}
								xl={2}
								sx={{
									display: "flex",
									flexDirection: "column-reverse",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
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

								<Box>
									<Typography variant='' color='inherit'>
										{cantProduct("22202")}
									</Typography>
								</Box>

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
							</Grid>
						)}
					</Grid>
				</CardContent>
			</Card>
		</Box>
	);
};
