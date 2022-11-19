import { Box, Container, Grid, Typography, TextField } from "@mui/material";
import logo from "../../../assets/images/logo.png";
import { Dropzone } from "./components/Dropzone";

export const GeneralSection = () => {
	return (
		<Box>
			<Grid container spacing={2}>
				<Grid
					item
					lg={12}
					sx={{
						mt: 3,
					}}
				>
					<Typography
						sx={{
							display: "flex",
							textAlign: "center",
							fontSize: "16px",
							fontWeight: 700,
						}}
					>
						Encabezado
					</Typography>
				</Grid>
				<Grid item lg={12}>
					<Dropzone />
				</Grid>
				<Grid
					item
					lg={12}
					sx={{
						mt: 3,
					}}
				>
					<Typography
						sx={{
							display: "flex",
							textAlign: "center",
							fontSize: "16px",
							fontWeight: 700,
						}}
					>
						Pie de Pagina
					</Typography>
				</Grid>
				<Grid item lg={12}>
					<Dropzone />
				</Grid>

				<Grid item lg={6}>
					<TextField
						id=''
						label='Direccion'
						fullWidth
						size='small'
						sx={{
							mt: 3,
						}}
					/>
				</Grid>
				<Grid item lg={6}>
					<TextField
						id=''
						type='email'
						label='Correo electronico'
						fullWidth
						size='small'
						sx={{
							mt: 3,
						}}
					/>
				</Grid>
				<Grid item lg={12}>
					<TextField
						id=''
						label='Descripcion'
						fullWidth
						size='small'
						multiline
						rows={4}
						sx={{
							mt: 2,
						}}
					/>
				</Grid>
			</Grid>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
				}}
			></Box>
		</Box>
	);
};
