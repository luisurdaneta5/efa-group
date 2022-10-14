import { LayoutComponent } from "../../layouts/LayoutComponent";
import Container from "@mui/material/Container";
import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

import "./styles.css";

export const DashboardPage = () => {
	return (
		<LayoutComponent>
			<Container maxWidth='lg' sx={{ mt: 25 }}>
				<Grid container spacing={2}>
					<Grid item xs={12} lg={3}>
						<Paper sx={{ padding: "20px" }} className='paper'>
							<Box>
								<Typography
									color='initial'
									sx={{ fontSize: "12px", fontWeight: 400 }}
								>
									OPCIONES
								</Typography>
								<Link
									to='/my-profile/orders'
									className='MenuLinkDashboard'
								>
									<Box
										sx={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											ml: 2,
										}}
									>
										<ShoppingBagOutlinedIcon fontSize='small' />
										<Typography sx={{ ml: 1 }}>
											Ordenes
										</Typography>
									</Box>
									<Typography>1</Typography>
								</Link>
								<Link
									to='/my-profile/orders'
									className='MenuLinkDashboard'
								>
									<Box
										sx={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											ml: 2,
										}}
									>
										<FavoriteBorderOutlinedIcon fontSize='small' />
										<Typography sx={{ ml: 1 }}>
											Lista de Deseo
										</Typography>
									</Box>
									<Typography>2</Typography>
								</Link>
								<Link
									to='/my-profile/orders'
									className='MenuLinkDashboard'
								>
									<Box
										sx={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											ml: 2,
										}}
									>
										<HeadsetMicOutlinedIcon fontSize='small' />
										<Typography sx={{ ml: 1 }}>
											Soporte
										</Typography>
									</Box>
									<Typography>0</Typography>
								</Link>
							</Box>

							<Typography
								color='initial'
								sx={{
									fontSize: "12px",
									fontWeight: 400,
									mt: 5,
								}}
							>
								MI CUENTA
							</Typography>
							<Link to='/my-profile/orders' className='active'>
								<Box
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										ml: 2,
									}}
								>
									<PersonRoundedIcon fontSize='small' />
									<Typography sx={{ ml: 1 }}>
										Perfil
									</Typography>
								</Box>
							</Link>
						</Paper>
					</Grid>
					<Grid item xs={12} lg={9}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={12} md={12} lg={6}>
								<Paper
									sx={{ padding: "30px" }}
									className='paper'
								>
									<Grid container spacing={3}>
										<Grid item lg={2}>
											<Avatar
												sx={{
													ml: 1,
													width: "55px",
													height: "55px",
												}}
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
													variant='body1'
													color='#7D879C'
													sx={{
														fontSize: "14px",
														fontWeight: "400",
													}}
												>
													Balance{" "}
													<span
														style={{
															color: "#D23F57",
															fontWeight: "400",
														}}
													>
														{" "}
														$500
													</span>
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
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</LayoutComponent>
	);
};
