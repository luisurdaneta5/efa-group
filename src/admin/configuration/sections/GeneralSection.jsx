import { Box, Grid, TextField, Button, Skeleton } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Fetch from "../../../api/Fetch";
import { useForm } from "../../../hooks/useForm";
import { startLoadingConfig } from "../../../store/slices/config";

export const GeneralSection = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { isLoading, general } = useSelector((state) => state.config);

	const [formValues, handleInputChange] = useForm(general);

	const { address, email, description } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();

		Fetch.put("/settings/general", { id, address, email, description })
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
					<Grid item lg={6}>
						{isLoading ? (
							<Skeleton variant='rectangular' fullWidth height={40} />
						) : (
							<TextField
								id=''
								label='Direccion'
								fullWidth
								size='small'
								sx={{
									mt: 3,
								}}
								name='address'
								value={address}
								onChange={handleInputChange}
							/>
						)}
					</Grid>
					<Grid item lg={6}>
						{isLoading ? (
							<Skeleton variant='rectangular' fullWidth height={40} />
						) : (
							<TextField
								id=''
								type='email'
								label='Correo electronico'
								fullWidth
								size='small'
								sx={{
									mt: 3,
								}}
								name='email'
								value={email}
								onChange={handleInputChange}
							/>
						)}
					</Grid>
					<Grid item lg={12}>
						{isLoading ? (
							<Skeleton variant='rectangular' fullWidth height={40} />
						) : (
							<TextField
								id=''
								label='Descripcion'
								fullWidth
								size='small'
								multiline
								rows={4}
								sx={{
									mt: 2,
								}}
								name='description'
								value={description}
								onChange={handleInputChange}
							/>
						)}
					</Grid>
				</Grid>

				<Box
					sx={{
						mt: 4,
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Button variant='contained' color='primary' type='submit'>
						guardar
					</Button>
				</Box>
			</form>
		</Box>
	);
};
