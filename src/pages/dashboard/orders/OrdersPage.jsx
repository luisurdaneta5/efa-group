import {
	Box,
	Paper,
	Typography,
	Grid,
	Chip,
	IconButton,
	Pagination,
	FormControl,
	InputAdornment,
	Input,
	OutlinedInput,
} from "@mui/material";
import { DashboardLayout } from "../DashboardLayout";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./styles.css";
import { AccountCircle, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const OrdersPage = () => {
	return (
		<DashboardLayout order={true}>
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
					<ShoppingBagIcon
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
						Mis Ordenes
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

			<Grid
				container
				spacing={2}
				sx={{
					mt: 1,
					padding: "0px 18px",
				}}
			>
				<Grid item lg={3}>
					<Typography
						color='initial'
						sx={{
							fontSize: "16px",
							color: "rgb(125, 135, 156)",
							textAlign: "left",
							fontWeight: 500,
							margin: "0px 0px",
						}}
					>
						Orden #
					</Typography>
				</Grid>
				<Grid item lg={2}>
					<Typography
						color='initial'
						sx={{
							fontSize: "16px",
							color: "rgb(125, 135, 156)",
							textAlign: "left",
							fontWeight: 500,
							margin: "0px 0px",
						}}
					>
						Status
					</Typography>
				</Grid>
				<Grid item lg={3}>
					<Typography
						color='initial'
						sx={{
							fontSize: "16px",
							color: "rgb(125, 135, 156)",
							textAlign: "left",
							fontWeight: 500,
						}}
					>
						Fecha Compra
					</Typography>
				</Grid>
				<Grid item lg={3}>
					<Typography
						color='initial'
						sx={{
							fontSize: "16px",
							color: "rgb(125, 135, 156)",
							alignItems: "left",
							fontWeight: 500,
							margin: "0px 16px",
						}}
					>
						Total
					</Typography>
				</Grid>
				<Grid item lg={1}></Grid>
			</Grid>

			<Link to='/dashboard/order/detail'>
				<Paper className='paper order-list-paper'>
					<Grid
						container
						spacing={2}
						sx={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<Grid item lg={3}>
							<Typography
								variant='body1'
								color='initial'
								className='order-id'
							>
								1050017AS
							</Typography>
						</Grid>
						<Grid item lg={2}>
							<Chip
								label='Pendiente'
								size='small'
								color='warning'
								className='chip-warning'
							/>
						</Grid>

						<Grid item lg={3}>
							<Typography
								variant='body1'
								color='initial'
								sx={{
									fontSize: "14px",
								}}
							>
								Oct 18, 2022
							</Typography>
						</Grid>
						<Grid
							item
							lg={3}
							sx={{
								fontSize: "14px",
							}}
						>
							$ 350.00
						</Grid>
						<Grid item lg={1}>
							<IconButton>
								<ArrowForwardIcon />
							</IconButton>
						</Grid>
					</Grid>
				</Paper>
			</Link>

			<Paper className='paper order-list-paper'>
				<Grid
					container
					spacing={2}
					sx={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<Grid item lg={3}>
						<Typography
							variant='body1'
							color='initial'
							className='order-id'
						>
							1050017AS
						</Typography>
					</Grid>
					<Grid item lg={2}>
						<Chip
							label='Procesando'
							size='small'
							sx={{
								fontSize: "12px",
								padding: "10px",
							}}
						/>
					</Grid>
					<Grid item lg={3}>
						<Typography
							variant='body1'
							color='initial'
							sx={{
								fontSize: "14px",
							}}
						>
							Oct 18, 2022
						</Typography>
					</Grid>
					<Grid
						item
						lg={3}
						sx={{
							fontSize: "14px",
						}}
					>
						$ 350.00
					</Grid>
					<Grid item lg={1}>
						<IconButton>
							<ArrowForwardIcon />
						</IconButton>
					</Grid>
				</Grid>
			</Paper>

			<Paper className='paper order-list-paper'>
				<Grid
					container
					spacing={2}
					sx={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<Grid item lg={3}>
						<Typography
							variant='body1'
							color='initial'
							className='order-id'
						>
							1050017AS
						</Typography>
					</Grid>
					<Grid item lg={2}>
						<Chip
							label='Entregado'
							size='small'
							color='success'
							className='chip-succces'
						/>
					</Grid>
					<Grid item lg={3}>
						<Typography
							variant='body1'
							color='initial'
							sx={{
								fontSize: "14px",
							}}
						>
							Oct 18, 2022
						</Typography>
					</Grid>
					<Grid
						item
						lg={3}
						sx={{
							fontSize: "14px",
						}}
					>
						$ 350.00
					</Grid>
					<Grid item lg={1}>
						<IconButton>
							<ArrowForwardIcon />
						</IconButton>
					</Grid>
				</Grid>
			</Paper>

			<Paper className='paper order-list-paper'>
				<Grid
					container
					spacing={2}
					sx={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<Grid item lg={3}>
						<Typography
							variant='body1'
							color='initial'
							className='order-id'
						>
							1050017AS
						</Typography>
					</Grid>
					<Grid item lg={2}>
						<Chip
							label='Cancelado'
							size='small'
							color='error'
							className='chip-cancel'
						/>
					</Grid>
					<Grid item lg={3}>
						<Typography
							variant='body1'
							color='initial'
							sx={{
								fontSize: "14px",
							}}
						>
							Oct 18, 2022
						</Typography>
					</Grid>
					<Grid
						item
						lg={3}
						sx={{
							fontSize: "14px",
						}}
					>
						$ 350.00
					</Grid>
					<Grid item lg={1}>
						<IconButton>
							<ArrowForwardIcon />
						</IconButton>
					</Grid>
				</Grid>
			</Paper>

			<Paper className='paper order-list-paper'>
				<Grid
					container
					spacing={2}
					sx={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<Grid item lg={3}>
						<Typography
							variant='body1'
							color='initial'
							className='order-id'
						>
							1050017AS
						</Typography>
					</Grid>
					<Grid item lg={2}>
						<Chip
							label='Cancelado'
							size='small'
							color='error'
							className='chip-cancel'
						/>
					</Grid>
					<Grid item lg={3}>
						<Typography
							variant='body1'
							color='initial'
							sx={{
								fontSize: "14px",
							}}
						>
							Oct 18, 2022
						</Typography>
					</Grid>
					<Grid
						item
						lg={3}
						sx={{
							fontSize: "14px",
						}}
					>
						$ 350.00
					</Grid>
					<Grid item lg={1}>
						<IconButton>
							<ArrowForwardIcon />
						</IconButton>
					</Grid>
				</Grid>
			</Paper>

			<Box
				sx={{
					mt: 5,
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Pagination count={5} variant='outlined' color='primary' />
			</Box>
		</DashboardLayout>
	);
};
