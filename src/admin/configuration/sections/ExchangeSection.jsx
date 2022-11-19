import { Box, Grid, TextField, Button } from "@mui/material";

export const ExchangeSection = () => {
	return (
		<Box
			sx={{
				mt: 3,
			}}
		>
			<Grid container spacing={2}>
				<Grid item lg={6}>
					<TextField
						id=''
						label='Tasa de Cambio'
						size='small'
						fullWidth
						type='number'
					/>
				</Grid>
				<Grid item lg={6}>
					<TextField
						id=''
						label='IVA'
						size='small'
						fullWidth
						type='number'
					/>
				</Grid>
			</Grid>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					mt: 3,
				}}
			>
				<Button variant='contained' color='primary'>
					Guardar
				</Button>
			</Box>
		</Box>
	);
};
