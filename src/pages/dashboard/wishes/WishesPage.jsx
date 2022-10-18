import {
	Box,
	FormControl,
	InputAdornment,
	OutlinedInput,
	Typography,
	Grid,
} from "@mui/material";
import { DashboardLayout } from "../DashboardLayout";
import FavoriteBorderIcon from "@mui/icons-material/Favorite";
import { Search } from "@mui/icons-material";
import { ProductItem } from "../../../layouts/components/Products/ProductItem";

export const WishesPage = () => {
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
						/>
					</FormControl>
				</Box>
			</Box>

			<Box
				sx={{
					mt: 3,
				}}
			>
				<Grid container spacing={3} rowSpacing={3}>
					<Grid item lg={4}>
						<ProductItem />
					</Grid>
					<Grid item lg={4}>
						<ProductItem />
					</Grid>
					<Grid item lg={4}>
						<ProductItem />
					</Grid>
					<Grid item lg={4}>
						<ProductItem />
					</Grid>
					<Grid item lg={4}>
						<ProductItem />
					</Grid>
					<Grid item lg={4}>
						<ProductItem />
					</Grid>
				</Grid>
			</Box>
		</DashboardLayout>
	);
};
