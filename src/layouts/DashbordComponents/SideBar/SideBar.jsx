import {
	Box,
	Divider,
	Drawer,
	Toolbar,
	Typography,
	Button,
} from "@mui/material";
import logoWhite from "../../../assets/images/logo-white.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { ReactComponent as Products } from "../../../assets/icons/products.svg";
import { ReactComponent as Customers } from "../../../assets/icons/customers.svg";
import { ReactComponent as Orders } from "../../../assets/icons/orders.svg";
import { ReactComponent as Reviews } from "../../../assets/icons/reviews.svg";
import { ReactComponent as Gear } from "../../../assets/icons/gear.svg";

import "./styles.css";
import { Link } from "react-router-dom";
export const SideBar = ({ drawerWidth = 240 }) => {
	return (
		<Box
			component='nav'
			sx={{
				width: {
					sm: drawerWidth,
				},
				flexShrink: {
					sm: 0,
				},
			}}
		>
			<Drawer
				variant='permanent'
				open={false}
				sx={{
					display: {
						xs: "block",
					},
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: drawerWidth,
						backgroundColor: "rgb(43, 52, 69)",
					},
				}}
			>
				<Toolbar>
					<Box
						component='img'
						src={logoWhite}
						width='80%'
						sx={{
							display: "flex",
							justifyContent: "center",
							alignContent: "center",
							alignItems: "center",
							ml: 2,
							p: 2,
						}}
					/>
				</Toolbar>
				<Divider />
				<Box
					sx={{
						paddingLeft: "16px",
						paddingRight: "16px",
						mt: 5,
					}}
				>
					<Box component='ul'>
						<Link to='/admin/dashboard'>
							<Box component='li' className='item-list'>
								<DashboardIcon
									sx={{
										fontSize: "20px",
									}}
								/>
								<Typography sx={{ ml: 2, fontSize: "14px" }}>
									Inicio
								</Typography>
							</Box>
						</Link>

						<Link to='/admin/dashboard/products'>
							<Box component='li' className='item-list'>
								<Products style={{ width: "20px" }} />
								<Typography sx={{ ml: 2, fontSize: "14px" }}>
									Productos
								</Typography>
							</Box>
						</Link>

						<Link to='/admin/dashboard/orders'>
							<Box component='li' className='item-list'>
								<Orders style={{ width: "20px" }} />
								<Typography sx={{ ml: 2, fontSize: "14px" }}>
									Ordernes
								</Typography>
							</Box>
						</Link>

						<Link to='/admin/dashboard/customers'>
							<Box component='li' className='item-list'>
								<Customers style={{ width: "20px" }} />
								<Typography sx={{ ml: 2, fontSize: "14px" }}>
									Clientes
								</Typography>
							</Box>
						</Link>

						<Link to='/admin/dashboard/customers'>
							<Box component='li' className='item-list'>
								<Reviews style={{ width: "20px" }} />
								<Typography sx={{ ml: 2, fontSize: "14px" }}>
									Reseñas
								</Typography>
							</Box>
						</Link>

						<Link to='/admin/dashboard/customers'>
							<Box component='li' className='item-list'>
								<Gear style={{ width: "20px" }} />
								<Typography sx={{ ml: 2, fontSize: "14px" }}>
									Configuracion
								</Typography>
							</Box>
						</Link>

						<Link to='/admin/dashboard/customers'>
							<Box component='li' className='item-list'>
								<ExitToAppIcon style={{ width: "20px" }} />
								<Typography sx={{ ml: 2, fontSize: "14px" }}>
									Salir
								</Typography>
							</Box>
						</Link>
					</Box>
				</Box>
			</Drawer>
		</Box>
	);
};
