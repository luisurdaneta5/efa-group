import { Box, Modal, Grid, FormControl, Input, Button } from "@mui/material";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 600,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export const ModalEdit = ({ open, setOpen }) => {
	const handleClose = () => setOpen(false);

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={style}>
				<Grid container spacing={2}>
					<Grid item lg={6}>
						<FormControl fullWidth>
							<span
								style={{
									fontSize: "13px",
									marginBottom: "8px",
									fontWeight: 600,
								}}
							>
								Nombre
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
					<Grid item lg={6}>
						<FormControl fullWidth>
							<span
								style={{
									fontSize: "13px",
									marginBottom: "8px",
									fontWeight: 600,
								}}
							>
								Apellido
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
					<Grid item lg={6}>
						<FormControl fullWidth>
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
					<Grid item lg={6}>
						<FormControl fullWidth>
							<span
								style={{
									fontSize: "13px",
									marginBottom: "8px",
									fontWeight: 600,
								}}
							>
								Telefono
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
