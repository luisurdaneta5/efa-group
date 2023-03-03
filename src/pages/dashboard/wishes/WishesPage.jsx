import { Box, FormControl, InputAdornment, OutlinedInput, Typography, Grid, Pagination, Alert } from "@mui/material";
import { DashboardLayout } from "../DashboardLayout";
import FavoriteBorderIcon from "@mui/icons-material/Favorite";
import { Search } from "@mui/icons-material";
import { ProductItem } from "../../../layouts/components/Products/ProductItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingFavs } from "../../../store/slices/ui";
import { useState } from "react";
import { Link } from "react-router-dom";

export const WishesPage = () => {
	const dispatch = useDispatch();
	const { isAuthenticated, user } = useSelector((state) => state.auth);
	const { isLoadingUi, favs, totalPages, page } = useSelector((state) => state.ui);

	const [search, setSearch] = useState("");

	useEffect(() => {
		dispatch(startLoadingFavs(user.uid));
	}, [dispatch]);

	const handlePagination = (page) => {
		const pageNumber = page - 1;
		dispatch(startLoadingFavs(user.uid, pageNumber));
	};

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const handleSubmit = (e) => {
		if (e.charCode == 13) {
			dispatch(startLoadingFavs(user.uid, search));
		}
	};
	return (
		<DashboardLayout wishes={true}>
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
					<FavoriteBorderIcon
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
						Favoritos
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
							value={search}
							onChange={handleChange}
							name='search'
							onKeyPress={handleSubmit}
						/>
					</FormControl>
				</Box>
			</Box>

			<Box
				sx={{
					mt: 3,
				}}
			>
				<Grid container spacing={2} rowSpacing={3}>
					{favs.length == 0 && (
						<Grid item lg={12}>
							<Alert severity='info'>Usted no posee favoritos agregados</Alert>
						</Grid>
					)}
					{isLoadingUi ? (
						<Typography variant='body1' color='initial'>
							Hola
						</Typography>
					) : (
						favs.map((fav) => (
							<Grid item lg={4} key={fav.id}>
								<Link to='/product/iditem'>
									<ProductItem
										product={fav.product}
										isAuthenticated={isAuthenticated}
										uid={user.uid}
										favId={fav.id}
									/>
								</Link>
							</Grid>
						))
					)}
				</Grid>
			</Box>
			<Box
				sx={{
					mt: 5,
					display: "flex",
					justifyContent: "center",
				}}
			>
				{page == 2 && (
					<Box
						sx={{
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
				)}
			</Box>
		</DashboardLayout>
	);
};
