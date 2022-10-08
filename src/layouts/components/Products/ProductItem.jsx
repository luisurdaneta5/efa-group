import React from "react";
import {
	Box,
	Button,
	Card,
	CardContent,
	Chip,
	Grid,
	Rating,
	Tooltip,
	Typography,
} from "@mui/material";

import RemoveIcon from "@mui/icons-material/Remove";
import { AddShoppingCart } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
	cartAdd,
	cartClear,
	cartRemove,
	cartUpdate,
} from "../../../actions/cart";
import "./styles.css";

export const ProductItem = ({ products }) => {
	const dispatch = useDispatch();
	const { items } = useSelector((state) => state.shoppingcart);

	const handleAddCart = ({ id, name, price, images }) => {
		const found = items.find((item) => item.id === id);

		if (found) {
			dispatch(cartUpdate({ ...found, count: found.count + 1 }));
		} else {
			const itemNew = {
				id: id,
				name: name,
				price: price,
				images: images,
				count: 1,
			};
			dispatch(cartAdd(itemNew));
		}
	};

	const handleRemoveCart = ({ id }) => {
		items.find((item) => {
			if (item.id === id) {
				if (item.count === 1) {
					dispatch(cartClear(item));
				} else {
					dispatch(cartRemove({ ...item, count: item.count - 1 }));
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
			sx={{
				position: "relative",
			}}
		>
			<Typography
				variant='h5'
				color='black'
				sx={{
					position: "relative",
					zIndex: 10,
					display: "inline-block",
					fontWeight: 700,
					color: "#1d1d1d",
					lineHeight: "100px",
				}}
			>
				<i className='fa-solid fa-bolt' style={{ color: "red" }}></i>{" "}
				Ofertas Relampago
			</Typography>

			<Grid container spacing={2} columnSpacing={2}>
				{products.map((product, index) => (
					<Grid
						item
						key={product.id}
						md={3}
						xl={3}
						sx={{
							cursor: "pointer",
						}}
					>
						<Card
							sx={{
								boxShadow: "1px 1px 3px rgb(3 0 71 / 9%);",
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
								<img
									src={product.images}
									alt=''
									width={"100%"}
								/>
							</Box>
							<CardContent>
								<Grid container spacing={2}>
									<Grid
										item
										md={10}
										xl={10}
										sx={{ lineHeight: 2 }}
									>
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
													textDecoration:
														"line-through",
												}}
											>
												180.0
											</Typography>
										</Box>
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
											<Box>
												<Button
													onClick={() =>
														handleAddCart(product)
													}
													variant='outlined'
													color='inherit'
													size='small'
													sx={{
														mt: 7.2,
														color: "#0f3460",
														borderColor: "#0f3460",
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
													<Tooltip title='Agregar Producto'>
														<AddShoppingCart />
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
													onClick={() =>
														handleAddCart(product)
													}
													variant='outlined'
													color='inherit'
													size='small'
													sx={{
														color: "#0f3460",
														borderColor: "#0f3460",
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
													<AddShoppingCart />
													{/* <AddIcon /> */}
												</Button>
											</Box>

											<Box>
												<Typography
													variant=''
													color='inherit'
												>
													{cantProduct(product.id)}
												</Typography>
											</Box>

											<Box>
												<Button
													onClick={() =>
														handleRemoveCart(
															product
														)
													}
													variant='outlined'
													size='small'
													sx={{
														color: "#0f3460",
														borderColor: "#0f3460",
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
										</Grid>
									)}
								</Grid>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};
