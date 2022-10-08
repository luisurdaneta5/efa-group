import React, { useState } from "react";
import {
	Modal,
	Box,
	Typography,
	FormControl,
	Input,
	InputAdornment,
	IconButton,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startLoginWithEmailAndPassword } from "../../../store/slices/auth";
import "./style.css";

// import { useForm } from "../../../hooks/useForm";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "500px",
	bgcolor: "background.paper",
	border: "0px solid #000",
	borderRadius: "10px",
	boxShadow: 24,
	padding: "2rem 3rem",
};

export const LoginModal = (props) => {
	const { loading } = useSelector((state) => state.ui);
	const dispatch = useDispatch();

	const [values, setValues] = useState({
		email: "luis.urdaneta488@gmail.com",
		password: "admin",
		showPassword: false,
	});

	const { email, password } = values;

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(startLoginWithEmailAndPassword(email, password));
	};

	return (
		<>
			<Modal
				open={props.open}
				onClose={props.handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Typography
						id='modal-modal-title'
						variant='h6'
						component='h2'
						sx={{
							display: "flex",
							alignitems: "center",
							justifyContent: "center",
						}}
					>
						Bienvenidos a Nombre comercio
					</Typography>
					<Typography
						color='initial'
						sx={{
							display: "flex",
							alignitems: "center",
							justifyContent: "center",
							fontSize: "12px",
							mt: 1,
						}}
					>
						Ingresa con Correo Electronico & Contraseña
					</Typography>
					<form onSubmit={handleLogin}>
						<Box sx={{ mt: 4 }}>
							<FormControl fullWidth={true}>
								<span
									style={{
										fontSize: "13px",
										marginBottom: "8px",
										fontWeight: 600,
									}}
								>
									Correo Electronico
								</span>

								<Input
									placeholder='ejemplo@mail.com'
									disableUnderline={true}
									id='my-input'
									aria-describedby='my-helper-text'
									sx={{
										fontSize: "13px",
										padding: "0px 10px",
										"&.MuiInput-root": {
											border: "1px solid #c4c4c4",
											borderRadius: "5px",
										},
										"&.Mui-focused": {
											border: "1px solid black",
										},
										"&.MuiInput-input": {
											color: "red",
										},
									}}
									autoComplete='off'
									value={email}
								/>
							</FormControl>
						</Box>

						<Box sx={{ mt: 2 }}>
							<FormControl fullWidth={true}>
								<span
									style={{
										fontSize: "13px",
										marginBottom: "8px",
										fontWeight: 600,
									}}
								>
									Contraseña
								</span>

								<Input
									placeholder='***********'
									disableUnderline={true}
									id='password'
									aria-describedby='my-helper-text'
									sx={{
										fontSize: "13px",
										padding: "0px 10px",
										"&.MuiInput-root": {
											border: "1px solid #c4c4c4",
											borderRadius: "5px",
										},
										"&.Mui-focused": {
											border: "1px solid black",
										},
										"&.MuiInput-input": {
											color: "red",
										},
									}}
									type={
										values.showPassword
											? "text"
											: "password"
									}
									value={password}
									onChange={handleChange("password")}
									endAdornment={
										<InputAdornment position='end'>
											<IconButton
												aria-label='toggle password visibility'
												onClick={
													handleClickShowPassword
												}
												edge='end'
											>
												{values.showPassword ? (
													<VisibilityOff />
												) : (
													<Visibility />
												)}
											</IconButton>
										</InputAdornment>
									}
								/>
							</FormControl>
						</Box>
						<Box sx={{ mt: 2 }}>
							<button
								className='btn'
								type='submit'
								disabled={loading}
							>
								{loading ? (
									<p className='preloader'></p>
								) : (
									"Iniciar Sesion"
								)}
							</button>
						</Box>
					</form>
					<Box
						sx={{
							mt: 3,
							display: "flex",
							justifyContent: "center",
							alignText: "center",
						}}
					>
						<Typography
							variant='body1'
							color='initial'
							sx={{ mr: 1, fontSize: "16px" }}
						>
							No tienes una Cuenta?
						</Typography>
						<Link
							to={"/sign-up"}
							style={{
								color: "black",
								fontWeight: 600,
							}}
						>
							Registrate
						</Link>
					</Box>
				</Box>
			</Modal>
		</>
	);
};
