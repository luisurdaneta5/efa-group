import { useState } from "react";
import { useEffect } from "react";
import { LayoutAdminComponent } from "../../layouts/LayoutAdminComponent";
import { Box, Container, FormControl, InputAdornment, OutlinedInput, Typography, Button, Paper, Pagination, Divider } from "@mui/material";
import { Search } from "@mui/icons-material";
import { TabletProductList } from "./components/TabletProductList";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { startLoadingProducts } from "../../store/slices/ui/thunks";
import { useDispatch, useSelector } from "react-redux";
import { SearchComponent } from "../components/SearchComponent";

export const ProductListPage = () => {
	const dispatch = useDispatch();
	const { page, totalPages, products } = useSelector((state) => state.ui);

	useEffect(() => {
		dispatch(startLoadingProducts());
	}, [dispatch]);

	const handlePagination = (page) => {
		const pageNumber = page - 1;
		dispatch(startLoadingProducts(pageNumber));
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
					<SearchComponent placeholder={"Buscar producto..."} search={search} handleChange={handleChange} module={"products"} />

					<Link to='/admin/dashboard/products/create'>
						<Button variant='contained' color='primary' size='small'>
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
						<TabletProductList products={products} search={search} />
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
