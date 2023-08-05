import { Box, Button, FormControl, Grid, Input, Paper } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Fetch from "../../../api/Fetch";
import { DashboardLayout } from "../DashboardLayout";

export const ProfileEditPage = () => {
    const { user, userData } = useSelector((state) => state.auth);
    const navitate = useNavigate();

    const initialState = {
        name: userData.displayName,
        email: userData.email,
        phone: userData.phone,
    };

    const [values, setValues] = useState(initialState);

    const { name, email, phone } = values;

    const handleChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        Fetch.put("/users/update/profile", { uid: user.uid, name, email, phone })
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
                navitate("/dashboard", {
                    replace: true,
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
    };
    return (
        <DashboardLayout profile={true}>
            <Paper className="paper">
                <Box>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} lg={12}>
                                <FormControl fullWidth>
                                    <span
                                        style={{
                                            fontSize: "13px",
                                            marginBottom: "8px",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Nombre y Apellido
                                    </span>
                                    <Input
                                        disableUnderline={true}
                                        id="my-input"
                                        aria-describedby="my-helper-text"
                                        sx={{
                                            fontSize: "13px",
                                            padding: "0px 10px",
                                            "&.MuiInput-root": {
                                                border: "1px solid #c4c4c4",
                                                borderRadius: "5px",
                                            },
                                            "&.Mui-focused": {
                                                border: "1px solid black",
                                            },
                                            "&.MuiInput-input": {
                                                color: "red",
                                            },
                                        }}
                                        autoComplete="off"
                                        name="name"
                                        value={name}
                                        onChange={handleChange}
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} lg={6}>
                                <FormControl fullWidth>
                                    <span
                                        style={{
                                            fontSize: "13px",
                                            marginBottom: "8px",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Correo Electronico
                                    </span>
                                    <Input
                                        disableUnderline={true}
                                        id="my-input"
                                        aria-describedby="my-helper-text"
                                        sx={{
                                            fontSize: "13px",
                                            padding: "0px 10px",
                                            "&.MuiInput-root": {
                                                border: "1px solid #c4c4c4",
                                                borderRadius: "5px",
                                            },
                                            "&.Mui-focused": {
                                                border: "1px solid black",
                                            },
                                            "&.MuiInput-input": {
                                                color: "red",
                                            },
                                        }}
                                        autoComplete="off"
                                        name="email"
                                        value={email}
                                        onChange={handleChange}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <FormControl fullWidth>
                                    <span
                                        style={{
                                            fontSize: "13px",
                                            marginBottom: "8px",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Telefono
                                    </span>
                                    <Input
                                        disableUnderline={true}
                                        id="my-input"
                                        aria-describedby="my-helper-text"
                                        sx={{
                                            fontSize: "13px",
                                            padding: "0px 10px",
                                            "&.MuiInput-root": {
                                                border: "1px solid #c4c4c4",
                                                borderRadius: "5px",
                                            },
                                            "&.Mui-focused": {
                                                border: "1px solid black",
                                            },
                                            "&.MuiInput-input": {
                                                color: "red",
                                            },
                                        }}
                                        autoComplete="off"
                                        name="phone"
                                        value={phone}
                                        onChange={handleChange}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                mt: 3,
                            }}
                        >
                            <Button variant="outlined" color="primary" size="small" type="submit">
                                guardar
                            </Button>
                            <Link to="/dashboard">
                                <Button
                                    variant="outlined"
                                    color="error"
                                    size="small"
                                    type="submit"
                                    sx={{
                                        ml: 2,
                                    }}
                                >
                                    cancelar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Paper>
        </DashboardLayout>
    );
};
