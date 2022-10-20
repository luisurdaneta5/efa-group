import { Avatar, Box, Paper, Typography } from "@mui/material";
import { DashboardLayout } from "../DashboardLayout";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { ReactComponent as BoxClose } from "../../../assets/icons/box.svg";
import { ReactComponent as Check } from "../../../assets/icons/check.svg";

export const OrderDetailsPage = () => {
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
						Detalles del Pedido
					</Typography>
				</Box>
			</Box>

			<Box
				sx={{
					mt: 3,
				}}
			>
				<Paper
					className='paper'
					sx={{
						borderRadius: "8px",
						padding: " 2rem 1.5rem !important",
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							boxAlign: "center",
							alignItems: "center",
							flexWrap: "wrap",
							marginTop: "2rem",
							marginBottom: "2rem",
						}}
					>
						<Box
							sx={{
								position: "relative",
							}}
						>
							<Avatar
								sx={{
									width: "64px",
									height: "64px",
									backgroundColor: "#D23F57",
								}}
							>
								<BoxClose
									style={{
										width: "35px",
									}}
								/>
							</Avatar>

							<Box
								sx={{
									position: "absolute",
									right: 0,
									top: 0,
								}}
							>
								<Avatar
									sx={{
										display: "flex",
										alignItems: "center",

										justifyContent: "center",
										width: "22px",
										height: "22px",
										backgroundColor: "#F3F5F9",
										color: "red !important",
									}}
								>
									<Check
										style={{
											color: "rgb(51, 208, 103) !important",
										}}
									/>
								</Avatar>
							</Box>
						</Box>
					</Box>
				</Paper>
			</Box>
		</DashboardLayout>
	);
};
