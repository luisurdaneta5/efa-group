import {
    Box,
    Button,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Modal,
    Select,
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
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Fetch from "../../../api/Fetch";
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

function createData(id, email, notifications) {
    return { id, email, notifications };
}

export const EmailsNotifications = () => {
    const id = useParams();
    const dispatch = useDispatch();
    const { notifications_email } = useSelector((state) => state.config);

    const rows = notifications_email.map((email) => {
        return createData(email.id, email.email, email.notifications);
    });

    const [open, setOpen] = useState(false);
    const [data, setData] = useState({
        email: "",
        notification: "",
    });

    const { email, notification } = data;

    const handleInputChange = ({ target }) => {
        setData({
            ...data,
            email: target.value,
        });
    };

    const handleChange = ({ target }) => {
        setData({
            ...data,
            notification: target.value,
        });
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
        e.preventDefault();
        Fetch.post("/notifications/register", {
            email,
            notification,
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
                dispatch(startLoadingConfig(id));
                setOpen(false);
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
                                <TableCell align="left" sx={{ color: "#2B3445" }}>
                                    Correo
                                </TableCell>
                                <TableCell align="left" sx={{ color: "#2B3445" }}>
                                    Notificaciones
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
                                            {row.email}
                                        </TableCell>
                                        <TableCell align="left" sx={{ color: "#2B3445" }}>
                                            {row.notifications == 1 && "Ordenes"}
                                            {row.notifications == 2 && "Cambio Moneda"}
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
                            <Grid item xs={12} lg={12}>
                                <TextField id="email" label="Correo Electronico" value={email} onChange={handleInputChange} size="small" fullWidth />
                            </Grid>
                            <Grid item xs={12} lg={12}>
                                <FormControl fullWidth size="small" sx={{ mt: 2 }}>
                                    <InputLabel>Notificaciones</InputLabel>
                                    <Select id="demo-simple-select" value={notification} label="Notificaciones" onChange={handleChange}>
                                        <MenuItem value={1}>Ordenes Nuevas</MenuItem>
                                        <MenuItem value={2}>Cambios de moneda</MenuItem>
                                    </Select>
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
