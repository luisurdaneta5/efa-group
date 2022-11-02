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
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

function createData(name, img, category, brand, price, published) {
	return { name, img, category, brand, price, published };
}

const rows = [
	createData(
		"Camara Hikvision IRPF-720",
		"https://telserdevenezuela.com.ve/wp-content/uploads/2019/12/Camara-Hikvision-DS-2CD2025FWD-I-Bullet-2-MP-1.jpg",
		"Camara CCTV",
		"Hikvision",
		10.0,
		false
	),
	createData(
		"Camara Hikvision IRPF-720",
		"https://telserdevenezuela.com.ve/wp-content/uploads/2019/12/Camara-Hikvision-DS-2CD2025FWD-I-Bullet-2-MP-1.jpg",
		"Camara CCTV",
		"Hikvision",
		250.0,
		false
	),
];

export const TabletProductList = () => {
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
							Categoria
						</TableCell>

						<TableCell align='left' sx={{ color: "#2B3445" }}>
							Marca
						</TableCell>
						<TableCell align='left' sx={{ color: "#2B3445" }}>
							Precio
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
								<Chip
									label={row.category}
									sx={{
										fontSize: "13px",
									}}
								/>
							</TableCell>

							<TableCell
								align='left'
								sx={{
									fontSize: "13px",

									fontWeight: 600,
								}}
							>
								{row.brand}
							</TableCell>

							<TableCell
								align='left'
								sx={{
									fontSize: "14px",

									fontWeight: 600,
								}}
							>
								${row.price}
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
									<IconButton>
										<ModeEditIcon
											sx={{ fontSize: "19px" }}
										/>
									</IconButton>
									<IconButton>
										<VisibilityIcon
											sx={{ fontSize: "19px" }}
										/>
									</IconButton>
									<IconButton>
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
