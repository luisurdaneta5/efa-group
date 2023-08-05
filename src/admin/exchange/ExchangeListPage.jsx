import { Box, Container, Divider, Pagination, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LayoutAdminComponent } from "../../layouts/LayoutAdminComponent";
import { startLoadingExchangesPending } from "../../store/slices/ui/thunks";
import { SearchComponent } from "../components/SearchComponent";
import { TabletExchange } from "./components/TabletExchange";

export const ExchangeListPage = () => {
    const dispatch = useDispatch();
    const { exchanges, totalPages, page } = useSelector((state) => state.ui);

    useEffect(() => {
        dispatch(startLoadingExchangesPending());
    }, [dispatch]);

    const handlePagination = (page) => {
        const pageNumber = page - 1;

        dispatch(startLoadingExchangesPending(search, pageNumber));
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
                        Cambios nuevos
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 2,
                    }}
                >
                    <SearchComponent placeholder={"Buscar..."} search={search} handleChange={handleChange} module={"exchanges"} />
                </Box>

                <Box sx={{ mt: 2 }}>
                    <Paper>
                        <TabletExchange exchanges={exchanges} />
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
