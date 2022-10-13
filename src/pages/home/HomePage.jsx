import { LayoutComponent } from "../../layouts/LayoutComponent";
import Container from "@mui/material/Container";
import { Carousel } from "../../layouts/components/Carrousel/carouselSingle/Carousel";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import { CarrouselProduct } from "../../layouts/components/Carrousel/carouselProduct/CarrouselProduct";
import { products } from "../../data/data";
import hikvision from "../../assets/images/brands/hikvision.png";
import { CarrouselBrands } from "../../layouts/components/Carrousel/carouselBrands/CarrouselBrands";
import "./styles.css";
import { CarouselHistory } from "../../layouts/components/Carrousel/carouselHistory/CarouselHistory";

import bannerMid from "../../assets/images/banners/banner-19.jpg";
import bannerLeft from "../../assets/images/banners/banner-18.jpg";
import bannerRight from "../../assets/images/banners/banner-20.jpg";

import barnnerLarge from "../../assets/images/banners/long-banner.jpg";

export const HomePage = () => {
	return (
		<LayoutComponent>
			<Box className='animate__animated animate__fadeIn'>
				<Box
					sx={{
						mt: 18,
					}}
				>
					<Carousel />
				</Box>
				<Container
					maxWidth='xl'
					sx={{
						mt: 1,
					}}
				>
					<Grid container spacing={0}>
						<Grid item lg={12}>
							<Box className='banner-slider'>
								<h3 color='initial' className='h3-title'>
									Black friday sale!
								</h3>
								<Box component='p' className='p-title'>
									<Box componet='span' className='span-text'>
										Pay only for
										<Box
											component='span'
											className='span-text-2'
										>
											your loving electronics
										</Box>
									</Box>
								</Box>
							</Box>
						</Grid>
					</Grid>

					<Box>
						<Typography
							variant='h5'
							color='black'
							sx={{
								position: "relative",
								display: "inline-block",
								fontWeight: 700,
								color: "#1d1d1d",
								lineHeight: "100px",
								marginBottom: "-25px",
							}}
						>
							<i
								className='fa-solid fa-bolt'
								style={{ color: "red" }}
							></i>{" "}
							Ofertas Relampago
						</Typography>

						<CarrouselProduct
							products={products}
							style={{ marginTop: "-100px" }}
						/>
					</Box>

					<Grid
						container
						spacing={2}
						sx={{
							mt: 2,
						}}
					>
						<Grid item lg={4}>
							<Box
								sx={{
									position: "relative",
								}}
							>
								<img
									src={bannerLeft}
									alt=''
									display='block'
									height='100%'
									width='100%'
								/>
								<Box
									sx={{
										top: 10,
										right: 0,
										zIndex: 1,
										height: "100%",
										display: "flex",
										position: "absolute",
										flexDirection: "column",
										justifyContent: "end",
										alignItems: "flex-end",
										color: "black",
									}}
								>
									<Typography
										component='p'
										sx={{
											fontSize: "13px",
											letterSpacing: "1.2px",
											whiteSpace: "normal",
											padding: "10px ",
										}}
									>
										SOMOS DISTRIBUIDORES AUTORIZADO
									</Typography>
									<img
										src={hikvision}
										alt=''
										width='50%'
										style={{
											marginTop: "20px",
											marginRight: "10px",
										}}
									/>
									<Box
										sx={{
											padding: "20px 10px",
											mt: 2,
										}}
									>
										<Typography
											variant='text'
											color='custom'
											className='underline'
										>
											Compra Ahora{" "}
											<i className='fa-solid fa-arrow-right'></i>
										</Typography>
									</Box>
								</Box>
							</Box>
						</Grid>
						<Grid item lg={4}>
							<Box
								sx={{
									position: "relative",
								}}
							>
								<img
									src={bannerMid}
									alt=''
									display='block'
									height='100%'
									width='100%'
								/>
								<Box
									sx={{
										top: 0,
										left: "20px",
										zIndex: 1,
										height: "100%",
										display: "flex",
										position: "absolute",
										flexDirection: "column",
										justifyContent: "center",
										color: "white",
									}}
								>
									<Typography
										component='p'
										sx={{
											fontSize: "13px",
											letterSpacing: "1.2px",
											whiteSpace: "normal",
										}}
									>
										UNETE A NOSOTROS
									</Typography>
									<Typography
										sx={{
											fontSize: "13px",
											marginTop: "16px",
											marginBottom: "16px",
											// fontWeight: 600,
											textTransform: "none",
											whiteSpace: "normal",
										}}
									>
										OBTEN UN CUPON DE DESCUENTO
										<br />
										DEL 5% EN TU PRIMERA COMPRA
									</Typography>

									<Box>
										<Button
											variant='contained'
											color='secondary'
										>
											registrate ahora
										</Button>
									</Box>
								</Box>
							</Box>
						</Grid>
						<Grid item lg={4}>
							<Box
								sx={{
									position: "relative",
								}}
							>
								<img
									src={bannerRight}
									alt=''
									display='block'
									height='100%'
									width='100%'
								/>
								<Box
									sx={{
										top: 0,
										left: "20px",
										zIndex: 1,
										height: "100%",
										display: "flex",
										position: "absolute",
										flexDirection: "column",
										justifyContent: "center",
										color: "black",
									}}
								>
									<Typography
										component='p'
										sx={{
											fontSize: "12px",
											letterSpacing: "1.2px",
											whiteSpace: "normal",
										}}
									>
										CONTAMOS CON GRAN <br />
										VARIEDAD
									</Typography>
									<Typography
										sx={{
											fontSize: "12px",
											marginTop: "16px",
											marginBottom: "16px",
											// fontWeight: 600,
											textTransform: "none",
											whiteSpace: "normal",
										}}
									>
										DE PRODUCTO EN REDES <br /> OFRECIENDO
										LAS MEJORES
										<br />
										MARCAS DEL MERCADO
									</Typography>

									<Box
										sx={{
											mt: 0,
										}}
									>
										<Typography
											variant='text'
											color='custom'
											className='underline'
										>
											Compra Ahora{" "}
											<i className='fa-solid fa-arrow-right'></i>
										</Typography>
									</Box>
								</Box>
							</Box>
						</Grid>
					</Grid>

					<Box sx={{ mt: 5 }}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={12} md={3} lg={3}>
								<Paper
									sx={{
										mt: 1,
										padding: "15px 30px",
										height: "93%",
										boxShadow: "none",
									}}
								>
									<Typography
										sx={{
											fontSize: "20px",
											fontWeight: "bold",
										}}
									>
										Productos
									</Typography>
									<Typography
										component='ul'
										sx={{
											listStyle: "none",
											padding: 0,
											margin: 0,
										}}
									>
										<Typography
											component='li'
											className='menu-li-products'
										>
											Camaras de Seguridad
										</Typography>
										<Typography
											component='li'
											className='menu-li-products'
										>
											DVRs
										</Typography>
										<Typography
											component='li'
											className='menu-li-products'
										>
											Computadoras & Laptop
										</Typography>
										<Typography
											component='li'
											className='menu-li-products'
										>
											Memorias
										</Typography>
									</Typography>
								</Paper>
							</Grid>
							<Grid item xs={12} sm={12} md={9} lg={9}>
								<CarrouselProduct
									products={products}
									letter={12}
								/>
							</Grid>
						</Grid>
					</Box>

					<Box sx={{ mt: 3 }}>
						<img src={barnnerLarge} alt='' width='100%' />
					</Box>
					<Box>
						<Typography
							variant='h5'
							color='black'
							sx={{
								position: "relative",
								display: "inline-block",
								fontWeight: 700,
								color: "#1d1d1d",
								lineHeight: "100px",
								ml: 1,
								mb: -3,
							}}
						>
							Marcas Destacadas
						</Typography>

						<CarrouselBrands />
					</Box>

					<Box>
						<Box
							sx={{
								display: "flex",
							}}
						>
							<Typography
								variant='h5'
								color='black'
								sx={{
									display: "inline-block",
									fontWeight: 700,
									color: "#1d1d1d",
									lineHeight: "100px",
									marginBottom: "-25px",
									ml: 1,
								}}
							>
								Tu historial de navegacion
							</Typography>
						</Box>

						<Paper
							sx={{
								boxShadow: "none",
							}}
						>
							<CarouselHistory products={products} />
						</Paper>
					</Box>
				</Container>
			</Box>
		</LayoutComponent>
	);
};
