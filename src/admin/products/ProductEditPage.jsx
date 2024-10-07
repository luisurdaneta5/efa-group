import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Skeleton, TextField, Typography } from "@mui/material";
import { LayoutAdminComponent } from "../../layouts/LayoutAdminComponent";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Fetch from "../../api/Fetch";
import { useForm } from "../../hooks/useForm";
import { getProduct } from "../../store/slices/products/thunks";
import { Dropzone } from "./components/Dropzone";

const thumb = {
    display: "flex",
    justifyContent: "center",
    alingItem: "center",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: "100%",
    height: "300px",
    padding: 4,
    boxSizing: "border-box",
};

export const ProductEditPage = () => {
    const { product } = useSelector((state) => state);
    const { isLoading } = product;

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);
    const [files, setFiles] = useState([]);

    useEffect(() => {
        dispatch(getProduct(id, 0));
    }, [dispatch]);

    const [formValues, handleInputChange] = useForm(product);
    const { name, category, description, stock, cost, profit, brand, discount } = formValues;

    const [error, setError] = useState({
        name: false,
        brand: false,
        category: false,
        img: false,
        cost: false,
        profit: false,
    });

    useEffect(() => {
        Fetch.get("/products/categories")
            .then((res) => {
                setCategories(res.data.categories);
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

    function calc() {
        if (profit == "" && cost == "") {
            const valor = 0;

            return valor;
        } else {
            const procent = profit / 100;
            let ganancia = cost * procent;
            const valor = parseFloat(cost) + parseFloat(ganancia);

            return valor.toFixed(2);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name == "") {
            setError({
                name: true,
            });
        } else if (brand == "") {
            setError({
                brand: true,
            });
        } else if (category == "") {
            setError({
                category: true,
            });
        } else if (cost == 0) {
            setError({
                cost: true,
            });
        } else {
            let formData = new FormData();

            formData.append("id", id);
            formData.append("name", name);
            formData.append("brand", brand);
            formData.append("category", category);
            formData.append("description", description);
            formData.append("stock", stock);
            formData.append("cost", cost);
            formData.append("profit", profit);
            formData.append("discount", discount);
            formData.append("price", document.getElementById("price").value);
            formData.append("img", files[0]);

            Fetch.put("/products/update", formData, {
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
                    navigate("/admin/dashboard/products");
                })
                .catch((err) => {
                    toast.error(res.data.msg, {
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
                        Editar Producto
                    </Typography>
                </Box>

                <Box sx={{ mt: 3 }}>
                    <form onSubmit={handleSubmit}>
                        <Paper
                            sx={{
                                padding: "48px",
                            }}
                        >
                            <Grid container spacing={2}>
                                <Grid item lg={4}>
                                    {isLoading ? (
                                        <Skeleton variant="rectangular" fullWidth height={40} />
                                    ) : (
                                        <TextField
                                            id=""
                                            label="Nombre"
                                            size="small"
                                            fullWidth
                                            name="name"
                                            value={name}
                                            onChange={handleInputChange}
                                            inputProps={{ maxLength: 27 }}
                                        />
                                    )}
                                </Grid>

                                <Grid item lg={4}>
                                    {isLoading ? (
                                        <Skeleton variant="rectangular" fullWidth height={40} />
                                    ) : (
                                        <TextField id="" label="Marca" size="small" fullWidth name="brand" value={brand} onChange={handleInputChange} />
                                    )}
                                </Grid>
                                <Grid item lg={4}>
                                    {isLoading ? (
                                        <Skeleton variant="rectangular" fullWidth height={40} />
                                    ) : (
                                        <FormControl fullWidth size="small">
                                            <InputLabel id="demo-simple-select-label">Seleccione categoria</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={category}
                                                label="Seleccione categoria"
                                                name="category"
                                                onChange={handleInputChange}
                                                defaultValue={category}
                                            >
                                                {categories.map((category) => (
                                                    <MenuItem value={category.name} key={category.id}>
                                                        <Box
                                                            sx={{
                                                                display: "flex",
                                                                alingItem: "center",
                                                                mt: 1,
                                                            }}
                                                        >
                                                            <Box
                                                                component="img"
                                                                src={category.icon}
                                                                width="25px"
                                                                height="25px"
                                                                sx={{
                                                                    mr: 1,
                                                                    ml: 2,
                                                                }}
                                                            />
                                                            {category.name}
                                                        </Box>
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    )}
                                </Grid>

                                <Grid item lg={8}>
                                    {isLoading ? <Skeleton variant="rectangular" fullWidth height={300} /> : <Dropzone files={files} setFiles={setFiles} />}
                                </Grid>

                                <Grid item lg={4}>
                                    {isLoading ? (
                                        <Skeleton variant="rectangular" fullWidth height={300} />
                                    ) : (
                                        <Box>
                                            <Box component="img" src={product.img} style={thumb} />
                                        </Box>
                                    )}
                                </Grid>

                                <Grid item lg={12}>
                                    {isLoading ? (
                                        <Skeleton variant="rectangular" fullWidth height={40} />
                                    ) : (
                                        <TextField
                                            sx={{ mt: 2 }}
                                            id=""
                                            label="Descripcion"
                                            placeholder="Descripcion"
                                            size="small"
                                            multiline
                                            rows={4}
                                            fullWidth
                                            value={description}
                                            name="description"
                                            onChange={handleInputChange}
                                        />
                                    )}
                                </Grid>

                                <Grid item lg={1} sx={{ mt: 2 }}>
                                    {isLoading ? (
                                        <Skeleton variant="rectangular" fullWidth height={40} />
                                    ) : (
                                        <TextField
                                            id=""
                                            label="Stock"
                                            type="number"
                                            fullWidth
                                            value={stock}
                                            name="stock"
                                            onChange={handleInputChange}
                                            size="small"
                                            inputProps={{
                                                pattern: "^[0-9]+",
                                                min: "0",
                                            }}
                                        />
                                    )}
                                </Grid>

                                <Grid item lg={3} sx={{ mt: 2 }}>
                                    {isLoading ? (
                                        <Skeleton variant="rectangular" fullWidth height={40} />
                                    ) : (
                                        <TextField
                                            id=""
                                            type="text"
                                            label="Costo"
                                            fullWidth
                                            value={cost}
                                            name="cost"
                                            onChange={handleInputChange}
                                            size="small"
                                            // inputProps={{
                                            //     pattern: "^[0-9]+",
                                            //     min: "0",
                                            // }}
                                        />
                                    )}
                                </Grid>
                                <Grid item lg={3} sx={{ mt: 2 }}>
                                    {isLoading ? (
                                        <Skeleton variant="rectangular" fullWidth height={40} />
                                    ) : (
                                        <TextField
                                            id=""
                                            type="text"
                                            label="Procentaje Ganancia"
                                            fullWidth
                                            value={profit}
                                            name="profit"
                                            onChange={handleInputChange}
                                            size="small"
                                            // inputProps={{
                                            //     pattern: "^[0-9]+",
                                            //     min: "0",
                                            // }}
                                        />
                                    )}
                                </Grid>
                                <Grid item lg={3} sx={{ mt: 2 }}>
                                    {isLoading ? (
                                        <Skeleton variant="rectangular" fullWidth height={40} />
                                    ) : (
                                        <TextField
                                            id=""
                                            type="text"
                                            label="Descuento"
                                            fullWidth
                                            value={discount}
                                            name="discount"
                                            onChange={handleInputChange}
                                            size="small"
                                            // inputProps={{
                                            //     pattern: "^[0-9]+",
                                            //     min: "0",
                                            // }}
                                        />
                                    )}
                                </Grid>
                                <Grid item lg={2} sx={{ mt: 2 }}>
                                    {isLoading ? (
                                        <Skeleton variant="rectangular" fullWidth height={40} />
                                    ) : (
                                        <TextField
                                            id="price"
                                            type="text"
                                            label="Precio Final"
                                            fullWidth
                                            value={calc()}
                                            name="price"
                                            disabled
                                            onChange={handleInputChange}
                                            size="small"
                                        />
                                    )}
                                </Grid>
                            </Grid>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    mt: 5,
                                }}
                            >
                                <Button variant="outlined" color="primary" type="submit" size="small">
                                    Guardar
                                </Button>

                                <Link to="/admin/dashboard/products/">
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        type="submit"
                                        size="small"
                                        sx={{
                                            ml: 2,
                                        }}
                                    >
                                        cancelar
                                    </Button>
                                </Link>
                            </Box>
                        </Paper>
                    </form>
                </Box>
            </Container>
        </LayoutAdminComponent>
    );
};
