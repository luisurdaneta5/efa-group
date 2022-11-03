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
import { TabletProductList } from "./components/TabletProductList";
import { Link } from "react-router-dom";

export const ProductListPage = () => {
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
						Lista de Productos
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

					<Link to='/admin/dashboard/products/create'>
						<Button
							variant='contained'
							color='primary'
							size='small'
						>
							agregar producto
						</Button>
					</Link>
				</Box>

				<Box
					sx={{
						mt: 2,
					}}
				>
					<Paper>
						<TabletProductList />
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
