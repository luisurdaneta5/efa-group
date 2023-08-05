import { Box, Button, Container, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { LayoutAdminComponent } from "../../layouts/LayoutAdminComponent";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Fetch from "../../api/Fetch";
import { useForm } from "../../hooks/useForm";
import { Dropzone } from "./components/Dropzone";

const formData = {
    cost: 0,
    profit: 0,
    price: "",
    category: "",
    discount: 0,
    brand: "",
    stock: 0,
};

export const ProductCreatePage = () => {
    const [categories, setCategories] = useState([]);
    const [files, setFiles] = useState([]);

    const navigate = useNavigate();

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

    const [error, setError] = useState({
        name: false,
        brand: false,
        category: false,
        img: false,
        cost: false,
        profit: false,
    });

    // const [errorMsg, setErrorMsg] = useState({
    // 	name: "",
    // 	brand: "",
    // 	category: "",
    // 	img: "",
    // 	cost: "",
    // 	profit: "",
    // });

    const [formValues, handleInputChange] = useForm(formData);

    const { name, category, brand, description, stock, cost, profit, discount } = formValues;

    function calc() {
        if (profit == "" && cost == "") {
            const valor = 0;

            return valor;
        } else {
            const procent = profit / 100;
            let ganancia = cost * procent;
            const valor = parseFloat(cost) + parseFloat(ganancia);

            return valor;
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
        } else if (files == "") {
            setError({
                img: true,
            });
        } else if (cost == 0) {
            setError({
                cost: true,
            });
        } else {
            let formData = new FormData();

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

            Fetch.post("/products/create", formData, {
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
                        Agregar Nuevo Producto
                    </Typography>
                </Box>

                <Box sx={{ mt: 3 }}>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <Paper
                            sx={{
                                padding: "48px",
                            }}
                        >
                            <Grid container spacing={1}>
                                <Grid item lg={4}>
                                    <TextField id="" label="Nombre" size="small" fullWidth name="name" value={name} onChange={handleInputChange} error={error.name} />
                                    {error.name && <FormHelperText sx={{ color: "red" }}>Campo requerido</FormHelperText>}
                                </Grid>
                                <Grid item lg={4}>
                                    <TextField id="" label="Marca" size="small" fullWidth name="brand" value={brand} onChange={handleInputChange} error={error.brand} />
                                    {error.brand && <FormHelperText sx={{ color: "red" }}>Campo requerido</FormHelperText>}
                                </Grid>
                                <Grid item lg={4}>
                                    <FormControl fullWidth size="small">
                                        <InputLabel id="demo-simple-select-label">Seleccione categoria</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={category}
                                            label="Seleccione categoria"
                                            onChange={handleInputChange}
                                            name="category"
                                            displayEmpty
                                            // defaultValue={type}
                                            error={error.category}
                                        >
                                            <MenuItem value=""></MenuItem>
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
                                        {error.category && <FormHelperText sx={{ color: "red" }}>Seleccione una categoria</FormHelperText>}
                                    </FormControl>
                                </Grid>

                                <Grid item lg={12} sx={{ mt: 2 }}>
                                    <Dropzone files={files} setFiles={setFiles} />
                                    {error.img && (
                                        <FormHelperText
                                            sx={{
                                                mt: 1,
                                                display: "flex",
                                                justifyContent: "center",
                                                color: "red",
                                                alingItem: "center",
                                            }}
                                        >
                                            Ingrese la imagen del producto para continuar
                                        </FormHelperText>
                                    )}
                                </Grid>

                                <Grid item lg={12}>
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
                                </Grid>

                                <Grid item lg={1} sx={{ mt: 2 }}>
                                    <TextField id="" label="Stock" type="number" fullWidth value={stock} name="stock" onChange={handleInputChange} />
                                </Grid>

                                <Grid item lg={3} sx={{ mt: 2 }}>
                                    <TextField id="" type="number" label="Costo" fullWidth value={cost} name="cost" onChange={handleInputChange} error={error.cost} />
                                    {error.cost && <FormHelperText sx={{ color: "red" }}>El costo no puede ser 0</FormHelperText>}
                                </Grid>
                                <Grid item lg={3} sx={{ mt: 2 }}>
                                    <TextField id="" type="number" label="Procentaje Ganancia" fullWidth value={profit} name="profit" onChange={handleInputChange} />
                                </Grid>
                                <Grid item lg={3} sx={{ mt: 2 }}>
                                    <TextField id="" type="number" label="Descuento" fullWidth value={discount} name="discount" onChange={handleInputChange} />
                                </Grid>
                                <Grid item lg={2} sx={{ mt: 2 }}>
                                    <TextField id="price" type="text" label="Precio Final" fullWidth value={calc()} name="price" disabled onChange={handleInputChange} />
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
