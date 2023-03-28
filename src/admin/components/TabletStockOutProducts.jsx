import { Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";

function createData(id, product, stock, amount) {
	return { id, product, stock, amount };
}

export const TabletStockOutProducts = ({ products }) => {
	const rows = products.map((product) => {
		return createData(product.id, product.name, "Sin Stock", product.price);
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
					{rows.length == 0 ? (
						<TableRow>
							<TableCell colSpan={6} align='center' sx={{ borderBottom: "none" }}>
								No existen productos sin agotados
							</TableCell>
						</TableRow>
					) : (
						rows.map((row) => (
							<TableRow
								key={row.product}
								sx={{
									"&:last-child td, &:last-child th": {
										border: 0,
									},
								}}
							>
								<Link to={`/admin/dashboard/products/edit/${row.id}`}>
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
								</Link>

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
						))
					)}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
