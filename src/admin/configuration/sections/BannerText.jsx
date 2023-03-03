import { Box, Grid, TextField, Button, Switch, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Fetch from "../../../api/Fetch";
import { useForm } from "../../../hooks/useForm";

export const BannerText = () => {
	const { id } = useParams();
	const { slider } = useSelector((state) => state.config);
	const [formValues, handleInputChange] = useForm(slider);
	const { text1, text2, visible } = formValues;
	const [checked, setChecked] = useState(visible);

	const handleCheck = () => {
		setChecked(!checked);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		Fetch.put("/settings/text", { id, text1, text2, checked })
			.then((res) => {
				toast.success(res.data.msg, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
				dispatch(startLoadingConfig(id));
			})
			.catch((err) => {
				toast.error(err.response.data.msg, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			});
	};
	return (
		<Box>
			<form onSubmit={handleSubmit}>
				<Grid container spacing={2}>
					<Grid item lg={5}>
						<TextField
							id=''
							label='Frase 1'
							fullWidth
							size='small'
							sx={{ mt: 3 }}
							value={text1}
							name='text1'
							onChange={handleInputChange}
						/>
					</Grid>
					<Grid item lg={5}>
						<TextField
							id=''
							label='Frase 2'
							fullWidth
							size='small'
							sx={{ mt: 3 }}
							value={text2}
							name='text2'
							onChange={handleInputChange}
						/>
					</Grid>
					<Grid
						item
						lg={2}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							alignContent: "center",
						}}
					>
						<Typography variant='body1' color='initial'>
							Visible
						</Typography>
						<Switch checked={checked} onChange={handleCheck} inputProps={{ "aria-label": "" }} />
					</Grid>
				</Grid>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						mt: 3,
					}}
				>
					<Button variant='contained' color='primary' type='submit'>
						Guardar
					</Button>
				</Box>
			</form>
		</Box>
	);
};
