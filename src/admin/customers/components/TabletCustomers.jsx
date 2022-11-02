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

function createData(img, name, phone, email, balance, orders) {
	return { img, name, phone, email, balance, orders };
}

const rows = [
	createData(
		"https://telserdevenezuela.com.ve/wp-content/uploads/2019/12/Camara-Hikvision-DS-2CD2025FWD-I-Bullet-2-MP-1.jpg",
		"Patricia Perez",
		"+5804125665295",
		"patricia@gmail.com",
		500,
		10
	),
	createData(
		"https://telserdevenezuela.com.ve/wp-content/uploads/2019/12/Camara-Hikvision-DS-2CD2025FWD-I-Bullet-2-MP-1.jpg",
		"Patricia Perez",
		"+5804125665295",
		"patricia@gmail.com",
		500,
		10
	),
];

export const TabletCustomers = () => {
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
							Nombre
						</TableCell>
						<TableCell align='left' sx={{ color: "#2B3445" }}>
							Telefono
						</TableCell>

						<TableCell align='left' sx={{ color: "#2B3445" }}>
							Correo
						</TableCell>
						<TableCell align='left' sx={{ color: "#2B3445" }}>
							Balance
						</TableCell>
						<TableCell align='left' sx={{ color: "#2B3445" }}>
							N° Ordenes
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
										alignItems: "center",
										gap: "12px",
									}}
								>
									<Avatar
										src={row.img}
										variant='rounded'
										sx={{
											width: "40px",
											height: "40px",
										}}
									/>

									<Box>
										<Typography
											sx={{
												fontSize: "14px",
											}}
										>
											{row.name}
										</Typography>
									</Box>
								</Box>
							</TableCell>

							<TableCell align='left'>{row.phone}</TableCell>

							<TableCell
								align='left'
								sx={{
									fontSize: "13px",
								}}
							>
								{row.email}
							</TableCell>

							<TableCell
								align='left'
								sx={{
									fontSize: "14px",
								}}
							>
								${row.balance}
							</TableCell>

							<TableCell
								align='left'
								sx={{
									fontSize: "13px",
								}}
							>
								{row.orders}
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
