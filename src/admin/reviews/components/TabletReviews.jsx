import DeleteIcon from "@mui/icons-material/Delete";
import { Avatar, Box, IconButton, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import Fetch from "../../../api/Fetch";
import { startLoadingReviews } from "../../../store/slices/ui";

function createData(id, product, productId, img, client, comment, rating, published) {
    return { id, product, productId, img, client, comment, rating, published };
}

//

export const TabletReviews = ({ reviews, search }) => {
    const dispatch = useDispatch();
    const rows = reviews.map((review) => {
        return createData(review.id, review.product.name, review.product.id, review.product.img, review.user.name, review.comment, review.rating, review.published);
    });

    const handleDelete = (id) => {
        Swal.fire({
            title: "Estas Seguro?",
            text: "El registro no podra recuperarse luego",
            showCancelButton: true,
            confirmButtonText: "Si, Eliminar",
            cancelButtonColor: "#d33",
            confirmButtonColor: "#091bad",
            showLoaderOnConfirm: true,
        })
            .then((result) => {
                if (result.isConfirmed) {
                    Fetch.delete("/reviews/delete", {
                        params: {
                            id,
                        },
                    }).then((res) => {
                        Swal.fire("Eliminado", "El registro ha sido eliminado", "success").then((result) => {
                            if (result.isConfirmed) {
                                dispatch(startLoadingReviews());
                            }
                        });
                    });
                }
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
        <TableContainer>
            <Table aria-label="simple table">
                <TableHead
                    sx={{
                        backgroundColor: "#f3f5f9",
                    }}
                >
                    <TableRow>
                        <TableCell align="left" sx={{ color: "#2B3445" }}>
                            Producto
                        </TableCell>
                        <TableCell align="left" sx={{ color: "#2B3445" }}>
                            Cliente
                        </TableCell>

                        <TableCell align="left" sx={{ color: "#2B3445" }}>
                            Comentario
                        </TableCell>
                        <TableCell align="left" sx={{ color: "#2B3445" }}>
                            Rating
                        </TableCell>
                        {/* <TableCell align='left' sx={{ color: "#2B3445" }}>
							Publicado
						</TableCell> */}
                        <TableCell align="center" sx={{ color: "#2B3445" }}>
                            Opciones
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: "12px",
                                    }}
                                >
                                    <Avatar
                                        src={row.img}
                                        sx={{
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "8px",
                                            border: "2px solid #ebeff4",
                                        }}
                                        variant="square"
                                    />

                                    <Box>
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                            }}
                                        >
                                            {row.product}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "12px",
                                                color: "#7D879C",
                                            }}
                                        >
                                            #{row.productId.slice(0, 8).toUpperCase()}
                                        </Typography>
                                    </Box>
                                </Box>
                            </TableCell>

                            <TableCell align="left">
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        color: "rgb(43, 52, 69)",
                                        fontWeight: 500,
                                    }}
                                >
                                    {row.client}
                                </Typography>
                            </TableCell>

                            <TableCell align="left">
                                <Typography
                                    sx={{
                                        fontSize: "13px",
                                    }}
                                >
                                    "{row.comment}"
                                </Typography>
                            </TableCell>

                            <TableCell
                                align="left"
                                sx={{
                                    fontSize: "14px",

                                    fontWeight: 600,
                                }}
                            >
                                <Rating name="size-small" defaultValue={row.rating} size="small" precision={0.5} readOnly />
                            </TableCell>

                            {/* <TableCell
								align='left'
								sx={{
									fontSize: "13px",
									color: "#7D879C",
									fontWeight: 600,
								}}
							>
								<Switch defaultChecked />
							</TableCell> */}
                            <TableCell
                                align="center"
                                sx={{
                                    fontSize: "13px",
                                    color: "#7D879C",
                                    fontWeight: 600,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    {/* <Link to='/admin/dashboard/products/edit'>
										<IconButton>
											<ModeEditIcon sx={{ fontSize: "19px" }} />
										</IconButton>
									</Link> */}
                                    {/* <IconButton>
										<VisibilityIcon sx={{ fontSize: "19px" }} />
									</IconButton> */}

                                    <IconButton onClick={() => handleDelete(row.id)}>
                                        <DeleteIcon sx={{ fontSize: "19px" }} />
                                    </IconButton>
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
