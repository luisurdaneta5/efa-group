import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/AddShoppingCart";
import Slider from "react-slick/lib/slider";
import {
	Box,
	Card,
	CardContent,
	Chip,
	Grid,
	Rating,
	Typography,
	Button,
	Tooltip,
	IconButton,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";

import { formatNumber } from "../../../../helpers/formatNumbers";
import { toast } from "react-toastify";

import {
	AddShoppingCart,
	ClearShoppingCart,
	RemoveShoppingCart,
	UpdateShoppingCart,
} from "../../../../store/slices/cart/cartSlices";

const PreviousBtn = (props) => {
	const { className, onClick } = props;
	return (
		<div className={className} onClick={onClick}>
			<IconButton className='iconButton'>
				<ArrowBackIcon />
			</IconButton>
		</div>
	);
};

const NextBtn = (props) => {
	const { className, onClick } = props;
	return (
		<div className={className} onClick={onClick}>
			<IconButton className='iconButton'>
				<ArrowForwardIcon />
			</IconButton>
		</div>
	);
};

export const CarrouselProduct = ({ products, letter }) => {
	const settings = {
		autoplay: false,
		autoplayspeed: 2000,
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: <NextBtn />,
		prevArrow: <PreviousBtn />,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const dispatch = useDispatch();
	const { items } = useSelector((state) => state.shoppingcart);
	const { isLoading } = useSelector((state) => state.auth);

	const handleAddCart = ({ id, name, price, discount, images }) => {
		const found = items.find((item) => item.id === id);
		console.log(found);

		if (found) {
			dispatch(UpdateShoppingCart({ ...found, count: found.count + 1 }));
		} else {
			if (discount !== 0) {
				const itemNew = {
					id: id,
					name: name,
					price: price - (price * discount) / 100,
					images: images,
					count: 1,
				};

				!isLoading
					? dispatch(AddShoppingCart(itemNew))
					: toast.error(
							"Para agregar un producto debe iniciar sesion",
							{
								position: "top-right",
								autoClose: 5000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined,
							}
					  );
			} else {
				const itemNew = {
					id: id,
					name: name,
					price: price,
					images: images,
					count: 1,
				};
				!isLoading
					? dispatch(AddShoppingCart(itemNew))
					: toast.error(
							"Para agregar un producto debe iniciar sesion",
							{
								position: "top-right",
								autoClose: 5000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined,
							}
					  );
			}
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
		<div className='multi'>
			<Slider {...settings}>
				{products.map((product) => (
					<Card
						key={product.id}
						sx={{
							boxShadow: "1px 1px 3px rgb(3 0 71 / 9%);",
						}}
						className='card-heigth'
					>
						<Box>
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
							<img src={product.images} alt='' width={"100%"} />
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
											fontSize: letter,
										}}
									>
										{product.name}
									</Typography>

									<Rating
										name='half-rating-read'
										defaultValue={product.rating}
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
											{formatNumber(
												product.price -
													(product.price *
														product.discount) /
														100
											)}
										</Typography>
										<Typography
											variant='body1'
											color='initial'
											sx={{
												ml: 2,
												textDecoration: "line-through",
											}}
										>
											{formatNumber(product.price)}
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
														borderColor: "#0f3460",
														backgroundColor:
															"#f0f0f0",
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
														borderColor: "#0f3460",
														backgroundColor:
															"#f0f0f0",
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
													handleRemoveCart(product)
												}
												variant='outlined'
												size='small'
												sx={{
													color: "#0f3460",
													borderColor: "#0f3460",
													":hover": {
														borderColor: "#0f3460",
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
				))}
			</Slider>
		</div>
	);
};
