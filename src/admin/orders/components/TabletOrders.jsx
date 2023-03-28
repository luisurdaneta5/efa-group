import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Box, Chip, LinearProgress } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatNumber } from "../../../helpers/formatNumbers";
import moment from "moment/moment";

function createData(order, name, date, amount, status) {
	return { order, name, date, amount, status };
}

export const TabletOrders = ({ orders, search }) => {
	const { isLoading } = useSelector((state) => state.ui);

	const rows = orders.map((order) => {
		return createData(order.id, order.user.name, order.sale_date, order.total, order.status);
	});

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
					{isLoading ? (
						<TableRow>
							<TableCell colSpan={6} align='center'>
								<LinearProgress />
							</TableCell>
						</TableRow>
					) : rows.length == 0 ? (
						<TableRow>
							<TableCell colSpan={6} align='center' sx={{ borderBottom: "none" }}>
								No se encontro ningun resultado
							</TableCell>
						</TableRow>
					) : (
						rows.map((row) => (
							<TableRow
								key={row.order}
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
												{row.order.slice(0, 8).toUpperCase()}
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
									{moment(row.date).format("DD/MM/YYYY")}
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
											label='Procesando'
											sx={{
												backgroundColor: "#eaf8ff",
												color: "#4552e9",
												width: "100%",
											}}
										/>
									)}

									{row.status == 2 && (
										<Chip
											label='Empacado'
											sx={{
												backgroundColor: "#eaf8ff",
												color: "#4552e9",
												width: "100%",
											}}
										/>
									)}

									{row.status == 3 && (
										<Chip
											label='Entregado'
											sx={{
												backgroundColor: "#E7F9ED",
												color: "rgb(51, 208, 103)",
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
									{formatNumber(row.amount, "EN-US", "USD")}
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
										<Link to={`/admin/dashboard/order/details/${row.order}`}>
											<IconButton>
												<VisibilityIcon sx={{ fontSize: "19px" }} />
											</IconButton>
										</Link>
									</Box>
								</TableCell>
							</TableRow>
						))
					)}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
