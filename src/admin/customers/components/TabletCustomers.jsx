import { Avatar, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, IconButton, LinearProgress } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Fetch from "../../../api/Fetch";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingUsers } from "../../../store/slices/ui/thunks";

function createData(id, img, name, phone, email, balance, orders) {
	return { id, img, name, phone, email, balance, orders };
}

// const rows = [

// 	createData(
// 		"https://telserdevenezuela.com.ve/wp-content/uploads/2019/12/Camara-Hikvision-DS-2CD2025FWD-I-Bullet-2-MP-1.jpg",
// 		"Patricia Perez",
// 		"+5804125665295",
// 		"patricia@gmail.com",
// 		500,
// 		10
// 	),
// ];

export const TabletCustomers = ({ users, search }) => {
	const { isLoading } = useSelector((state) => state.ui);
	const dispatch = useDispatch();

	const rows = users.map((user) => {
		return createData(user.id, user.avatar.avatarUrl, user.name, user.phone, user.email, user.balance.amount, 10);
	});

	const handleDeleteUser = (uid) => {
		Swal.fire({
			title: "Estas seguro?",
			text: "¡No podrás revertir esto!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#091bad",
			cancelButtonColor: "#d33",
			confirmButtonText: "Si, eliminar",
		}).then((result) => {
			if (result.isConfirmed) {
				Fetch.delete("/users/delete", {
					params: {
						uid: uid,
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
								dispatch(startLoadingUsers());
								navigate("/admin/dashboard/customers");
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
											alignItems: "center",
											gap: "12px",
										}}
									>
										<Avatar
											src={row.img}
											variant='circle'
											alt={row.name}
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
										<Link to={`/admin/dashboard/customers/edit/${row.id}`}>
											<IconButton>
												<ModeEditIcon sx={{ fontSize: "19px" }} />
											</IconButton>
										</Link>

										{/* <Link to={`/admin/dashboard/customers/view/details/${row.id}`}>
											<IconButton>
												<VisibilityIcon sx={{ fontSize: "19px" }} />
											</IconButton>
										</Link> */}

										<IconButton onClick={() => handleDeleteUser(row.id)}>
											<DeleteIcon sx={{ fontSize: "19px" }} />
										</IconButton>
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
