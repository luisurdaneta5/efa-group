import { Box, Button, Container, Grid, LinearProgress, Pagination, Paper, Typography } from "@mui/material";
import { LayoutAdminComponent } from "../../layouts/LayoutAdminComponent";

import { useState } from "react";
import { SearchComponent } from "../components/SearchComponent";
import { ModalCreateCategory } from "./components/ModalCreateCategory";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingCategories } from "../../store/slices/ui/thunks";

import Swal from "sweetalert2";
import Fetch from "../../api/Fetch";

export const CategoriesPage = () => {
    const dispatch = useDispatch();
    const { categories, totalPages, page, isLoading } = useSelector((state) => state.ui);
    const [search, setSearch] = useState("");

    const [open, setOpen] = useState(false);

    useEffect(() => {
        dispatch(startLoadingCategories());
    }, [dispatch]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Estas seguro?",
            text: "¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#091bad",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar",
        })
            .then((result) => {
                if (result.isConfirmed) {
                    Fetch.delete("/categories/delete", {
                        params: {
                            id: id,
                        },
                    }).then((res) => {
                        Swal.fire({
                            title: "Eliminado!",
                            text: `${res.data.msg} ha sido eliminado.`,
                            icon: "success",
                            confirmButtonColor: "#091bad",
                        }).then((result) => {
                            if (result.isConfirmed) {
                                dispatch(startLoadingCategories());
                            }
                        });
                    });
                }
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

    const handlePagination = (page) => {
        const pageNumber = page - 1;
        dispatch(startLoadingUsers(pageNumber));
    };

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <LayoutAdminComponent>
            <Container maxWidth="xl">
                {isLoading && <LinearProgress />}

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
                        Lista de Categorias
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 2,
                    }}
                >
                    <SearchComponent placeholder={"Buscar categoria..."} search={search} handleChange={handleChange} module={"categories"} />

                    <Button variant="contained" color="primary" size="small" onClick={handleOpen}>
                        crear categoria
                    </Button>
                    <ModalCreateCategory open={open} setOpen={setOpen} />
                </Box>
                {!isLoading && (
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        {categories.map((category) => (
                            <Grid
                                item
                                lg={2}
                                key={category.id}
                                onClick={() => {
                                    handleDelete(category.id);
                                }}
                            >
                                <Paper
                                    className="paper"
                                    sx={{
                                        cursor: "pointer",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box component="img" src={category.icon} width="50%" />

                                        <Typography
                                            variant="body1"
                                            color="initial"
                                            sx={{
                                                mt: 2,
                                                fontSize: "15px",
                                            }}
                                        >
                                            {category.name}
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                )}
                {page == 2 && (
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
            </Container>
        </LayoutAdminComponent>
    );
};
