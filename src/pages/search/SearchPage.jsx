import { LayoutComponent } from "../../layouts/LayoutComponent";
import { Container, Box, Paper, Grid, Typography } from "@mui/material";

export const SearchPage = () => {
	return (
		<LayoutComponent>
			<Container
				maxWidth='lg'
				sx={{ mt: 22 }}
				className='animate__animated animate__fadeIn'
			>
				<Box>
					<Paper className='paper'>
						<Grid container spacing={0}>
							<Grid item lg={8}>
								<Box>
									<Typography
										sx={{
											fontSize: "16px",
											fontWeight: 500,
											lineHeight: 1.5,
										}}
									>
										Buscando.. "Camara Domo Hikvision"
									</Typography>
									<Typography
										sx={{
											fontSize: "14px",
											color: "#7D879C;",
										}}
									>
										50 resultados encontrados
									</Typography>
								</Box>
							</Grid>
							<Grid item lg={4}>
								<Box>
									<Typography>Ordenar:</Typography>
								</Box>
							</Grid>
						</Grid>
					</Paper>
				</Box>
			</Container>
		</LayoutComponent>
	);
};
