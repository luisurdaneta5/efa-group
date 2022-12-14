import React from "react";
import { Add, Clear, Remove } from "@mui/icons-material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useDispatch, useSelector } from "react-redux";
import { formatNumber } from "../../../helpers/formatNumbers";

import {
	Avatar,
	Box,
	Button,
	Divider,
	IconButton,
	Typography,
} from "@mui/material";
import "./styles.css";
import { Link } from "react-router-dom";
import {
	ClearShoppingCart,
	RemoveShoppingCart,
	UpdateShoppingCart,
} from "../../../store/slices/cart/cartSlices";

export const ShoppingCart = () => {
	const dispatch = useDispatch();
	const { items, total } = useSelector((state) => state.shoppingcart);
	const itemsTotal = items.length;

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

	return (
		<>
			<Box className={"height-cart"}>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						margin: "0px 20px",
						height: "74px",
					}}
				>
					<ShoppingBagOutlinedIcon />
					<Typography
						variant=''
						color='inherit'
						sx={{ ml: 3, fontWeight: "bold" }}
					>
						{itemsTotal} Productos
					</Typography>
				</Box>
				<Divider />
				{items.map((item) => (
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							padding: "25px 20px",
							borderBottom: " 1px solid #f3f5f9 ",
							justifyContent: "space-between",
						}}
						key={item.id}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<Button
								onClick={() => handleAddCart(item.id)}
								variant='outlined'
								color='inherit'
								sx={{
									color: "#0f3460",
									borderColor: "#0f3460",
									":hover": {
										borderColor: "#0f3460",
										backgroundColor: "#f0f0f0",
									},
									borderRadius: "300px",
									padding: "5px 5px",
									minWidth: "0px",
									minHeight: "0px",
								}}
							>
								<Add />
							</Button>

							<Typography
								variant='body1'
								color='initial'
								sx={{
									padding: "2px 2px",
								}}
							>
								{item.count}
							</Typography>

							<Button
								disabled={item.count === 1 && true}
								onClick={() => handleRemoveCart(item.id)}
								variant='outlined'
								color='inherit'
								sx={{
									color: "#0f3460",
									borderColor: "#0f3460",
									":hover": {
										borderColor: "#0f3460",
										backgroundColor: "#f0f0f0",
									},
									borderRadius: "300px",
									padding: "5px 5px",
									minWidth: "0px",
									minHeight: "0px",
								}}
							>
								<Remove />
							</Button>
						</Box>

						<a href='/hola'>
							<Avatar
								alt='Remy Sharp'
								src={item.images}
								sx={{
									width: 76,
									height: 76,
									marginLeft: "16px",
									marginRight: " 16px",
								}}
							/>
						</a>
						<Box
							sx={{
								flex: "1 1 0",
							}}
						>
							<a
								href='/'
								style={{
									textDecoration: "none",
								}}
							>
								<Typography
									color='initial'
									sx={{
										fontSize: "14px",
										fontWeight: 600,
										textTransform: "none",
										whiteSpace: "normal",
										marginTop: "0px",
										marginBottom: "0px",
									}}
								>
									{item.name}
								</Typography>
							</a>
							<small
								style={{
									fontSize: "11px",
								}}
							>
								{formatNumber(item.price)} x {item.count}
							</small>
							<Box
								sx={{
									fontWeight: 600,
									fontSize: "14px",
									color: "#0f3460",
									mt: "4px",
								}}
							>
								{formatNumber(item.price * item.count)}
							</Box>
						</Box>
						<IconButton onClick={() => handleClear(item.id)}>
							<Clear />
						</IconButton>
					</Box>
				))}
			</Box>
			<Box
				sx={{
					padding: "20px",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<a href='/cart' className='btn'>
					Facturar Ahora ({formatNumber(total)})
				</a>

				<Box sx={{ mt: 1.5 }}>
					<Link to={"/cart"} className='btn-outline'>
						Ver Carrito
					</Link>
				</Box>
			</Box>
		</>
	);
};
