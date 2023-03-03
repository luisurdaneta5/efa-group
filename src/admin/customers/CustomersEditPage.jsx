import { LayoutAdminComponent } from "../../layouts/LayoutAdminComponent";
import { useEffect } from "react";
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
	Typography,
	Button,
	MenuItem,
	Select,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Fetch from "../../api/Fetch";

export const CustomersEditPage = () => {
	const [data, setData] = useState({
		name: "",
		email: "",
		phone: "",
		password: "",
		confirm: "",
	});
	const [type, setType] = useState("");

	const { name, email, phone, password, confirm } = data;

	const { uid } = useParams();

	useEffect(() => {
		Fetch.get("/users/get", {
			params: {
				uid,
			},
		}).then(({ data }) => {
			const { user } = data;
			setData({
				name: user.name,
				email: user.email,
				phone: user.phone,
				password: "",
				confirm: "",
			});
			setType(user.type);
		});
	}, []);

	const handleInputChange = ({ target }) => {
		setData({
			...data,
			[target.name]: target.value,
		});
	};
	const [showPasswords, setShowPasswords] = useState({
		password: false,
		confirmPassword: false,
	});

	const navigate = useNavigate();

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
		} else if (password != "" && password.length < 8) {
			setError({
				password: true,
			});
			setErrorMsg({
				password: "La contraseña debe de  8 digitos",
			});
		} else if (password != "" && confirm === "") {
			setError({
				confirm: true,
			});
			setErrorMsg({
				confirm: "Campo requerido",
			});
		} else if (password !== confirm) {
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
			Fetch.put("/users/update", {
				uid,
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
							Editar cuenta
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
								placeholder='Seleccione una opcion...'
								defaultValue={type}
							>
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
								Guardar
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
