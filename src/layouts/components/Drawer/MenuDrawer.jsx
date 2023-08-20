import { Drawer, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

export const MenuDrawer = ({ open, setOpen }) => {
    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setOpen(open);
    };
    return (
        <Drawer
            sx={{
                width: "240px",
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: "240px",
                    boxSizing: "border-box",
                },
            }}
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
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
        </Drawer>
    );
};
