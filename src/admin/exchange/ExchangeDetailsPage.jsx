import { Box, Button, Container, Divider, Grid, Paper, Typography } from "@mui/material";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Fetch from "../../api/Fetch";
import { formatNumber } from "../../helpers/formatNumbers";
import { LayoutAdminComponent } from "../../layouts/LayoutAdminComponent";

export const ExchangeDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({});

    useEffect(() => {
        Fetch.get(`/refills/get/${id}`)
            .then((res) => {
                setData(res.data.refill);
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
    }, []);

    const handleSetStatus = (status) => {
        Fetch.put("/refills/set-status", {
            id: id,
            uid: data.user?.id,
            status: status,
            amount: data.amount,
            email: data.user?.email,
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
                navigate("/admin/dashboard/exchange", {
                    replace: true,
                });
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
        <LayoutAdminComponent>
            <Container maxWidth="xl">
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
                        Detalles del Cambio
                    </Typography>
                </Box>

                <Box sx={{ mt: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item lg={6}>
                            <Paper className="paper">
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Box sx={{ display: "flex" }}>
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                color: "rgb(125, 135, 156)",
                                            }}
                                        >
                                            N° Orden:
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "15px",
                                                ml: 1,
                                            }}
                                        >
                                            {id.slice(0, 8).toUpperCase()}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: "flex" }}>
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                color: "rgb(125, 135, 156)",
                                            }}
                                        >
                                            Referencia de Pago:
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "15px",
                                                ml: 1,
                                            }}
                                        >
                                            {data.reference}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Grid
                                    container
                                    spacing={2}
                                    sx={{
                                        mt: 2,
                                    }}
                                >
                                    <Grid item lg={3}>
                                        <Box sx={{ display: "flex" }}>
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    color: "rgb(125, 135, 156)",
                                                }}
                                            >
                                                Nombre:
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "15px",
                                                    ml: 1,
                                                }}
                                            >
                                                {data.user?.name}
                                            </Typography>
                                        </Box>
                                    </Grid>

                                    <Grid item lg={5}>
                                        <Box sx={{ display: "flex" }}>
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    color: "rgb(125, 135, 156)",
                                                }}
                                            >
                                                Email:
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "15px",
                                                    ml: 1,
                                                }}
                                            >
                                                {data.user?.email}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={4}>
                                        <Box sx={{ display: "flex" }}>
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    color: "rgb(125, 135, 156)",
                                                }}
                                            >
                                                Fecha de Solicitud
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "15px",
                                                    ml: 1,
                                                }}
                                            >
                                                {moment(data.date).format("DD/MM/YYYY")}
                                            </Typography>
                                        </Box>
                                    </Grid>

                                    <Grid item lg={3}>
                                        <Box sx={{ display: "flex" }}>
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    color: "rgb(125, 135, 156)",
                                                }}
                                            >
                                                Banco:
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "15px",
                                                    ml: 1,
                                                }}
                                            >
                                                {data.bank}
                                            </Typography>
                                        </Box>
                                    </Grid>

                                    <Grid item lg={3}>
                                        <Box sx={{ display: "flex" }}>
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    color: "rgb(125, 135, 156)",
                                                }}
                                            >
                                                Monto:
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "15px",
                                                    ml: 1,
                                                }}
                                            >
                                                {formatNumber(data.amount, "EN-US", "USD")}
                                            </Typography>
                                        </Box>
                                    </Grid>

                                    <Grid item lg={3}>
                                        <Box sx={{ display: "flex" }}>
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    color: "rgb(125, 135, 156)",
                                                }}
                                            >
                                                Conversion:
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "15px",
                                                    ml: 1,
                                                }}
                                            >
                                                {formatNumber(data.conversion, "ES-VE", "VES")}
                                            </Typography>
                                        </Box>
                                    </Grid>

                                    <Grid item lg={3}>
                                        <Box sx={{ display: "flex" }}>
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    color: "rgb(125, 135, 156)",
                                                }}
                                            >
                                                Tasa:
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "15px",
                                                    ml: 1,
                                                }}
                                            >
                                                {formatNumber(data.tasa, "ES-VE", "VES")}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    spacing={0}
                                    sx={{
                                        mt: 4,
                                    }}
                                >
                                    <Grid item lg={12}>
                                        <Divider />
                                        <Box
                                            sx={{
                                                mt: 2,
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: "16px",
                                                    fontWeight: 500,
                                                    mb: 2,
                                                }}
                                            >
                                                Captura de Pantalla Comprobante
                                            </Typography>
                                        </Box>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                mt: 3,
                                                mb: 2,
                                            }}
                                        >
                                            <Box component="img" src={data.voucher} />
                                        </Box>
                                    </Grid>
                                </Grid>
                                {data.status == 0 && (
                                    <Grid
                                        container
                                        spacing={1}
                                        sx={{
                                            mt: 5,
                                        }}
                                    >
                                        <Grid item lg={6}>
                                            <Button
                                                variant="contained"
                                                color="success"
                                                fullWidth
                                                onClick={() => {
                                                    handleSetStatus(1);
                                                }}
                                            >
                                                APROBADO
                                            </Button>
                                        </Grid>
                                        <Grid item lg={6}>
                                            <Button
                                                variant="contained"
                                                color="error"
                                                fullWidth
                                                onClick={() => {
                                                    handleSetStatus(2);
                                                }}
                                            >
                                                RECHAZADO
                                            </Button>
                                        </Grid>
                                    </Grid>
                                )}
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </LayoutAdminComponent>
    );
};
