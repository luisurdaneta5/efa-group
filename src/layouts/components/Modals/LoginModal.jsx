import { Box, Button, CircularProgress, FormControl, IconButton, Input, InputAdornment, Modal, Typography } from "@mui/material";
import React, { useState } from "react";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm2 } from "../../../hooks/useForm2";
import { startLoginWithEmailAndPassword } from "../../../store/slices/auth";
import "./style.css";

// import { useForm } from "../../../hooks/useForm";

export const LoginModal = (props) => {
    const { isLoadingAuth } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [formValues, handleInputChange] = useForm2({
        email: "",
        password: "",
    });

    const { email, password } = formValues;

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const to_navigate = (type) => {
            if (type === 0) {
                navigate("/dashboard");
            } else if (type === 1) {
                navigate("/admin/dashboard");
            }
        };

        dispatch(startLoginWithEmailAndPassword(email, password, to_navigate));
    };

    return (
        <>
            <Modal open={props.open} onClose={props.handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: {
                            xs: "90%",
                            sm: "500px",
                            md: "500px",
                            lg: "500px",
                            xl: "500px",
                        },
                        bgcolor: "background.paper",
                        border: "0px solid #000",
                        borderRadius: "10px",
                        boxShadow: 24,
                        padding: "2rem 3rem",
                    }}
                >
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{
                            display: "flex",
                            alignitems: "center",
                            justifyContent: "center",
                        }}
                    >
                        Bienvenidos a EFA SISTEMAS
                    </Typography>
                    <Typography
                        color="initial"
                        sx={{
                            display: "flex",
                            alignitems: "center",
                            justifyContent: "center",
                            fontSize: "12px",
                            mt: 1,
                        }}
                    >
                        Ingresa con Correo Electronico & Contraseña
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <Box sx={{ mt: 4 }}>
                            <FormControl fullWidth={true}>
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
                                    placeholder="ejemplo@mail.com"
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
                                    name="email"
                                    value={email}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        </Box>

                        <Box sx={{ mt: 2 }}>
                            <FormControl fullWidth={true}>
                                <span
                                    style={{
                                        fontSize: "13px",
                                        marginBottom: "8px",
                                        fontWeight: 600,
                                    }}
                                >
                                    Contraseña
                                </span>

                                <Input
                                    placeholder="***********"
                                    disableUnderline={true}
                                    id="password"
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
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={handleInputChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <Button variant="contained" fullWidth type="submit">
                                {isLoadingAuth ? <CircularProgress size={30} sx={{ color: "white" }} /> : "Iniciar Sesion"}
                            </Button>
                        </Box>
                    </form>
                    <Box
                        sx={{
                            mt: 3,
                            display: "flex",
                            justifyContent: "center",
                            alignText: "center",
                        }}
                    >
                        <Typography variant="body1" color="initial" sx={{ mr: 1, fontSize: "16px" }}>
                            No tienes una Cuenta?
                        </Typography>
                        <Link
                            to={"/sign-up"}
                            style={{
                                color: "black",
                                fontWeight: 600,
                            }}
                        >
                            Registrate
                        </Link>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};
