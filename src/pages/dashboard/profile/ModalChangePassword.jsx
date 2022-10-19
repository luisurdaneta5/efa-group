import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
	Box,
	Modal,
	Grid,
	FormControl,
	Input,
	Button,
	InputAdornment,
	IconButton,
} from "@mui/material";
import { useState } from "react";

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

export const ModalChangePassword = ({ open, setOpen }) => {
	const handleClosePassword = () => setOpen(false);

	const [values, setValues] = useState({
		showPassword: false,
	});

	const handleClickShowPassword = () => {
		setValues({
			showPassword: !values.showPassword,
		});
	};

	return (
		<Modal
			open={open}
			onClose={handleClosePassword}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={style}>
				<Grid container spacing={2}>
					<Grid item lg={12}>
						<FormControl fullWidth>
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
								type={values.showPassword ? "text" : "password"}
								value={password}
								onChange={handleChange("password")}
								endAdornment={
									<InputAdornment position='end'>
										<IconButton
											aria-label='toggle password visibility'
											onClick={handleClickShowPassword}
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
					</Grid>
					<Grid item lg={12}>
						<FormControl fullWidth>
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
								// value={email}
							/>
						</FormControl>
					</Grid>
					<Grid item lg={12}>
						<FormControl fullWidth>
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
								// value={email}
							/>
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
					<Button variant='contained' color='primary' size='small'>
						guardar
					</Button>
				</Box>
			</Box>
		</Modal>
	);
};
