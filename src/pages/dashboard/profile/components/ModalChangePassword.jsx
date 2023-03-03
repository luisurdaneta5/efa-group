import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Modal, Grid, FormControl, Input, Button, InputAdornment, IconButton, FormLabel, FormHelperText } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import Fetch from "../../../../api/Fetch";
import { useForm } from "../../../../hooks/useForm";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export const ModalChangePassword = ({ uid, open, setOpen }) => {
	const handleClosePassword = () => setOpen(false);

	const [formValues, handleInputChange] = useForm({
		oldPassword: "",
		newPassword: "",
		confirmNewPassword: "",
	});

	const { oldPassword, newPassword, confirmNewPassword } = formValues;

	const [error, setError] = useState({
		errorOldPassword: false,
		errorNewPassword: false,
		errorConfirmPassword: false,
	});

	const { errorOldPassword, errorNewPassword, errorConfirmPassword } = error;

	const [errorMsg, setErrorMsg] = useState({
		errorTextOldPassword: "",
		errorTextNewPassword: "",
		errorTextConfirmPassword: "",
	});

	const { errorTextOldPassword, errorTextNewPassword, errorTextConfirmPassword } = errorMsg;

	const [values, setValues] = useState({
		showOldPassword: false,
		showNewPassword: false,
		showConfirmPassword: false,
	});

	const handleClickShowOldPassword = () => {
		setValues({
			...values,
			showOldPassword: !values.showOldPassword,
		});
	};

	const handleClickShowNewPassword = () => {
		setValues({
			...values,
			showNewPassword: !values.showNewPassword,
		});
	};

	const handleClickShowConfirmPassword = () => {
		setValues({
			...values,
			showConfirmPassword: !values.showConfirmPassword,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (oldPassword == "") {
			setError({
				errorOldPassword: true,
			});

			setErrorMsg({
				errorTextOldPassword: "Campo requerido",
			});
		} else if (newPassword == "") {
			setError({
				errorNewPassword: true,
			});
			setErrorMsg({
				errorTextNewPassword: "Campo requerido",
			});
		} else if (newPassword.length < 8) {
			setError({
				errorNewPassword: true,
			});
			setErrorMsg({
				errorTextNewPassword: "La contraseña debe de contener 8 digitos",
			});
		} else if (confirmNewPassword == "") {
			setError({
				errorConfirmPassword: true,
			});

			setErrorMsg({
				errorTextConfirmPassword: "Campo requerido",
			});
		} else if (newPassword !== confirmNewPassword) {
			setError({
				errorConfirmPassword: true,
			});

			setErrorMsg({
				errorTextConfirmPassword: "Las contraseñas no coinciden",
			});
		} else {
			Fetch.put("/users/change_password", {
				uid,
				oldPassword,
				newPassword,
			})
				.then((res) => {
					console.log(res);
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
					setOpen(false);
				})
				.catch((err) => {
					if (err.response.data.msg == "Su contraseña actual no coincide") {
						console.log(err);
						setError({
							errorOldPassword: true,
						});

						setErrorMsg({
							errorTextOldPassword: err.response.data.msg,
						});
					} else {
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
					}
				});
		}
	};
	return (
		<Modal open={open} onClose={handleClosePassword} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
			<form onSubmit={handleSubmit}>
				<Box sx={style}>
					<Grid container spacing={2}>
						<Grid item lg={12}>
							<FormControl fullWidth error={true}>
								<span
									style={{
										fontSize: "13px",
										marginBottom: "8px",
										fontWeight: 600,
									}}
								>
									Contraseña actual
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
									type={values.showOldPassword ? "text" : "password"}
									name='oldPassword'
									value={oldPassword}
									onChange={handleInputChange}
									endAdornment={
										<InputAdornment position='end'>
											<IconButton aria-label='toggle password visibility' onClick={handleClickShowOldPassword} edge='end'>
												{values.showOldPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
									}
								/>
								{errorOldPassword && <FormHelperText>{errorTextOldPassword}</FormHelperText>}
							</FormControl>
						</Grid>
						<Grid item lg={12}>
							<FormControl fullWidth error={true}>
								<span
									style={{
										fontSize: "13px",
										marginBottom: "8px",
										fontWeight: 600,
									}}
								>
									Nueva Contraseña
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
									type={values.showNewPassword ? "text" : "password"}
									name='newPassword'
									value={newPassword}
									onChange={handleInputChange}
									endAdornment={
										<InputAdornment position='end'>
											<IconButton aria-label='toggle password visibility' onClick={handleClickShowNewPassword} edge='end'>
												{values.showNewPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
									}
								/>
								{errorNewPassword && <FormHelperText>{errorTextNewPassword}</FormHelperText>}
							</FormControl>
						</Grid>
						<Grid item lg={12}>
							<FormControl fullWidth error={true}>
								<span
									style={{
										fontSize: "13px",
										marginBottom: "8px",
										fontWeight: 600,
									}}
								>
									Repetir nueva Contraseña
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
									type={values.showConfirmPassword ? "text" : "password"}
									name='confirmNewPassword'
									value={confirmNewPassword}
									onChange={handleInputChange}
									endAdornment={
										<InputAdornment position='end'>
											<IconButton aria-label='toggle password visibility' onClick={handleClickShowConfirmPassword} edge='end'>
												{values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
									}
								/>
								{errorConfirmPassword && <FormHelperText>{errorTextConfirmPassword}</FormHelperText>}
							</FormControl>
						</Grid>
					</Grid>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							mt: 3,
						}}
					>
						<Button variant='contained' color='primary' size='small' type='submit'>
							cambiar contraseña
						</Button>
					</Box>
				</Box>
			</form>
		</Modal>
	);
};
