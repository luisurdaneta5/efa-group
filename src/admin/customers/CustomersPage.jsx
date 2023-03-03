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
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { startLoadingUsers } from "../../store/slices/ui/thunks";
import { useState } from "react";
import { SearchComponent } from "../components/SearchComponent";

export const CustomersPage = () => {
	const dispatch = useDispatch();
	const { users, totalPages, page, isLoading } = useSelector(
		(state) => state.ui
	);

	useEffect(() => {
		dispatch(startLoadingUsers());
	}, [dispatch]);

	const handlePagination = (page) => {
		const pageNumber = page - 1;
		dispatch(startLoadingUsers(pageNumber));
	};

	const [search, setSearch] = useState("");

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
					<SearchComponent
						placeholder={"Buscar usuario..."}
						search={search}
						handleChange={handleChange}
						module={"users"}
					/>

					<Link to='/admin/dashboard/customers/create'>
						<Button
							variant='contained'
							color='primary'
							size='small'
						>
							crear usuario
						</Button>
					</Link>
				</Box>

				<Box
					sx={{
						mt: 2,
					}}
				>
					<Paper>
						<TabletCustomers users={users} search={search} />
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
