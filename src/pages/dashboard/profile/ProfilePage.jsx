import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import { ReactComponent as CardsIcon } from "../../../assets/icons/tarjetas.svg";
import photo from "../../../assets/images/users/yo.jpg";
import { DashboardLayout } from "../DashboardLayout";

export const ProfilePage = () => {
	return (
		<DashboardLayout profile={true}>
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
									<Avatar
										alt='Luis Urdaneta'
										sx={{
											ml: 1,
											width: "55px",
											height: "55px",
										}}
										src={photo}
									/>
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
								<Button variant='text'>editar perfil</Button>
							</Box>
						</Box>
					</Paper>
				</Grid>
			</Box>
		</DashboardLayout>
	);
};
