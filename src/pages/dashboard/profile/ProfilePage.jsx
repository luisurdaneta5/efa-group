import { Avatar, Badge, Box, Button, Grid, IconButton, Paper, Typography } from "@mui/material";

import { ReactComponent as CardsIcon } from "../../../assets/icons/tarjetas.svg";
import { ReactComponent as PasswordChange } from "../../../assets/icons/password.svg";
import LogoutIcon from "@mui/icons-material/Logout";

import photo from "../../../assets/images/users/yo.jpg";
import FlipCameraIosIcon from "@mui/icons-material/FlipCameraIos";
import { DashboardLayout } from "../DashboardLayout";
import { useState } from "react";
import { ModalChangePassword } from "./components/ModalChangePassword";
import { useDispatch, useSelector } from "react-redux";
import { getDataUser, setLogout } from "../../../store/slices/auth";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { emptyShoppingCart } from "../../../store/slices/cart";
import { formatNumber } from "../../../helpers/formatNumbers";
import { ModalChangeAvatar } from "./components/ModalChangeAvatar";

export const ProfilePage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user, userData } = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(getDataUser(user.uid));
	}, [dispatch]);

	const { displayName, avatar, email, phone } = userData;

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);

	const [openChangePassword, setOpenChangePassword] = useState(false);
	const handleOpenChangePassword = () => setOpenChangePassword(true);

	const handleLogout = () => {
		localStorage.clear();
		dispatch(emptyShoppingCart());
		dispatch(setLogout());
		navigate("/");
	};
	return (
		<DashboardLayout profile={true}>
			<ModalChangePassword open={openChangePassword} setOpen={setOpenChangePassword} uid={user.uid} />
			<ModalChangeAvatar open={open} setOpen={setOpen} uid={user.uid} />
			<Box>
				<Grid
					container
					spacing={2}
					sx={{
						display: "flex",
					}}
				>
					<Grid item xs={12} sm={12} md={12} lg={6}>
						<Paper sx={{ padding: "30px" }} className='paper'>
							<Grid container spacing={3}>
								<Grid item lg={2}>
									<Badge
										overlap='circular'
										anchorOrigin={{
											vertical: "bottom",
											horizontal: "right",
										}}
										badgeContent={
											<IconButton
												sx={{
													backgroundColor: "#E3E9EF",
													padding: "5px",
												}}
												onClick={handleOpen}
											>
												<FlipCameraIosIcon
													sx={{
														fontSize: "1.25rem",
														color: "#0F3460",
													}}
												/>
											</IconButton>
										}
									>
										<Avatar
											alt={displayName}
											src={avatar}
											sx={{
												ml: 1,
												width: "55px",
												height: "55px",
											}}
										/>
									</Badge>
								</Grid>
								<Grid
									item
									lg={9}
									sx={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
										ml: 1,
									}}
								>
									<Typography
										variant='body1'
										color='initial'
										sx={{
											fontSize: "16px",
											fontWeight: "600",
										}}
									>
										{displayName}
										<Typography
											color='#7D879C'
											sx={{
												fontSize: "14px",
												fontWeight: "400",
											}}
										>
											Balance
											<Typography
												component='span'
												style={{
													color: "#D23F57",
													fontWeight: "400",
													marginLeft: "5px",
												}}
											>
												{formatNumber(userData.balance, "EN-US", "USD")}
											</Typography>
										</Typography>
									</Typography>

									{/* <Typography
										variant='body1'
										color='initial'
										sx={{
											fontWeight: "400",
											fontSize: "14px",
											letterSpacing: "0.2em",
											color: "#7D879C",
										}}
									>
										USUARIO PLATA
									</Typography> */}
								</Grid>
							</Grid>
						</Paper>
					</Grid>
					<Grid item xs={4} lg={2}>
						<Link to='/dashboard/change-balance'>
							<Paper
								className='paper'
								sx={{
									padding: "6px !important",
									cursor: "pointer",
								}}
							>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<CardsIcon
										style={{
											width: "50px",
										}}
									/>
									<Typography
										variant='body1'
										color='initial'
										sx={{
											fontSize: "12px",
											color: "#7D879C",
										}}
									>
										Recargas Saldo
									</Typography>
								</Box>
							</Paper>
						</Link>
					</Grid>
					<Grid item xs={4} lg={2} onClick={handleOpenChangePassword}>
						<Paper
							className='paper'
							sx={{
								padding: "6px !important",
								cursor: "pointer",
								height: "104px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<PasswordChange
									style={{
										marginTop: "10px",
										width: "55px",
									}}
								/>
								<Typography
									variant='body1'
									color='initial'
									sx={{
										fontSize: {
											xs: "11px",
											sm: "12px",
											md: "12px",
											lg: "12px",
										},
										color: "#7D879C",

										mt: 1,
									}}
								>
									Cambiar Contraseña
								</Typography>
							</Box>
						</Paper>
					</Grid>
					<Grid item xs={4} lg={2} onClick={handleOpenChangePassword}>
						<Paper
							className='paper'
							sx={{
								padding: "6px !important",
								cursor: "pointer",
								height: "104px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
								onClick={handleLogout}
							>
								<LogoutIcon
									style={{
										marginTop: "10px",
										fontSize: "55px",
									}}
								/>
								<Typography
									variant='body1'
									color='initial'
									sx={{
										fontSize: "12px",
										color: "#7D879C",
										mt: 1,
									}}
								>
									Salir del Sistema
								</Typography>
							</Box>
						</Paper>
					</Grid>
				</Grid>
				<Grid item lg={12}>
					<Paper className='paper'>
						<Grid
							container
							sx={{
								display: "flex",
								justifyContent: "space-between",
								padding: "0px 10px",
							}}
						>
							<Grid
								item
								xs={12}
								lg={3}
								sx={{
									mb: 2,
								}}
							>
								<Typography
									variant='body1'
									color='initial'
									sx={{
										fontSize: "12px",
										color: "#7D879C",
									}}
								>
									Nombre y Apellido
								</Typography>
								<Typography
									variant='body1'
									color='initial'
									sx={{
										fontSize: "14px",
									}}
								>
									{displayName}
								</Typography>
							</Grid>

							<Grid
								item
								xs={12}
								lg={3}
								sx={{
									mb: 2,
								}}
							>
								<Typography
									variant='body1'
									color='initial'
									sx={{
										fontSize: "12px",
										color: "#7D879C",
									}}
								>
									Correo electronico
								</Typography>
								<Typography
									variant='body1'
									color='initial'
									sx={{
										fontSize: "14px",
									}}
								>
									{email}
								</Typography>
							</Grid>

							<Grid
								item
								xs={12}
								lg={3}
								sx={{
									mb: 2,
								}}
							>
								<Typography
									variant='body1'
									color='initial'
									sx={{
										fontSize: "12px",
										color: "#7D879C",
									}}
								>
									Telefono
								</Typography>
								<Typography
									variant='body1'
									color='initial'
									sx={{
										fontSize: "14px",
									}}
								>
									{phone}
								</Typography>
							</Grid>

							<Grid item lg={3}>
								<Link to='/dashboard/profile/edit'>
									<Button variant='text' onClick={handleOpen}>
										editar perfil
									</Button>
								</Link>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Box>
		</DashboardLayout>
	);
};
