import AddIcon from "@mui/icons-material/AddShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import { Avatar, Box, Button, Rating, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import moment from "moment/moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { formatNumber } from "../../helpers/formatNumbers";
import { TabComponet } from "../../layouts/components/Tabs/TabComponet";
import { LayoutComponent } from "../../layouts/LayoutComponent";
import { addItem, deleteItem, removeItem, updateItem } from "../../store/slices/cart";
import { getProduct, setRecordProduct } from "../../store/slices/products/thunks";

export const ProductPage = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const { items } = useSelector((state) => state.shoppingcart);
    const { product } = useSelector((state) => state);
    const { productId } = useParams();

    useEffect(() => {
        dispatch(getProduct(productId));

        if (isAuthenticated) {
            dispatch(setRecordProduct(user.uid, productId));
        }
    }, []);

    const handleAddCart = (productId, { name, price, discount, img }) => {
        const found = items.find((item) => item.id === productId);

        if (found) {
            dispatch(updateItem(user.uid, { ...found, count: found.count + 1 }));
        } else {
            if (discount !== 0) {
                const itemNew = {
                    id: productId,
                    name: name,
                    price: price - (price * discount) / 100,
                    images: img,
                    count: 1,
                };

                isAuthenticated
                    ? dispatch(addItem(user.uid, itemNew))
                    : toast.error("Para agregar un producto debe iniciar sesion", {
                          position: "top-right",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                      });
            } else {
                const itemNew = {
                    id: productId,
                    name: name,
                    price: price,
                    images: images,
                    count: 1,
                };
                isAuthenticated
                    ? dispatch(addItem(user.uid, itemNew))
                    : toast.error("Para agregar un producto debe iniciar sesion", {
                          position: "top-right",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                      });
            }
        }
    };

    const handleRemoveCart = (id) => {
        items.find((item) => {
            if (item.id === id) {
                if (item.count === 1) {
                    dispatch(deleteItem(user.uid, item));
                } else {
                    dispatch(removeItem(user.uid, { ...item, count: item.count - 1 }));
                }
            }
        });
    };

    const cantProduct = (id) => {
        let current = 0;
        const found = items.find((item) => item.id === id);

        if (found) {
            current = found.count;
        }
        return current;
    };

    const sumReviews = product.reviews.reduce((previous, current) => {
        return previous + parseInt(current.rating); // sumar el valor de una propiedad
    }, 0);

    function descriptions() {
        return (
            <Box>
                <Typography
                    sx={{
                        fontSize: "20px",
                        fontWeight: 700,
                    }}
                >
                    Especificaciones:
                </Typography>
                <Typography
                    sx={{
                        fontSize: "14px",
                    }}
                >
                    Marca:
                    <Typography
                        component="span"
                        sx={{
                            fontWeight: "bold",
                            ml: 1,
                        }}
                    >
                        {product.brand}
                    </Typography>
                </Typography>
                <Typography
                    sx={{
                        fontSize: "14px",
                    }}
                >
                    Modelo:{" "}
                    <Typography
                        component="span"
                        sx={{
                            fontWeight: "bold",
                            ml: 1,
                        }}
                    >
                        {product.name}
                    </Typography>
                </Typography>
                <Typography
                    sx={{
                        fontSize: "14px",
                        mt: "1",
                    }}
                >
                    {product.description}
                </Typography>
            </Box>
        );
    }

    function reviews() {
        return (
            <Box>
                {product.reviews.map((review) => (
                    <Box key={review.id} sx={{ marginBottom: "40px !important" }}>
                        <Box
                            sx={{
                                display: "flex",
                            }}
                        >
                            <Avatar
                                src={review.user.avatar.avatarUrl}
                                sx={{
                                    width: "48px",
                                    height: "48px",
                                }}
                            />
                            <Box
                                sx={{
                                    ml: "16px",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Typography
                                    sx={{
                                        mb: "4px",
                                        fontSize: "16px",
                                        fontWeight: 500,
                                    }}
                                >
                                    {review.user.name}
                                </Typography>
                                <Box sx={{ display: "flex" }}>
                                    <Rating
                                        value={review.rating}
                                        size="medium"
                                        sx={{
                                            fontSize: "1.25rem",
                                        }}
                                        readOnly
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            fontWeight: 600,
                                            ml: 2,
                                        }}
                                    >
                                        {review.rating}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            ml: 2,
                                        }}
                                    >
                                        {moment(review.createdAt, "YYYYMMDD").fromNow()}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                mt: 2,
                                width: "60%",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    color: "rgb(75, 86, 107);",
                                }}
                            >
                                {review.comment}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        );
    }

    return (
        <LayoutComponent>
            <Container maxWidth="lg" sx={{ mt: 22 }} className="animate__animated animate__fadeIn">
                <Grid container spacing={2}>
                    <Grid item lg={6}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <img
                                src={product.img}
                                alt=""
                                width={"70%"}
                                style={{
                                    borderRadius: "10px",
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item lg={6}>
                        <Box
                            sx={{
                                mb: "16px",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "30px",
                                    fontWeight: 700,
                                }}
                            >
                                {product.name}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                mb: "16px",
                                display: "flex",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                }}
                            >
                                Marca:
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    ml: 1,
                                }}
                            >
                                {product.brand}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                mb: "16px",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                }}
                            >
                                Calificacion:
                            </Typography>

                            <Box
                                sx={{
                                    ml: 1,
                                    display: "flex",
                                }}
                            >
                                <Rating value={sumReviews / product.reviews.length} readOnly size="small" />
                                <Typography sx={{ ml: 1, fontSize: "14px" }}>({product.reviews.length})</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <Typography
                                sx={{
                                    fontSize: "25px",
                                    fontWeight: 700,
                                    color: "rgb(210, 63, 87)",
                                }}
                            >
                                {formatNumber(product.price - (product.price * product.discount) / 100, "EN-US", "USD")}
                            </Typography>

                            {product.discount !== 0 && (
                                <Typography
                                    variant="body1"
                                    color="initial"
                                    sx={{
                                        ml: 2,
                                        fontSize: "25px",
                                        fontWeight: 700,
                                        color: "black",
                                        textDecoration: "line-through",
                                    }}
                                >
                                    {formatNumber(product.price, "EN-US", "USD")}
                                </Typography>
                            )}
                        </Box>

                        {cantProduct(productId) === 0 ? (
                            <Box
                                sx={{
                                    display: "flex",
                                    mt: 2,
                                }}
                            >
                                <Button variant="contained" color="primary" onClick={() => handleAddCart(productId, product)}>
                                    Agregar al Carrito
                                </Button>
                            </Box>
                        ) : (
                            <Box
                                sx={{
                                    mt: 2,
                                    width: "185px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Box>
                                    <Button
                                        onClick={() => handleRemoveCart(productId)}
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            color: "#0f3460",
                                            borderColor: "#0f3460",
                                            ":hover": {
                                                borderColor: "#0f3460",
                                                backgroundColor: "#f0f0f0",
                                            },
                                            minWidth: "10px",
                                            padding: "4px",
                                        }}
                                    >
                                        <RemoveIcon />
                                    </Button>
                                </Box>
                                <Box>
                                    <Typography variant="" color="inherit">
                                        {cantProduct(productId)}
                                    </Typography>
                                </Box>

                                <Box>
                                    <Button
                                        onClick={() => handleAddCart(productId, product)}
                                        variant="outlined"
                                        color="inherit"
                                        size="small"
                                        sx={{
                                            color: "#0f3460",
                                            borderColor: "#0f3460",
                                            ":hover": {
                                                borderColor: "#0f3460",
                                                backgroundColor: "#f0f0f0",
                                            },
                                            minWidth: "10px",
                                            padding: "4px",
                                        }}
                                    >
                                        <AddIcon />
                                        {/* <AddIcon /> */}
                                    </Button>
                                </Box>
                            </Box>
                        )}
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        mt: 8,
                    }}
                >
                    <TabComponet descriptions={descriptions} reviews={reviews} />
                </Box>
            </Container>
        </LayoutComponent>
    );
};
