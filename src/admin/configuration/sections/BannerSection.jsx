import { Delete } from "@mui/icons-material";
import { Alert, Box, Button, FormControl, FormHelperText, FormLabel, Grid, IconButton, Modal } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Fetch from "../../../api/Fetch";
import { startLoadingConfig } from "../../../store/slices/config";

import "./styles.css";

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

export const BannerSection = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { banners } = useSelector((state) => state.config);
    const [open, setOpen] = useState(false);
    const [img, setImg] = useState("");

    const [error, setError] = useState(false);

    const handleChange = ({ target }) => {
        setImg(target.files[0]);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

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
                Fetch.delete("/settings/banner/delete", {
                    params: {
                        id,
                    },
                })
                    .then((res) => {
                        Swal.fire({
                            icon: "success",
                            text: res.data.msg,
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

            formData.append("banner", img);

            Fetch.post("/settings/banner/create", formData, {
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
        <Box sx={{ mt: 3 }}>
            {banners.length == 0 && (
                <Alert
                    severity="info"
                    sx={{
                        textAlign: "center",
                        mb: 2,
                    }}
                >
                    No existen banners cargados para esta web
                </Alert>
            )}

            <Grid container spacing={2}>
                {banners.map((banner) => (
                    <Grid item lg={4} key={banner.id}>
                        <Box className="img-container">
                            <Box component="img" src={banner.url} sx={{ width: "100%" }} />
                            <Box className="icon">
                                <IconButton
                                    aria-label=""
                                    size="small"
                                    onClick={() => {
                                        handleDelete(banner.id);
                                    }}
                                >
                                    <Delete sx={{ color: "white", padding: 0 }} />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 3,
                }}
            >
                <Button variant="contained" color="primary" onClick={handleOpen}>
                    Agregar Imagen
                </Button>
            </Box>

            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth>
                            <FormLabel></FormLabel>
                            <input type="file" size="small" name="img" onChange={handleChange} accept="image/png,image/jpeg" />
                            {error && <FormHelperText sx={{ mt: 2, color: "red" }}>Por favor ingrese una imagen</FormHelperText>}
                        </FormControl>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                mt: 3,
                            }}
                        >
                            <Button variant="contained" color="primary" type="submit">
                                Subir Imagen
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </Box>
    );
};
