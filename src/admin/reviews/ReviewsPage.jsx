import {
	Container,
	Avatar,
	Box,
	Chip,
	Switch,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	IconButton,
	OutlinedInput,
	InputAdornment,
	FormControl,
	Paper,
	Divider,
	Pagination,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { TabletReviews } from "./components/TabletReviews";
import { Search } from "@mui/icons-material";
import { LayoutAdminComponent } from "../../layouts/LayoutAdminComponent";

export const ReviewsPage = () => {
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
						Lista de Reseñas
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
							placeholder='Buscar reseña...'
							startAdornment={
								<InputAdornment position='start'>
									<Search />
								</InputAdornment>
							}
						/>
					</FormControl>
				</Box>
				<Box
					sx={{
						mt: 2,
					}}
				>
					<Paper>
						<TabletReviews />
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
