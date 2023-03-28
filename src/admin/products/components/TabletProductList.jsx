import { Avatar, Box, Chip, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, IconButton, LinearProgress } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import Fetch from "../../../api/Fetch";
import { startLoadingProducts } from "../../../store/slices/ui";
import { getProduct } from "../../../store/slices/products/thunks";

function createData(id, name, img, category, brand, price, published, profit, discount, stock) {
	return {
		id,
		name,
		img,
		category,
		brand,
		price,
		published,
		profit,
		discount,
		stock,
	};
}

export const TabletProductList = ({ products, search }) => {
	const { isLoading } = useSelector((state) => state.ui);
	const dispatch = useDispatch();

	const rows = products.map((product) => {
		return createData(product.id, product.name, product.img, product.category, product.brand, product.price, product.status, product.profit, product.discount, product.stock);
	});

	const handleCheck = ({ target }) => {
		const id = target.value;

		if (!target.checked) {
			var status = 0;
		} else {
			var status = 1;
		}

		Fetch.get("/products/status", {
			params: {
				id,
				status,
			},
		})
			.then((res) => {
				dispatch(startLoadingProducts());
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleDelete = (id) => {
		Swal.fire({
			title: "Estas Seguro?",
			text: "El registro no podra recuperarse luego",
			showCancelButton: true,
			confirmButtonText: "Si, Eliminar",
			cancelButtonColor: "#d33",
			confirmButtonColor: "#091bad",
			showLoaderOnConfirm: true,
		}).then((result) => {
			if (result.isConfirmed) {
				Fetch.delete("/products/delete", {
					params: {
						id: id,
					},
				})
					.then((res) => {
						Swal.fire({
							title: "Eliminado!",
							text: `${res.data.msg} ha sido eliminado.`,
							icon: "success",
							confirmButtonColor: "#091bad",
						}).then((result) => {
							if (result.isConfirmed) {
								dispatch(startLoadingProducts());
							}
						});
					})
					.catch((err) => {
						console.log(err);
						toast.error("Ha ocurrido un error inesperado porfavor intente mas tarde", {
							position: "top-right",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "light",
						});
					});
			}
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
							Categoria
						</TableCell>

						<TableCell align='center' sx={{ color: "#2B3445" }}>
							Marca
						</TableCell>
						<TableCell align='center' sx={{ color: "#2B3445" }}>
							Procentaje Ganancia
						</TableCell>
						<TableCell align='center' sx={{ color: "#2B3445" }}>
							Descuento
						</TableCell>
						<TableCell align='center' sx={{ color: "#2B3445" }}>
							Precio
						</TableCell>
						<TableCell align='center' sx={{ color: "#2B3445" }}>
							Stock
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
					{isLoading ? (
						<TableRow>
							<TableCell colSpan={9} align='center'>
								<LinearProgress />
							</TableCell>
						</TableRow>
					) : rows.length == 0 ? (
						<TableRow>
							<TableCell colSpan={9} align='center' sx={{ borderBottom: "none" }}>
								No se encontro ningun resultado para {search}
							</TableCell>
						</TableRow>
					) : (
						rows.map((row) => (
							<TableRow
								sx={{
									"&:last-child td, &:last-child th": {
										border: 0,
									},
								}}
								key={row.id}
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
												#{row.id.slice("0", "8")}
											</Typography>
										</Box>
									</Box>
								</TableCell>

								<TableCell align='left'>
									<Chip
										label={row.category}
										sx={{
											fontSize: "13px",
											width: "100%",
										}}
									/>
								</TableCell>

								<TableCell
									align='center'
									sx={{
										fontSize: "13px",

										fontWeight: 600,
									}}
								>
									{row.brand}
								</TableCell>

								<TableCell
									align='center'
									sx={{
										fontSize: "13px",

										fontWeight: 600,
									}}
								>
									{row.profit}%
								</TableCell>
								<TableCell
									align='center'
									sx={{
										fontSize: "14px",

										fontWeight: 600,
									}}
								>
									{row.discount == 0 ? (
										<Chip
											label='Sin Descuento'
											sx={{
												fontSize: "13px",
												width: "100%",
											}}
										/>
									) : (
										<Chip
											label={`${row.discount}%`}
											sx={{
												fontSize: "13px",
												backgroundColor: "#E7F9ED",
												color: "rgb(51, 208, 103)",
												width: "100%",
											}}
										/>
									)}
								</TableCell>
								<TableCell
									align='center'
									sx={{
										fontSize: "14px",

										fontWeight: 600,
									}}
								>
									${row.price}
								</TableCell>

								<TableCell
									align='center'
									sx={{
										fontSize: "14px",

										fontWeight: 600,
									}}
								>
									{row.stock == 0 ? (
										<Chip
											label='Sin Existencia'
											sx={{
												backgroundColor: "#FFEAEA",
												color: "#E94560",
												width: "100%",
												fontSize: "13px",
											}}
										/>
									) : (
										row.stock
									)}
								</TableCell>

								<TableCell
									align='left'
									sx={{
										fontSize: "13px",
										color: "#7D879C",
										fontWeight: 600,
									}}
								>
									<Switch
										checked={row.published}
										value={row.id}
										onChange={handleCheck}
										inputProps={{
											"aria-label": "controlled",
										}}
									/>
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
										<Link to={`/admin/dashboard/products/edit/${row.id}`}>
											<IconButton>
												<ModeEditIcon sx={{ fontSize: "19px" }} />
											</IconButton>
										</Link>
										{/* <IconButton>
											<VisibilityIcon sx={{ fontSize: "19px" }} />
										</IconButton> */}

										{/* <IconButton
											onClick={() => {
												handleDelete(row.id);
											}}
										>
											<DeleteIcon sx={{ fontSize: "19px" }} />
										</IconButton> */}
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
