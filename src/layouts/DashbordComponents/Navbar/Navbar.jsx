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
	Popper,
	Fade,
	Paper,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import { useState } from "react";
import { useSelector } from "react-redux";

export const Navbar = ({ drawerWidth = 240 }) => {
	const { avatar, displayName } = useSelector((state) => state.auth.user);
	const [anchorEl, setAnchorEl] = useState(null);
	const [open, setOpen] = useState(false);
	const [placement, setPlacement] = useState();

	const handleClick = (newPlacement) => (event) => {
		setAnchorEl(event.currentTarget);
		setOpen((prev) => placement !== newPlacement || !prev);
		setPlacement(newPlacement);
	};

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
				zIndex: 1,
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
						<IconButton
							onClick={handleClick("bottom-end")}
							aria-label='user'
							sx={{ mr: 1 }}
						>
							<Badge color='primary' variant='dot'>
								<NotificationsIcon />
							</Badge>
						</IconButton>

						<Popper
							open={open}
							anchorEl={anchorEl}
							placement={placement}
							transition
							sx={{
								maxWidth: "300px",
								maxHeight: "300px",
								width: "100%",
								zIndex: "2 !important",
							}}
						>
							{({ TransitionProps }) => (
								<Fade {...TransitionProps} timeout={350}>
									<Paper>
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												padding: "16px",
												borderBottom:
													"1px solid rgb(219, 240, 254)",
												cursor: "pointer",
												":hover": {
													backgroundColor:
														"rgb(219, 240, 254);",
												},
											}}
										>
											<ShoppingBagRoundedIcon
												style={{
													width: "1em",
													height: "1em",
													fontSize: "1.5rem",
													color: "rgb(78, 151, 253)",
												}}
											/>
											<Box
												sx={{
													display: "flex",
													flexDirection: "column",
													ml: 2,
												}}
											>
												<Typography
													sx={{
														fontSize: "13px",
														fontWeight: 500,
													}}
												>
													Nueva Orden recibida
												</Typography>
												<Typography
													sx={{
														fontSize: "11px",
													}}
												>
													Hace 5 meses.
												</Typography>
											</Box>
										</Box>
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												padding: "16px",
												borderBottom:
													"1px solid rgb(219, 240, 254)",
											}}
										>
											<ShoppingBagRoundedIcon
												style={{
													width: "1em",
													height: "1em",
													fontSize: "1.5rem",
												}}
											/>
											<Box
												sx={{
													display: "flex",
													flexDirection: "column",
													ml: 2,
												}}
											>
												<Typography
													sx={{
														fontSize: "13px",
														fontWeight: 500,
													}}
												>
													Nueva Orden recibida
												</Typography>
												<Typography
													sx={{
														fontSize: "11px",
													}}
												>
													Hace 5 meses.
												</Typography>
											</Box>
										</Box>
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												padding: "16px",
												borderBottom:
													"1px solid rgb(219, 240, 254)",
											}}
										>
											<ShoppingBagRoundedIcon
												style={{
													width: "1em",
													height: "1em",
													fontSize: "1.5rem",
												}}
											/>
											<Box
												sx={{
													display: "flex",
													flexDirection: "column",
													ml: 2,
												}}
											>
												<Typography
													sx={{
														fontSize: "13px",
														fontWeight: 500,
													}}
												>
													Nueva Orden recibida
												</Typography>
												<Typography
													sx={{
														fontSize: "11px",
													}}
												>
													Hace 5 meses.
												</Typography>
											</Box>
										</Box>
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												padding: "16px",
												borderBottom:
													"1px solid rgb(219, 240, 254)",
											}}
										>
											<ShoppingBagRoundedIcon
												style={{
													width: "1em",
													height: "1em",
													fontSize: "1.5rem",
												}}
											/>
											<Box
												sx={{
													display: "flex",
													flexDirection: "column",
													ml: 2,
												}}
											>
												<Typography
													sx={{
														fontSize: "13px",
														fontWeight: 500,
													}}
												>
													Nueva Orden recibida
												</Typography>
												<Typography
													sx={{
														fontSize: "11px",
													}}
												>
													Hace 5 meses.
												</Typography>
											</Box>
										</Box>
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												padding: "16px",
												borderBottom:
													"1px solid rgb(219, 240, 254)",
											}}
										>
											<ShoppingBagRoundedIcon
												style={{
													width: "1em",
													height: "1em",
													fontSize: "1.5rem",
												}}
											/>
											<Box
												sx={{
													display: "flex",
													flexDirection: "column",
													ml: 2,
												}}
											>
												<Typography
													sx={{
														fontSize: "13px",
														fontWeight: 500,
													}}
												>
													Nueva Orden recibida
												</Typography>
												<Typography
													sx={{
														fontSize: "11px",
													}}
												>
													Hace 5 meses.
												</Typography>
											</Box>
										</Box>
									</Paper>
								</Fade>
							)}
						</Popper>

						<IconButton aria-label='user'>
							<Avatar src={avatar} alt={displayName} />
						</IconButton>
					</Box>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
