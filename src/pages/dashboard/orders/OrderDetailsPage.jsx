import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Alert, Avatar, Box, Button, Divider, Grid, Paper, Rating, Skeleton, Typography } from "@mui/material";
import { ReactComponent as BoxClose } from "../../../assets/icons/box.svg";
import { ReactComponent as Check } from "../../../assets/icons/check.svg";
import { DashboardLayout } from "../DashboardLayout";
// import { ReactComponent as Truck } from "../../../assets/icons/truck.svg";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import font from "../../../assets/fonts/DejaVuSansCondensed.ttf";
import { ReactComponent as Delivered } from "../../../assets/icons/delivered.svg";
import logo from "../../../assets/images/logo.png";
import { applyDiscount } from "../../../helpers/applyDiscount";
import { formatNumber } from "../../../helpers/formatNumbers";
import { startLoadingOrderById } from "../../../store/slices/orders";
import { ModalRanked } from "./components/ModalRanked";

export const OrderDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const { isLoadingOrder, products, status, date, delivery, total, discount, reviews, nameFact, dni, address } = useSelector((state) => state.order);

  const [info, setInfo] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(startLoadingOrderById(id, user.uid));
  }, [dispatch]);

  const handleOpen = (product) => {
    setInfo(product);
    setOpen(true);
  };

  const handleBill = () => {
    const num = 123;
    const doc = new jsPDF();
    var img = new Image();
    img.src = logo;

    var columns = ["Descripcion", "Cantidad", "Precio", "Total"];
    var data = products.map((product) => {
      return [product.name, product.count, formatNumber(product.price, "EN-US", "USD"), formatNumber(product.price * product.count, "EN-US", "USD")];
    });

    autoTable(doc, {
      columns: columns,
      body: data,
      margin: { top: 70 },
      cellWidth: "wrap",
      headStyles: {
        fillColor: "#1721a8",
        textColor: "#fff",
      },
    });

    doc.addFont(font, "DejaVuSansCondensed", "normal");
    doc.setFont("DejaVuSansCondensed");
    doc.addImage(img, "PNG", 10, 10, 50, 20);
    doc.setFontSize(10.9);
    doc.text(`NOTIFICACION #${num}`, 165, 18);
    doc.setFontSize(8.17);
    doc.text(`Fecha emision: 05/08/2023`, 165, 23);
    doc.setDrawColor(212, 233, 238);
    doc.line(10, 33, 200, 33);
    doc.setFontSize(9);
    doc.text(`De`, 10, 40);
    doc.text(`EFA SISTEMAS, C.A`, 10, 45);
    doc.text(`RIF J-500929404`, 10, 50);
    doc.text(`CALLE 83 CORREDOR VIAL AMPARO LAS LOMAS`, 10, 55);
    doc.text(`CENTRO COMERCIAL FLEVI LOCAL 9 MARACAIBO, ZULIA`, 10, 60);
    doc.setDrawColor(212, 233, 238);
    doc.line(100, 35, 100, 65);
    doc.setFontSize(9);
    doc.text(`Para`, 105, 40);
    doc.text(nameFact.toUpperCase(), 105, 45);
    doc.text(`V-${dni}`, 105, 50);
    doc.text(address.toUpperCase(), 105, 55);

    doc.save("Factura.pdf");
  };

  return (
    <DashboardLayout order={true}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <ShoppingBagIcon
            sx={{
              color: "#D23F57",
            }}
          />
          <Typography
            color="initial"
            sx={{
              ml: 1,
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Detalles del Pedido
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          mt: 3,
        }}
      >
        <Paper
          className="paper"
          sx={{
            borderRadius: "8px",
            padding: " 2rem 1.5rem !important",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              boxAlign: "center",
              alignItems: "center",
              flexWrap: "wrap",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            {/* Empaquetado */}
            {status == 4 && (
              <Box
                sx={{
                  position: "relative",
                }}
              >
                {isLoadingOrder ? (
                  <Skeleton variant="circular" width={64} height={64} />
                ) : (
                  <Avatar
                    sx={{
                      width: "64px",
                      height: "64px",
                      backgroundColor: "#D23F57",
                    }}
                  >
                    <BoxClose
                      style={{
                        width: "35px",
                      }}
                    />
                  </Avatar>
                )}

                <Box
                  sx={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                  }}
                >
                  <Avatar
                    sx={{
                      display: "flex",
                      alignItems: "center",

                      justifyContent: "center",
                      width: "22px",
                      height: "22px",
                      backgroundColor: "#F3F5F9",
                      color: "red !important",
                    }}
                  >
                    <Check
                      style={{
                        color: "rgb(51, 208, 103) !important",
                      }}
                    />
                  </Avatar>
                </Box>
              </Box>
            )}

            {status == 0 && (
              <Box
                sx={{
                  position: "relative",
                }}
              >
                {isLoadingOrder ? (
                  <Skeleton variant="circular" width={64} height={64} />
                ) : (
                  <Avatar
                    sx={{
                      width: "64px",
                      height: "64px",
                      backgroundColor: "rgb(227, 233, 239);",
                    }}
                  >
                    <BoxClose
                      style={{
                        width: "35px",
                      }}
                    />
                  </Avatar>
                )}
              </Box>
            )}

            {/* Linea 1 */}
            {status != 0 && (
              <Box
                sx={{
                  flex: "1 1 0px",
                }}
              >
                {isLoadingOrder ? (
                  <Skeleton variant="rectangular" height={4} />
                ) : (
                  <Box
                    sx={{
                      height: "4px",
                      minWidth: "50px",
                      flex: "1 1 0px",
                      backgroundColor: "rgb(210, 63, 87)",
                    }}
                  ></Box>
                )}
              </Box>
            )}

            {status == 0 && (
              <Box
                sx={{
                  flex: "1 1 0px",
                }}
              >
                {isLoadingOrder ? (
                  <Skeleton variant="rectangular" height={4} />
                ) : (
                  <Box
                    sx={{
                      height: "4px",
                      minWidth: "50px",
                      flex: "1 1 0px",
                      backgroundColor: "rgb(227, 233, 239);",
                    }}
                  ></Box>
                )}
              </Box>
            )}

            {/* Camion */}
            {/* <Box
							sx={{
								position: "relative",
							}}
						>
							<Avatar
								sx={{
									width: "64px",
									height: "64px",
									backgroundColor: "#D23F57",
								}}
							>
								<Truck
									style={{
										width: "35px",
									}}
								/>
							</Avatar>

							<Box
								sx={{
									position: "absolute",
									right: 0,
									top: 0,
								}}
							>
								<Avatar
									sx={{
										display: "flex",
										alignItems: "center",

										justifyContent: "center",
										width: "22px",
										height: "22px",
										backgroundColor: "#F3F5F9",
										color: "red !important",
									}}
								>
									<Check
										style={{
											color: "rgb(51, 208, 103) !important",
										}}
									/>
								</Avatar>
							</Box>
						</Box> */}

            {/* Entregado */}
            {status == 1 && (
              <Box
                sx={{
                  position: "relative",
                }}
              >
                {isLoadingOrder ? (
                  <Skeleton variant="circular" width={64} height={64} />
                ) : (
                  <Avatar
                    sx={{
                      width: "64px",
                      height: "64px",
                      backgroundColor: "#D23F57",
                    }}
                  >
                    <Delivered
                      style={{
                        width: "35px",
                      }}
                    />
                  </Avatar>
                )}

                <Box
                  sx={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                  }}
                >
                  <Avatar
                    sx={{
                      display: "flex",
                      alignItems: "center",

                      justifyContent: "center",
                      width: "22px",
                      height: "22px",
                      backgroundColor: "#F3F5F9",
                      color: "red !important",
                    }}
                  >
                    <Check
                      style={{
                        color: "rgb(51, 208, 103) !important",
                      }}
                    />
                  </Avatar>
                </Box>
              </Box>
            )}

            {status != 1 && (
              <Box
                sx={{
                  position: "relative",
                }}
              >
                {isLoadingOrder ? (
                  <Skeleton variant="circular" width={64} height={64} />
                ) : (
                  <Avatar
                    sx={{
                      width: "64px",
                      height: "64px",
                      backgroundColor: "rgb(227, 233, 239);",
                    }}
                  >
                    <Delivered
                      style={{
                        width: "35px",
                      }}
                    />
                  </Avatar>
                )}
              </Box>
            )}
          </Box>
          {isLoadingOrder ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Skeleton variant="rounded" width={150} height={30} />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              {status == 0 && (
                <Alert
                  severity="warning"
                  sx={{
                    borderRadius: "300px",
                  }}
                >
                  Pendiente
                </Alert>
              )}

              {status == 1 && (
                <Alert
                  severity="success"
                  sx={{
                    borderRadius: "300px",
                  }}
                >
                  Producto entregado
                </Alert>
              )}

              {status == 2 && (
                <Alert
                  severity="error"
                  sx={{
                    borderRadius: "300px",
                  }}
                >
                  Orden cancelada, porfavor comunicarse con soporte
                </Alert>
              )}

              {status == 3 && (
                <Alert
                  severity="info"
                  sx={{
                    borderRadius: "300px",
                  }}
                >
                  Producto Empacado, en espera de retiro o envio
                </Alert>
              )}
            </Box>
          )}
        </Paper>
      </Box>
      <Box>
        <Paper
          sx={{
            boxShadow: "0px 4px 4px rgb(43 52 69 / 10%)",
          }}
        >
          <Paper
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "15px",
              backgroundColor: "rgb(243, 245, 249)",
              boxShadow: "none !important",
            }}
          >
            <Grid container spacing={2}>
              <Grid item lg={4} sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "rgb(125, 135, 156)",
                    fontWeight: "400",
                    lineHeight: "1.5",
                  }}
                >
                  N° Orden:
                </Typography>
                {isLoadingOrder ? (
                  <Skeleton variant="rounded" width={100} sx={{ ml: 1 }} />
                ) : (
                  <Typography
                    sx={{
                      fontSize: "14px",
                      ml: 1,
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    {id.substr(0, 8).toUpperCase()}
                  </Typography>
                )}
              </Grid>

              <Grid item lg={4} sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "rgb(125, 135, 156)",
                    fontWeight: "400",
                    lineHeight: "1.5",
                  }}
                >
                  Comprado el:
                </Typography>
                {isLoadingOrder ? (
                  <Skeleton variant="rounded" width={150} sx={{ ml: 1 }} />
                ) : (
                  <Typography
                    sx={{
                      fontSize: "14px",
                      ml: 1,
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    {moment(date).format("LL")}
                  </Typography>
                )}
              </Grid>

              <Grid item lg={4} sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "rgb(125, 135, 156)",
                    fontWeight: "400",
                    lineHeight: "1.5",
                  }}
                >
                  Entregado el:
                </Typography>
                {isLoadingOrder ? (
                  <Skeleton variant="rounded" width={150} sx={{ ml: 1 }} />
                ) : (
                  <Typography
                    sx={{
                      fontSize: "14px",
                      ml: 1,
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    {delivery ? moment(delivery).format("LL") : "En espera de entrega"}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Paper>
          {/* Producto */}
          {products.map((product) => (
            <Box
              key={product.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 16px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flex: "2 2 260px",
                  margin: "6px",
                  alignItems: "center",
                }}
              >
                {isLoadingOrder ? (
                  <Skeleton variant="circular" width={64} height={64} />
                ) : (
                  <Avatar
                    src={product.images}
                    sx={{
                      width: "64px",
                      height: "64px",
                    }}
                  />
                )}

                <Box sx={{ marginLeft: "20px" }}>
                  {isLoadingOrder ? (
                    <Skeleton variant="rounded" width={"200px"} />
                  ) : (
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                      }}
                    >
                      {product.name}
                    </Typography>
                  )}

                  {isLoadingOrder ? (
                    <Skeleton variant="rounded" width={"90px"} sx={{ mt: 1 }} />
                  ) : (
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "rgb(125, 135, 156)",
                      }}
                    >
                      {formatNumber(product.price, "EN-US", "USD")} x {product.count}
                    </Typography>
                  )}
                </Box>
              </Box>
              {reviews.map((review) =>
                review.productId == product.id ? (
                  <Box sx={{ marginRight: "20px" }}>
                    <Rating name="simple-controlled" value={review.rating} readOnly />
                  </Box>
                ) : (
                  <Box sx={{ marginRight: "20px" }}>
                    <Button variant="text" color="primary" size="small" onClick={() => handleOpen(product)}>
                      Calificar Producto
                    </Button>
                  </Box>
                )
              )}

              <ModalRanked open={open} setOpen={setOpen} product={info} order={id} />
            </Box>
          ))}
        </Paper>
      </Box>
      <Box
        sx={{
          mt: 3,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <Paper className="paper" sx={{ padding: "20px 30px !important" }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                Historial
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 2,
                }}
              >
                <Alert severity="info" size="small">
                  En Construccion
                </Alert>
              </Box>

              {/* <Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									mt: 2,
								}}
							>
								<Typography sx={{ fontSize: "14px" }}>Producto Empacado</Typography>
								<Typography sx={{ fontSize: "14px" }}>17 Oct , 2022 12:20</Typography>
							</Box>

							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									mt: 2,
								}}
							>
								<Typography sx={{ fontSize: "14px" }}>Producto En espera de retiro</Typography>
								<Typography sx={{ fontSize: "14px" }}>17 Oct , 2022 12:20</Typography>
							</Box>

							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									mt: 2,
								}}
							>
								<Typography sx={{ fontSize: "14px" }}>Producto Retirado Cliente</Typography>
								<Typography sx={{ fontSize: "14px" }}>17 Oct , 2022 12:20</Typography>
							</Box> */}
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper className="paper" sx={{ padding: "20px 30px !important" }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                Resumen Total
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 3,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "rgb(125, 135, 156)",
                  }}
                >
                  Subtotal
                </Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>{formatNumber(total, "EN-US", "USD")}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "rgb(125, 135, 156)",
                  }}
                >
                  Descuento
                </Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>- {formatNumber(applyDiscount(total, discount), "EN-US", "USD")}</Typography>
              </Box>
              <Divider
                sx={{
                  mt: 1,
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  Total
                </Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>{formatNumber(total - applyDiscount(total, discount), "EN-US", "USD")}</Typography>
              </Box>
              <Box
                sx={{
                  mt: 2,
                }}
              >
                <Button variant="contained" color="primary" fullWidth size="small" endIcon={<BrowserUpdatedIcon />} onClick={handleBill}>
                  Factura
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </DashboardLayout>
  );
};
