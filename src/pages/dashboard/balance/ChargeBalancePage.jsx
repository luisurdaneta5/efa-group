import { Box, Paper, Typography, Grid, FormControl, FormLabel, FormHelperText, OutlinedInput, InputAdornment, Select, MenuItem, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DashboardLayout } from "../DashboardLayout";
import { BanksDetailsPage } from "./components/BanksDetailsPage";
import Fetch from "../../../api/Fetch";
import { useForm } from "../../../hooks/useForm";

import { formatNumber } from "../../../helpers/formatNumbers";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const InitialState = {
	amount: "",
	account: "",
	name: "",
	reference: "",
	date: "",
};
export const ChargeBalancePage = () => {
	const { uid } = useSelector((state) => state.auth.user);
	const { exchangeRate } = useSelector((state) => state.config.money);
	const [accounts, setAccounts] = useState([]);
	const [files, setFiles] = useState("");
	const navigate = useNavigate();

	const [formValues, handleInputChange] = useForm(InitialState);
	const { account, amount, name, reference, date } = formValues;

	const [errors, setErrors] = useState({
		account: false,
		amount: false,
		name: false,
		reference: false,
		date: false,
		voucher: false,
	});

	useEffect(() => {
		Fetch.get("/accounts/getAll")
			.then((res) => {
				setAccounts(res.data.accounts);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleChange = ({ target }) => {
		setFiles(target.files[0]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!account) {
			setErrors({
				account: true,
			});
		} else if (amount == "") {
			setErrors({
				amount: true,
			});
		} else if (name == "") {
			setErrors({
				name: true,
			});
		} else if (reference == "") {
			setErrors({
				reference: true,
			});
		} else if (date == "") {
			setErrors({
				date: true,
			});
		} else if (files == "") {
			setErrors({
				voucher: true,
			});
		} else {
			let formData = new FormData();

			formData.append("userId", uid);
			formData.append("name", name);
			formData.append("bank", account.name);
			formData.append("amount", amount);
			formData.append("conversion", exchangeRate * amount);
			formData.append("reference", reference);
			formData.append("date", date);
			formData.append("voucher", files);

			Fetch.post("/refills/create", formData).then(() => {
				Swal.fire({
					icon: "success",
					title: "Solicitud de Recarga enviada exitosamente",
					text: "Una vez aprobada la solicitud sera notificado via correo electronico y/o podra ver reflejado el saldo en su balance",
				}).then((result) => {
					if (result.isConfirmed) {
						navigate("/dashboard");
					}
				});
			});
		}
	};
	return (
		<DashboardLayout profile={true}>
			<form onSubmit={handleSubmit}>
				<Paper className='paper'>
					<Typography variant='body1' color='initial'>
						Bienvenidos a nuestra pasarela de recarga.
					</Typography>
					<Typography variant='body1' color='initial'>
						Por favor rellene los campos solicitados para procesar la solicitud.
					</Typography>
					<Grid
						container
						spacing={2}
						sx={{
							mt: 3,
						}}
					>
						<Grid item lg={12}>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={8} md={8} lg={8}>
									<FormControl fullWidth size='small'>
										<FormLabel error={errors.account}>Bancos:</FormLabel>
										<Select size='small' name='account' value={account} onChange={handleInputChange} displayEmpty={true} error={errors.account}>
											<MenuItem value=''>Seleccione una opcion...</MenuItem>
											{accounts.map((account) => (
												<MenuItem key={account.id} value={account}>
													{account.name}
												</MenuItem>
											))}
										</Select>
										{errors.account && <FormHelperText sx={{ color: "red" }}>Campo requerido seleccione un banco</FormHelperText>}
									</FormControl>
								</Grid>

								<Grid item xs={12} sm={4} md={4} lg={4}>
									<FormControl fullWidth size='small'>
										<FormLabel error={errors.amount}>Monto a Recargar:</FormLabel>
										<OutlinedInput
											type='number'
											startAdornment={<InputAdornment position='start'>$</InputAdornment>}
											name='amount'
											value={amount}
											onChange={handleInputChange}
											error={errors.amount}
										/>
										{errors.amount && <FormHelperText sx={{ color: "red" }}>Ingrese el monto a recargar</FormHelperText>}
									</FormControl>
								</Grid>

								{account != "" && (
									<Grid item lg={12}>
										<BanksDetailsPage account={account} amount={amount} />
									</Grid>
								)}

								<Grid
									item
									lg={12}
									sx={{
										mb: 2,
									}}
								>
									<Typography variant='body1' color='initial'>
										Formulario de Pago
									</Typography>
									<Typography variant='body1' color='initial'>
										La informacion del siguiente formulario debe contener los datos de la persona que realizo la transferencia.
									</Typography>
								</Grid>

								<Grid item xs={12} sm={4} md={4} lg={4}>
									<FormControl fullWidth size='small'>
										<FormLabel error={errors.name}>Nombre</FormLabel>
										<OutlinedInput name='name' value={name} onChange={handleInputChange} error={errors.name} />
										{errors.name && <FormHelperText sx={{ color: "red" }}>Campo requerido</FormHelperText>}
									</FormControl>
								</Grid>
								<Grid item xs={12} sm={4} md={4} lg={4}>
									<FormControl fullWidth size='small'>
										<FormLabel error={errors.reference}>N° Referencia:</FormLabel>
										<OutlinedInput name='reference' value={reference} onChange={handleInputChange} error={errors.reference} />
										{errors.reference && <FormHelperText sx={{ color: "red" }}>Campo requerido</FormHelperText>}
									</FormControl>
								</Grid>
								<Grid item xs={12} sm={4} md={4} lg={4}>
									<FormControl fullWidth size='small'>
										<FormLabel error={errors.date}>Fecha de Transferencia</FormLabel>
										<OutlinedInput type='date' name='date' value={date} onChange={handleInputChange} error={errors.date} />
										{errors.date && <FormHelperText sx={{ color: "red" }}>Campo requerido</FormHelperText>}
									</FormControl>
								</Grid>
								<Grid item xs={12} sm={4} md={4} lg={12}>
									<FormControl fullWidth size='small'>
										<FormLabel error={errors.voucher}>Comprobante de trasnferencia</FormLabel>
										<OutlinedInput type='file' className='dropzone' error={errors.voucher} name='voucher' onChange={handleChange} />
										{errors.voucher && <FormHelperText sx={{ color: "red" }}>Ingrese imagen del comprobante</FormHelperText>}
									</FormControl>
								</Grid>
							</Grid>
						</Grid>
						<Grid item lg={5}></Grid>
					</Grid>
					<Box
						sx={{
							mt: 3,
							mb: 3,
							display: "flex",
							justifyContent: "center",
						}}
					>
						<Button variant='outlined' color='primary' size='small' type='submit'>
							Enviar
						</Button>

						<Link to='/dashboard'>
							<Button
								variant='outlined'
								color='error'
								size='small'
								sx={{
									ml: 2,
								}}
							>
								Cancelar
							</Button>
						</Link>
					</Box>
				</Paper>
			</form>
		</DashboardLayout>
	);
};
