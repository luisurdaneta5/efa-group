import { Box, Container, Typography } from "@mui/material";
import { LayoutComponent } from "../../layouts/LayoutComponent";

export const NoFoundPage = () => {
	return (
		<LayoutComponent>
			<Container
				maxWidth='xl'
				sx={{
					mt: 20,
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
					<Typography
						variant='h1'
						color='initial'
						sx={{
							fontSize: "200px",
						}}
					>
						404
					</Typography>
					<Typography variant='h4' color='initial'>
						Oops!
					</Typography>
					<Typography variant='h5' color='initial' sx={{ color: "red" }}>
						Error 404 - Page Not Found
					</Typography>
					<Typography variant='h6' color='initial'>
						El enlace que seguiste probablemente está roto o la página ha sido eliminadaa
					</Typography>
				</Box>
			</Container>
		</LayoutComponent>
	);
};
