import { Box, Modal, Rating, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Fetch from "../../../../api/Fetch";
import { useForm } from "../../../../hooks/useForm";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export const ModalRanked = ({ open, setOpen, product, order }) => {
	const { user } = useSelector((state) => state.auth);
	const handleClose = () => setOpen(false);
	const [rating, setValue] = useState();

	const [formValues, handleInputChange] = useForm();

	const { comment } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = {
			userId: user.uid,
			productId: product.id,
			rating: rating,
			comment: comment,
			status: 1,
		};

		Fetch.post("/reviews/create", data)
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
				setOpen(false);
				dispatch(startLoadingOrderById(user.uid, order));
			})
			.catch((err) => {
				toast.error("Ha ocurrido un error inesperado porfavor intente mas tarde", {
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
		<Modal open={open} onClose={handleClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
			<form onSubmit={handleSubmit}>
				<Box sx={style}>
					<Box>
						<Typography variant='body1' color='initial'>
							{product.name}
						</Typography>
					</Box>
					<Box
						sx={{
							mt: 2,
						}}
					>
						<Rating
							name='simple-controlled'
							value={rating}
							onChange={(event, newValue) => {
								setValue(newValue);
							}}
						/>
					</Box>
					<Box
						sx={{
							mt: 2,
						}}
					>
						<TextField id='' label='Comentario' name='comment' value={comment} onChange={handleInputChange} multiline rows={4} fullWidth />
					</Box>

					<Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
						<Button variant='outlined' color='primary' size='small' type='submit'>
							Guardar
						</Button>
						<Button variant='outlined' color='error' size='small' sx={{ ml: 2 }} onClick={handleClose}>
							cancelar
						</Button>
					</Box>
				</Box>
			</form>
		</Modal>
	);
};
