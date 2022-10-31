import { LayoutComponent } from "../../layouts/LayoutComponent";
import Container from "@mui/material/Container";
import {
	Box,
	FormControl,
	Grid,
	Input,
	OutlinedInput,
	TextField,
	Button,
	TextareaAutosize,
} from "@mui/material";

export const ContactPage = () => {
	return (
		<LayoutComponent>
			<Container
				maxWidth='xl'
				className='animate__animated animate__fadeIn'
				sx={{
					mt: 25,
				}}
			>
				<Box>
					<Grid container spacing={2}>
						<Grid
							items
							lg={6}
							sx={{
								padding: "30px",
							}}
						>
							<FormControl fullWidth>
								<span
									style={{
										fontSize: "13px",
										marginBottom: "8px",
										fontWeight: 600,
									}}
								>
									Nombre y Apellido
								</span>
								<OutlinedInput
									disableUnderline={true}
									size='small'
									id='my-input'
									aria-describedby='my-helper-text'
									sx={{
										backgroundColor: "white",
										fontSize: "13px",
										padding: "0px 10px",
										"&.MuiInput-root": {
											border: "1px solid #c4c4c4",
											borderRadius: "5px",
										},

										"&.MuiInput-input": {
											color: "red",
										},
									}}
									autoComplete='off'
								/>
							</FormControl>

							<FormControl
								fullWidth
								sx={{
									mt: 2,
								}}
							>
								<span
									style={{
										fontSize: "13px",
										marginBottom: "8px",
										fontWeight: 600,
									}}
								>
									Correo Electronico
								</span>
								<OutlinedInput
									type='email'
									size='small'
									disableUnderline={true}
									id='my-input'
									aria-describedby='my-helper-text'
									sx={{
										backgroundColor: "white",
										fontSize: "13px",
										padding: "0px 10px",
										"&.MuiInput-root": {
											border: "1px solid #c4c4c4",
											borderRadius: "5px",
										},

										"&.MuiInput-input": {
											color: "red",
										},
									}}
									autoComplete='off'
								/>
							</FormControl>

							<FormControl
								fullWidth
								sx={{
									mt: 2,
								}}
							>
								<span
									style={{
										fontSize: "13px",
										marginBottom: "8px",
										fontWeight: 600,
									}}
								>
									Mensaje
								</span>
								<TextareaAutosize
									maxRows={4}
									style={{ width: "100%", height: "200px" }}
								/>
							</FormControl>

							<Button
								variant='contained'
								color='primary'
								sx={{ mt: 1 }}
							>
								enviar
							</Button>
						</Grid>
						<Grid items lg={6}>
							<Box>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1386.2584887173764!2d-71.65487669996186!3d10.662455225923793!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89995508dd6e7d%3A0xc3b97ef7cf7aed42!2sEFA%20Sistemas%20y%20Computaci%C3%B3n!5e0!3m2!1ses!2sve!4v1665756052469!5m2!1ses!2sve'
									width='100%'
									height='450'
									allowfullscreen=''
									loading='lazy'
									referrerpolicy='no-referrer-when-downgrade'
									style={{
										borderRadius: "5px",
									}}
								></iframe>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</LayoutComponent>
	);
};
