import { Box, Drawer } from "@mui/material";
import { SearchBar } from "../Search/SearchBar";

export const SearchDrawer = ({ open, setOpen }) => {
    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setOpen(open);
    };
    return (
        <Drawer
            sx={{
                width: "100vw",
                height: "80px",
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: "100vw",
                    height: "80px",
                    boxSizing: "border-box",
                },
            }}
            anchor="top"
            open={open}
            onClose={toggleDrawer(false)}
        >
            <Box
                sx={{
                    mt: 2,
                    px: 2,
                }}
            >
                <SearchBar />
            </Box>
        </Drawer>
    );
};
