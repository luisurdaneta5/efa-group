import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import { Link } from "react-router-dom";
import LogoWhite from "../../../assets/images/logo-white.png";
import "./styles.css";

export const Footer = ({ rss, general }) => {
  return (
    <footer>
      <Box
        sx={{
          background: "#0c0e30",
          mt: 5,
        }}
      >
        <Container maxWidth="lg" sx={{ padding: "1rem" }}>
          <Grid
            container
            spacing={5}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "80px",
              paddingBottom: "80px",
            }}
          >
            <Grid item sm={4} md={4} lg={4} xl={4}>
              <Box>
                <Link to="/">
                  <Box
                    component="img"
                    src={LogoWhite}
                    alt=""
                    sx={{
                      mt: { xs: 0, sm: -9, md: "-5px", lg: "60px" },
                      diplsay: "block",
                      width: {
                        xs: "50%",
                        sm: "50%",
                        md: "90%",
                        lg: "90%",
                        xl: "90%%",
                      },
                    }}
                  />
                </Link>
              </Box>
              <Typography variant="body1" sx={{ color: "#AEB4BE", mt: 2 }}>
                {general.description}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              lg={3}
              xl={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "24px",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "25px",
                    fontWeight: 600,
                    marginbottom: "20px",
                    lineHeight: "1",
                    color: "white",
                  }}
                >
                  Atencion al cliente
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mt: 2,
                }}
              >
                <Link to={"/support"} className={"footer-link"}>
                  Centro de Ayuda
                </Link>
                <Link to={"/support"} className={"footer-link"}>
                  Como Comprar
                </Link>
                <Link to={"/support"} className={"footer-link"}>
                  Rastrea tu Orden
                </Link>
                <Link to={"/support"} className={"footer-link"}>
                  Terms & Condiciones
                </Link>
              </Box>
            </Grid>

            <Grid item sm={4} md={4} lg={3} xl={3}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "25px",
                    fontWeight: 600,
                    marginbottom: "20px",
                    lineHeight: "1",
                    color: "white",
                  }}
                >
                  Contactanos
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                }}
              >
                <Typography className={"typography"}>{general.address}</Typography>
                <Typography className={"typography"}>Email: {general.email}</Typography>
                <Typography className={"typography"}>Phone: {rss.whatsapp}</Typography>
              </Box>
              <Box sx={{ display: "flex", mt: 2, ml: 1 }}>
                {rss.facebook && (
                  <a target="_blank" href={rss.facebook}>
                    <i
                      className="fa-brands fa-facebook-f"
                      style={{
                        color: "white",
                        fontSize: "15px",
                      }}
                    ></i>
                  </a>
                )}

                {rss.twitter && (
                  <a target="_blank" href={rss.twitter}>
                    <i
                      className="fa-brands fa-twitter"
                      style={{
                        color: "white",
                        fontSize: "15px",
                        marginLeft: "20px",
                      }}
                    ></i>
                  </a>
                )}

                {rss.instagram && (
                  <a target="_blank" href={rss.instagram}>
                    <i
                      className="fa-brands fa-instagram"
                      style={{
                        color: "white",
                        fontSize: "15px",
                        marginLeft: "20px",
                      }}
                    ></i>
                  </a>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};
