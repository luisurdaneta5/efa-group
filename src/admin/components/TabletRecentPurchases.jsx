import { Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import { formatNumber } from "../../helpers/formatNumbers";

function createData(order, client, payment, amount) {
	return { order, client, status, amount };
}

// const rows = [
// 	createData("#02255We", "Luis Urdaneta", true, 175),
// 	createData("#02255We", "Luis Urdaneta", true, 175),
// 	createData("#02255We", "Luis Urdaneta", false, 400),
// 	createData("#02255We", "Luis Urdaneta", true, 175),
// 	createData("#02255We", "Luis Urdaneta", false, 175),
// ];

export const TabletRecentPurchases = ({ orders }) => {
	const rows = orders.map((order) => {
		return createData(order.id, order.user.name, order.status, order.total);
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
							Order Id
						</TableCell>
						<TableCell align='left' sx={{ color: "#2B3445" }}>
							Cliente
						</TableCell>
						<TableCell align='center' sx={{ color: "#2B3445" }}>
							Status
						</TableCell>
						<TableCell align='right' sx={{ color: "#2B3445" }}>
							Monto
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.length == 0 ? (
						<TableRow>
							<TableCell colSpan={6} align='center' sx={{ borderBottom: "none" }}>
								No existen Compras recientes
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
								<TableCell
									component='th'
									scope='row'
									sx={{
										fontSize: "13px",
										color: "#7D879C",
										fontWeight: 600,
									}}
								>
									<Link to={`/admin/dashboard/order/details/${row.order}`}>#{row.order.slice(0, 8).toUpperCase()}</Link>
								</TableCell>
								<TableCell
									align='left'
									sx={{
										fontSize: "13px",
										color: "#7D879C",
										fontWeight: 600,
									}}
								>
									{row.client}
								</TableCell>

								{row.status == 0 && (
									<TableCell align='center'>
										<Chip
											label='Pendiente'
											sx={{
												backgroundColor: "#FFEAEA",
												color: "#E94560",
												width: "100%",
											}}
										/>
									</TableCell>
								)}

								<TableCell
									align='right'
									sx={{
										fontSize: "13px",
										color: "#7D879C",
										fontWeight: 600,
									}}
								>
									{formatNumber(row.amount, "EN-US", "USD")}
								</TableCell>
							</TableRow>
						))
					)}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
