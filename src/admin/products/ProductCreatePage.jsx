import { LayoutAdminComponent } from "../../layouts/LayoutAdminComponent";
import {
	Box,
	Container,
	Paper,
	Typography,
	Grid,
	TextField,
	Select,
	MenuItem,
	FormControlLabel,
	InputLabel,
	FormControl,
} from "@mui/material";

import { Dropzone } from "./components/Dropzone";

export const ProductCreatePage = () => {
	return (
		<LayoutAdminComponent>
			<Container maxWidth='xl'>
				<Box
					sx={{
						mt: 2,
					}}
				>
					<Typography
						sx={{
							fontSize: "20px",
							fontWeight: 700,
						}}
					>
						Agregar Nuevo Producto
					</Typography>
				</Box>

				<Box sx={{ mt: 3 }}>
					<Paper
						sx={{
							padding: "48px",
						}}
					>
						<Grid container spacing={2}>
							<Grid item lg={6}>
								<TextField
									id=''
									label='Nombre'
									size='small'
									fullWidth
								/>
							</Grid>
							<Grid item lg={6}>
								<FormControl fullWidth size='small'>
									<InputLabel id='demo-simple-select-label'>
										Seleccione categoria
									</InputLabel>
									<Select
										labelId='demo-simple-select-label'
										id='demo-simple-select'
										// value={age}
										label='Seleccione categoria'
										// onChange={handleChange}
									>
										<MenuItem value={10}>Ten</MenuItem>
										<MenuItem value={20}>Twenty</MenuItem>
										<MenuItem value={30}>Thirty</MenuItem>
									</Select>
								</FormControl>
							</Grid>

							<Grid item lg={12}>
								<Dropzone />
							</Grid>
						</Grid>
					</Paper>
				</Box>
			</Container>
		</LayoutAdminComponent>
	);
};
