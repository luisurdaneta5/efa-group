import {
	Box,
	Container,
	Paper,
	Typography,
	Grid,
	Avatar,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";
import { useState } from "react";
import { LayoutAdminComponent } from "../../layouts/LayoutAdminComponent";

export const OrderDetailsAdminPage = () => {
	const [age, setAge] = useState("");

	const handleChange = (event) => {
		setAge(event.target.value);
	};
	return (
		<LayoutAdminComponent>
			<Container maxWidth='xl'>
				<Box
					sx={{
						mt: 2,
					}}
				>
					<Typography
						sx={{
							fontSize: "20px",
							fontWeight: 700,
						}}
					>
						Detalles Ordenes
					</Typography>
				</Box>

				<Box sx={{ mt: 2 }}>
					<Grid container spacing={2}>
						<Grid item lg={12}>
							<Paper className='paper'>
								<Box
									sx={{
										display: "flex",
									}}
								>
									<Box sx={{ display: "flex" }}>
										<Typography
											sx={{
												fontSize: "14px",
												color: "rgb(125, 135, 156)",
											}}
										>
											N° Orden:
										</Typography>
										<Typography
											sx={{
												fontSize: "15px",
												ml: 1,
											}}
										>
											95865228526
										</Typography>
									</Box>

									<Box sx={{ ml: 5, display: "flex" }}>
										<Typography
											sx={{
												fontSize: "14px",
												color: "rgb(125, 135, 156)",
											}}
										>
											Colocado en:
										</Typography>
										<Typography
											sx={{
												fontSize: "15px",
												ml: 1,
											}}
										>
											01 Dic, 2022
										</Typography>
									</Box>
								</Box>

								<Box
									sx={{
										mt: 5,
									}}
								>
									<Box sx={{ display: "flex", mb: 3 }}>
										<Avatar
											src='https://http2.mlstatic.com/D_NQ_NP_625184-MLV49636727595_042022-O.jpg'
											sx={{
												width: "64px",
												height: "64px",
												borderRadius: "8px",
												border: "2px solid #ebeff4",
											}}
											variant='square'
										/>
										<Box sx={{ ml: 2 }}>
											<Typography
												sx={{
													fontSize: "14px",
													fontWeight: 500,
												}}
											>
												Router Tp-Link
											</Typography>
											<Typography
												sx={{
													mt: 2,
													fontSize: "14px",
													color: "rgb(125, 135, 156)",
												}}
											>
												$250.00 x 3
											</Typography>
										</Box>
									</Box>

									<Box sx={{ display: "flex", mb: 3 }}>
										<Avatar
											src='https://http2.mlstatic.com/D_NQ_NP_625184-MLV49636727595_042022-O.jpg'
											sx={{
												width: "64px",
												height: "64px",
												borderRadius: "8px",
												border: "2px solid #ebeff4",
											}}
											variant='square'
										/>
										<Box sx={{ ml: 2 }}>
											<Typography
												sx={{
													fontSize: "14px",
													fontWeight: 500,
												}}
											>
												Router Tp-Link
											</Typography>
											<Typography
												sx={{
													mt: 2,
													fontSize: "14px",
													color: "rgb(125, 135, 156)",
												}}
											>
												$250.00 x 3
											</Typography>
										</Box>
									</Box>
								</Box>
							</Paper>
						</Grid>

						<Grid item lg={6}>
							<Paper className='paper'>hola</Paper>
						</Grid>
						<Grid item lg={6}>
							<Paper className='paper'>hola</Paper>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</LayoutAdminComponent>
	);
};
