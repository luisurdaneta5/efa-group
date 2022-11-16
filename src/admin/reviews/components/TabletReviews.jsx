import {
	Avatar,
	Box,
	Chip,
	Switch,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	IconButton,
	Rating,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function createData(name, img, client, comment, rating, published) {
	return { name, img, client, comment, rating, published };
}

const rows = [
	createData(
		"Camara Hikvision IRPF-720",
		"https://telserdevenezuela.com.ve/wp-content/uploads/2019/12/Camara-Hikvision-DS-2CD2025FWD-I-Bullet-2-MP-1.jpg",
		"Luis Urdaneta",
		"Producto de buena calidad puedo recomendarlo a todos los clientes",
		3,
		false
	),
	createData(
		"Camara Hikvision IRPF-720",
		"https://telserdevenezuela.com.ve/wp-content/uploads/2019/12/Camara-Hikvision-DS-2CD2025FWD-I-Bullet-2-MP-1.jpg",
		"Luis Urdaneta",
		"Producto de buena calidad puedo recomendarlo a todos los clientes",
		5,
		false
	),
];

export const TabletReviews = () => {
	const handleDelete = () => {
		Swal.fire({
			title: "Estas Seguro?",
			text: "El registro no podra recuperarse luego",
			showCancelButton: true,
			confirmButtonText: "Si, Eliminar",
			cancelButtonColor: "#d33",
			confirmButtonColor: "#091bad",
			showLoaderOnConfirm: true,
		});
	};

	return (
		<TableContainer>
			<Table aria-label='simple table'>
				<TableHead
					sx={{
						backgroundColor: "#f3f5f9",
					}}
				>
					<TableRow>
						<TableCell align='left' sx={{ color: "#2B3445" }}>
							Producto
						</TableCell>
						<TableCell align='left' sx={{ color: "#2B3445" }}>
							Cliente
						</TableCell>

						<TableCell align='left' sx={{ color: "#2B3445" }}>
							Comentario
						</TableCell>
						<TableCell align='left' sx={{ color: "#2B3445" }}>
							Rating
						</TableCell>
						<TableCell align='left' sx={{ color: "#2B3445" }}>
							Publicado
						</TableCell>
						<TableCell align='center' sx={{ color: "#2B3445" }}>
							Opciones
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							sx={{
								"&:last-child td, &:last-child th": {
									border: 0,
								},
							}}
						>
							<TableCell component='th' scope='row'>
								<Box
									sx={{
										display: "flex",
										gap: "12px",
									}}
								>
									<Avatar
										src={row.img}
										sx={{
											width: "40px",
											height: "40px",
											borderRadius: "8px",
											border: "2px solid #ebeff4",
										}}
										variant='square'
									/>

									<Box>
										<Typography
											sx={{
												fontSize: "14px",
											}}
										>
											{row.name}
										</Typography>
										<Typography
											sx={{
												fontSize: "12px",
												color: "#7D879C",
											}}
										>
											#6ed34Edf65d
										</Typography>
									</Box>
								</Box>
							</TableCell>

							<TableCell align='left'>
								<Typography
									sx={{
										fontSize: "14px",
										color: "rgb(43, 52, 69)",
										fontWeight: 500,
									}}
								>
									{row.client}
								</Typography>
							</TableCell>

							<TableCell align='left'>
								<Typography
									sx={{
										fontSize: "13px",
									}}
								>
									"{row.comment}"
								</Typography>
							</TableCell>

							<TableCell
								align='left'
								sx={{
									fontSize: "14px",

									fontWeight: 600,
								}}
							>
								<Rating
									name='size-small'
									defaultValue={row.rating}
									size='small'
									precision={0.5}
								/>
							</TableCell>

							<TableCell
								align='left'
								sx={{
									fontSize: "13px",
									color: "#7D879C",
									fontWeight: 600,
								}}
							>
								<Switch defaultChecked />
							</TableCell>
							<TableCell
								align='center'
								sx={{
									fontSize: "13px",
									color: "#7D879C",
									fontWeight: 600,
								}}
							>
								<Box
									sx={{
										display: "flex",
										justifyContent: "center",
									}}
								>
									<Link to='/admin/dashboard/products/edit'>
										<IconButton>
											<ModeEditIcon
												sx={{ fontSize: "19px" }}
											/>
										</IconButton>
									</Link>
									<IconButton>
										<VisibilityIcon
											sx={{ fontSize: "19px" }}
										/>
									</IconButton>

									<IconButton onClick={handleDelete}>
										<DeleteIcon sx={{ fontSize: "19px" }} />
									</IconButton>
								</Box>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
