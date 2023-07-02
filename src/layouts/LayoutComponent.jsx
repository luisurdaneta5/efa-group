import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Badge, BottomNavigation, BottomNavigationAction, Box, Fab, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingCategories } from "../store/slices/ui";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";

import FavoriteIcon from "@mui/icons-material/Favorite";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useNavigate } from "react-router-dom";

export const LayoutComponent = ({ children }) => {
	const dispatch = useDispatch();
	const { isAuthenticated } = useSelector((state) => state.auth);
	const { items } = useSelector((state) => state.shoppingcart);
	const itemsTotal = items.length;
	const navigate = useNavigate();

	const [value, setValue] = useState(0);

	useEffect(() => {
		dispatch(startLoadingCategories());
	}, [dispatch]);

	const { general, rss } = useSelector((state) => state.config);
	return (
		<>
			<Box>
				<Navbar email={general.email} whatsapp={rss.whatsapp} />
			</Box>

			{children}

			<Box component='a' href={`https://wa.me/${rss.whatsapp}`} target='_blank'>
				<Fab
					aria-label='whatsapp'
					sx={{
						display: {
							xs: "none",
							sm: "flex",
						},
						position: "fixed",
						bottom: 60,
						right: "4%",
						width: "70px",
						height: "70px",
						backgroundColor: "#0d9f16",
						":hover": {
							backgroundColor: "#0ed11c",
						},
					}}
				>
					<WhatsAppIcon
						sx={{
							fontSize: "30px",
							color: "white",
						}}
					/>
				</Fab>
			</Box>

			<Box>
				<Footer rss={rss} general={general} />
			</Box>

			{isAuthenticated && (
				<Paper
					sx={{
						display: {
							sm: "none",
							md: "none",
							lg: "none",
							xl: "none",
						},
						position: "fixed",
						bottom: 0,
						left: 0,
						right: 0,
						height: "70px",
					}}
					elevation={3}
				>
					<BottomNavigation
						showLabels
						value={value}
						onChange={(event, newValue) => {
							if (newValue === 0) {
								navigate("/");
							}

							if (newValue === 1) {
								navigate("/cart");
							}

							if (newValue === 2) {
								navigate("/dashboard");
							}
							setValue(newValue);
						}}
						sx={{
							mt: 1,
						}}
					>
						<BottomNavigationAction label='Inicio' icon={<HomeOutlinedIcon />} />

						<BottomNavigationAction
							label='Carrito'
							icon={
								<Badge badgeContent={itemsTotal} color='error'>
									<ShoppingBagOutlinedIcon />
								</Badge>
							}
						/>

						<BottomNavigationAction label='Mi Cuenta' icon={<PersonOutlineIcon />} />
					</BottomNavigation>
				</Paper>
			)}
		</>
	);
};
