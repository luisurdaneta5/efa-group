import { LayoutAdminComponent } from "../../layouts/LayoutAdminComponent";
import {
	Box,
	Container,
	FormControl,
	InputAdornment,
	OutlinedInput,
	Paper,
	Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { TabletOrders } from "./components/TabletOrders";

export const OrderHistoryPage = () => {
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
						Historial de Ordenes
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						mt: 2,
					}}
				>
					<FormControl
						size='small'
						sx={{
							width: "50%",
							backgroundColor: "white",
						}}
					>
						<OutlinedInput
							size='small'
							id='input-with-icon-adornment'
							placeholder='Buscar producto...'
							startAdornment={
								<InputAdornment position='start'>
									<Search />
								</InputAdornment>
							}
						/>
					</FormControl>
				</Box>

				<Box sx={{ mt: 2 }}>
					<Paper>
						<TabletOrders />
					</Paper>
				</Box>
			</Container>
		</LayoutAdminComponent>
	);
};
