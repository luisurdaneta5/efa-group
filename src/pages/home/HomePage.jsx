import { LayoutComponent } from "../../layouts/LayoutComponent";
import Container from "@mui/material/Container";
import { Carousel } from "../../layouts/components/Carrousel/carouselSingle/Carousel";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import { CarrouselProduct } from "../../layouts/components/Carrousel/carouselProduct/CarrouselProduct";
import { products } from "../../data/data";
import hikvision from "../../assets/images/brands/hikvision.png";
import { CarrouselBrands } from "../../layouts/components/Carrousel/carouselBrands/CarrouselBrands";
import { ReactComponent as Camera } from "../../assets/icons/camera.svg";
import "./styles.css";

export const HomePage = () => {
	return (
		<LayoutComponent>
			<Box
				sx={{
					mt: 18,
				}}
			>
				<Carousel />
			</Box>
			<Container
				maxWidth='lg'
				sx={{
					mt: 1,
				}}
			>
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
					spacing={3}
					sx={{
						mt: 3,
					}}
				>
					<Grid item lg={4}>
						<Box className={"banner-left"}>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "flex-end",
									alignItems: "flex-end",
								}}
							>
								<Typography
									variant='body1'
									color='initial'
									sx={{
										zIndex: 1,
										padding: "20px 10px",
										color: "black",
										fontSize: "13px",
										fontWeight: "bold",
									}}
								>
									SOMOS DISTRIBUIDORES AUTORIZADO
								</Typography>

								<img
									src={hikvision}
									alt=''
									width='50%'
									style={{
										marginTop: "10px",
										marginRight: "10px",
									}}
								/>
								<Box
									sx={{
										padding: "22px 10px",
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
						<Box className={"banner-mid "}>
							<Typography
								variant='body1'
								color='initial'
								sx={{
									zIndex: 1,
									padding: "20px 30px",
									color: "white",
									fontSize: "13px",
								}}
							>
								UNETE A NOSOTROS
							</Typography>

							<Typography
								variant='body1'
								color='initial'
								sx={{
									zIndex: 1,
									padding: "0px 30px",
									color: "white",
									fontSize: "13px",
								}}
							>
								OBTEN UN CUPON DE DESCUENTO <br /> DEL 5% EN TU
								PRIMERA COMPRA
							</Typography>

							<Box
								sx={{
									padding: "20px 30px",
								}}
							>
								<Button variant='contained' color='secondary'>
									registrate ahora
								</Button>
							</Box>
						</Box>
					</Grid>
					<Grid item lg={4}>
						<Box className={"banner-right"}>
							<Typography
								variant='body1'
								color='initial'
								sx={{
									zIndex: 1,
									padding: "20px 30px",
									color: "black",
									fontSize: "13px",
								}}
							>
								CONTAMOS CON GRAN VARIEDAD
							</Typography>

							<Typography
								variant='body1'
								color='initial'
								sx={{
									zIndex: 1,
									padding: "0px 30px",
									color: "black",
									fontSize: "13px",
								}}
							>
								DE PRODUCTO EN REDES <br />
								OFRECIENDO LAS MEJORES <br /> MARCAS DEL MERCADO
							</Typography>

							<Box
								sx={{
									padding: "5px 30px",
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
						}}
					>
						<i
							className='fa-solid fa-video'
							style={{ color: "red" }}
						></i>{" "}
						Camaras de Seguridad
					</Typography>

					<CarrouselProduct
						products={products}
						style={{ marginTop: "-100px" }}
					/>
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
			</Container>
		</LayoutComponent>
	);
};
