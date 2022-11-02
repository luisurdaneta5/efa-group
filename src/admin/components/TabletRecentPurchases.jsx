import {
	Chip,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";

function createData(order, client, payment, amount) {
	return { order, client, payment, amount };
}

const rows = [
	createData("#02255We", "Luis Urdaneta", true, 175),
	createData("#02255We", "Luis Urdaneta", true, 175),
	createData("#02255We", "Luis Urdaneta", false, 400),
	createData("#02255We", "Luis Urdaneta", true, 175),
	createData("#02255We", "Luis Urdaneta", false, 175),
];

export const TabletRecentPurchases = () => {
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
							Pago
						</TableCell>
						<TableCell align='right' sx={{ color: "#2B3445" }}>
							Monto
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
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
								{row.order}
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

							{row.payment ? (
								<TableCell align='right'>
									<Chip
										label='Exitoso'
										sx={{
											backgroundColor: "#E7F9ED",
											color: "rgb(51, 208, 103)",
											width: "100%",
										}}
									/>
								</TableCell>
							) : (
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
								{row.amount}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
