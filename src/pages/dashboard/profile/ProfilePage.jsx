import {
	Avatar,
	Badge,
	Box,
	Button,
	Grid,
	IconButton,
	Paper,
	Typography,
} from "@mui/material";

import { ReactComponent as CardsIcon } from "../../../assets/icons/tarjetas.svg";
import { ReactComponent as PasswordChange } from "../../../assets/icons/password.svg";

import photo from "../../../assets/images/users/yo.jpg";
import FlipCameraIosIcon from "@mui/icons-material/FlipCameraIos";
import { DashboardLayout } from "../DashboardLayout";
import { useState } from "react";
import { ModalEdit } from "./ModalEdit";
import { ModalChangePassword } from "./ModalChangePassword";

export const ProfilePage = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);

	const [openChangePassword, setOpenChangePassword] = useState(false);
	const handleOpenChangePassword = () => setOpenChangePassword(true);
	return (
		<DashboardLayout profile={true}>
			<ModalEdit open={open} setOpen={setOpen} />
			<ModalChangePassword
				open={openChangePassword}
				setOpen={setOpenChangePassword}
			/>
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
											alt='Travis Howard'
											src={photo}
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
										Luis Urdaneta
										<Typography
											color='#7D879C'
											sx={{
												fontSize: "14px",
												fontWeight: "400",
											}}
										>
											Balance{" "}
											<Typography
												component='span'
												style={{
													color: "#D23F57",
													fontWeight: "400",
												}}
											>
												{" "}
												$500
											</Typography>
										</Typography>
									</Typography>

									<Typography
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
									</Typography>
								</Grid>
							</Grid>
						</Paper>
					</Grid>

					<Grid item lg={2}>
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
					</Grid>

					<Grid item lg={2} onClick={handleOpenChangePassword}>
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
										fontSize: "12px",
										color: "#7D879C",
										mt: 1,
									}}
								>
									Cambiar Contraseña
								</Typography>
							</Box>
						</Paper>
					</Grid>
				</Grid>
				<Grid item lg={12}>
					<Paper className='paper'>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								padding: "0px 10px",
							}}
						>
							<Box>
								<Typography
									variant='body1'
									color='initial'
									sx={{
										fontSize: "12px",
										color: "#7D879C",
									}}
								>
									Nombre
								</Typography>
								<Typography
									variant='body1'
									color='initial'
									sx={{
										fontSize: "14px",
									}}
								>
									Luis
								</Typography>
							</Box>

							<Box>
								<Typography
									variant='body1'
									color='initial'
									sx={{
										fontSize: "12px",
										color: "#7D879C",
									}}
								>
									Apellido
								</Typography>
								<Typography
									variant='body1'
									color='initial'
									sx={{
										fontSize: "14px",
									}}
								>
									Urdaneta
								</Typography>
							</Box>

							<Box>
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
									luis.urdaneta488@yahoo.com.ve
								</Typography>
							</Box>

							<Box>
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
									+580412783385
								</Typography>
							</Box>

							<Box>
								<Button variant='text' onClick={handleOpen}>
									editar perfil
								</Button>
							</Box>
						</Box>
					</Paper>
				</Grid>
			</Box>
		</DashboardLayout>
	);
};
