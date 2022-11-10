import {
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	Box,
	Chip,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

function createData(order, name, date, amount, status) {
	return { order, name, date, amount, status };
}

const rows = [
	createData("6ed34Edf65d", "Patricia Perez", "04/22/22", 500, 0),
	createData("6ed34Edf65d", "Patricia Perez", "04/22/22", 500, 1),
];

export const TabletOrders = () => {
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
							Orden
						</TableCell>
						<TableCell align='left' sx={{ color: "#2B3445" }}>
							Cliente
						</TableCell>
						<TableCell align='left' sx={{ color: "#2B3445" }}>
							Fecha Compra
						</TableCell>
						<TableCell align='center' sx={{ color: "#2B3445" }}>
							Status
						</TableCell>
						<TableCell align='left' sx={{ color: "#2B3445" }}>
							Monto
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
									<Box>
										<Typography
											sx={{
												fontSize: "14px",
											}}
										>
											{row.order}
										</Typography>
									</Box>
								</Box>
							</TableCell>

							<TableCell align='left'>{row.name}</TableCell>

							<TableCell
								align='left'
								sx={{
									fontSize: "13px",
								}}
							>
								{row.date}
							</TableCell>

							<TableCell
								align='center'
								sx={{
									fontSize: "14px",
								}}
							>
								{row.status == 0 && (
									<Chip
										label='Pendiente'
										sx={{
											backgroundColor: "#FFEAEA",
											color: "#E94560",
											width: "100%",
										}}
									/>
								)}
								{row.status == 1 && (
									<Chip
										label='Completado'
										sx={{
											backgroundColor: "#E7F9ED",
											color: "rgb(51, 208, 103)",
											width: "100%",
										}}
									/>
								)}
								{row.status == 2 && (
									<Chip
										label='Pendiente'
										sx={{
											backgroundColor: "#FFEAEA",
											color: "#E94560",
											width: "100%",
										}}
									/>
								)}
							</TableCell>

							<TableCell
								align='left'
								sx={{
									fontSize: "14px",
								}}
							>
								${row.amount}
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
									<Link to='/admin/dashboard/order/details'>
										<IconButton>
											<VisibilityIcon
												sx={{ fontSize: "19px" }}
											/>
										</IconButton>
									</Link>
								</Box>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
