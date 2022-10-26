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
	Pagination,
	TextField,
	Divider,
	Checkbox,
	Rating,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { ProductItem } from "../../layouts/components/Products/ProductItem";
import { Link } from "react-router-dom";

export const SearchPage = () => {
	const [age, setAge] = useState("");

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	const label = { inputProps: { "aria-label": "Checkbox demo" } };
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
								<Box
									sx={{
										display: "flex",
										justifyContent: "flex-end",
										alignItems: "center",
									}}
								>
									<Typography>Ordenar:</Typography>
									<Box sx={{ minWidth: 150, ml: 1 }}>
										<FormControl fullWidth size='small'>
											<Select
												labelId='demo-simple-select-label'
												id='demo-simple-select'
												placeholder='Seleccione opcion...'
												value={age}
												onChange={handleChange}
												size='small'
											>
												<MenuItem
													value={"mostly"}
													sx={{
														fontSize: "14px",
													}}
												>
													Mas Vendido
												</MenuItem>
												<MenuItem
													value={20}
													sx={{
														fontSize: "14px",
													}}
												>
													Precio Bajo a Alto
												</MenuItem>
												<MenuItem
													value={30}
													sx={{
														fontSize: "14px",
													}}
												>
													Precio Alto a Bajo
												</MenuItem>
											</Select>
										</FormControl>
									</Box>

									<Box sx={{ ml: 2 }}>
										<MenuIcon />
									</Box>
								</Box>
							</Grid>
						</Grid>
					</Paper>
				</Box>

				<Box sx={{ mt: 5 }}>
					<Grid container spacing={3}>
						<Grid item lg={3}>
							<Paper className='paper'>
								<Box>
									<Typography
										sx={{
											fontSize: "14px",
											fontWeight: 500,
										}}
									>
										Rango de precio
									</Typography>
								</Box>
								<Box
									sx={{
										display: "flex",
										mt: 2,
										alignItems: "center",
									}}
								>
									<TextField type='number' size='small' />
									<Typography
										sx={{
											padding: "10px",
										}}
									>
										-
									</Typography>
									<TextField type='number' size='small' />
								</Box>
								<Divider
									sx={{
										mt: 2.5,
									}}
								/>
								<Box>
									<Box
										sx={{
											mt: 2.5,
										}}
									>
										<Typography
											sx={{
												fontSize: "14px",
												fontWeight: 500,
											}}
										>
											Calificaciones
										</Typography>
									</Box>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
										}}
									>
										<Box
											sx={{
												mr: 1,
											}}
										>
											<Checkbox
												{...label}
												sx={{
													padding: "0px",
													mt: 2,
												}}
												size='small'
											/>
										</Box>

										<Rating
											value={5}
											readOnly
											size='small'
											sx={{
												mt: 1.5,
												alignItems: "center",
											}}
										/>
									</Box>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
										}}
									>
										<Box
											sx={{
												mr: 1,
											}}
										>
											<Checkbox
												{...label}
												sx={{
													padding: "0px",
													mt: 2,
												}}
												size='small'
											/>
										</Box>

										<Rating
											value={4}
											readOnly
											size='small'
											sx={{
												mt: 1.5,
												alignItems: "center",
											}}
										/>
									</Box>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
										}}
									>
										<Box
											sx={{
												mr: 1,
											}}
										>
											<Checkbox
												{...label}
												sx={{
													padding: "0px",
													mt: 2,
												}}
												size='small'
											/>
										</Box>

										<Rating
											value={3}
											readOnly
											size='small'
											sx={{
												mt: 1.5,
												alignItems: "center",
											}}
										/>
									</Box>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
										}}
									>
										<Box
											sx={{
												mr: 1,
											}}
										>
											<Checkbox
												{...label}
												sx={{
													padding: "0px",
													mt: 2,
												}}
												size='small'
											/>
										</Box>

										<Rating
											value={2}
											readOnly
											size='small'
											sx={{
												mt: 1.5,
												alignItems: "center",
											}}
										/>
									</Box>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
										}}
									>
										<Box
											sx={{
												mr: 1,
											}}
										>
											<Checkbox
												{...label}
												sx={{
													padding: "0px",
													mt: 2,
												}}
												size='small'
											/>
										</Box>

										<Rating
											value={1}
											readOnly
											size='small'
											sx={{
												mt: 1.5,
												alignItems: "center",
											}}
										/>
									</Box>
								</Box>
							</Paper>
						</Grid>
						<Grid item lg={9}>
							<Grid container spacing={2}>
								<Grid item lg={4}>
									<Link to='/product/iditem'>
										<ProductItem />
									</Link>
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
							<Box
								sx={{
									mt: 4,
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								<Typography
									sx={{
										fontSize: "14px",
										color: "#7D879C",
									}}
								>
									Mostrar 1-9 de 100 Productos
								</Typography>

								<Pagination
									count={5}
									variant='outlined'
									color='primary'
								/>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</LayoutComponent>
	);
};
