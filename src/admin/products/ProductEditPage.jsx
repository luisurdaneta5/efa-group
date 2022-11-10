import { LayoutAdminComponent } from "../../layouts/LayoutAdminComponent";
import {
	Box,
	Container,
	Paper,
	Typography,
	Grid,
	TextField,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
	Button,
} from "@mui/material";

import { Dropzone } from "./components/Dropzone";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";

export const ProductEditPage = () => {
	const [formValues, handleInputChange] = useForm({
		cost: "",
		profit: "",
		price: "",
	});

	const { name, category, description, stock, cost, profit } = formValues;

	function calc() {
		if (profit == "" && cost == "") {
			const valor = 0;

			return valor;
		} else {
			const procent = profit / 100;
			let ganancia = cost * procent;
			const valor = parseFloat(cost) + parseFloat(ganancia);

			return valor;
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		const price = document.getElementById("price").value;
		console.log(price);
	};

	console.log();
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
						Editar Producto
					</Typography>
				</Box>

				<Box sx={{ mt: 3 }}>
					<form onSubmit={handleSubmit}>
						<Paper
							sx={{
								padding: "48px",
							}}
						>
							<Grid container spacing={2}>
								<Grid item lg={6}>
									<TextField
										id=''
										label='Nombre'
										size='small'
										fullWidth
										name='name'
										value={name}
										onChange={handleInputChange}
									/>
								</Grid>
								<Grid item lg={6}>
									<FormControl fullWidth size='small'>
										<InputLabel id='demo-simple-select-label'>
											Seleccione categoria
										</InputLabel>
										<Select
											labelId='demo-simple-select-label'
											id='demo-simple-select'
											value={category}
											label='Seleccione categoria'
											onChange={handleInputChange}
										>
											<MenuItem value={10}>Ten</MenuItem>
											<MenuItem value={20}>
												Twenty
											</MenuItem>
											<MenuItem value={30}>
												Thirty
											</MenuItem>
										</Select>
									</FormControl>
								</Grid>

								<Grid item lg={12}>
									<Dropzone />
								</Grid>

								<Grid item lg={12}>
									<TextField
										sx={{ mt: 2 }}
										id=''
										label='Descripcion'
										placeholder='Descripcion'
										size='small'
										multiline
										rows={4}
										fullWidth
										value={description}
										name='description'
										onChange={handleInputChange}
									/>
								</Grid>

								<Grid item lg={3} sx={{ mt: 2 }}>
									<TextField
										id=''
										label='Stock'
										type='number'
										fullWidth
										value={stock}
										name='stock'
										onChange={handleInputChange}
									/>
								</Grid>

								<Grid item lg={3} sx={{ mt: 2 }}>
									{" "}
									<TextField
										id=''
										type='number'
										label='Costo'
										fullWidth
										value={cost}
										name='cost'
										onChange={handleInputChange}
									/>
								</Grid>
								<Grid item lg={3} sx={{ mt: 2 }}>
									{" "}
									<TextField
										id=''
										type='number'
										label='Procentaje Ganancia'
										fullWidth
										value={profit}
										name='profit'
										onChange={handleInputChange}
									/>
								</Grid>
								<Grid item lg={3} sx={{ mt: 2 }}>
									<TextField
										id='price'
										type='text'
										label='Precio Final'
										fullWidth
										value={calc()}
										name='price'
										disabled
										onChange={handleInputChange}
									/>
								</Grid>
							</Grid>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									mt: 5,
								}}
							>
								<Button
									variant='outlined'
									color='primary'
									type='submit'
								>
									Guardar
								</Button>

								<Link to='/admin/dashboard/products/'>
									<Button
										variant='outlined'
										color='error'
										type='submit'
										size='small'
										sx={{
											ml: 2,
										}}
									>
										cancelar
									</Button>
								</Link>
							</Box>
						</Paper>
					</form>
				</Box>
			</Container>
		</LayoutAdminComponent>
	);
};
