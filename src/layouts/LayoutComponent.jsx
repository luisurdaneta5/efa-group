import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Fab } from "@mui/material";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";

export const LayoutComponent = ({ children }) => {
	return (
		<>
			<Box>
				<Navbar />
			</Box>

			{children}

			<Box component='a' href='https://web.whatsapp.com' target='_blank'>
				<Fab
					aria-label='whatsapp'
					sx={{
						position: "fixed",
						bottom: 60,
						right: "4%",
						width: "70px",
						height: "70px",
						backgroundColor: "#0d9f16",
						":hover": {
							backgroundColor: "#0ed11c",
						},
					}}
				>
					<WhatsAppIcon
						sx={{
							fontSize: "30px",
							color: "white",
						}}
					/>
				</Fab>
			</Box>

			<Box>
				<Footer />
			</Box>
		</>
	);
};
