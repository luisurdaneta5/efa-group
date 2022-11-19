import { Delete } from "@mui/icons-material";
import { Box, Grid, Button, IconButton } from "@mui/material";
import Swal from "sweetalert2";
import "./styles.css";

export const BannerSection = () => {
	const handleDelete = () => {
		Swal.fire({
			title: "Estas Seguro?",
			text: "El registro no podra ser recuperado",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Si, borrar.",
		}).then((result) => {});
	};
	return (
		<Box sx={{ mt: 3 }}>
			<Grid container spacing={2}>
				<Grid item lg={4}>
					<Box className='img-container'>
						<Box
							component='img'
							src='http://localhost:5173/src/assets/slider/2.jpg'
							sx={{ width: "100%" }}
						/>
						<Box className='icon'>
							<IconButton
								aria-label=''
								size='small'
								onClick={handleDelete}
							>
								<Delete sx={{ color: "white", padding: 0 }} />
							</IconButton>
						</Box>
					</Box>
				</Grid>
				<Grid item lg={4}>
					<Box className='img-container'>
						<Box
							component='img'
							src='http://localhost:5173/src/assets/slider/2.jpg'
							sx={{ width: "100%" }}
						/>
						<Box className='icon'>
							<IconButton
								aria-label=''
								size='small'
								onClick={handleDelete}
							>
								<Delete sx={{ color: "white", padding: 0 }} />
							</IconButton>
						</Box>
					</Box>
				</Grid>
				<Grid item lg={4}>
					<Box className='img-container'>
						<Box
							component='img'
							src='http://localhost:5173/src/assets/slider/2.jpg'
							sx={{ width: "100%" }}
						/>
						<Box className='icon'>
							<IconButton
								aria-label=''
								size='small'
								onClick={handleDelete}
							>
								<Delete sx={{ color: "white", padding: 0 }} />
							</IconButton>
						</Box>
					</Box>
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
					Agregar Imagen
				</Button>
			</Box>
		</Box>
	);
};
