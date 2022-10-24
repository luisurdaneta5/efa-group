import {
	Box,
	Chip,
	FormControl,
	Grid,
	IconButton,
	InputAdornment,
	OutlinedInput,
	Pagination,
	Paper,
	Typography,
} from "@mui/material";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { DashboardLayout } from "../DashboardLayout";
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const TicketsPage = () => {
	return (
		<DashboardLayout support={true}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<HeadsetMicOutlinedIcon
						sx={{
							color: "#D23F57",
						}}
					/>

					<Typography
						color='initial'
						sx={{
							ml: 1,
							fontSize: "25px",
							fontWeight: "bold",
						}}
					>
						Soporte
					</Typography>
				</Box>
				<Box>
					<FormControl variant='standard'>
						<OutlinedInput
							size='small'
							id='input-with-icon-adornment'
							startAdornment={
								<InputAdornment position='start'>
									<Search />
								</InputAdornment>
							}
						/>
					</FormControl>
				</Box>
			</Box>

			<Box sx={{ mt: 4 }}>
				<Link to='/dashboard/support/tickets/details'>
					<Paper className='paper order-list-paper'>
						<Grid
							container
							spacing={0}
							sx={{
								display: "flex",
								alignItems: "center",
							}}
						>
							<Grid item lg={10}>
								<Box>
									<Typography
										variant='body1'
										color='initial'
										sx={{
											padding: "15px 0px 0px 10px",
										}}
									>
										Solicitud de Garantia mi producto vino
										defectuoso
									</Typography>
								</Box>
								<Box
									sx={{
										display: "flex",
										mt: 1,
									}}
								>
									<Chip
										label='Abierto'
										size='small'
										sx={{
											fontSize: "12px",
											padding: "10px",
										}}
										className='chip-succces'
									/>

									<Typography
										variant='body1'
										color='initial'
										sx={{
											fontSize: "15px",
											ml: 2,
											color: "rgb(125, 135, 156)",
										}}
									>
										Oct 18, 2022
									</Typography>

									<Typography
										variant='body1'
										color='initial'
										sx={{
											fontSize: "15px",
											ml: 2,
											color: "rgb(125, 135, 156)",
										}}
									>
										Garantia
									</Typography>
								</Box>
								<Box
									sx={{
										display: "flex",
									}}
								></Box>
							</Grid>

							<Grid
								item
								lg={2}
								sx={{
									display: "flex",
									justifyContent: "flex-end",
									alignItems: "center",
								}}
							>
								<IconButton>
									<ArrowForwardIcon />
								</IconButton>
							</Grid>
						</Grid>
					</Paper>
				</Link>

				<Box
					sx={{
						mt: 5,
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Pagination count={5} variant='outlined' color='primary' />
				</Box>
			</Box>
		</DashboardLayout>
	);
};
