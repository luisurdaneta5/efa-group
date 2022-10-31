import { MenuOutlined } from "@mui/icons-material";
import {
	AppBar,
	IconButton,
	Toolbar,
	Grid,
	Typography,
	Avatar,
	Box,
	Badge,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

export const Navbar = ({ drawerWidth = 240 }) => {
	return (
		<AppBar
			position='fixed'
			sx={{
				backgroundColor: "white",
				width: {
					sm: `calc(100% - ${drawerWidth}px)`,
					ml: {
						sm: `${drawerWidth}px`,
					},
				},
			}}
		>
			<Toolbar>
				<IconButton
					edge='start'
					sx={{
						color: "black",
						mr: 2,
						display: {
							sm: "none",
						},
					}}
				>
					<MenuOutlined />
				</IconButton>

				<Grid
					container
					direction='rows'
					alignItems='center'
					justifyContent='space-between'
				>
					<Typography sx={{ color: "black" }} noWrap></Typography>

					<Box>
						<IconButton aria-label='user' sx={{ mr: 1 }}>
							<Badge color='primary' variant='dot'>
								<NotificationsIcon />
							</Badge>
						</IconButton>
						<IconButton aria-label='user'>
							<Avatar alt='Luis Urdaneta' />
						</IconButton>
					</Box>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
