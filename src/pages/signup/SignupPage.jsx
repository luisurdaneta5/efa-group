import React, { useState } from "react";
import { LayoutComponent } from "../../layouts/LayoutComponent";
import {
	Box,
	Container,
	Paper,
	FormControl,
	FormLabel,
	FormHelperText,
	Input,
	TextField,
	InputAdornment,
	IconButton,
	OutlinedInput,
	Checkbox,
	FormControlLabel,
	FormGroup,
	Typography,
	Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "../../hooks/useForm";

export const SignupPage = () => {
	const [showPasswords, setShowPasswords] = useState({
		password: false,
		confirmPassword: false,
	});

	const [formValues, handleInputChange, reset] = useForm();

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

	return (
		<LayoutComponent>
			<Container
				maxWidth='lg'
				sx={{
					mt: 22,
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Paper
						className='paper'
						sx={{
							width: "500px",
						}}
					>
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
								Cree su cuenta
							</Typography>
							<Typography
								sx={{
									fontSize: "14px",
								}}
							>
								Por favor, rellene todos los campos para
								continuar
							</Typography>
						</Box>
						<Box
							sx={{
								mb: 2,
							}}
						>
							<FormControl fullWidth>
								<FormLabel sx={{ fontSize: "12px", mb: 1 }}>
									Nombre y Apellido
								</FormLabel>
								<TextField label='' size='small' error />
								<FormHelperText sx={{ color: "red" }}>
									Incorrect entry.
								</FormHelperText>
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
								<TextField label='' size='small' error />
								<FormHelperText sx={{ color: "red" }}>
									Incorrect entry.
								</FormHelperText>
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
								<TextField label='' size='small' error />
								<FormHelperText sx={{ color: "red" }}>
									Incorrect entry.
								</FormHelperText>
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
									error
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
							<FormHelperText sx={{ color: "red" }}>
								Incorrect entry.
							</FormHelperText>
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
									error
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
								<FormHelperText sx={{ color: "red" }}>
									Incorrect entry.
								</FormHelperText>
							</FormControl>
						</Box>

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
							}}
						>
							<Checkbox />
							<Typography
								sx={{
									fontSize: "14px",
								}}
							>
								Al registrarse, usted acepta Términos y
								condiciones
							</Typography>
						</Box>

						<Box
							sx={{
								mt: 3,
							}}
						>
							<Button
								variant='contained'
								color='primary'
								size='small'
								fullWidth
							>
								crear cuenta
							</Button>
						</Box>
					</Paper>
				</Box>
			</Container>
		</LayoutComponent>
	);
};
