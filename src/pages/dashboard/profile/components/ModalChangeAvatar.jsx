import { Box, Button, Grid, Modal } from "@mui/material";
import { useState } from "react";
import Avatar from "react-avatar-edit";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Fetch from "../../../../api/Fetch";
import { changeAvatar } from "../../../../store/slices/auth";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export const ModalChangeAvatar = ({ open, setOpen, uid }) => {
    const dispatch = useDispatch();
    const handleClose = () => setOpen(false);

    //Avatar
    const [avatar, setAvatar] = useState("");
    const [preview, setPreview] = useState(null);

    const onClose = () => {
        setPreview(null);
    };

    const onCrop = (preview) => {
        setPreview(preview);
    };

    const onBeforeFileLoad = (elem) => {
        setAvatar(elem.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData();

        formData.append("uid", uid);
        formData.append("avatar", preview);

        Fetch.put("/users/change_avatar", formData, {
            headers: { "Content-Type": "multipart/form-data" },
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
                dispatch(changeAvatar(res.data.url));
                setOpen(false);
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
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <form onSubmit={handleSubmit}>
                <Box sx={style}>
                    <Avatar width={"100%"} height={295} onCrop={onCrop} onClose={onClose} onBeforeFileLoad={onBeforeFileLoad} label="Seleccione una imagen..." />
                    <Box
                        sx={{
                            mt: 2,
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item lg={6}>
                                <Button variant="contained" color="primary" size="small" fullWidth type="submit">
                                    guardar
                                </Button>
                            </Grid>
                            <Grid item lg={6}>
                                <Button variant="contained" color="error" size="small" fullWidth onClick={handleClose}>
                                    Cancelar
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </form>
        </Modal>
    );
};
