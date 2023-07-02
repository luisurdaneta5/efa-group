import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import { Box, Divider, IconButton, Typography } from "@mui/material";
import { ShoppingBag } from "./assets/ShoppingBag";
import "./styles.css";
import CloseIcon from "@mui/icons-material/Close";

export const ShoppingCartEmty = ({ setState, anchor }) => {
	const toggleDrawer = (anchor, open) => (event) => {
		setState({ [anchor]: open });
	};

	return (
		<>
			<Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						margin: "0px 20px",
						height: "74px",
					}}
				>
					<ShoppingBagOutlinedIcon />
					<Typography variant='' color='inherit' sx={{ ml: 3, fontWeight: "bold" }}>
						0 Productos
					</Typography>
					<IconButton
						sx={{
							margin: "0 0 0 auto",
						}}
						onClick={toggleDrawer(anchor, false)}
					>
						<CloseIcon />
					</IconButton>
				</Box>
				<Divider />
				<Box className='icon-bag-emty'>
					<ShoppingBag />
					<Typography variant='' color='initial' sx={{ mt: 2 }}>
						Tu carrito de compras esta vacio.
					</Typography>
					<Typography variant='' color='initial'>
						Comienza tu Compra!!
					</Typography>
				</Box>
			</Box>
		</>
	);
};
