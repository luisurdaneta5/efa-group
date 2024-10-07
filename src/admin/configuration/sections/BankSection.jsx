import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Grid,
    IconButton,
    Modal,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Fetch from "../../../api/Fetch";
import { useForm2 } from "../../../hooks/useForm2";
import { startLoadingConfig } from "../../../store/slices/config";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 420,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

function createData(id, titular, dni, bank, account) {
    return { id, titular, dni, bank, account };
}

export const BankSection = () => {
    const dispatch = useDispatch();
    const [img, setImg] = useState("");
    const [error, setError] = useState(false);
    const { banks_accounts } = useSelector((state) => state.config);

    const rows = banks_accounts.map((account) => {
        return createData(account.id, account.titular, account.dni, account.img, account.account);
    });

    const [open, setOpen] = useState(false);
    const [formValues, handleInputChange, reset] = useForm2();
    const { name, titular, account, dni } = formValues;

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = ({ target }) => {
        setImg(target.files[0]);
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Estas Seguro?",
            text: "El registro no podra ser recuperado",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, borrar.",
        }).then((result) => {
            if (result.isConfirmed) {
                Fetch.delete("/notifications/delete", {
                    params: {
                        id,
                    },
                })
                    .then((res) => {
                        Swal.fire({
                            icon: "success",
                            text: res.data.msg,
                        });
                        dispatch(startLoadingConfig());
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
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(e);

        if (!img) {
            setError(true);
        } else {
            setOpen(false);
            let formData = new FormData();

            formData.append("img", img);
            formData.append("name", name);
            formData.append("titular", titular);
            formData.append("account", account);
            formData.append("dni", dni);

            Fetch.post("/accounts/add", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
                .then((res) => {
                    setImg("");
                    setError(false);
                    Swal.fire({
                        title: "",
                        html: "Imagen cargandose al servidor",
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading();
                        },
                    }).then((result) => {
                        dispatch(startLoadingConfig(id));
                        Swal.fire({
                            icon: "success",
                            text: res.data.msg,
                        });
                    });
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
        }
    };
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} lg={12} display="flex" justifyContent="end">
                <Button variant="contained" color="primary" size="small" onClick={handleOpen}>
                    Agregar
                </Button>
            </Grid>
            <Grid item lg={12}>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead
                            sx={{
                                backgroundColor: "#f3f5f9",
                            }}
                        >
                            <TableRow>
                                <TableCell align="left" sx={{ color: "#2B3445" }} width={200}>
                                    Banco
                                </TableCell>
                                <TableCell align="left" sx={{ color: "#2B3445" }}>
                                    Titular
                                </TableCell>
                                <TableCell align="left" sx={{ color: "#2B3445" }}>
                                    DNI
                                </TableCell>
                                <TableCell align="left" sx={{ color: "#2B3445" }}>
                                    N° Cuenta
                                </TableCell>
                                <TableCell align="left" sx={{ color: "#2B3445" }}>
                                    Opciones
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.length == 0 ? (
                                <TableRow>
                                    <TableCell colSpan={3} align="center" sx={{ borderBottom: "none" }}>
                                        No se encontro ningun resultado
                                    </TableCell>
                                </TableRow>
                            ) : (
                                rows.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell align="left" sx={{ color: "#2B3445" }}>
                                            <Box component="img" src={row.bank} width="100%" />
                                        </TableCell>
                                        <TableCell align="left" sx={{ color: "#2B3445" }}>
                                            {row.titular}
                                        </TableCell>
                                        <TableCell align="left" sx={{ color: "#2B3445" }}>
                                            {row.dni}
                                        </TableCell>
                                        <TableCell align="left" sx={{ color: "#2B3445" }}>
                                            {row.account}
                                        </TableCell>
                                        <TableCell align="left" sx={{ color: "#2B3445" }}>
                                            <IconButton aria-label="" onClick={() => handleDelete(row.id)}>
                                                <i className="fas fa-trash-alt"></i>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={0}>
                            <Grid
                                item
                                xs={12}
                                lg={12}
                                sx={{
                                    mb: 2,
                                }}
                            >
                                <TextField id="name" label="Banco" name="name" value={name} onChange={handleInputChange} size="small" fullWidth />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                lg={12}
                                sx={{
                                    mb: 2,
                                }}
                            >
                                <TextField id="titular" label="Titular" name="titular" value={titular} onChange={handleInputChange} size="small" fullWidth />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                lg={12}
                                sx={{
                                    mb: 2,
                                }}
                            >
                                <TextField id="dni" label="DNI" value={dni} name="dni" onChange={handleInputChange} size="small" fullWidth />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                lg={12}
                                sx={{
                                    mb: 2,
                                }}
                            >
                                <TextField id="account" label="N° Cuenta" name="account" value={account} onChange={handleInputChange} size="small" fullWidth />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                lg={12}
                                sx={{
                                    mb: 2,
                                }}
                            >
                                <FormControl fullWidth>
                                    <FormLabel></FormLabel>
                                    <input type="file" size="small" name="img" onChange={handleChange} accept="image/png,image/jpeg" />
                                    {error && <FormHelperText sx={{ mt: 2, color: "red" }}>Por favor ingrese una imagen</FormHelperText>}
                                </FormControl>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                lg={12}
                                sx={{
                                    mt: 2,
                                    textAlign: "center",
                                }}
                            >
                                <Button variant="contained" color="primary" type="submit" size="small">
                                    Registrar
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Modal>
        </Grid>
    );
};
