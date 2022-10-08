import { Box } from "@mui/material";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";

export const LayoutComponent = ({ children }) => {
	return (
		<>
			<Box>
				<Navbar />
			</Box>

			{children}

			<Footer />
		</>
	);
};
