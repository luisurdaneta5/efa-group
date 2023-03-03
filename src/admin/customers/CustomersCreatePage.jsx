import { LayoutAdminComponent } from "../../layouts/LayoutAdminComponent";
import {
	Box,
	Container,
	Paper,
	FormControl,
	FormLabel,
	FormHelperText,
	TextField,
	InputAdornment,
	IconButton,
	OutlinedInput,
	Checkbox,
	Typography,
	Button,
	MenuItem,
	Select,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import Fetch from "../../api/Fetch";
import { toast } from "react-toastify";

export const CustomersCreatePage = () => {
	const [showPasswords, setShowPasswords] = useState({
		password: false,
		confirmPassword: false,
	});

	const navigate = useNavigate();

	const [type, setType] = useState("");

	const handleChangeType = (e) => {
		setType(e.target.value);
	};

	const [error, setError] = useState({
		name: false,
		email: false,
		phone: false,
		password: false,
		confirm: false,
		checked: false,
		type: false,
	});

	const [errorMsg, setErrorMsg] = useState({
		name: "",
		email: "",
		phone: "",
		password: "",
		confirm: "",
		checked: "",
		type: "",
	});

	const [formValues, handleInputChange] = useForm({
		name: "",
		email: "",
		phone: "",
		password: "",
		confirm: "",
	});

	const { name, email, phone, password, confirm } = formValues;

	const handleClickShowPassword = () => {
		setShowPasswords({
			...showPasswords,
			password: !showPasswords.password,
		});
	};

	const handleClickShowConfirmPassword = () => {
		setShowPasswords({
			...showPasswords,
			confirmPassword: !showPasswords.confirmPassword,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (name == "") {
			setError({
				name: true,
			});

			setErrorMsg({
				name: "Campo requerido",
			});
		} else if (email == "") {
			setError({
				email: true,
			});
			setErrorMsg({
				email: "Campo requerido",
			});
		} else if (phone == "") {
			setError({
				phone: true,
			});
			setErrorMsg({
				phone: "Campo requerido",
			});
		} else if (password == "") {
			setError({
				password: true,
			});
			setErrorMsg({
				password: "Campo requerido",
			});
		} else if (password.length < 8) {
			setError({
				password: true,
			});
			setErrorMsg({
				password: "La contraseña debe de  8 digitos",
			});
		} else if (confirm == "") {
			setError({
				confirm: true,
			});
			setErrorMsg({
				confirm: "Campo requerido",
			});
		} else if (password != confirm) {
			setError({
				confirm: true,
			});
			setErrorMsg({
				confirm: "Las contraseñas no coinciden",
			});
		} else if (type === false) {
			setError({
				type: true,
			});
			setErrorMsg({
				type: "Campo requerido",
			});
		} else {
			Fetch.post("/auth/user/create", {
				name,
				email,
				phone,
				password,
				type,
			})
				.then((res) => {
					toast.success(res.data.msg, {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
					});

					navigate("/admin/dashboard/customers");
				})
				.catch((err) => {
					if (err.response.data.msg == "email") {
						setError({
							email: true,
						});
						setErrorMsg({
							email: "Ya existe un usuario con este correo",
						});
					} else {
						toast.error(err.response.data.msg, {
							position: "top-right",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "light",
						});
					}
				});
		}
	};

	return (
		<LayoutAdminComponent>
			<Container maxWidth='lg'>
				<Paper className='paper' sx={{ mt: 3 }}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
							mb: 4,
						}}
					>
						<Typography
							sx={{
								fontSize: "20px",
								fontWeight: 700,
							}}
						>
							Crear cuenta
						</Typography>
						<Typography
							sx={{
								fontSize: "14px",
							}}
						>
							Por favor, rellene todos los campos para continuar
						</Typography>
					</Box>
					<form onSubmit={handleSubmit}>
						<Box
							sx={{
								mb: 2,
							}}
						>
							<FormControl fullWidth>
								<FormLabel sx={{ fontSize: "12px", mb: 1 }}>
									Nombre y Apellido
								</FormLabel>
								<TextField
									label=''
									size='small'
									error={error.name}
									name='name'
									value={name}
									onChange={handleInputChange}
								/>
								{error.name && (
									<FormHelperText sx={{ color: "red" }}>
										{errorMsg.name}
									</FormHelperText>
								)}
							</FormControl>
						</Box>

						<Box
							sx={{
								mb: 2,
							}}
						>
							<FormControl fullWidth>
								<FormLabel sx={{ fontSize: "12px", mb: 1 }}>
									Correo electronico
								</FormLabel>
								<TextField
									label=''
									type='email'
									size='small'
									error={error.email}
									name='email'
									value={email}
									onChange={handleInputChange}
								/>
								{error.email && (
									<FormHelperText sx={{ color: "red" }}>
										{errorMsg.email}
									</FormHelperText>
								)}
							</FormControl>
						</Box>

						<Box
							sx={{
								mb: 2,
							}}
						>
							<FormControl fullWidth>
								<FormLabel sx={{ fontSize: "12px", mb: 1 }}>
									Numero Telefono
								</FormLabel>
								<TextField
									label=''
									size='small'
									error={error.phone}
									name='phone'
									value={phone}
									onChange={handleInputChange}
								/>
								{error.phone && (
									<FormHelperText sx={{ color: "red" }}>
										{errorMsg.phone}
									</FormHelperText>
								)}
							</FormControl>
						</Box>

						<Box
							sx={{
								mb: 2,
							}}
						>
							<FormControl fullWidth>
								<FormLabel sx={{ fontSize: "12px", mb: 1 }}>
									Contraseña
								</FormLabel>
								<OutlinedInput
									label=''
									size='small'
									error={error.password}
									name='password'
									value={password}
									onChange={handleInputChange}
									type={
										showPasswords.password
											? "text"
											: "password"
									}
									endAdornment={
										<InputAdornment position='end'>
											<IconButton
												aria-label='toggle password visibility'
												onClick={
													handleClickShowPassword
												}
												edge='end'
											>
												{showPasswords.password ? (
													<VisibilityOff />
												) : (
													<Visibility />
												)}
											</IconButton>
										</InputAdornment>
									}
								/>
							</FormControl>
							{error.password && (
								<FormHelperText sx={{ color: "red" }}>
									{errorMsg.password}
								</FormHelperText>
							)}
						</Box>

						<Box
							sx={{
								mb: 2,
							}}
						>
							<FormControl fullWidth>
								<FormLabel sx={{ fontSize: "12px", mb: 1 }}>
									Repetir Contaseña
								</FormLabel>
								<OutlinedInput
									label=''
									size='small'
									error={error.confirm}
									name='confirm'
									value={confirm}
									onChange={handleInputChange}
									type={
										showPasswords.confirmPassword
											? "text"
											: "password"
									}
									endAdornment={
										<InputAdornment position='end'>
											<IconButton
												aria-label='toggle password visibility'
												onClick={
													handleClickShowConfirmPassword
												}
												edge='end'
											>
												{showPasswords.confirmPassword ? (
													<VisibilityOff />
												) : (
													<Visibility />
												)}
											</IconButton>
										</InputAdornment>
									}
								/>
								{error.confirm && (
									<FormHelperText sx={{ color: "red" }}>
										{errorMsg.confirm}
									</FormHelperText>
								)}
							</FormControl>
						</Box>

						<FormControl fullWidth>
							<FormLabel sx={{ fontSize: "12px", mb: 1 }}>
								Tipo Usuario:
							</FormLabel>
							<Select
								error={error.type}
								size='small'
								name='type'
								value={type}
								onChange={handleChangeType}
								displayEmpty
							>
								<MenuItem value=''>
									Seleccione una opcion...
								</MenuItem>
								<MenuItem value={0}>Cliente</MenuItem>
								<MenuItem value={1}>Empleado</MenuItem>
							</Select>
							{error.type && (
								<FormHelperText sx={{ color: "red" }}>
									{errorMsg.type}
								</FormHelperText>
							)}
						</FormControl>

						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								mt: 5,
							}}
						>
							<Button
								variant='outlined'
								color='primary'
								type='submit'
								size='small'
							>
								Crear cuenta
							</Button>
							<Link to='/admin/dashboard/customers'>
								<Button
									variant='outlined'
									color='error'
									type='submit'
									size='small'
									sx={{
										ml: 2,
									}}
								>
									cancelar
								</Button>
							</Link>
						</Box>
					</form>
				</Paper>
			</Container>
		</LayoutAdminComponent>
	);
};
