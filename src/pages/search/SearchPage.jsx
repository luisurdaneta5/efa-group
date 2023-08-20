import MenuIcon from "@mui/icons-material/Menu";
import { Alert, Box, Container, FormControl, Grid, MenuItem, Pagination, Paper, Select, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { LayoutComponent } from "../../layouts/LayoutComponent";
import { ProductItem } from "../../layouts/components/Products/ProductItem";
import { startLoadingProducts } from "../../store/slices/ui";

export const SearchPage = () => {
    const dispatch = useDispatch();
    const { page, totalPages, products, isLoadingUi, totalProducts } = useSelector((state) => state.ui);
    const { category } = useParams();
    const [orderBy, setOrderBy] = useState(0);

    useEffect(() => {
        dispatch(startLoadingProducts(category));
    }, []);

    const handleChange = (event) => {
        setOrderBy(event.target.value);

        const pageNumber = parseInt(page - 1);
        dispatch(startLoadingProducts(category, event.target.value, pageNumber));
    };

    const handlePagination = (value) => {
        const pageNumber = parseInt(value - 1);
        dispatch(startLoadingProducts(category, orderBy, pageNumber));
    };

    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    return (
        <LayoutComponent>
            <Container maxWidth="lg" sx={{ mt: 22 }} className="animate__animated animate__fadeIn">
                <Box>
                    <Paper className="paper">
                        <Grid container spacing={0}>
                            <Grid item sm={8} md={7} lg={8}>
                                <Box>
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            fontWeight: 500,
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        Buscando.. "{category == undefined ? "Todos los productos" : category}"
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            color: "#7D879C;",
                                        }}
                                    >
                                        {totalProducts} resultados encontrados
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item sm={4} md={5} lg={4}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography>Ordenar:</Typography>
                                    <Box sx={{ minWidth: 150, ml: 1 }}>
                                        <FormControl fullWidth size="small">
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                placeholder="Seleccione opcion..."
                                                value={orderBy}
                                                onChange={handleChange}
                                                size="small"
                                                defaultValue={orderBy}
                                            >
                                                <MenuItem
                                                    value={0}
                                                    sx={{
                                                        fontSize: "14px",
                                                    }}
                                                >
                                                    Seleccione una opcion...
                                                </MenuItem>
                                                <MenuItem
                                                    value={1}
                                                    sx={{
                                                        fontSize: "14px",
                                                    }}
                                                >
                                                    Precio Bajo a Alto
                                                </MenuItem>
                                                <MenuItem
                                                    value={2}
                                                    sx={{
                                                        fontSize: "14px",
                                                    }}
                                                >
                                                    Precio Alto a Bajo
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>

                                    <Box sx={{ ml: 2 }}>
                                        <MenuIcon />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>

                <Box sx={{ mt: 5 }}>
                    <Grid container spacing={3}>
                        {/* <Grid item sm={3} md={3} lg={3}>
                            <Paper className="paper">
                                <Box>
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            fontWeight: 500,
                                        }}
                                    >
                                        Rango de precio
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        mt: 2,
                                        alignItems: "center",
                                    }}
                                >
                                    <TextField type="number" size="small" value={price1} onChange={handleChangePrice1} />
                                    <Typography
                                        sx={{
                                            padding: "10px",
                                        }}
                                    >
                                        -
                                    </Typography>
                                    <TextField type="number" size="small" value={price2} onChange={handleChangePrice2} />
                                </Box>
                                <Divider
                                    sx={{
                                        mt: 2.5,
                                    }}
                                />
                                <Box>
                                    <Box
                                        sx={{
                                            mt: 2.5,
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                fontWeight: 500,
                                            }}
                                        >
                                            Calificaciones
                                        </Typography>
                                    </Box>
                                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
                                        <FormControlLabel
                                            value="5"
                                            control={<Radio />}
                                            label={
                                                <Rating
                                                    value={5}
                                                    readOnly
                                                    size="small"
                                                    sx={{
                                                        mt: 1.5,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        textAlign: "center",
                                                    }}
                                                />
                                            }
                                        />
                                        <FormControlLabel
                                            value="4"
                                            control={<Radio />}
                                            label={
                                                <Rating
                                                    value={4}
                                                    readOnly
                                                    size="small"
                                                    sx={{
                                                        mt: 1.5,
                                                        alignItems: "center",
                                                    }}
                                                />
                                            }
                                        />
                                        <FormControlLabel
                                            value="3"
                                            control={<Radio />}
                                            label={
                                                <Rating
                                                    value={3}
                                                    readOnly
                                                    size="small"
                                                    sx={{
                                                        mt: 1.5,
                                                        alignItems: "center",
                                                    }}
                                                />
                                            }
                                        />
                                        <FormControlLabel
                                            value="2"
                                            control={<Radio />}
                                            label={
                                                <Rating
                                                    value={2}
                                                    readOnly
                                                    size="small"
                                                    sx={{
                                                        mt: 1.5,
                                                        alignItems: "center",
                                                    }}
                                                />
                                            }
                                        />
                                        <FormControlLabel
                                            value="1"
                                            control={<Radio />}
                                            label={
                                                <Rating
                                                    value={1}
                                                    readOnly
                                                    size="small"
                                                    sx={{
                                                        mt: 1.5,
                                                        alignItems: "center",
                                                    }}
                                                />
                                            }
                                        />
                                    </RadioGroup>

                                    <Box sx={{ mt: 2 }}>
                                        <Button variant="contained" color="primary" fullWidth size="small" onClick={handleFilter}>
                                            FILTRAR
                                        </Button>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid> */}
                        <Grid item sm={12} md={12} lg={12}>
                            {products.length == 0 ? (
                                <Grid item lg={12}>
                                    <Alert severity="info">No hay resultados para la busqueda de {category}</Alert>
                                </Grid>
                            ) : (
                                <Grid container spacing={2} rowSpacing={3}>
                                    {products.map((product) => (
                                        <Grid item key={product.id} sm={6} md={6} lg={4} xl={3}>
                                            <ProductItem product={product} />
                                        </Grid>
                                    ))}
                                </Grid>
                            )}
                        </Grid>
                        <Grid item sm={12} md={12} lg={12}>
                            <Box
                                sx={{
                                    mt: 4,
                                    display: "flex",
                                    flexDirection: {
                                        xs: "column",
                                        sm: "row",
                                        md: "row",
                                        lg: "row",
                                    },
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        color: "#7D879C",
                                    }}
                                >
                                    {totalProducts} Productos Encontrados
                                </Typography>

                                <Pagination
                                    onChange={(e, value) => {
                                        handlePagination(value);
                                    }}
                                    page={page}
                                    count={totalPages}
                                    variant="outlined"
                                    color="primary"
                                    sx={{
                                        mt: {
                                            xs: 4,
                                            sm: 0,
                                            md: 0,
                                            lg: 0,
                                        },
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </LayoutComponent>
    );
};
