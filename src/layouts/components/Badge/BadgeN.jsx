import React, { useState } from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { IconButton, Badge, Box, Drawer, Tooltip } from "@mui/material";
import { ShoppingCart } from "../Drawer/ShoppingCart";

import { useSelector } from "react-redux";
import { ShoppingCartEmty } from "../Drawer/ShoppingCartEmty";
import { LoginModal } from "../Modals/LoginModal";

export const BadgeN = (props) => {
	const { items } = useSelector((state) => state.shoppingcart);
	const itemsTotal = items.length;
	const anchor = "right";
	const shapeCircleStyles = { borderRadius: "50%" };
	const shapeStyles = {
		bgcolor: "#f3f5f9",
		width: 50,
		height: 50,
	};

	const [state, setState] = useState({ right: false });
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const toggleDrawer = (anchor, open) => (event) => {
		setState({ [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			sx={{
				width: 380,
				justifyContent: "space-between",
			}}
			role='presentation'
			onKeyDown={toggleDrawer(anchor, false)}
		>
			{items.length > 0 ? <ShoppingCart setState={setState} anchor={anchor} open={state[anchor]} /> : <ShoppingCartEmty setState={setState} anchor={anchor} />}
		</Box>
	);

	const circle = (
		<Box component='span' sx={{ ...shapeStyles, ...shapeCircleStyles }}>
			{props.icon === "fa-regular fa-user" ? (
				<i
					className={props.icon}
					style={{
						fontSize: 20,
					}}
				></i>
			) : (
				<ShoppingBagOutlinedIcon
					sx={{
						fontSize: "25px",
					}}
				/>
			)}
		</Box>
	);

	return (
		<>
			{props.icon === "fa-regular fa-user" ? (
				<Box>
					<Tooltip title='Login / Register'>
						<IconButton onClick={handleOpen}>
							<Badge color='error'>{circle}</Badge>
						</IconButton>
					</Tooltip>
					<LoginModal open={open} handleClose={handleClose} />
				</Box>
			) : (
				<Box>
					<IconButton onClick={toggleDrawer(anchor, true)}>
						<Badge
							badgeContent={itemsTotal}
							color='error'
							sx={{
								top: "6px",
							}}
						>
							{circle}
						</Badge>
					</IconButton>
					<Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
						{list(anchor)}
					</Drawer>
				</Box>
			)}
		</>
	);
};
