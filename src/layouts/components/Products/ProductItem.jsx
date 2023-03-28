import React from "react";
import { Box, Button, Card, CardContent, Checkbox, Chip, Grid, IconButton, Rating, Tooltip, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { Favorite, FavoriteBorder, FavoriteBorderOutlined } from "@mui/icons-material";
import { FavoriteButton } from "../Favorites/FavoriteButton";
import { formatNumber } from "../../../helpers/formatNumbers";
import { useState } from "react";
import { addItem, deleteItem, removeItem, updateItem } from "../../../store/slices/cart";
import "./styles.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const ProductItem = ({ product, favId }) => {
	const dispatch = useDispatch();
	const { items } = useSelector((state) => state.shoppingcart);
	const { isAuthenticated, user } = useSelector((state) => state.auth);

	const handleAddCart = ({ id, name, price, discount, img }) => {
		const found = items.find((item) => item.id === id);

		if (found) {
			dispatch(updateItem(user.uid, { ...found, count: found.count + 1 }));
		} else {
			if (discount !== 0) {
				const itemNew = {
					id: id,
					name: name,
					price: price - (price * discount) / 100,
					images: img,
					count: 1,
				};

				isAuthenticated
					? dispatch(addItem(user.uid, itemNew))
					: toast.error("Para agregar un producto debe iniciar sesion", {
							position: "top-right",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
					  });
			} else {
				const itemNew = {
					id: id,
					name: name,
					price: price,
					images: images,
					count: 1,
				};
				isAuthenticated
					? dispatch(addItem(user.uid, itemNew))
					: toast.error("Para agregar un producto debe iniciar sesion", {
							position: "top-right",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
					  });
			}
		}
	};

	const handleRemoveCart = ({ id }) => {
		items.find((item) => {
			if (item.id === id) {
				if (item.count === 1) {
					dispatch(deleteItem(user.uid, item));
				} else {
					dispatch(removeItem(user.uid, { ...item, count: item.count - 1 }));
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
				<Link to={`/product/${product.id}`}>
					<Box>
						{product.discount !== 0 && (
							<Chip
								label={`${product.discount}% Descuento`}
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
						)}

						{isAuthenticated && <FavoriteButton uid={user.uid} product={product.id} favId={favId} />}

						<img src={product.img} alt={product.name} width={"100%"} />
					</Box>
				</Link>
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
								{product.name}
							</Typography>

							<Rating
								name='half-rating-read'
								defaultValue={
									product.reviews.reduce((previous, current) => {
										return previous + parseInt(current.rating); // sumar el valor de una propiedad
									}, 0) / product.reviews.length
								}
								precision={0.5}
								readOnly
								size='small'
							/>

							{product.discount !== 0 ? (
								<Box sx={{ display: "flex" }}>
									<Typography
										variant='body1'
										sx={{
											color: "#0f3460",
										}}
									>
										{formatNumber(product.price - (product.price * product.discount) / 100, "EN-US", "USD")}
									</Typography>
									<Typography
										variant='body1'
										color='initial'
										sx={{
											ml: 2,
											textDecoration: "line-through",
										}}
									>
										{formatNumber(product.price, "EN-US", "USD")}
									</Typography>
								</Box>
							) : (
								<Box sx={{ display: "flex" }}>
									<Typography
										variant='body1'
										color='initial'
										sx={{
											color: "#0f3460",
										}}
									>
										{formatNumber(product.price, "EN-US", "USD")}
									</Typography>
								</Box>
							)}
						</Grid>

						{cantProduct(product.id) === 0 ? (
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
								{product.stock == 0 && (
									<Button
										variant='outlined'
										color='error'
										size='small'
										sx={{
											marginRight: "50px",
										}}
									>
										AGOTADO
									</Button>
								)}
								{product.stock != 0 && (
									<Box sx={{ marginTop: "-10px" }}>
										<Button
											onClick={() => handleAddCart(product)}
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
								)}
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
									marginTop: "-10px",
								}}
							>
								<Box>
									<Button
										onClick={() => handleAddCart(product)}
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
										{cantProduct(product.id)}
									</Typography>
								</Box>

								<Box>
									<Button
										onClick={() => handleRemoveCart(product)}
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
