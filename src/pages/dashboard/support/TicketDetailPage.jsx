import {
	Box,
	Typography,
	Button,
	Grid,
	Avatar,
	FormControl,
	FormLabel,
	FormHelperText,
	TextareaAutosize,
	Divider,
} from "@mui/material";
import { DashboardLayout } from "../DashboardLayout";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import img_user from "../../../assets/images/users/yo.jpg";
import { Link } from "react-router-dom";

export const TicketDetailPage = () => {
	return (
		<DashboardLayout support={true}>
			<Box
				sx={{
					paddingLeft: "10px",
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
					<HeadsetMicOutlinedIcon
						sx={{
							color: "#D23F57",
						}}
					/>

					<Typography
						color='initial'
						sx={{
							ml: 1,
							fontSize: "25px",
							fontWeight: "bold",
						}}
					>
						Ticket N° 1202562
					</Typography>
				</Box>
				<Box>
					<Link to='/dashboard/support/tickets'>
						<Button variant='text' color='primary'>
							Volver
						</Button>
					</Link>
				</Box>
			</Box>

			<Box sx={{ mt: 4, display: "flex", paddingLeft: "10px" }}>
				<Box>
					<Avatar src={img_user} />
				</Box>
				<Box sx={{ ml: 2.5 }}>
					<Box>
						<Typography
							sx={{
								fontWeight: 500,
								fontSize: "16px",
							}}
						>
							Luis Urdaneta
						</Typography>
						<Typography
							sx={{
								fontSize: "14px",
								color: " rgb(125, 135, 156);",
							}}
						>
							4:40PM | 14 Oct 2022
						</Typography>
					</Box>
					<Box>
						<Typography sx={{ fontSize: "14px" }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Ipsum velit amet, aliquam massa tellus.
							Condimentum sit at pharetra, congue. Sit mattis amet
							nec pharetra odio. Interdum lorem vestibulum et amet
							et duis placerat. Ac mattis massa duis mi tellus
							sed. Mus eget in fames urna, ornare nunc, tincidunt
							tincidunt interdum. Amet aliquet pharetra rhoncus
							scelerisque pulvinar dictumst at sit. Neque tempor
							tellus ac nullam. Etiam massa tempor eu risus fusce
							aliquam.
						</Typography>
					</Box>
				</Box>
			</Box>
			<Divider sx={{ mt: 3 }} />
			<Box
				sx={{
					mt: 3,
				}}
			>
				<FormControl fullWidth>
					<TextareaAutosize
						maxRows={5}
						placeholder='Escribe tu mensaje aqui...'
						style={{
							padding: 10,
							height: 200,
							fontSize: "14px",
						}}
					></TextareaAutosize>
				</FormControl>

				<Box
					sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}
				>
					<Button variant='contained' color='primary' size='small'>
						enviar
					</Button>
				</Box>
			</Box>
		</DashboardLayout>
	);
};
