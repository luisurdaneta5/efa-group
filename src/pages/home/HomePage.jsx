import { LayoutComponent } from "../../layouts/LayoutComponent";
import Container from "@mui/material/Container";
import { Carousel } from "../../layouts/components/Carrousel/carouselSingle/Carousel";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { CarrouselProduct } from "../../layouts/components/Carrousel/carouselProduct/CarrouselProduct";
import { products } from "../../data/data";

import { CarrouselBrands } from "../../layouts/components/Carrousel/carouselBrands/CarrouselBrands";

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
