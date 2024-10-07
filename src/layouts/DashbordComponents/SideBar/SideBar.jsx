import AddCardIcon from "@mui/icons-material/AddCard";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListAltIcon from "@mui/icons-material/ListAlt";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import { Box, Divider, Drawer, Toolbar } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Customers } from "../../../assets/icons/customers.svg";
import { ReactComponent as Gear } from "../../../assets/icons/gear.svg";
import { ReactComponent as Orders } from "../../../assets/icons/orders.svg";
import { ReactComponent as Products } from "../../../assets/icons/products.svg";
import { ReactComponent as Reviews } from "../../../assets/icons/reviews.svg";
import logoWhite from "../../../assets/images/logo-white.png";
import { setLogout } from "../../../store/slices/auth/authSlices";
import "./styles.css";

export const SideBar = ({ drawerWidth = 240 }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [openOrder, setOpenOrder] = useState(false);
    const [openExchange, setOpenExchange] = useState(false);

    const handleClickOpenOrder = () => {
        setOpenOrder(!openOrder);
    };

    const handleClickOpenExchange = () => {
        setOpenExchange(!openExchange);
    };

    const handleLogout = () => {
        localStorage.clear();
        dispatch(setLogout());
        navigate("/");
    };
    return (
        <Box
            component="nav"
            sx={{
                width: {
                    sm: drawerWidth,
                },
                flexShrink: {
                    sm: 0,
                },
            }}
        >
            <Drawer
                variant="permanent"
                open={false}
                sx={{
                    display: {
                        xs: "block",
                    },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                        backgroundColor: "rgb(43, 52, 69)",
                    },
                }}
            >
                <Toolbar>
                    <Link to="/">
                        <Box
                            component="img"
                            src={logoWhite}
                            width="80%"
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignContent: "center",
                                alignItems: "center",
                                ml: 2,
                                p: 2,
                            }}
                        />
                    </Link>
                </Toolbar>
                <Divider />
                <Box
                    sx={{
                        paddingLeft: "16px",
                        paddingRight: "16px",
                        mt: 5,
                    }}
                >
                    <List
                        sx={{
                            width: "100%",
                            maxWidth: 360,
                            color: "white",
                        }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        <Link to="/admin/dashboard" sx={{ color: "red" }}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DashboardIcon
                                        sx={{
                                            color: "white",
                                            fontSize: "20px",
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Inicio"
                                    sx={{
                                        ".MuiListItemText-primary": {
                                            color: "white",
                                        },
                                    }}
                                />
                            </ListItemButton>
                        </Link>

                        <Link to="/admin/dashboard/products">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Products
                                        style={{
                                            color: "white",
                                            width: "20px",
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Productos"
                                    sx={{
                                        ".MuiListItemText-primary": {
                                            color: "white",
                                        },
                                    }}
                                />
                            </ListItemButton>
                        </Link>

                        <ListItemButton onClick={handleClickOpenOrder}>
                            <ListItemIcon>
                                <Orders style={{ color: "white", width: "20px" }} />
                            </ListItemIcon>
                            <ListItemText
                                primary="Ordenes"
                                sx={{
                                    ".MuiListItemText-primary": {
                                        color: "white",
                                    },
                                }}
                            />
                            {openOrder ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        <Collapse in={openOrder} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <Link to="/admin/dashboard/orders">
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <NewReleasesIcon
                                                style={{
                                                    color: "white",
                                                    width: "20px",
                                                }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Nuevas"
                                            sx={{
                                                ".MuiListItemText-primary": {
                                                    color: "white",
                                                },
                                            }}
                                        />
                                    </ListItemButton>
                                </Link>

                                <Link to="/admin/dashboard/orders/history">
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <ListAltIcon
                                                style={{
                                                    color: "white",
                                                    width: "20px",
                                                }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Historial"
                                            sx={{
                                                ".MuiListItemText-primary": {
                                                    color: "white",
                                                },
                                            }}
                                        />
                                    </ListItemButton>
                                </Link>
                            </List>
                        </Collapse>

                        <ListItemButton onClick={handleClickOpenExchange}>
                            <ListItemIcon>
                                <AddCardIcon style={{ color: "white", width: "20px" }} />
                            </ListItemIcon>
                            <ListItemText
                                primary="Recargas"
                                sx={{
                                    ".MuiListItemText-primary": {
                                        color: "white",
                                    },
                                }}
                            />
                            {openExchange ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        <Collapse in={openExchange} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <Link to="/admin/dashboard/exchange">
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <NewReleasesIcon
                                                style={{
                                                    color: "white",
                                                    width: "20px",
                                                }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Nuevas"
                                            sx={{
                                                ".MuiListItemText-primary": {
                                                    color: "white",
                                                },
                                            }}
                                        />
                                    </ListItemButton>
                                </Link>

                                <Link to="/admin/dashboard/exchange/history">
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <ListAltIcon
                                                style={{
                                                    color: "white",
                                                    width: "20px",
                                                }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Historial"
                                            sx={{
                                                ".MuiListItemText-primary": {
                                                    color: "white",
                                                },
                                            }}
                                        />
                                    </ListItemButton>
                                </Link>
                            </List>
                        </Collapse>

                        <Link to="/admin/dashboard/customers">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Customers
                                        style={{
                                            color: "white",
                                            width: "20px",
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Clientes"
                                    sx={{
                                        ".MuiListItemText-primary": {
                                            color: "white",
                                        },
                                    }}
                                />
                            </ListItemButton>
                        </Link>

                        <Link to="/admin/dashboard/reviews">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Reviews
                                        style={{
                                            color: "white",
                                            width: "20px",
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Reseñas"
                                    sx={{
                                        ".MuiListItemText-primary": {
                                            color: "white",
                                        },
                                    }}
                                />
                            </ListItemButton>
                        </Link>

                        <Link to="/admin/dashboard/categories">
                            <ListItemButton>
                                <ListItemIcon>
                                    <CategoryIcon
                                        style={{
                                            color: "white",
                                            width: "20px",
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Categorias"
                                    sx={{
                                        ".MuiListItemText-primary": {
                                            color: "white",
                                        },
                                    }}
                                />
                            </ListItemButton>
                        </Link>

                        <Link to="/admin/dashboard/configuration/577a409c-fcb5-4921-b098-37ea1675dc96">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Gear
                                        style={{
                                            color: "white",
                                            width: "20px",
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Configuracion"
                                    sx={{
                                        ".MuiListItemText-primary": {
                                            color: "white",
                                        },
                                    }}
                                />
                            </ListItemButton>
                        </Link>

                        <ListItemButton onClick={handleLogout}>
                            <ListItemIcon>
                                <ExitToAppIcon style={{ color: "white", width: "20px" }} />
                            </ListItemIcon>
                            <ListItemText
                                primary="Salir"
                                sx={{
                                    ".MuiListItemText-primary": {
                                        color: "white",
                                    },
                                }}
                            />
                        </ListItemButton>
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
};
