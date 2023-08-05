import { Search } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Alert, Box, Chip, FormControl, Grid, IconButton, InputAdornment, OutlinedInput, Pagination, Paper, Skeleton, Typography } from "@mui/material";
import "moment/locale/es-mx";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatNumber } from "../../../helpers/formatNumbers";
import { startLoadingOrders } from "../../../store/slices/ui";
import { DashboardLayout } from "../DashboardLayout";
import "./styles.css";

export const OrdersPage = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { isLoadingUi, orders, page, totalPages } = useSelector((state) => state.ui);

    const [search, setSearch] = useState("");

    useEffect(() => {
        dispatch(startLoadingOrders(user.uid));
    }, [dispatch]);

    const handlePagination = (page) => {
        const pageNumber = page - 1;
        dispatch(startLoadingOrders(user.uid, pageNumber));
    };

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        if (e.charCode == 13) {
            dispatch(startLoadingOrders(user.uid, 0, search));
        }
    };
    return (
        <DashboardLayout order={true}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <ShoppingBagIcon
                        sx={{
                            color: "#D23F57",
                        }}
                    />
                    <Typography
                        color="initial"
                        sx={{
                            ml: 1,
                            fontSize: {
                                xs: "10px",
                                sm: "20px",
                                md: "25px",
                                lg: "25px",
                            },
                            fontWeight: "bold",
                        }}
                    >
                        Mis Ordenes
                    </Typography>
                </Box>
                <Box>
                    <FormControl variant="standard">
                        <OutlinedInput
                            size="small"
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            }
                            value={search}
                            onChange={handleChange}
                            name="search"
                            onKeyPress={handleSubmit}
                        />
                    </FormControl>
                </Box>
            </Box>

            <Grid
                container
                spacing={2}
                sx={{
                    mt: 1,
                    padding: "0px 18px",
                }}
            >
                <Grid item xs={3} sm={2} md={2} lg={2}>
                    <Typography
                        color="initial"
                        sx={{
                            fontSize: "16px",
                            color: "rgb(125, 135, 156)",
                            textAlign: "left",
                            fontWeight: 500,
                            margin: "0px 0px",
                        }}
                    >
                        Orden #
                    </Typography>
                </Grid>
                <Grid item xs={2} sm={3} md={3} lg={3}>
                    <Typography
                        color="initial"
                        sx={{
                            fontSize: "16px",
                            color: "rgb(125, 135, 156)",
                            textAlign: "left",
                            fontWeight: 500,
                            margin: "0px 0px",
                        }}
                    >
                        Status
                    </Typography>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                    <Typography
                        color="initial"
                        sx={{
                            fontSize: {
                                xs: "16px",
                                sm: "14px",
                                md: "16px",
                                lg: "16px",
                            },
                            color: "rgb(125, 135, 156)",
                            textAlign: "left",
                            fontWeight: 500,
                        }}
                    >
                        Fecha
                    </Typography>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                    <Typography
                        color="initial"
                        sx={{
                            fontSize: "16px",
                            color: "rgb(125, 135, 156)",
                            alignItems: "left",
                            fontWeight: 500,
                            margin: "0px 16px",
                        }}
                    >
                        Total
                    </Typography>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
            </Grid>
            {orders.length == 0 && (
                <Grid item lg={12} sx={{ mt: 3 }}>
                    <Alert severity="info">Usted no posee Ordenes {search && <span> con {search}</span>} </Alert>
                </Grid>
            )}
            {orders.map((order) =>
                isLoadingUi ? (
                    <Skeleton key={order.id} animation="wave" width={"100%"} height={42} className="order-list-paper" />
                ) : (
                    <Link key={order.id} to={`/dashboard/order/detail/${order.id}`}>
                        <Paper className="paper order-list-paper">
                            <Grid
                                container
                                spacing={2}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Grid item xs={3} sm={2} md={2} lg={2}>
                                    <Typography
                                        variant="body1"
                                        color="initial"
                                        className="order-id"
                                        sx={{
                                            fontSize: {
                                                xs: "12px",
                                                sm: "14px",
                                                md: "16px",
                                                lg: "16px",
                                            },
                                        }}
                                    >
                                        {order.id.substr(0, 8).toUpperCase()}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2} sm={3} md={3} lg={3}>
                                    {order.status == 0 && (
                                        <Chip
                                            label="Pendiente"
                                            size="small"
                                            color="warning"
                                            className="chip-warning"
                                            sx={{
                                                fontSize: {
                                                    xs: "10px",
                                                    sm: "10px",
                                                    md: "12px",
                                                    lg: "12px",
                                                },
                                            }}
                                        />
                                    )}

                                    {order.status == 1 && (
                                        <Chip
                                            label="Entregado"
                                            size="small"
                                            color="warning"
                                            className="chip-success"
                                            sx={{
                                                fontSize: {
                                                    xs: "10px",
                                                    sm: "10px",
                                                    md: "12px",
                                                    lg: "12px",
                                                },
                                            }}
                                        />
                                    )}

                                    {order.status == 2 && (
                                        <Chip
                                            label="Cancelado"
                                            size="small"
                                            color="warning"
                                            className="chip-cancel"
                                            sx={{
                                                fontSize: {
                                                    xs: "10px",
                                                    sm: "10px",
                                                    md: "12px",
                                                    lg: "12px",
                                                },
                                            }}
                                        />
                                    )}

                                    {order.status == 3 && (
                                        <Chip
                                            label="Procesando"
                                            size="small"
                                            color="warning"
                                            className="chip-process"
                                            sx={{
                                                fontSize: {
                                                    xs: "10px",
                                                    sm: "9px",
                                                    md: "12px",
                                                    lg: "12px",
                                                },
                                            }}
                                        />
                                    )}
                                </Grid>

                                <Grid item xs={3} sm={3} md={3} lg={3}>
                                    <Typography
                                        variant="body1"
                                        color="initial"
                                        sx={{
                                            fontSize: {
                                                xs: "10px",
                                                sm: "11px",
                                                md: "14px",
                                                lg: "16px",
                                            },
                                        }}
                                    >
                                        {moment(order.createdAt).format("LL")}
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    xs={3}
                                    sm={3}
                                    md={3}
                                    lg={3}
                                    sx={{
                                        fontSize: {
                                            xs: "10px",
                                            sm: "11px",
                                            md: "16px",
                                            lg: "16px",
                                        },
                                    }}
                                >
                                    {formatNumber(order.total, "EN-US", "USD")}
                                </Grid>
                                <Grid
                                    item
                                    xs={1}
                                    sm={1}
                                    md={1}
                                    lg={1}
                                    sx={{
                                        margin: "0 0 0 auto",
                                    }}
                                >
                                    <IconButton>
                                        <ArrowForwardIcon
                                            sx={{
                                                fontSize: {
                                                    xs: "10px",
                                                    sm: "14px",
                                                    md: "16px",
                                                    lg: "16px",
                                                },
                                            }}
                                        />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Link>
                )
            )}

            <Box
                sx={{
                    mt: 5,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                {totalPages > 2 && (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            padding: "30px 0px",
                        }}
                    >
                        <Pagination
                            onChange={(e, value) => {
                                handlePagination(value);
                            }}
                            count={totalPages}
                            variant="outlined"
                            color="primary"
                            hideNextButton={false}
                            hidePrevButton={false}
                        />
                    </Box>
                )}
            </Box>
        </DashboardLayout>
    );
};
