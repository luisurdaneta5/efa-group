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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingReviews } from "../../store/slices/ui/thunks";
import { SearchComponent } from "../components/SearchComponent";

export const ReviewsPage = () => {
	const dispatch = useDispatch();
	const { reviews, page, totalPages } = useSelector((state) => state.ui);
	const [search, setSearch] = useState("");

	useEffect(() => {
		dispatch(startLoadingReviews());
	}, [dispatch]);

	const handlePagination = (page) => {
		const pageNumber = page - 1;
		dispatch(startLoadingReviews(pageNumber));
	};

	const handleChange = (e) => {
		setSearch(e.target.value);
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
					<SearchComponent placeholder={"Buscar producto..."} search={search} handleChange={handleChange} module={"reviews"} />
				</Box>
				<Box
					sx={{
						mt: 2,
					}}
				>
					<Paper>
						<TabletReviews reviews={reviews} search={search} />
						<Divider />
						<Box
							sx={{
								mt: 2,
								display: "flex",
								justifyContent: "center",
								padding: "30px 0px",
							}}
						>
							<Pagination
								onChange={(e, value) => {
									handlePagination(value);
								}}
								count={totalPages}
								variant='outlined'
								color='primary'
								hideNextButton={false}
								hidePrevButton={false}
							/>
						</Box>
					</Paper>
				</Box>
			</Container>
		</LayoutAdminComponent>
	);
};
