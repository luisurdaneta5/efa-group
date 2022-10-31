import { Box, Toolbar } from "@mui/material";
import { Navbar } from "./DashbordComponents/Navbar/Navbar";
import { SideBar } from "./DashbordComponents/SideBar/SideBar";

const drawerWidth = 280;
export const LayoutAdminComponent = ({ children }) => {
	return (
		<Box sx={{ display: "flex" }}>
			<Navbar drawerWidth={drawerWidth} />
			<SideBar drawerWidth={drawerWidth} />
			<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
};
