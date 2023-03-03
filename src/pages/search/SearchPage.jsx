import { LayoutComponent } from "../../layouts/LayoutComponent";
import { Container, Box, Paper, Grid, Typography, FormControl, Select, MenuItem, Pagination, TextField, Divider, Checkbox, Rating, Alert, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { ProductItem } from "../../layouts/components/Products/ProductItem";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingProducts } from "../../store/slices/ui";

export const SearchPage = () => {
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.ui);
	const { category } = useParams();
	const [age, setAge] = useState("");

	useEffect(() => {
		dispatch(startLoadingProducts(category));
	}, []);

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	const label = { inputProps: { "aria-label": "Checkbox demo" } };
	return (
		<LayoutComponent>
			<Container maxWidth='lg' sx={{ mt: 22 }} className='animate__animated animate__fadeIn'>
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
										Buscando.. "{category == undefined ? "Todos los productos" : category}"
									</Typography>
									<Typography
										sx={{
											fontSize: "14px",
											color: "#7D879C;",
										}}
									>
										{products.length} resultados encontrados
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
									<TextField type='number' size='small' value={0} />
									<Typography
										sx={{
											padding: "10px",
										}}
									>
										-
									</Typography>
									<TextField type='number' size='small' value={0} />
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
									<Box sx={{ mt: 2 }}>
										<Button variant='contained' color='primary' fullWidth size='small'>
											FILTRAR
										</Button>
									</Box>
								</Box>
							</Paper>
						</Grid>
						<Grid item lg={9}>
							{products.length == 0 ? (
								<Grid item lg={12}>
									<Alert severity='info'>No hay resultados para la busqueda de {category}</Alert>
								</Grid>
							) : (
								<Grid container spacing={2} rowSpacing={3}>
									{products.map((product) => (
										<Grid item key={product.id} lg={4}>
											<ProductItem product={product} />
										</Grid>
									))}
								</Grid>
							)}

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
									Mostrar 1-9 de {products.length} Productos
								</Typography>

								<Pagination count={5} variant='outlined' color='primary' />
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</LayoutComponent>
	);
};
