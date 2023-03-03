import { LayoutComponent } from "../../layouts/LayoutComponent";
import { Container, Box, Typography, Divider, Button } from "@mui/material";
import { ReactComponent as Check } from "../../assets/icons/checkregister.svg";
import { LoginModal } from "../../layouts/components/Modals/LoginModal";
import { useState } from "react";

export const SignupSucessPage = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => setOpen(false);
	return (
		<LayoutComponent>
			<LoginModal
				open={open}
				setOpen={setOpen}
				handleClose={handleClose}
			/>
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
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Check
						style={{
							width: "20%",
						}}
					/>
					<Typography
						color='primary'
						sx={{
							fontSize: "60px",
							fontWeight: "bold",
						}}
					>
						¡MUCHAS GRACIAS!
					</Typography>
					<Typography
						sx={{
							fontSize: "34px",
							fontWeight: 500,
							color: "#8e8e8e",
						}}
					>
						TU REGISTRO HA SIDO EXITOSO
					</Typography>

					<Button
						variant='contained'
						color='primary'
						sx={{
							mt: 3,
						}}
						onClick={handleOpen}
					>
						Iniciar secion
					</Button>
				</Box>
			</Container>
		</LayoutComponent>
	);
};
