import { LayoutComponent } from "../../layouts/LayoutComponent";
import {
	Container,
	Box,
	Paper,
	Grid,
	Typography,
	FormControl,
	Select,
	MenuItem,
} from "@mui/material";
import { useState } from "react";

export const SearchPage = () => {
	const [age, setAge] = useState("");

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<LayoutComponent>
			<Container
				maxWidth='lg'
				sx={{ mt: 22 }}
				className='animate__animated animate__fadeIn'
			>
				<Box>
					<Paper className='paper'>
						<Grid container spacing={0}>
							<Grid item lg={8}>
								<Box>
									<Typography
										sx={{
											fontSize: "16px",
											fontWeight: 500,
											lineHeight: 1.5,
										}}
									>
										Buscando.. "Camara Domo Hikvision"
									</Typography>
									<Typography
										sx={{
											fontSize: "14px",
											color: "#7D879C;",
										}}
									>
										50 resultados encontrados
									</Typography>
								</Box>
							</Grid>
							<Grid item lg={4}>
								<Box>
									<Typography>Ordenar:</Typography>
									<Box sx={{ minWidth: 120 }}>
										<FormControl fullWidth>
											<Select
												labelId='demo-simple-select-label'
												id='demo-simple-select'
												value={age}
												onChange={handleChange}
											>
												<MenuItem value={10}>
													Ten
												</MenuItem>
												<MenuItem value={20}>
													Twenty
												</MenuItem>
												<MenuItem value={30}>
													Thirty
												</MenuItem>
											</Select>
										</FormControl>
									</Box>
								</Box>
							</Grid>
						</Grid>
					</Paper>
				</Box>
			</Container>
		</LayoutComponent>
	);
};
