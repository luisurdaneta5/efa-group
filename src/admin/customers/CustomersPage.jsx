import { LayoutAdminComponent } from "../../layouts/LayoutAdminComponent";
import {
	Box,
	Container,
	FormControl,
	InputAdornment,
	OutlinedInput,
	Typography,
	Button,
	Paper,
	Pagination,
	Divider,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { TabletCustomers } from "./components/TabletCustomers";

export const CustomersPage = () => {
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
						Lista de Usuarios
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
							placeholder='Buscar cliente...'
							startAdornment={
								<InputAdornment position='start'>
									<Search />
								</InputAdornment>
							}
						/>
					</FormControl>

					{/* <Button variant='contained' color='primary' size='small'>
						agregar producto
					</Button> */}
				</Box>

				<Box
					sx={{
						mt: 2,
					}}
				>
					<Paper>
						<TabletCustomers />
						<Divider />
						<Box
							sx={{
								mt: 2,
								display: "flex",
								justifyContent: "center",
								padding: "30px 0px",
							}}
						>
							<Pagination count={10} variant='outlined' />
						</Box>
					</Paper>
				</Box>
			</Container>
		</LayoutAdminComponent>
	);
};
