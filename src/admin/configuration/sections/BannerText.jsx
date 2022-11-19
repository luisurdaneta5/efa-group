import { Box, Grid, TextField, Button } from "@mui/material";

export const BannerText = () => {
	return (
		<Box>
			<Grid container spacing={2}>
				<Grid item lg={6}>
					<TextField
						id=''
						label='Frase 1'
						fullWidth
						size='small'
						sx={{ mt: 3 }}
					/>
				</Grid>
				<Grid item lg={6}>
					<TextField
						id=''
						label='Frase 2'
						fullWidth
						size='small'
						sx={{ mt: 3 }}
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
