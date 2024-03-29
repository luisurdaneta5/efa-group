import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, ClickAwayListener, Container, Grow, MenuItem, MenuList, Paper, Popper } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { startLoadingProducts } from "../../../store/slices/ui";
import { MenuDrawer } from "../Drawer/MenuDrawer";
import { SearchDrawer } from "../Drawer/SearchDrawer";
import "./style.css";

export const MenuOptions = (props) => {
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.ui);
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const navigate = useNavigate();
    const [drawer, setDrawer] = useState(false);
    const [drawerSearch, setDrawerSearch] = useState(false);

    const handleOpenDrawer = () => {
        setDrawer(true);
    };

    const handleOpenDrawerSearch = () => {
        setDrawerSearch(true);
    };

    handleOpenDrawerSearch;
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (category) => {
        if (category.isTrusted) {
            setOpen(false);
        } else {
            dispatch(startLoadingProducts(category));
            navigate(`/search/${category}`);
            setOpen(false);
        }
    };

    function handleListKeyDown(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === "Escape") {
            setOpen(false);
        }
    }

    const prevOpen = React.useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <>
            <Paper
                elevation={2}
                className={"css-1e2nl9k"}
                sx={{
                    height: {
                        xs: "63px",
                        sm: "63px",
                        md: "63px",
                        lg: "63px",
                        xl: "63px",
                    },
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{
                        display: "flex",
                        flexDirection: {
                            xs: "row",
                            sm: "row",
                            md: "row",
                            lg: "row",
                            xl: "row",
                        },
                        justifyContent: "space-between",
                    }}
                >
                    <Box className={"css-udnl1f"}>
                        <Button
                            variant="text"
                            color="inherit"
                            className={"css-ww2vzv"}
                            ref={anchorRef}
                            id="composition-button"
                            aria-controls={open ? "composition-menu" : undefined}
                            aria-expanded={open ? "true" : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                        >
                            <DashboardIcon fontSize="small" />

                            <p className={"css-dttbdp"}>Categorias</p>

                            <ChevronRightIcon fontSize="small" className={"dropdown-icon css-1k33q06"} />
                        </Button>
                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} placement="bottom-start" transition disablePortal className={"css-v5drnb"}>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                        transformOrigin: placement === "bottom-start" ? "left top" : "left bottom",
                                    }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList
                                                autoFocusItem={open}
                                                id="composition-menu"
                                                aria-labelledby="composition-button"
                                                onKeyDown={handleListKeyDown}
                                                sx={{
                                                    boxShadow: "rgb(43 52 69 / 10%) 0px 4px 16px;",
                                                }}
                                            >
                                                {categories.map((category) => (
                                                    <MenuItem key={category.id} onClick={() => handleClose(category.name)}>
                                                        <Box>
                                                            <img src={category.icon} alt="" className="svg-size" />
                                                        </Box>
                                                        <Box
                                                            sx={{
                                                                ml: 2,
                                                            }}
                                                        >
                                                            {category.name}
                                                        </Box>
                                                    </MenuItem>
                                                ))}
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </Box>
                    <Box
                        sx={{
                            display: {
                                xs: "flex",
                                sm: "none",
                                md: "none",
                                lg: "none",
                                xl: "none",
                            },
                        }}
                        onClick={handleOpenDrawerSearch}
                    >
                        <SearchIcon
                            sx={{
                                fontSize: "40px",
                            }}
                        />
                    </Box>
                    <SearchDrawer open={drawerSearch} setOpen={setDrawerSearch} />
                    <Box
                        sx={{
                            display: {
                                xs: "flex",
                                sm: "none",
                                md: "none",
                                lg: "none",
                                xl: "none",
                            },
                        }}
                        onClick={handleOpenDrawer}
                    >
                        <MenuIcon
                            sx={{
                                fontSize: "40px",
                            }}
                        />
                    </Box>
                    <MenuDrawer open={drawer} setOpen={setDrawer} />

                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                sm: "flex",
                                md: "flex",
                            },
                        }}
                    >
                        <Link className={"links"} to={`/`}>
                            <MenuItem>Inicio</MenuItem>
                        </Link>
                        <MenuItem>
                            <Link className={"links"} to={`/about-us`}>
                                Quienes Somos
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link className={"links"} to={`/contact-us`}>
                                Contactanos
                            </Link>
                        </MenuItem>
                    </Box>
                </Container>
            </Paper>
        </>
    );
};
