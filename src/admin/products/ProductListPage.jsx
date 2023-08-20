import { Box, Button, Container, Divider, Pagination, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LayoutAdminComponent } from "../../layouts/LayoutAdminComponent";
import { startLoadingProducts } from "../../store/slices/ui/thunks";
import { SearchComponent } from "../components/SearchComponent";
import { TabletProductList } from "./components/TabletProductList";

export const ProductListPage = () => {
    const dispatch = useDispatch();
    const { page, totalPages, products } = useSelector((state) => state.ui);

    useEffect(() => {
        dispatch(startLoadingProducts());
    }, [dispatch]);

    const handlePagination = (value) => {
        const pageNumber = parseInt(value - 1);

        dispatch(startLoadingProducts("", 0, pageNumber));
    };

    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
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
                        Lista de Productos
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 2,
                    }}
                >
                    <SearchComponent placeholder={"Buscar producto..."} search={search} handleChange={handleChange} module={"products"} />

                    <Link to="/admin/dashboard/products/create">
                        <Button variant="contained" color="primary" size="small">
                            agregar producto
                        </Button>
                    </Link>
                </Box>

                <Box
                    sx={{
                        mt: 2,
                    }}
                >
                    <Paper>
                        <TabletProductList products={products} search={search} />
                        <Divider />
                        <Box
                            sx={{
                                mt: 2,
                                display: "flex",
                                justifyContent: "center",
                                padding: "30px 0px",
                            }}
                        >
                            <Pagination
                                onChange={(e, value) => {
                                    handlePagination(value);
                                }}
                                page={page}
                                count={totalPages}
                                variant="outlined"
                                color="primary"
                                hideNextButton={false}
                                hidePrevButton={false}
                            />
                        </Box>
                    </Paper>
                </Box>
            </Container>
        </LayoutAdminComponent>
    );
};
