import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Fab } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingCategories } from "../store/slices/ui";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";

export const LayoutComponent = ({ children }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(startLoadingCategories());
	}, [dispatch]);

	const { general, rss } = useSelector((state) => state.config);
	return (
		<>
			<Box>
				<Navbar email={general.email} whatsapp={rss.whatsapp} />
			</Box>

			{children}

			<Box component='a' href={`https://wa.me/${rss.whatsapp}`} target='_blank'>
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
				<Footer rss={rss} general={general} />
			</Box>
		</>
	);
};
