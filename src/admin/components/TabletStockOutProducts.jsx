import {
	Chip,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";

function createData(product, stock, amount) {
	return { product, stock, amount };
}

const rows = [
	createData("Camara Hikvision IRPF-720", "Sin Stock", 175),
	createData("DVR 720P UP 1080P", "Sin Stock", 175),
	createData("Mouse Imex", "Sin Stock", 400),
	createData("Radio Boagfen", "Sin Stock", 175),
	createData("Pendrive 35GB", "Sin Stock", 175),
];

export const TabletStockOutProducts = () => {
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
							Productos
						</TableCell>
						<TableCell align='center' sx={{ color: "#2B3445" }}>
							Stock
						</TableCell>

						<TableCell align='right' sx={{ color: "#2B3445" }}>
							Monto
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.product}
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
								{row.product}
							</TableCell>

							<TableCell align='center'>
								<Chip
									label={row.stock}
									sx={{
										backgroundColor: "#FFEAEA",
										color: "#E94560",
										width: "100%",
									}}
								/>
							</TableCell>

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
