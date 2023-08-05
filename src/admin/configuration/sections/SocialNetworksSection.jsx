import { Facebook, Instagram, Twitter, WhatsApp } from "@mui/icons-material";
import { Box, Button, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Fetch from "../../../api/Fetch";
import { useForm } from "../../../hooks/useForm";
import { startLoadingConfig } from "../../../store/slices/config";

export const SocialNetworksSection = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { rss } = useSelector((state) => state.config);

    const [formValues, handleInputChange] = useForm(rss);

    const { facebook, twitter, instagram, whatsapp } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        Fetch.put("/settings/rss", {
            id,
            facebook,
            twitter,
            instagram,
            whatsapp,
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
                        <FormControl fullWidth>
                            <InputLabel>Facebook</InputLabel>
                            <OutlinedInput
                                label="Facebook"
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Facebook />
                                    </InputAdornment>
                                }
                                size="small"
                                value={facebook}
                                name="facebook"
                                onChange={handleInputChange}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item lg={6}>
                        <FormControl fullWidth>
                            <InputLabel>Twitter</InputLabel>
                            <OutlinedInput
                                label="Twitter"
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Twitter />
                                    </InputAdornment>
                                }
                                size="small"
                                value={twitter}
                                name="twtter"
                                onChange={handleInputChange}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item lg={6} sx={{ mt: 2 }}>
                        <FormControl fullWidth>
                            <InputLabel>Instagram</InputLabel>
                            <OutlinedInput
                                label="Instagram"
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Instagram />
                                    </InputAdornment>
                                }
                                size="small"
                                value={instagram}
                                name="instagram"
                                onChange={handleInputChange}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item lg={6} sx={{ mt: 2 }}>
                        <FormControl fullWidth>
                            <InputLabel>Whatsapp</InputLabel>
                            <OutlinedInput
                                label="Whatsapp"
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <WhatsApp />
                                    </InputAdornment>
                                }
                                size="small"
                                value={whatsapp}
                                name="whatsapp"
                                onChange={handleInputChange}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                    <Button variant="contained" color="primary" type="submit">
                        Guardar
                    </Button>
                </Box>
            </form>
        </Box>
    );
};
