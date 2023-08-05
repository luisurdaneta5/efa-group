import { Box, Button, Grid, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Fetch from "../../../api/Fetch";
import { useForm } from "../../../hooks/useForm";
import { startLoadingConfig } from "../../../store/slices/config";

export const ExchangeSection = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { money } = useSelector((state) => state.config);

    const [formValues, handleInputChange] = useForm(money);

    const { iva, exchangeRate } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        Fetch.put("/settings/exchange", { id, exchangeRate, iva })
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
        <Box
            sx={{
                mt: 3,
            }}
        >
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item lg={6}>
                        <TextField id="" label="Tasa de Cambio" size="small" fullWidth type="number" value={exchangeRate} name="exchangeRate" onChange={handleInputChange} />
                    </Grid>
                    <Grid item lg={6}>
                        <TextField id="" label="IVA" size="small" fullWidth type="number" value={iva} name="iva" onChange={handleInputChange} />
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 3,
                    }}
                >
                    <Button variant="contained" color="primary" type="submit">
                        Guardar
                    </Button>
                </Box>
            </form>
        </Box>
    );
};
