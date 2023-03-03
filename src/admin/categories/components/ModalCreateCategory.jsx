import {
	Box,
	Modal,
	TextField,
	Button,
	FormControl,
	FormHelperText,
	OutlinedInput,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Fetch from "../../../api/Fetch";
import { startLoadingCategories } from "../../../store/slices/ui/thunks";
import "./styles.css";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 430,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export const ModalCreateCategory = ({ open, setOpen }) => {
	const dispatch = useDispatch();
	const handleClose = () => setOpen(false);

	const [errors, setErrors] = useState({
		eName: false,
		eIcon: false,
		msgName: "",
		msgIcon: "",
	});

	const { eName, eIcon, msgName, msgIcon } = errors;

	const [icon, setIcon] = useState("");
	const [name, setName] = useState("");

	const handleIconChange = ({ target }) => {
		setIcon(target.files[0]);
	};

	const handleNameChange = ({ target }) => {
		setName(target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!name) {
			return setErrors({
				eName: true,
				msgName: "Campo requerido",
			});
		}

		if (!icon) {
			return setErrors({
				eIcon: true,
				msgIcon: "Por favor ingrese un Icono",
			});
		}
		let formData = new FormData();

		formData.append("name", name);
		formData.append("icon", icon);

		Fetch.post("/categories/create", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		})
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
				dispatch(startLoadingCategories());
			})
			.catch((err) => {
				if (
					err.response.data.msg ==
					"Ya existe una categoria con ese nombre"
				) {
					setErrors({
						eName: true,
						msgName: "Ya existe una categoria con ese nombre",
					});
				} else {
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
				}
			});
	};

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<form enctype='multipart/form-data' onSubmit={handleSubmit}>
				<Box sx={style}>
					<FormControl fullWidth>
						<TextField
							id=''
							label=''
							name='name'
							value={name}
							onChange={handleNameChange}
							size='small'
							fullWidth
							placeholder='Nombre categoria'
							error={eName}
						/>
						{eName && (
							<FormHelperText sx={{ color: "red" }}>
								{msgName}
							</FormHelperText>
						)}
					</FormControl>

					<Box
						sx={{
							mt: 2,
						}}
					>
						<OutlinedInput
							id=''
							label=''
							name='icon'
							onChange={handleIconChange}
							type='file'
							className='dropzone'
							error={eIcon}
						/>
					</Box>
					{eIcon && (
						<FormHelperText sx={{ color: "red" }}>
							{msgIcon}
						</FormHelperText>
					)}

					<Box
						sx={{
							mt: 2,
						}}
					>
						<Button
							type='submit'
							variant='outlined'
							color='primary'
							fullWidth
						>
							Crear
						</Button>
					</Box>
				</Box>
			</form>
		</Modal>
	);
};
